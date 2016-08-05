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
      '<p class="mask-info v-fcm">'+info+'</p> ' +
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
function mask_no_bg(title,imgaddr,close,img,activityName){
  var maskHtml =
      '<div class="v-mask v-fcm c-f" style="background:rgba(0,0,0,.8);">' +
      '<div class="focus-on por"> ' +
      '<img src="'+close+'" class="icon-close" data-click> ' +
      '<div class="focus-on-title por v-fc"> ' +
      '<img src="'+img+'" alt="" style="width: 5rem;height: 1.5rem;"> ' +
      '</div> ' +
      '<div class="focus-box">本活动只有 <span style="color:#FF891C;">'+title+'</span> 关注用户才能参与哦！</div> ' +
      '<div class="focus-box"> ' +
      '<p style="display: block;">如何参与？</p> ' +
      '<p style="display: block;">第一步,长按识别图中二维码,进入公众号。</p> ' +
      '<p style="display: block;">第二步,<span style="color:#FF891C;">'+(/*(activityName==undefined)?'':*/activityName)+'</span>，即可马上参与！</p> ' +
      '</div> ' +
      '<div class="v-fc focus-box "> ' +
      '<img src="'+imgaddr+'" alt="" class="QR-code2"> ' +
      '</div> ' +
      '<p style="display:block;margin-top:.5rem;" class="tac">长按识别二维码 进入公众号</p> ' +
      '</div> ' +
      '</div>';
  $('body').append(maskHtml);
  $(document).on('click','.icon-close',function(){
    $('.v-mask').remove();
  });
}
function mask_no_bg2(title,activityName,imgaddr){
  var maskHtml =
            '<div class="v-mask pdc-5" style="background:rgba(0,0,0,.8)"> ' +
            '<div class="v-fcm tac fz-75" style="height:4.97rem;"> ' +
            '<div class="c-f">' +
            '进入 <span class="fz-90 c-ff">'+title+'</span> 马上 <p style="margin:0 auto;">参与活动！</p>' +
            '</div> ' +
            '</div> ' +
            '<div class="fz-75" style="background:rgba(0,0,0,.5);width:14.784rem;padding:0 .8rem;border-radius:5px;margin:0 auto 1rem;border:1px solid #FAD498;color:#ffc91f;"> ' +
            '<div class="v-fcm" style="height:2rem;font-size:.85rem;">如何快速进入公众号？</div> ' +
            '<div class="v-f"> ' +
            '<i class="db c-ff fz-90" style="font-size:.95rem;margin-right:.3rem;margin-top:-.2rem;font-weight:bold;">1.</i> ' +
            '<div class="v-i1">按住 <span class="c-ff">可爱的OK猫，</span> 识别二维码后马上进入公众号！</div> ' +
            '</div> ' +
            '<div class="v-f" style="margin:1rem 0;"> ' +
            '<i class="db c-ff fz-90" style="margin-right:.3rem;margin-top:-.2rem;font-weight:bold;">2.</i> ' +
            '<div class="v-i1">'+activityName+'</div> ' +
            '</div> ' +
            '</div> ' +
            '<div class="v-fcm"> ' +
            '<div class="ibg-QRcat por"> ' +
            '<img src="'+imgaddr+'" alt="" style="width:100%;height:100%;position:absolute;z-index:1000;opacity:0;">'+
            '<img src="'+imgaddr+'" alt="" class="poa" style="width: 2.85rem;height: 2.85rem;bottom: .3rem;right: 1.88rem;"> ' +
            '</div> ' +
            '</div> ' +
            '</div>';
  $('body').append(maskHtml);
  $('.scroll').css('overflow','hidden');
}
/*带有叉号  以及 中奖  标志的  弹框*/
function mask_no_bg3(prizeName,prizePrice,pubNumName,pubNumImg){

    var maskHtml =
      '<div class="v-mask pdc-5 v-fcm" style="background:rgba(0,0,0,.8)"> ' +
        '<div>'+
          /*中奖啦 以及 关闭 白×*/
          '<div class="v-fcm por" style="height: 2.5rem;">' +
            '<div class="icon-winning"></div>' +
            '<div class="mask-icon-close" style="position:absolulte;"></div>' +
          '</div>'+
          /*获取 价值 奖品 一份*/
          '<div class="v-fm fz-75" style="padding:.3rem .7rem .2rem;"> ' +
              '<div class="c-f">获得价值￥<span>'+prizePrice+'</span>的 <span class="fz-80 c-ff">'+prizeName+'</span> 奖品一份!</div>'+
          '</div> ' +
          /*如何领奖 框 */
          '<div class="fz-75" style="background:rgba(0,0,0,.5);width:14.784rem;padding:0 .8rem;border-radius:5px;margin:.5rem auto .79rem;border:1px solid #FAD498;color:#ffc91f;"> ' +
            '<div class="v-fcm" style="height:2rem;font-size:.85rem;">如何领奖？</div> ' +
            '<div class="v-f"> ' +
              '<i class="db c-ff fz-90" style="font-size:.95rem;margin-right:.3rem;margin-top:-.2rem;font-weight:bold;">1.</i> ' +
              '<div class="v-i1">按住 <span class="c-ff">可爱的OK猫，</span>识别二维码后马上 <span class="c-ff">'+pubNumName+'</span>公众号！</div> ' +
            '</div>' +
            '<div class="v-f" style="margin:.5rem 0 .5rem;"> ' +
              '<i class="db c-ff fz-90" style="margin-right:.3rem;margin-top:-.2rem;font-weight:bold;">2.</i> ' +
              '<div class="v-i1">在公众号底栏菜单 , 点击 <span class="c-ff"> 我的奖品</span>。</div> ' +
            '</div> ' +
          '</div> ' +
          '<div class="v-fcm"> ' +
            '<div class="ibg-QRcat por"> ' +
              '<img src="'+pubNumImg+'" alt="" style="width:100%;height:100%;position:absolute;z-index:1000;opacity:.01;">'+
              '<img src="'+pubNumImg+'" alt="" class="poa" style="width: 2.85rem;height: 2.85rem;bottom: .3rem;right: 1.88rem;"> ' +
            '</div> ' +
          '</div> ' +
        '</div>'+
      '</div>';
  $('body').append(maskHtml);
  $('.scroll').css('overflow','hidden');
  $('.mask-icon-close').click(function(){
    $('.v-mask').remove();
      $('.scroll').css('overflow','scroll');
  });
}
/*ok家 微信授权活动 翻牌活动弹框 */
function mask_card(prizeName,prizePrice,publicAccounts,prizeImg){
  var maskHtml =
      '<div class="mask-card fz-70 v-fcm">' +
      '<div class="mask-card-bg por c-7d">' +
      '<div class="o-icon-card-close icon-card-close" data-click></div>' +
      '<div class="info">' +
      '获得价值￥<span>'+((prizePrice=='undefined')?'0':prizePrice)+'</span>的<span class="c-ff">'+((prizeName=='undefined')?'xx':prizeName)+'</span>奖品一份！' +
      '</div>' +
      '<div class="info">' +
      /*'<p>如何领奖?</p>' +
        '<p>第一步：进入<span class="c-d9">'+((publicAccounts=='undefined')?'0':publicAccounts)+'</span>公众号</p> ' +
        '<p>第二步：回复<span class="c-ff">我要领奖</span></p> '+*/
      '<p class="v-fcm">如何领奖？</p>'+
      '<div class="v-f"><div class="fz-90" style="font-style:italic ;">1. </div><div class="v-i1">按住<span class="c-ff">可爱的OK猫</span>，识别二维码后马上进入 <span class="c-ff">'+publicAccounts+'</span> 公众号，获得更多翻牌机会！</div></div>'+
      '<div class="v-f"><div class="fz-90" style="font-style:italic ;">2. </div><div class="v-i1">回复<span class="c-ff">我要领奖</span>。</div></div> '+
      '</div>' +
      '<div class="v-fcm" style="margin-bottom:1rem;"> ' +
      '<div class="ibg-QRcat por"> ' +
      '<img src="'+prizeImg+'" alt="" style="width:100%;height:100%;position:absolute;z-index:1000;opacity:0;">'+
      '<img src="'+prizeImg+'" alt="" class="poa" style="width: 2.85rem;height: 2.85rem;bottom: .3rem;right: 1.88rem;"> ' +
      '</div> ' +
      '</div> ' +
     /* '<p class="tac c-ec">长按识别二维码  进入公众号</p> ' +*/
      '</div> ' +
      '</div>';
  $('body').append(maskHtml);
  $('.scroll').css('overflow-y','hidden');
  $(document).on('click','.o-icon-card-close',function(){
    $('.mask-card').remove();
    $('.scroll').css('overflow-y','scroll');
  });
}


