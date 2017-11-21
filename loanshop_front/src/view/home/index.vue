<template>
  <div>
    <Header title="首页" :showLeft="false"></Header>
    <Banner></Banner>
    <div>我是home</div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Banner from '../../components/common/banner.vue'

  export default {
    components: {
      'Banner': Banner
    },
  }


</script>
