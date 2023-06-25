// 通过 ES 规范导入 CSS 和 show方法
import './css/main.css'
import './asset/fonts/iconfont.css'
import { appDom } from './js/const.js'
import { show } from './js/show.js'
import icon from './asset/images/element-ui-icon.png'
import _ from 'lodash'
// import notes from './otherFileType/data.csv'
// import toml from './otherFileType/toml.toml'
import printMe from './print'

document.body.appendChild(appDom)

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

function component() {
  const element = document.createElement('div')
  const btn = document.createElement('button')

  element.innerHTML = _.join(['Hello', 'webpack'], ' ')

  btn.innerHTML = 'Click me and check the console!'
  btn.onclick = printMe;

  element.appendChild(btn)

  return element
}

appDom.appendChild(component())