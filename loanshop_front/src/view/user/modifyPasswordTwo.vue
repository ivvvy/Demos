<template>
  <div>
    <Header title="修改密码" :showLeft="true"></Header>
    <div class="bodyWrapper">
      <div class="modify">
        <div class="input_container">
          <input type="text" placeholder="设置新密码" name="newPassword" v-model="newPassword">
        </div>
        <div class="tips">密码支持6-20字符，建议数字，字母，符号组合</div>
      </div>
      <div class="save">
        <button>确认</button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        newPassword: ''
      }
    },
    methods: {

    }
  }
</script>

<style scoped>
  .tips {
    margin-top: 10px;
    font-size: 14px;
    padding-left: 15px;
    color: #737373;
  }
</style>
