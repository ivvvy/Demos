import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'

Vue.use(Router);


export default new Router({
  mode: 'history',
  routes: [
    {
      path: '', component: Home, children: [
      {path: '/', redirect: '/login'},
      {
        path: 'login', component: Home, children: [
        {path: '/', name: "登录", component: resolve => require(['../view/login/index'], resolve)},
        {path: '/cipher', name: "忘记密码", component: resolve => require(['../view/login/cipher'], resolve)},
        {path: '/ver', name: "输入验证码", component: resolve => require(['../view/login/verifica'], resolve)},
        {path: '/setPass', name: "输入验证码", component: resolve => require(['../view/login/setPassword'], resolve)},
        {path: '/fristLogin', name: "输入验证码", component: resolve => require(['../view/login/fristLogin'], resolve)},
      ]
      },
      {
        path: 'home', component: Home, children: [
        {path: '/', name: "首页", component: resolve => require(['../view/home/index'], resolve)},
        {
          path: 'productDetail',
          name: "产品详情",
          component: resolve => require(['../view/home/productDetail'], resolve)
        }
      ]
      },
      {
        path: 'creditInfo', component: Home, children: [
        {
          path: '/', name: "信用信息", component: resolve => require(['../view/creditInfo/index'], resolve)
        },
        {
          path: 'checkphone', name: "手机号", component: resolve => require(['../view/creditInfo/checkphone'], resolve)
        },
        {
          path: 'YYSlogin', name: "登陆", component: resolve => require(['../view/creditInfo/YYSlogin'], resolve)
        },
        {
          path: 'channelList', name: "运营商", component: resolve => require(['../view/creditInfo/channelList'], resolve)
        },
        {
          path: 'query', name: "查询", component: resolve => require(['../view/creditInfo/query'], resolve)
        }
      ]
      },
      {
        path: 'user', component: Home, children: [
        {path: '/', name: "user", component: resolve => require(['../view/user/index'], resolve)},
        {
          path: 'setUserAvatar',
          name: "我的头像",
          component: resolve => require(['../view/user/setUserAvatar'], resolve)
        },
        {
          path: 'setUserInfo',
          name: "我的资料",
          component: resolve => require(['../view/user/setUserInfo'], resolve)
        },
        {
          path: 'userCollect',
          name: "我的收藏",
          component: resolve => require(['../view/user/userCollect'], resolve)
        },
        {
          path: 'loanRecords',
          name: "借款申请记录",
          component: resolve => require(['../view/user/loanRecords'], resolve)
        },
        {
          path: 'setting', component: resolve => require(['../view/user/setting'], resolve), children: [
          {path: '/', name: "设置", component: resolve => require(['../view/user/settingList'], resolve)},
          {
            path: 'modifyMobile',
            name: "修改手机",
            component: resolve => require(['../view/user/modifyMobile'], resolve)
          },
          {
            path: 'modifyPasswordOne',
            name: "修改密码一",
            component: resolve => require(['../view/user/modifyPasswordOne'], resolve)
          },
          {
            path: 'modifyPasswordTwo',
            name: "修改密码二",
            component: resolve => require(['../view/user/modifyPasswordTwo'], resolve)
          },
        ]
        }
      ]
      }
    ]
    }
  ]

})
