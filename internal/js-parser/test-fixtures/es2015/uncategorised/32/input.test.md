# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > uncategorised > 32`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "es2015/uncategorised/32/input.js"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation es2015/uncategorised/32/input.js 1:0-1:12
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation es2015/uncategorised/32/input.js 1:0-1:12
			expression: JSArrowFunctionExpression {
				loc: SourceLocation es2015/uncategorised/32/input.js 1:0-1:12
				head: JSFunctionHead {
					async: false
					hasHoistedVars: false
					rest: undefined
					thisType: undefined
					loc: SourceLocation es2015/uncategorised/32/input.js 1:0-1:4
					params: Array [
						JSBindingIdentifier {
							name: "e"
							loc: SourceLocation es2015/uncategorised/32/input.js 1:0-1:1 (e)
						}
					]
				}
				body: JSBlockStatement {
					directives: Array []
					loc: SourceLocation es2015/uncategorised/32/input.js 1:5-1:12
					body: Array [
						JSExpressionStatement {
							loc: SourceLocation es2015/uncategorised/32/input.js 1:7-1:10
							expression: JSNumericLiteral {
								value: 42
								format: undefined
								loc: SourceLocation es2015/uncategorised/32/input.js 1:7-1:9
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
