module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  extends: [
    "standard-with-typescript",
    "plugin:react/recommended",
    "prettier",
    "next/core-web-vitals",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
    tsconfigRootDir: __dirname,
  },
  plugins: ["react", "@typescript-eslint", "testing-library", "jest-dom"],
  rules: {
    "@typescript-eslint/strict-boolean-expressions": 0,
    "@typescript-eslint/prefer-nullish-coalescing": 0,
    "no-duplicate-imports": "error",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  overrides: [
    // Only use Testing Library lint rules in jest test files
    {
      files: ["__tests__/**/?(*.)+(spec|test).[jt]s?(x)"],
      extends: ["plugin:testing-library/react"],
    },
    // use Cypress lint rules in Cypress test files
    {
      files: ["cypress/**/?(*.)+(spec|test).[jt]s?(x)", "cypress/support/*"],
      extends: ["plugin:cypress/recommended"],
      env: { "cypress/globals": true },
    },
  ],
};
