/**
 * Created by AD on 2016/2/29
 */
var phoneReg = /^1[34578][0-9]{9}$/;
var pwdReg = /^[0-9a-zA-Z]{6,8}$/;

$(function(){
  /*主页进行号码及密码验证！*/
  $("#submit").click(function(){
    var phonenum = $("#phone").val();
    var password = $("#pwd").val();
    if(!phoneReg.test(phonenum)){
      console.log("手机号输入有误");
      $(".mask").css("display","block");
      $("#phone").val('');
    }else if(!pwdReg.test(password)){
      console.log("密码输入有误：6-8位数字或者字母");
      $(".mask").css("display","block").find("span").html("密码为6-8位数字或字母！");
      $('#pwd').val('');
    }else{
      $(this).attr("href","9999999");
    }
  });
  $(".mask a").click(function(){
    $(".mask").css("display","none");

    /*console.log($("input").val(""));*/
  });

/*  function get_invcode(){
    var cellp =$('#verifi-code').val();
      //cellphone=document.getElementById(cellphone).value;
    $.ajax({
      url: '<{$url}>/cycommunity/service/verify/getCode.json',
      data: cellphone,
      type: 'post',
      dataType: 'json',
      success: function (data) {
        //eval('data=' + data);
        if(data.errorCode == 200) {
          /!*弹出框*!/
          console.log("出现弹出框！");
          $(".mask").css("display","block");
        }
      },
      error: function() {
      }
    });
  }



  function checkinvcode(){
    cellphone = $("verifi-code").val();
    invocde   = $.ajax({
                  url: '<{$url}>/cycommunity/service/verify/verifyCode.json',
                  data: cellphone,
                  type: 'post',
                  dataType: 'json',
                  success: function (data) {
                //eval('data=' + data);
                  if(data.errorCode == 200) {

                  }else{}
              },
            });
          }*/
  /*注册验证（手机）页面的点击验证事件*/
  $("#next-step").click(function(){
    /*ajax获取后台数据看是否匹配*/
    $();
    if($("#agree").hasClass("point-on")&&'验证码正确'){
      $(this).attr("href","9999999");
    }
  });
  /*两次密码验证是否一致*/
  $("#submit-1").click(function(){
    var password = $("#pwd-1").val();
    if(!pwdReg.test(password)){
      console.log("密码输入有误：至少6位数字或者字幕");
      $(".mask").css("display","block");
    }else if($("#pwd-1").val()!=$("#pwd-2").val()){
      $(".mask").css("display","block").find("span").html("两次输入的密码不一致！");
    }else{
     $(this).attr("href","1111111");
    }
  });
});

/*检测手机号*/
function check_Phonenum(){
  var phonenum = $("#phonenum").val();
  var a = 0;
  WAIT  = 5;
  /*ajax获取服务器 电话号 */
  if (!phoneReg.test(phonenum)) {
    console.log("手机号输入有误");
    $(".mask").css("display", "block");
  }else{
    $.ajax({
      url       :'<{:U("user/check_mobile")}>',
      data      :{'cellphone':phonenum,'type':0},
      type      : 'post',
      dataType  : 'json',
      success   : function (data) {
        if(data == '0'){
          /*data==0 已注册过 提示弹框*/
          $(".mask").css("display", "block").find("p").html
          (
              '<a href="注册页面.html" class="btn-mask btn-login left">去登陆</a>'+
              '<a href="注册（验证手机）.html" class="btn-mask btn-cancel right">取消</a>'
          );

        }else{
          /*正常执行  按钮变色倒计时等操作！*/
          $("#get-code").addClass("btn-g");
          $("#verifi-code").removeAttr("disabled");
          timeReduce($("#get-code"));
          console.log("计时器读完");
        }
      }
    });
  }
}

/*倒计时！*/
function timeReduce(){
  if(WAIT>=0){
    $("#get-code").attr("disabled","disabled").val(WAIT+"秒后重新获得");
    WAIT--;
    setTimeout(timeReduce,1000);
    console.log(WAIT);
  }else{
    $("#get-code").val("获取验证码").removeClass("btn-g").removeAttr("disabled");
  }
}