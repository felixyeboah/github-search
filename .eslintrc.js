/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ["sznm/react", "plugin:react/jsx-runtime"],
  rules: {
    "@typescript-eslint/no-throw-literal": "off",
    "@typescript-eslint/naming-convention": "off",
    "sonarjs/no-identical-functions": "off",
    "react/jsx-no-useless-fragment": "off",
    "@typescript-eslint/no-unused-vars": "off",
    // "import/order": "off",
    "import/extensions": "off", // temporarily off as it produce false positive checking in this project's absolute imports
  },
};
