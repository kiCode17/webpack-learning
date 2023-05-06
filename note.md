本练习项目并没有使用脚手架等工具构建，`npm init`初始化package.json

# webpack安装及指令问题
该练习中使用的webpack并不是全局安装，而是项目下安装，所以直接使用webpack指令会报错，command not found: webpack
在node_modules目录下的bin中的webpack可执行，所有在项目中可以使用指令`./node_modules/.bin/webpack`构建输出文件


#2023年
#5.6学习记录：
1、搭建一个最基本的webpck配置文件，配置入口、出口、使用了一个简单的style-loader和css-loader处理css文件
*使用loader时一定要记得npm i 安装loader，包括插件也是*
2、package.json文件中的scripts中可以设置指令，添加build指令，当执行npm run build时就会执行bin下的webpack文件，
  如果是全局安装的webpack，可以配置build：“webpack”
  {
    // 添加build，可执行指令npm run build
    "build": "./node_modules/.bin/webpack"
  }