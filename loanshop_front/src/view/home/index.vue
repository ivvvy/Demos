<template>
  <div>
    <div class="bodyWrapper" style="top:0;">
      <Banner></Banner>
      <ProductList></ProductList>
    </div>
    <Footer mid="home"></Footer>
  </div>
</template>

<script>
  import '../../assets/css/flexslider.css'
  import '../../assets/js/jquery.flexslider.js'
  import Banner from '../../components/common/banner'
  import ProductList from '../../components/home/productList'

  export default {
    components: {
      'Banner': Banner,
      'ProductList': ProductList,
    },
  }
</script>
