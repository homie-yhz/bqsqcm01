$(function(){
	$('.btnra input').each(function(){
        if(this.checked){
          $(this).siblings("i").attr("class","chkradio");
        }else{
          $(this).siblings("i").attr("class","nochkradio");	
		}
    });
	
    $('.btnra input').click(function(){
        if(this.checked){
          $(this).siblings("i").attr("class","chkradio");
        }else{
          $(this).siblings("i").attr("class","nochkradio");
		}
    });
  	$('.mp-jian').click(function(){
		var countsl = $(this).siblings("input").val();
		if(countsl<=0){
			countsl = 0;	
		}else{
			countsl--;	
		}
		$(this).siblings("input").val(countsl)
		sun();
	});
  	$('.mp-jia').click(function(){
		var countsl = $(this).siblings("input").val();
		countsl++;	
		$(this).siblings("input").val(countsl)
		$(this).parent().parent().find("input").eq(0).attr("checked","checked")
		$(this).parent().parent().find("input").eq(0).prev().attr("class","chkradio");
		sun();
	});
  	
	
})
function sun(){
	var sun = 0;
	var number = 0;
	$("li").each(function(){
	   sun += $(this).find("[name=chargeMoney]").eq(0).html() * $(this).find("input").eq(1).val();
	   number += parseInt($(this).find("input").eq(1).val());
	});
	$("#sun").html(sun);
	$("#number").html(number+"张");
}
