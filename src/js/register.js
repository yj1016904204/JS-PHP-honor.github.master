window.addEventListener('load', () => {
    var phone1 = document.querySelector('[name=phone]')
    var phone11 = false
    var form1 = document.querySelector('form')
    var spans = document.querySelectorAll('.prompt')
    var psd = document.querySelector('[name=password]')
    var psd1 = false
    var repsd = document.querySelector('[name=repassword]')
    var repsd1 = false
    var date = document.querySelector('[name=date]')
    var date1 = false


    //随机验证码
    var randomImg = document.querySelector('.random')
    randomImg.onclick = function () {
        let str1 = randomFour();
        this.innerHTML = str1;
    }
    randomImg.click();
    var verification1 = document.querySelector('[name=verification]')
    verification1.onblur = function () {
        if (verification1.value == randomImg.innerHTML) {
            spans[1].style.display = 'none'
        } else {
            spans[1].style.display = 'block'
            this.focus()
        }
    }
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
            spans[2].style.display = 'none'
        } else {
            spans[2].style.display = 'block'
            psd1 = false
        }
    }
    //重复确认
    repsd.onblur = function () {
        if (repsd.value == psd.value) {
            repsd1 = true
            spans[3].style.display = 'none'
        } else {
            spans[3].style.display = 'block'
            repsd1 = false
        }
    }
    //日期不能为空
    date.onblur = function () {
        if (date.value) {
            date1 = true
            spans[4].style.display = 'none'
        } else {
            spans[4].style.display = 'block'
            date1 = false
        }
    }
    //眼睛切换
    var eyes = document.querySelectorAll('.eyes')
    for (let i = 0; i < eyes.length; i++) {
        let flag1 = [0, 0]
        eyes[i].onclick = function () {
            if (flag1[i] == 0) {
                this.parentNode.firstElementChild.type = 'text'
                this.style = "background:url(../img/password_eyeon.svg);background-size:contain;"
                flag1[i] = 1
            } else {
                this.parentNode.firstElementChild.type = 'password'
                this.style = "background:url(../img/password_eyeoff.svg);background-size:contain;"
                flag1[i] = 0
            }
        }
    }

    form1.onsubmit = function () {
        if (phone11 && psd1 && repsd1 && date1) {
            ajax({
                url: "../php/register.php",
                type: "POST",
                data: `phone=${phone1.value}&password=${psd.value}&date=${date.value}`,
                success: function (dt) {
                    if (dt) {
                        alert("注册成功，前往登录界面")
                        location.href = './login.html'
                    } else {
                        alert("该手机号已注册，前往登录界面")
                        location.href = './login.html'
                    }
                }
            })
            return false
        } else {
            phone1.focus()
            psd.focus()
            repsd.focus()
            return false
        }
    }
})