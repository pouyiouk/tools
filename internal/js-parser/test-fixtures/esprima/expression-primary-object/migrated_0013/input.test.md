# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > expression-primary-object > migrated_0013`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "esprima/expression-primary-object/migrated_0013/input.js"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation esprima/expression-primary-object/migrated_0013/input.js 1:0-1:22
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation esprima/expression-primary-object/migrated_0013/input.js 1:0-1:22
			expression: JSAssignmentExpression {
				operator: "="
				loc: SourceLocation esprima/expression-primary-object/migrated_0013/input.js 1:0-1:22
				left: JSAssignmentIdentifier {
					name: "x"
					loc: SourceLocation esprima/expression-primary-object/migrated_0013/input.js 1:0-1:1 (x)
				}
				right: JSObjectExpression {
					loc: SourceLocation esprima/expression-primary-object/migrated_0013/input.js 1:4-1:22
					properties: Array [
						JSObjectMethod {
							kind: "get"
							key: JSStaticPropertyKey {
								value: JSIdentifier {
									name: "false"
									loc: SourceLocation esprima/expression-primary-object/migrated_0013/input.js 1:10-1:15 (false)
								}
								loc: SourceLocation esprima/expression-primary-object/migrated_0013/input.js 1:10-1:15
							}
							loc: SourceLocation esprima/expression-primary-object/migrated_0013/input.js 1:6-1:20
							body: JSBlockStatement {
								body: Array []
								directives: Array []
								loc: SourceLocation esprima/expression-primary-object/migrated_0013/input.js 1:18-1:20
							}
							head: JSFunctionHead {
								async: false
								generator: false
								hasHoistedVars: false
								params: Array []
								rest: undefined
								returnType: undefined
								thisType: undefined
								typeParameters: undefined
								loc: SourceLocation esprima/expression-primary-object/migrated_0013/input.js 1:15-1:17
							}
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
