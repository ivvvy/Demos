<template>
  <div>
    <Header title="我的收藏" :showLeft="true"></Header>
    <div class="bodyWrapper">
      <div class="productList">
        <ul>
          <li v-for="collect in collectList" @click="$router.push('/home/productDetail')">
            <div class="left">
              <div class="logo"></div>
            </div>
            <div class="center">
              <div class="companyName">{{collect.companyName}}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        collectList: [
          {logo: '', companyName: '人人贷'},
          {logo: '', companyName: '极速小贷'}
        ]
      }
    }
  }
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
    border-bottom: 1px solid #f1f1f1;
    position: relative;
  }

  .productList ul > li:last-child {
    border-bottom: none;
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
    margin-top: 41px;
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
</style>
