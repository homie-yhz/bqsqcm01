$(function(){
    $(document).delegate(".details .bottom","click",function(){
        var $arrow = $(".details .bottom i");
        if($arrow.hasClass("fold")){
            $arrow.removeClass("fold").addClass("unfold");
            $(".details .con").removeClass("max-height");
        }
        else{
            $arrow.removeClass("unfold").addClass("fold");
            $(".details .con").addClass("max-height");
        }
    });
    $(document).delegate(".consult-left","click",function(){
        $(".consult-dialog").show();
    });
    $(document).delegate(".cancel","click",function(){
        $(".dialog").hide();
    });
    $(document).delegate(".push-list li","click",function(){
        if($(this).hasClass(".current"))
            return;
        $(".push-list li").removeClass("current color-ee");
        $(this).addClass("current color-ee");
    });
    $(document).delegate(".sel-wrap .sel-check","click",function(){
       if($(this).find("input[type='checkbox']").is(":checked")){
           $(this).addClass("checked");
       }
        else{
           $(this).removeClass("checked");
       }
    });
})