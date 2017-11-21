<template>
  <div class="header">
    <span class="back" @click='goBack' v-if='isShow'>返回</span>
    <span class="title">{{title}}</span>
  </div>
</template>
<script>
  export default {
    data() {
      return {isShow: true}
    },
    methods: {
      goBack() {
        this.$router.back();
      }
    },
    props: ['title', 'showLeft'],
    mounted: function () {
      if (this.$options.propsData.showLeft !== undefined) this.isShow = this.$options.propsData.showLeft;	//如果传递了showLeft(默认是true),则该值决定左侧是否显示
    }
  }
</script>
