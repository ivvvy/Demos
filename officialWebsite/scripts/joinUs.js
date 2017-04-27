
$(function(){
    $(".desc").hover(function () {
        $(this).parents("li").addClass("active");
    }, function () {
        $(this).parents("li").removeClass("active");
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
        $(this).addClass("active").parent().addClass("selected").siblings().removeClass("selected").children(".city").removeClass("active");
        $(this).siblings(".city-title").addClass("city-hover").parent().siblings().children(".city-title").removeClass("city-hover");
    });

    $(".sz").on('click', function() {
        mapClick("sz");
        $(this).addClass("active").parent().addClass("selected").siblings().removeClass("selected").children(".city").removeClass("active");
        $(this).siblings(".city-title").addClass("city-hover").parent().siblings().children(".city-title").removeClass("city-hover");
    });

    $(".bj").on('click', function() {
        mapClick("bj");
        $(this).addClass("active").parent().addClass("selected").siblings().removeClass("selected").children(".city").removeClass("active");
        $(this).siblings(".city-title").addClass("city-hover").parent().siblings().children(".city-title").removeClass("city-hover");

    });


// 返回顶部效果
    var timer = 0;
    var x = 0;
    var back_timer = '';
    $(window).scroll(function () {
        var top = $(window).scrollTop();
        (top > 300) ? $('#backTop').show() : $('#backTop').hide();
    });
    $('#backTop').click(function () {
        back_timer = setInterval(function () {
            $(window).scrollTop($(window).scrollTop() - 1000);
            if ($(window).scrollTop() <= 0) {
                clearInterval(back_timer);
            }
        }, 1)
    });
});