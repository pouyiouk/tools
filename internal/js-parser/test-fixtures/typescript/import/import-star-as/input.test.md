# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `typescript > import > import-star-as`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "typescript/import/import-star-as/input.ts"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "module"
	loc: SourceLocation typescript/import/import-star-as/input.ts 1:0-2:0
	syntax: Array ["ts"]
	body: Array [
		JSImportDeclaration {
			defaultSpecifier: undefined
			importKind: undefined
			namedSpecifiers: Array []
			loc: SourceLocation typescript/import/import-star-as/input.ts 1:0-1:23
			source: JSStringLiteral {
				value: "a"
				loc: SourceLocation typescript/import/import-star-as/input.ts 1:19-1:22
			}
			namespaceSpecifier: JSImportNamespaceSpecifier {
				loc: SourceLocation typescript/import/import-star-as/input.ts 1:0-1:13
				local: JSImportSpecifierLocal {
					name: JSBindingIdentifier {
						name: "a"
						loc: SourceLocation typescript/import/import-star-as/input.ts 1:12-1:13 (a)
					}
					importKind: undefined
					loc: SourceLocation typescript/import/import-star-as/input.ts 1:12-1:13
				}
			}
		}
	]
}
```

### `diagnostics`

```
✔ No known problems!

```
