var minSize = 5;
var maxSize = 50;
var newOn = 200; //雪花产生的间隔
var flakeColor = "#fff"; // 雪花颜色
var flake=$("<div></div>").css({  // 每个雪花都是一个div对象
    "position":"absolute",  // 块级元素 想要自由移动 需要定位 使其脱离文档流
    "top":"-50px"
}).html("❄");

$(function () { // 页面加载之后
    var documentHeight = $(document).height();// 获取浏览器高度
    var documentWidth = $(document).width();
    setInterval(function () {
        var startPositionLeft = Math.random()*documentWidth; // 乘documentWidth 是为了确保产生的随机数出现在浏览器范围内
        var startOpacity = 0.7 + Math.random()*0.3;
        var endPositionTop = documentHeight;
        var endPositionLeft = Math.random()*documentWidth;
        var durationFall =2000 + Math.random()*3000;
        var sizeFlake = minSize + Math.random()*maxSize;
        flake.clone().appendTo("body").css({
            "left":startPositionLeft,
            "opacity":startOpacity,
            "font-size":sizeFlake,
            "color":flakeColor
        }).animate({
            "top":endPositionTop,
            "left":endPositionLeft,
            "opacity":0.5
        },durationFall,function () {
            $(this).remove(); // 雪花落地清除，解决生成过多<div>的问题
        });
    },newOn)

});