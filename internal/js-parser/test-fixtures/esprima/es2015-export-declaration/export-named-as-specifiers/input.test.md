# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > es2015-export-declaration > export-named-as-specifiers`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "esprima/es2015-export-declaration/export-named-as-specifiers/input.js"
	hasHoistedVars: true
	integrity: undefined
	interpreter: undefined
	sourceType: "module"
	syntax: Array []
	loc: SourceLocation esprima/es2015-export-declaration/export-named-as-specifiers/input.js 1:0-3:0
	body: Array [
		JSExportLocalDeclaration {
			declaration: undefined
			exportKind: "value"
			loc: SourceLocation esprima/es2015-export-declaration/export-named-as-specifiers/input.js 1:0-1:29
			specifiers: Array [
				JSExportLocalSpecifier {
					loc: SourceLocation esprima/es2015-export-declaration/export-named-as-specifiers/input.js 1:8-1:22
					exported: JSIdentifier {
						name: "default"
						loc: SourceLocation esprima/es2015-export-declaration/export-named-as-specifiers/input.js 1:15-1:22 (default)
					}
					local: JSReferenceIdentifier {
						name: "foo"
						loc: SourceLocation esprima/es2015-export-declaration/export-named-as-specifiers/input.js 1:8-1:11 (foo)
					}
				}
				JSExportLocalSpecifier {
					loc: SourceLocation esprima/es2015-export-declaration/export-named-as-specifiers/input.js 1:24-1:27
					exported: JSIdentifier {
						name: "bar"
						loc: SourceLocation esprima/es2015-export-declaration/export-named-as-specifiers/input.js 1:24-1:27 (bar)
					}
					local: JSReferenceIdentifier {
						name: "bar"
						loc: SourceLocation esprima/es2015-export-declaration/export-named-as-specifiers/input.js 1:24-1:27 (bar)
					}
				}
			]
		}
		JSVariableDeclarationStatement {
			loc: SourceLocation esprima/es2015-export-declaration/export-named-as-specifiers/input.js 2:0-2:13
			declaration: JSVariableDeclaration {
				kind: "var"
				loc: SourceLocation esprima/es2015-export-declaration/export-named-as-specifiers/input.js 2:0-2:13
				declarations: Array [
					JSVariableDeclarator {
						id: JSBindingIdentifier {
							name: "foo"
							loc: SourceLocation esprima/es2015-export-declaration/export-named-as-specifiers/input.js 2:4-2:7 (foo)
						}
						init: undefined
						loc: SourceLocation esprima/es2015-export-declaration/export-named-as-specifiers/input.js 2:4-2:7
					}
					JSVariableDeclarator {
						id: JSBindingIdentifier {
							name: "bar"
							loc: SourceLocation esprima/es2015-export-declaration/export-named-as-specifiers/input.js 2:9-2:12 (bar)
						}
						init: undefined
						loc: SourceLocation esprima/es2015-export-declaration/export-named-as-specifiers/input.js 2:9-2:12
					}
				]
			}
		}
	]
}
```

### `diagnostics`

```
✔ No known problems!

```
