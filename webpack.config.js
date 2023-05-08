// node内置模块path
const path = require('path')

// 使用 自定义 parser 替代特定的 webpack loader，可以将任何 toml、yaml 或 json5 文件作为 JSON 模块导入。
const toml = require('toml')


module.exports = {
  mode: 'development',
  // 入口
  entry: './src/main.js',
  // 出口，filename：输出的文件名，path：输出的路径
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
    // 修改图片默认的地址,不过注意这个属性只能是针对rule中设置的type''asset/resource' | 'asset'类型才生效
    // images-output为了区分，临时定义的文件名
    // assetModuleFilename: 'images-output/[name][ext]'
  },
  module: {
    rules: [
      {
        // 匹配css文件，loader从后往前执行，
        // 第一个 loader 将其结果（也就是应用过转换后的资源）传递给下一个 loader，依此类推。
        // 最后，链中的最后一个 loader，返回 webpack 所期望的 JavaScript。
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      // webpack5中，可以使用内置的Asset Modules处理图片
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        type: 'asset/resource',
        // 配置图片输出的文件
        // generator的优先级高于output里的优先级
        generator: {
          filename: 'images/[name][ext]'
        }
      },
      // webpack4之前通常会使用url-loader处理图片
      // {
      //   test: /\.(png|svg|jpg|gif)$/,
      //   use: ['url-loader']
      // }
      // 处理字体图标icon
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]'
        }
      },
      // 处理csv|tsv文件，主要是自己手动敲一敲，熟悉点
      {
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader']
      },
      // 自定义的parse代替loader，toml、yaml、json5等文件都是类似处理
      {
        test: /\.toml$/i,
        type: 'json',
        parser: {
          parse: toml.parse
        }
      }
    ]
  }
}