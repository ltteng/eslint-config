import { GLOB_YAML } from '../globs'
import { parserYml, pluginYml } from '../plugins'
import type { FlatESLintConfig, Rules } from 'eslint-define-config'

export const yml: FlatESLintConfig[] = [
  {
    files: [GLOB_YAML],
    languageOptions: {
      parser: parserYml
    },
    plugins: {
      yml: pluginYml
    },
    rules: {
      ...(pluginYml.configs.standard.rules as Rules),
      ...(pluginYml.configs.prettier.rules as Rules),
      'yml/no-empty-mapping-value': 'off'
    }
  }
]
