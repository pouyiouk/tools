# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `experimental > top-level-await > inside-arrow`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	filename: "experimental/top-level-await/inside-arrow/input.js"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "module"
	syntax: Array []
	loc: SourceLocation experimental/top-level-await/inside-arrow/input.js 1:0-2:0
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			description: Object {
				advice: Array []
				category: "parse"
				categoryValue: "js"
				message: RAW_MARKUP {value: "Can't use await outside of an async function"}
			}
			location: Object {
				filename: "experimental/top-level-await/inside-arrow/input.js"
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:11
				start: Position 1:6
			}
		}
	]
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation experimental/top-level-await/inside-arrow/input.js 1:0-1:11
			expression: JSArrowFunctionExpression {
				loc: SourceLocation experimental/top-level-await/inside-arrow/input.js 1:0-1:11
				body: JSReferenceIdentifier {
					name: "await"
					loc: SourceLocation experimental/top-level-await/inside-arrow/input.js 1:6-1:11 (await)
				}
				head: JSFunctionHead {
					async: false
					hasHoistedVars: false
					params: Array []
					rest: undefined
					returnType: undefined
					thisType: undefined
					loc: SourceLocation experimental/top-level-await/inside-arrow/input.js 1:0-1:5
				}
			}
		}
		JSExpressionStatement {
			loc: SourceLocation experimental/top-level-await/inside-arrow/input.js 1:12-1:14
			expression: JSNumericLiteral {
				value: 0
				format: undefined
				loc: SourceLocation experimental/top-level-await/inside-arrow/input.js 1:12-1:13
			}
		}
	]
}
```

### `diagnostics`

```

 experimental/top-level-await/inside-arrow/input.js:1:6 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Can't use await outside of an async function

    () => await 0;
          ^^^^^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
