<template>
  <div class="lgBox">
    <Header :title="title" :showLeft="left"><span v-if="right" class="right register" @click='$router.push({path: "/login"})' slot="right">登录</span></Header>
    <div class="lgContent">
      <input type="text" placeholder="请输入手机号" v-model="phone">
      <button class="loginBtn" @click="loginBtn">{{btnText}}</button>
    </div>
  </div>
</template>
<script>
  import utility from '../../assets/js/Utils'
  export default {
    data() {
      return {
        phone: "",
        title: "",
        btnText: "",
        right: false,
        left: false
      }
    },
    created(){
      this.getUrl();
    },
    methods: {
      loginBtn() {
        if(this.phone == ""){
          utility.validateError("手机号不能为空");
        } else {
          if (!utility.mobileLength(this.phone)){
            utility.validateError("手机号格式错误");
          } else {
            if(this.$route.query.id == "wang") {
              this.$router.push({path:'/ver', query:{num: this.phone, id: "wang"}})
            } else {
              this.$router.push({path:'/ver', query:{num: this.phone, id: "zhu"}})
            }
          }
        }

      },
      getUrl() {
        if(this.$route.query.id == "wang"){
          this.title = "忘记密码";
          this.btnText = "确认";
          this.right = false;
          this.left = true;
        } else {
          this.title = "手机注册";
          this.btnText = "获取手机验证码";
          this.right = true;
          this.left = false;
        }
      }
    }
  }
</script>
