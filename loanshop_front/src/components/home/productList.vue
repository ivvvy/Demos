<template>
  <div class="productList">
    <ul>
      <li v-for="itemProduct in ProductLists" @click="$router.push('/home/productDetail')">
        <div class="left">
          <div class="logo"></div>
        </div>
        <div class="center">
          <div class="companyName">{{itemProduct.name}}</div>
          <div class="status">{{itemProduct.phoneStatus}}</div>
        </div>
        <div class="button">马上贷款</div>
      </li>
    </ul>
  </div>
</template>
<script>
  export default ({
    name: 'ProductList',
    data() {
      return {
        ProductLists: [
          {logo: "icon-logo-home", name: "极速小贷", phoneStatus: "实名手机"},
          {logo: "icon-logo-home", name: "人人贷", phoneStatus: "实名手机"}
        ]
      }
    },


    methods: {

      goToDetail: function () {


      },
    },
  })
</script>
<style scoped>
  .productList {
    height: auto;
    width: 100%;
  }

  .productList ul > li {
    height: 100px;
    width: 100%;
    background-color: white;
    margin-bottom: 4px;
    position: relative;
  }

  .productList ul > li > div {
    display: inline-block;
    vertical-align: top;
  }

  .productList ul > li .left {
    width: 80px;
    height: 100%;
  }

  .productList ul > li .left .logo {
    width: 42px;
    height: 42px;
    margin: 29px 0 0 30px;
    border-radius: 42px;
    border: 1px solid gray;
    background-color: #99c9f3;
  }

  .productList ul > li .center {
    width: 100px;
    height: 100%;
  }

  .productList ul > li .center .companyName {
    margin-top: 22px;
    font-size: 16px
  }

  .productList ul > li .center .status {
    width: 56px;
    font-size: 9px;
    border: 1px solid #00AFEC;
    text-align: center;
    margin: 3px 2px;
    border-radius: 6px;
    color: #00AFEC;
  }

  .productList ul > li .button {
    height: 28px;
    line-height: 28px;
    width: 88px;
    color: white;
    font-size: 12px;
    border-radius: 14px;
    text-align: center;
    bottom: 18px;
    right: 35px;
    position: absolute;
    background: -webkit-linear-gradient(left, #13C6F4, #1EA5EB);
    background: -o-linear-gradient(left, #13C6F4, #1EA5EB);
    background: -moz-linear-gradient(left, #13C6F4, #1EA5EB);
    background: linear-gradient(left, #13C6F4, #1EA5EB);
  }
</style>
