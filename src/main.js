// 通过 ES 规范导入 CSS 和 show方法
import './css/main.css'
import './asset/fonts/iconfont.css'
import { appDom } from './js/const.js'
import { show } from './js/show.js'
import icon from './asset/images/element-ui-icon.png'

show('Webpack')

// 添加image元素
let myImage = new Image()
myImage.src = icon
appDom.appendChild(myImage)

// 添加一个div元素
let myDiv = document.createElement('div')
myDiv.className = 'div-test-iconfont'
appDom.appendChild(myDiv)

// 添加一个i元素，试一下字体图标样式
let myI = document.createElement('i')
myI.className = 'iconfont icon-jichuguanli'
appDom.appendChild(myI)
