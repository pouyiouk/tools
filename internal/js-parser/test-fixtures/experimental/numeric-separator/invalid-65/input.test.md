# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `experimental > numeric-separator > invalid-65`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	filename: "experimental/numeric-separator/invalid-65/input.js"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation experimental/numeric-separator/invalid-65/input.js 1:0-2:0
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			description: Object {
				advice: Array []
				category: "parse"
				categoryValue: "js"
				message: RAW_MARKUP {value: "Invalid or unexpected int token"}
			}
			location: Object {
				filename: "experimental/numeric-separator/invalid-65/input.js"
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:0
				start: Position 1:0
			}
		}
	]
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation experimental/numeric-separator/invalid-65/input.js 1:0-1:11
			expression: JSSequenceExpression {
				loc: SourceLocation experimental/numeric-separator/invalid-65/input.js 1:0-1:11
				expressions: Array [
					JSNumericLiteral {
						value: 17
						format: "hex"
						loc: SourceLocation experimental/numeric-separator/invalid-65/input.js 1:0-1:8
					}
					JSNumericLiteral {
						value: 0
						format: undefined
						loc: SourceLocation experimental/numeric-separator/invalid-65/input.js 1:10-1:11
					}
				]
			}
		}
	]
}
```

### `diagnostics`

```

 experimental/numeric-separator/invalid-65/input.js:1 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Invalid or unexpected int token

    0x__1_1_, 0
    ^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
