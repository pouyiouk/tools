# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 520`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	filename: "core/uncategorised/520/input.js"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation core/uncategorised/520/input.js 1:0-1:36
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			location: Object {
				filename: "core/uncategorised/520/input.js"
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:16
				start: Position 1:12
			}
			description: Object {
				advice: Array []
				category: "parse"
				categoryValue: "js"
				message: Array [
					"eval"
					RAW_MARKUP {value: " is a reserved word"}
				]
			}
		}
	]
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation core/uncategorised/520/input.js 1:0-1:36
			expression: JSFunctionExpression {
				id: JSBindingIdentifier {
					name: "a"
					loc: SourceLocation core/uncategorised/520/input.js 1:10-1:11 (a)
				}
				loc: SourceLocation core/uncategorised/520/input.js 1:1-1:35
				body: JSBlockStatement {
					body: Array []
					loc: SourceLocation core/uncategorised/520/input.js 1:18-1:35
					directives: Array [
						JSDirective {
							value: "use strict"
							loc: SourceLocation core/uncategorised/520/input.js 1:20-1:33
						}
					]
				}
				head: JSFunctionHead {
					async: false
					generator: false
					hasHoistedVars: false
					rest: undefined
					returnType: undefined
					thisType: undefined
					typeParameters: undefined
					loc: SourceLocation core/uncategorised/520/input.js 1:11-1:17
					params: Array [
						JSBindingIdentifier {
							name: "eval"
							loc: SourceLocation core/uncategorised/520/input.js 1:12-1:16 (eval)
							meta: JSPatternMeta {
								optional: undefined
								typeAnnotation: undefined
								loc: SourceLocation core/uncategorised/520/input.js 1:12-1:16
							}
						}
					]
				}
			}
		}
	]
}
```

### `diagnostics`

```

 core/uncategorised/520/input.js:1:12 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ eval is a reserved word

    (function a(eval) { "use strict"; })
                ^^^^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
