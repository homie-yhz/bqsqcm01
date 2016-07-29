/**
 * Created by ad on 2016/3/2
 */
$(function(){
  /*加号+1*/
  $('.buy-add').click(function(){
    var $num         = parseInt($(this).prev().val());
    var $left_ticket = $(this).parents('li').find('.sel-remain span').html();
    $left_ticket-$num > 0 && $(this).prev().val(++$num);
    getTotal();
  });
  /*减号-1*/
  $('.buy-minus').click(function(){
    var $num = parseInt($(this).next().val());
    $num > 0 && $(this).next().val(--$num);
    getTotal();
  });
  /*手动输入 改变票数 */
  $('input').change(function(){
    var $num = $(this).val();
    var $left_ticket = parseInt($(this).parents('li').find('.sel-remain span').html());
    (
        !isNaN($num)
    )?($(this).val($num - 0 < 0 ? 0 : $num),
        $num-$left_ticket>0 && $(this).val($left_ticket)):($(this).val(0));
    getTotal();
  });
  /*点击前端 选中票按钮 */
  $('label').click(function(){
    getTotal();
  });
});
/*获得总票数以及总价格的方法*/
function getTotal(){
  var ttTickets = 0;
  var ttPrice   = 0;
  $('li').each(function(i){
    (
        $('li label').eq(i).hasClass('checked')
    ) && (
        ttTickets += parseInt($('li .buy-con input').eq(i).val()),
            ttPrice += parseInt($('.sel-money span').eq(i).html()*$('.buy-con input').eq(i).val())
    );
    $('#t-total').html(ttTickets);
    $('#p-total').html(ttPrice);
  });
}
