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


(async function () {
    // 生成一些随机数
    let arrRandom = ["96%", "100%", "97%", "100%", "94%", "95%", "96%", "97%", "98%", "99%", "100%"]
    let strRandom = [88, 90, 70, 66, 88, 49, 95, 103, 204, 473, 299]

    //获取数据
    let goods1 = await promiseAjax({
        url: '../php/list.php'
    })
    goods1 = eval('(' + goods1 + ')')
    //生成分页器
    var pagination = document.querySelector('.pagination')
    var pagination1 = paginationOl(goods1)
    //分页器
    new Pagination(pagination, pagination1, function (m) {
        goods2 = goods1.slice((m - 1) * 20, m * 20)
        show1(goods2)
    })

    //事件委托进行排序和分类
    let cateArea = document.querySelector('.cate-area')
    cateArea.addEventListener('click', boxClick)
    function boxClick(e) {
        var e = e || window.event
        var tar = e.target || e.strElement
        if (tar.innerHTML == '移动电源') {
            let goodsYidong = goods1.filter(attr => attr.cat_id == "移动电源")
            new Pagination(pagination, paginationOl(goodsYidong), function (m) {
                show1(goodsYidong)
            })
        }
        if (tar.innerHTML == '自拍器材') {
            let goodsYidong = goods1.filter(attr => attr.cat_id == "自拍器材")
            new Pagination(pagination, paginationOl(goodsYidong), function (m) {
                show1(goodsYidong)
            })
        }
        if (tar.innerHTML == '充电器材') {
            let goodsYidong = goods1.filter(attr => attr.cat_id == "充电器材")
            new Pagination(pagination, paginationOl(goodsYidong), function (m) {
                show1(goodsYidong)
            })
        }
        if (tar.innerHTML == '保护壳套') {
            let goodsYidong = goods1.filter(attr => attr.cat_id == "保护壳套")
            new Pagination(pagination, paginationOl(goodsYidong), function (m) {
                show1(goodsYidong)
            })
        }
        if (tar.innerHTML == '触控笔') {
            let goodsYidong = goods1.filter(attr => attr.cat_id == "触控笔")
            new Pagination(pagination, paginationOl(goodsYidong), function (m) {
                show1(goodsYidong)
            })
        }
        if (tar.innerHTML == '贴膜') {
            let goodsYidong = goods1.filter(attr => attr.cat_id == "贴膜")
            new Pagination(pagination, paginationOl(goodsYidong), function (m) {
                show1(goodsYidong)
            })
        }
        if (tar.innerHTML == '充电器材') {
            let goodsYidong = goods1.filter(attr => attr.cat_id == "充电器材")
            new Pagination(pagination, paginationOl(goodsYidong), function (m) {
                show1(goodsYidong)
            })
        }
        if (tar.innerHTML == '电脑配件') {
            let goodsYidong = goods1.filter(attr => attr.cat_id == "充电器材")
            new Pagination(pagination, paginationOl(goodsYidong), function (m) {
                show1(goodsYidong)
            })
        }
        if (tar.innerHTML == '全部') {
            let goods11 = goods1.sort(function (a, b) {
                return a.goods_id - b.goods_id
            })
            new Pagination(pagination, paginationOl(goods1), function (m) {
                goods2 = goods1.slice((m - 1) * 20, m * 20)
                show1(goods2)
            })
        }
        if (tar.innerHTML == '综合') {
            let goods11 = goods1.sort(function (a, b) {
                return a.goods_id - b.goods_id
            })
            new Pagination(pagination, paginationOl(goods1), function (m) {
                goods2 = goods1.slice((m - 1) * 20, m * 20)
                show1(goods2)
            })
        }
        if (tar.innerHTML == '最新') {
            let goods11 = goods1.sort(function (a, b) {
                return a.cat_num_id - b.cat_num_id
            })
            new Pagination(pagination, paginationOl(goods11), function (m) {
                goods2 = goods11.slice((m - 1) * 20, m * 20)
                show1(goods2)
            })
        }
        if (tar.className == 'up') {
            let goods11 = goods1.sort(function (a, b) {
                return a.goods_price - b.goods_price
            })
            new Pagination(pagination, paginationOl(goods11), function (m) {
                goods2 = goods11.slice((m - 1) * 20, m * 20)
                show1(goods2)
            })
        }
        if (tar.className == 'down') {
            let goods11 = goods1.sort(function (a, b) {
                return b.goods_price - a.goods_price
            })
            new Pagination(pagination, paginationOl(goods11), function (m) {
                goods2 = goods11.slice((m - 1) * 20, m * 20)
                show1(goods2)
            })
        }
    }

    //首页进入传递参数
    let liText = location.search.split('=')[1]
    if (liText) {
        liText = decodeURI(liText);
        let goodsTxet = goods1.filter(attr => attr.cat_id == liText)
        new Pagination(pagination, paginationOl(goodsTxet), function (m) {
            show1(goodsTxet)
        })

    }


    //显示函数
    function show1(goods) {
        let listUl = document.querySelector('.list-main').querySelector('ul')
        let str = ``
        goods.forEach(attr => {
            str += `
            <li>
            <div><a href="./detail.html?id=${attr.goods_id}">
                    <p class="p-img"><img src="${attr.goods_1_logo}" alt=""></p>
                    <p class="p-title">${attr.goods_name}</p>
                    <p class="p-price">￥${attr.goods_price}</p>
                    <p class="p-label"><span>赠送积分</span></p>
                    <p class="p-comment"><em><span>${strRandom[(getRandom(10, 0))]}</span>人评价</em>&nbsp;&nbsp;<span>${arrRandom[(getRandom(10, 0))]}</span>好评</em></p>
                </a></div>
            </li>
            `
        })
        listUl.innerHTML = str
    }

    //分页器信息更新
    function paginationOl(goods) {
        let pagination1 = {
            pageInfo: {
                pagenum: 1, //当前页
                pagesize: 20,//每页显示的条数
                totalsize: goods.length,//总条数
                totalpage: Math.ceil(goods.length / 20) //总页数
            },
            textInfo: {
                first: "<<", //首页
                prev: "<", //上一页
                list: "",  //页码
                next: ">", //下一页
                last: ">>" //尾页
            }
        }
        return pagination1
    }



})()

