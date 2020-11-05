module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'space-before-function-paren': 0,
    'no-console': 'off',
    'object-curly-spacing': 0,
    'html-closing-bracket-spacing': 0,
    'html-self-closing': 0
  }
}
