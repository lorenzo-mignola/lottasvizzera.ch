import antfu from "@antfu/eslint-config";

export default antfu({
  formatters: true,
  react: true,
  ignores: [
    "dist",
    ".next",
    ".vscode",
  ],
  stylistic: {
    "brace-style": "1tbs",
    "semi": true,
    "quotes": "double",
  },
});
