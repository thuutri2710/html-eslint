module.exports = {
  extends: ["eslint:recommended"],
  plugins: ["jest", "node"],
  parser: "@thuutri2710/parser",
  parserOptions: {
    ecmaVersion: 9,
  },
  env: {
    node: true,
    es6: true,
  },
  rules: {
    "node/no-unsupported-features/es-builtins": "error",
    "node/no-unsupported-features/es-syntax": "error",
    "node/no-unsupported-features/node-builtins": "error",
  },
  overrides: [
    {
      files: ["*.test.js"],
      env: {
        "jest/globals": true,
      },
    },
  ],
};
