$(function(){
    var i = 0;
    $(".more .txt").hover(function(){
        $(this).parents(".timeLine-date").addClass("active");
    },function(){
        $(this).parents(".timeLine-date").removeClass("active");
    });


    $(".job").on('click', function() {
        $(this).addClass("hover").siblings().removeClass("hover");
    });





    function mapClick(className) {
        switch (className) {
            case "sh":
                $(".add-detail").text("上海市长宁区江苏路369号兆丰世贸大厦19楼G座");
                break;
            case "sz":
                $(".add-detail").text("深圳市南山区科苑中路8号迅美科技广场1号楼6楼6203室");
                break;
            case "bj":
                $(".add-detail").text("北京市海淀区丹棱街1号院1号楼3层306室");
                break;
        }
    };

    $(".sh").on('click', function() {
        mapClick("sh");
        $(this).addClass("active").parent().addClass("selected").siblings().removeClass("selected");
    });

    $(".sz").on('click', function() {
        //$(this).addClass("active");
        //mapClick("sz");
        console.log($(".sz").siblings());

        $(this).addClass("active").siblings().addClass("city-hover").parent().siblings().children(".city").removeClass("active").parents(".location-icon").siblings().children(".city-title").removeClass("city-hover");
        $(this).parents(".location").siblings(".add-area").children(".sz-show").addClass("active").siblings().removeClass("active");
    });

    $(".bj").on('click', function() {
        //$(this).addClass("active");
        //mapClick("bj");
        console.log($(".bj").siblings().parent().siblings().children());
        $(this).addClass("active").siblings().addClass("city-hover").parent().siblings().children(".city").removeClass("active").parents(".location-icon").siblings().children(".city-title").removeClass("city-hover");
        $(this).parents(".location").siblings(".add-area").children(".bj-show").addClass("active").siblings().removeClass("active");
    });
});