// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import HomeVue from './components/Home'
import router from './router/index'
import $ from 'jquery'
import axios from 'axios'
import './assets/css/global.css'


Vue.config.productionTip = false
Vue.prototype.axios = axios;

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(HomeVue)
}).$mount('#app')

//通过components下的index.js文件导入组件
import components from './components/index';
//对导入的组件进行全局组件注册
Object.keys(components).forEach((key) => {
  Vue.component(key, components[key])
})



