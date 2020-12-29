/* eslint-env node */

module.exports = {
  plugins: [ 'metafizzy' ],
  extends: 'plugin:metafizzy/browser',
  parserOptions: {
    ecmaVersion: 2018,
  },
  globals: {
    InfiniteScroll: 'readonly',
    FizzyDocs: 'readonly',
    filterBind: 'readonly',
  },
  rules: {
  },
};
