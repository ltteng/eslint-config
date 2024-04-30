import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
require('sucrase/register')
const { ltteng } = require('./src/index.ts')

export default ltteng()
