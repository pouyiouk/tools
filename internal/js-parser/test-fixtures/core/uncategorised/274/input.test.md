# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 274`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "core/uncategorised/274/input.js"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation core/uncategorised/274/input.js 1:0-1:11
	body: Array [
		JSThrowStatement {
			loc: SourceLocation core/uncategorised/274/input.js 1:0-1:11
			argument: JSBinaryExpression {
				operator: "*"
				loc: SourceLocation core/uncategorised/274/input.js 1:6-1:11
				left: JSReferenceIdentifier {
					name: "x"
					loc: SourceLocation core/uncategorised/274/input.js 1:6-1:7 (x)
				}
				right: JSReferenceIdentifier {
					name: "y"
					loc: SourceLocation core/uncategorised/274/input.js 1:10-1:11 (y)
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
