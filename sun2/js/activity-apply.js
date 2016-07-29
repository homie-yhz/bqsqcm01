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
 $(".intro-1 .point").toggle(
      function(){
        $(this).addClass("point-on");
        $(this).removeClass("point-off");
      },
      function(){
        $(this).addClass("point-off");
        $(this).removeClass("point-on");
      }
  );
  $(".add-photo .point").click(
      function(){
        $(".add-photo .point-1").removeClass("point-on-r");
        $(this).addClass("point-on-r");
      });

  $(".intro-1 .point-1").toggle(
      function(){
        $(this).addClass("point-on-r");
        $(this).removeClass("point-off");
      },
      function(){
        $(this).addClass("point-off");
        $(this).removeClass("point-on-r");
      }
  );
  $(".add-photo .point-1").click(
      function(){
        $(".add-photo .point-1").removeClass("point-on-r");
        $(this).addClass("point-on-r");
  });

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

