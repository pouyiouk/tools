# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > yield > parameter-name-function`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "es2015/yield/parameter-name-function/input.js"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation es2015/yield/parameter-name-function/input.js 1:0-1:21
	body: Array [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "fn"
				loc: SourceLocation es2015/yield/parameter-name-function/input.js 1:9-1:11 (fn)
			}
			loc: SourceLocation es2015/yield/parameter-name-function/input.js 1:0-1:21
			body: JSBlockStatement {
				body: Array []
				directives: Array []
				loc: SourceLocation es2015/yield/parameter-name-function/input.js 1:19-1:21
			}
			head: JSFunctionHead {
				async: false
				generator: false
				hasHoistedVars: false
				rest: undefined
				returnType: undefined
				thisType: undefined
				typeParameters: undefined
				loc: SourceLocation es2015/yield/parameter-name-function/input.js 1:11-1:18
				params: Array [
					JSBindingIdentifier {
						name: "yield"
						loc: SourceLocation es2015/yield/parameter-name-function/input.js 1:12-1:17 (yield)
						meta: JSPatternMeta {
							optional: undefined
							typeAnnotation: undefined
							loc: SourceLocation es2015/yield/parameter-name-function/input.js 1:12-1:17
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
