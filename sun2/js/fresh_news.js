$(function(){
    $(".idea-list li").click(function(){
        $(this).addClass("idea-current color-ee")
            .siblings("li").removeClass("idea-current color-ee");
        $(this).find(".idea-percent span").addClass("current")
            .closest("li")
            .siblings("li").find(".idea-percent span").removeClass("current")
    })
    $(".js-report li").click(function(){
        $(this).addClass("report-current color-ee")
            .siblings("li").removeClass("report-current color-ee");
    })
    $(".count-support").click(function(){
        $(this).find("em").animate({opacity:'0.8', bottom:'0'},"slow",function(){
            $(this).css({"opacity":"0","bottom":"-1rem"});
            var $count = $(".count-support").find("span");
            var Num = parseInt($count.text());
            Num++;
            $count.text(Num);
        });
    })
    $(".choose-list li,.js-choose li").click(function(){
        $(this).addClass("current color-ee")
            .siblings("li").removeClass("current color-ee");
    })
    $(".js-choose li").click(function(){
        $(".js-interest,.js-like").toggle();
    })
    $(".slot-f-right").click(function(){
        $(this).toggleClass("check");
    })
    $(".js-support").click(function(){
        $(".add-one").animate({opacity:'0.8', top:'-100%'},"slow",function(){
            $(this).css({"opacity":"0","top":"100%"});
            var $count = $(".con-support-count");
            console.log($count);
            var Num = parseInt($count.text());
            Num++;
            $count.text(Num);
        });
    })
})