# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > es2015-super-property > super_computed`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "esprima/es2015-super-property/super_computed/input.js"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation esprima/es2015-super-property/super_computed/input.js 1:0-6:0
	body: Array [
		JSClassDeclaration {
			id: JSBindingIdentifier {
				name: "A"
				loc: SourceLocation esprima/es2015-super-property/super_computed/input.js 1:6-1:7 (A)
			}
			loc: SourceLocation esprima/es2015-super-property/super_computed/input.js 1:0-5:1
			meta: JSClassHead {
				implements: undefined
				superTypeParameters: undefined
				typeParameters: undefined
				loc: SourceLocation esprima/es2015-super-property/super_computed/input.js 1:0-5:1
				superClass: JSReferenceIdentifier {
					name: "B"
					loc: SourceLocation esprima/es2015-super-property/super_computed/input.js 1:16-1:17 (B)
				}
				body: Array [
					JSClassMethod {
						kind: "method"
						key: JSStaticPropertyKey {
							value: JSIdentifier {
								name: "X"
								loc: SourceLocation esprima/es2015-super-property/super_computed/input.js 2:4-2:5 (X)
							}
							loc: SourceLocation esprima/es2015-super-property/super_computed/input.js 2:4-2:5
						}
						loc: SourceLocation esprima/es2015-super-property/super_computed/input.js 2:4-4:5
						meta: JSClassPropertyMeta {
							abstract: false
							accessibility: undefined
							optional: false
							readonly: false
							static: false
							typeAnnotation: undefined
							loc: SourceLocation esprima/es2015-super-property/super_computed/input.js 2:4-2:5
							start: Position 2:4
						}
						head: JSFunctionHead {
							async: false
							generator: false
							hasHoistedVars: false
							params: Array []
							rest: undefined
							returnType: undefined
							thisType: undefined
							typeParameters: undefined
							loc: SourceLocation esprima/es2015-super-property/super_computed/input.js 2:5-2:7
						}
						body: JSBlockStatement {
							directives: Array []
							loc: SourceLocation esprima/es2015-super-property/super_computed/input.js 2:8-4:5
							body: Array [
								JSReturnStatement {
									loc: SourceLocation esprima/es2015-super-property/super_computed/input.js 3:8-3:23
									argument: JSMemberExpression {
										loc: SourceLocation esprima/es2015-super-property/super_computed/input.js 3:15-3:23
										object: JSSuper {loc: SourceLocation esprima/es2015-super-property/super_computed/input.js 3:15-3:20}
										property: JSComputedMemberProperty {
											value: JSNumericLiteral {
												value: 1
												format: undefined
												loc: SourceLocation esprima/es2015-super-property/super_computed/input.js 3:21-3:22
											}
											loc: SourceLocation esprima/es2015-super-property/super_computed/input.js 3:20-3:23
										}
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
✔ No known problems!

```
