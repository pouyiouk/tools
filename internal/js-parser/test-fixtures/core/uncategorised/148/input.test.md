# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 148`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "core/uncategorised/148/input.js"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation core/uncategorised/148/input.js 1:0-1:6
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation core/uncategorised/148/input.js 1:0-1:6
			expression: JSUnaryExpression {
				operator: "void"
				prefix: true
				loc: SourceLocation core/uncategorised/148/input.js 1:0-1:6
				argument: JSReferenceIdentifier {
					name: "x"
					loc: SourceLocation core/uncategorised/148/input.js 1:5-1:6 (x)
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
