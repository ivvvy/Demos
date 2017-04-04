$(function(){
    function map_mouseover(className) {
        switch (className) {
            case "sh":
                $("#box_header").text("shanghai");
                $("#box_littleheader").text("上海");
                $("#box_address").text("地址：上海市闵行区吴中路699号 全季酒店1F-2F");
                $("#box_tel").text("电话：400-100-1999");
                $("#box_fax").text("传真：021-29989981");
                break;
            case "bj":
                $("#box_header").text("beijing");
                $("#box_littleheader").text("北京");
                $("#box_address").text("地址：北京 朝阳区 大山子彩虹路6号 全季酒店1F");
                $("#box_tel").text("电话：400-100-1999");
                $("#box_fax").text("传真：021-29989981");
                break;
            case "wh":
                $("#box_header").text("wuhan");
                $("#box_littleheader").text("武汉");
                $("#box_address").text("地址：武汉市东湖高新技术开发区关山大道289号禧玥酒店4F");
                $("#box_tel").text("电话：400-100-1999");
                $("#box_fax").text("传真：021-29989981");
                break;
        }
    };

    $(".map_inner .sh").mouseover(function() {
        map_mouseover("sh");
        $(this).addClass("sh_hover");
        $(".map_add .bj").removeClass("bj_hover");
        $(".map_add .wh").removeClass("wh_hover");
    });

    $(".map_inner .bj").mouseover(function() {
        map_mouseover("bj");
        $(this).addClass("bj_hover");
        $(".map_add .sh").removeClass("sh_hover");
        $(".map_add .wh").removeClass("wh_hover");
    });
    $(".map_inner .wh").mouseover(function() {
        map_mouseover("wh");
        $(this).addClass("wh_hover");
        $(".map_add .sh").removeClass("sh_hover");
        $(".map_add .bj").removeClass("bj_hover");
    });
});