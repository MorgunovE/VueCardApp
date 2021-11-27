module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? 'VueCardApp'
    : '/',
  // assetsDir: 'assets',
  productionSourceMap: false
}