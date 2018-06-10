import compress from './compress.js'
import loadImg from './loadImg.js'
import loadUsername from './loadUsername.js'


var canvas = document.createElement("canvas");
var ctx = canvas.getContext('2d');
//    瓦片canvas
var tCanvas = document.createElement("canvas");
var tctx = tCanvas.getContext("2d");
var input = document.getElementById("username");
input.scrollIntoViewIfNeeded();


function getUserinfo() {
    var myUrl = encodeURI('https://wx.idsbllp.cn/nodejs/graduationSeason/');
    var apiUrl = 'https://wx.idsbllp.cn/MagicLoop/index.php?s=/addon/Api/Api/oauth&redirect=';
    var nickname;
    var headimgurl;
    if((localStorage.getItem('nickname') == undefined) && (localStorage.getItem('headimgurl') == undefined)){
        window.location = apiUrl + myUrl;
        nickname = getQueryString(nickname);
        headimgurl = getQueryString(headimgurl);
        localStorage.setItem('nickname', nickname);
        localStorage.setItem('headimgurl', headimgurl);
    } else {
        nickname = localStorage.getItem('nickname');
        headimgurl = localStorage.getItem('headimgurl');
    }
    
}

function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}



window.onload = getUserinfo();
document.getElementById('username').addEventListener('change', loadUsername)
document.getElementById('camera_image').addEventListener('change', loadImg)