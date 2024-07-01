// @ts-check

import eslint from "@eslint/js";

import eslintConfigPrettier from "eslint-config-prettier";
import tseslint from "typescript-eslint";

export default tseslint.config(
  ...[
    {
      ignores: [".vscode/", "lib/"],
    },
  ],
  eslint.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
);
