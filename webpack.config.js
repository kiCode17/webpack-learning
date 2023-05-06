// node内置模块path
const path = require('path')


module.exports = {
  mode: 'development',
  // 入口
  entry: './src/main.js',
  // 出口，filename：输出的文件名，path：输出的路径
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        // 匹配css文件，loader从后往前执行，
        // 第一个 loader 将其结果（也就是应用过转换后的资源）传递给下一个 loader，依此类推。
        // 最后，链中的最后一个 loader，返回 webpack 所期望的 JavaScript。
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}