$(function () {
    /*--------------------topNav顶部导航栏---------------------*/
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
    /*-----------------topNav顶部导航栏------------------------*/
    /*---------------吸底菜单----------------*/
    $(window).scroll(function () {
        var scrollHeight=$(window).scrollTop();
        var oClient=document.body.clientHeight;   //屏幕可视高度
        if(scrollHeight>=oClient){
            $(".totalbox").css({
                position:"fixed",
                bottom:0,
                zIndex:999
            })
        }else{
            $(".totalbox").css({
                position:"relative"

            })
        }
    });
    /*---------------php---------------------*/
    var uName=$("#uNp").val();
    if(uName){
        //存在管理员
        $(".topNavLeft-login").html("");
        var ad=$('<a href="javascript:void(0)">'+'welcome:'+uName+'</a></li>');
        ad.css("color","red");
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

    $(".total").html(getTotal());

    var num=getTotal();
    console.log(num);
    if(num==0){
        alert("没有商品,赶紧去逛逛吧");
        //cookie中不存在商品
        $(".emptyShopCart").css("display","block");
        $("#shopCart-main").css("display","none");

    }else{
        $("#shopCart-main").css("display","block");
        $(".emptyShopCart").css("display","none");
    }
    var list=getGoodsList();
    var oMain=$('<div class="cart-main">'+
        '<div class="ware">'+
        '<input type="checkbox" class="cartAll" >'+
        '<strong class="warename">'+list[0].Fh+'</strong>'+
        '</div></div>');

    $("#shopCart-main").append(oMain);

    for(var i=0;i<list.length;i++){
        /*-------cart-main代表一个店铺的所有商品的集合------------*/
        var cartMain=$('<div class="Goods">'+
            '<ul class="my-goods">'+
            /*----------------装本商店的物品-----------------*/
            '<li class="good-item" pid="'+list[i].pid+'">'+
            '<div class="col col10">'+
            '<input type="checkbox" class="ck-gd">'+
            '</div>'+
            '<div class="col col11">'+
            '<a href=""><img src="'+list[i].ImgSrc+'" alt="" class="img-dec">'+'</a>'+
            '<div class="txt-wrap">'+
            '<a href="" class="dec">'+list[i].pDesc+'</a>'+
            '<p class="property"></p>'+
            '</div>'+
            '</div>'+
            '<div class="col col12">'+
            '<del class="del">'+list[i].oDel+'</del>'+
            '<span class="newprice">'+list[i].oPrice+'</span>'+
            '<span class="bargain">特价</span>'+
            '</div>'+
            '<div class="col col13">'+
            '<ul class="oli">'+
            '<li class="reduce">-</li>'+
            '<li class="num"><input type="text" value="'+list[i].count+'" class="nuc">'+'</li>'+
            '<li class="add">+</li>'+
            '</ul>'+
            '<p class="residue">仅剩5件</p>'+
            '</div>'+
            '<div class="col col14">'+
            '<span class="goodAllSum">'+(list[i].count*list[i].oPrice)+'</span>'+
            '</div>'+
            '<div class="col col15">'+
            '<a href="javascript:void(0)" class="del-goods">删除</a>'+
            '<span class="collect">移入我的收藏</span>'+
            '</div>'+
            '</li>'+
            '</ul>');

        $(".cart-main").append(cartMain)
    }
        var cartinfo=$('<div class="cartinfo">'+
    '<span class="discount">活动优惠：-￥0.00</span>'+
    '<span class="all-sum">商品应付总计：<em>0</em></span>'+
    '<span class="dues">预估税费： <em>￥0.00</em></span>'+
    '</div>');
    cartMain.append(cartinfo)
    /*-----------可以把仓库全部放到一个数组里，然后循环遍历---------*/

        // $(" .good-item .ck-gd").on("check",function () {
        //     alert($(this).parents(".col").find(".nuc").val())
        // })

    /*-----------------计算总价格----------------*/

    function count() {
        var totalPrice = 0;
        var totalSum=0;
        var cks = $(".col10 .ck-gd");
        console.log(cks.length);
        for (var i = 0; i < cks.length; i++) {
            //checked用原生的去判断
            //cks[i]   //表示就是数组中对应的哪一个checkbox原生节点对象
            if (cks[i].checked) {
                var allSum = Number(cks.eq(i).parent().siblings(".col13").find(".nuc").val());   //总数
                var AllCount=cks.eq(i).parent().siblings(".col14").find(".goodAllSum").html();   //总价
                console.log(allSum+"----------"+AllCount);
                totalPrice+=Number(AllCount);
                totalSum+=allSum
            }
            console.log(totalPrice);
            $(".all-Num").html(totalSum);   //总数
            $(".itm .num").html("￥"+totalPrice);  //总价格
            $(".all-sum em").html("￥"+totalPrice)
        }
    }


    /*--------------------单选事件-----------------------*/
    $(".col10 ").on("change",".ck-gd",function () {
        count();
        CheckAllChange()
    });

/*-------------------判断全选事件---------------------------*/
function CheckAllChange() {
    var flag=true;
    $(".col10 .ck-gd").each(function (index,Element) {
        if(!Element.checked){
            flag=false;
            return false;
        }
    });
    $("#selectAll")[0].checked=flag;    //判断checked记得用原生节点判断
    $(".cartAll")[0].checked=flag;
    $("#setAll")[0].checked=flag;
}

    /*-------------------实现全选事件---------------------------*/
    $("#selectAll").change(function () {
        var flag=this.checked;   //此处记得是原生节点事件
        $(".col10 .ck-gd").each(function (index,Element) {
            Element.checked=flag;
        });
        count()
    });
    $(".cartAll").change(function () {
        var flag=this.checked;   //此处记得是原生节点事件
        $(".col10 .ck-gd").each(function (index,Element) {
            Element.checked=flag;
        });
        count()
    });
    $("#setAll").change(function () {
        var flag=this.checked;   //此处记得是原生节点事件
        $(".col10 .ck-gd").each(function (index,Element) {
            Element.checked=flag;
        });
        count()
    });


/*----------------------删除商品-------------------*/
$(".col15 .del-goods").on("click",function () {
    var that=this;
    $("#wrap").addClass("active");
    $(".ensure").on("click",function () {
        $("#wrap").removeClass("active");
        //Dom节点删除
        $(that).parent().parent().remove();
        //Cookie删除
        var pid=$(that).parent().parent().attr("pid");
        console.log(pid);
        delGoodById(pid);
        var num=getTotal();
        count()
        if(num==0){
            //cookie中不存在商品
            $(".emptyShopCart").css("display","block");
            $("#shopCart-main").css("display","none");

        }else{
            $("#shopCart-main").css("display","block");
            $(".emptyShopCart").css("display","none");
        }
    })
});


    $(".contain .close").on("click",function () {
        $("#wrap").removeClass("active");
    });
    $(".contain .cancel").on("click",function () {
        $("#wrap").removeClass("active");
    });


/*--------------删除选中商品----------------------*/
$(".opt").click(function () {
    $(".col10 .ck-gd").each(function (index,Element) {
        if(Element.checked==true){
            var that=this;
            $("#wrap").addClass("active");
            $(".ensure").on("click",function () {
                $("#wrap").removeClass("active");
                $(that).parent().parent().remove();
                var pid=$(that).parent().parent().attr("pid");
                delGoodById(pid);
                var num=getTotal();
                if(num==0){
                    //cookie中不存在商品
                    $(".emptyShopCart").css("display","block");
                    $("#shopCart-main").css("display","none");

                }else{
                    $("#shopCart-main").css("display","block");
                    $(".emptyShopCart").css("display","none");
                }
            })

        }
    });
})




});