/*ok家 微信授权活动  翻牌活动：来晚了 弹框*/
function mask_come_late(address,QRcode){
  var maskHtml =
      '<div class="v-mask v-fcm" style="background:rgba(0,0,0,.8)">' +
      '<div class="mask-come-late tac por"> ' +
      /*'<i class="mask-icon-close o-close"></i> ' +*/
      '<i class="icon-come-late"></i> ' +
      '<div class="tac">' +
      '今日抽奖活动已经截止,下次您要早来喽! ' +
      '</div> ' +
      '<div>' +
      '按住 <span class="c-ff">可爱的OK猫</span>，识别二维码后马上进入 <span class="c-ff">'+address+'</span> 公众号，获得更多翻牌机会！ ' +
      '</div> ' +
      '<div class="v-fc"> ' +
      '<div class="ibg-QRcat por"> ' +
      '<img src="'+QRcode+'" alt="" style="width:100%;height:100%;position:absolute;z-index:1000;opacity:0;left:0;top:0;">'+
      '<img src="'+QRcode+'" alt="" class="poa" style="width: 2.85rem;height: 2.85rem;bottom: .3rem;right: 1.88rem;"> ' +
      '</div> ' +
      '</div> ' +
    /*  '<div>长按识别二维码  进入公众号</div> ' +*/
      '</div> ' +
      '</div>';

  $('body').append(maskHtml);
  $('.scroll').css('overflow-y','hidden');
  $(document).on('click','.o-close',function(){
    $('.v-mask').remove();
    $('.scroll').css('overflow-y','scroll');
  });

}

