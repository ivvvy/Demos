<template>
  <div class="lgBox">
    <Header :title="title" :isShowRight="false" :showLeft="left"></Header>
    <div class="lgContent">
      <div class="literals text">已发送短信验证码到</div>
      <div class="literals num">+86 {{$route.query.num.substr(0, 3) + '****' + $route.query.num.substr(7)}}</div>
      <input type="text" placeholder="请输入验证码" v-model="ver">
      <button @click="getCode" class="codeBtn" :disabled="!show">
        <span v-show="show">获取验证码</span>
        <span v-show="!show" class="count">{{count}} 秒后重新获取</span>
      </button>
      <button class="loginBtn" @click="loginBtn">确认</button>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        ver: "",
        title: "",
        left: true,
        show: true,
        count: "",
        timer: null
      }
    },
    mounted(){
      if(this.$route.query.id == "wang"){
        this.title = "忘记密码";
      } else {
        this.title = "手机注册";
      }
    },
    methods: {
      loginBtn() {
        this.$router.push({path: "/setPass"})
      },
      getCode(){
        if (!this.timer) {
          this.count = 60;
          this.show = false;
          this.timer = setInterval(() => {
            if (this.count > 0 && this.count <= 60) {
              this.count--;
            } else {
              this.show = true;
              clearInterval(this.timer);
              this.timer = null;
            }
          }, 1000)
        }
      }

    }
  }
</script>
<style scoped>
  .literals {
    width: 100%;
    text-align: center;
  }
  .text {
    height: 20px;
    line-height: 20px;
    color: #5a5a5a;
    font-size: 10pt;
    padding-top: 30px;
  }
  .num {
    height: 45px;
    line-height: 45px;
    color: #4a4a4a;
    font-size: 12pt;
    font-weight: bold;
  }
  .codeBtn {
    background: none;
    position: absolute;
    top: 115px;
    right: 20px;
    color: #333;
    border: none;
  }
</style>
