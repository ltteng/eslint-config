# @ltteng/eslint-config

Flat ESLint config for JavaScript, TypeScript, Vue 2, Vue 3, Prettier.

Forked from [sxzz/eslint-config](https://github.com/sxzz/eslint-config)

## Features

- Format with Prettier.
- Designed to work with TypeScript, Vue 2 and 3 out-of-box.
- Support JSON(5), YAML, Markdown...
- Sort imports, `package.json`, `tsconfig.json`...
- ESLint Flat config.
- Reasonable defaults, best practices, only one-line of config.

## Install

```bash
npm i -D @ltteng/eslint-config
```

Require Node.js >= 18.18, and ESLint >= 8.56.0.

## Usage

```js
import { ltteng } from '@ltteng/eslint-config'
export default ltteng(
  [
    /* your custom config */
  ],
  // Features: it'll detect installed dependency and enable necessary features automatically
  {
    prettier: true,
    markdown: true,
    vue: true, // auto detection
    unocss: false, // auto detection
  },
)
```

### Presets

```js
// eslint.config.js
import {
  // Includes
  // - `presetBasic` (JS+TS) support
  // - `presetLangsExtensions` (markdown, yaml, jsonc) support
  // - Vue support
  // - UnoCSS support (`uno.config.ts` is required)
  // - Prettier support
  presetAll,
  presetBasic, // Includes `presetJavaScript` and typescript support
  presetJavaScript, // Ignore common files and include javascript support
  presetJsonc, // Includes basic json(c) file support and sorting json keys
  presetLangsExtensions, // Includes markdown, yaml + `presetJsonc` support
} from '@ltteng/eslint-config'

export default presetAll
```

See [preset.ts](./src/presets.ts) for more details.

### VSCode

```jsonc
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "never"
  },
  "eslint.experimental.useFlatConfig": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
    "html",
    "markdown",
    "json",
    "jsonc",
    "yaml"
  ]
}
```

## License

[MIT](./LICENSE) License © 2024-PRESENT [LiTENGTENG](https://github.com/ltteng)
