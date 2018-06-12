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



function getUserinfo() {
    $.ajax({
        url: 'https://wx.idsbllp.cn/graduate/c/getsinfo/ ',
        type: 'POST',
        data: null,
    })
    .done(function() {
        console.log(data);
        localStorage.setItem('headimgurl',data.headimgurl);
        localStorage.setItem('nickname',data.nickname);
    })
    .fail(function() {
        console.log("error");
    })
    .always(function() {
        console.log("complete");
    });
    
}

// function getQueryString(name) {
//     var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
//     var r = window.location.search.substr(1).match(reg);
//     if (r != null) {
//         return unescape(r[2]);
//     }
//     return null;
// }



window.onload = getUserinfo();
document.getElementById('username').addEventListener('change', loadUsername)
document.getElementById('camera_image').addEventListener('change', loadImg)