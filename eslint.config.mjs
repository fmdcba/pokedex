import globals from 'globals';
import jest from 'eslint-plugin-jest';
import cypress from 'eslint-plugin-cypress';
import prettier from 'eslint-plugin-prettier';

import path from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import pluginJs from '@eslint/js';

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: pluginJs.configs.recommended,
});

export default [
  {
    languageOptions: { globals: globals.browser },
    plugins: {
      jest,
      cypress,
      prettier,
    },
  },
  ...compat.extends('airbnb-base'),
];
