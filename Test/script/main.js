require.config({
    baseUrl: 'script/',
    shim:{
        underscore:{
            exports:'_'
        },
        backbone:{
            deps:[
                'underscore',
                'jquery'
            ],
            exports:'Backbone'
        }
    },
    paths: {
        jquery: 'libs/jquery-2.2.0.min',
        underscore: 'libs/underscore-min',
        backbone:'libs/backbone-min'
    }

});

require(['jquery','backbone','controller/app'],function($,Backbone,AppView){
    var appView=new AppView();
});

