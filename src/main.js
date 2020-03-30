// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 重置CSS
import './assets/styles/reset.css'
// 移动端300ms点击延迟解决方案
import fastClick from 'fastclick'
// 1像素边框解决方案
import './assets/styles/border.css'

Vue.config.productionTip = false
// fastClick使用配置
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
