# `suppressions.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/compiler/suppressions.test.ts --update-snapshots` to update.

## `duplicates`

```javascript
Object {
	suppressions: Array [
		Object {
			category: "parse"
			categoryValue: "dog"
			endLine: 2
			filename: "unknown"
			startLine: 2
			loc: SourceLocation unknown 1:15-1:23
		}
		Object {
			category: "parse"
			categoryValue: "dog"
			endLine: 5
			filename: "unknown"
			startLine: 5
			loc: SourceLocation unknown 4:15-1:23
		}
		Object {
			category: "parse"
			categoryValue: "cat"
			endLine: 5
			filename: "unknown"
			startLine: 5
			loc: SourceLocation unknown 4:26-1:34
		}
		Object {
			category: "parse"
			categoryValue: undefined
			endLine: 8
			filename: "unknown"
			startLine: 8
			loc: SourceLocation unknown 7:15-1:18
		}
	]
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			location: Object {
				filename: "unknown"
				integrity: undefined
				language: "text"
				sourceText: undefined
				end: Position 1:31
				start: Position 1:26
			}
			description: Object {
				advice: Array []
				category: "suppressions/duplicate"
				categoryValue: undefined
				message: Array [
					RAW_MARKUP {value: "Duplicate suppression category <emphasis>"}
					"parse(dog)"
					RAW_MARKUP {value: "</emphasis>"}
				]
			}
		}
		Object {
			origins: Array [Object {category: "parse"}]
			location: Object {
				filename: "unknown"
				integrity: undefined
				language: "text"
				sourceText: undefined
				end: Position 4:42
				start: Position 4:37
			}
			description: Object {
				advice: Array []
				category: "suppressions/duplicate"
				categoryValue: undefined
				message: Array [
					RAW_MARKUP {value: "Duplicate suppression category <emphasis>"}
					"parse(dog)"
					RAW_MARKUP {value: "</emphasis>"}
				]
			}
		}
		Object {
			origins: Array [Object {category: "parse"}]
			location: Object {
				filename: "unknown"
				integrity: undefined
				language: "text"
				sourceText: undefined
				end: Position 7:26
				start: Position 7:21
			}
			description: Object {
				advice: Array []
				category: "suppressions/duplicate"
				categoryValue: undefined
				message: Array [
					RAW_MARKUP {value: "Duplicate suppression category <emphasis>"}
					"parse"
					RAW_MARKUP {value: "</emphasis>"}
				]
			}
		}
	]
}
```

## `incorrect suppression comment`

```javascript
Object {
	suppressions: Array []
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			description: Object {
				advice: Array []
				category: "suppressions/incorrectSuppressionStart"
				categoryValue: undefined
				message: RAW_MARKUP {value: "This looks like a suppression comment typo. Did you mean <emphasis>rome-ignore</emphasis> instead?"}
			}
			location: Object {
				filename: "unknown"
				integrity: undefined
				language: "text"
				sourceText: undefined
				end: Position 1:15
				start: Position 1:3
			}
		}
		Object {
			origins: Array [Object {category: "parse"}]
			description: Object {
				advice: Array []
				category: "suppressions/incorrectSuppressionStart"
				categoryValue: undefined
				message: RAW_MARKUP {value: "This looks like a suppression comment typo. Did you mean <emphasis>rome-ignore</emphasis> instead?"}
			}
			location: Object {
				filename: "unknown"
				integrity: undefined
				language: "text"
				sourceText: undefined
				end: Position 4:15
				start: Position 4:3
			}
		}
		Object {
			origins: Array [Object {category: "parse"}]
			description: Object {
				advice: Array []
				category: "suppressions/incorrectSuppressionStart"
				categoryValue: undefined
				message: RAW_MARKUP {value: "This looks like a suppression comment typo. Did you mean <emphasis>rome-ignore</emphasis> instead?"}
			}
			location: Object {
				filename: "unknown"
				integrity: undefined
				language: "text"
				sourceText: undefined
				end: Position 7:16
				start: Position 7:3
			}
		}
		Object {
			origins: Array [Object {category: "parse"}]
			description: Object {
				advice: Array []
				category: "suppressions/incorrectSuppressionStart"
				categoryValue: undefined
				message: RAW_MARKUP {value: "This looks like a suppression comment typo. Did you mean <emphasis>rome-ignore</emphasis> instead?"}
			}
			location: Object {
				filename: "unknown"
				integrity: undefined
				language: "text"
				sourceText: undefined
				end: Position 10:20
				start: Position 10:3
			}
		}
		Object {
			origins: Array [Object {category: "parse"}]
			description: Object {
				advice: Array []
				category: "suppressions/incorrectSuppressionStart"
				categoryValue: undefined
				message: RAW_MARKUP {value: "This looks like a suppression comment typo. Did you mean <emphasis>rome-ignore</emphasis> instead?"}
			}
			location: Object {
				filename: "unknown"
				integrity: undefined
				language: "text"
				sourceText: undefined
				end: Position 13:22
				start: Position 13:3
			}
		}
		Object {
			origins: Array [Object {category: "parse"}]
			description: Object {
				advice: Array []
				category: "suppressions/incorrectSuppressionStart"
				categoryValue: undefined
				message: RAW_MARKUP {value: "This looks like a suppression comment typo. Did you mean <emphasis>rome-ignore</emphasis> instead?"}
			}
			location: Object {
				filename: "unknown"
				integrity: undefined
				language: "text"
				sourceText: undefined
				end: Position 16:21
				start: Position 16:3
			}
		}
		Object {
			origins: Array [Object {category: "parse"}]
			description: Object {
				advice: Array []
				category: "suppressions/incorrectSuppressionStart"
				categoryValue: undefined
				message: RAW_MARKUP {value: "This looks like a suppression comment typo. Did you mean <emphasis>rome-ignore</emphasis> instead?"}
			}
			location: Object {
				filename: "unknown"
				integrity: undefined
				language: "text"
				sourceText: undefined
				end: Position 19:23
				start: Position 19:3
			}
		}
	]
}
```

