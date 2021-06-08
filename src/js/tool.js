
//获取max,min之间的随机数
function getRandom(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
//获取四位数的验证码
function randomFour() {
    let str = ''
    for (var i = 0; i < 4; i++) {
        var num = getRandom(9, 0)
        str += num;
    }
    return str
}
//获取显示当前年月日和星期的字符串       
function getDate() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var dates = date.getDate();
    var week = date.getDay();
    var arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
    return '今天是：' + year + '年' + month + '月' + dates + '日 ' + arr[week];
}


//获取显示当前时分秒的字符串    
function getTimer() {
    var date = new Date();
    var hours = date.getHours();
    hours = hours < 10 ? '0' + hours : hours;
    var minutes = date.getMinutes();
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var seconds = date.getSeconds();
    seconds = seconds < 10 ? '0' + seconds : seconds;
    return hours + ':' + minutes + ':' + seconds;
}

//倒计时函数，需要按照：'2021-4-20 22:30:00'等格式传入设置时间
function conutDown(str) {
    var date1 = +new Date();
    var date2 = +new Date(str);
    var date = (date2 - date1) / 1000;
    var d = parseInt(date / 60 / 60 / 24);
    d = d < 10 ? '0' + d : d;
    var h = parseInt(date / 60 / 60 % 24)
    h = h < 10 ? '0' + h : h;
    var m = parseInt(date / 60 % 60)
    m = m < 10 ? '0' + m : m;
    var s = parseInt(date % 60)
    s = s < 10 ? '0' + s : s;
    return d + '天' + h + '时' + m + '分' + s + '秒'
}


//动画函数封装
function animation(obj, target, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            callback && callback();
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15)
}

//多属性运动
function move(dom, obj, callback) {
    const ol = {};
    for (let attr in obj) {
        clearInterval(ol[attr])
        ol[attr] = setInterval(function () {
            if (attr == 'opacity') {
                let opc = getStyle(dom, attr) * 100
                let step = (obj[attr] - opc) / 10;
                console.log(step, obj[attr], opc == obj[attr]);
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                if (opc == obj[attr]) {
                    clearInterval(ol[attr]);
                    delete ol[attr]
                    if (getMoveNum(ol) == 0) {
                        callback && callback();
                    }
                }
                dom.style[attr] = (step + opc) / 100;
            } else {
                let step = (obj[attr] - parseInt(getStyle(dom, attr))) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                if (parseInt(getStyle(dom, attr)) == obj[attr]) {
                    clearInterval(ol[attr]);
                    delete ol[attr]
                    if (getMoveNum(ol) == 0) {
                        callback && callback();
                    }
                }
                dom.style[attr] = step + parseInt(getStyle(dom, attr)) + 'px';

            }
        }, 15)
    }
    function getStyle(obj, attr) {
        if (window.getComputedStyle) {
            return window.getComputedStyle(obj)[attr]
        } else {
            return obj.currentStyle[attr]
        }
    }
    function getMoveNum(ol) {
        var num = 0;
        for (let key in ol) {
            num++
        }
        return num;
    }
}

