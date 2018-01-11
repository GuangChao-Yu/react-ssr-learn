const path = require('path')
const webpack = require('webpack')
const HTMLPlugin = require('html-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'

const config = {
  // 入口
  entry: {
    app: path.join(__dirname, '../client/main.js')
  },
  // 出口
  output: {
    // 打包添加hash值
    filename: '[name].[hash].js',
    // 打包到dist目录
    path: path.join(__dirname, '../dist'),
    // 公共路径配置-m
    publicPath: '/public/'
  },
  module: {
    rules: [
      {
        test: /.jsx$/,
        loader: 'babel-loader'
      },
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: [path.join(__dirname, '../node_modules')]
      }
    ]
  },
  // 添加
  plugins: [
    new HTMLPlugin({
      template: path.join(__dirname, '../client/template.html')
    })
  ]
}

if (isDev) {
  config.entry = {
    app: ['react-hot-loader/patch', path.join(__dirname, '../client/main.js')]
  }
  config.devServer = {
    host: '0.0.0.0',
    compress: true,
    port: '8888',
    contentBase: path.join(__dirname, '../dist'),
    hot: true,
    overlay: {
      errors: true
    },
    publicPath: '/public/',
    historyApiFallback: {
      index: '/public/index.html'
    }
  }
  config.plugins.push(new webpack.HotModuleReplacementPlugin())
}
module.exports = config
