module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/dist/'
    : '/',
  assetsDir: 'assets',
  productionSourceMap: false
}