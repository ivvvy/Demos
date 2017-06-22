/**
 * Created by xinyu.cai on 2017/5/5.
 */
require.config({
    baseUrl: 'script/',
    path: {
        "angular": "libs/angular.min",
        "angular-route": "libs/angular-route.min"
    },
    shim:{
        'angular':{
            exports:'angular'
        },
        'angular-route':{
            exports:'angular-route',
            deps:['angular']
        }
    }
});

require(['angular','angular-route'],function(angular){

});