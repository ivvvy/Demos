define(['jquery','backbone'],function($,Backbone){
    var World=Backbone.Model.extend({
        //����һ��World����ӵ��name����
        name:null
    });

    var Worlds=Backbone.Collection.extend({
        //World����ļ���
        initialize:function(models,options){
            this.bind('add',options.view.addOneWorld);
        }
    });

    var WorldView=Backbone.View.extend({
        el:$("body"),
        initialize:function(){
            //���캯��,ʵ����һ��World�����࣬�������ֵ䷽ʽ����AppView
            this.worlds=new Worlds(null,{view:this})
        },
        events:{
            "click #check":"checkIn"  //�¼��󶨣���dom��idΪcheck��Ԫ��
        },

        checkIn:function(){
            var world_name=prompt("���ʣ����������ˣ�");
            if(world_name=="") world_name='δ֪';
            var world=new World({name:world_name});
            this.worlds.add(world);
        },

        addOneWorld:function(model){
            $("#world-list").append("<li>����������<b>"+model.get('name')+"</b>������ʺ�hello world!</li>")
        }
    });
    return WorldView;
});