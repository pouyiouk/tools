# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `typescript > cast > need-parentheses`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "typescript/cast/need-parentheses/input.ts"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "module"
	loc: SourceLocation typescript/cast/need-parentheses/input.ts 1:0-4:0
	syntax: Array ["ts"]
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation typescript/cast/need-parentheses/input.ts 1:0-1:10
			expression: JSMemberExpression {
				loc: SourceLocation typescript/cast/need-parentheses/input.ts 1:0-1:9
				property: JSStaticMemberProperty {
					value: JSIdentifier {
						name: "y"
						loc: SourceLocation typescript/cast/need-parentheses/input.ts 1:8-1:9 (y)
					}
					loc: SourceLocation typescript/cast/need-parentheses/input.ts 1:8-1:9 (y)
				}
				object: TSTypeAssertion {
					loc: SourceLocation typescript/cast/need-parentheses/input.ts 1:1-1:6
					expression: JSReferenceIdentifier {
						name: "x"
						loc: SourceLocation typescript/cast/need-parentheses/input.ts 1:5-1:6 (x)
					}
					typeAnnotation: TSTypeReference {
						typeParameters: undefined
						loc: SourceLocation typescript/cast/need-parentheses/input.ts 1:2-1:3
						typeName: JSReferenceIdentifier {
							name: "T"
							loc: SourceLocation typescript/cast/need-parentheses/input.ts 1:2-1:3 (T)
						}
					}
				}
			}
		}
		JSExpressionStatement {
			loc: SourceLocation typescript/cast/need-parentheses/input.ts 2:0-2:11
			expression: JSMemberExpression {
				loc: SourceLocation typescript/cast/need-parentheses/input.ts 2:0-2:10
				property: JSStaticMemberProperty {
					value: JSIdentifier {
						name: "y"
						loc: SourceLocation typescript/cast/need-parentheses/input.ts 2:9-2:10 (y)
					}
					loc: SourceLocation typescript/cast/need-parentheses/input.ts 2:9-2:10 (y)
				}
				object: TSAsExpression {
					loc: SourceLocation typescript/cast/need-parentheses/input.ts 2:1-2:7
					expression: JSReferenceIdentifier {
						name: "x"
						loc: SourceLocation typescript/cast/need-parentheses/input.ts 2:1-2:2 (x)
					}
					typeAnnotation: TSTypeReference {
						typeParameters: undefined
						loc: SourceLocation typescript/cast/need-parentheses/input.ts 2:6-2:7
						typeName: JSReferenceIdentifier {
							name: "T"
							loc: SourceLocation typescript/cast/need-parentheses/input.ts 2:6-2:7 (T)
						}
					}
				}
			}
		}
		JSExpressionStatement {
			loc: SourceLocation typescript/cast/need-parentheses/input.ts 3:0-3:5
			expression: JSMemberExpression {
				loc: SourceLocation typescript/cast/need-parentheses/input.ts 3:0-3:4
				object: TSNonNullExpression {
					loc: SourceLocation typescript/cast/need-parentheses/input.ts 3:0-3:2
					expression: JSReferenceIdentifier {
						name: "x"
						loc: SourceLocation typescript/cast/need-parentheses/input.ts 3:0-3:1 (x)
					}
				}
				property: JSStaticMemberProperty {
					value: JSIdentifier {
						name: "y"
						loc: SourceLocation typescript/cast/need-parentheses/input.ts 3:3-3:4 (y)
					}
					loc: SourceLocation typescript/cast/need-parentheses/input.ts 3:3-3:4 (y)
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
