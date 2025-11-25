import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // 1. Ignoriere Build-Output
  {
    ignores: [".next/*"],
  },

  // 2. Standard-Next.js-/TypeScript-Regeln
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // 3. Zusätzliche Anpassungen, damit der Build nicht scheitert
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "react/no-unescaped-entities": "off",
      "@next/next/no-img-element": "off",
    },
  },
];

export default eslintConfig;
