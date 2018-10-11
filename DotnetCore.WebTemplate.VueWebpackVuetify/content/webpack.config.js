const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.base')
const customConfig = require('./webpack.allVar')

module.exports = merge(base, {
  devServer: {
    historyApiFallback: true,
    noInfo: false
  },
  devtool: '#eval-source-map',
  module: {
    rules: [
      { // 圖片資源
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        include: path.resolve(__dirname, './src/imgs'),
        options: {
          publicPath: `${customConfig.Local.sourcePublicPath}imgs/`,
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
          publicPath: `${customConfig.Local.sourcePublicPath}fonts/`,
          name: '[name].[ext]?[hash]',
          outputPath: 'fonts/'
        }
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: customConfig.Local.nodeEnv
      },
      'ROOT_FOLDER': customConfig.Local.rootFolder,
      'API_URL': customConfig.Local.apiUrl
    })
  ]
})