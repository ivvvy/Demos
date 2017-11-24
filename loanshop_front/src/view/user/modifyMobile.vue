<template>
  <div>
    <Header title="修改手机号" :showLeft="true"></Header>
    <div class="bodyWrapper">
      <div class="modify">
        <div class="input_container">
          <input type="text" placeholder="请输入新的手机号码" name="newPhone" v-model="newPhone">
        </div>
      </div>
      <div class="save">
        <button @click="save">保存</button>
      </div>
    </div>
  </div>
</template>
<script>
  import utility from '../../assets/js/Utils'
  export default {
    data() {
      return {
        newPhone: ''
      }
    },
    methods: {
      save:function () {
        if(this.newPhone == ""){
          utility.validateError("手机号不能为空");
        } else {
          if (!utility.mobileTest(this.newPhone)){
            utility.validateError("手机号格式错误");
          } else {
            utility.displaySuccessInfo("保存成功");
          }
        }
      }
    }
  }
</script>
<style>


</style>
