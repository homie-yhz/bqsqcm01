/**
 * Created by ad on 2016/3/29 0029.
 */
$(function(){
  /*关闭 动态弹框 事件*/
  $(document).on('click','.btn-close,.btn-link',function(){
    $('.v-mask').remove();
  });
});
/*ok家 弹框 方法  需要猫背景图片  在 v-mc 加入  mask-cat*/
function mask_okplus(info,btn1,btn2){
  var maskHtml =
      '<div class="v-mask v-mc">' +
        '<div class=" mask-cat">' +
          '<div class="mask-okplus-container"> ' +
            '<p class="mask-info">'+info+'</p> ' +
            '<div class="v-btns tac">' +
              (btn1==''?'':'<a data-click class="btn-close">'+btn1+'</a>') +
              (btn2==''?'':'<a data-click class="btn-link">'+btn2+'</a>') +
            '</div> ' +
          '</div> ' +
        '</div> ' +
      '</div>';
  $('body').append(maskHtml);
}


/*弹出 若干秒的遮罩层*/
function mask_toggle(info,time){
  (function mask_toggle(){
    var maskHtml =
        '<div class="mask-toggle v-fcm"> ' +
        '<div class="mask-shadow v-fcm">' +
        info+
        '</div> ' +
        '</div>';
    $('body').append(maskHtml);
  })(info);
  setTimeout('$(".mask-toggle").remove()',time);
}

/*ok家 改版活動  弹框  方法  没有任何背景*/
function mask_no_bg(imgaddr){
  var maskHtml =
'<div class="v-mask v-fcm c-f" style="background:rgba(0,0,0,.8)"> ' +
'<div class="focus-on por"> ' +
'<img src="../images/activity/close.png" class="icon-close" data-click> ' +
'<div class="focus-on-title por v-fc"> ' +
'<img src="../images/activity/join-in.png" alt="" style="width: 5rem;height: 1.5rem;"> ' +
'</div> ' +
'<div class="focus-box">本活动只有 <span style="color:#FF891C;">北青社区报宋家庄版</span> 关注用户才能参与哦！</div> ' +
'<div class="focus-box"> ' +
'<p style="display: block;">如何参与？</p> ' +
'<p style="display: block;">第一步,长按识别图中二维码,进入公众号。</p> ' +
'<p style="display: block;">第二步,回复 <span style="color:#FF891C;">精品投票活动</span>,即可马上参与！</p> ' +
'</div> ' +
'<div class="v-fc focus-box "> ' +
'<img src="../images/activity/1465181191.svg" alt="" class="QR-code2"> ' +
'</div> ' +
'<p style="display:block;margin-top:.5rem;" class="tac">长按识别二维码 进入公众号</p> ' +
'</div> ' +
'</div>';
  $('body').append(maskHtml);

  $(document).on('click','.icon-close',function(){
    $('.v-mask').remove();
  });
}



