import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const setUserAvatar = r => require.ensure([], () => r(require('../view/user/setUserAvatar/setUserAvatar')), 'setUserAvatar')
const setUserInfo = r => require.ensure([], () => r(require('../view/user/setUserInfo/setUserInfo')), 'setUserInfo')

export default new Router({
  routes: [
    {path: '/', redirect: '/home'},
    {
      path: '/home', name: "首页", component: resolve => require(['../view/home/index'], resolve), children: [
    ]
    },
    {
      path: '/creditInfo', name: "信用信息", component: resolve => require(['../view/creditInfo/index'], resolve), children: [
    ]
    },
    {
      path: '/user', name: "我的", component: resolve => require(['../view/user/index'], resolve), children: [
      {
        path: 'setUserAvatar',
        component: setUserAvatar
      },
      {
        path: 'setUserInfo',
        component: setUserInfo
      }
    ]
    },
  ]

})
