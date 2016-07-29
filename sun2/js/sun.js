/**
 * Created by ad on 2016/2/17
 */
/*倒计时*/
window.onload = function(){
  calc();
};
function calc(){//计算当前时间，距离目标时间的倒计时
  //hh:mm:ss
  var target=new Date(2016,2,17,17,12,00);
  var now=new Date();
  var ms=target-now;
  var d=parseInt(ms/1000/3600/24);
  d<10&&(d="0"+d);
  var h=parseInt((ms-d*24*3600*1000)/1000/3600);
  h<10&&(h="0"+h);
  var m=parseInt((ms-d*24*3600*1000-h*3600*1000)/1000/60);
  m<10&&(m="0"+m);
  var s=parseInt((ms-d*24*3600*1000-h*3600*1000-m*60*1000)/1000);
  s<10&&(s="0"+s);
  //h,m,s必须2位数，少于2位，前加0
  var countdown=document.querySelector("#timer");
    countdown.innerHTML = d+"<span style='color:black;'>天</span>"+
        h+"<span style='color:black;'>时</span>"+
        m+"<span style='color:black;'>分</span>"+
        s+"<span style='color:black;'>秒</span>";
  /*根据条件判断是否有必要继续启动下一个定时器*/
  if(ms>=1000){
    timer=setTimeout(calc,500);
  }else{//如果不满足继续的条件，就清除timer
    timer=null;
    countdown.innerHTML="00天00时00分00秒";
  }
}
/*选择驿站女孩*//*扩大点击面积*/
$(function(){
  var VOTENUM = $(".add-good").find("span").html();
  $("input[type=radio]").click(function(){
    $("b").removeClass("nike");
    $(".girl").css("background-color","#fff");
    $(this).parent("b").addClass("nike").siblings().css("background-color","#D1EECB");
    /*$(this).parent("b").siblings().css("background-color","#D1EECB");*/
    if($('input[type=radio]:checked')){
        $(".btn-vote").click(function(){
          if($("#vote").hasClass("btn-voted")){
          }else{
            $(this).addClass("btn-voted");
            $(this).html("已投票");
            VOTENUM++;
            $(".add-good").find("span").html(VOTENUM);
          }
        });
    }
  });
  /*查看个人奖品投票*/
  $("#vote-1").click(function(){
    $(this).removeClass("bg-rrr").addClass("bg-ggg").html("谢谢您的投票！");
  });
});
/*
$(function(){
  $("b").click(function(){
    $("b").removeClass("nike");
    $(this).addClass("nike");
  });
});
*/
