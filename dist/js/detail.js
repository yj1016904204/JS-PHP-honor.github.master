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
    `;let id1=location.search,search1=id1.split("=")[0];id1=id1.split("=")[1],"?id"==search1?async function(){let goods1=await promiseAjax({url:"../php/detail.php",data:"id="+id1});goods1=eval("("+goods1+")");let detailMain=document.querySelector(".detail-main"),str1=`
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
                    ${goods1.goods_1_logo?`<li><img src="${goods1.goods_1_logo}"></li>`:""}
                    ${goods1.goods_2_logo?`<li><img src="${goods1.goods_2_logo}"></li>`:""}
                    ${goods1.goods_3_logo?`<li><img src="${goods1.goods_3_logo}"></li>`:""}
                    ${goods1.goods_4_logo?`<li><img src="${goods1.goods_4_logo}"></li>`:""}
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
        `;detailMain.innerHTML=str1;var wrap=document.querySelector(".wrap"),img1=wrap.firstElementChild,mask=img1.nextElementSibling,big=mask.nextElementSibling,img2=big.firstElementChild;function move(s){var i=s.pageX-wrap.offsetLeft-mask.clientWidth/2,a=s.pageY-wrap.offsetTop-mask.clientWidth/2,t=wrap.clientWidth-mask.clientWidth;i<=0?i=0:t<=i&&(i=t),a<=0?a=0:t<=a&&(a=t),mask.style.left=i+"px",mask.style.top=a+"px";s=big.clientWidth-img2.clientWidth,a=a*s/t;img2.style.left=i*s/t+"px",img2.style.top=a+"px"}wrap.addEventListener("mouseenter",function(){mask.style.display="block",big.style.display="block"}),wrap.addEventListener("mousemove",move),wrap.addEventListener("mouseleave",function(){mask.style.display="none",big.style.display="none"});for(var lis=document.querySelector(".produce").querySelectorAll("li"),i=0;i<lis.length;i++)lis[i].setAttribute("data-index",i),lis[i].addEventListener("mousemove",function(){for(var s=0;s<lis.length;s++)lis[s].style.border="";this.style.border="1px solid red";var i=this.getAttribute("data-index");img1.src=lis[i].firstElementChild.src,img2.src=lis[i].firstElementChild.src});let tabLis=document.querySelector(".tab").querySelectorAll("li"),tabDiv=document.querySelector(".tab").getElementsByClassName("tablist");for(let i=0;i<tabLis.length;i++)tabLis[i].onclick=function(){tabLis.forEach(s=>{s.className=""}),this.className="current";for(var s=0;s<tabDiv.length;s++)tabDiv[s].style="display:none";tabDiv[i].style="display:block:height:27px;margin-bottom:100px"};let btn1=document.querySelectorAll(".btn01")[0];btn1.onclick=function(){let cartList=localStorage.getItem("cartList")||[];if(0<cartList.length&&(cartList=eval("("+cartList+")")),cookies){let cartList=localStorage.getItem("cartList")||[];if(0<cartList.length){cartList=eval("("+cartList+")");let bool=!0;cartList.forEach(s=>{goods1.goods_id==s.goods_id&&(bool=!1,s.cart_number++,localStorage.setItem("cartList",JSON.stringify(cartList)))}),bool&&(goods1.cart_number=1,cartList.push(goods1),navRight.innerHTML=`
                            <a href="javascript:;" class="username">${cookies}</a>
                            <a href="javascript:;">我的订单</a>
                            <a href="javascript:;" class="gouwuche">购物车(<span>${cartList.length}</span>)</a>
                            <a href="javascript:;" class="phone-down">手机端
                                <div class="code">
                                    <img src="../img/code.png" alt="">
                                    <div>扫码下载</div>
                                </div>
                            </a>
                            `,localStorage.setItem("cartList",JSON.stringify(cartList)))}else goods1.cart_number=1,cartList.push(goods1),navRight.innerHTML=`
                    <a href="javascript:;" class="username">${cookies}</a>
                    <a href="javascript:;">我的订单</a>
                    <a href="javascript:;" class="gouwuche">购物车(<span>${cartList.length}</span>)</a>
                    <a href="javascript:;" class="phone-down">手机端
                        <div class="code">
                            <img src="../img/code.png" alt="">
                            <div>扫码下载</div>
                        </div>
                    </a>
                    `,localStorage.setItem("cartList",JSON.stringify(cartList))}else alert("请先登录"),setCookie("urlId",id1),location.href="./login.html"}}():(alert("非法进入，请选择商品"),location.href="./list.html");