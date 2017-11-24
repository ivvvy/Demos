<template>
  <div class="header">
    <span class="left" @click='goBack' v-if='isShowLeft'>返回</span>
    <slot name="left"></slot>
    <span class="title">{{title}}</span>
    <slot name="right"></slot>
  </div>
</template>
<script>
  export default {
    data() {
      return {isShowLeft: true}
    },
    methods: {
      goBack() {
        this.$router.back();
      }
    },
    props: ['title', 'showLeft'],
    mounted: function () {
      if (this.$options.propsData.showLeft !== undefined) this.isShowLeft = this.$options.propsData.showLeft;	//如果传递了showLeft(默认是true),则该值决定左侧是否显示
    }
  }
</script>
