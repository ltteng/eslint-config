const { defineConfig } = require('eslint-define-config')
const { getPackageInfoSync } = require('local-pkg')

const pkg = getPackageInfoSync('vue')
let vueVersion = pkg && pkg.version
vueVersion = +(vueVersion && vueVersion[0])
vueVersion = Number.isNaN(vueVersion) ? 3 : vueVersion

module.exports = defineConfig({
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.vue'],
        ecmaVersion: 'latest'
      }
    }
  ],
  extends: [
    vueVersion === 3 ? 'plugin:vue/vue3-recommended' : 'plugin:vue/recommended',
    '@ltteng/eslint-config-ts'
  ],
  rules: {
    'vue/no-v-html': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ]
  }
})
