/*-----------------账户验证-----------------*/
$("#inpt-account").focus(function () {
    checkUserName()
});

$("#inpt-account").blur(function () {
    checkUserName()
});

function checkUserName(e) {

    var uValue=$("#inpt-account").val();
    var _e=window.event||e;
    if(_e.type=="focus"){

        /*-----------获取焦点--------*/
        $(".account").find(".clear").css("display","block");
        $(".account .clear").click(function () {
            $("#inpt-account").val("");
        })
    }else if(_e.type=="blur"){
        /*-----------失去焦点--------*/
        if(uValue.length<6||uValue.length>18){
            //长度错误
            $(".u-error").css("display","block");
            $("#inpt-account").css("border","1px solid red");
            $(".account .s-right").css("display","none");
        }else{
            //长度正确   验证是否符合邮箱规则
            if(getEmail(uValue)){
                $(".u-error").css("display","none");
                $("#inpt-account").css("border","1px solid #ddd");
                $(".account .s-right").css("display","block");
                return true;
            }else{
                $(".u-error").css("display","block");
                $("#inpt-account").css("border","1px solid red");
                $(".account .s-right").css("display","none");
            }
        }
    }else{
        /*---------------下方的点击事件------------可封装函数-----*/
        if(uValue.length<6||uValue.length>18){
            //长度错误
            $(".u-error").css("display","block");
            $("#inpt-account").css("border","1px solid red");
            $(".account .s-right").css("display","none");
        }else{
            //长度正确   验证是否符合邮箱规则
            if(getEmail(uValue)){
                $(".u-error").css("display","none");
                $("#inpt-account").css("border","1px solid #ddd");
                $(".account .s-right").css("display","block");
                return true;
            }else{
                $(".u-error").css("display","block");
                $("#inpt-account").css("border","1px solid red");
                $(".account .s-right").css("display","none");
            }
        }
    }

}

/*验证邮箱*/
function getEmail(str) {
    var reg=/^[\w-]{6,18}/;
    if(reg.test(str)){
        return true;
    }
}

