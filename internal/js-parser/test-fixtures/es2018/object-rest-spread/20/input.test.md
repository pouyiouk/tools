# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2018 > object-rest-spread > 20`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: true
	directives: Array []
	filename: "es2018/object-rest-spread/20/input.js"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation es2018/object-rest-spread/20/input.js 1:0-2:0
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			description: Object {
				advice: Array []
				category: "parse"
				categoryValue: "js"
				message: RAW_MARKUP {value: "Expected an identifier"}
			}
			location: Object {
				filename: "es2018/object-rest-spread/20/input.js"
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:18
				start: Position 1:18
			}
		}
	]
	body: Array [
		TSDeclareFunction {
			id: JSBindingIdentifier {
				name: "test"
				loc: SourceLocation es2018/object-rest-spread/20/input.js 1:9-1:13 (test)
			}
			loc: SourceLocation es2018/object-rest-spread/20/input.js 1:0-1:21
			head: JSFunctionHead {
				async: false
				generator: false
				hasHoistedVars: false
				rest: undefined
				returnType: undefined
				thisType: undefined
				typeParameters: undefined
				loc: SourceLocation es2018/object-rest-spread/20/input.js 1:13-1:21
				params: Array [
					JSBindingObjectPattern {
						loc: SourceLocation es2018/object-rest-spread/20/input.js 1:14-1:21
						rest: JSBindingIdentifier {
							name: ""
							loc: SourceLocation es2018/object-rest-spread/20/input.js 1:18-1:19 ()
						}
						meta: JSPatternMeta {
							optional: undefined
							typeAnnotation: undefined
							loc: SourceLocation es2018/object-rest-spread/20/input.js 1:14-1:21
						}
						properties: Array [
							JSBindingObjectPatternProperty {
								key: JSStaticPropertyKey {
									value: JSIdentifier {
										name: "a"
										loc: SourceLocation es2018/object-rest-spread/20/input.js 1:19-1:20 (a)
									}
									loc: SourceLocation es2018/object-rest-spread/20/input.js 1:19-1:20
								}
								value: JSBindingIdentifier {
									name: "a"
									loc: SourceLocation es2018/object-rest-spread/20/input.js 1:19-1:20 (a)
								}
								loc: SourceLocation es2018/object-rest-spread/20/input.js 1:19-1:20
							}
						]
					}
				]
			}
		}
		JSExpressionStatement {
			loc: SourceLocation es2018/object-rest-spread/20/input.js 1:21-1:22
			expression: JSReferenceIdentifier {
				name: "INVALID_PLACEHOLDER"
				loc: SourceLocation es2018/object-rest-spread/20/input.js 1:21-1:22
			}
		}
		JSExpressionStatement {
			loc: SourceLocation es2018/object-rest-spread/20/input.js 1:22-1:23
			expression: JSReferenceIdentifier {
				name: "INVALID_PLACEHOLDER"
				loc: SourceLocation es2018/object-rest-spread/20/input.js 1:22-1:23
			}
		}
		JSBlockStatement {
			body: Array []
			directives: Array []
			loc: SourceLocation es2018/object-rest-spread/20/input.js 1:24-1:26
		}
	]
}
```

### `diagnostics`

```

 es2018/object-rest-spread/20/input.js:1:18 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Expected an identifier

    function test({...{a}}) {}
                      ^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
