import domtoimage from 'dom-to-image';
import compress from '../compress';

function dti() {
    var node = document.querySelector('body');
    domtoimage.toPng(node)
        .then(function(dataUrl) {
            var img = new Image();
            var name = localStorage.getItem('name');
            img.src = dataUrl;
            $('.container').append(img);
            $(img).css({
                position: 'absolute',
                top: '0'
            });
        });
}

var words = [{
    word: '时光荏苒，我和你的故事停留在栀子花开的那一天，你总说毕业遥遥无期，但转眼就各奔东西。'
}, {
    word: '虽学子变成校友，但挥手是告别也是启程，愿此去繁花似锦，再相逢依旧如故。'
}, {
    word: '愿走过天梯的你，无畏泥泞，征服星辰大海。'
}, {
    word: '告别八教的凌霄，却终怀凌云志。'
}, {
    word: '今日，目送你日渐强壮丰满的羽翼；未来，在彼此都看不到的岁月里熠熠生辉！'
}, {
    word: '以德修身，以礼待人。道德一直是国人做人的基础，礼貌不仅是你人品的大标签，更是新世纪素质修养的表现。'
}, {
    word: '学海无涯，求学路远。知识永远是你坚硬的后盾，好学则是铺路石。愿你持初心，爱求索，勿忘用知识来充盈自己。'
}, {
    word: '实践是检验真理的唯一标准。是非对错往往困扰我们前行的道路，我们应该在实践中求证真理真确与否。'
}, {
    word: '空气可以排除，光源可以被阻挡，但思维往往无所可以禁锢。活跃的思维是人生的财富，创新推动社会的进步。'
}, {
    word: '莘莘学子，母校见证了你们从稚嫩走向成熟的蜕变，愿你们谨记校训，前程似锦，带着梦想扬帆起航。'
}, {
    word: '修德，品德和人格是我们行走社会准则，毕业只是修行路上的一个节点。'
}, {
    word: '博学，校园之外是更广阔的书山学海，坚持不懈地汲取才能博学明理。'
}, {
    word: '求实，纯真岁月渐行渐远，求实之路道阻且长。'
}, {
    word: '创新，远走高飞时，请带着你对追梦的领悟和创新的追求。'
}, {
    word: '热情，过去的四年是学术的积淀，是热情的蓄力，不忘初心，砥砺前行。'
}, {
    word: '吻过暖春的落樱，以金秋银杏作伴，寒东腊梅为友，我们走过四季。故事于酷夏栀子绽放结局，没有“未完待续”。'
}, {
    word: '没有雨红莲上的欢声笑语，你也要笑对未来；没有情人坡上的柔情蜜意，你也过得甜蜜蜜。'
}, {
    word: '没有校车送你到目的地，你也要为梦奔跑；没有南部校区的实验楼，你也要坚持追求真理。'
}, {
    word: '就算没有备好三餐等你的中心食堂，也不要忘记准点吃饭。就算没有聚餐圣地堕落街，也不要和我断了联系。'
}, {
    word: '告别图书馆的香氛书页，也不要停止汲取知识的芬芳。邮子们，望一愿名成就，不负流年逝！'
}]


function check() {
    if ((localStorage.getItem('username') == undefined) || (localStorage.getItem('img') == undefined)) {
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
    $(node).attr({
        src: imgurl
    })
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

function setSentence() {
    var num = random(19, 1)[0];
    var word = words[num].word;
    $('.sentence').text(word);
}

function setImg() {
    var arr = random(19, 9);
    $.each(arr, function(key, value) {
        var node = document.createElement('img');
        $(node).attr({
            src: '../images/' + arr[key] + '.png'
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
window.onload = dti();