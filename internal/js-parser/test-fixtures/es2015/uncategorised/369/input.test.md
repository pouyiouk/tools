# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > uncategorised > 369`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	filename: "es2015/uncategorised/369/input.js"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "module"
	syntax: Array []
	loc: SourceLocation es2015/uncategorised/369/input.js 1:0-2:0
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation es2015/uncategorised/369/input.js 1:0-1:13
			expression: JSAssignmentExpression {
				operator: "="
				loc: SourceLocation es2015/uncategorised/369/input.js 1:0-1:12
				left: JSAssignmentIdentifier {
					name: "enum"
					loc: SourceLocation es2015/uncategorised/369/input.js 1:0-1:4 (enum)
				}
				right: JSCallExpression {
					arguments: Array []
					loc: SourceLocation es2015/uncategorised/369/input.js 1:7-1:12
					callee: JSReferenceIdentifier {
						name: "foo"
						loc: SourceLocation es2015/uncategorised/369/input.js 1:7-1:10 (foo)
					}
				}
			}
		}
	]
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			location: Object {
				filename: "es2015/uncategorised/369/input.js"
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:4
				start: Position 1:0
			}
			description: Object {
				advice: Array []
				category: "parse"
				categoryValue: "js"
				message: Array [
					"enum"
					RAW_MARKUP {value: " is a reserved word"}
				]
			}
		}
	]
}
```

### `diagnostics`

```

 es2015/uncategorised/369/input.js:1 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ enum is a reserved word

    enum = foo();
    ^^^^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
