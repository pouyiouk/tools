# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2017 > async-functions > await-inside-class-methods`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "es2017/async-functions/await-inside-class-methods/input.js"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation es2017/async-functions/await-inside-class-methods/input.js 1:0-4:0
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation es2017/async-functions/await-inside-class-methods/input.js 1:0-3:1
			expression: JSArrowFunctionExpression {
				loc: SourceLocation es2017/async-functions/await-inside-class-methods/input.js 1:0-3:1
				head: JSFunctionHead {
					async: false
					hasHoistedVars: false
					params: Array []
					rest: undefined
					returnType: undefined
					thisType: undefined
					loc: SourceLocation es2017/async-functions/await-inside-class-methods/input.js 1:0-1:5
				}
				body: JSClassExpression {
					id: undefined
					loc: SourceLocation es2017/async-functions/await-inside-class-methods/input.js 1:6-3:1
					meta: JSClassHead {
						implements: undefined
						superClass: undefined
						superTypeParameters: undefined
						typeParameters: undefined
						loc: SourceLocation es2017/async-functions/await-inside-class-methods/input.js 1:6-3:1
						body: Array [
							JSClassMethod {
								kind: "method"
								key: JSStaticPropertyKey {
									value: JSIdentifier {
										name: "m"
										loc: SourceLocation es2017/async-functions/await-inside-class-methods/input.js 2:8-2:9 (m)
									}
									loc: SourceLocation es2017/async-functions/await-inside-class-methods/input.js 2:8-2:9
								}
								loc: SourceLocation es2017/async-functions/await-inside-class-methods/input.js 2:2-2:24
								meta: JSClassPropertyMeta {
									abstract: false
									accessibility: undefined
									optional: false
									readonly: false
									static: false
									typeAnnotation: undefined
									loc: SourceLocation es2017/async-functions/await-inside-class-methods/input.js 2:2-2:9
									start: Position 2:2
								}
								head: JSFunctionHead {
									async: true
									generator: false
									hasHoistedVars: false
									params: Array []
									rest: undefined
									returnType: undefined
									thisType: undefined
									typeParameters: undefined
									loc: SourceLocation es2017/async-functions/await-inside-class-methods/input.js 2:9-2:11
								}
								body: JSBlockStatement {
									directives: Array []
									loc: SourceLocation es2017/async-functions/await-inside-class-methods/input.js 2:12-2:24
									body: Array [
										JSExpressionStatement {
											loc: SourceLocation es2017/async-functions/await-inside-class-methods/input.js 2:14-2:22
											expression: JSAwaitExpression {
												loc: SourceLocation es2017/async-functions/await-inside-class-methods/input.js 2:14-2:22
												argument: JSNumericLiteral {
													value: 42
													format: undefined
													loc: SourceLocation es2017/async-functions/await-inside-class-methods/input.js 2:20-2:22
												}
											}
										}
									]
								}
							}
						]
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
