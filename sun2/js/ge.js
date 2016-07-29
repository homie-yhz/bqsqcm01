/**
 * Created by ad on 2016/3/3 0003.
 */
/*找到子元素 ，关闭某一个祖辈 元素 */
function Close(ele,parent){ //ele：子元素 jquery对象  parent：祖辈元素 字符串格式的选择器
  ele.parents(parent).css('display','none');
}
/*c:$(this) p:'.class' 子元素找到父元素 将其隐藏！*/
function del_parent(child,parent){
  child.parents(parent).hide();
}

/*checkbox*/
function check_box(){
  $('radio')
}
