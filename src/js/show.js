import { appDom } from '../js/const.js'

// 操作 DOM 元素，把 content 插入到创建的元素上
export function show(content) {
  let h1 = window.document.createElement('h1')
  h1.innerHTML = 'Hello' + content
  appDom.appendChild(h1)
}
