# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `typescript > cast > assert-and-assign`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "typescript/cast/assert-and-assign/input.ts"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "module"
	loc: SourceLocation typescript/cast/assert-and-assign/input.ts 1:0-1:19
	syntax: Array ["ts"]
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation typescript/cast/assert-and-assign/input.ts 1:0-1:19
			expression: JSAssignmentExpression {
				operator: "="
				loc: SourceLocation typescript/cast/assert-and-assign/input.ts 1:0-1:18
				right: JSNumericLiteral {
					value: 42
					format: undefined
					loc: SourceLocation typescript/cast/assert-and-assign/input.ts 1:16-1:18
				}
				left: TSAssignmentAsExpression {
					loc: SourceLocation typescript/cast/assert-and-assign/input.ts 1:1-1:12
					typeAnnotation: TSNumberKeywordTypeAnnotation {loc: SourceLocation typescript/cast/assert-and-assign/input.ts 1:6-1:12}
					expression: JSAssignmentIdentifier {
						name: "a"
						loc: SourceLocation typescript/cast/assert-and-assign/input.ts 1:1-1:2 (a)
					}
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
