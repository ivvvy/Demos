<template>
  <div>
    <div class="bodyWrapper" style="top: 0px;">
      <div class="user_page">
        <div class="user_content">
          <router-link to="/user/setUserAvatar" class="avatar_link">
            <img :src="userInfo.avatarUrl" class="privateImage">
          </router-link>
          <div class="user_name">
            <p>{{userInfo.name}}</p>
          </div>
        </div>
        <list-item :items="items"></list-item>
      </div>
    </div>
    <Footer mid="user"></Footer>
  </div>
</template>

<script>
  import listItem from '../../components/common/list'

  export default {
    name: 'User',
    components: {
      listItem
    },
    data() {
      return {
        userInfo: {
          name: '王小乖乖',
          avatarUrl: '/src/assets/images/userImg.png'
        },
        items: [
          {txt: '我的资料', hasArrowRight: true, routerLink: "/user/setUserInfo",isLink:true},
          {txt: '我的收藏', hasArrowRight: true, routerLink: "/user/userCollect",isLink:true},
          {txt: '借款申请历史', hasArrowRight: true, routerLink: "/user/loanRecords",isLink:true},
          {txt: '设置', hasArrowRight: true, routerLink: "/user/setting",isLink:true},
        ]
      }
    }
  }
</script>

<style scoped>
  #app {
    margin-top: 0;
  }

  .user_content .avatar_link {
    display: block;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background: linear-gradient(left, #1EA5EB, #13C6F4);
    background: -webkit-linear-gradient(left, #1EA5EB, #13C6F4);
    background: -o-linear-gradient(left, #1EA5EB, #13C6F4);
    background: -moz-linear-gradient(left, #1EA5EB, #13C6F4);
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


</style>
