<template>
  <div class="flexslider autoSize height">
    <ul class="slides"></ul>
  </div>
</template>

<script>

  export default ({
    mounted() {
      this.registerBanners();
    },
    methods: {
      registerBanners() {
        $(".flexslider").flexslider({
          animation: 'slide',
          pauseOnAction: false,
          pauseInvisible: false,
          //animationLoop: banners.length > 1,
          slideshowSpeed: 4000, //展示时间间隔ms
          animationSpeed: 400, //滚动时间ms
//    start: function () {
//      ISI.page.resizeScroll('Home');
//    }
        });
      }
    },
  })
</script>
<style>
</style>