/*moneywork 顶部弹出层*/
function mask_no_bg_top(info){
  var maskHtml = '<div class="mask-top v-f"> ' +
      '<div style="width:1.5rem;"></div> ' +
        '<div class="v-i1" style="padding:.7rem 1rem;line-height: 1.5;"> ' +
          '<p class="tac">已经没有奖品了</p> ' +
          '<p class="tac">回答问题 , 展示一下您的才华吧！</p> ' +
        '</div> ' +
        '<div class="v-fcm o-close" data-click style="width:1.5rem;"> ' +
          '<div class="icon icon-close2"></div> ' +
        '</div>' +
      '</div>';
  $('body').append(maskHtml);
  $(document).on('click','.o-close',function(){
    $('.mask-top').remove();
  });
}

/*moneywork 提示一秒信息*/
function mask_toggle2(info,time){
  (function mask_toggle(){
    var maskHtml =
        '<div class="mask-toggle2 v-fcm"> ' +
        '<div class="mask-shadow v-fcm">' +
        info+
        '</div> ' +
        '</div>';
    $('body').append(maskHtml);
  })(info);
  setTimeout('$(".mask-toggle2").remove()',time);
}

/**/
function mask_prize_quest(arr,index){
  var optionHtml = '';
  var checkedHtml = '';
  for(var i= 0;i<arr.length;i++){
    optionHtml+='<div class="prize-quset-option v-fcm" data-click>'+arr[i]+'</div>';
  }
  var maskHtml =
                  '<div class="v-mask"> ' +
                    '<div class="ofh m-auto" style="margin-top:5rem;border-radius:5px;width:13.931rem;"> ' +
                      '<div class="mask-title v-fcm fw-b fz-60 bg-ea" style="height:1.152rem;">请选择一个选项</div> ' +
                      '<div class="line-row"></div> ' +
                        /*选项内容*/
                        optionHtml+
                    '</div> ' +
                  '</div>';
  $('body').append(maskHtml);
  $(document).on('click','.prize-quset-option',function(event){
    $('.prize-quset-option').removeClass('checked');
    $(this).addClass('checked');
    event.stopPropagation();
    checkedHtml = $('.prize-quset-option.checked').html();
  });

  $(document).one('click','.v-mask',function(){
    $('.v-mask').remove();
    if(checkedHtml!=''){
      $('.choose-option').eq(index).html(checkedHtml);
    }
  });
}