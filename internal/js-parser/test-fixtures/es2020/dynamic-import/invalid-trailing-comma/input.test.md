# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2020 > dynamic-import > invalid-trailing-comma`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	filename: "es2020/dynamic-import/invalid-trailing-comma/input.js"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation es2020/dynamic-import/invalid-trailing-comma/input.js 1:0-1:15
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation es2020/dynamic-import/invalid-trailing-comma/input.js 1:0-1:15
			expression: JSImportCall {
				loc: SourceLocation es2020/dynamic-import/invalid-trailing-comma/input.js 1:6-1:14
				argument: JSStringLiteral {
					value: "foo"
					loc: SourceLocation es2020/dynamic-import/invalid-trailing-comma/input.js 1:7-1:12
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
				message: RAW_MARKUP {value: "Trailing comma is disallowed inside import(...) arguments"}
			}
			location: Object {
				filename: "es2020/dynamic-import/invalid-trailing-comma/input.js"
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:13
				start: Position 1:12
			}
		}
	]
}
```

### `diagnostics`

```

 es2020/dynamic-import/invalid-trailing-comma/input.js:1:12 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Trailing comma is disallowed inside import(...) arguments

    import("foo",);
                ^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
