# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `typescript > class > private-fields-static`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "typescript/class/private-fields-static/input.ts"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "module"
	loc: SourceLocation typescript/class/private-fields-static/input.ts 1:0-5:0
	syntax: Array ["ts"]
	body: Array [
		JSClassDeclaration {
			id: JSBindingIdentifier {
				name: "A"
				loc: SourceLocation typescript/class/private-fields-static/input.ts 1:6-1:7 (A)
			}
			loc: SourceLocation typescript/class/private-fields-static/input.ts 1:0-4:1
			meta: JSClassHead {
				implements: undefined
				superClass: undefined
				superTypeParameters: undefined
				typeParameters: undefined
				loc: SourceLocation typescript/class/private-fields-static/input.ts 1:0-4:1
				body: Array [
					JSClassPrivateProperty {
						key: JSPrivateName {
							id: JSIdentifier {
								name: "x"
								loc: SourceLocation typescript/class/private-fields-static/input.ts 2:10-2:11 (x)
							}
							loc: SourceLocation typescript/class/private-fields-static/input.ts 2:9-2:11
						}
						value: undefined
						typeAnnotation: undefined
						loc: SourceLocation typescript/class/private-fields-static/input.ts 2:2-2:12
						meta: JSClassPropertyMeta {
							abstract: false
							accessibility: undefined
							optional: false
							readonly: false
							static: true
							typeAnnotation: undefined
							loc: SourceLocation typescript/class/private-fields-static/input.ts 2:2-2:11
							start: Position 2:2
						}
					}
					JSClassPrivateProperty {
						key: JSPrivateName {
							id: JSIdentifier {
								name: "y"
								loc: SourceLocation typescript/class/private-fields-static/input.ts 3:10-3:11 (y)
							}
							loc: SourceLocation typescript/class/private-fields-static/input.ts 3:9-3:11
						}
						value: undefined
						loc: SourceLocation typescript/class/private-fields-static/input.ts 3:2-3:20
						typeAnnotation: TSStringKeywordTypeAnnotation {loc: SourceLocation typescript/class/private-fields-static/input.ts 3:13-3:19}
						meta: JSClassPropertyMeta {
							abstract: false
							accessibility: undefined
							optional: false
							readonly: false
							static: true
							typeAnnotation: undefined
							loc: SourceLocation typescript/class/private-fields-static/input.ts 3:2-3:11
							start: Position 3:2
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
