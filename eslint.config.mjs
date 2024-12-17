import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    plugins: ['prettier'],
    extends: ['plugin:prettier/recommended'],
    rules: {
      'prettier/prettier': 'error',
      // Optionally, you can add specific Prettier rules
      // 'prettier/prettier': [
      //   'error',
      //   {
      //     singleQuote: true,
      //     trailingComma: 'es5',
      //     printWidth: 100,
      //   }
      // ]
    },
  },
]

export default eslintConfig
