# @ltteng/eslint-config

ESLint config for JavaScript, TypeScript, Vue 2, Vue 3, Prettier.

Forked from [sxzz/eslint-config](https://github.com/sxzz/eslint-config-legacy)

## Usage

```bash
pnpm i -D @ltteng/eslint-config-basic # JavaScript only
pnpm i -D @ltteng/eslint-config-ts
pnpm i -D @ltteng/eslint-config-vue
pnpm i -D @ltteng/eslint-config-prettier # Prettier only
pnpm i -D @ltteng/eslint-config
```

## Quick start

### Vue 3

```bash
pnpm i -D @ltteng/eslint-config
```

```javascript
// .eslintrc
{
  "root": true,
  "extends": "@ltteng",
  "rules": {
    // Your custom rules
  }
}
```

```jsonc
// .prettierrc
{
  "semi": false,
  "singleQuote": true,
  "trailingComma": "none"
}
```

### VSCode

```jsonc
// settings.json
{
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "html",
    "vue",
    "json",
    "json5",
    "jsonc",
    "yaml"
  ]
}
```

## License

[MIT](./LICENSE) License © 2024-PRESENT [LiTENGTENG](https://github.com/ltteng)
