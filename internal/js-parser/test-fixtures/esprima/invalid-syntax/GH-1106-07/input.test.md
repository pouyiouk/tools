# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > invalid-syntax > GH-1106-07`

### `ast`

```javascript
JSRoot {
	body: Array []
	comments: Array []
	corrupt: false
	filename: "esprima/invalid-syntax/GH-1106-07/input.js"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation esprima/invalid-syntax/GH-1106-07/input.js 1:0-2:0
	directives: Array [
		JSDirective {
			value: "\\u000"
			loc: SourceLocation esprima/invalid-syntax/GH-1106-07/input.js 1:0-1:8
		}
	]
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			description: Object {
				advice: Array []
				category: "parse"
				categoryValue: "js"
				message: RAW_MARKUP {value: "Bad character escape sequence"}
			}
			location: Object {
				filename: "esprima/invalid-syntax/GH-1106-07/input.js"
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

 esprima/invalid-syntax/GH-1106-07/input.js:1:3 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Bad character escape sequence

    "\u000";
       ^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
