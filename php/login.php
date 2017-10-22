<?php
session_start();
?>

<?php
//    $fnName=$_GET["callback"];
    $name = $_GET["uName"]; //用户名
    $p = $_GET["pWd"]; //密码

    if($name=="admin"&&$p=="chsea5280"){
      $_SESSION["uName"]=$name;
        //登陆成功
        echo "1";
    }else{
     echo "0";
     }
?>
