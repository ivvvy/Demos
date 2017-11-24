<template>
  <div>
    <Header title="信用信息" :showLeft="false"></Header>
    <div class="bodyWrapper">
      <div>
        <vInput title="芝麻信用分" type="text" :value="formData.grade" placeholder="请输入" readonly="true" id="select"></vInput>
        <vInput title="淘宝账号" type="text" placeholder="请输入" :value="formData.taobao"></vInput>
        <vInput title="京东账号" type="text" placeholder="请输入" :value="formData.jindong"></vInput>
        <list-item :items="items"></list-item>
        <vRadio title="拥有信用卡" v-bind:data="hasCredit"></vRadio>
        <vRadio title="社保缴纳" v-bind:data="security"></vRadio>
        <vRadio title="公积金缴纳" v-bind:data="fund"></vRadio>
      </div>

      <div class="save">
        <button>保存</button>
      </div>
    </div>
    <Footer mid="creditInfo"></Footer>
  </div>
</template>
<script>
  import vInput from '../../components/common/vInput'
  import listItem from '../../components/common/list'  // 点击页面跳转
  import vRadio from '../../components/common/vRadio'

  import MobileSelect from 'mobile-select'  // 手机选项插件

  export default {
    name: 'CreditInfo',
    data() {
      return {
        formData:{
          grade: "",
          taobao: "",
          jindong: ""
        },
        hasCredit: [
          {txt: '是', value: 1, name: 'hasCredit'},
          {txt: '否', value: 0, name: 'hasCredit'}
        ],
        security: [
          {txt: '是', value: 1, name: 'security'},
          {txt: '否', value: 0, name: 'security'}
        ],
        fund: [
          {txt: '是', value: 1, name: 'fund'},
          {txt: '否', value: 0, name: 'fund'}
        ],
        items: [
          {txt: '运营商认证', hasArrowRight: true, hasText: true, routerLink: "/creditInfo/checkphone",isLink:true}
        ],
        list: [
//          {title: '淘宝账号', type: "text", placeholder: '请输入'},
        ]
      }
    },
    mounted() {
      // 选项
      var _self = this;
      console.log(_self.formData.grade)

      var mobileSelect4 = new MobileSelect({
        trigger: "#select",
        triggerDisplayData: false,  //在点击确认时,不用默认事件 自定义callback
        ensureBtnColor: '#49B7EF',
        cancelBtnColor: '#DF2727',
        wheels: [
          {
            data: ["350-500", "501-600", "601-700", "701-750"]
          }
        ],
        callback: function (indexArr, data) {
          _self.formData.grade = data;
        }
      });
    },

    methods: {
      toCheckPhone() {
        //this.$router.push({path:"checkphone"});

      }
    },

    components: {
      vInput,
      listItem,
      vRadio
    }

  }
</script>


