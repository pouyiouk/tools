/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// In this file, all methods are synchronous. This is pretty gross since the rest of Rome is async everything.
// This is required so we can integrate the project config code in third-party integrations with sync architectures.
// Project configs are initialized very infrequently anyway so we can live with the extremely minor perf hit.
import {Consumer} from "@internal/consume";
import {
	InvalidLicenses,
	PartialProjectConfig,
	ProjectConfig,
	ProjectConfigMeta,
	ProjectConfigMetaHard,
	ProjectConfigObjects,
	ProjectConfigTarget,
	createDefaultProjectConfig,
} from "./types";
import {parsePathPatternsFile} from "@internal/path-match";
import {
	arrayOfPatterns,
	arrayOfStrings,
	getParentConfigDependencies,
	mergeAbsoluteFilePathSets,
	mergeArrays,
} from "./utils";
import {ConsumeConfigResult, consumeConfig} from "@internal/codec-config";
import {AbsoluteFilePath, AbsoluteFilePathSet} from "@internal/path";
import {CachedFileReader, exists, lstat, readDirectory} from "@internal/fs";
import {parseSemverRange} from "@internal/codec-semver";
import {descriptions} from "@internal/diagnostics";
import {
	PROJECT_CONFIG_PACKAGE_JSON_FIELD,
	VCS_IGNORE_FILENAMES,
} from "./constants";
import {lintRuleNames} from "@internal/compiler";
import {sha256} from "@internal/string-utils";

type NormalizedPartial = {
	partial: PartialProjectConfig;
	meta: ProjectConfigMetaHard;
};

function categoryExists(consumer: Consumer): boolean {
	if (!consumer.exists()) {
		return false;
	}

	const value = consumer.asUnknown();
	if (typeof value === "boolean") {
		consumer.unexpected(descriptions.PROJECT_CONFIG.BOOLEAN_CATEGORY(value));
		return false;
	}

	return true;
}

export async function loadCompleteProjectConfig(
	projectDirectory: AbsoluteFilePath,
	configPath: AbsoluteFilePath,
	reader: CachedFileReader,
): Promise<{
	meta: ProjectConfigMeta;
	config: ProjectConfig;
}> {
	// TODO use consumer.capture somehow here to aggregate errors
	const {partial, meta} = await loadPartialProjectConfig({
		reader,
		rootProjectDirectory: projectDirectory,
		projectDirectory,
		configPath,
	});
	const {consumer} = meta;

	// Produce a defaultConfig with some directory specific values
	const _defaultConfig: ProjectConfig = createDefaultProjectConfig();
	const defaultConfig: ProjectConfig = {
		..._defaultConfig,
		vcs: {
			..._defaultConfig.vcs,
			root: projectDirectory,
		},
	};

	const name = consumer.get("name").asString(
		`project-${projectDirectory.getBasename()}`,
	);

	const config: ProjectConfig = {
		...defaultConfig,
		name,
		root: partial.root === undefined ? defaultConfig.root : partial.root,
		...mergePartialConfig(defaultConfig, partial),
	};

	// Infer VCS ignore files as lint ignore rules
	for (const filename of VCS_IGNORE_FILENAMES) {
		const possiblePath = config.vcs.root.append(filename);
		meta.configDependencies.add(possiblePath);

		if (await exists(possiblePath)) {
			const file = await reader.readFileText(possiblePath);

			consumer.handleThrownDiagnostics(() => {
				const patterns = parsePathPatternsFile({
					input: file,
					path: possiblePath,
				});

				// TODO: Maybe these are useful in other places?
				config.lint.ignore = [...config.lint.ignore, ...patterns];
			});
		}
	}

	// Calculate config hash keys
	await Promise.all(
		Array.from(
			meta.configDependencies,
			async (path) => {
				if (await exists(path)) {
					const content = await reader.readFile(path);
					const hash = sha256.sync(content);
					const key = projectDirectory.relative(path).join();
					meta.configCacheKeys[key] = hash;
				}
			},
		),
	);

	return {
		config,
		meta,
	};
}

type LoadProjectConfigContext = {
	rootProjectDirectory: AbsoluteFilePath;
	projectDirectory: AbsoluteFilePath;
	configPath: AbsoluteFilePath;
	reader: CachedFileReader;
};

async function loadPartialProjectConfig(
	context: LoadProjectConfigContext,
): Promise<NormalizedPartial> {
	const configFile = await context.reader.readFileText(context.configPath);
	const res = consumeConfig({
		path: context.configPath,
		input: configFile,
	});

	return normalizeProjectConfig(res, context);
}

