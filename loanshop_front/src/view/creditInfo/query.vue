<template>
  <div>
    <Header title="正在查询" :showLeft="true"></Header>
    <div style="margin:100px 50px;" class="ta_c">
      <span class="icon-pending-clock"></span>
      <div class="font_w_b font-m">正在查询</div>
      <div class="font-ms gray">查询报告大概需要<span class="red">5</span>分钟，请先进行其他操作！</div>
    </div>

  </div>
</template>
<script>

  export default {
  }
</script>

<style scoped>
  .icon-pending-clock {
    display: inline-block;
    /*height: 40px;*/
    /*width: 30px;*/
    background: url(../../assets/images/query.svg) no-repeat;
    width: 70px;
    height: 70px;
    margin: 30px;
    background-position: -172px -90px;
  }
</style>


