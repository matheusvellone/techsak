import { FlatCompat } from '@eslint/eslintrc'
import eslintConfig from './.eslintrc.json' with { type: "json" }

const compat = new FlatCompat()

export default compat.config(eslintConfig)
