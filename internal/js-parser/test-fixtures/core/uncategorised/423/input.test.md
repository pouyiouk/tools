# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 423`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: true
	directives: Array []
	filename: "core/uncategorised/423/input.js"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation core/uncategorised/423/input.js 1:0-1:7
	body: Array [
		JSForStatement {
			init: undefined
			test: undefined
			update: undefined
			loc: SourceLocation core/uncategorised/423/input.js 1:0-1:7
			body: JSExpressionStatement {
				loc: SourceLocation core/uncategorised/423/input.js 1:7-1:7
				expression: JSReferenceIdentifier {
					name: "INVALID_PLACEHOLDER"
					loc: SourceLocation core/uncategorised/423/input.js 1:7-1:7
				}
			}
		}
	]
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			location: Object {
				filename: "core/uncategorised/423/input.js"
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:7
				start: Position 1:7
			}
			description: Object {
				advice: Array []
				category: "parse"
				categoryValue: "js"
				message: Array [
					RAW_MARKUP {value: "Unknown start to an "}
					"statement expression"
				]
			}
		}
	]
}
```

### `diagnostics`

```

 core/uncategorised/423/input.js:1:7 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unknown start to an statement expression

    for(;;)
           ^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
