# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `jsx > regression > 3`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "jsx/regression/3/input.jsx"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	loc: SourceLocation jsx/regression/3/input.jsx 1:0-1:18
	syntax: Array ["jsx"]
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation jsx/regression/3/input.jsx 1:0-1:18
			expression: JSXElement {
				name: JSXIdentifier {
					name: "div"
					loc: SourceLocation jsx/regression/3/input.jsx 1:1-1:4
				}
				attributes: Array []
				selfClosing: false
				typeArguments: undefined
				loc: SourceLocation jsx/regression/3/input.jsx 1:0-1:18
				children: Array [
					JSXExpressionContainer {
						loc: SourceLocation jsx/regression/3/input.jsx 1:5-1:12
						expression: JSObjectExpression {
							loc: SourceLocation jsx/regression/3/input.jsx 1:7-1:10
							properties: Array [
								JSObjectProperty {
									key: JSStaticPropertyKey {
										value: JSIdentifier {
											name: "a"
											loc: SourceLocation jsx/regression/3/input.jsx 1:8-1:9 (a)
										}
										loc: SourceLocation jsx/regression/3/input.jsx 1:8-1:9
									}
									value: JSReferenceIdentifier {
										name: "a"
										loc: SourceLocation jsx/regression/3/input.jsx 1:8-1:9 (a)
									}
									loc: SourceLocation jsx/regression/3/input.jsx 1:8-1:9
								}
							]
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
