# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2017 > async-functions > 30`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "es2017/async-functions/30/input.js"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation es2017/async-functions/30/input.js 1:0-2:0
	body: Array [
		JSVariableDeclarationStatement {
			loc: SourceLocation es2017/async-functions/30/input.js 1:0-1:40
			declaration: JSVariableDeclaration {
				kind: "const"
				loc: SourceLocation es2017/async-functions/30/input.js 1:0-1:40
				declarations: Array [
					JSVariableDeclarator {
						id: JSBindingIdentifier {
							name: "foo"
							loc: SourceLocation es2017/async-functions/30/input.js 1:6-1:9 (foo)
						}
						loc: SourceLocation es2017/async-functions/30/input.js 1:6-1:39
						init: JSFunctionExpression {
							id: undefined
							loc: SourceLocation es2017/async-functions/30/input.js 1:12-1:39
							body: JSBlockStatement {
								body: Array []
								directives: Array []
								loc: SourceLocation es2017/async-functions/30/input.js 1:37-1:39
							}
							head: JSFunctionHead {
								async: false
								generator: false
								hasHoistedVars: false
								rest: undefined
								returnType: undefined
								thisType: undefined
								typeParameters: undefined
								loc: SourceLocation es2017/async-functions/30/input.js 1:20-1:36
								params: Array [
									JSBindingObjectPattern {
										rest: undefined
										loc: SourceLocation es2017/async-functions/30/input.js 1:21-1:35
										meta: JSPatternMeta {
											optional: undefined
											typeAnnotation: undefined
											loc: SourceLocation es2017/async-functions/30/input.js 1:21-1:35
										}
										properties: Array [
											JSBindingObjectPatternProperty {
												key: JSStaticPropertyKey {
													value: JSIdentifier {
														name: "async"
														loc: SourceLocation es2017/async-functions/30/input.js 1:23-1:28 (async)
													}
													loc: SourceLocation es2017/async-functions/30/input.js 1:23-1:28
												}
												value: JSBindingIdentifier {
													name: "bar"
													loc: SourceLocation es2017/async-functions/30/input.js 1:30-1:33 (bar)
												}
												loc: SourceLocation es2017/async-functions/30/input.js 1:23-1:33
											}
										]
									}
								]
							}
						}
					}
				]
			}
		}
	]
}
```

### `diagnostics`

```
✔ No known problems!

```