## `missing explanation`

```javascript
Object {
	suppressions: Array [
		Object {
			category: "parse"
			categoryValue: undefined
			endLine: 2
			filename: "unknown"
			startLine: 2
			loc: SourceLocation unknown 1:15-1:20
		}
		Object {
			category: "parse"
			categoryValue: undefined
			endLine: 5
			filename: "unknown"
			startLine: 5
			loc: SourceLocation unknown 4:15-1:18
		}
	]
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			description: Object {
				advice: Array []
				category: "suppressions/missingExplanation"
				categoryValue: undefined
				message: RAW_MARKUP {value: "Suppression comments must have an explanation"}
			}
			location: Object {
				filename: "unknown"
				integrity: undefined
				language: "text"
				sourceText: undefined
				end: Position 1:3
				start: Position 1:3
			}
		}
		Object {
			origins: Array [Object {category: "parse"}]
			description: Object {
				advice: Array []
				category: "suppressions/missingExplanation"
				categoryValue: undefined
				message: RAW_MARKUP {value: "Suppression comments must have an explanation"}
			}
			location: Object {
				filename: "unknown"
				integrity: undefined
				language: "text"
				sourceText: undefined
				end: Position 4:3
				start: Position 4:3
			}
		}
	]
}
```

## `multiple categories`

```javascript
Object {
	diagnostics: Array []
	suppressions: Array [
		Object {
			category: "parse"
			categoryValue: "foo"
			endLine: 2
			filename: "unknown"
			startLine: 2
			loc: SourceLocation unknown 1:15-1:23
		}
		Object {
			category: "parse"
			categoryValue: "dog"
			endLine: 2
			filename: "unknown"
			startLine: 2
			loc: SourceLocation unknown 1:26-1:36
		}
		Object {
			category: "parse"
			categoryValue: "bar"
			endLine: 5
			filename: "unknown"
			startLine: 5
			loc: SourceLocation unknown 4:16-1:24
		}
		Object {
			category: "parse"
			categoryValue: "cat"
			endLine: 5
			filename: "unknown"
			startLine: 5
			loc: SourceLocation unknown 4:27-4:37
		}
		Object {
			category: "parse"
			categoryValue: "yes"
			endLine: 10
			filename: "unknown"
			startLine: 10
			loc: SourceLocation unknown 8:15-2:25
		}
		Object {
			category: "parse"
			categoryValue: "frog"
			endLine: 10
			filename: "unknown"
			startLine: 10
			loc: SourceLocation unknown 8:26-8:37
		}
		Object {
			category: "parse"
			categoryValue: "wow"
			endLine: 16
			filename: "unknown"
			startLine: 16
			loc: SourceLocation unknown 14:15-3:25
		}
		Object {
			category: "parse"
			categoryValue: "fish"
			endLine: 16
			filename: "unknown"
			startLine: 16
			loc: SourceLocation unknown 14:26-14:37
		}
	]
}
```

## `multiple overlap suppressions`

