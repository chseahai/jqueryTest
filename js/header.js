/**
 * Created by Administrator on 2017/1/5 0005.
 */
/*-------------topNav顶部导航栏--------------------*/
/*-----------顶部小三角翻转--------*/
function moveGo(a) {
    $(a).children(".iconfont").css({
        "transform":"rotate(180deg)",
        "-ms-transform":"rotate(180deg)", //	!* IE 9 *!*/
        "-moz-transform":"rotate(180deg)",// 	!* Firefox *!*/
        "-webkit-transform":"rotate(180deg)",// !* Safari 和 Chrome *!*/
        "-o-transform":"rotate(180deg)", //	!* Opera *!*/
        "transition": "0.5s"
    },100)
}
function moveBack(a) {
    $(a).children(".iconfont").css({
        "transform":"rotate(0)",
        "-ms-transform":"rotate(0)", //	!* IE 9 *!*/
        "-moz-transform":"rotate(0)",// 	!* Firefox *!*/
        "-webkit-transform":"rotate(0)",// !* Safari 和 Chrome *!*/
        "-o-transform":"rotate(0)", //	!* Opera *!*/
        "transition": "0.5s"
    },100)
}
$(".topNavLeft-phone").hover(function () {
    $(".app").css({
        display:"block"
    })
},function () {
    $(".app").css({
        display:"none"
    })
});
$(".topNavRight-person").on("mouseenter",function () {

    $(this).css({"background":"#fff","width":"81px"});
    $(this).children("a").css({"borderLeft":"1px solid #fff"});
    $(".topNavRight-person .client-List").css({
        display:"block"
    });
    moveGo(".topNavRight-person");
});
$(".topNavRight-person").on("mouseleave",function () {
    $(".topNavRight-person .client-List").css({display:"none"});
    $(this).css({"background":"#f2f2f2","width":"81px"}).children("a").css({"borderLeft":" 1px solid #666"});
    moveBack(".topNavRight-person")
});
$(".topNavRight-client").on("mouseenter",function () {
    $(this).css({"background":"#fff","width":"81px"});
    $(this).children("a").css({"borderLeft":"1px solid #fff"});
    $(".topNavRight-client .client-List").css({
        display:"block"
    });
    moveGo(".topNavRight-client");
});
$(".topNavRight-client").on("mouseleave",function () {
    $(".topNavRight-client .client-List").css({display:"none"});
    $(this).css({"background":"#f2f2f2","width":"81px"}).children("a").css({"borderLeft":" 1px solid #666"});
    moveBack(".topNavRight-client")
});
$(".topNavRight-buy").on("mouseenter",function () {
    $(this).css({"background":"#fff","width":"81px"});
    $(this).children("a").css({"borderLeft":"1px solid #fff"});
    $(".topNavRight-buy .client-List").css({
        display:"block"
    });
    moveGo(".topNavRight-buy");
});
$(".topNavRight-buy").on("mouseleave",function () {
    $(".topNavRight-buy .client-List").css({display:"none"});
    $(this).css({"background":"#f2f2f2","width":"81px"}).children("a").css({"borderLeft":" 1px solid #666"});
    moveBack(".topNavRight-buy")
});
$(".topNavRight-more").on("mouseenter",function () {
    $(this).css({"background":"#fff","width":"57px"});
    $(this).children("a").css({"borderLeft":"1px solid #fff"});
    $(".topNavRight-more .client-List").css({
        display:"block"
    });
    moveGo(".topNavRight-more");
});
$(".topNavRight-more").on("mouseleave",function () {
    $(".topNavRight-more .client-List").css({display:"none"});
    $(this).css({"background":"#f2f2f2","width":"57px"}).children("a").css({"borderLeft":" 1px solid #666"});
    moveBack(".topNavRight-more")
});
$(".List-sina").on("mouseenter",function () {
    $(".move-box").stop().animate({"top":"18px"},100);
    $(".collect-Img img").eq(0).addClass("active").siblings().removeClass("active");
});
$(".List-chat").on("mouseenter",function () {
    $(".move-box").stop().animate({"top":"50px"},100);
    $(".collect-Img img").eq(1).addClass("active").siblings().removeClass("active");
});
$(".List-yx").on("mouseenter",function () {
    $(".move-box").stop().animate({"top":"80px"},100);
    $(".collect-Img img").eq(2).addClass("active").siblings().removeClass("active");
});
$(".List-sina,.List-chat,.List-yx").on("mouseenter",function () {
    $(".collect-Img").css("display","block")
});
$(".List-sina,.List-chat,.List-yx").on("mouseleave",function () {
    $(".collect-Img").css("display","none")
});

