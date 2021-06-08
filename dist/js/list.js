let cartList=localStorage.getItem("cartList")||[];0<cartList.length&&(cartList=eval("("+cartList+")"));var navRight=document.querySelector(".nav-right"),cookies=getCookie("phone");navRight.innerHTML=cookies?`
    <a href="javascript:;" class="username">${cookies}</a>
    <a href="javascript:;">我的订单</a>
    <a href="./cart.html" class="gouwuche">购物车(<span>${cartList.length}</span>)</a>
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
    <a href="./login.html" class="gouwuche">购物车(<span>0</span>)</a>
    <a href="javascript:;" class="phone-down">手机端
        <div class="code">
            <img src="../img/code.png" alt="">
            <div>扫码下载</div>
        </div>
    </a>
    `,async function(){let arrRandom=["96%","100%","97%","100%","94%","95%","96%","97%","98%","99%","100%"],strRandom=[88,90,70,66,88,49,95,103,204,473,299],goods1=await promiseAjax({url:"../php/list.php"});goods1=eval("("+goods1+")");var pagination=document.querySelector(".pagination"),pagination1=paginationOl(goods1);new Pagination(pagination,pagination1,function(n){goods2=goods1.slice(20*(n-1),20*n),show1(goods2)});let cateArea=document.querySelector(".cate-area");function boxClick(n){n=(n=n||window.event).target||n.strElement;if("移动电源"==n.innerHTML){let i=goods1.filter(n=>"移动电源"==n.cat_id);new Pagination(pagination,paginationOl(i),function(n){show1(i)})}if("自拍器材"==n.innerHTML){let i=goods1.filter(n=>"自拍器材"==n.cat_id);new Pagination(pagination,paginationOl(i),function(n){show1(i)})}if("充电器材"==n.innerHTML){let i=goods1.filter(n=>"充电器材"==n.cat_id);new Pagination(pagination,paginationOl(i),function(n){show1(i)})}if("保护壳套"==n.innerHTML){let i=goods1.filter(n=>"保护壳套"==n.cat_id);new Pagination(pagination,paginationOl(i),function(n){show1(i)})}if("触控笔"==n.innerHTML){let i=goods1.filter(n=>"触控笔"==n.cat_id);new Pagination(pagination,paginationOl(i),function(n){show1(i)})}if("贴膜"==n.innerHTML){let i=goods1.filter(n=>"贴膜"==n.cat_id);new Pagination(pagination,paginationOl(i),function(n){show1(i)})}if("充电器材"==n.innerHTML){let i=goods1.filter(n=>"充电器材"==n.cat_id);new Pagination(pagination,paginationOl(i),function(n){show1(i)})}if("电脑配件"==n.innerHTML){let i=goods1.filter(n=>"充电器材"==n.cat_id);new Pagination(pagination,paginationOl(i),function(n){show1(i)})}if("全部"==n.innerHTML&&(goods1.sort(function(n,i){return n.goods_id-i.goods_id}),new Pagination(pagination,paginationOl(goods1),function(n){goods2=goods1.slice(20*(n-1),20*n),show1(goods2)})),"综合"==n.innerHTML&&(goods1.sort(function(n,i){return n.goods_id-i.goods_id}),new Pagination(pagination,paginationOl(goods1),function(n){goods2=goods1.slice(20*(n-1),20*n),show1(goods2)})),"最新"==n.innerHTML){let i=goods1.sort(function(n,i){return n.cat_num_id-i.cat_num_id});new Pagination(pagination,paginationOl(i),function(n){goods2=i.slice(20*(n-1),20*n),show1(goods2)})}if("up"==n.className){let i=goods1.sort(function(n,i){return n.goods_price-i.goods_price});new Pagination(pagination,paginationOl(i),function(n){goods2=i.slice(20*(n-1),20*n),show1(goods2)})}if("down"==n.className){let i=goods1.sort(function(n,i){return i.goods_price-n.goods_price});new Pagination(pagination,paginationOl(i),function(n){goods2=i.slice(20*(n-1),20*n),show1(goods2)})}}cateArea.addEventListener("click",boxClick);let liText=location.search.split("=")[1];if(liText){liText=decodeURI(liText);let goodsTxet=goods1.filter(n=>n.cat_id==liText);new Pagination(pagination,paginationOl(goodsTxet),function(n){show1(goodsTxet)})}function show1(n){let i=document.querySelector(".list-main").querySelector("ul"),o="";n.forEach(n=>{o+=`
            <li>
            <div><a href="./detail.html?id=${n.goods_id}">
                    <p class="p-img"><img src="${n.goods_1_logo}" alt=""></p>
                    <p class="p-title">${n.goods_name}</p>
                    <p class="p-price">￥${n.goods_price}</p>
                    <p class="p-label"><span>赠送积分</span></p>
                    <p class="p-comment"><em><span>${strRandom[getRandom(10,0)]}</span>人评价</em>&nbsp;&nbsp;<span>${arrRandom[getRandom(10,0)]}</span>好评</em></p>
                </a></div>
            </li>
            `}),i.innerHTML=o}function paginationOl(n){return{pageInfo:{pagenum:1,pagesize:20,totalsize:n.length,totalpage:Math.ceil(n.length/20)},textInfo:{first:"<<",prev:"<",list:"",next:">",last:">>"}}}}();