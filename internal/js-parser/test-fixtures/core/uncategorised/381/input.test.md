# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 381`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	filename: "core/uncategorised/381/input.js"
	hasHoistedVars: true
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation core/uncategorised/381/input.js 1:0-1:11
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
				filename: "core/uncategorised/381/input.js"
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:9
				start: Position 1:9
			}
		}
	]
	body: Array [
		JSVariableDeclarationStatement {
			loc: SourceLocation core/uncategorised/381/input.js 1:0-1:11
			declaration: JSVariableDeclaration {
				kind: "var"
				loc: SourceLocation core/uncategorised/381/input.js 1:0-1:11
				declarations: Array [
					JSVariableDeclarator {
						id: JSBindingIdentifier {
							name: "x"
							loc: SourceLocation core/uncategorised/381/input.js 1:4-1:5 (x)
						}
						loc: SourceLocation core/uncategorised/381/input.js 1:4-1:11
						init: JSStringLiteral {
							value: "\n"
							loc: SourceLocation core/uncategorised/381/input.js 1:8-1:11
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

 core/uncategorised/381/input.js:1:9 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unterminated string constant

    var x = "
             ^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
