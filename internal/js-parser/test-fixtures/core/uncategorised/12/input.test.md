# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 12`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "core/uncategorised/12/input.js"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation core/uncategorised/12/input.js 1:0-1:16
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation core/uncategorised/12/input.js 1:0-1:16
			expression: JSAssignmentExpression {
				operator: "="
				loc: SourceLocation core/uncategorised/12/input.js 1:0-1:16
				left: JSAssignmentIdentifier {
					name: "x"
					loc: SourceLocation core/uncategorised/12/input.js 1:0-1:1 (x)
				}
				right: JSArrayExpression {
					loc: SourceLocation core/uncategorised/12/input.js 1:4-1:16
					elements: Array [
						JSNumericLiteral {
							value: 1
							format: undefined
							loc: SourceLocation core/uncategorised/12/input.js 1:6-1:7
						}
						JSNumericLiteral {
							value: 2
							format: undefined
							loc: SourceLocation core/uncategorised/12/input.js 1:9-1:10
						}
						JSNumericLiteral {
							value: 3
							format: undefined
							loc: SourceLocation core/uncategorised/12/input.js 1:12-1:13
						}
					]
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
