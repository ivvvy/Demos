<template>
  <div class="lgBox">
    <Header title="设置密码" :isShowRight="false"></Header>
    <div class="lgContent">
      <input type="text" placeholder="设置密码" v-model="phone">
      <div class="prompt">密码支持6~20字符，建议数字，字母，符号组合</div>
      <button class="loginBtn" @click="loginBtn">确认</button>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        phone: "",
      }
    },
    methods: {
      loginBtn() {
        this.$router.push({path:'/home'});
      }
    }
  }
</script>
<style scoped>
  .prompt {
    width: 90%;
    margin: 10px auto 0;
    font-size: 9pt;
  }
</style>
