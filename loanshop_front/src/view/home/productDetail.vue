<template>
  <div>
    <Header title="贷款详情" :showLeft="true" :class="{addCollect:isCollected}">
      <span class="right icons icon-collect" @click="addCollection()" slot="right"></span>
    </Header>
    <div class="bodyWrapper detailContent">
      <div class="top">
        <div class="logo"></div>
        <div class="companyName">{{companyName}}</div>
      </div>
      <div class="bottom">
        <div class="itemWrapper">
          <div class="title">申请条件</div>
          <ul>
            <li v-for="itemCondition in applyCondition">
              <span>{{itemCondition.index}}</span><span>{{itemCondition.content}}</span>
            </li>
          </ul>
        </div>
        <div class="itemWrapper">
          <div class="title">申请流程</div>
          <ul style="height: 60px;width: 86%">
            <li class="flowLi" v-for="itemFlow in applyFlow">
              <div class="node">{{itemFlow.nodeText}}</div>
              <div v-if="!itemFlow.isEndNode" class="icons icons-arr-blue">＞</div>
            </li>
          </ul>
        </div>
        <div class="itemWrapper">
          <div class="title">借款细节</div>
          <ul>
            <li v-for="itemDetail in loanDetail">
              <span>{{itemDetail.type}}：</span><span>{{itemDetail.content}}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="button" @click="goToApply()">立即申请</div>
    </div>
  </div>
</template>
<script>
  export default ({
    data() {
      return {
        isCollected: false,
        companyName: "极速小贷",
        applyRouter: 'www.baidu.com',
        applyCondition: [
          {index: "1", content: "满足18-55周岁"},
          {index: "2", content: "无需用信用卡，无需信用报告"},
          {index: "3", content: "咨询电话：400-323-3232", isEndNode: 'true'}],
        applyFlow: [
          {index: "1", nodeText: "注册"},
          {index: "2", nodeText: "银行卡认证"},
          {index: "3", nodeText: "银行卡"},
          {index: "4", nodeText: "发起申请", isEndNode: true}
        ],
        loanDetail: [
          {type: "贷款类型", content: "现金/消费分期"},
          {type: "实际到账", content: ""},
          {type: "还款方式", content: ""},
          {type: "逾期利息", content: ""},
        ]
      }
    },
    methods: {
      goToApply: function () {
        window.href = this.applyRouter;
      },

      addCollection: function () {
        var _self = this;
        _self.isCollected = !_self.isCollected;
        if (_self.isCollected) {
          //to do:调用接口添加收藏
        }
      }

    }
  })
</script>
<style scoped>
  .detailContent .top {
    height: 150px;
    background: -webkit-linear-gradient(left, #1EA5EB, #13C6F4);
    background: -o-linear-gradient(left, #1EA5EB, #13C6F4);
    background: -moz-linear-gradient(left, #1EA5EB, #13C6F4);
    background: linear-gradient(left, #1EA5EB, #13C6F4);
  }

  .detailContent .top .logo {
    width: 46px;
    height: 46px;
    border-radius: 46px;
    margin: 0 auto;
    background-color: #C3EDFF;
    border: 1px solid #009DE8;
    top: 30px;
    position: relative;
  }

  .detailContent .top .companyName {
    padding: 5px;
    margin: 32px 0 0 0;
    font-size: 12px;
    color: white;
    text-align: center;
  }

  .detailContent .bottom {

  }

  .itemWrapper {
    height: auto;
    width: 100%;
    background-color: white;
    margin-bottom: 8px;
  }

  .itemWrapper .title {
    line-height: 28px;
    width: 92%;
    font-size: 13px;
    margin: 0px auto;
    padding: 4px 0 0;
    color: gray;
    font-weight: bold;
    border-bottom: 1px solid #eaeaea;
  }

  .itemWrapper ul {
    width: 92%;
    margin: 0 auto;
  }

  .itemWrapper ul > li {
    font-size: 11px;
    line-height: 20px;
    color: #676767;
  }

  .itemWrapper ul > li:last-child {
    padding-bottom: 10px;
  }

  .itemWrapper ul > li[class="flowLi"] {
    height: 50px;
    margin: 8px 5px 0;
    display: inline-block;
    vertical-align: top;
  }

  .itemWrapper ul > li .node {
    height: 30px;
    line-height: 30px;
    background-color: #C3EDFF;
    border: 1px solid #009DE8;
    display: inline-block;
    border-radius: 6px;
    padding: 0 5px;
    color: #009DE8;
  }

  .itemWrapper ul > li .icons {

  }

  .icons-arr-blue {
    color: #00AAEB;
    font-size: 12px;
  }

  .detailContent .button {
    width: 100%;
    height: 42px;
    line-height: 42px;
    text-align: center;
    background-color: #00AAEB;
    color: white;
    bottom: 0;
    position: fixed;
    background: -webkit-linear-gradient(left, #13C6F4, #1EA5EB);
    background: -o-linear-gradient(left, #13C6F4, #1EA5EB);
    background: -moz-linear-gradient(left, #13C6F4, #1EA5EB);
    background: linear-gradient(left, #13C6F4, #1EA5EB);
  }
</style>
