<template>
  <div class="lgBox">
    <Header title="登录" :showLeft="false"><span class="right register" @click='registrationBtn()' slot="right">注册</span>
    </Header>
    <div class="lgContent">
      <input type="text" placeholder="请输入手机号" class="input1" v-model="phone">
      <input :type="textPass" placeholder="请输入密码" v-model="password">
      <div class="icons hide" :class=" {show : classShow}" @click="showHide"></div>
      <button class="loginBtn" @click="loginBtn">登录</button>
      <div class="forgetPassword"><a @click="$router.push({path:'/cipher', query:{id: 'wang'}})">忘记密码？</a></div>
    </div>
  </div>
</template>
<script>
  import utility from '../../assets/js/Utils'
  export default {
    data() {
      return {
        phone: "",
        password: "",
        textPass: "password",
        classShow: false
      }
    },
    methods: {
      registrationBtn() {
        this.$router.push({path:'/cipher', query:{id: 'zhu'}})
      },
      showHide() {
        this.classShow = !this.classShow;
        !this.classShow ? this.textPass = "password" : this.textPass = "text";
      },
      loginBtn() {
//        if (!utility.mobileLength(this.phone)){
//          utility.validateError("手机号格式错误");
//        } else {
          this.$router.push({path: '/home'})
//        }
      }
    }
  }
</script>
<style scoped>
  .lgContent input.input1 {
    border-bottom: 1px solid #eee;
  }

  .lgContent .hide {
    width: 30px;
    height: 17px;
    background-position: -100px -3px;
    background-size: 1000%;
    position: absolute;
    top: 83px;
    right: 5%;
  }

  .lgContent .show {
    background-position: -100px -33px;
  }

  .lgContent .forgetPassword {
    width: 90%;
    margin: 0 auto;
    text-align: right;
  }

  .forgetPassword a {
    color: #4e4e4e;
    text-decoration: none;
    font-size: 11pt;
  }
</style>
