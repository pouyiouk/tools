# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > es2015-object-initialiser > proto-literal-shorthand`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	filename: "esprima/es2015-object-initialiser/proto-literal-shorthand/input.js"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation esprima/es2015-object-initialiser/proto-literal-shorthand/input.js 1:0-2:0
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			description: Object {
				advice: Array []
				category: "parse"
				categoryValue: "js"
				message: RAW_MARKUP {value: "Redefinition of __proto__ property"}
			}
			location: Object {
				filename: "esprima/es2015-object-initialiser/proto-literal-shorthand/input.js"
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:31
				start: Position 1:22
			}
		}
	]
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation esprima/es2015-object-initialiser/proto-literal-shorthand/input.js 1:0-1:34
			expression: JSObjectExpression {
				loc: SourceLocation esprima/es2015-object-initialiser/proto-literal-shorthand/input.js 1:1-1:33
				properties: Array [
					JSObjectProperty {
						key: JSStaticPropertyKey {
							value: JSStringLiteral {
								value: "__proto__"
								loc: SourceLocation esprima/es2015-object-initialiser/proto-literal-shorthand/input.js 1:3-1:14
							}
							loc: SourceLocation esprima/es2015-object-initialiser/proto-literal-shorthand/input.js 1:3-1:14
						}
						value: JSNullLiteral {loc: SourceLocation esprima/es2015-object-initialiser/proto-literal-shorthand/input.js 1:16-1:20}
						loc: SourceLocation esprima/es2015-object-initialiser/proto-literal-shorthand/input.js 1:3-1:20
					}
					JSObjectProperty {
						key: JSStaticPropertyKey {
							value: JSIdentifier {
								name: "__proto__"
								loc: SourceLocation esprima/es2015-object-initialiser/proto-literal-shorthand/input.js 1:22-1:31 (__proto__)
							}
							loc: SourceLocation esprima/es2015-object-initialiser/proto-literal-shorthand/input.js 1:22-1:31
						}
						value: JSReferenceIdentifier {
							name: "__proto__"
							loc: SourceLocation esprima/es2015-object-initialiser/proto-literal-shorthand/input.js 1:22-1:31 (__proto__)
						}
						loc: SourceLocation esprima/es2015-object-initialiser/proto-literal-shorthand/input.js 1:22-1:31
					}
				]
			}
		}
	]
}
```

### `diagnostics`

```

 esprima/es2015-object-initialiser/proto-literal-shorthand/input.js:1:22 parse(js) ━━━━━━━━━━━━━━━━━

  ✖ Redefinition of __proto__ property

    ({ "__proto__": null, __proto__ })
                          ^^^^^^^^^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
