# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > invalid-syntax > migrated_0061`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	filename: "esprima/invalid-syntax/migrated_0061/input.js"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation esprima/invalid-syntax/migrated_0061/input.js 1:0-2:0
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
				filename: "esprima/invalid-syntax/migrated_0061/input.js"
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:10
				start: Position 2:0
			}
		}
	]
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation esprima/invalid-syntax/migrated_0061/input.js 1:0-2:0
			expression: JSBinaryExpression {
				operator: "+"
				loc: SourceLocation esprima/invalid-syntax/migrated_0061/input.js 1:0-2:0
				left: JSNumericLiteral {
					value: 1
					format: undefined
					loc: SourceLocation esprima/invalid-syntax/migrated_0061/input.js 1:0-1:1
				}
				right: JSObjectExpression {
					loc: SourceLocation esprima/invalid-syntax/migrated_0061/input.js 1:4-2:0
					properties: Array [
						JSObjectProperty {
							key: JSStaticPropertyKey {
								value: JSIdentifier {
									name: "t"
									loc: SourceLocation esprima/invalid-syntax/migrated_0061/input.js 1:6-1:7 (t)
								}
								loc: SourceLocation esprima/invalid-syntax/migrated_0061/input.js 1:6-1:7
							}
							value: JSReferenceIdentifier {
								name: "t"
								loc: SourceLocation esprima/invalid-syntax/migrated_0061/input.js 1:8-1:9 (t)
							}
							loc: SourceLocation esprima/invalid-syntax/migrated_0061/input.js 1:6-1:9
						}
						JSObjectProperty {
							key: JSStaticPropertyKey {
								value: JSIdentifier {
									name: ""
									loc: SourceLocation esprima/invalid-syntax/migrated_0061/input.js 2:0-2:0 ()
								}
								loc: SourceLocation esprima/invalid-syntax/migrated_0061/input.js 2:0-2:0
							}
							value: JSReferenceIdentifier {
								name: ""
								loc: SourceLocation esprima/invalid-syntax/migrated_0061/input.js 2:0-2:0 ()
							}
							loc: SourceLocation esprima/invalid-syntax/migrated_0061/input.js 2:0-2:0
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

 esprima/invalid-syntax/migrated_0061/input.js:2 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Expected an identifier

    1 + { t:t,

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
