<template>
  <div>
    <div class="user_page">
      <div class="user_content">
        <router-link to="/setUserAvatar" class="avatar_link">
          <img src="../../assets/images/userImg.png" class="privateImage">
        </router-link>
        <div class="user_name">
          <p>王小乖乖</p>
        </div>
      </div>
      <div class="user_info">
        <router-link to='/setUserInfo' class="user_data">
          <div class="myInfo">
            <span>我的资料</span>
            <span class="icons icon-arrow-r"></span>
          </div>
        </router-link>
        <router-link to='/userCollect' class="user_data">
          <div class="myInfo">
            <span>我的收藏</span>
            <span class="icons icon-arrow-r"></span>
          </div>
        </router-link>
        <router-link to='/loanRecords' class="user_data">
          <div class="myInfo">
            <span>借款申请记录</span>
            <span class="icons icon-arrow-r"></span>
          </div>
        </router-link>
        <router-link to='/setting' class="user_data">
          <div class="myInfo">
            <span>设置</span>
            <span class="icons icon-arrow-r"></span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'User',
    data() {
      return {
        userInfo: {}
      }
    }
  }
</script>

<style>
  #app {
    margin-top: 0;
  }

  .user_content .avatar_link {
    display: block;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background: url("../../assets/images/bg.png") no-repeat 0 0;
    height: 100%;
    padding: 15px 15px 45px 25px;
  }

  .user_content .avatar_link > img {
    height: 80%;
    width: 23%;
    vertical-align: middle;
    max-width: 60%;
    min-width: 60px;

  }

  .user_content .user_name {
    position: absolute;
    top: 6%;
    left: 29%;
    color: #fff
  }

  .user_info {
    width: 100%;
    background: #fff;
  }

  .user_info .user_data {
    padding-left: 40px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #f1f1f1;
    box-sizing: border-box;
  }

  .user_info .user_data:last-child {
    border-bottom: none;
  }

  .user_info .user_data .myInfo {
    width: 100%;
    padding: 15px 7px 15px 0;
    display: flex;
    justify-content: space-between;
  }

  .user_info .user_data .icon-arrow-r {
    background-position: -955px -117px;
    width: 20px;
    height: 20px;
  }

</style>
