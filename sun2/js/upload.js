$(function(){
    var filesInput = document.getElementById("fileImage");
    function getFiles(e) {
        e = e || window.event;
        var files = e.target.files,
            reg = /image\/.*/i;
        for (var i = 0,f; f = files[i]; i++) {
            if (!reg.test(f.type)&&f.type!="") {
                alert("请上传jpg/jpeg/gif/png格式的图片");
                continue;
            }
            $(".info-list").prepend("<li><img src=''/></li>");
            var reader = new FileReader();
            reader.onload = (function(file) {
                return function(e) {
                    var img = new Image();
                    img.addEventListener("load", imgLoaded, false);
                    img.src = e.target.result;
                    function imgLoaded() {
                        $(".info-list li:first-child img").attr("src",e.target.result);
                    }
                }
            })(f);
            reader.readAsDataURL(f);
        }
    }
    if (window.File && window.FileList && window.FileReader && window.Blob) {
        filesInput.addEventListener("change", getFiles, false);
    } else {
        alert("您的浏览器不支持上传");
    }
})

