# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 350`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	filename: "core/uncategorised/350/input.js"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation core/uncategorised/350/input.js 1:0-1:3
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation core/uncategorised/350/input.js 1:0-1:3
			expression: JSNumericLiteral {
				value: 3
				format: "scientific"
				loc: SourceLocation core/uncategorised/350/input.js 1:0-1:3
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
				message: RAW_MARKUP {value: "Invalid number"}
			}
			location: Object {
				filename: "core/uncategorised/350/input.js"
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

 core/uncategorised/350/input.js:1:3 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Invalid number

    3e+
       ^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