/*------------ajax动态加载数据---tab-menu和tab-menu-details----------*/
var sideTaburl="http://127.0.0.1/My_project/json/index/sideTab.json";   //sideTab数据路径
var sideTabPath="http://127.0.0.1/My_project/images/index/topTabBoxDetails/";     //右侧图片路径
$.ajax({
    url: sideTaburl,
    type: "GET",
    async: "true",
    success: function (data) {
        for(var i=0;i<data.length;i++){
            /*--------------加载左侧详情数据  左侧标题tab-menu------*/
            var tabList=$('<li class="tab-li "><img src="'+data[i].imgSrc+'" alt=""><a href="'+data[i].targetSrc+'" class="f-color">'+data[i].tabLiTitle+'</a><i></i><em class="line"></em></li>');
            $(".tab-menu").append(tabList);
            $(".f-color").css({
                "color":"#fff",
                "fontSize":"14px"
            });
            if(i==9){
                $(".tab-li ").eq(9).find(".line").css("display","none");
            }

            /*----------------tab-menu-details详情加载处------*/
            var oMenuDetails=$('<div class="menu-details"><ul class="details-List"></ul></div>');
            $(".tab-menu-details").append(oMenuDetails);
            if(i==0){
                $(".tab-menu-details div").eq(0).addClass("active");
            }
            /*-------------------加载右侧底部图片-----------------*/
            var oListImg=$('<div class="ListImg"><div class="brand-box"></div><div class="img-box"><a href=""><img src="'+sideTabPath+data[i].imgList[0].bigImg+'" alt=""></a></div></div>');
            $(".menu-details").eq(i).append(oListImg);

            /*--------加载右侧小图片----brand-box里边的--------------------*/
            for(var m=0;m<data[i].imgList[0].smallImg.length;m++){
                var oImg=$('<a href=""><img src="'+sideTabPath+data[i].imgList[0].smallImg[m]+'" alt=""></a>');
                $(".brand-box").eq(i).append(oImg)
            }
            for(var j=0; j<data[i].contain.length; j++){
                var li = $('<li class="List-contain"><p class="title"><a href="#">'+data[i].contain[j].name+'</a></p></li>');
                $(".details-List").eq(i).append(li);

                /*---------------------然后加载details内容---------------------*/
                for(var k=0;k<data[i].contain[j]["details"].length;k++){
                    var oA=$('<a href="#">'+data[i].contain[j]["details"][k]+'</a>');
                    $(".menu-details").eq(i).children(".details-List").children(".List-contain").eq(j).append(oA);
                }
            }
        }
        /*--------tab-menu左侧主菜单与tab-menu-details 右侧详情菜单切换-------------*/
        $(".tab-menu li").on("mouseenter",function () {
            $(this).addClass("active").siblings().removeClass("active");
            $(this).find(".line").css("background","#542e23");
            $(this).siblings().find(".line").css("background","#44373b");
            var index=$(this).index();
            $(".menu-details").eq(index).addClass("active").siblings().removeClass("active");
            $(".tab-menu-details").addClass("active");
        });
        $(".All-classify").on("mouseleave",function () {
            $(".tab-menu-details").removeClass("active");
            $(".tab-li").removeClass("active");
            $(".tab-menu").css("display","none");
        });
        $(".All-classify").on("mouseenter",function () {
            $(".tab-menu").css("display","block");
        })
    },
    error:function (status) {
        console.log(status);
    }

});


/*----------------全球年货节yearGoods------------------*/
var flag=true;
$(".yearGoods .Goods-right").click(function () {
  if(flag){
      flag=false;
      $(this).children().eq(2).css("display","none");
      $(this).children().eq(3).css("display","block");
      $(".yearGoods").css("overflow","hidden");
      $(".yearGoods").stop().animate({
          width:66
      },100,function () {
      });
      $(".Goods-main .line").css("display","none")
  }else{
      $(this).children().eq(3).css("display","none");
      $(this).children().eq(2).css("display","block");
      $(".yearGoods").css("overflow","hidden");
      $(".yearGoods").stop().animate({
          width:1060
      },100,function () {
          flag=true;
      });
      $(".Goods-main .line").css("display","block")
  }

});


/*---------------php---------------------*/
var uName=$("#uNp").val();
console.log(uName);
if(uName){
    //存在管理员
    $(".topNavLeft-login").html("");
    var ad=$('<a href="javascript:void(0)">'+'welcome:'+uName+'</a></li>');
    ad.css("color","#999");
    $(".topNavLeft-login").append(ad);
    $(".topNavLeft-register").html("");
    var rd=$('<a href="../html/login.html">'+'退出'+'</a>');
    $(".topNavLeft-register").append(rd);
}else{
    //不存在管理员
    $(".topNavLeft-login").html("");
    var oAd=$('<a href="html/login.html">登录</a>');
    $(".topNavLeft-login").append(oAd);

    $(".topNavLeft-register").html("");
    var oRd=$('<a href="html/register.html">免费注册</a>');
    $(".topNavLeft-register").append(oRd);
}


/*-------------------百度接口框------------------*/
$(".search-input input").keyup(function () {
    if($(this).val() != "") {
        var script = $('<script></script>');
        script.attr('src', 'http://suggestion.baidu.com/su?wd=' + $(this).val() + '&cb=solve');
        $(document.body).append(script);
        $(".showBaiDu").show();
    } else {
        $(".showBaiDu").hide();
    }
});
//回调函数
function solve(data) {
    console.log(data);
    $(".showBaiDu").html("");
    var arr = data.s;
    if(arr.length) {
        $(".showBaiDu").show();
        for(var i = 0; i < arr.length; i++) {
            var div = $('<div>' + arr[i] + '</div>');
            div.css({
                position:"relative",
                zIndex:1000,
                borderBottom:"1px solid #ddd",
                margin: 8,
                cursor:"pointer"
            });
            div.appendTo($(".showBaiDu"));
        }
    } else {
        $(".showBaiDu").hide();
    }
}

$(".showBaiDu").on("click", "div", function() {
    $(".search-input input").val($(this).html());
    $(".showBaiDu").hide();
});