<template>
  <div>
    <Header title="头像设置" :showLeft="true"></Header>
    <div class="bodyWrapper">
      <div class="avatar_box">
        <ul>
          <li v-for="(item,index) in avatarList" @click="changeImage(index)">
            <div class="avatar_content">
              <img :src="item.avatarUrl" class="privateImage">
              <div class="icons" v-if="item.checked" :value="item.type"></div>
            </div>
            <div class="text">{{item.status}}</div>
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
        avatarList: [
          {avatarUrl: '/src/assets/images/userImg.png', status: '上班族', checked: true, type: 'officer'},
          {avatarUrl: '/src/assets/images/userImg2.png', status: '学生党', checked: false, type: 'student'},
          {avatarUrl: '/src/assets/images/userImg1.png', status: '自由职业', checked: false, type: 'freeWorker'},
          {avatarUrl: '/src/assets/images/userImg3.png', status: '生意人', checked: false, type: 'businessMan'}
        ],
      }
    },
    methods: {
      changeImage: function (index) {
        var _this = this;
        _this.avatarList.forEach((item) => {
          item.checked = false;
        })
        _this.avatarList[index].checked = true
      }
    }
  }
</script>

<style scoped>
  .avatar_box {
    position: relative;
    margin-top: 50px;
  }

  .avatar_box > ul {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    width: 100%;
  }

  .avatar_box > ul > li {
    width: 50%;
    display: inline-block;
    text-align: center;
    position: relative;
    margin-top: 10px;
    margin-bottom: 10px;

  }

  .avatar_box > ul > li .avatar_content {
    position: relative;
  }

  .avatar_box > ul > li .avatar_content img {
    width: 100%;
    vertical-align: middle;
    max-width: 60%;
    min-width: 60px;
  }

  .avatar_box > ul > li .avatar_content .icons {
    height: 38px;
    font-weight: 600;
    width: 30px;
    background-size: 1100%;
    background-position: -4px -77px;
    position: absolute;
    bottom: 0;
    right: 28%;
  }

  .avatar_box > ul > li .text {
    color: #585858;
    margin-top: 5px;
    font-size: 14px;

  }

</style>
