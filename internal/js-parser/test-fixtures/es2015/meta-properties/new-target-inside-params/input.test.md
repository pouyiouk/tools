# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > meta-properties > new-target-inside-params`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "es2015/meta-properties/new-target-inside-params/input.js"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation es2015/meta-properties/new-target-inside-params/input.js 1:0-3:0
	body: Array [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "Foo"
				loc: SourceLocation es2015/meta-properties/new-target-inside-params/input.js 1:9-1:12 (Foo)
			}
			loc: SourceLocation es2015/meta-properties/new-target-inside-params/input.js 1:0-1:31
			body: JSBlockStatement {
				body: Array []
				directives: Array []
				loc: SourceLocation es2015/meta-properties/new-target-inside-params/input.js 1:29-1:31
			}
			head: JSFunctionHead {
				async: false
				generator: false
				hasHoistedVars: false
				rest: undefined
				returnType: undefined
				thisType: undefined
				typeParameters: undefined
				loc: SourceLocation es2015/meta-properties/new-target-inside-params/input.js 1:12-1:28
				params: Array [
					JSBindingAssignmentPattern {
						loc: SourceLocation es2015/meta-properties/new-target-inside-params/input.js 1:13-1:27
						left: JSBindingIdentifier {
							name: "x"
							loc: SourceLocation es2015/meta-properties/new-target-inside-params/input.js 1:13-1:14 (x)
							meta: JSPatternMeta {
								optional: undefined
								typeAnnotation: undefined
								loc: SourceLocation es2015/meta-properties/new-target-inside-params/input.js 1:13-1:14
							}
						}
						right: JSMetaProperty {
							loc: SourceLocation es2015/meta-properties/new-target-inside-params/input.js 1:17-1:27
							meta: JSIdentifier {
								name: "new"
								loc: SourceLocation es2015/meta-properties/new-target-inside-params/input.js 1:17-1:20 (new)
							}
							property: JSIdentifier {
								name: "target"
								loc: SourceLocation es2015/meta-properties/new-target-inside-params/input.js 1:21-1:27 (target)
							}
						}
					}
				]
			}
		}
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "Bar"
				loc: SourceLocation es2015/meta-properties/new-target-inside-params/input.js 2:9-2:12 (Bar)
			}
			loc: SourceLocation es2015/meta-properties/new-target-inside-params/input.js 2:0-2:41
			head: JSFunctionHead {
				async: false
				generator: false
				hasHoistedVars: false
				params: Array []
				rest: undefined
				returnType: undefined
				thisType: undefined
				typeParameters: undefined
				loc: SourceLocation es2015/meta-properties/new-target-inside-params/input.js 2:12-2:14
			}
			body: JSBlockStatement {
				directives: Array []
				loc: SourceLocation es2015/meta-properties/new-target-inside-params/input.js 2:15-2:41
				body: Array [
					JSExpressionStatement {
						loc: SourceLocation es2015/meta-properties/new-target-inside-params/input.js 2:17-2:39
						expression: JSArrowFunctionExpression {
							loc: SourceLocation es2015/meta-properties/new-target-inside-params/input.js 2:17-2:39
							body: JSBlockStatement {
								body: Array []
								directives: Array []
								loc: SourceLocation es2015/meta-properties/new-target-inside-params/input.js 2:37-2:39
							}
							head: JSFunctionHead {
								async: false
								hasHoistedVars: false
								rest: undefined
								returnType: undefined
								thisType: undefined
								loc: SourceLocation es2015/meta-properties/new-target-inside-params/input.js 2:17-2:36
								params: Array [
									JSBindingAssignmentPattern {
										operator: "="
										loc: SourceLocation es2015/meta-properties/new-target-inside-params/input.js 2:18-2:32
										left: JSBindingIdentifier {
											name: "x"
											loc: SourceLocation es2015/meta-properties/new-target-inside-params/input.js 2:18-2:19 (x)
										}
										right: JSMetaProperty {
											loc: SourceLocation es2015/meta-properties/new-target-inside-params/input.js 2:22-2:32
											meta: JSIdentifier {
												name: "new"
												loc: SourceLocation es2015/meta-properties/new-target-inside-params/input.js 2:22-2:25 (new)
											}
											property: JSIdentifier {
												name: "target"
												loc: SourceLocation es2015/meta-properties/new-target-inside-params/input.js 2:26-2:32 (target)
											}
										}
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
