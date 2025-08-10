import pluginReact from 'eslint-plugin-react'
import tseslint from 'typescript-eslint'

export default tseslint.config([
  {
    files: [
      '**/*.{ts,tsx}'
    ]
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      'react/react-in-jsx-scope': 'off'
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  }
])
