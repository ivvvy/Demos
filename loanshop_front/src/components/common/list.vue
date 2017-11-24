<template>
  <ul class="user_info">
    <li v-for="item in items" @click="$router.push(item.routerLink)" v-if="item.isLink">
      <div class="user_data">
        <div class="myInfo">
          <span class="list-item">{{item.txt}}</span>
          <span class="auth" v-if="item.hasText">去认证</span>
          <span class="icons icon-arrow-r" v-if="item.hasArrowRight"></span>
        </div>
      </div>
    </li>
    <li v-for="item in items" v-if="!item.isLink">
        <v-input :title="item.title" readonly="true"></v-input>
        <span class="address_area" v-if="item.hasAddress">
          <span class="addressLocation">允许定位</span>
        </span>
        <span class="icons icon-contact" v-if="item.contact"></span>
    </li>
  </ul>
</template>

<script>
  import vInput from '../../components/common/vInput'
  export default {
    data() {
      return {

      }
    },
    props: ['items','itemTxt', 'hasText','hasArrowRight','hasAddress','contact','value'],
    components: {
      vInput,
    }
  }
</script>
<style scope>
  .user_info {
    width: 100%;
    background: #fff;
  }

  .user_info li {
    position: relative;
    font-size: 15px;
  }

  .user_info .user_data {
    padding-left: 10%;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #F7F8F8;
    box-sizing: border-box;
  }

  .user_info .user_data:first-child {
    border-bottom: 1px solid #F7F8F8;
  }

  .user_info .user_data .myInfo {
    width: 100%;
    padding: 10px 7px 10px 0;
    display: flex;
    justify-content: space-between;
    color: #4A4A4A;
  }

  .user_info .user_data .myInfo .auth {
    position: absolute;
    right: 36px;
    top: 11px;
    color: #505050;
    font-size: 14px;
  }

  .user_info .address_area {
    position: absolute;
    right: 0;
    top: 0;
    width: 30%;
    height: 55px;
  }

  .user_info .address_area .addressLocation{
    color: #17A3EB;
    font-size: 14px;
    right: 33px;
    position: absolute;
    top: 17px;
  }

  .user_info .address_area .addressLocation:after{
    content: "";
    height: 30px;
    position: absolute;
    font-weight: 600;
    width: 20px;
    background-size: 2000%;
    right: 60px;
    background-position: -144px -98px;
    display: inline-block;
    background-image: url("/src/assets/images/icons.svg");
    background-repeat: no-repeat;
    top: -9px;
  }

  .user_info .user_data .icon-arrow-r {
    height: 30px;
    position: absolute;
    right: 15px;
    font-weight: 600;
    width: 20px;
    background-size: 2000%;
    top: 1px;
  }

  .user_info .icon-contact {
    height: 38px;
    position: absolute;
    right: 35px;
    font-weight: 600;
    width: 30px;
    background-size: 1100%;
    top: 9px;
    background-position: -66px -77px;
  }
</style>
