# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > es2015-class > migrated_0007`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "input.js"
		end: Object {
			column: 0
			index: 23
			line: 2
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	body: Array [
		JSClassDeclaration {
			id: JSBindingIdentifier {
				name: "A"
				loc: Object {
					filename: "input.js"
					identifierName: "A"
					end: Object {
						column: 7
						index: 7
						line: 1
					}
					start: Object {
						column: 6
						index: 6
						line: 1
					}
				}
			}
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 22
					index: 22
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			meta: JSClassHead {
				implements: undefined
				superClass: undefined
				superTypeParameters: undefined
				typeParameters: undefined
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 22
						index: 22
						line: 1
					}
					start: Object {
						column: 0
						index: 0
						line: 1
					}
				}
				body: Array [
					JSClassMethod {
						kind: "method"
						key: JSStaticPropertyKey {
							value: JSIdentifier {
								name: "a"
								loc: Object {
									filename: "input.js"
									identifierName: "a"
									end: Object {
										column: 10
										index: 10
										line: 1
									}
									start: Object {
										column: 9
										index: 9
										line: 1
									}
								}
							}
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 10
									index: 10
									line: 1
								}
								start: Object {
									column: 9
									index: 9
									line: 1
								}
							}
						}
						loc: Object {
							filename: "input.js"
							end: Object {
								column: 14
								index: 14
								line: 1
							}
							start: Object {
								column: 9
								index: 9
								line: 1
							}
						}
						body: JSBlockStatement {
							body: Array []
							directives: Array []
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 14
									index: 14
									line: 1
								}
								start: Object {
									column: 12
									index: 12
									line: 1
								}
							}
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
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 12
									index: 12
									line: 1
								}
								start: Object {
									column: 10
									index: 10
									line: 1
								}
							}
						}
						meta: JSClassPropertyMeta {
							abstract: false
							accessibility: undefined
							optional: false
							readonly: false
							static: false
							typeAnnotation: undefined
							start: Object {
								column: 9
								index: 9
								line: 1
							}
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 10
									index: 10
									line: 1
								}
								start: Object {
									column: 9
									index: 9
									line: 1
								}
							}
						}
					}
					JSClassMethod {
						kind: "method"
						key: JSStaticPropertyKey {
							value: JSIdentifier {
								name: "b"
								loc: Object {
									filename: "input.js"
									identifierName: "b"
									end: Object {
										column: 16
										index: 16
										line: 1
									}
									start: Object {
										column: 15
										index: 15
										line: 1
									}
								}
							}
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 16
									index: 16
									line: 1
								}
								start: Object {
									column: 15
									index: 15
									line: 1
								}
							}
						}
						loc: Object {
							filename: "input.js"
							end: Object {
								column: 20
								index: 20
								line: 1
							}
							start: Object {
								column: 15
								index: 15
								line: 1
							}
						}
						body: JSBlockStatement {
							body: Array []
							directives: Array []
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 20
									index: 20
									line: 1
								}
								start: Object {
									column: 18
									index: 18
									line: 1
								}
							}
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
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 18
									index: 18
									line: 1
								}
								start: Object {
									column: 16
									index: 16
									line: 1
								}
							}
						}
						meta: JSClassPropertyMeta {
							abstract: false
							accessibility: undefined
							optional: false
							readonly: false
							static: false
							typeAnnotation: undefined
							start: Object {
								column: 15
								index: 15
								line: 1
							}
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 16
									index: 16
									line: 1
								}
								start: Object {
									column: 15
									index: 15
									line: 1
								}
							}
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