var data = [
{
    word: '时光荏苒，我和你的故事停留在栀子花开的那一天，你总说毕业遥遥无期，但转眼就各奔东西。'
},
{
    word: '虽学子变成校友，但挥手是告别也是启程，愿此去繁花似锦，再相逢依旧如故。'
},
{
    word: '愿走过天梯的你，无畏泥泞，征服星辰大海。'
},
{
    word: '告别八教的凌霄，却终怀凌云志。'
},
{
    word: '今日，目送你日渐强壮丰满的羽翼；未来，在彼此都看不到的岁月里熠熠生辉！'
}]


function check(){
    if((localStorage.getItem('username') == undefined) || (localStorage.getItem('img') == undefined)){
        alert('请完善信息');
        $(location).attr('href', '/')
    }
}

function setToname() {
    var name = localStorage.getItem("username");
    $('.toName').text(name);
}

function setMyimg() {
    var node = document.createElement('img');
    var imgurl = localStorage.getItem("img");
    $(node).attr({src: imgurl})
    console.log(node);
    $('.myPhoto').append(node);
}

function random(num, len) {
    var arr = [];
    for (var i = 0; i <= num; i++) {
        arr.push(i);
    }
    arr.sort(
        function() {
            return 0.5 - Math.random();
        }
    );
    arr.length = len;
    return arr;
}

function setSentence(){
    var num = random(4, 1)[0];
    var word = data[num].word;
    $('.sentence').text(word);
}

function setImg(){
    var arr = random(19, 9);
    $.each(arr,function(key, value) {
        var node = document.createElement('img');
        $(node).attr({
            src: '../images/'+ arr[key] +'.png'
        });
        console.log(key);
        $('.photoItem')[key].append(node);
    })
    $('.myPhoto').find('img').remove();

}


window.onload = check();
window.onload = setToname();
window.onload = setImg();
window.onload = setMyimg(); 
window.onload = setSentence(); 