# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 134`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "core/uncategorised/134/input.js"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation core/uncategorised/134/input.js 1:0-1:6
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation core/uncategorised/134/input.js 1:0-1:6
			expression: JSUpdateExpression {
				operator: "++"
				prefix: false
				loc: SourceLocation core/uncategorised/134/input.js 1:0-1:6
				argument: JSReferenceIdentifier {
					name: "eval"
					loc: SourceLocation core/uncategorised/134/input.js 1:0-1:4 (eval)
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