export async function normalizeProjectConfig(
	res: ConsumeConfigResult,
	context: LoadProjectConfigContext,
): Promise<NormalizedPartial> {
	const {configPath, projectDirectory, rootProjectDirectory} = context;
	let {consumer} = res;

	let configSourceSubKey;
	let inferredName: undefined | string;
	const isInPackageJson = configPath.getBasename() === "package.json";
	if (isInPackageJson) {
		// Infer name from package.json
		inferredName = consumer.get("name").asStringOrVoid();

		consumer = consumer.get(PROJECT_CONFIG_PACKAGE_JSON_FIELD);
		configSourceSubKey = PROJECT_CONFIG_PACKAGE_JSON_FIELD;
	}

	const config: PartialProjectConfig = {
		presets: [],
		format: {},
		compiler: {},
		bundler: {},
		cache: {},
		lint: {},
		resolver: {},
		develop: {},
		typeCheck: {},
		tests: {},
		files: {},
		vcs: {},
		dependencies: {},
		targets: new Map(),
		integrations: {
			eslint: {},
		},
	};

	if (inferredName !== undefined) {
		config.name = inferredName;
	}

	const meta: ProjectConfigMetaHard = {
		projectDirectory,
		configPath,
		consumer,
		consumersChain: [consumer],
		configCacheKeys: {},
		configSourceSubKey,
		configDependencies: new AbsoluteFilePathSet(),
	};

	// We never use `name` here but it's used in `loadCompleteProjectConfig`
	consumer.markUsedProperty("name");

	if (consumer.has("version")) {
		const version = consumer.get("version");

		consumer.handleThrownDiagnostics(() => {
			config.version = parseSemverRange({
				path: consumer.filename,
				input: version.asString(),
				offsetPosition: version.getLocation("inner-value").start,
			});

			// TODO verify that config.version range satisfies current version
		});
	}

	if (consumer.has("root")) {
		config.root = consumer.get("root").asBoolean();
	}

	const cache = consumer.get("cache");
	if (categoryExists(cache)) {
		// TODO
	}

	const resolver = consumer.get("resolver");
	if (categoryExists(resolver)) {
		// TODO
	}

	const bundler = consumer.get("bundler");
	if (categoryExists(bundler)) {
		if (bundler.has("externals")) {
			config.bundler.externals = arrayOfStrings(bundler.get("externals"));
		}
	}

	const typeChecking = consumer.get("typeChecking");
	if (categoryExists(typeChecking)) {
		if (typeChecking.has("enabled")) {
			config.typeCheck.enabled = typeChecking.get("enabled").asBoolean();
		}

		if (typeChecking.has("libs")) {
			const libs = await normalizeTypeCheckingLibs(
				projectDirectory,
				typeChecking.get("libs"),
			);
			config.typeCheck.libs = libs.files;
			meta.configDependencies = meta.configDependencies.concat(
				libs.directories,
				libs.files,
			);
		}
	}

	const dependencies = consumer.get("dependencies");
	if (categoryExists(dependencies)) {
		if (dependencies.has("enabled")) {
			config.dependencies.enabled = dependencies.get("enabled").asBoolean();
		}

		if (dependencies.has("exceptions")) {
			const exceptions = dependencies.get("exceptions").asMap();

			const invalidLicenses = exceptions.get("invalidLicenses");
			if (invalidLicenses) {
				let licenses: InvalidLicenses = new Map();
				for (const [name, packages] of invalidLicenses.asMap()) {
					licenses.set(
						name,
						packages.asMappedArray((c) => {
							const packageValue = c.asString();
							// inside the config, we store packageName@version
							const {0: name, 1: version} = packageValue.split("@");
							return {
								name,
								// we might not have the version, so we assume that it is the latest
								range: parseSemverRange({input: version || "latest"}),
							};
						}),
					);
				}
				config.dependencies.exceptions = {
					invalidLicenses: licenses,
				};
			}
		}
	}

	const lint = consumer.get("lint");
	if (categoryExists(lint)) {
		if (lint.has("ignore")) {
			config.lint.ignore = arrayOfPatterns(lint.get("ignore"));
		}

		if (lint.has("globals")) {
			config.lint.globals = arrayOfStrings(lint.get("globals"));
		}

		if (lint.has("disabledRules")) {
			config.lint.disabledRules = lint.get("disabledRules").asMappedArray((item) =>
				item.asStringSet(lintRuleNames)
			);
		}

		if (lint.has("requireSuppressionExplanations")) {
			config.lint.requireSuppressionExplanations = lint.get(
				"requireSuppressionExplanations",
			).asBoolean();
		}
	}

	const format = consumer.get("format");
	if (categoryExists(format)) {
		if (format.has("enabled")) {
			config.format.enabled = format.get("enabled").asBoolean();
		}

		if (format.has("indentStyle")) {
			const indentStyle = format.get("indentStyle").asStringSet(["tab", "space"]);
			config.format.indentStyle = indentStyle;

			// If there was an indent style specified without a size, default to 2 for spaces, and 1 for tabs
			if (!format.has("indentSize")) {
				config.format.indentSize = indentStyle === "space" ? 2 : 1;
			}
		}

		if (format.has("indentSize")) {
			// Set a range to prevent wacky behaviour
			config.format.indentSize = format.get("indentSize").asNumberInRange({
				min: 0,
				max: 10,
			});
		}
	}

	const tests = consumer.get("tests");
	if (categoryExists(tests)) {
		if (tests.has("ignore")) {
			config.tests.ignore = arrayOfPatterns(tests.get("ignore"));
		}
	}

	const develop = consumer.get("develop");
	if (categoryExists(develop)) {
		if (develop.has("serveStatic")) {
			config.develop.serveStatic = develop.get("serveStatic").asBoolean();
		}
	}

	const files = consumer.get("files");
	if (categoryExists(files)) {
		if (files.has("vendorPath")) {
			config.files.vendorPath = projectDirectory.resolve(
				files.get("vendorPath").asString(),
			);
		}

		if (files.has("maxSize")) {
			config.files.maxSize = files.get("maxSize").asNumber();
		}

		if (files.has("maxSizeIgnore")) {
			config.files.maxSizeIgnore = arrayOfPatterns(files.get("maxSizeIgnore"));
		}

		if (files.has("assetExtensions")) {
			config.files.assetExtensions = files.get("assetExtensions").asMappedArray((
				item,
			) => item.asString());
		}
	}

	const vcs = consumer.get("vcs");
	if (categoryExists(vcs)) {
		if (vcs.has("root")) {
			config.vcs.root = projectDirectory.resolve(vcs.get("root").asString());
		}
	}

	const compiler = consumer.get("compiler");
	if (categoryExists(compiler)) {
		// TODO
	}

	const targets = consumer.get("targets");
	if (categoryExists(targets)) {
		for (const [name, object] of targets.asMap()) {
			const target: ProjectConfigTarget = {
				constraints: object.get("constraints").asImplicitMappedArray((item) =>
					item.asString()
				),
			};
			object.enforceUsedProperties("config target property");
			config.targets.set(name, target);
		}
	}

	const integrations = consumer.get("integrations");
	if (integrations.exists()) {
		const eslint = integrations.get("eslint");
		if (categoryExists(eslint)) {
			if (eslint.has("enabled")) {
				config.integrations.eslint.enabled = eslint.get("enabled").asBoolean();
			}
		}
	}

	meta.configDependencies = meta.configDependencies.concat(
		getParentConfigDependencies({
			projectDirectory,
			rootProjectDirectory,
			partialConfig: config,
		}),
	);

	// Need to get this before enforceUsedProperties so it will be flagged
	const extendsProp = consumer.get("extends");

	// Flag unknown properties
	consumer.enforceUsedProperties("config property");

	let normalized: NormalizedPartial = {
		partial: config,
		meta,
	};

	if (extendsProp.exists()) {
		for (const elem of extendsProp.asImplicitArray()) {
			normalized = await extendProjectConfig(
				elem,
				{...context, projectDirectory, rootProjectDirectory},
				normalized,
			);
		}
	}

	return normalized;
}

