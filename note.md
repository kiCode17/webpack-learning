本练习项目并没有使用脚手架等工具构建，`npm init`初始化package.json

# webpack安装及指令问题
该练习中使用的webpack并不是全局安装，而是项目下安装，所以直接使用webpack指令会报错，command not found: webpack
在node_modules目录下的bin中的webpack可执行，所有在项目中可以使用指令`./node_modules/.bin/webpack`构建输出文件


# 2023年
# 5.6学习记录：
1、搭建一个最基本的webpck配置文件，配置入口、出口、使用了一个简单的style-loader和css-loader处理css文件
* 使用loader时一定要记得npm i 安装loader，包括插件也是
2、package.json文件中的scripts中可以设置指令，添加build指令，当执行npm run build时就会执行bin下的webpack文件，
  如果是全局安装的webpack，可以配置build：“webpack”
  {
    // 添加build，可执行指令npm run build
    "build": "./node_modules/.bin/webpack"
  }
3、处理图片
  本练习使用url-loader处理图片，只输出bundle.js一个文件，通过审查页面元素，可以看到图片是base 64格式
  webpack5可以使用内置的Asset Modules模块，type: 'asset/resource'的类型，不仅输出了bundle.js还输出了图片，通过审查页面元素，可以看到图片路径已经替换为了dist下的路径，也就是绝对路径
  
# 5.8学习记录
1、整理完上次遗留的webpack5 四种资源类型的笔记（具体笔记都在笔记软件记录）
  Webpack5 提供了 asset/resource、asset/inline、asset/source、asset 四种资源类型，具体介绍如下所示：
  asset/resource：将资源文件输出到指定的输出目录，作用等同于 file—loader；
  asset/inline：将资源文件内容以指定的格式进行编码（一般为 base64），然后以 data URI 的形式嵌入到生成的 bundle 中，作用等同于 url-loader；
  asset/source：将资源文件的内容以字符串的形式嵌入到生成的 bundle 中，作用相当于 raw-loader；
  asset：作用等同于设置了 limit 属性的 url-loader，即资源文件的大小如果小于 limit 的值（默认值为 8kb），则采用 asset/inline 模式，否则采用 asset/resource 模式。（来源：https://blog.csdn.net/web2022050901/article/details/126483333）
2、引入字体图标库，处理字体图标
3、深入学习common js和es6模块引入，并整理为笔记
4、小点记录（关于appendChild的使用）
  获取了id为app的元素后，使用innerHtml为它插入内容，在使用appendChild时插入的页面元素没生效
  将内容换为h1标签的形式插入后，appendChild的元素生效。
  做个小记录，之后再深入学习
5、参考官网对toml、csv等进行打包

# 5.23学习记录
1、释放资源，回退处理，将代码中的数据引入都删除，同时卸载依赖
 `npm uninstall css-loader csv-loader json5 style-loader toml xml-loader yamljs`