<template>
  <div>
    <Header title="我的资料" :showLeft="true"></Header>
    <div class="bodyWrapper">
      <div class="category_title">
        <div class="tabs" @click="categoryType = 1">
          <span :class="{choosedText: categoryType === 1}">基本信息</span>
        </div>
        <div class="tabs" @click="categoryType = 2">
          <span :class="{choosedText: categoryType === 2}">更多信息</span>
        </div>
        <span class="bottom_line" :class="{choosed: categoryType === 1, otherChoosed: categoryType ===2}"></span>
      </div>
      <div v-if="categoryType === 1">
        <vInput title="姓名" :value="name" type="text"></vInput>
        <!--<vInput title="身份证号" :value="idCard" type="text" @keyup.native = "identify"></vInput>-->
        <div class="input">
          <span class="input_title">身份证号</span>
          <input class="input_content" type="text" v-model="idCard" @keyup = "identify" />
          <div class="clear"></div>
        </div>
        <vInput title="性别" :value="sex" type="text" readonly="true"></vInput>
        <vInput title="出生日期" :value="birthdate" type="text" readonly="true"></vInput>
        <vRadio title="婚姻状况" v-bind:data="married"></vRadio>
        <div class="statusbox selectPart">
          <vInput title="身份属性" type="text" :value="idType" readonly="true"></vInput>
          <span class="icons icons-left" v-if="leftArrow"></span>
        </div>
        <vInput title="银行卡号" :value="bankCard" type="text"></vInput>
        <list-item :items="items"></list-item>
        <vInput title="居住地址" class="city" type="text" :value="address"></vInput>
      </div>
      <div v-if="categoryType === 2">
        <list-item :items="otherItems"></list-item>
        <div class="statusbox selectPart">
          <vInput title="学历" type="text" :value="education" readonly="true"></vInput>
          <span class="icons icons-left" v-if="leftArrow"></span>
        </div>
        <vInput title="单位名称" type="text" :value="companyName"></vInput>
        <vInput title="单位地址" type="text" :value="companyAdd"></vInput>
        <vInput title="单位电话" type="text" :value="companyTel"></vInput>
        <vInput title="本单位工作年限" type="text" :value="workYears"></vInput>
        <vInput title="月收入（元）" type="text" :value="income"></vInput>
      </div>
      <div class="save">
        <button>保存</button>
      </div>
    </div>
  </div>
</template>

<script>
  import vInput from '../../components/common/vInput'
  import listItem from '../../components/common/list'
  import vRadio from '../../components/common/vRadio'
  import MobileSelect from 'mobile-select'  // 手机选项插件
  export default {
    data() {
      return {

        married: [
          {txt: '已婚', value: 1, name: 'hasMarried'},
          {txt: '未婚', value: 0, name: 'hasMarried'}
        ],
        items: [
          {title: '所属城市', hasAddress: true, isLink:false},

        ],
        otherItems: [
          {title: '联系人', contact: true,isLink:false},
        ],
        categoryType: 1,
        leftArrow: true,
        education: '',
        name: "",
        idCard: "",
        idType: "",
        birthdate: '',
        bankCard: '',
        sex: '',
        address: '',
        companyName: '',
        companyAdd:'',
        companyTel: '',
        workYears:'',
        income:'',
        city: '',
        tmpStr: '',
        fill:false
      }
    },
    components: {
      vInput,
      listItem,
      vRadio
    },
    watch: {
      categoryType: function () {
        this.createSelectBox();
      }
    },
    mounted() {
      this.createSelectBox();
    },
    methods: {
      createSelectBox: function () {
        // 选项
        var _self = this;
        new MobileSelect({
          trigger: ".selectPart",
          triggerDisplayData: false,  //在点击确认时,不用默认事件 自定义callback
          ensureBtnColor: '#49B7EF',
          cancelBtnColor: '#DF2727',
          wheels: [
            {
              data: _self.categoryType === 1 ? ["上班族", "学生党", "自由职业", "生意人"] : ['研究生', '大学本科', '大学专科和专科学校', '中等专业学校或者中等技术学校', '技术学校', '高中', '初中', '小学', '文盲或半文盲']
            },

          ],
          callback: function (indexArr, data) {
            _self.leftArrow = false
            _self.categoryType === 1 ? (_self.idType = data) : (_self.education = data)
          }
        });
      },
      identify: function () {

        var idno = this.idCard.toUpperCase()
        //clearTimeout(this.queue)
        //this.queue = setTimeout(function () {

        console.log("身份证："+idno)
        if(!(/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(idno))){
          console.log("身份证号码有误,请重新填写!");
          return false;
        }
        if(idno.length == 15) {
          this.tmpStr = idno.substring(6, 12);
          this.tmpStr = "19" + this.tmpStr;
          this.tmpStr = this.tmpStr.substring(0, 4) + "-" + this.tmpStr.substring(4, 6) + "-" + this.tmpStr.substring(6);
          this.sex = parseInt(idno.substring(14, 1),10) % 2 ? "男" : "女";
          this.birthdate = this.tmpStr
        }else {
          this.tmpStr = idno.substring(6, 14);
          this.tmpStr = this.tmpStr.substring(0, 4) + "-" + this.tmpStr.substring(4, 6) + "-" + this.tmpStr.substring(6);
          this.sex = parseInt(idno.substring(17, 1),10) % 2 ? "男" : "女";
          this.birthdate = this.tmpStr
        }
        // },1500)
      }
    },
  }
</script>

<style scoped>
  .category_title {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 45px;
    background-color: #fff;
    border-bottom: 1px solid #f1f1f1;
    position: relative;
  }

  .category_title .tabs {
    height: 44px;
    line-height: 44px;
    border-bottom: 2px solid transparent;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    justify-content: center;

  }

  .category_title .bottom_line {
    position: absolute;
    bottom: -3px;
    width: 20%;
    height: 2px;
    background-color: #17A3EB;
    margin: 0 1%;
    -webkit-transition: left .3s linear;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    border-bottom: 2px solid #fff;
  }

  .category_title .choosed {
    left: 14%;

  }

  .category_title .otherChoosed {
    left: 64%;
  }

  .category_title span {
    text-align: center;
    color: #333;

  }

  .category_title .choosedText {
    color: #17A3EB;
  }

  /*.input .input_content {
    position: relative;
  }*/

  .statusbox {
    position: relative;
  }

  .statusbox .icons-left {
    height: 38px;
    position: absolute;
    right: 26px;
    font-weight: 600;
    width: 30px;
    background-size: 1100%;
    top: 10px;
    background-position: 0px -23px;
  }

  .save {
    width: 100%;
    margin-top: 15px;
  }

  .save button {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    background: #069CE9;
    color: #fff;
    border: none;
    height: 40px;
    border-radius: 7px;
    font-size: 16px;
  }

</style>

