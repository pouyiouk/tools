# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 403`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	filename: "core/uncategorised/403/input.js"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation core/uncategorised/403/input.js 1:0-1:20
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			location: Object {
				filename: "core/uncategorised/403/input.js"
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:14
				start: Position 1:9
			}
			description: Object {
				advice: Array []
				category: "parse"
				categoryValue: "js"
				message: Array [
					RAW_MARKUP {value: "Unexpected keyword "}
					"false"
				]
			}
		}
	]
	body: Array [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "false"
				loc: SourceLocation core/uncategorised/403/input.js 1:9-1:14 (false)
			}
			loc: SourceLocation core/uncategorised/403/input.js 1:0-1:20
			body: JSBlockStatement {
				body: Array []
				directives: Array []
				loc: SourceLocation core/uncategorised/403/input.js 1:17-1:20
			}
			head: JSFunctionHead {
				async: false
				generator: false
				hasHoistedVars: false
				params: Array []
				rest: undefined
				returnType: undefined
				thisType: undefined
				typeParameters: undefined
				loc: SourceLocation core/uncategorised/403/input.js 1:14-1:16
			}
		}
	]
}
```

### `diagnostics`

```

 core/uncategorised/403/input.js:1:9 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unexpected keyword false

    function false() { }
             ^^^^^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
