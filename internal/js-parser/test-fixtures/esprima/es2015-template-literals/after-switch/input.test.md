# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > es2015-template-literals > after-switch`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	filename: "esprima/es2015-template-literals/after-switch/input.js"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation esprima/es2015-template-literals/after-switch/input.js 1:0-2:0
	body: Array [
		JSSwitchStatement {
			cases: Array []
			loc: SourceLocation esprima/es2015-template-literals/after-switch/input.js 1:0-1:13
			discriminant: JSTemplateLiteral {
				expressions: Array []
				loc: SourceLocation esprima/es2015-template-literals/after-switch/input.js 1:7-1:13
				quasis: Array [
					JSTemplateElement {
						cooked: "test"
						raw: "test"
						tail: true
						loc: SourceLocation esprima/es2015-template-literals/after-switch/input.js 1:8-1:12
					}
				]
			}
		}
	]
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			location: Object {
				filename: "esprima/es2015-template-literals/after-switch/input.js"
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:8
				start: Position 1:7
			}
			description: Object {
				advice: Array []
				category: "parse"
				categoryValue: "js"
				message: Array [
					RAW_MARKUP {value: "Unexpected token, expected "}
					"("
				]
			}
		}
	]
}
```

### `diagnostics`

```

 esprima/es2015-template-literals/after-switch/input.js:1:7 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unexpected token, expected (

    switch `test`
           ^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
