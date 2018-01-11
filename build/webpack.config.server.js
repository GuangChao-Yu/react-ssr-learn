const path = require('path')

module.exports = {
  target: 'node', // 执行环境
  // 入口
  entry: {
    app: path.join(__dirname, '../client/server-entry.js')
  },
  // 出口
  output: {
    // 打包添加hash值
    filename: 'server-entry.js',
    // 打包到dist目录
    path: path.join(__dirname, '../dist'),
    // 公共路径配置-m
    publicPath: '/public/',
    // 打包出后使用的模块 例如amd cmd commonJS等
    libraryTarget: 'commonjs2'
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
  }
}
