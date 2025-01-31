# quotes

This rule enforces consistent quoting attributes with double(`"`) or single(`'`)

## How to use

```js,.eslintrc.js
module.exports = {
  rules: {
    "@thuutri2710/quotes": "error",
  },
};
```

## Rule Details

### Options

This rule has two options

- `"double"` (default): requires the use of double quotes(`"`).
- `"single"`: requires the use of single quotes(`'`)

#### "double"

Examples of **incorrect** code for this rule with the default `"double"` option:

<!-- prettier-ignore -->
```html,incorrect
<div id='foo'></div>
```

Examples of **correct** code for this rule with the default `"double"` option:

```html,correct
<div id="foo"></div>
<div id='containing "double" quotes'></div>
```

#### "single"

Examples of **incorrect** code for this rule with the `"single"` option:

```html,incorrect
<div id="foo"></div>
```

Examples of **correct** code for this rule with the default `"single"` option:

<!-- prettier-ignore -->
```html,correct
<div id='foo'></div>
<div id="containing 'single' quotes"></div>
```

## Further Reading

- [MDN - Quoting attributes](https://developer.mozilla.org/en-US/docs/MDN/Guidelines/Code_guidelines/HTML#Quoting_attributes)
