# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > uncategorised > 267`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	filename: "es2015/uncategorised/267/input.js"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation es2015/uncategorised/267/input.js 1:0-1:17
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			location: Object {
				filename: "es2015/uncategorised/267/input.js"
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:7
				start: Position 1:7
			}
			description: Object {
				category: "parse"
				categoryValue: "js"
				message: Array [
					RAW_MARKUP {value: "Unclosed "}
					"template expression value"
				]
				advice: Array [
					log {
						category: "info"
						text: Array [
							RAW_MARKUP {value: "We expected to find the closing character <emphasis>"}
							"}"
							RAW_MARKUP {value: "</emphasis> here"}
						]
					}
					frame {location: SourceLocation es2015/uncategorised/267/input.js 1:11-1:11}
				]
			}
		}
	]
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation es2015/uncategorised/267/input.js 1:0-1:17
			expression: JSTemplateLiteral {
				loc: SourceLocation es2015/uncategorised/267/input.js 1:0-1:17
				quasis: Array [
					JSTemplateElement {
						cooked: "hello "
						raw: "hello "
						tail: false
						loc: SourceLocation es2015/uncategorised/267/input.js 1:1-1:7
					}
					JSTemplateElement {
						cooked: ";"
						raw: ";"
						tail: false
						loc: SourceLocation es2015/uncategorised/267/input.js 1:11-1:12
					}
					JSTemplateElement {
						cooked: ""
						raw: ""
						tail: false
						loc: SourceLocation es2015/uncategorised/267/input.js 1:17-1:17
					}
				]
				expressions: Array [
					JSNumericLiteral {
						value: 10
						format: undefined
						loc: SourceLocation es2015/uncategorised/267/input.js 1:9-1:11
					}
					JSTaggedTemplateExpression {
						typeArguments: undefined
						loc: SourceLocation es2015/uncategorised/267/input.js 1:12-1:17
						tag: JSReferenceIdentifier {
							name: "test"
							loc: SourceLocation es2015/uncategorised/267/input.js 1:12-1:16 (test)
						}
						quasi: JSTemplateLiteral {
							expressions: Array []
							loc: SourceLocation es2015/uncategorised/267/input.js 1:16-1:17
							quasis: Array [
								JSTemplateElement {
									cooked: ""
									raw: ""
									tail: false
									loc: SourceLocation es2015/uncategorised/267/input.js 1:17-1:17
								}
							]
						}
					}
				]
			}
		}
	]
}
```

### `diagnostics`

```

 es2015/uncategorised/267/input.js:1:7 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unclosed template expression value

  ℹ We expected to find the closing character } here

    `hello ${10;test`
               ^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
