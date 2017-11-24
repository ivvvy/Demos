<template>
  <div>
      <Header title="修改密码" :showLeft="true"></Header>
      <div class="bodyWrapper">
        <div class="modify">
          <div class="input_container">
            <input type="text" placeholder="请输入原始密码" name="oldPassword" v-model="oldPassword">
          </div>
        </div>
        <div class="save">
          <router-link to='/user/setting/modifyPasswordTwo'>
            <button>下一步</button>
          </router-link>
        </div>
      </div>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        oldPassword:''
      }
    },
    methods: {

    }
  }
</script>
