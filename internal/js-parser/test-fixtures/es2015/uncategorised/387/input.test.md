# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > uncategorised > 387`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	filename: "es2015/uncategorised/387/input.js"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "module"
	syntax: Array []
	loc: SourceLocation es2015/uncategorised/387/input.js 1:0-2:0
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			location: Object {
				filename: "es2015/uncategorised/387/input.js"
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:10
				start: Position 1:7
			}
			description: Object {
				advice: Array []
				category: "parse"
				categoryValue: "js"
				message: Array [
					RAW_MARKUP {value: "Unexpected token, expected "}
					"{"
				]
			}
		}
	]
	body: Array [
		JSExportLocalDeclaration {
			declaration: undefined
			exportKind: "value"
			loc: SourceLocation es2015/uncategorised/387/input.js 1:0-1:17
			specifiers: Array [
				JSExportLocalSpecifier {
					loc: SourceLocation es2015/uncategorised/387/input.js 1:7-1:10
					exported: JSIdentifier {
						name: "new"
						loc: SourceLocation es2015/uncategorised/387/input.js 1:7-1:10 (new)
					}
					local: JSReferenceIdentifier {
						name: "new"
						loc: SourceLocation es2015/uncategorised/387/input.js 1:7-1:10 (new)
					}
				}
				JSExportLocalSpecifier {
					loc: SourceLocation es2015/uncategorised/387/input.js 1:11-1:14
					exported: JSIdentifier {
						name: "Foo"
						loc: SourceLocation es2015/uncategorised/387/input.js 1:11-1:14 (Foo)
					}
					local: JSReferenceIdentifier {
						name: "Foo"
						loc: SourceLocation es2015/uncategorised/387/input.js 1:11-1:14 (Foo)
					}
				}
				JSExportLocalSpecifier {
					loc: SourceLocation es2015/uncategorised/387/input.js 1:14-1:15
					exported: JSIdentifier {
						name: ""
						loc: SourceLocation es2015/uncategorised/387/input.js 1:14-1:15 ()
					}
					local: JSReferenceIdentifier {
						name: ""
						loc: SourceLocation es2015/uncategorised/387/input.js 1:14-1:15 ()
					}
				}
				JSExportLocalSpecifier {
					loc: SourceLocation es2015/uncategorised/387/input.js 1:15-1:16
					exported: JSIdentifier {
						name: ""
						loc: SourceLocation es2015/uncategorised/387/input.js 1:15-1:16 ()
					}
					local: JSReferenceIdentifier {
						name: ""
						loc: SourceLocation es2015/uncategorised/387/input.js 1:15-1:16 ()
					}
				}
				JSExportLocalSpecifier {
					loc: SourceLocation es2015/uncategorised/387/input.js 1:16-1:17
					exported: JSIdentifier {
						name: ""
						loc: SourceLocation es2015/uncategorised/387/input.js 1:16-1:17 ()
					}
					local: JSReferenceIdentifier {
						name: ""
						loc: SourceLocation es2015/uncategorised/387/input.js 1:16-1:17 ()
					}
				}
			]
		}
	]
}
```

### `diagnostics`

```

 es2015/uncategorised/387/input.js:1:7 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unexpected token, expected {

    export new Foo();
           ^^^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
