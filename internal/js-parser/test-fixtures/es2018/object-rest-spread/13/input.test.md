# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2018 > object-rest-spread > 13`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "es2018/object-rest-spread/13/input.js"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "module"
	syntax: Array []
	loc: SourceLocation es2018/object-rest-spread/13/input.js 1:0-3:0
	body: Array [
		JSExportLocalDeclaration {
			exportKind: "value"
			specifiers: undefined
			loc: SourceLocation es2018/object-rest-spread/13/input.js 1:0-1:21
			declaration: JSVariableDeclarationStatement {
				loc: SourceLocation es2018/object-rest-spread/13/input.js 1:7-1:21
				declaration: JSVariableDeclaration {
					kind: "const"
					loc: SourceLocation es2018/object-rest-spread/13/input.js 1:7-1:21
					declarations: Array [
						JSVariableDeclarator {
							id: JSBindingIdentifier {
								name: "foo"
								loc: SourceLocation es2018/object-rest-spread/13/input.js 1:13-1:16 (foo)
							}
							loc: SourceLocation es2018/object-rest-spread/13/input.js 1:13-1:20
							init: JSNumericLiteral {
								value: 1
								format: undefined
								loc: SourceLocation es2018/object-rest-spread/13/input.js 1:19-1:20
							}
						}
					]
				}
			}
		}
		JSExportLocalDeclaration {
			exportKind: "value"
			specifiers: undefined
			loc: SourceLocation es2018/object-rest-spread/13/input.js 2:0-2:44
			declaration: JSVariableDeclarationStatement {
				loc: SourceLocation es2018/object-rest-spread/13/input.js 2:7-2:44
				declaration: JSVariableDeclaration {
					kind: "const"
					loc: SourceLocation es2018/object-rest-spread/13/input.js 2:7-2:44
					declarations: Array [
						JSVariableDeclarator {
							id: JSBindingObjectPattern {
								rest: undefined
								loc: SourceLocation es2018/object-rest-spread/13/input.js 2:13-2:37
								properties: Array [
									JSBindingObjectPatternProperty {
										key: JSStaticPropertyKey {
											value: JSIdentifier {
												name: "bar"
												loc: SourceLocation es2018/object-rest-spread/13/input.js 2:15-2:18 (bar)
											}
											loc: SourceLocation es2018/object-rest-spread/13/input.js 2:15-2:18
										}
										value: JSBindingObjectPattern {
											loc: SourceLocation es2018/object-rest-spread/13/input.js 2:20-2:35
											rest: JSBindingIdentifier {
												name: "foo"
												loc: SourceLocation es2018/object-rest-spread/13/input.js 2:30-2:33 (foo)
											}
											properties: Array [
												JSBindingObjectPatternProperty {
													key: JSStaticPropertyKey {
														value: JSIdentifier {
															name: "baz"
															loc: SourceLocation es2018/object-rest-spread/13/input.js 2:22-2:25 (baz)
														}
														loc: SourceLocation es2018/object-rest-spread/13/input.js 2:22-2:25
													}
													value: JSBindingIdentifier {
														name: "baz"
														loc: SourceLocation es2018/object-rest-spread/13/input.js 2:22-2:25 (baz)
													}
													loc: SourceLocation es2018/object-rest-spread/13/input.js 2:22-2:25
												}
											]
										}
										loc: SourceLocation es2018/object-rest-spread/13/input.js 2:15-2:35
									}
								]
							}
							loc: SourceLocation es2018/object-rest-spread/13/input.js 2:13-2:43
							init: JSReferenceIdentifier {
								name: "qux"
								loc: SourceLocation es2018/object-rest-spread/13/input.js 2:40-2:43 (qux)
							}
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
✔ No known problems!

```
