import eslintConfigPrettier from "eslint-config-prettier";
import globals from "globals";
import pluginJs from "@eslint/js";

/**
 * @type {import('eslint').Linter.Config[]}
 */
export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
    },
  },
  {
    languageOptions: {
      globals: globals.node,
    },
  },
  // pluginJs.configs.recommended,
  pluginJs.configs.all,
  {
    rules: {
      "sort-keys": "off",
      "capitalized-comments": "off",
      "no-console": "off",
      "no-magic-numbers": "off",
      "no-plusplus": "off",
      "no-undef": "off",
      "one-var": "off",
      "require-unicode-regexp": "off",
      strict: "off",
      "no-ternary": "off",
      "no-irregular-whitespace": [
        "error",
        {
          skipStrings: true,
          skipComments: true,
          skipRegExps: true,
          skipTemplates: true,
        },
      ],
      "max-lines-per-function": "off",
      "max-lines": "off",
      "no-inline-comments": "off",
      "max-params": "off",
      "id-length": "off",
      "func-style": "off",
      "prefer-named-capture-group": "off",

      "max-statements": [
        "warn",
        {
          max: 50,
        },
      ],
      "no-unused-vars": "warn",
      "no-loss-of-precision": "warn",
      "camelcase": "warn",
      "prefer-destructuring": "warn",
    },
  },
  eslintConfigPrettier,
];