/*-----------------密码验证-----------------*/
$("#inpt-password").focus(function () {
    checkPw()
});
$("#inpt-password").blur(function () {
    checkPw()
});
function checkPw(e) {
    var pValue = $("#inpt-password").val();
    console.log(pValue.length);
    var _e = window.event || e;
    if (_e.type == "focus") {
        /*-----------获取焦点--------*/
        $(".password").find(".clear").css("display", "block");
        $(".password .clear").click(function () {
            $("#inpt-password").val("");
        })
    } else if (_e.type == "blur") {
        /*-----------失去焦点--------*/
        if (pValue.length < 6 || pValue.length > 16) {
            $(".p-error").css("display", "block");
            $("#inpt-password").css("border", "1px solid red");
            $(".password .s-right").css("display", "none");
        } else {
            if (getPassword(pValue)) {
                $(".p-error").css("display", "none");
                $("#inpt-password").css("border", "1px solid #ddd");
                $(".password .s-right").css("display", "block");
                return true;
                num++;
            } else {
                $(".p-error").css("display", "block");
                $("#inpt-password").css("border", "1px solid red");
                $(".password .s-right").css("display", "none");
            }
        }
    } else {
        /*---------------下方的点击事件------------可封装函数-----*/
        if (pValue.length < 6 || pValue.length > 16) {
            $(".p-error").css("display", "block");
            $("#inpt-password").css("border", "1px solid red");
            $(".password .s-right").css("display", "none");
        } else {
            if (getPassword(pValue)) {
                $(".p-error").css("display", "none");
                $("#inpt-password").css("border", "1px solid #ddd");
                $(".password .s-right").css("display", "block");
                return true;
            } else {
                $(".p-error").css("display", "block");
                $("#inpt-password").css("border", "1px solid red");
                $(".password .s-right").css("display", "none");
            }
        }
    }}
    function getPassword(str) {
        var reg = /^[\w-]{6,16}/;
        if (reg.test(str)) {
            return true;
        }
    }


    /*-----------------确认密码-----------------*/
    $("#sure-password").blur(function () {
        checkPTrue()
    });
    function checkPTrue() {
        var pValue = $("#inpt-password").val();
        var cpVTrue = $("#sure-password").val();
        if (pValue == cpVTrue) {
            if (cpVTrue.length == 0) {
                $(".checkPassword .s-right").css("display", "none");
                $("#sure-password").css("border", "1px solid red");
            } else {
                $(".checkPassword .s-right").css("display", "block");
                $(".cp-error").css("display", "none");
                $("#sure-password").css("border", "1px solid #ddd");
                return true;
            }

        } else {
            $(".cp-error").css("display", "block");
            $(".checkPassword .s-right").css("display", "none");
            $("#sure-password").css("border", "1px solid red");
        }
    }

    /*-----------------验证码-----------------*/
    // var Hflag=false;
    var Fsum=0;
    $(".check-word").on("mouseenter", handle);
    function handle() {
        if(Fsum<1){
            Fsum++;
            $(".check .s-right").css("display", "none");
            $(".check .ck-error").css("display", "block");
        }else{
            var oLeft;
            $(".checkImg").css("display", "block");
            $(".moveBox").mousedown(function () {
                $(".moveBox").on("mousemove", function (e) {
                    var _e = window.event || e;
                    oLeft = _e.clientX - 500;
                    if (oLeft < 1) {
                        oLeft = 1
                    }
                    if (oLeft > 270) {
                        oLeft = 270;
                    }
                    $(".moveBox").css({
                        left: oLeft
                    });
                    $(".moveSmall").css({
                        left: oLeft
                    });
                });
                return false;   //组织默认行为
            }).mouseup(function () {
                $(".moveBox").unbind("mousemove");
                if (oLeft >= 154 &&oLeft <= 164) {
                    $(".check .s-right").css("display", "block");
                    $(".check .ck-error").css("display", "none");
                    return true;
                } else {
                    $(".check .s-right").css("display", "none");
                    $(".check .ck-error").css("display", "block");
                }
            });
            return true;
        }
    }

    $(".check-word").on("mouseleave", function () {
        $(".checkImg").css("display", "none");
    });

    /*-----------------手机验证-----------------*/
    $("#phone").blur(function () {
        checkGetPhone()
    });
    function checkGetPhone() {
        var phoneValue = $("#phone").val();
        if (getMobile(phoneValue)) {
            $(".phone .s-right").css("display", "block");
            $(".phone .ph-error").css("display", "none");
            $("#phone").css("border", "1px solid #ddd");
            return true;
        } else {
            $(".phone .s-right").css("display", "none");
            $(".phone .ph-error").css("display", "block");
            $("#phone").css("border", "1px solid red");
        }
    }

    function getMobile(str) {
        var reg = /^[1][34578]\d{9}/;
        if (reg.test(str)) {
            return true;
        }
    }


    /*-----------------短信验证-----------------*/

    var str = "";
    var Coflag=false;
    $(".getCode").click(function () {
        Coflag=true;
        SjPhoneNum()
    });
    function SjPhoneNum() {
        var s = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        str = "";
        for (var i = 0; i < 4; i++) {
            var index = parseInt(Math.random() * 63);
            str += s.charAt(index);
        }
        alert(str);
    }

    $("#checkNote").blur(function () {
        checkGetNum()
    });
    function checkGetNum() {
        var ckN = $("#checkNote").val();
        // var ckN = $("#checkNote").text();
        console.log(ckN);
        if(Coflag==true){
            if (ckN == str) {
                $(".phoneNote .s-right").css("display", "block");
                $(".phoneNote .pn-error").css("display", "none");
                return true;
            } else {
                $(".phoneNote .s-right").css("display", "none");
                $(".phoneNote .pn-error").css("display", "block");
            }
        }else{
            $(".phoneNote .s-right").css("display", "none");
            $(".phoneNote .pn-error").css("display", "block");
        }

    }

    /****************************点击注册*******************/

    $(".btn-login").click(function () {
        if (checkUserName() && checkPw()&&checkPTrue()&&handle()&&checkGetPhone()&&checkGetNum()) {
            alert("可以注册");
            location.href = "http://localhost/My_project/html/login.html";
        } else {
            alert("请从新输入")
        }
    });
