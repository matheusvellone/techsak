import { FlatCompat } from '@eslint/eslintrc'
import eslintConfig from './.eslintrc.json'

const compat = new FlatCompat()

export default compat.config(eslintConfig)