async function normalizeTypeCheckingLibs(
	projectDirectory: AbsoluteFilePath,
	consumer: Consumer,
): Promise<{
	directories: AbsoluteFilePath[];
	files: AbsoluteFilePathSet;
}> {
	const libFiles: AbsoluteFilePathSet = new AbsoluteFilePathSet();

	// Normalize library directories
	const directories: AbsoluteFilePath[] = arrayOfStrings(consumer).map((
		libDirectory,
	) => projectDirectory.resolve(libDirectory));

	// Crawl library directories and add their files
	for (const directory of directories) {
		const files = await readDirectory(directory);
		for (const file of files) {
			const stats = await lstat(file);
			if (stats.isFile()) {
				libFiles.add(file);
			} else if (stats.isDirectory()) {
				directories.push(file);
			}
		}
	}

	return {
		files: libFiles,
		directories,
	};
}

async function extendProjectConfig(
	extendsStrConsumer: Consumer,
	context: LoadProjectConfigContext,
	{partial: config, meta}: NormalizedPartial,
): Promise<NormalizedPartial> {
	const extendsRelative = extendsStrConsumer.asString();

	if (extendsRelative === "parent") {
		// TODO maybe do some magic here?
	}

	const extendsPath = context.projectDirectory.resolve(extendsRelative);
	const {partial: extendsObj, meta: extendsMeta} = await loadPartialProjectConfig({
		...context,
		projectDirectory: extendsPath.getParent(),
		configPath: extendsPath,
	});

	// Check for recursive config
	if (extendsMeta.configDependencies.has(meta.configPath)) {
		throw extendsStrConsumer.unexpected(
			descriptions.PROJECT_CONFIG.RECURSIVE_CONFIG,
		);
	}

	const merged: PartialProjectConfig = mergePartialConfig(extendsObj, config);

	const presets = mergeArrays(extendsObj.presets, config.presets);
	if (presets !== undefined) {
		merged.presets = presets;
	}

	const lintIgnore = mergeArrays(extendsObj.lint.ignore, config.lint.ignore);
	if (lintIgnore !== undefined) {
		merged.lint.ignore = lintIgnore;
	}

	const lintGlobals = mergeArrays(extendsObj.lint.globals, config.lint.globals);
	if (lintGlobals !== undefined) {
		merged.lint.globals = lintGlobals;
	}

	const lintDisabledRules = mergeArrays(
		extendsObj.lint.disabledRules,
		config.lint.disabledRules,
	);
	if (lintDisabledRules !== undefined) {
		merged.lint.disabledRules = lintDisabledRules;
	}

	const testingIgnore = mergeArrays(
		extendsObj.tests.ignore,
		config.tests.ignore,
	);
	if (testingIgnore !== undefined) {
		merged.tests.ignore = testingIgnore;
	}

	const typeCheckingLibs = mergeAbsoluteFilePathSets(
		extendsObj.typeCheck.libs,
		config.typeCheck.libs,
	);
	if (typeCheckingLibs !== undefined) {
		merged.typeCheck.libs = typeCheckingLibs;
	}

	const bundlerExternals = mergeArrays(
		extendsObj.bundler.externals,
		config.bundler.externals,
	);
	if (bundlerExternals !== undefined) {
		merged.bundler.externals = bundlerExternals;
	}

	const filesMaxSizeIgnore = mergeArrays(
		extendsObj.files.maxSizeIgnore,
		config.files.maxSizeIgnore,
	);
	if (filesMaxSizeIgnore !== undefined) {
		merged.files.maxSizeIgnore = filesMaxSizeIgnore;
	}

	return {
		partial: merged,
		meta: {
			...meta,
			consumersChain: [...meta.consumersChain, ...extendsMeta.consumersChain],
			configDependencies: meta.configDependencies.concat(
				extendsMeta.configDependencies,
				[extendsPath],
			),
			configCacheKeys: {
				...meta.configCacheKeys,
				...extendsMeta.configCacheKeys,
			},
		},
	};
}

