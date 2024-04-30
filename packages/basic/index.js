const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  env: {
    es6: true,
    browser: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:jsonc/recommended-with-jsonc',
    'plugin:yml/standard',
    'plugin:markdown/recommended'
  ],
  ignorePatterns: [
    '*.min.*',
    'CHANGELOG.md',
    'dist',
    'LICENSE*',
    'output',
    'coverage',
    'temp',
    'packages-lock.json',
    'pnpm-lock.yaml',
    'yarn.lock',
    'fixtures',
    '__snapshots__',
    '!.github',
    '!.vitepress',
    '!.vscode'
  ],
  plugins: ['import', 'html'],
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.mjs', '.ts', '.d.ts'] }
    }
  },
  overrides: [
    {
      files: ['*.json', '*.json5', '*.jsonc', '*rc'],
      parser: 'jsonc-eslint-parser'
    },
    {
      files: ['package.json'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'jsonc/sort-keys': [
          'error',
          {
            pathPattern: '^$',
            order: [
              'name',
              'version',
              'private',
              'packageManager',
              'description',
              'type',
              'keywords',
              'license',
              'homepage',
              'bugs',
              'repository',
              'author',
              'contributors',
              'funding',
              'files',
              'main',
              'module',
              'types',
              'exports',
              'typesVersions',
              'unpkg',
              'jsdelivr',
              'browser',
              'bin',
              'man',
              'directories',
              'publishConfig',
              'scripts',
              'peerDependencies',
              'peerDependenciesMeta',
              'optionalDependencies',
              'dependencies',
              'devDependencies',
              'engines',
              'config',
              'overrides',
              'pnpm',
              'husky',
              'lint-staged',
              'eslintConfig'
            ]
          },
          {
            pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
            order: { type: 'asc' }
          }
        ]
      }
    },
    {
      files: ['scripts/**/*.*', 'cli.*'],
      rules: {
        'no-console': 'off'
      }
    },
    {
      files: ['*.test.ts', '*.test.js', '*.spec.ts', '*.spec.js'],
      rules: {
        'no-unused-expressions': 'off'
      }
    },
    {
      // Code blocks in markdown file
      files: ['**/*.md/*.*'],
      rules: {
        '@typescript-eslint/no-redeclare': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        'no-alert': 'off',
        'no-console': 'off',
        'no-restricted-imports': 'off',
        'no-undef': 'off',
        'no-unused-expressions': 'off',
        'no-unused-vars': 'off'
      }
    }
  ],
  rules: {
    // import
    'import/first': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-duplicates': 'error',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type'
        ],
        pathGroups: [{ pattern: '@/**', group: 'internal' }],
        pathGroupsExcludedImportTypes: ['type']
      }
    ],

    // Common
    'no-unused-vars': 'warn',
    'no-constant-condition': 'warn',
    'no-debugger': 'warn',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement'
    ],
    'no-return-await': 'warn',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: false
      }
    ],

    // es6
    'no-var': 'error',
    'prefer-const': [
      'warn',
      { destructuring: 'all', ignoreReadBeforeAssign: true }
    ],
    'prefer-arrow-callback': [
      'error',
      { allowNamedFunctions: false, allowUnboundThis: true }
    ],
    'object-shorthand': [
      'error',
      'always',
      { ignoreConstructors: false, avoidQuotes: true }
    ],
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'require-await': 'error',

    // best-practice
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    eqeqeq: ['error', 'smart'],
    'no-alert': 'warn',
    'no-case-declarations': 'error',
    'no-fallthrough': ['warn', { commentPattern: 'break[\\s\\w]*omitted' }],
    'no-multi-str': 'error',
    'no-with': 'error',
    'no-void': 'error',

    'jsonc/quote-props': 'off',
    'jsonc/quotes': 'off',

    'yml/no-empty-mapping-value': 'off'
  }
})
