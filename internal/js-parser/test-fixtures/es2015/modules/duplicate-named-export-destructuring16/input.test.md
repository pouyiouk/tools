# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > modules > duplicate-named-export-destructuring16`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "es2015/modules/duplicate-named-export-destructuring16/input.js"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "module"
	syntax: Array []
	loc: SourceLocation es2015/modules/duplicate-named-export-destructuring16/input.js 1:0-4:0
	body: Array [
		JSExportLocalDeclaration {
			exportKind: "value"
			specifiers: undefined
			loc: SourceLocation es2015/modules/duplicate-named-export-destructuring16/input.js 1:0-1:21
			declaration: JSVariableDeclarationStatement {
				loc: SourceLocation es2015/modules/duplicate-named-export-destructuring16/input.js 1:7-1:21
				declaration: JSVariableDeclaration {
					kind: "const"
					loc: SourceLocation es2015/modules/duplicate-named-export-destructuring16/input.js 1:7-1:21
					declarations: Array [
						JSVariableDeclarator {
							id: JSBindingIdentifier {
								name: "foo"
								loc: SourceLocation es2015/modules/duplicate-named-export-destructuring16/input.js 1:13-1:16 (foo)
							}
							loc: SourceLocation es2015/modules/duplicate-named-export-destructuring16/input.js 1:13-1:20
							init: JSNumericLiteral {
								value: 1
								format: undefined
								loc: SourceLocation es2015/modules/duplicate-named-export-destructuring16/input.js 1:19-1:20
							}
						}
					]
				}
			}
		}
		JSExportLocalDeclaration {
			exportKind: "value"
			specifiers: undefined
			loc: SourceLocation es2015/modules/duplicate-named-export-destructuring16/input.js 2:0-2:33
			declaration: JSVariableDeclarationStatement {
				loc: SourceLocation es2015/modules/duplicate-named-export-destructuring16/input.js 2:7-2:33
				declaration: JSVariableDeclaration {
					kind: "const"
					loc: SourceLocation es2015/modules/duplicate-named-export-destructuring16/input.js 2:7-2:33
					declarations: Array [
						JSVariableDeclarator {
							id: JSBindingArrayPattern {
								loc: SourceLocation es2015/modules/duplicate-named-export-destructuring16/input.js 2:13-2:26
								rest: JSBindingIdentifier {
									name: "foo"
									loc: SourceLocation es2015/modules/duplicate-named-export-destructuring16/input.js 2:22-2:25 (foo)
									meta: JSPatternMeta {
										optional: undefined
										typeAnnotation: undefined
										loc: SourceLocation es2015/modules/duplicate-named-export-destructuring16/input.js 2:22-2:25
									}
								}
								elements: Array [
									JSBindingIdentifier {
										name: "bar"
										loc: SourceLocation es2015/modules/duplicate-named-export-destructuring16/input.js 2:14-2:17 (bar)
										meta: JSPatternMeta {
											optional: undefined
											typeAnnotation: undefined
											loc: SourceLocation es2015/modules/duplicate-named-export-destructuring16/input.js 2:14-2:17
										}
									}
								]
							}
							loc: SourceLocation es2015/modules/duplicate-named-export-destructuring16/input.js 2:13-2:32
							init: JSReferenceIdentifier {
								name: "baz"
								loc: SourceLocation es2015/modules/duplicate-named-export-destructuring16/input.js 2:29-2:32 (baz)
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
