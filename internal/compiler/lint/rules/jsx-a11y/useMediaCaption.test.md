# `harness.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/compiler/lint/rules/harness.test.ts --update-snapshots` to update.

## `jsx-a11y/useMediaCaption`

### `0`

```

 lint/jsx-a11y/useMediaCaption/reject/1/file.tsx:1 lint/jsx-a11y/useMediaCaption ━━━━━━━━━━━━━━━━━━━

  ✖ Provide a track for captions when using audio or video elements.

    <audio {...props} />
    ^^^^^^^^^^^^^^^^^^^^

  ℹ Captions support users with hearing-impairments. They should be a transcription or translation
    of the dialogue, sound effects, musical cues, and other relevant audio information.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `0: formatted`

```tsx
<audio {...props} />;

```

### `1`

```

 lint/jsx-a11y/useMediaCaption/reject/2/file.tsx:1 lint/jsx-a11y/useMediaCaption ━━━━━━━━━━━━━━━━━━━

  ✖ Provide a track for captions when using audio or video elements.

    <video {...props} />
    ^^^^^^^^^^^^^^^^^^^^

  ℹ Captions support users with hearing-impairments. They should be a transcription or translation
    of the dialogue, sound effects, musical cues, and other relevant audio information.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `1: formatted`

```tsx
<video {...props} />;

```

### `2`

```

 lint/jsx-a11y/useMediaCaption/reject/3/file.tsx:1 lint/jsx-a11y/useMediaCaption ━━━━━━━━━━━━━━━━━━━

  ✖ Provide a track for captions when using audio or video elements.

    <audio>child</audio>
    ^^^^^^^^^^^^^^^^^^^^

  ℹ Captions support users with hearing-impairments. They should be a transcription or translation
    of the dialogue, sound effects, musical cues, and other relevant audio information.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `2: formatted`

```tsx
<audio>
	child
</audio>;

```

### `3`

```

 lint/jsx-a11y/useMediaCaption/reject/4/file.tsx:1 lint/jsx-a11y/useMediaCaption ━━━━━━━━━━━━━━━━━━━

  ✖ Provide a track for captions when using audio or video elements.

    <video>child</video>
    ^^^^^^^^^^^^^^^^^^^^

  ℹ Captions support users with hearing-impairments. They should be a transcription or translation
    of the dialogue, sound effects, musical cues, and other relevant audio information.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `3: formatted`

```tsx
<video>
	child
</video>;

```

### `4`

```
✔ No known problems!

```

### `4: formatted`

```tsx
<audio>
	<track kind="captions" {...props} />
</audio>;

```

### `5`

```
✔ No known problems!

```

### `5: formatted`

```tsx
<video>
	<track kind="captions" {...props} />
</video>;

```

### `6`

```
✔ No known problems!

```

### `6: formatted`

```tsx
<video muted={true} {...props} />;

```

### `7`

```
✔ No known problems!

```

### `7: formatted`

```tsx
<Audio>
	child
</Audio>;

```

### `8`

```
✔ No known problems!

```

### `8: formatted`

```tsx
<Video>
	child
</Video>;

```
