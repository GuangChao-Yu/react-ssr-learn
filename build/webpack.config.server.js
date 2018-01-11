const path = require('path')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.base')

module.exports = webpackMerge(baseConfig, {
  target: 'node', // 执行环境
  // 入口
  entry: {
    app: path.join(__dirname, '../client/server-entry.js')
  },
  // 出口
  output: {
    // 打包添加hash值
    filename: 'server-entry.js',
    // 打包出后使用的模块 例如amd cmd commonJS等
    libraryTarget: 'commonjs2'
  }
})
