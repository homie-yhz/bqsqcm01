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
      '<div class="v-mask">' +
        '<div class="v-mc mask-cat">' +
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