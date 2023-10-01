const { resolve } = require("node:path");

const project = resolve(__dirname, "tsconfig.json");

module.exports = {
  extends: [
    require.resolve("@vercel/style-guide/eslint/node"),
    require.resolve("@vercel/style-guide/eslint/browser"),
    require.resolve("@vercel/style-guide/eslint/typescript"),
    require.resolve("@vercel/style-guide/eslint/react"),
    require.resolve("@vercel/style-guide/eslint/next"),
    "plugin:tailwindcss/recommended",
    "prettier",
  ],
  rules: {
    "prettier/prettier": "error",
    "@typescript-eslint/explicit-function-return-type": "off",
  },
  plugins: ["prettier"],
  parserOptions: {
    project,
  },
  overrides: [
    // Next.js needs default exports for pages and API points
    {
      files: ["page.tsx", "layout.tsx", "tailwind.config.ts"],
      rules: {
        "import/no-default-export": "off",
      },
    },
    {
      files: ["./util/**/*"],
      rules: {
        "unicorn/filename-case": "off",
      },
    },
  ],
};
