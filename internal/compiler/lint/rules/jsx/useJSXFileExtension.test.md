# `harness.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/compiler/lint/rules/harness.test.ts --update-snapshots` to update.

## `jsx/useJSXFileExtension`

### `0`

```

 lint/jsx/useJSXFileExtension/reject/1/test.js:2 lint/jsx/useJSXFileExtension ━━━━━━━━━━━━━━━━━━━━━━

  ✖ Files with the .js extension cannot contain JSX elements.

    1 │ // @jsx
  > 2 │ <div></div>
      │ ^^^^^^^^^^^

  ℹ Change the test.js file extension to .jsx or .tsx.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `0: formatted`

```js
// @jsx
<div />;

```

### `1`

```

 lint/jsx/useJSXFileExtension/reject/2/test.js:2 lint/jsx/useJSXFileExtension ━━━━━━━━━━━━━━━━━━━━━━

  ✖ Files with the .js extension cannot contain JSX elements.

    1 │ // @jsx
  > 2 │ <></>
      │ ^^^^^

  ℹ Change the test.js file extension to .jsx or .tsx.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `1: formatted`

```js


```

### `2`

```

 lint/jsx/useJSXFileExtension/reject/3/test.js:2 lint/jsx/useJSXFileExtension ━━━━━━━━━━━━━━━━━━━━━━

  ✖ Files with the .js extension cannot contain JSX elements.

    1 │ // @jsx
  > 2 │ <Fragment></Fragment>
      │ ^^^^^^^^^^^^^^^^^^^^^

  ℹ Change the test.js file extension to .jsx or .tsx.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `2: formatted`

```js


```

### `3`

```

 lint/jsx/useJSXFileExtension/reject/4/test.js:2 lint/jsx/useJSXFileExtension ━━━━━━━━━━━━━━━━━━━━━━

  ✖ Files with the .js extension cannot contain JSX elements.

    1 │ // @jsx
  > 2 │ <React.Fragment></React.Fragment>
      │ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

  ℹ Change the test.js file extension to .jsx or .tsx.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `3: formatted`

```js


```

### `4`

```
✔ No known problems!

```

### `4: formatted`

```js
"<div></div>";


```

### `5`

```
✔ No known problems!

```

### `5: formatted`

```jsx
// @jsx
<div />;

```

### `6`

```
✔ No known problems!

```

### `6: formatted`

```jsx


```

### `7`

```
✔ No known problems!

```

### `7: formatted`

```jsx


```

### `8`

```
✔ No known problems!

```

### `8: formatted`

```jsx


```

### `9`

```
✔ No known problems!

```

### `9: formatted`

```tsx
// @jsx
<div />;

```

### `10`

```
✔ No known problems!

```

### `10: formatted`

```tsx


```

### `11`

```
✔ No known problems!

```

### `11: formatted`

```tsx


```

### `12`

```
✔ No known problems!

```

### `12: formatted`

```tsx


```
