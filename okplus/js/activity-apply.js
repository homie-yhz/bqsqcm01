/**
 * Created by Administrator on 2016/1/25 0025.
 */

$(function(){
  $(".buy-add").click(function(){
    /*�ҵ���������Ԫ��li ���Ƹ��е�������Ԫ��*/
    var $li = $(this).parents('li');
    /*��Ʊ��*/
    var tickets_total =0 ;
    /*��ȡ��Ʊ��*/
    var num = parseInt($(this).parent().find("input[type='text']").val());
    /*��ȡʣ��Ʊ��*/
    var tickets_left = parseInt($li.find(".sel-remain span").html());
    if(num<tickets_left){
      num++;
      $(this).parent().find("input[type='text']").val(num);
    };
    change()
  });
  $(".buy-minus").click(function(){
    /*�ҵ���������Ԫ��li ���Ƹ��е�������Ԫ��*/
    var $li = $(this).parents('li');
    /*��Ʊ��*/
    var tickets_total = 0;
    /*��ȡ��Ʊ��*/
    var num = parseInt($(this).parent().find("input[type='text']").val());
    /*��ȡʣ��Ʊ��*/
    var tickets_left = parseInt($li.find(".sel-remain span").html());
    if(num>0){
      num--;
      $(this).parent().find("input[type='text']").val(num);
    };
    change();
  });
   $(".sel-check").change(function(){
     change();
   });

  /*�����ť*/
  $(".point").toggle(
      function(){
        $(this).addClass("point-on");
        $(this).removeClass("point-off");
      },
      function(){
        $(this).addClass("point-off");
        $(this).removeClass("point-on");
      }
  );




});
/*�ۼӷ���*/
function change(){
 var len = $(".l-table").length-1;
  var allNum = 0;
  var allPrice = 0;
  //alert(len);
  for(var i=0;i<len;i++){
    //if($(".l-table").eq(i).find("span"))
    if( $(".l-table").eq(i).children().eq(0).hasClass("checked")){
      var num = parseInt($(".l-table").eq(i).children().eq(2).find('input').val());
      var price = parseInt($(".l-table").eq(i).find("span").eq(0).html());
      allNum = allNum +num;
      allPrice = allPrice +num*price;
    }
  }
  $("#t-total").html(allNum);
  $("#p-total").html(allPrice);
}

window.onload=function(){
  var score = document.getElementById("loadedNum").innerHTML;
  console.log(score);
  var slots={},c=document.getElementById('loadingProgress'),ctx=c.getContext('2d');
  window.hasLoaded = 0;
  window.loading = false;
  window.ulp = ulp;
  function ulp(percent){
    window.loading = true;
    var i = 0, draw = null;
    draw = setInterval(function(){
      if (window.hasLoaded > 100) {
        window.loading = false;
        clearInterval(draw);
        draw = null;
        return true;
      }

      if (i<percent) {
          d();
        i++;
        window.hasLoaded += 1;
      } else {
        clearInterval(draw);
        draw = null;
      }
    }, 10);
  }

  function d(){
    var lp = document.getElementById('loadedNum');
    lp.innerHTML = window.hasLoaded;
    var loaded = window.hasLoaded * 2 / 100 * Math.PI, cw = 204, hcw = 102;
    ctx.clearRect (0,0,cw,cw);
    ctx.beginPath();
    ctx.arc(hcw,hcw,hcw-4, 0, loaded, false);
    ctx.lineWidth = 8;
    ctx.strokeStyle = '#FD7D00';
    ctx.stroke();
  }
  ulp(score);
};
