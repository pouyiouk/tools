# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 395`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	filename: "core/uncategorised/395/input.js"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation core/uncategorised/395/input.js 1:0-1:19
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			description: Object {
				advice: Array []
				category: "parse"
				categoryValue: "js"
				message: RAW_MARKUP {value: "Expected an identifier"}
			}
			location: Object {
				filename: "core/uncategorised/395/input.js"
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:14
				start: Position 1:14
			}
		}
	]
	body: Array [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "t"
				loc: SourceLocation core/uncategorised/395/input.js 1:9-1:10 (t)
			}
			loc: SourceLocation core/uncategorised/395/input.js 1:0-1:19
			body: JSBlockStatement {
				body: Array []
				directives: Array []
				loc: SourceLocation core/uncategorised/395/input.js 1:16-1:19
			}
			head: JSFunctionHead {
				async: false
				generator: false
				hasHoistedVars: false
				params: Array []
				returnType: undefined
				thisType: undefined
				typeParameters: undefined
				loc: SourceLocation core/uncategorised/395/input.js 1:10-1:15
				rest: JSBindingIdentifier {
					name: ""
					loc: SourceLocation core/uncategorised/395/input.js 1:14-1:15 ()
					meta: JSPatternMeta {
						optional: undefined
						typeAnnotation: undefined
						loc: SourceLocation core/uncategorised/395/input.js 1:14-1:15
					}
				}
			}
		}
	]
}
```

### `diagnostics`

```

 core/uncategorised/395/input.js:1:14 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Expected an identifier

    function t(...) { }
                  ^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
