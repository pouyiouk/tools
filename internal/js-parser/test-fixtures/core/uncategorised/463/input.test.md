# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 463`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	filename: "core/uncategorised/463/input.js"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation core/uncategorised/463/input.js 1:0-1:45
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			description: Object {
				advice: Array []
				category: "parse"
				categoryValue: "js"
				message: RAW_MARKUP {value: "No loop label found"}
			}
			location: Object {
				filename: "core/uncategorised/463/input.js"
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:33
				start: Position 1:33
			}
		}
	]
	body: Array [
		JSLabeledStatement {
			loc: SourceLocation core/uncategorised/463/input.js 1:0-1:45
			label: JSIdentifier {
				name: "x"
				loc: SourceLocation core/uncategorised/463/input.js 1:0-1:1 (x)
			}
			body: JSWhileStatement {
				loc: SourceLocation core/uncategorised/463/input.js 1:3-1:45
				test: JSBooleanLiteral {
					value: true
					loc: SourceLocation core/uncategorised/463/input.js 1:10-1:14
				}
				body: JSBlockStatement {
					directives: Array []
					loc: SourceLocation core/uncategorised/463/input.js 1:16-1:45
					body: Array [
						JSExpressionStatement {
							loc: SourceLocation core/uncategorised/463/input.js 1:18-1:43
							expression: JSFunctionExpression {
								id: undefined
								loc: SourceLocation core/uncategorised/463/input.js 1:19-1:41
								body: JSBlockStatement {
									directives: Array []
									loc: SourceLocation core/uncategorised/463/input.js 1:31-1:41
									body: Array [
										JSBreakStatement {
											label: undefined
											loc: SourceLocation core/uncategorised/463/input.js 1:33-1:39
										}
									]
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
									loc: SourceLocation core/uncategorised/463/input.js 1:28-1:30
								}
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

 core/uncategorised/463/input.js:1:33 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ No loop label found

    x: while (true) { (function () { break; }); }
                                     ^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
