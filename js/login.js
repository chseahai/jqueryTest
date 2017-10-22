
var url="http://localhost/My_project/php/login.php?";
$("#login-box").click(function () {
    var uN=$("#u-n").val();
    var pW=$("#u-p").val();
    console.log(uN+"--------"+pW);

   $.get(url, {"uName" : uN,"pWd":pW},function (data) {
       console.log(data);
       if(data==1){
           location.href="http://localhost/My_project/index.php"
       }else {
           alert("账户密码有误，请重新输入")
       }
   })
});
