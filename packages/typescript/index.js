const { defineConfig } = require('eslint-define-config')
const basic = require('@ltteng/eslint-config-basic')

module.exports = defineConfig({
  extends: [
    '@ltteng/eslint-config-basic',
    'plugin:@typescript-eslint/recommended'
  ],
  ignorePatterns: ['auto-import.d.ts', 'components.d.ts'],
  overrides: [
    ...basic.overrides,
    {
      files: ['*.ts'],
      rules: {
        'no-undef': 'off'
      }
    },
    {
      files: ['*.d.ts'],
      rules: {
        'import/no-duplicates': 'off'
      }
    },
    {
      files: ['*.js', '*.cjs'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off'
      }
    }
  ],
  rules: {
    '@typescript-eslint/naming-convention': [
      'error',
      { selector: 'interface', format: ['PascalCase'] },
      { selector: 'typeAlias', format: ['PascalCase'] }
    ],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports' }
    ]
  }
})
