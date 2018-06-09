import compress from './compress.js';

export default function loadImg(event) {
    // 获取当前选中的文件
    const file = event.target.files[0];
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext('2d');
    //    瓦片canvas
    const tCanvas = document.createElement("canvas");
    const tctx = tCanvas.getContext("2d");
    const maxsize = 10 * 1024 * 1024;
    console.log(file);

    // 检查文件类型
    if (['jpeg', 'png', 'gif', 'jpg'].indexOf(file.type.split("/")[1]) < 0) {
        alert("文件格式不对");
        return;
    }
    // 文件大小限制
    if (file.size > maxsize) {
        alert("文件过大");
        return;
    }
    if (!this.files.length) return;
    var reader = new FileReader();
    var size = file.size / 1024 > 1024 ? (~~(10 * file.size / 1024 / 1024)) / 10 + "MB" : ~~(file.size / 1024) + "KB";
    reader.onload = function() {
        var result = this.result;
        var img = new Image();
        img.src = result;
        $('.photoinput').css("background-image", "url(" + result + ")");
        $('.cameraContainer').hide();
        $('.add').hide();
        //如果图片大小小于100kb，则直接上传
        if (result.length <= maxsize) {
            img = null;
            localStorage.setItem('img', result);
            return;
        }
        //      图片加载完毕之后进行压缩，然后上传
        if (img.complete) {
            callback();
        } else {
            img.onload = callback;
        }

        function callback() {
            var data = compress(img);
            localStorage.setItem('img', data);
            img = null;
        }
    };
    reader.readAsDataURL(file);
}