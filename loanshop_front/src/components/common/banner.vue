<template>
  <div class="flexslider">
    <ul class="slides">
      <li v-for="itemBanner in banners">
        <div class="sliderImg">
          <img class="" v-bind:src="itemBanner.src"/>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default ({
    data() {
      return {
        banners: [
          {src: "/src/assets/images/bannerOne.png"},
          {src: "/src/assets/images/bannerTwo.png"}
        ]
      }
    },
    mounted() {
      this.registerBanners();
    },
    methods: {
      registerBanners() {
        $(".flexslider").flexslider({
          animation: 'slide',
          pauseOnAction: false,
          pauseInvisible: false,
          animationLoop: true,
          slideshowSpeed: 4000, //展示时间间隔ms
          animationSpeed: 400, //滚动时间ms
          focused: false,
          start: function () {
            //ISI.page.resizeScroll('Home');
          }
        });
      }
    },
  })
</script>
<style>
</style>

