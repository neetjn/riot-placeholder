const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/riot-placeholder.js',
  output: {
    path: path.join(__dirname, './dist'),
    publicPath: 'dist/',
    filename: 'riot-placeholder.js',
    libraryTarget: 'umd',
    library: 'Placeholder',
    umdNamedDefine: true
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: ['env'],
            plugins: ['add-module-exports']
          }
        }
      }
    ]
  }
}