```javascript
Object {
	diagnostics: Array [
		Object {
			origins: Array []
			location: SourceLocation unknown 3:17-3:22
			description: Object {
				advice: Array []
				category: "suppressions/overlap"
				message: Array [
					RAW_MARKUP {value: "overlap suppression category <emphasis>"}
					"parse"
					RAW_MARKUP {value: "</emphasis>"}
				]
			}
		}
		Object {
			origins: Array []
			location: SourceLocation unknown 4:17-4:22
			description: Object {
				advice: Array []
				category: "suppressions/overlap"
				message: Array [
					RAW_MARKUP {value: "overlap suppression category <emphasis>"}
					"parse"
					RAW_MARKUP {value: "</emphasis>"}
				]
			}
		}
	]
	suppressions: Array [
		Object {
			category: "parse"
			categoryValue: undefined
			endLine: 6
			filename: "unknown"
			startLine: 2
			loc: SourceLocation unknown 1:15-1:20
		}
		Object {
			category: "parse"
			categoryValue: undefined
			endLine: 5
			filename: "unknown"
			startLine: 5
			loc: SourceLocation unknown 3:17-3:22
		}
		Object {
			category: "parse"
			categoryValue: undefined
			endLine: 5
			filename: "unknown"
			startLine: 5
			loc: SourceLocation unknown 4:17-4:22
		}
		Object {
			category: "parse"
			categoryValue: undefined
			endLine: 9
			filename: "unknown"
			startLine: 9
			loc: SourceLocation unknown 8:15-8:20
		}
	]
}
```

## `overlap suppression with a non-overlap suppression`

```javascript
Object {
	diagnostics: Array [
		Object {
			origins: Array []
			location: SourceLocation unknown 3:17-3:22
			description: Object {
				advice: Array []
				category: "suppressions/overlap"
				message: Array [
					RAW_MARKUP {value: "overlap suppression category <emphasis>"}
					"parse"
					RAW_MARKUP {value: "</emphasis>"}
				]
			}
		}
	]
	suppressions: Array [
		Object {
			category: "parse"
			categoryValue: undefined
			endLine: 5
			filename: "unknown"
			startLine: 2
			loc: SourceLocation unknown 1:15-1:20
		}
		Object {
			category: "parse"
			categoryValue: undefined
			endLine: 4
			filename: "unknown"
			startLine: 4
			loc: SourceLocation unknown 3:17-3:22
		}
		Object {
			category: "parse"
			categoryValue: undefined
			endLine: 8
			filename: "unknown"
			startLine: 8
			loc: SourceLocation unknown 7:15-7:20
		}
	]
}
```

## `overlap suppressions`

```javascript
Object {
	diagnostics: Array [
		Object {
			origins: Array []
			location: SourceLocation unknown 3:17-3:22
			description: Object {
				advice: Array []
				category: "suppressions/overlap"
				message: Array [
					RAW_MARKUP {value: "overlap suppression category <emphasis>"}
					"parse"
					RAW_MARKUP {value: "</emphasis>"}
				]
			}
		}
	]
	suppressions: Array [
		Object {
			category: "parse"
			categoryValue: undefined
			endLine: 5
			filename: "unknown"
			startLine: 2
			loc: SourceLocation unknown 1:15-1:20
		}
		Object {
			category: "parse"
			categoryValue: undefined
			endLine: 4
			filename: "unknown"
			startLine: 4
			loc: SourceLocation unknown 3:17-3:22
		}
	]
}
```

## `overlap suppressions with suppressions in between overlaps`

```javascript
Object {
	diagnostics: Array [
		Object {
			origins: Array []
			location: SourceLocation unknown 5:17-5:27
			description: Object {
				advice: Array []
				category: "suppressions/overlap"
				message: Array [
					RAW_MARKUP {value: "overlap suppression category <emphasis>"}
					"parse(foo)"
					RAW_MARKUP {value: "</emphasis>"}
				]
			}
		}
	]
	suppressions: Array [
		Object {
			category: "parse"
			categoryValue: "foo"
			endLine: 7
			filename: "unknown"
			startLine: 2
			loc: SourceLocation unknown 1:15-1:25
		}
		Object {
			category: "parse"
			categoryValue: "bar"
			endLine: 6
			filename: "unknown"
			startLine: 6
			loc: SourceLocation unknown 3:17-3:27
		}
		Object {
			category: "parse"
			categoryValue: "baz"
			endLine: 6
			filename: "unknown"
			startLine: 6
			loc: SourceLocation unknown 4:17-4:27
		}
		Object {
			category: "parse"
			categoryValue: "foo"
			endLine: 6
			filename: "unknown"
			startLine: 6
			loc: SourceLocation unknown 5:17-5:27
		}
	]
}
```

## `single category`

```javascript
Object {
	diagnostics: Array []
	suppressions: Array [
		Object {
			category: "parse"
			categoryValue: undefined
			endLine: 2
			filename: "unknown"
			startLine: 2
			loc: SourceLocation unknown 1:15-1:20
		}
		Object {
			category: "parse"
			categoryValue: undefined
			endLine: 5
			filename: "unknown"
			startLine: 5
			loc: SourceLocation unknown 4:16-4:21
		}
		Object {
			category: "parse"
			categoryValue: undefined
			endLine: 10
			filename: "unknown"
			startLine: 10
			loc: SourceLocation unknown 8:15-8:20
		}
		Object {
			category: "parse"
			categoryValue: undefined
			endLine: 16
			filename: "unknown"
			startLine: 16
			loc: SourceLocation unknown 14:15-14:20
		}
	]
}
```
