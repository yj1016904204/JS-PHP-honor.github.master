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
    <a href="javascript:;" class="gouwuche">购物车(<span>${cartList.length}</span>)</a>
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
    <a href="javascript:;" class="gouwuche">购物车(<span>0</span>)</a>
    <a href="javascript:;" class="phone-down">手机端
        <div class="code">
            <img src="../img/code.png" alt="">
            <div>扫码下载</div>
        </div>
    </a>
    `
}

if (cookies) {

    show1()
    let cart = document.querySelector('.cart')
    cart.onclick = function (e) {
        var e = e || window.event
        var target = e.target || e.srcElement
        //加法
        if (target.innerHTML == '+') {
            let id = target.getAttribute("data-id")
            cartList.forEach(item => {
                if (item.goods_id == id) {
                    item.cart_number++
                }
            })
            localStorage.setItem("cartList", JSON.stringify(cartList))
            show1()
        }
        //减法
        if (target.innerHTML == '-') {
            let id = target.getAttribute("data-id")
            cartList.forEach(item => {
                if (item.goods_id == id) {
                    item.cart_number--
                }
            })
            localStorage.setItem("cartList", JSON.stringify(cartList))
            show1()
        }
        //删除
        if (target.innerHTML == "删除") {
            //获取id属性值
            let id = target.getAttribute("data-id")
            cartList = cartList.filter(item => {
                return item.goods_id != id
            })
            //把修改完毕的cartList重新存储在localStorage中
            localStorage.setItem("cartList", JSON.stringify(cartList))
            show1()
        }
        if (target.innerHTML == "全删") {
            cartList = cartList.filter(item => {
                return item.is_select != 1
            })
            localStorage.setItem("cartList", JSON.stringify(cartList))
            show1()
        }
        //判断是否为全选框
        if (target.name == "quan") {
            //遍历所有商品
            cartList.forEach(item => {
                //判断当前全选框是否被选中
                if (target.checked) {
                    item.is_select = 1
                } else {
                    item.is_select = 0
                }
            })
            localStorage.setItem("cartList", JSON.stringify(cartList))
            show1()
        }
        //判断点击的是否为选中框对象
        if (target.name == "xuan") {
            //获取当前选中框对象的id属性
            let id = target.getAttribute('data-id')
            //遍历数组元素
            //遍历所有商品
            cartList.forEach(item => {
                //判断是否为当前要操作的商品
                if (item.goods_id == id) {
                    //判断当前商品中is_select是否等于1
                    if (item.is_select == 1) {
                        item.is_select = 0
                    } else {
                        item.is_select = 1
                    }
                }
                //把修改完毕的cartList4重新存储在localStorage中
                localStorage.setItem("cartList", JSON.stringify(cartList))
                show1()
            })
            //去结算
            if (target.innerHTML == '立即结算') {
                alert("你已支付：" + total()[1])
                //过滤不满足条件的商品
                cartList = cartList.filter(item => {
                    return item.is_select != 1
                })
                //把修改完毕的cartList4重新存储在localStorage中
                localStorage.setItem("cartList", JSON.stringify(cartList))
                show1()
            }

        }
        //去结算
        if (target.innerHTML == '立即结算') {
            alert("你已支付：" + total()[1])
            //过滤不满足条件的商品
            cartList = cartList.filter(item => {
                return item.is_select != 1
            })
            //把修改完毕的cartList4重新存储在localStorage中
            localStorage.setItem("cartList", JSON.stringify(cartList))
            show1()
        }
    }
} else {
    alert("非法进入，请先登录")
    let id1 = location.href
    setCookie('cartId', id1)
    location.href = "./login.html"
}

function show1() {
    // let cartList = localStorage.getItem('cartList')
    let cart = document.querySelector('.cart')
    if (cartList.length > 0) {
        let bool = cartList.every(item => {
            return item.is_select == 1
        })
        let str = `
        <ul class="header w">
            <li><input type="checkbox" name="quan" ${bool ? "checked" : ''}>全选</li>
            <li>商品</li>
            <li>单价</li>
            <li>数量</li>
            <li>小计</li>
            <li>操作</li>
        </ul>
        `
        cartList.forEach(item => {
            str += `
            <ul class="content w">
                <li><input type="checkbox" name="xuan" ${item.is_select == 1 ? "checked" : ''} data-id=${item.goods_id}></li>
                <li><img src="${item.goods_1_logo}" alt=""></li>
                <li>${item.goods_name}</li>
                <li>¥ ${item.goods_price}</li>
                <li><button ${item.cart_number <= 1 ? "disabled" : ''} data-id=${item.goods_id}>-</button> <button style="color: #3a3a3a;font-size: 14px;">${item.cart_number}</button> <button ${item.cart_number >= item.goods_number ? "disabled" : ''} data-id=${item.goods_id}>+</button></li>
                <li>¥ ${item.cart_number * item.goods_price}</li>
                <li data-id=${item.goods_id}>删除</li>
            </ul>
            `
        })
        str += `
            <ul class="footer w">
                <li><input type="checkbox" name="quan" ${bool ? "checked" : ''}>全选</li>
                <li style="cursor: pointer;">全删</li>
                <li>已选择<span>${total()[0]}</span>件商品</li>
                <li>总计： <span>¥ ${total()[1]}</span></li>
                <li>立即结算</li>
            </ul>
        `
        cart.innerHTML = str
    } else {
        let str = `
            <div class="cart-c w">
                <img src="../img/cart.png" alt="">
                <p>您的购物车里什么也没有哦~</p>
                <a href="./list.html">去逛逛</a>
            </div>
        `
        cart.innerHTML = str
    }
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
}


function total() {
    var nums = 0
    var prices = 0
    cartList.forEach(item => {
        if (item.is_select == 1) {
            nums += item.cart_number
            prices += parseFloat(item.goods_price) * parseInt(item.cart_number)
        }
    })
    return [nums, prices]
}