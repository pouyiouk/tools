# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > for-of > bare-initializer`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	filename: "es2015/for-of/bare-initializer/input.js"
	hasHoistedVars: true
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation es2015/for-of/bare-initializer/input.js 1:0-3:0
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			description: Object {
				advice: Array []
				category: "parse"
				categoryValue: "js"
				message: RAW_MARKUP {value: "Not a valid assignment target"}
			}
			location: Object {
				filename: "es2015/for-of/bare-initializer/input.js"
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 2:10
				start: Position 2:5
			}
		}
	]
	body: Array [
		JSVariableDeclarationStatement {
			loc: SourceLocation es2015/for-of/bare-initializer/input.js 1:0-1:6
			declaration: JSVariableDeclaration {
				kind: "var"
				loc: SourceLocation es2015/for-of/bare-initializer/input.js 1:0-1:6
				declarations: Array [
					JSVariableDeclarator {
						id: JSBindingIdentifier {
							name: "a"
							loc: SourceLocation es2015/for-of/bare-initializer/input.js 1:4-1:5 (a)
						}
						init: undefined
						loc: SourceLocation es2015/for-of/bare-initializer/input.js 1:4-1:5
					}
				]
			}
		}
		JSForOfStatement {
			await: false
			body: JSEmptyStatement {loc: SourceLocation es2015/for-of/bare-initializer/input.js 2:17-2:18}
			loc: SourceLocation es2015/for-of/bare-initializer/input.js 2:0-2:18
			left: JSAssignmentIdentifier {
				name: "X"
				loc: SourceLocation es2015/for-of/bare-initializer/input.js 2:5-2:10
			}
			right: JSObjectExpression {
				properties: Array []
				loc: SourceLocation es2015/for-of/bare-initializer/input.js 2:14-2:16
			}
		}
	]
}
```

### `diagnostics`

```

 es2015/for-of/bare-initializer/input.js:2:5 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Not a valid assignment target

    1 │ var a;
  > 2 │ for (a = 0 of {});
      │      ^^^^^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
