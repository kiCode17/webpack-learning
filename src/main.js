// 通过 ES 规范导入 CSS 和 show方法
import './css/main.css'
import show from './js/show.js'
import icon from './asset/element-ui-icon.png'


const myIcon = new Image()
myIcon.src = icon
document.body.appendChild(myIcon)


show('Webpack');