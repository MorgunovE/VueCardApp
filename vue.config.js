module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? 'VueCardApp/dist/'
    : '/',
  // assetsDir: 'assets',
  productionSourceMap: false
}