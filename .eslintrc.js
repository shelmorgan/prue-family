module.exports = {
  root: true,
  plugins: [
    'html'
  ],
  env: {
    'browser': true,
    'es6': true
  },
  extends: [
    'airbnb-base',
    'prettier',
  ],
  parser: '@babel/eslint-parser',
  rules: {
    quotes: ['error', 'single', { avoidEscape: true }],
  },
};