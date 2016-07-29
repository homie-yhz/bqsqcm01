var firstex=0;
$(function(){
	var $switch = $(".js-switch"),
		$comment = $(".js-comment"),
		$btn = $(".js-send");
	$switch.click(function(e) {
		if($switch.hasClass("js-font")){
			expression();
		}
		else{
			font();
		}
	});

	$(".delete").click(function(e) {
		  var s = $switch.val();
		  s=s.substring(0,s.length-1)
		$switch.val(s);
	});

	$comment.focus(function(e) {
		if(!$switch.hasClass("js-font")){
		    font();
		}
	});
	var emperssion=new Array();
	var i=0;
	$('.expression img[data-em]').click(function(e) {
		$comment.val($comment.val()+$(this).attr("data-icon"));
		emperssion[i]=new Array();
		emperssion[i][0]=$(this).attr("data-icon");
		emperssion[i][1]=$(this).attr("data-em");
		i++;
	});
	$btn.click(function(){
		if(!$switch.hasClass("js-font")){
		    font();
		}
		var str = $comment.val();
		for(var i=0; i<emperssion.length; i++){
			str=str.replace(emperssion[i][0], emperssion[i][1]);
		}
		$comment.val("");
	});
});

//文字
function font(){
	$(".exbottom").css({"opacity":"0","height":"0"});
	$("#scrolltotal").toggleClass("scrollimg");
	var bottom = $(".footer").height();
	$(".scroll").css("bottom",bottom+"px");
	/*$(".slot-scroll").css("bottom","38px");*/
	$(".scrollimg").css({"position":"static","bottom":"0"});
	$('.js-switch i').css({"background":"url(../images/icon/exp.png) no-repeat center center","background-size":"21px 21px","-webkit-background-size":"21px 21px"});
	$(".yhq-pl-con i").css({"background-color":"#ffffff"});
	$('.js-switch').addClass("js-font");
}
//表情
function expression(){
	if(firstex==0){
		var mySwiper = new Swiper('.swiper-containerex',{
			mode:'horizontal',
			pagination:'.expagination',
			paginationClickable: true,
			loop: false 
		});
		firstex++;
	}
	$(".exbottom").css({"opacity":"1","height":"200px"});
	$("#scrolltotal").toggleClass("scrollimg");
	var bottom = $(".footer").height();
	$(".scroll").css("bottom",bottom+"px");
	/*$(".slot-scroll").css("bottom","238px");*/
	$('.js-switch i').css({"background":"url(../images/icon/font.png) no-repeat center center","background-size":"18px 18px","-webkit-background-size":"18px 18px"});
	$(".yhq-pl-con i").css({"background-color":"#ffffff"});
	$('.js-switch').removeClass("js-font");
}