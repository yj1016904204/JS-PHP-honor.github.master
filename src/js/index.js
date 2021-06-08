
let focus = document.querySelector('.focus');
let ul = focus.querySelector('ul');
let lis = ul.querySelectorAll('li')
let num = 0;
let circle = 0;
let left = document.querySelector('.left')
let right = document.querySelector('.right')
let ol = focus.querySelector('ol');
const focusWidth = 1920;
let flag = true;
for (let i = 0; i < lis.length; i++) {
    let li = this.document.createElement('li');
    ol.appendChild(li);
    ol.children[0].className = 'bg';
    ol.children[i].addEventListener('click', function () {
        num = circle = i;
        animation(ul, -i * focusWidth);
        for (let j = 0; j < lis.length; j++) {
            ol.children[j].className = '';
        }
        this.className = 'bg';
    });
}
//复制图片
const fristLi = lis[0].cloneNode(true);
ul.appendChild(fristLi);

//右键点击
right.addEventListener('click', () => {
    if (flag) {
        flag = false
        if (num > ol.children.length - 1) {
            num = 0;
            ul.style.left = 0;
        }
        num++;
        circle++;
        if (circle > ol.children.length - 1) {
            circle = 0;
        }

        for (let j = 0; j < lis.length; j++) {
            ol.children[j].className = '';
        }
        ol.children[circle].className = 'bg';
        animation(ul, -num * focusWidth, function () {
            flag = true;
        })
    }
});

// 左键点击
left.addEventListener('click', () => {
    if (flag) {
        flag = false;
        if (num <= 0) {
            num = ol.children.length;
            ul.style.left = -ol.children.length * focusWidth + 'px';
        }
        num--;
        circle--;
        if (circle < 0) {
            circle = ol.children.length - 1;
        }
        for (let j = 0; j < lis.length; j++) {
            ol.children[j].className = '';

        }
        ol.children[circle].className = 'bg';
        animation(ul, -num * focusWidth, function () {
            flag = true;
        })
    }
});

//添加定时器
let dsq = setInterval(function () {
    right.click();
}, 2000);


focus.addEventListener('mouseenter', () => {
    clearInterval(dsq)
});

focus.addEventListener('mouseleave', () => {
    dsq = setInterval(function () {
        right.click();
    }, 2000);
});



//按钮切换事件
var xianshi = document.querySelector('.xianshi')
var xianshiUl = xianshi.querySelector('ul')
var btnPrev = xianshi.querySelector('.btn-prev')
var btnNext = xianshi.querySelector('.btn-next')
btnNext.onclick = function () {
    this.style.display = 'none'
    btnPrev.style.display = 'block'
    xianshiUl.style.left = '-968px'
}
btnPrev.onclick = function () {
    this.style.display = 'none'
    btnNext.style.display = 'block'
    xianshiUl.style.left = '0'
}


//从数据库渲染数据
var list2 = document.querySelector('.main2-right').querySelector('ul')
var list3 = document.querySelector('.index-main3').querySelector('ul')
var list4 = document.querySelector('.index-main4').querySelector('ul')
var list5 = document.querySelector('.index-main5').querySelector('ul');
!async function () {
    //从数据库获取数据
    var arr = await promiseAjax({
        url: '../php/index.php',
    })
    arr = eval('(' + arr + ')')
    arr2 = arr.slice(0, 8)
    var str = ``
    arr2.forEach(item => {
        str += `
            <li>
                <img src="${item.img}" alt="">
                <div class="box">${item.title}</div>
                <p class="box1">${item.p}</p>
                <p class="price">¥${item.price}</p>
            </li>
            `
    });
    list2.innerHTML = str
    //给平板电脑渲染数据
    arr3 = arr.slice(8, 16)
    var str3 = ``
    arr3.forEach(item => {
        str3 += `
            <li>
                <img src="${item.img}" alt="">
                <div class="box">${item.title}</div>
                <p class="box1">${item.p}</p>
                <p class="price">¥${item.price}</p>
            </li>
            `
    });
    list3.innerHTML = '<li class="one"><img src="../img/002.jpg" alt=""></li>' + str3
    //给手表渲染数据
    arr4 = arr.slice(16, 24)
    var str4 = ``
    arr4.forEach(item => {
        str4 += `
            <li>
                <img src="${item.img}" alt="">
                <div class="box">${item.title}</div>
                <p class="box1">${item.p}</p>
                <p class="price">¥${item.price}</p>
            </li>
            `
    });
    list4.innerHTML = '<li class="one"><img src="../img/003.jpg" alt=""></li>' + str4
    //给配件渲染数据
    arr5 = arr.slice(24)
    var str5 = ``
    arr5.forEach(item => {
        str5 += `
            <li>
                <img src="${item.img}" alt="">
                <div class="box">${item.title}</div>
                <p class="box1">${item.p}</p>
                <p class="price">¥${item.price}</p>
            </li>
            `
    });
    list5.innerHTML = '<li class="one"><img src="../img/004.jpg" alt=""></li>' + str5
}()

let cartList = localStorage.getItem('cartList') || []
if (cartList.length > 0) {
    cartList = eval('(' + cartList + ')')
}
//判断是否登录
var navRight = document.querySelector('.nav-right')
var cookies = getCookie('phone')
if (cookies) {
    navRight.innerHTML = `
    <a href="javascript:;" class="username">${cookies}</a>
    <a href="javascript:;">我的订单</a>
    <a href="./cart.html" class="gouwuche">购物车(<span>${cartList.length}</span>)</a>
    <a href="javascript:;" class="phone-down">手机端
        <div class="code">
            <img src="../img/code.png" alt="">
            <div>扫码下载</div>
        </div>
    </a>
    `
} else {
    navRight.innerHTML = `
    <a href="./login.html">登录</a>
    <a href="./register.html">注册</a>
    <a href="javascript:;">我的订单</a>
    <a href="./login.html" class="gouwuche">购物车(<span>0</span>)</a>
    <a href="javascript:;" class="phone-down">手机端
        <div class="code">
            <img src="../img/code.png" alt="">
            <div>扫码下载</div>
        </div>
    </a>
    `
}

//tab选项卡
$('.index-nav>ul>li').hover(function () {
    $(this).css('background', "rgba(255,255,255)")
    $(this).find('div').fadeToggle(0)
}, function () {
    $(this).css('background', "rgba(253,253,253,0.7)")
    $(this).find('div').fadeToggle(0)
})
$('.category-panels').find('li').mouseenter(function () {
    $(this).css('background', "rgb(246,246,246)")
})
$('.category-panels').find('li').mouseleave(function () {
    $(this).css('background', "rgba(255,255,255,0.8)")
})
$('.category-panels-8').find('li').click(function () {
    let liText = $.trim($(this).text())
    if (liText != '查看全部') {
        location.href = './list.html?fenlei=' + liText
    }
})