# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2020 > dynamic-import > direct-calls-only`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	filename: "es2020/dynamic-import/direct-calls-only/input.js"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation es2020/dynamic-import/direct-calls-only/input.js 1:0-4:0
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			location: Object {
				filename: "es2020/dynamic-import/direct-calls-only/input.js"
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 2:20
				start: Position 2:16
			}
			description: Object {
				advice: Array []
				category: "parse"
				categoryValue: "js"
				message: Array [
					RAW_MARKUP {value: "The only valid meta property for "}
					"import"
					RAW_MARKUP {value: " is "}
					"import"
					RAW_MARKUP {value: "."}
					"meta"
				]
			}
		}
	]
	body: Array [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "failsParse"
				loc: SourceLocation es2020/dynamic-import/direct-calls-only/input.js 1:9-1:19 (failsParse)
			}
			loc: SourceLocation es2020/dynamic-import/direct-calls-only/input.js 1:0-3:1
			head: JSFunctionHead {
				async: false
				generator: false
				hasHoistedVars: false
				params: Array []
				rest: undefined
				returnType: undefined
				thisType: undefined
				typeParameters: undefined
				loc: SourceLocation es2020/dynamic-import/direct-calls-only/input.js 1:19-1:21
			}
			body: JSBlockStatement {
				directives: Array []
				loc: SourceLocation es2020/dynamic-import/direct-calls-only/input.js 1:22-3:1
				body: Array [
					JSReturnStatement {
						loc: SourceLocation es2020/dynamic-import/direct-calls-only/input.js 2:2-2:23
						argument: JSCallExpression {
							arguments: Array []
							loc: SourceLocation es2020/dynamic-import/direct-calls-only/input.js 2:9-2:22
							callee: JSMetaProperty {
								loc: SourceLocation es2020/dynamic-import/direct-calls-only/input.js 2:9-2:20
								meta: JSIdentifier {
									name: "import"
									loc: SourceLocation es2020/dynamic-import/direct-calls-only/input.js 2:9-2:15 (import)
								}
								property: JSIdentifier {
									name: "then"
									loc: SourceLocation es2020/dynamic-import/direct-calls-only/input.js 2:16-2:20 (then)
								}
							}
						}
					}
				]
			}
		}
	]
}
```

### `diagnostics`

```

 es2020/dynamic-import/direct-calls-only/input.js:2:16 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ The only valid meta property for import is import.meta

    1 │ function failsParse() {
  > 2 │   return import.then();
      │                 ^^^^
    3 │ }

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
