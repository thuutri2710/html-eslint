# require-doctype

This rule enforces to use `<!DOCTYPE html>` in the document.

## How to use

```js,.eslintrc.js
module.exports = {
  rules: {
    "@thuutri2710/require-doctype": "error",
  },
};
```

## Rule Details

Examples of **incorrect** code for this rule:

```html,incorrect
<html></html>
```

Examples of **correct** code for this rule:

```html,correct
<!DOCTYPE html>
<html></html>
```

## Further Reading

- [MDN - Doctype](https://developer.mozilla.org/en-US/docs/Glossary/Doctype)
