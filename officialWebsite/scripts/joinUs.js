$(function(){

    $(".more .txt").hover(function(){
        $(this).parents(".timeLine-date").addClass("active");
    },function(){
        $(this).parents(".timeLine-date").removeClass("active");
    });


    $(".job").on('click', function() {
        $(this).addClass("hover").siblings().removeClass("hover");
    });




    //function mapClick(className) {
    //    switch (className) {
    //        case "sh":
    //            $(".sh-show").addClass("active");
    //            $(".sz-show,.bj-show").removeClass("active");
    //            $(".sz,.bj").removeClass("active");
    //            $(".sh-company").addClass("city-hover");
    //            $(".sz-company,.bj-company").removeClass("city-hover");
    //            break;
    //        case "sz":
    //            $(".sz-show").addClass("active");
    //            $(".sh-show,.bj-show").removeClass("active");
    //            $(".sh,.bj").removeClass("active");
    //            $(".sz-company").addClass("city-hover");
    //            $(".sh-company,.bj-company").removeClass("city-hover");
    //            break;
    //        case "bj":
    //            $(".bj-show").addClass("active");
    //            $(".sh,.sz").removeClass("active");
    //            $(".sh-show,.sz-show").removeClass("active");
    //            $(".bj-company").addClass("city-hover");
    //            $(".sh-company,.sz-company").removeClass("city-hover");
    //            break;
    //    }
    //};

    $(".sh").on('click', function(e) {

        console.log(e.target);

        $(this).addClass("active").siblings().addClass("city-hover").parent().siblings().children(".city").removeClass("active").parents(".location-icon").siblings().children(".city-title").removeClass("city-hover");
        $(this).parents(".location").siblings(".add-area").children(".sh-show").addClass("active").siblings().removeClass("active");
        //mapClick("sh");
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