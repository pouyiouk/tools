# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `typescript > enum > members`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "typescript/enum/members/input.ts"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "module"
	loc: SourceLocation typescript/enum/members/input.ts 1:0-5:0
	syntax: Array ["ts"]
	body: Array [
		TSEnumDeclaration {
			id: JSBindingIdentifier {
				name: "E"
				loc: SourceLocation typescript/enum/members/input.ts 1:5-1:6 (E)
			}
			const: false
			loc: SourceLocation typescript/enum/members/input.ts 1:0-4:1
			members: Array [
				TSEnumMember {
					id: JSIdentifier {
						name: "A"
						loc: SourceLocation typescript/enum/members/input.ts 2:4-2:5 (A)
					}
					initializer: undefined
					loc: SourceLocation typescript/enum/members/input.ts 2:4-2:5
				}
				TSEnumMember {
					id: JSIdentifier {
						name: "B"
						loc: SourceLocation typescript/enum/members/input.ts 3:4-3:5 (B)
					}
					loc: SourceLocation typescript/enum/members/input.ts 3:4-3:9
					initializer: JSNumericLiteral {
						value: 0
						format: undefined
						loc: SourceLocation typescript/enum/members/input.ts 3:8-3:9
					}
				}
			]
		}
	]
}
```

### `diagnostics`

```
✔ No known problems!

```
