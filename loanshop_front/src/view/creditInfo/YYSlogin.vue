<template>
  <div id="loginBox">
    <Header title="手机号" :showLeft="true"></Header>
    <div class="bodyWrapper mt_10">
      <div class="Report">
        <div class="font-ms" style="padding: 10px 15px;">
          <span class="gray">18895313235</span>
        </div>

        <div class="user_input">
          <input class="" :type="type" placeholder="服务密码" maxlength="20"/>
          <span class="icon-eyes" @click="togglePassword"></span>
          <!--<span class="smsCode noborder font-s">获取验证码</span>-->
          <!--<img src="#" id="rcImage" class="smsCode noborder" style="width:120px;height:40px;top:10%;padding:0;" />-->
          <!--<div class="defaultImg">加载中...</div>-->
        </div>

        <div class="user_input">
          <input class="" :type="type" placeholder="服务密码" maxlength="20"/>
          <!--<span class="icon-eyes" @click="togglePassword"></span>-->
          <span :class="[disableBtn?'disable':'','smsCode', 'noborder', 'font-s']" @click="getSmsCode" v-html="smsCode"></span>
          <!--<img src="#" id="rcImage" class="smsCode noborder" style="width:120px;height:40px;top:10%;padding:0;" />-->
          <!--<div class="defaultImg">加载中...</div>-->
        </div>
      </div>

      <div style="padding:0 15px;" class="gray font-s">
        服务密码/短信验证码由6位或8位数字组成，如有疑问，请联系运营商核实
      </div>
      <div class="save">
        <button>提交</button>
      </div>
      <div class="save switch_button">
        <button>短信验证码登录</button>
      </div>
    </div>
    <!--<div class="user_button switch_button">-->
    <!--<div class="button font-ms" id="otherLogin" data-login-type="code">短信验证码登录</div>-->
    <!--</div>-->

    <!--<a class="t_tint_blue font-s fr" style="margin-right:15px;" id="findPassword">忘记密码？</a>-->
  </div>
</template>

<script>
  import utility from '../../assets/js/Utils'

  export default {
    data() {
      return {
        phone: "",
        type: "password",
        smsCode: "获取验证码",
        disableBtn: false
      }
    },
    methods: {
      // 显示密码
      togglePassword (e) {
        var target = $(e.currentTarget),
          container = target.parents('.login_input'),
          input = container.find('input');

        var visible = target.hasClass('visible');
        this.type = visible ? 'password' : 'text';

        target.toggleClass('visible');
      },

      // 定时器
      getSmsCode(seconds) {
        seconds = seconds || 59;
        var _self = this;
        if (_self.disableBtn==true) return false;
        console.log(1)
        if (_self.smsTimeout) {
          clearInterval(_self.smsTimeout);
        }

        _self.smsTimeout = setInterval(function () {

          _self.smsCode = '<span class="red">' + seconds + '</span>秒后可重发';
          _self.disableBtn = true;

          if (seconds == 0) {
            _self.smsCode = "获取验证码";
            _self.disableBtn = false;

            clearInterval(_self.smsTimeout);
            return;
          }
          seconds -= 1;
        }, 1000);
      },

      // 获取短信验证码
      getSmsCode(){

        utility.displayLoading("获取短信验证码...");
        this.axios.post('https://dev.suanhua.org/shcp/api/v2/sp/authslops/init', {

        }, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
          .then(function (response) {
            console.log("111111111111" + response);
            $("#__progressbar__").remove();
            if (res && res.statusCode == "001") {
              intervalCheck(59);
              utility.displaySuccessInfo(res.message || "短信发送成功");
            } else {
              utility.validateError(container, res.message || "获取短信验证码失败，请稍后重试！");
            }
          })
          .catch(function (error) {
            console.log("00000000000" + error);
            utility.validateError(container, res.message || "获取短信验证码失败，请稍后重试！");
          });
      },

      // 刷新图片验证码
      refreshImage(){

      }
    },

  created() {
    if ( this.smsTimeout ) {
      clearTimeout(this.smsTimeout);
    }
//    this.intervalCheck();
  },
  }
</script>

<style scoped>
  .smsCode.noborder {
    color: #00AEFC;
    border: none;
  }

  .smsCode {
    position: absolute;
    height: 60%;
    top: 20%;
    right: 10px;
    line-height: 30px;
    background-color: #FFF;
    border: solid 1px #CACACA;
    color: #707070;
    padding: 0 8px;
  }

  .defaultImg {
    width: 120px;
    height: 43px;
    position: absolute;
    right: 10px;
    text-align: center;
    font-size: 12px;
    color: #8e8e8e;
    background-color: #F1F0EE;
    border: solid 1px #c1c0c0;
  }

  .switch_button button {
    background-color: white;
    color: #333333;
    border: 1px solid #cccccc;
  }
  .smsCode.disable {
    color: #ABABAB;
  }
</style>
