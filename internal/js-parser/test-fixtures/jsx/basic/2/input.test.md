# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `jsx > basic > 2`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "jsx/basic/2/input.jsx"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	loc: SourceLocation jsx/basic/2/input.jsx 1:0-1:11
	syntax: Array ["jsx"]
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation jsx/basic/2/input.jsx 1:0-1:11
			expression: JSXElement {
				name: JSXNamespacedName {
					name: JSXIdentifier {
						name: "a"
						loc: SourceLocation jsx/basic/2/input.jsx 1:3-1:4
					}
					loc: SourceLocation jsx/basic/2/input.jsx 1:1-1:4
					namespace: JSXIdentifier {
						name: "n"
						loc: SourceLocation jsx/basic/2/input.jsx 1:1-1:2
					}
				}
				children: Array []
				selfClosing: true
				typeArguments: undefined
				loc: SourceLocation jsx/basic/2/input.jsx 1:0-1:11
				attributes: Array [
					JSXAttribute {
						name: JSXNamespacedName {
							name: JSXIdentifier {
								name: "v"
								loc: SourceLocation jsx/basic/2/input.jsx 1:7-1:8
							}
							loc: SourceLocation jsx/basic/2/input.jsx 1:5-1:8
							namespace: JSXIdentifier {
								name: "n"
								loc: SourceLocation jsx/basic/2/input.jsx 1:5-1:6
							}
						}
						value: undefined
						loc: SourceLocation jsx/basic/2/input.jsx 1:5-1:8
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
