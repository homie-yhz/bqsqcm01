$(function(){
    $(".close").click(function(){
        $('.layer').fadeOut('slow');
    })

   $(".comment-con").click(function(){
       var showCount = $(".replay-show").length;
       var $content =  $(this).parent();
       if(showCount > 0) return;
       $content.addClass("replay-show");
       $content.siblings(".comment-reply").show();
   })

    $(".reply-opera-cancel").click(function(){
    $(this).closest(".comment-reply").hide();
    console.log( $(this).closest(".comment-content").length);
    $(this).closest(".comment-box").find(".comment-content").removeClass("replay-show");
})

    $(".js-comment").click(function(){
        $('.layer').fadeIn('slow');
    })

    $(".js-layer-cancel").click(function(){
        $('.layer').fadeOut('slow');
    })
})