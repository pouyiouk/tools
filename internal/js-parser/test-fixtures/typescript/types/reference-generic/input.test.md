# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `typescript > types > reference-generic`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "typescript/types/reference-generic/input.ts"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "module"
	loc: SourceLocation typescript/types/reference-generic/input.ts 1:0-2:0
	syntax: Array ["ts"]
	body: Array [
		JSVariableDeclarationStatement {
			loc: SourceLocation typescript/types/reference-generic/input.ts 1:0-1:21
			declaration: JSVariableDeclaration {
				kind: "let"
				loc: SourceLocation typescript/types/reference-generic/input.ts 1:0-1:21
				declarations: Array [
					JSVariableDeclarator {
						id: JSBindingIdentifier {
							name: "x"
							loc: SourceLocation typescript/types/reference-generic/input.ts 1:4-1:20
							meta: JSPatternMeta {
								definite: undefined
								loc: SourceLocation typescript/types/reference-generic/input.ts 1:4-1:20
								typeAnnotation: TSTypeReference {
									loc: SourceLocation typescript/types/reference-generic/input.ts 1:7-1:20
									typeName: JSReferenceIdentifier {
										name: "Array"
										loc: SourceLocation typescript/types/reference-generic/input.ts 1:7-1:12 (Array)
									}
									typeParameters: TSTypeParameterInstantiation {
										loc: SourceLocation typescript/types/reference-generic/input.ts 1:12-1:20
										params: Array [TSNumberKeywordTypeAnnotation {loc: SourceLocation typescript/types/reference-generic/input.ts 1:13-1:19}]
									}
								}
							}
						}
						init: undefined
						loc: SourceLocation typescript/types/reference-generic/input.ts 1:4-1:20
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
