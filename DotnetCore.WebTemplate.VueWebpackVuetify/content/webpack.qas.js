const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.base')
const customConfig = require('./webpack.allVar')

module.exports = merge(base, {
  devtool: '#source-map',
  module: {
    rules: [
      { // 圖片資源
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        include: path.resolve(__dirname, './src/imgs'),
        options: {
          publicPath: `${customConfig.QAS.sourcePublicPath}imgs/`,
          name: '[name].[ext]?[hash]',
          outputPath: 'imgs/'
        }
      },
      { // 字體資源
        test: /\.(svg|eot|woff|woff2|ttf)$/,
        loader: 'file-loader',
        include: [
          path.resolve(__dirname, './node_modules/kingston-material-ui-vue-webpack-project/src/fonts')
        ],
        options: {
          publicPath: `${customConfig.QAS.sourcePublicPath}fonts/`,
          name: '[name].[ext]?[hash]',
          outputPath: 'fonts/'
        }
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: customConfig.QAS.nodeEnv
      },
      'ROOT_FOLDER': customConfig.QAS.rootFolder,
      'API_URL': customConfig.QAS.apiUrl
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    // Decouple vendor code
    // https://vuejsdevelopers.com/2017/06/18/vue-js-boost-your-app-with-webpack/
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
        return module.context && module.context.indexOf('node_modules') !== -1;
      }
    })
  ]
})