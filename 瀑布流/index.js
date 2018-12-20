$(function () {
    init();
    $(window).on("resize",function () { // 窗口改变 重新加载
        init();
    });

});
function init() {
    //每行展示的列数
    //width（）不包括padding、margin、border
    //outerWidth（true）包括padding、margin、border
    var boxWidth = $(".item").outerWidth(true); // 每一个宽度
    var cols = parseInt($(window).width()/boxWidth); // 列数
    var heightArr=[];//存放高度
    for(var i=0;i<cols;i++){
        heightArr.push(0); // [0,0,0,...] 初始化数组 cols个0
    }
    $('.item').each(function (index,item) { // 遍历每个区域
        var idx = 0;
        var minBoxHeight = heightArr[0];
        for(var i=0;i<heightArr.length;i++){
            if(heightArr[i] < minBoxHeight){
                minBoxHeight = heightArr[i];
                idx = i;
            }
        }
        $(item).css({
            left:boxWidth*idx,// 每个区域的宽度*索引
            top:minBoxHeight
        });
        heightArr[idx] += $(item).outerHeight(true);//更新列高
    })
}