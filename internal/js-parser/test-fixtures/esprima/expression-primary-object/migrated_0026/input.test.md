# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > expression-primary-object > migrated_0026`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "esprima/expression-primary-object/migrated_0026/input.js"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation esprima/expression-primary-object/migrated_0026/input.js 1:0-1:20
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation esprima/expression-primary-object/migrated_0026/input.js 1:0-1:20
			expression: JSAssignmentExpression {
				operator: "="
				loc: SourceLocation esprima/expression-primary-object/migrated_0026/input.js 1:0-1:20
				left: JSAssignmentIdentifier {
					name: "x"
					loc: SourceLocation esprima/expression-primary-object/migrated_0026/input.js 1:0-1:1 (x)
				}
				right: JSObjectExpression {
					loc: SourceLocation esprima/expression-primary-object/migrated_0026/input.js 1:4-1:20
					properties: Array [
						JSObjectProperty {
							key: JSStaticPropertyKey {
								value: JSIdentifier {
									name: "__proto__"
									loc: SourceLocation esprima/expression-primary-object/migrated_0026/input.js 1:6-1:15 (__proto__)
								}
								loc: SourceLocation esprima/expression-primary-object/migrated_0026/input.js 1:6-1:15
							}
							value: JSNumericLiteral {
								value: 2
								format: undefined
								loc: SourceLocation esprima/expression-primary-object/migrated_0026/input.js 1:17-1:18
							}
							loc: SourceLocation esprima/expression-primary-object/migrated_0026/input.js 1:6-1:18
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
