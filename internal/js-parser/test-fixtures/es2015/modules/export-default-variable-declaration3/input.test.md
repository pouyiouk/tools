# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > modules > export-default-variable-declaration3`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: true
	directives: Array []
	filename: "es2015/modules/export-default-variable-declaration3/input.js"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "module"
	syntax: Array []
	loc: SourceLocation es2015/modules/export-default-variable-declaration3/input.js 1:0-3:1
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			description: Object {
				advice: Array []
				category: "parse"
				categoryValue: "js"
				message: RAW_MARKUP {value: "Only expressions, functions or classes are allowed as the `default` export."}
			}
			location: Object {
				filename: "es2015/modules/export-default-variable-declaration3/input.js"
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:14
				start: Position 1:15
			}
		}
	]
	body: Array [
		JSExportDefaultDeclaration {
			loc: SourceLocation es2015/modules/export-default-variable-declaration3/input.js 1:0-1:18
			declaration: JSReferenceIdentifier {
				name: "INVALID_PLACEHOLDER"
				loc: SourceLocation es2015/modules/export-default-variable-declaration3/input.js 1:15-1:18
			}
		}
		JSExpressionStatement {
			loc: SourceLocation es2015/modules/export-default-variable-declaration3/input.js 1:19-3:1
			expression: JSAssignmentExpression {
				operator: "="
				loc: SourceLocation es2015/modules/export-default-variable-declaration3/input.js 1:19-3:1
				left: JSAssignmentIdentifier {
					name: "Foo"
					loc: SourceLocation es2015/modules/export-default-variable-declaration3/input.js 1:19-1:22 (Foo)
				}
				right: JSArrowFunctionExpression {
					loc: SourceLocation es2015/modules/export-default-variable-declaration3/input.js 1:25-3:1
					head: JSFunctionHead {
						async: false
						hasHoistedVars: false
						params: Array []
						rest: undefined
						returnType: undefined
						thisType: undefined
						loc: SourceLocation es2015/modules/export-default-variable-declaration3/input.js 1:25-1:30
					}
					body: JSBlockStatement {
						directives: Array []
						loc: SourceLocation es2015/modules/export-default-variable-declaration3/input.js 1:31-3:1
						body: Array [
							JSReturnStatement {
								loc: SourceLocation es2015/modules/export-default-variable-declaration3/input.js 2:4-2:41
								argument: JSTemplateLiteral {
									expressions: Array []
									loc: SourceLocation es2015/modules/export-default-variable-declaration3/input.js 2:11-2:40
									quasis: Array [
										JSTemplateElement {
											cooked: "<div class=\"bar\">Hola</div>"
											raw: "<div class=\"bar\">Hola</div>"
											tail: true
											loc: SourceLocation es2015/modules/export-default-variable-declaration3/input.js 2:12-2:39
										}
									]
								}
							}
						]
					}
				}
			}
		}
	]
}
```

### `diagnostics`

```

 es2015/modules/export-default-variable-declaration3/input.js:1:15 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Only expressions, functions or classes are allowed as the `default` export.

  > 1 │ export default var Foo = () => {
      │                ^
    2 │     return `<div class="bar">Hola</div>`;
    3 │ }

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
