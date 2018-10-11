const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  entry: {
    main: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, './wwwroot/'),
    publicPath: '/wwwroot/',
    filename: 'js/[name].js'
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'customs': path.resolve(__dirname, './node_modules/kingston-material-ui-vue-webpack-project/src'),
      'nodes': path.resolve(__dirname, './node_modules'),
      'imgs': path.resolve(__dirname, './src/imgs')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          include: [
            path.resolve(__dirname, './src'),
            path.resolve(__dirname, './node_modules/vuetify')
          ],
          // other vue-loader options go here
          extractCSS: true
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, './src'),
          path.resolve(__dirname, './node_modules/vuetify')
        ]
      },
      {
        test: /\.styl$/,
        loader: ['style-loader', 'css-loader', 'stylus-loader']
      }
    ]
  },
  performance: {
    hints: false
  },
  plugins: [
    new ExtractTextPlugin('css/main.css'),
    // Compress extracted CSS. We are using this plugin so that possible
    // duplicated CSS from different components can be deduped.
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true,
        discardComments: { removeAll: true }
      }
    })
  ]
}