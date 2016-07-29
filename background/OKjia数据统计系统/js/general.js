/**
 * Created by AD on 2016/5/30 0030.
 */
/*正则验证*/
var reg_pwd = /^[a-zA-Z0-9]{8,12}$/;

$(function(){

  /*事件：点击 排序按钮进行排序事件*/
  $('.sort').parent().click(function(){
    var $this = $(this).find('i');
    if($this.hasClass('sort-down')){
      $this.toggleClass('sort-up');
    }else{
      $('.sort').removeClass('sort-down sort-up');
      $this.addClass('sort-down')
    }
  });
  /*事件：鼠标放在 问号上面显示提示信息*/
  $('.question-mask').hover(function(){
    $(this).children('.question-info').show();
  },function(){
    $(this).children('.question-info').hide();
  });

  /*时间：鼠标放在 图文标题时显示提示信息*/
  $('.img-text-title').hover(function(){
    $(this).next('.title-info').show();
  },function(){
        $(this).next('.title-info').hide();
  });

  /*$('.o-radiobox>div').click(function(){
    var jq_parent = $(this).parents('.o-radiobox');
    jq_parent.find('.radio-circle').removeClass('radio-circle-on checked');
    $(this).find('.radio-circle').addClass('radio-circle-on checked');
  });*/
});


/*下拉菜单选择 方法*/
function dropdownList(select_name){
  $('.'+select_name+'>div').on('click',function(){
    $(this).find('.icon-select').toggleClass('icon-select-on').parent().next('.info')/*toggleClass('dn')*/.slideToggle(200);
  });
  $('.'+select_name+' li').on('click',function(){
    $('.'+select_name+' li').removeClass('selected');
    $(this).addClass('selected');
    $('.'+select_name+' .select-val').text($(this).text()).next().toggleClass('icon-select-on').parent().next().slideToggle(200);
  });
}

/*单选按钮点击事件*/
function radioClick(find_change,change_class){
  $('.o-radiobox>div').on('click',function(){
    var jq_parent = $(this).parents('.o-radiobox');
    jq_parent.find(find_change).removeClass(change_class);
    $(this).find(find_change).addClass(change_class);
  });
}