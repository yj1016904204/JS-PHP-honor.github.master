let focus=document.querySelector(".focus"),ul=focus.querySelector("ul"),lis=ul.querySelectorAll("li"),num=0,circle=0,left=document.querySelector(".left"),right=document.querySelector(".right"),ol=focus.querySelector("ol");const focusWidth=1920;let flag=!0;for(let i=0;i<lis.length;i++){let li=this.document.createElement("li");ol.appendChild(li),ol.children[0].className="bg",ol.children[i].addEventListener("click",function(){num=circle=i,animation(ul,-i*focusWidth);for(let e=0;e<lis.length;e++)ol.children[e].className="";this.className="bg"})}const fristLi=lis[0].cloneNode(!0);ul.appendChild(fristLi),right.addEventListener("click",()=>{if(flag){flag=!1,num>ol.children.length-1&&(num=0,ul.style.left=0),num++,circle++,circle>ol.children.length-1&&(circle=0);for(let e=0;e<lis.length;e++)ol.children[e].className="";ol.children[circle].className="bg",animation(ul,-num*focusWidth,function(){flag=!0})}}),left.addEventListener("click",()=>{if(flag){flag=!1,num<=0&&(num=ol.children.length,ul.style.left=-ol.children.length*focusWidth+"px"),num--,circle--,circle<0&&(circle=ol.children.length-1);for(let e=0;e<lis.length;e++)ol.children[e].className="";ol.children[circle].className="bg",animation(ul,-num*focusWidth,function(){flag=!0})}});let dsq=setInterval(function(){right.click()},2e3);focus.addEventListener("mouseenter",()=>{clearInterval(dsq)}),focus.addEventListener("mouseleave",()=>{dsq=setInterval(function(){right.click()},2e3)});var xianshi=document.querySelector(".xianshi"),xianshiUl=xianshi.querySelector("ul"),btnPrev=xianshi.querySelector(".btn-prev"),btnNext=xianshi.querySelector(".btn-next");btnNext.onclick=function(){this.style.display="none",btnPrev.style.display="block",xianshiUl.style.left="-968px"},btnPrev.onclick=function(){this.style.display="none",btnNext.style.display="block",xianshiUl.style.left="0"};var list2=document.querySelector(".main2-right").querySelector("ul"),list3=document.querySelector(".index-main3").querySelector("ul"),list4=document.querySelector(".index-main4").querySelector("ul"),list5=document.querySelector(".index-main5").querySelector("ul");!async function(){var arr=await promiseAjax({url:"../php/index.php"}),arr=eval("("+arr+")");arr2=arr.slice(0,8);var str="";arr2.forEach(e=>{str+=`
            <li>
                <img src="${e.img}" alt="">
                <div class="box">${e.title}</div>
                <p class="box1">${e.p}</p>
                <p class="price">¥${e.price}</p>
            </li>
            `}),list2.innerHTML=str,arr3=arr.slice(8,16);var str3="";arr3.forEach(e=>{str3+=`
            <li>
                <img src="${e.img}" alt="">
                <div class="box">${e.title}</div>
                <p class="box1">${e.p}</p>
                <p class="price">¥${e.price}</p>
            </li>
            `}),list3.innerHTML='<li class="one"><img src="../img/002.jpg" alt=""></li>'+str3,arr4=arr.slice(16,24);var str4="";arr4.forEach(e=>{str4+=`
            <li>
                <img src="${e.img}" alt="">
                <div class="box">${e.title}</div>
                <p class="box1">${e.p}</p>
                <p class="price">¥${e.price}</p>
            </li>
            `}),list4.innerHTML='<li class="one"><img src="../img/003.jpg" alt=""></li>'+str4,arr5=arr.slice(24);var str5="";arr5.forEach(e=>{str5+=`
            <li>
                <img src="${e.img}" alt="">
                <div class="box">${e.title}</div>
                <p class="box1">${e.p}</p>
                <p class="price">¥${e.price}</p>
            </li>
            `}),list5.innerHTML='<li class="one"><img src="../img/004.jpg" alt=""></li>'+str5}();let cartList=localStorage.getItem("cartList")||[];0<cartList.length&&(cartList=eval("("+cartList+")"));var navRight=document.querySelector(".nav-right"),cookies=getCookie("phone");navRight.innerHTML=cookies?`
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
    `,$(".index-nav>ul>li").hover(function(){$(this).css("background","rgba(255,255,255)"),$(this).find("div").fadeToggle(0)},function(){$(this).css("background","rgba(253,253,253,0.7)"),$(this).find("div").fadeToggle(0)}),$(".category-panels").find("li").mouseenter(function(){$(this).css("background","rgb(246,246,246)")}),$(".category-panels").find("li").mouseleave(function(){$(this).css("background","rgba(255,255,255,0.8)")}),$(".category-panels-8").find("li").click(function(){var e=$.trim($(this).text());"查看全部"!=e&&(location.href="./list.html?fenlei="+e)});