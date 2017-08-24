;(function($){


    var pluginName="handsontable";
    var defaults={
        data:[],
        colHeaders: false,
        colWidths: 150,
        rowWidths: 150,
        readOnly: true,
        autoColumnSize: true,
        contextMenu:true

    };

    function Plugin(element,options){
        this.element=element;
        this.options=$.extend({},defaults,options);
        this._default=defaults;
        this._name=pluginName;
        this.init();
    };

    Plugin.prototype={
        //初始化
        init:function(){
            var e=this;
            var $element=$(this.element);


        },


    };

    $.fn[pluginName]=function(options){
        var e=this;
        e.each(function(){
            if(!$.data(e,"plugin_"+pluginName)){
                $.data(e,"plugin_"+pluginName,new Plugin(this,options))
            }
        });
        return e;
    }






})(jQuery);