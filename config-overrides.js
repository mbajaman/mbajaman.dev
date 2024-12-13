const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    '@components': path.resolve(__dirname, 'src/components'),
    '@assets': path.resolve(__dirname, 'src/assets'),
    '@styles': path.resolve(__dirname, 'src/styles'),
    '@data': path.resolve(__dirname, 'src/data'),
    '@sections': path.resolve(__dirname, 'src/sections'),
    '@pages': path.resolve(__dirname, 'src/pages')
  })
); 