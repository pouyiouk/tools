# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > uncategorised > 148`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "es2015/uncategorised/148/input.js"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation es2015/uncategorised/148/input.js 1:0-1:23
	body: Array [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "f"
				loc: SourceLocation es2015/uncategorised/148/input.js 1:9-1:10 (f)
			}
			loc: SourceLocation es2015/uncategorised/148/input.js 1:0-1:23
			body: JSBlockStatement {
				body: Array []
				directives: Array []
				loc: SourceLocation es2015/uncategorised/148/input.js 1:21-1:23
			}
			head: JSFunctionHead {
				async: false
				generator: false
				hasHoistedVars: false
				rest: undefined
				returnType: undefined
				thisType: undefined
				typeParameters: undefined
				loc: SourceLocation es2015/uncategorised/148/input.js 1:10-1:20
				params: Array [
					JSBindingObjectPattern {
						rest: undefined
						loc: SourceLocation es2015/uncategorised/148/input.js 1:11-1:19
						meta: JSPatternMeta {
							optional: undefined
							typeAnnotation: undefined
							loc: SourceLocation es2015/uncategorised/148/input.js 1:11-1:19
						}
						properties: Array [
							JSBindingObjectPatternProperty {
								key: JSComputedPropertyKey {
									value: JSReferenceIdentifier {
										name: "x"
										loc: SourceLocation es2015/uncategorised/148/input.js 1:13-1:14 (x)
									}
									loc: SourceLocation es2015/uncategorised/148/input.js 1:12-1:15
								}
								value: JSBindingIdentifier {
									name: "y"
									loc: SourceLocation es2015/uncategorised/148/input.js 1:17-1:18 (y)
								}
								loc: SourceLocation es2015/uncategorised/148/input.js 1:12-1:18
							}
						]
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
