# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `experimental > numeric-separator > valid-15`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "experimental/numeric-separator/valid-15/input.js"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation experimental/numeric-separator/valid-15/input.js 1:0-1:6
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation experimental/numeric-separator/valid-15/input.js 1:0-1:6
			expression: JSNumericLiteral {
				value: 9
				format: "octal"
				loc: SourceLocation experimental/numeric-separator/valid-15/input.js 1:0-1:6
			}
		}
	]
}
```

### `diagnostics`

```
✔ No known problems!

```
