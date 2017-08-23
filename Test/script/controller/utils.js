;(function($){

    //$.fn.extend = function (options) {
    //   $.fn.Handsontable.defaults = {
    //        data: [
    //            ['请选择变量', '请选择变量'],
    //            ['请输入条件', '请输入结果']
    //        ],
    //        colHeaders: false,
    //        colWidths: 150,
    //        rowWidths: 150,
    //        readOnly: true,
    //        autoColumnSize: true,
    //        contextMenu: {
    //            items: {
    //                "row_above": {name: "当前行上方"},
    //                "row_below": {name: "当前行下方"},
    //                "remove_row": {name: "删除行"},
    //                "remove_col": {name: "删除列"},
    //            }
    //        },
    //    }
    //}
    //var pluginName="Handsontable";
    //var defaults={
    //    data:[
    //        ['请选择变量', '请选择变量'],
    //        ['请输入条件', '请输入结果']
    //    ],
    //    colHeaders: false,
    //    colWidths: 150,
    //    rowWidths: 150,
    //    readOnly: true,
    //    autoColumnSize: true,
    //    contextMenu: {
    //        items: {
    //            "row_above": {name: "当前行上方"},
    //            "row_below": {name: "当前行下方"},
    //            "remove_row": {name: "删除行"},
    //            "remove_col": {name: "删除列"},
    //        }
    //    },
    //
    //};
    //
    //function Plugin(element,options){
    //    this.element=element;
    //    this.options=$.extend({},defaults,options);
    //    this._default=defaults;
    //    this._name=pluginName;
    //    this.init();
    //};
    //
    //Plugin.prototype={
    //    //初始化
    //    init:function(){
    //        var e=this;
    //        var $element=$(this.element);
    //        //var sel=instance.getSelected();
    //        //$element.addHook('afterSelectionEnd',sel[0],sel[1],sel[2],sel[3]);
    //
    //    },
    //    //updateSettings:function(){
    //    //    var e=this;
    //    //}
    //};
    //
    //$.fn[pluginName]=function(options){
    //    return new Handsontable($(this), options);
    //}

    //定义构造函数handsontable
    var Handsontable=function(obj,opt){
        this.$element=obj,
            this.defaults={
                data: [],
                colHeaders: false,
                colWidths: '',
                rowWidths: '',
                readOnly: true,
                autoColumnSize: true,
                contextMenu: true

            },
            this.options=$.extend({},this.defaults,opt);
    };

    //定义handsontable的方法
    Handsontable.prototype={
        init:function(){

        },
        select:function(){
            this.$element.addHook('afterSelectionEnd',function(r, c, r2, c2){
                for (var i = r; i <= r2; i++) {
                    for (var j = c; j <= c2; j++) {
                        if(r===0){
                            $(".tableSubmenu li a").off().on("click", function () {
                                var only = "";
                                var index = $(this).index();
                                console.log(i);
                                this.$element.removeCellMeta(i-1, j-1, 'className', this.$element.getCellMeta(i-1,j-1).className+' '+only);
                                var text = $(this).eq(index).text();
                                var dataType = $(this).parents(".tableSubmenu").siblings("a").attr("data-type");
                                $(".tableMenu").removeClass("show");
                                only = "only__" + dataType+"__conditions";
                                this.$element.setDataAtCell(i - 1, j - 1, text);
                                hot1.setCellMeta(i - 1, j - 1, 'className', this.$element.getCellMeta(i - 1, j - 1).className + ' ' + only);
                                this.$element.render();
                            });
                        }

                    }
                }
            })
        }

    };

    //插件中使用handsontable对象创建实例并返回
    $.fn.handsontables=function(options){
        var handsontable=new Handsontable($(this),options);
        return handsontable;
    }



})(jQuery);