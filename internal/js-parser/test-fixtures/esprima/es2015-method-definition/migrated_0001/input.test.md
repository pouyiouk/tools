# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > es2015-method-definition > migrated_0001`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "esprima/es2015-method-definition/migrated_0001/input.js"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation esprima/es2015-method-definition/migrated_0001/input.js 1:0-2:0
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation esprima/es2015-method-definition/migrated_0001/input.js 1:0-1:24
			expression: JSAssignmentExpression {
				operator: "="
				loc: SourceLocation esprima/es2015-method-definition/migrated_0001/input.js 1:0-1:24
				left: JSAssignmentIdentifier {
					name: "x"
					loc: SourceLocation esprima/es2015-method-definition/migrated_0001/input.js 1:0-1:1 (x)
				}
				right: JSObjectExpression {
					loc: SourceLocation esprima/es2015-method-definition/migrated_0001/input.js 1:4-1:24
					properties: Array [
						JSObjectMethod {
							kind: "method"
							key: JSStaticPropertyKey {
								value: JSIdentifier {
									name: "method"
									loc: SourceLocation esprima/es2015-method-definition/migrated_0001/input.js 1:6-1:12 (method)
								}
								loc: SourceLocation esprima/es2015-method-definition/migrated_0001/input.js 1:6-1:12
							}
							loc: SourceLocation esprima/es2015-method-definition/migrated_0001/input.js 1:6-1:22
							body: JSBlockStatement {
								body: Array []
								directives: Array []
								loc: SourceLocation esprima/es2015-method-definition/migrated_0001/input.js 1:19-1:22
							}
							head: JSFunctionHead {
								async: false
								generator: false
								hasHoistedVars: false
								rest: undefined
								returnType: undefined
								thisType: undefined
								typeParameters: undefined
								loc: SourceLocation esprima/es2015-method-definition/migrated_0001/input.js 1:12-1:18
								params: Array [
									JSBindingIdentifier {
										name: "test"
										loc: SourceLocation esprima/es2015-method-definition/migrated_0001/input.js 1:13-1:17 (test)
										meta: JSPatternMeta {
											optional: undefined
											typeAnnotation: undefined
											loc: SourceLocation esprima/es2015-method-definition/migrated_0001/input.js 1:13-1:17
										}
									}
								]
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
