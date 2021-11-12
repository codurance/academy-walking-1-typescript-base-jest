module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    "@typescript-eslint/camelcase": false,
    "@typescript-eslint/explicit-function-return-type": false,
    "@typescript-eslint/no-parameter-properties": false,
    "@typescript-eslint/no-non-null-assertion": false,
    "import/no-unresolved": 0,
    "import/order": "error",
    "quote-props": ["error", "as-needed"],
    "no-console": "error",
  },
};
