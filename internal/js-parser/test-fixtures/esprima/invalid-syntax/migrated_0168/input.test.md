# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > invalid-syntax > migrated_0168`

### `ast`

```javascript
JSRoot {
	body: Array []
	comments: Array []
	corrupt: false
	filename: "esprima/invalid-syntax/migrated_0168/input.js"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation esprima/invalid-syntax/migrated_0168/input.js 1:0-2:1
	directives: Array [
		JSDirective {
			value: "\\"
			loc: SourceLocation esprima/invalid-syntax/migrated_0168/input.js 1:0-2:1
		}
	]
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			description: Object {
				advice: Array []
				category: "parse"
				categoryValue: "js"
				message: RAW_MARKUP {value: "Unterminated string constant"}
			}
			location: Object {
				filename: "esprima/invalid-syntax/migrated_0168/input.js"
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 2:0
				start: Position 2:0
			}
		}
	]
}
```

### `diagnostics`

```

 esprima/invalid-syntax/migrated_0168/input.js:2 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unterminated string constant

    "\

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
