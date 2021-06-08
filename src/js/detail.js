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



//获取传入的id
let id1 = location.search
let search1 = id1.split('=')[0]
id1 = id1.split('=')[1];
//自适应函数，获取数据。渲染页面
if (search1 == "?id") {
    (async function () {
        let goods1 = await promiseAjax({
            url: "../php/detail.php",
            data: "id=" + id1
        })
        goods1 = eval('(' + goods1 + ')')
        let detailMain = document.querySelector('.detail-main')
        let str1 = `
        <div class="hr-10"></div>
            <div class="breadcrumb w">
                <a href="./index.html">首页</a>&nbsp;&nbsp;>&nbsp;&nbsp;
                <a href="./list.html">配件</a>&nbsp;&nbsp;>&nbsp;&nbsp;
                <span>${goods1.goods_name}</span>
            </div>
            <div class="hr-10"></div>
            <div class="produce w clearfix">
                <div class="left fl">
                    <div class="wrap">
                        <img src="${goods1.goods_1_logo}" alt="" class="img1">
                        <div class="mask"></div>
                        <div class="big">
                            <img src="${goods1.goods_1_logo}" alt="">
                        </div>
                    </div>
                    <ul>
                    ${goods1.goods_1_logo ? `<li><img src="${goods1.goods_1_logo}"></li>` : ""}
                    ${goods1.goods_2_logo ? `<li><img src="${goods1.goods_2_logo}"></li>` : ""}
                    ${goods1.goods_3_logo ? `<li><img src="${goods1.goods_3_logo}"></li>` : ""}
                    ${goods1.goods_4_logo ? `<li><img src="${goods1.goods_4_logo}"></li>` : ""}
                    </ul>
                </div>
                <div class="right fr">
                    <h2>${goods1.goods_name}</h2>
                    <div class="produce-info">
                        <div class="price"><i>价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格</i><span>￥${goods1.goods_price}</span></div>
                        <div class="youhui"><i>优 惠 券</i><span>满100减10元</span><a href="javascript:;"
                                style="color:#ca141d">立即领取 ></a></div>
                        <div class="cuxiao"><i>促&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;销</i><span>赠送积分</span>购买即赠商城积分，积分可抵现~</div>
                    </div>
                    <div class="search">
                        <p>服务说明</p><span>广东 > 深圳 > 宝安区</span>
                        <p><i style="color:#ca141d">现货</i>，今天21:59前付款，预计5月30日（明天）送达</p>
                    </div>
                    <div class="produce-num"><span>商品编码</span>${goods1.cat_num_id}</div>
                    <div class="btn">
                        <button class="btn01">加入购物车</button>
                        <a href="./cart.html" style="color:#fff"><button class="btn01 btn02">前往购物车</button></a>
                    </div>
                </div>
            </div>
            <div class="hr-10"></div>
            <div class="line"></div>
            <div class="tab">
                <ul>
                    <li class="current">商品详情</li>
                    <li>规格参数</li>
                    <li>包装与数量</li>
                </ul>
                <div class="tablist">
                    ${goods1.goods_introduce}
                </div>
                <div class="tablist w" style="display:none;">
                    <h2 class="fl">商品编码</h2><span class="fl">${goods1.cat_num_id}</span>
                </div>
                <div class="tablist w" style="display:none;">
                    <h2 class="fl">包装与数量</h2><span class="fl">${goods1.goods_has}</span>
                </div>
            </div>
        `
        detailMain.innerHTML = str1


        //页面添加事件
        //放大镜切换
        var wrap = document.querySelector('.wrap');
        var img1 = wrap.firstElementChild;
        var mask = img1.nextElementSibling;
        var big = mask.nextElementSibling;
        var img2 = big.firstElementChild;
        wrap.addEventListener('mouseenter', function () {
            mask.style.display = 'block';
            big.style.display = 'block'
        });
        function move(e) {
            var maskx = e.pageX - wrap.offsetLeft - mask.clientWidth / 2;
            var masky = e.pageY - wrap.offsetTop - mask.clientWidth / 2;
            var maskMax = wrap.clientWidth - mask.clientWidth;
            if (maskx <= 0) {
                maskx = 0;
            } else if (maskx >= maskMax) {
                maskx = maskMax;
            }
            if (masky <= 0) {
                masky = 0;
            } else if (masky >= maskMax) {
                masky = maskMax;
            }
            mask.style.left = maskx + 'px'
            mask.style.top = masky + 'px'
            var bigMax = big.clientWidth - img2.clientWidth;
            var imgx = maskx * bigMax / maskMax;
            var imgy = masky * bigMax / maskMax;
            img2.style.left = imgx + 'px';
            img2.style.top = imgy + 'px';
        }
        wrap.addEventListener('mousemove', move);
        wrap.addEventListener('mouseleave', function () {
            mask.style.display = 'none';
            big.style.display = 'none'
        });
        //图片切换
        var lis = document.querySelector('.produce').querySelectorAll('li');
        for (var i = 0; i < lis.length; i++) {
            lis[i].setAttribute('data-index', i)
            lis[i].addEventListener('mousemove', function () {
                for (var i = 0; i < lis.length; i++) {
                    lis[i].style.border = ''
                }
                this.style.border = '1px solid red';
                var index = this.getAttribute('data-index');
                img1.src = lis[index].firstElementChild.src;
                img2.src = lis[index].firstElementChild.src;
            })
        }
        let tabLis = document.querySelector('.tab').querySelectorAll('li')
        let tabDiv = document.querySelector('.tab').getElementsByClassName('tablist')

        for (let i = 0; i < tabLis.length; i++) {
            tabLis[i].onclick = function () {
                tabLis.forEach(item => {
                    item.className = ''
                })
                this.className = 'current'
                for (var j = 0; j < tabDiv.length; j++) {
                    tabDiv[j].style = 'display:none'
                }
                tabDiv[i].style = "display:block:height:27px;margin-bottom:100px"
            }
        }

        //加入购物车事件
        let btn1 = document.querySelectorAll('.btn01')[0]
        btn1.onclick = function () {
            let cartList = localStorage.getItem('cartList') || []
            if (cartList.length > 0) {
                cartList = eval('(' + cartList + ')')
            }
            if (cookies) {
                let cartList = localStorage.getItem("cartList") || []
                if (cartList.length > 0) {
                    cartList = eval('(' + cartList + ')')
                    let bool = true
                    cartList.forEach(item => {
                        if (goods1.goods_id == item.goods_id) {
                            bool = false
                            item.cart_number++
                            localStorage.setItem("cartList", JSON.stringify(cartList))
                        }
                    })
                    if (bool) {
                        goods1.cart_number = 1
                        cartList.push(goods1)
                        navRight.innerHTML = `
                            <a href="javascript:;" class="username">${cookies}</a>
                            <a href="javascript:;">我的订单</a>
                            <a href="javascript:;" class="gouwuche">购物车(<span>${cartList.length}</span>)</a>
                            <a href="javascript:;" class="phone-down">手机端
                                <div class="code">
                                    <img src="../img/code.png" alt="">
                                    <div>扫码下载</div>
                                </div>
                            </a>
                            `
                        localStorage.setItem("cartList", JSON.stringify(cartList))
                    }
                } else {
                    goods1.cart_number = 1
                    cartList.push(goods1)
                    navRight.innerHTML = `
                    <a href="javascript:;" class="username">${cookies}</a>
                    <a href="javascript:;">我的订单</a>
                    <a href="javascript:;" class="gouwuche">购物车(<span>${cartList.length}</span>)</a>
                    <a href="javascript:;" class="phone-down">手机端
                        <div class="code">
                            <img src="../img/code.png" alt="">
                            <div>扫码下载</div>
                        </div>
                    </a>
                    `
                    localStorage.setItem("cartList", JSON.stringify(cartList))
                }
            } else {
                alert('请先登录')
                setCookie('urlId', id1)
                location.href = './login.html'
            }
        }

    })()
} else {
    alert("非法进入，请选择商品")
    location.href = "./list.html"
}