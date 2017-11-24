<template>
  <div class="input">
    <span class="input_title">{{ title }}</span>
    <div class="input_content radBox">
      <div v-for="(item, index) in data" v-bind:class='[index<data.length-1 ? "mr_50" : "","d_ib","p_r"]'>
        <input :id="item.name+index" type="radio" :name="item.name" :value="item.value" v-model="item.value" />
        <label :for="item.name+index" class="radLab"></label>
        <label :for="item.name+index">{{item.txt}}</label>
      </div>
    </div>
    <div class="clear"></div>
  </div>
</template>

<script>
  export default {
   name: 'vradio',
   props: ['title', 'data']
  }
</script>
<style scope>
  label.radLab{
    position: absolute;
    top:20px;
    left: -20px;
    display: inline-block;
    width: 15px;
    height: 15px;
    border: 1px solid #17A3EB;
    border-radius: 50%;
    /*background: url(../images/icons.svg) -72px -9px;*/
    /*background-size: 2000%;*/
  }

  .radBox input[type="radio"]:checked + label.radLab:after{
    content: "";
    width: 18px;
    height: 15px;
    position: absolute;
    top: 0px;
    left: 0px;
    display: inline-block;
    background: url(../../assets/images/icons.svg) -67px -41px;
    background-size: 1925%;
  }
  /*.radBox input[type="radio"]:checked + label.radLab{*/
    /*!*border: none;*!*/
    /*background: url(../../assets/images/icons.svg) -72px -49px;*/
    /*background-size: 1925%;*/
  /*}*/
  .radBox input[type="radio"]{
    display: none;
  }
  /* 信用信息 end */

</style>
