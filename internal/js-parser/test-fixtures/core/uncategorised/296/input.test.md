# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 296`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "core/uncategorised/296/input.js"
	hasHoistedVars: true
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation core/uncategorised/296/input.js 1:0-1:29
	body: Array [
		JSVariableDeclarationStatement {
			loc: SourceLocation core/uncategorised/296/input.js 1:0-1:29
			declaration: JSVariableDeclaration {
				kind: "var"
				loc: SourceLocation core/uncategorised/296/input.js 1:0-1:29
				declarations: Array [
					JSVariableDeclarator {
						id: JSBindingIdentifier {
							name: "hi"
							loc: SourceLocation core/uncategorised/296/input.js 1:4-1:6 (hi)
						}
						loc: SourceLocation core/uncategorised/296/input.js 1:4-1:28
						init: JSFunctionExpression {
							id: JSBindingIdentifier {
								name: "eval"
								loc: SourceLocation core/uncategorised/296/input.js 1:18-1:22 (eval)
							}
							loc: SourceLocation core/uncategorised/296/input.js 1:9-1:28
							body: JSBlockStatement {
								body: Array []
								directives: Array []
								loc: SourceLocation core/uncategorised/296/input.js 1:25-1:28
							}
							head: JSFunctionHead {
								async: false
								generator: false
								hasHoistedVars: false
								params: Array []
								rest: undefined
								returnType: undefined
								thisType: undefined
								typeParameters: undefined
								loc: SourceLocation core/uncategorised/296/input.js 1:22-1:24
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
✔ No known problems!

```
