# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 167`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "core/uncategorised/167/input.js"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation core/uncategorised/167/input.js 1:0-1:6
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation core/uncategorised/167/input.js 1:0-1:6
			expression: JSBinaryExpression {
				operator: "!="
				loc: SourceLocation core/uncategorised/167/input.js 1:0-1:6
				left: JSReferenceIdentifier {
					name: "x"
					loc: SourceLocation core/uncategorised/167/input.js 1:0-1:1 (x)
				}
				right: JSReferenceIdentifier {
					name: "y"
					loc: SourceLocation core/uncategorised/167/input.js 1:5-1:6 (y)
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
