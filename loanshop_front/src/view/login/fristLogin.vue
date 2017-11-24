<template>
  <div>
    <Header title="基础信息" :showLeft="false"></Header>
    <div class="bodyWrapper">
      <vInput title="姓名" type="text" :value="name" placeholder="请输入"></vInput>
      <vInput title="身份证号" type="text" :value="idCard" placeholder="请输入"></vInput>
      <vInput title="身份属性" type="text" :value="idType" :hasIcon="hasIcon" readonly="true" id="select"></vInput>
      <vInput title="所属城市" type="text" :value="city" readonly="true"></vInput>
      <div class="pos" @click="getPosition"><span></span>允许定位</div>
      <div class="save">
        <button @click="save">保存</button>
      </div>
      <div class="jump" @click="$router.push({path: '/home'})">暂不填写，跳过步骤</div>
    </div>

  </div>
</template>
<script>
  import vInput from '../../components/common/vInput'
  import listItem from '../../components/common/list'  // 点击页面跳转
  import MobileSelect from 'mobile-select'  // 手机选项插件

  export default {
    data() {
      return {
        name: "",
        idCard: "",
        idType: "",
        city: "",
        hasIcon: true
      }
    },
    mounted() {
      // 选项
      var _self = this;
      var mobileSelect4 = new MobileSelect({
        trigger: "#select",
        triggerDisplayData: false,  //在点击确认时,不用默认事件 自定义callback
        ensureBtnColor: '#49B7EF',
        cancelBtnColor: '#DF2727',
        wheels: [
          {
            data: ["上班族", "学生党", "自由职业", "生意人"]
          }
        ],
        callback: function (indexArr, data) {
          _self.idType = data;
          _self.hasIcon = false;
        }
      });
    },
    methods: {
      save() {
        this.$router.push({path:"/home"});
      },
      getPosition() {
        console.log("点击允许定位");
      }
    },

    components: {
      vInput
    }

  }
</script>
<style scoped>
  .jump {
    width: 100%;
    color: #15c3f3;
    text-align: center;
    font-size: 11pt;
    margin-top: 15px;
    text-decoration: underline;
  }
</style>


