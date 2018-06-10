import compress from './compress.js'
import loadImg from './loadImg.js'
import loadUsername from './loadUsername.js'



$('.members').click(function(event) {
    $('.black').css({
        backgroundColor: 'rgba(0,0,0,0.7)',
        zIndex: '10000'
    });
    $('.membersContainer').css({
        display: 'block'
    });
});

$('.close').click(function(event) {
    $('.membersContainer').css({
        display: 'none'
    });
    $('.black').css({
        backgroundColor: 'rgba(0,0,0,0)',
        zIndex: '-1'
    });
});



// function getUserinfo() {
//     var myUrl = encodeURI('https://wx.idsbllp.cn/nodejs/graduationSeason/');
//     var apiUrl = 'https://wx.idsbllp.cn/MagicLoop/index.php?s=/addon/Api/Api/oauth&redirect=';
//     var nickname;
//     var headimgurl;
//     if((localStorage.getItem('nickname') == undefined) && (localStorage.getItem('headimgurl') == undefined)){
//         window.location = apiUrl + myUrl;
//         nickname = getQueryString(nickname);
//         headimgurl = getQueryString(headimgurl);
//         localStorage.setItem('nickname', nickname);
//         localStorage.setItem('headimgurl', headimgurl);
//     } else {
//         nickname = localStorage.getItem('nickname');
//         headimgurl = localStorage.getItem('headimgurl');
//     }
    
// }

// function getQueryString(name) {
//     var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
//     var r = window.location.search.substr(1).match(reg);
//     if (r != null) {
//         return unescape(r[2]);
//     }
//     return null;
// }



// window.onload = getUserinfo();
document.getElementById('username').addEventListener('change', loadUsername)
document.getElementById('camera_image').addEventListener('change', loadImg)