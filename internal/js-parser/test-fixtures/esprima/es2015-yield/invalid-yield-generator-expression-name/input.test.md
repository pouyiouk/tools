# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > es2015-yield > invalid-yield-generator-expression-name`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	filename: "esprima/es2015-yield/invalid-yield-generator-expression-name/input.js"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation esprima/es2015-yield/invalid-yield-generator-expression-name/input.js 1:0-2:0
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			description: Object {
				advice: Array []
				category: "parse"
				categoryValue: "js"
				message: RAW_MARKUP {value: "Can not use 'yield' as identifier inside a generator"}
			}
			location: Object {
				filename: "esprima/es2015-yield/invalid-yield-generator-expression-name/input.js"
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:15
				start: Position 1:10
			}
		}
	]
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation esprima/es2015-yield/invalid-yield-generator-expression-name/input.js 1:0-1:20
			expression: JSFunctionExpression {
				id: JSBindingIdentifier {
					name: "yield"
					loc: SourceLocation esprima/es2015-yield/invalid-yield-generator-expression-name/input.js 1:10-1:15 (yield)
				}
				loc: SourceLocation esprima/es2015-yield/invalid-yield-generator-expression-name/input.js 1:1-1:19
				body: JSBlockStatement {
					body: Array []
					directives: Array []
					loc: SourceLocation esprima/es2015-yield/invalid-yield-generator-expression-name/input.js 1:17-1:19
				}
				head: JSFunctionHead {
					async: false
					generator: true
					hasHoistedVars: false
					params: Array []
					rest: undefined
					returnType: undefined
					thisType: undefined
					typeParameters: undefined
					loc: SourceLocation esprima/es2015-yield/invalid-yield-generator-expression-name/input.js 1:15-1:17
				}
			}
		}
	]
}
```

### `diagnostics`

```

 esprima/es2015-yield/invalid-yield-generator-expression-name/input.js:1:10 parse(js) ━━━━━━━━━━━━━━

  ✖ Can not use 'yield' as identifier inside a generator

    (function*yield(){})
              ^^^^^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
