# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `typescript > interface > construct-signature`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "typescript/interface/construct-signature/input.ts"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "module"
	loc: SourceLocation typescript/interface/construct-signature/input.ts 1:0-4:0
	syntax: Array ["ts"]
	body: Array [
		TSInterfaceDeclaration {
			id: JSBindingIdentifier {
				name: "I"
				loc: SourceLocation typescript/interface/construct-signature/input.ts 1:10-1:11 (I)
			}
			extends: undefined
			typeParameters: undefined
			loc: SourceLocation typescript/interface/construct-signature/input.ts 1:0-3:1
			body: TSInterfaceBody {
				loc: SourceLocation typescript/interface/construct-signature/input.ts 1:12-3:1
				body: Array [
					TSConstructSignatureDeclaration {
						loc: SourceLocation typescript/interface/construct-signature/input.ts 2:4-2:26
						typeAnnotation: TSVoidKeywordTypeAnnotation {loc: SourceLocation typescript/interface/construct-signature/input.ts 2:21-2:25}
						meta: TSSignatureDeclarationMeta {
							rest: undefined
							typeParameters: undefined
							loc: SourceLocation typescript/interface/construct-signature/input.ts 2:8-2:25
							parameters: Array [
								JSBindingIdentifier {
									name: "x"
									loc: SourceLocation typescript/interface/construct-signature/input.ts 2:9-2:10 (x)
									meta: JSPatternMeta {
										optional: undefined
										loc: SourceLocation typescript/interface/construct-signature/input.ts 2:9-2:18
										typeAnnotation: TSNumberKeywordTypeAnnotation {loc: SourceLocation typescript/interface/construct-signature/input.ts 2:12-2:18}
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
