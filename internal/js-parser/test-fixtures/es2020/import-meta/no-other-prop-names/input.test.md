# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2020 > import-meta > no-other-prop-names`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	filename: "es2020/import-meta/no-other-prop-names/input.js"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "module"
	syntax: Array []
	loc: SourceLocation es2020/import-meta/no-other-prop-names/input.js 1:0-2:0
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation es2020/import-meta/no-other-prop-names/input.js 1:0-1:15
			expression: JSMetaProperty {
				loc: SourceLocation es2020/import-meta/no-other-prop-names/input.js 1:0-1:14
				meta: JSIdentifier {
					name: "import"
					loc: SourceLocation es2020/import-meta/no-other-prop-names/input.js 1:0-1:6 (import)
				}
				property: JSIdentifier {
					name: "notMeta"
					loc: SourceLocation es2020/import-meta/no-other-prop-names/input.js 1:7-1:14 (notMeta)
				}
			}
		}
	]
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			location: Object {
				filename: "es2020/import-meta/no-other-prop-names/input.js"
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:14
				start: Position 1:7
			}
			description: Object {
				advice: Array []
				category: "parse"
				categoryValue: "js"
				message: Array [
					RAW_MARKUP {value: "The only valid meta property for "}
					"import"
					RAW_MARKUP {value: " is "}
					"import"
					RAW_MARKUP {value: "."}
					"meta"
				]
			}
		}
	]
}
```

### `diagnostics`

```

 es2020/import-meta/no-other-prop-names/input.js:1:7 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ The only valid meta property for import is import.meta

    import.notMeta;
           ^^^^^^^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
