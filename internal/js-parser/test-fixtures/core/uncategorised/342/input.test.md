# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 342`

### `ast`

```javascript
JSRoot {
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "core/uncategorised/342/input.js"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation core/uncategorised/342/input.js 1:0-2:4
	comments: Array [
		CommentLine {
			id: "0"
			value: "bar"
			loc: SourceLocation core/uncategorised/342/input.js 1:4-1:11
		}
	]
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation core/uncategorised/342/input.js 1:0-2:4
			expression: JSBinaryExpression {
				operator: "+"
				loc: SourceLocation core/uncategorised/342/input.js 1:0-2:4
				left: JSReferenceIdentifier {
					name: "foo"
					loc: SourceLocation core/uncategorised/342/input.js 1:0-1:3 (foo)
					trailingComments: Array ["0"]
				}
				right: JSReferenceIdentifier {
					name: "baz"
					leadingComments: Array ["0"]
					loc: SourceLocation core/uncategorised/342/input.js 2:1-2:4 (baz)
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
