# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `comments > basic > switch-no-default-comment`

### `ast`

```javascript
JSRoot {
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "comments/basic/switch-no-default-comment/input.js"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation comments/basic/switch-no-default-comment/input.js 1:0-6:0
	comments: Array [
		CommentLine {
			id: "0"
			value: "no default"
			loc: SourceLocation comments/basic/switch-no-default-comment/input.js 4:4-4:16
		}
	]
	body: Array [
		JSSwitchStatement {
			loc: SourceLocation comments/basic/switch-no-default-comment/input.js 1:0-5:1
			discriminant: JSReferenceIdentifier {
				name: "a"
				loc: SourceLocation comments/basic/switch-no-default-comment/input.js 1:8-1:9 (a)
			}
			cases: Array [
				JSSwitchCase {
					loc: SourceLocation comments/basic/switch-no-default-comment/input.js 2:4-3:14
					trailingComments: Array ["0"]
					test: JSNumericLiteral {
						value: 1
						format: undefined
						loc: SourceLocation comments/basic/switch-no-default-comment/input.js 2:9-2:10
					}
					consequent: Array [
						JSBreakStatement {
							label: undefined
							trailingComments: undefined
							loc: SourceLocation comments/basic/switch-no-default-comment/input.js 3:8-3:14
						}
					]
				}
			]
		}
	]
}
```

### `diagnostics`

```
✔ No known problems!

```
