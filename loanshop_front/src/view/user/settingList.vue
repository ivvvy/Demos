<template>
  <div>
    <div class="bodyWrapper">
      <list-item :items="items"></list-item>
      <div class="logout_box" @click="logout">
        退出登录
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
  import listItem from '../../components/common/list'
  export default {
    components: {
      listItem
    },
    data() {
      return {
        items: [
          {txt:'修改密码',hasArrowRight:true,routerLink:"/user/setting/modifyPasswordOne",isLink:true},
          {txt:'修改绑定手机',hasArrowRight:true,routerLink:"/user/setting/modifyMobile",isLink:true},
        ]
      }
    },
    methods: {
      logout() {
        this.$router.push({
          path: '/home'
        })
      }
    }
  }
</script>
<style scoped>
  .logout_box {
    margin-top: 20px;
    width: 100%;
    text-align: center;
    background: #fff;
    font-size: 16px;
    color: #d8584a;
    padding: 15px 7px 15px 0;
  }
</style>
