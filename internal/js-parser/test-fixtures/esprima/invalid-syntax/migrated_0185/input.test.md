# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > invalid-syntax > migrated_0185`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	filename: "esprima/invalid-syntax/migrated_0185/input.js"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation esprima/invalid-syntax/migrated_0185/input.js 1:0-2:0
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			location: Object {
				filename: "esprima/invalid-syntax/migrated_0185/input.js"
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:40
				start: Position 1:36
			}
			description: Object {
				advice: Array []
				category: "parse"
				categoryValue: "js"
				message: Array [
					"eval"
					RAW_MARKUP {value: " is a reserved word"}
				]
			}
		}
	]
	body: Array [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "hello"
				loc: SourceLocation esprima/invalid-syntax/migrated_0185/input.js 1:9-1:14 (hello)
			}
			loc: SourceLocation esprima/invalid-syntax/migrated_0185/input.js 1:0-1:48
			head: JSFunctionHead {
				async: false
				generator: false
				hasHoistedVars: true
				params: Array []
				rest: undefined
				returnType: undefined
				thisType: undefined
				typeParameters: undefined
				loc: SourceLocation esprima/invalid-syntax/migrated_0185/input.js 1:14-1:16
			}
			body: JSBlockStatement {
				loc: SourceLocation esprima/invalid-syntax/migrated_0185/input.js 1:17-1:48
				directives: Array [
					JSDirective {
						value: "use strict"
						loc: SourceLocation esprima/invalid-syntax/migrated_0185/input.js 1:18-1:31
					}
				]
				body: Array [
					JSVariableDeclarationStatement {
						loc: SourceLocation esprima/invalid-syntax/migrated_0185/input.js 1:32-1:46
						declaration: JSVariableDeclaration {
							kind: "var"
							loc: SourceLocation esprima/invalid-syntax/migrated_0185/input.js 1:32-1:46
							declarations: Array [
								JSVariableDeclarator {
									id: JSBindingIdentifier {
										name: "eval"
										loc: SourceLocation esprima/invalid-syntax/migrated_0185/input.js 1:36-1:40 (eval)
									}
									loc: SourceLocation esprima/invalid-syntax/migrated_0185/input.js 1:36-1:45
									init: JSNumericLiteral {
										value: 10
										format: undefined
										loc: SourceLocation esprima/invalid-syntax/migrated_0185/input.js 1:43-1:45
									}
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

 esprima/invalid-syntax/migrated_0185/input.js:1:36 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ eval is a reserved word

    function hello() {'use strict'; var eval = 10; }
                                        ^^^^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
