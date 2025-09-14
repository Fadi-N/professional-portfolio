import nextPlugin from '@next/eslint-plugin-next';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import prettierConfig from 'eslint-config-prettier';
import betterTailwindcssPlugin from 'eslint-plugin-better-tailwindcss';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import a11yPlugin from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';
import securityPlugin from 'eslint-plugin-security';
import globals from 'globals';
import { FlatCompat } from '@eslint/eslintrc';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const config = [
  // Next.js recommended configs using compat for compatibility
  ...compat.extends('next/core-web-vitals', 'next/typescript'),

  {
    ignores: ['node_modules/**', '.next/**', 'out/**', 'build/**', 'dist/**', 'next-env.d.ts'],
  },

  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: typescriptParser,
      parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      '@next/next': nextPlugin,
      'better-tailwindcss': betterTailwindcssPlugin,
      'react': reactPlugin,
      'react-hooks': reactHooksPlugin,
      'jsx-a11y': a11yPlugin,
      'import': importPlugin,
      'security': securityPlugin,
    },
    settings: {
      'better-tailwindcss': {
        config: './tailwind.config.ts',
      },
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {
          project: './tsconfig.json',
        },
      },
    },
    rules: {
      // TypeScript rules (using strict + stylistic presets)
      ...typescriptPlugin.configs.strict.rules,
      ...typescriptPlugin.configs['strict-type-checked'].rules,
      ...typescriptPlugin.configs['stylistic-type-checked'].rules,

      // React rules
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,

      // A11y rules
      ...a11yPlugin.configs.recommended.rules,

      // Security rules
      ...securityPlugin.configs.recommended.rules,

      // Tailwind rules
      ...betterTailwindcssPlugin.configs['recommended-warn'].rules,
      'better-tailwindcss/no-unregistered-classes': [
        'warn',
        { detectComponentClasses: true },
      ],
      'better-tailwindcss/enforce-consistent-line-wrapping': [
        'error',
        { printWidth: 140, preferSingleLine: true },
      ],

      // Custom overrides and additions
      'no-console': 'warn',
      'max-len': 'off',
      'no-nested-ternary': 'off',
      'no-await-in-loop': 'off',

      // TypeScript custom overrides
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports' }
      ],

      // React specific overrides
      'react/react-in-jsx-scope': 'off', // Next.js handles this
      'react/prop-types': 'off', // Using TypeScript
      'react/jsx-no-useless-fragment': 'warn',
      'react/self-closing-comp': 'warn',

      // Import/Export organization
      'import/no-duplicates': 'error',
      'no-restricted-imports': ['error', {
        'patterns': [
          {
            'group': ['../*', '../**'],
            'message': 'Relative imports from parent directories are not allowed. Use absolute imports with ~ or direct public/ paths instead.'
          }
        ]
      }],
      'import/order': ['warn', {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        alphabetize: { order: 'asc' }
      }],
      'import/first': 'error',
      'import/newline-after-import': 'warn',

      // General code quality
      'prefer-const': 'error',
      'no-var': 'error',
      'object-shorthand': 'warn',
      'prefer-template': 'warn',
      'security/detect-object-injection': 'off',
    },
  },

  {
    files: ['*.{js,mjs}'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },

  prettierConfig,
];

export default config;