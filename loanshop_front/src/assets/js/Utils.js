export default {
  //mobileTest[11位数字]
  mobileTest: function (mobile) {
    return /^\d{11}$/.test(mobile) && mobile[0] == "1" && (["0", "1", "2"].indexOf(mobile[1]) < 0);
  },

  //显示加载框
  displayLoading: function (message, fullpage, id) {
    fullpage = fullpage || true;
    id = id || "__progressbar__";
    var loadingTpl = '<div class="UpdateProgressBar" id="' + id + '"><div><img src="/src/assets/images/loading.gif" class="loading" /><div class="font-s">' + (message || "") + '</div></div></div>';
    var container = $('body');;
    if (!container.find('#' + id).length) {
      if (fullpage) {
        container.append(loadingTpl);
      } else {
        container.find('.wrapper').append(loadingTpl);
      }
    }
  },

  //显示成功信息
  displaySuccessInfo: function (info, time) {
    var infoTpl = '<div class="info_alert_wrapper" id="__info__"><div class="info_alert font-s">' + (info || "操作成功") + '</div></div>',
      container = $('body');

    var infoWrapper = container.find('#__info__');
    window.infoTimeout = null;

    if (infoWrapper.length) {
      container.find('#__info__').remove();
      window.clearTimeout(infoTimeout);
    }

    container.append(infoTpl);

    var duration = time || 3000;
    window.infoTimeout = setTimeout(function () {
      container.find('#__info__').remove();
    }, duration);

  },

  //显示错误信息
  validateError: function (errorMsg, container, time) {
    if (!errorMsg) return;
    var template = '<div class="UpdateProgressBar white" id="errorContainer"><div class="errorContainer font-s">' + errorMsg + '</div></div>';
    var wrapper = container || $('body');

    window.innerTimeout = null;
    if (wrapper.find('#errorContainer').length) {
      wrapper.find('#errorContainer').remove();
      window.clearTimeout(innerTimeout);
    }

    wrapper.append(template);

    wrapper.find('#errorContainer').unbind('click').bind('click', function () {
      $(this).remove();
      window.clearTimeout(innerTimeout);
    });
  },

}