type MergedPartialConfig<
	A extends PartialProjectConfig,
	B extends PartialProjectConfig
> = {[Key in keyof ProjectConfigObjects]: A[Key] & B[Key]} & {
	integrations: A["integrations"] & B["integrations"];
};

function mergePartialConfig<
	A extends PartialProjectConfig,
	B extends PartialProjectConfig
>(a: A, b: B): MergedPartialConfig<A, B> {
	return {
		presets: [...a.presets, ...b.presets],
		cache: {
			...a.cache,
			...b.cache,
		},
		compiler: {
			...a.compiler,
			...b.compiler,
		},
		format: {
			...a.format,
			...b.format,
		},
		lint: {
			...a.lint,
			...b.lint,
		},
		develop: {
			...a.develop,
			...b.develop,
		},
		bundler: {
			...a.bundler,
			...b.bundler,
		},
		dependencies: {
			...a.dependencies,
			...b.dependencies,
		},
		resolver: {
			...a.resolver,
			...b.resolver,
		},
		typeCheck: {
			...a.typeCheck,
			...b.typeCheck,
		},
		tests: {
			...a.tests,
			...b.tests,
		},
		files: {
			...a.files,
			...b.files,
		},
		vcs: {
			...a.vcs,
			...b.vcs,
		},
		targets: new Map([...a.targets.entries(), ...b.targets.entries()]),
		integrations: {
			...a.integrations,
			...b.integrations,
			eslint: {
				...a.integrations.eslint,
				...b.integrations.eslint,
			},
		},
	};
}
