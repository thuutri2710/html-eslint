# require-meta-viewport

This rule enforces to use `<meta name="viewport" content="..">` in the `<head>`.

## Why?

Different browsers and devices may have default viewport settings.
Explicitly setting the viewport properties using the `<meta name="viewport">` tag ensures a consistent and predictable display across various platforms.

## How to use

```js,.eslintrc.js
module.exports = {
  rules: {
    "@thuutri2710/require-meta-viewport": "error",
  },
};
```

## Rule Details

Examples of **incorrect** code for this rule:

```html,incorrect
<html>
  <head></head>
</html>
```

Examples of **correct** code for this rule:

```html,correct
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
</html>
```
