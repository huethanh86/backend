import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];

<<<<<<< HEAD
=======
module.exports = {
  env: {
   node: true,
   commonjs: true,
   es2021: true,
  },
  extends: ['eslint:recommended', 'prettier'],
};
>>>>>>> 697733f53b85c0429d1d94dc9397204af20eeace
