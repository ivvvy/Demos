<template>
  <div>
    <Header title="手机号" :showLeft="false"></Header>
    <div class="bodyWrapper mt_10">
      <div id="channelList">
        <div class="yys_item" id="yys_item">
          <div :class="[yd ? 'active':'','br']" data-param="yd" @click='switchYYS("yd")'>移动</div>
          <div :class="[lt ? 'active':'','br']" data-param="lt" @click='switchYYS("lt")'>联通</div>
          <div :class="[dx ? 'active':'']" data-param="dx" @click='switchYYS("dx")'>电信</div>
          <p class="clear"></p>
        </div>

        <div class="yys_list bg_white" id="proList">
          <div class="province c_999 height_35">省份</div>
          <ul id="yd_pro">

            <li v-for="list in yysList" :data-itemCode="list.itemCode" :data-loginTypeCode="list.loginTypeCode">
              {{list.itemProvince}}
            </li>

          </ul>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        yd: true,
        lt: false,
        dx: false,
        yysList: [],
        ydList: [
          {itemCode: "001", loginTypeCode: "001", itemProvince: "安徽移动1"},
          {itemCode: "002", loginTypeCode: "002", itemProvince: "安徽移动2"},
          {itemCode: "003", loginTypeCode: "003", itemProvince: "安徽移动3"}
        ],
        ltList: [
          {itemCode: "001", loginTypeCode: "001", itemProvince: "安徽联通1"},
          {itemCode: "002", loginTypeCode: "002", itemProvince: "安徽联通2"},
          {itemCode: "003", loginTypeCode: "003", itemProvince: "安徽联通3"}
        ],
        dxList: [
          {itemCode: "001", loginTypeCode: "001", itemProvince: "安徽电信1"},
          {itemCode: "002", loginTypeCode: "002", itemProvince: "安徽电信2"},
          {itemCode: "003", loginTypeCode: "003", itemProvince: "安徽电信3"}
        ]
      }
    },
    methods: {
      switchYYS(pa) {
        this[pa] = true
        if (pa == "yd") {
          this.lt = false;
          this.dx = false;
          this.yysList = this.ydList;
        }
        else if (pa == "lt") {
          this.yd = false;
          this.dx = false;
          this.yysList = this.ltList;
        }
        else if (pa == "dx") {
          this.yd = false;
          this.lt = false;
          this.yysList = this.dxList;
        }
      }
    },

    mounted() {
      this.yysList = this.ydList;
    }
  }
</script>

<style scoped>
  .yys_item {
    width: 90%;
    margin: 15px 5%;
    border: 1px solid #d8d8d8;
    border-radius: 4px;
    overflow: hidden;
  }

  .yys_item > div.active {
    background: #38a8fc;
    color: #ffffff;
  }

  .yys_item > div {
    width: 33.3334%;
    color: #666666;
    float: left;
    text-align: center;
    height: 35px;
    line-height: 35px;
    background: #ffffff;
  }

  .br {
    border-right: 1px solid #d8d8d8;
    box-sizing: border-box;
  }

  .yys_list .province {
    border-top: 1px solid #d8d8d8;
    border-bottom: 1px solid #d8d8d8;
  }

  .yys_list .province, .yys_list ul li {
    padding-left: 5%;
  }

  .height_35 {
    height: 35px;
    line-height: 35px;
  }

  .c_999 {
    color: #999999;
  }

  .bg_white {
    background-color: white;
  }

  .yys_list ul li.active {
    background-color: #f0f0f0;
  }

  .yys_list ul li {
    border-bottom: 1px solid #f0f0f0;
    height: 35px;
    line-height: 35px;
  }

  .yys_list .province, .yys_list ul li {
    padding-left: 5%;
  }
</style>
