/*
    Function : ex2
    Author : 严启铭
    Build-Date : 2019-9-9
    Version : 1.0

*/

/*
    var 的 五种常见类型
    var a; undifined
    string 
    object
    boolean
    number
*/

var canvas = document.getElementById("canvas");//..获取id 为canvas的对象
var ctx = canvas.getContext('2d'); //提供canvas的api 二维绘图环境

var gradient = ctx.createLinearGradient(70, 200, 300, 0);

gradient.addColorStop(0.14, 'red');
gradient.addColorStop(0.28, 'orange');
gradient.addColorStop(0.42, 'yellow');
gradient.addColorStop(0.56, 'green');
gradient.addColorStop(0.70, 'blue');
gradient.addColorStop(0.84, '#00FFFF');
gradient.addColorStop(1, 'purple');
ctx.fillStyle= gradient;
ctx.rect(0, 0, canvas.width, canvas.height);
ctx.shadowOffsetX = 10;
ctx.shadowOffsetY = 10;
ctx.shadowColor = "gray";
ctx.shadowBlur = 10;



function onInterval() {
    
    var today = new Date();
    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();

    // var str = "";
    // str += hour;
    // str+= ":";
    // str += minute;
    // str += ":";
    // str+=second;
    if(second<10){
        second = "0"+second;
    }

    if (hour < 10) {
        hour = "0" + hour;
    }

    if (minute < 10) {
        minute = "0" + minute;
    }

    str = hour+":"+minute+":"+second;

    ctx.font='80px Arial';

    ctx.textAlign='center';

    ctx.textBaseline='middle';

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillText(str, canvas.width / 2, canvas.height / 2);

    setTimeout(onInterval,1000);

}
function onMousedown() {

    onInterval();
    
}

canvas.onclick = onMousedown;
window.onkeydown = function (event) {
    if(event.keyCode == 13){
        onInterval();
    }
}

//id = setInterval(onInterval,1000);
//id = setTimeout(onInterval,1000);