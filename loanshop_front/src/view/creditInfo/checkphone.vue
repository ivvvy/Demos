<template>
  <div id="checkPhone">
    <Header title="手机号" :showLeft="true"></Header>
    <div class="bodyWrapper mt_10">
      <div class="user_input">
        <input type="tel" v-model="phone" placeholder="请输入手机号" maxlength="20" />
      </div>
      <!--<input type="tel" class="check" placeholder="请输入手机号" v-model="phone" maxlength="11" />-->
      <div class="save">
        <button @click="checkPhone">下一步</button>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>

  import utility from '../../assets/js/Utils'

  export default {
    data() {
      return {
        phone: ""
      }
    },
    methods: {
      checkPhone() {
        var container = $('#checkPhone');
        if (!utility.mobileTest(this.phone)){
   //       utility.displayLoading("运营商初始化中...");
          utility.validateError("手机号格式错误");
          return false;
        }


        console.log(this.phone)
        this.axios.post('https://dev.suanhua.org/shcp/api/v2/sp/authslops/init',
          {
          phone: this.phone,
          orgCode: '000000001'
          },
          {
          headers: {
            'Content-Type': 'application/json; charset=utf-8'
          }
        })
          .then(function (response) {
            console.log("111111111111" + response);
          })
          .catch(function (error) {
            console.log("00000000000" + error);
          });
//        this.$router.push("/creditInfo/YYSlogin");
      }
    }
  }
</script>

<style scoped>

</style>
