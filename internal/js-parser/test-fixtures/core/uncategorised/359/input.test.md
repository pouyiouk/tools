# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 359`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	filename: "core/uncategorised/359/input.js"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation core/uncategorised/359/input.js 1:0-1:7
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation core/uncategorised/359/input.js 1:0-1:7
			expression: JSBinaryExpression {
				operator: "in"
				loc: SourceLocation core/uncategorised/359/input.js 1:0-1:7
				right: JSArrayExpression {
					elements: Array []
					loc: SourceLocation core/uncategorised/359/input.js 1:5-1:7
				}
				left: JSNumericLiteral {
					value: 3
					format: "hex"
					loc: SourceLocation core/uncategorised/359/input.js 1:0-1:3
				}
			}
		}
	]
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			description: Object {
				advice: Array []
				category: "parse"
				categoryValue: "js"
				message: RAW_MARKUP {value: "Identifier directly after number"}
			}
			location: Object {
				filename: "core/uncategorised/359/input.js"
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:3
				start: Position 1:3
			}
		}
	]
}
```

### `diagnostics`

```

 core/uncategorised/359/input.js:1:3 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Identifier directly after number

    0x3in[]
       ^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
