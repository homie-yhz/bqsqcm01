/**
 * Created by Administrator on 2016/2/22 0022.
 */
window.onload = function(){
  /*替换图片*/
  var u = navigator.userAgent;
  var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
  if(!isiOS){
    var imgs = $('#main').find('img');
    for(i = 0;i<imgs.length;i++){
      imgs[i].src = "images/android-" + i +".png";
    }
  }
  function is_weixn(){
    var ua = navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i) == "micromessenger") {
      return true;
    } else {
      return false;
    }
  }
$('#address').click(function(){
  var u = navigator.userAgent;
  var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
 if (is_weixn()) {
    $('#main').hide();
    $('#guide').show();
  }else {
    if(isiOS){
      window.location = 'https://itunes.apple.com/cn/app/ok-jia-she-qu-sheng-huo-ok/id966812317?mt=8';
    }else{
      window.location = 'http://101.201.176.24/cycommunity/download/android/BJChaoYang1.1.apk';
    }
  }
})

};


