let cartList=localStorage.getItem("cartList")||[];0<cartList.length&&(cartList=eval("("+cartList+")"));var navRight=document.querySelector(".nav-right"),cookies=getCookie("phone");if(navRight.innerHTML=cookies?`
    <a href="javascript:;" class="username">${cookies}</a>
    <a href="javascript:;">我的订单</a>
    <a href="javascript:;" class="gouwuche">购物车(<span>${cartList.length}</span>)</a>
    <a href="javascript:;" class="phone-down">手机端
        <div class="code">
            <img src="../img/code.png" alt="">
            <div>扫码下载</div>
        </div>
    </a>
    `:`
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
    `,cookies){show1();let cart=document.querySelector(".cart");cart.onclick=function(t){var i=(t=t||window.event).target||t.srcElement;if("+"==i.innerHTML){let a=i.getAttribute("data-id");cartList.forEach(t=>{t.goods_id==a&&t.cart_number++}),localStorage.setItem("cartList",JSON.stringify(cartList)),show1()}if("-"==i.innerHTML){let a=i.getAttribute("data-id");cartList.forEach(t=>{t.goods_id==a&&t.cart_number--}),localStorage.setItem("cartList",JSON.stringify(cartList)),show1()}if("删除"==i.innerHTML){let a=i.getAttribute("data-id");cartList=cartList.filter(t=>t.goods_id!=a),localStorage.setItem("cartList",JSON.stringify(cartList)),show1()}if("全删"==i.innerHTML&&(cartList=cartList.filter(t=>1!=t.is_select),localStorage.setItem("cartList",JSON.stringify(cartList)),show1()),"quan"==i.name&&(cartList.forEach(t=>{i.checked?t.is_select=1:t.is_select=0}),localStorage.setItem("cartList",JSON.stringify(cartList)),show1()),"xuan"==i.name){let a=i.getAttribute("data-id");cartList.forEach(t=>{t.goods_id==a&&(1==t.is_select?t.is_select=0:t.is_select=1),localStorage.setItem("cartList",JSON.stringify(cartList)),show1()}),"立即结算"==i.innerHTML&&(alert("你已支付："+total()[1]),cartList=cartList.filter(t=>1!=t.is_select),localStorage.setItem("cartList",JSON.stringify(cartList)),show1())}"立即结算"==i.innerHTML&&(alert("你已支付："+total()[1]),cartList=cartList.filter(t=>1!=t.is_select),localStorage.setItem("cartList",JSON.stringify(cartList)),show1())}}else{alert("非法进入，请先登录");let id1=location.href;setCookie("cartId",id1),location.href="./login.html"}function show1(){let t=document.querySelector(".cart");if(0<cartList.length){var i=cartList.every(t=>1==t.is_select);let a=`
        <ul class="header w">
            <li><input type="checkbox" name="quan" ${i?"checked":""}>全选</li>
            <li>商品</li>
            <li>单价</li>
            <li>数量</li>
            <li>小计</li>
            <li>操作</li>
        </ul>
        `;cartList.forEach(t=>{a+=`
            <ul class="content w">
                <li><input type="checkbox" name="xuan" ${1==t.is_select?"checked":""} data-id=${t.goods_id}></li>
                <li><img src="${t.goods_1_logo}" alt=""></li>
                <li>${t.goods_name}</li>
                <li>¥ ${t.goods_price}</li>
                <li><button ${t.cart_number<=1?"disabled":""} data-id=${t.goods_id}>-</button> <button style="color: #3a3a3a;font-size: 14px;">${t.cart_number}</button> <button ${t.cart_number>=t.goods_number?"disabled":""} data-id=${t.goods_id}>+</button></li>
                <li>¥ ${t.cart_number*t.goods_price}</li>
                <li data-id=${t.goods_id}>删除</li>
            </ul>
            `}),a+=`
            <ul class="footer w">
                <li><input type="checkbox" name="quan" ${i?"checked":""}>全选</li>
                <li style="cursor: pointer;">全删</li>
                <li>已选择<span>${total()[0]}</span>件商品</li>
                <li>总计： <span>¥ ${total()[1]}</span></li>
                <li>立即结算</li>
            </ul>
        `,t.innerHTML=a}else t.innerHTML=`
            <div class="cart-c w">
                <img src="../img/cart.png" alt="">
                <p>您的购物车里什么也没有哦~</p>
                <a href="./list.html">去逛逛</a>
            </div>
        `;navRight.innerHTML=`
    <a href="javascript:;" class="username">${cookies}</a>
    <a href="javascript:;">我的订单</a>
    <a href="javascript:;" class="gouwuche">购物车(<span>${cartList.length}</span>)</a>
    <a href="javascript:;" class="phone-down">手机端
        <div class="code">
            <img src="../img/code.png" alt="">
            <div>扫码下载</div>
        </div>
    </a>
    `}function total(){var a=0,i=0;return cartList.forEach(t=>{1==t.is_select&&(a+=t.cart_number,i+=parseFloat(t.goods_price)*parseInt(t.cart_number))}),[a,i]}