window.addEventListener('load', function () {
    var form = this.document.querySelector('form')
    var phone1 = this.document.querySelector('[name=phone]')
    var phone11 = false
    var psd = document.querySelector('[name=password]')
    var psd1 = false
    var verification = false
    var spans = form.querySelectorAll('.prompt')
    //随机验证码
    var randomImg = document.querySelector('.random')
    randomImg.onclick = function () {
        let str1 = randomFour()
        this.innerHTML = str1
    }
    randomImg.click();
    var verification1 = document.querySelector('[name=verification]')
    verification1.onblur = function () {
        if (verification1.value == randomImg.innerHTML) {
            spans[2].style.display = 'none'
            verification = true
        } else {
            spans[2].style.display = 'block'
            verification = false
        }
    }
    //手机验证
    phone1.onblur = function () {
        let reg = /^(1|\+861)[3-8]{1}\d{9}$/
        if (reg.test(phone1.value)) {
            phone11 = true;
            spans[0].style.display = 'none'
        } else {
            spans[0].style.display = 'block'
            phone11 = false
        }
    }
    //密码验证
    psd.onblur = function () {
        let reg = /^[(a-z)||(A-Z)]\w{7,30}$/
        if (reg.test(psd.value)) {
            psd1 = true;
            spans[1].style.display = 'none'
        } else {
            spans[1].style.display = 'block'
            psd1 = false
        }
    }

    //眼睛切换
    var eye = document.querySelector('.eye')
    let flag1 = 0
    eye.onclick = function () {
        if (flag1 == 0) {
            this.parentNode.firstElementChild.type = 'text'
            this.style = "background:url(../img/password_eyeon.svg);background-size:contain;"
            flag1 = 1
        } else {
            this.parentNode.firstElementChild.type = 'password'
            this.style = "background:url(../img/password_eyeoff.svg);background-size:contain;"
            flag1 = 0
        }
    }


    //表单验证
    let urlId = getCookie('urlId')
    let cartId = getCookie('cartId')
    form.onsubmit = function () {
        if (phone11 && psd1 && verification) {
            ajax({
                url: "./../php/login.php",
                type: "POST",
                data: `phone=${phone1.value}&password=${psd.value}`,
                success: function (dt) {
                    if (dt) {
                        setCookie("phone", phone1.value)
                        alert("欢迎光临");
                        if (urlId) {
                            location.href = './detail.html?id=' + urlId
                        } else if (cartId) {
                            location.href = cartId
                        } else {
                            location.href = './index.html'
                        }
                    } else {
                        alert('登录失败，请重新登录')
                        location.href = './login.html'
                    }
                }
            })
            return false
        } else {
            phone1.focus()
            psd.focus()
            verification1.focus()
            return false
        }

    }

})