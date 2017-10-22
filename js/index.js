/**
 * Created by Administrator on 2016/12/27.
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
var sideTaburl="http://localhost/My_project/json/index/sideTab.json";   //sideTab数据路径
// var sideTaburl="http://127.0.0.1/My_project/json/index/sideTab.json";   //sideTab数据路径
var sideTabPath="http://localhost/My_project/images/index/topTabBoxDetails/";     //右侧图片路径
// var sideTabPath="http://127.0.0.1/My_project/images/index/topTabBoxDetails/";     //右侧图片路径
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
            $(".tab-li").removeClass("active")
        })
    },
    error:function (status) {
        console.log(status);
    }

});




/*-----------------------ajax获取轮播图内容-------------------*/
// var path="http://127.0.0.1/My_project/images/index/carousel/";
var path="http://localhost/My_project/images/index/carousel/";
var url="http://localhost/My_project/json/index/carousel.json";
// var url="http://127.0.0.1/My_project/json/index/carousel.json";
$.ajax({
    url:url,
    type:"GET",
    success:function (data) {
        getDom(data);
        handleDom();
    }
});
/*-------------getDom创建节点--------------*/
function getDom(arr) {
    for(var i=0;i<arr.length;i++){
        //创建div
        var div=$('<div><a href="'+arr[i].targetSrc+'"><img src="'+path+arr[i].imgSrc+'" alt=""></a></div>');
        $(".ImgList").append(div);
        //创建li
        var li=$('<li>'+parseInt(i+1)+'</li>');
        $(".controlsList").append(li);
        if(i==0){
            $(".ImgList div").eq(0).addClass("active");
            $(".controlsList li").eq(0).addClass("active")
        }
    }
}
/*-------------handleDom操作节点实现功能----------------------*/
var timer;
function handleDom() {
    /*---------------自动轮播和暂停-----------------------*/
    moveRepeat();
    function moveRepeat() {
        timer=setInterval(function () {
            $(".btnRight").click();
        },3000)
    }
    $(".carousel").hover(function () {
        clearInterval(timer);
        $(".btns").fadeIn(200)
    },function () {
        moveRepeat();
        $(".btns").fadeOut(200)
    });

    /*---------------------鼠标移动上左右按钮时候 左右箭头变色-------------------------------*/
    $(".btnRight").hover(function () {
        $(this).css("color","#fff")
    },function () {
        $(this).css("color","#c4c4c4")
    });
    $(".btnLeft").hover(function () {
        $(this).css("color","#fff")
    },function () {
        $(this).css("color","#c4c4c4")
    });


    var ImgIndex=$(".ImgList img").index();   //ImgIndex代表图片的下标
    $(".btnRight").on("click",function () {
        ImgIndex++;
        if(ImgIndex>5){
            ImgIndex=0;
        }
        $(".ImgList div img").eq(ImgIndex).fadeIn(400).parent().parent().siblings().children().children().fadeOut(400);
        $(".controlsList li").eq(ImgIndex).addClass("active").siblings().removeClass("active");
    });
    $(".btnLeft").on("click",function () {
        ImgIndex--;
        if(ImgIndex<0){
            ImgIndex=5;
        }
        $(".ImgList div img").eq(ImgIndex).fadeIn(400).parent().parent().siblings().children().children().fadeOut(400);
        $(".controlsList li").eq(ImgIndex).addClass("active").siblings().removeClass("active");
    });
    /*----------------controlsList控制图片出现消失--------------------*/
    $(".controlsList").on("mouseover","li",function () {
        ImgIndex=$(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $(".ImgList div img").eq(ImgIndex).fadeIn(10).parent().parent().siblings().children().children().fadeOut(10);
    })
}


/*-----------------main主体内容---------------------*/
$(function(){
    $(".showSliding .sliding li").hover(function(){
            //当鼠标移进去的时候，先stop()停止之前的运动，然后改变它本身的宽度，然后让他的兄弟节点的宽度变成默认值（160）；然后移进去它本身上边的文字消失
            //当鼠标移出的时候，然后恢复原来的默认值，然后文字显示出来
            $(this).stop(true).animate({"width":"400px"},200).siblings().stop(true).animate({"width":"175px"},200);
            $(this).find(".desc").css("display","none");
        }
        ,function(){
            $(".showSliding .sliding  li").stop(true).animate({"width":"220px"},200);
            $(this).find(".desc").css("display","block");
        }
    );
//
});

/*-------------今日限时购--------------------*/
$.ajax({
    url:"http://localhost/My_project/json/index/showGoods.json",
    // url:"http://127.0.0.1/My_project/json/index/showGoods.json",
    success:function (data) {
        var showGoods=template("showGoods",data[0]);
        $(".home-List").append(showGoods);
        $(".now-go").hover(function () {
            $(this).css("opacity","0.8")
        },function () {
            $(this).css("opacity","1")
        })
    }
});

/*-----------显示时间--------*/
var LimitedTime;
var date=new Date();
var hours=date.getHours();
var min=date.getMinutes();
var sec=date.getSeconds();
LimitedTime=setInterval(function () {
    sec--;
    if(sec<1){
        sec=59;
        min--;
        if(min<0){
            hours--;
            if(hours<0){
                hours=23;
            }
        }
    }
    var sec_one=Math.ceil(parseInt(sec%10));
    var sec_two=Math.ceil(parseInt(sec/10));
    var min_one=Math.ceil(parseInt(min%10));
    var min_two=Math.ceil(parseInt(min/10));
    var hours_one=Math.ceil(parseInt(hours%10));
    var hours_two=Math.ceil(parseInt(hours/10));
    $(".showtime strong").eq(0).html(hours_two);
    $(".showtime strong").eq(1).html(hours_one);
    $(".showtime strong").eq(2).html(":");
    $(".showtime strong").eq(3).html(min_two);
    $(".showtime strong").eq(4).html(min_one);
    $(".showtime strong").eq(5).html(":");
    $(".showtime strong").eq(6).html(sec_two);
    $(".showtime strong").eq(7).html(sec_one);

},1000);
/*-------------今日上新--------------------*/
$.ajax({
    url:"http://localhost/My_project/json/index/showNews.json",
    // url:"http://127.0.0.1/My_project/json/index/showNews.json",
    success:function (data) {
        for(var i=0;i<data[0].List.length;i++){
            var oList=$('<li>'+'<a href="">'+
                '<img src="'+data[0].List[i].imgSrc+'" alt="">'+
                '<span><img src="'+data[0].List[i].smallImg+'" alt=""></span>'+
                '</a>'+
                '<a href="" class="title">'+data[0].List[i].desc+'</a>'+
                '<a href="" class="fun">'+data[0].List[i].fun+'</a>'+
                '<p class="news-dp">'+
                '</p>'+
                '<p class="news-price" >'+
                '<span class="show">'+data[0].List[i].show+'</span>'+
                '<del class="del">'+data[0].List[i].del+'</del>'+
                '</p>'+'</li>');
            $(".news-details").append(oList);
            if(data[0].List[i]["discount"]){
                $(".news-dp").eq(i).append($('<span class="discount">'+data[0].List[i].discount+'</span>'))
            }
            if(data[0].List[i]["postage"]){
                $(".news-dp").eq(i).append($('<span class="postage">'+data[0].List[i].postage+'</span>'))
            }
        }
    }
});


/*------------------stairs-楼梯ajax加载处--------------------*/
$.ajax({
    // url:"http://127.0.0.1/My_project/json/index/stairs.json",
    url:"http://localhost/My_project/json/index/stairs.json",
    type:"Get",
    success:function (data) {
        for (var i = 0; i < data.length; i++) {
            /*-----------创建楼梯大体----------*/
            var stairs = $('<div class="stairs"></div>');
            $(".stairsAll").append(stairs);
            var arr = ["infant", "beauty", "costume", "health", "care", "overSeas", "digital", "global"];
            /*----------------给各个楼层添加class名*/
            $(".stairsAll .stairs").eq(i).addClass("" + arr[i]);

            //给每个楼层增加一个id然后用面向对象方法下
            $(".stairsAll .stairs").eq(i).attr("id", arr[i]);


            /*------------------插入里边具体内容----------------------*/
            /*---------stairs-name顶部内容----------*/
            var stairs_name = $('<div class="stairs-name"><h3>' + data[i]["list"][0]["stairsName"][0].title + '</h3><ul class="stairs-HotS"></ul><a href="" class="more-goods">' + data[i]["list"][0]["stairsName"][2].moreGoods + '</a></div>');
            $(".stairsAll .stairs").eq(i).append(stairs_name);

            for (var k = 0; k < data[i]["list"][0]["stairsName"][1]["stairsHotS"].length; k++) {
                var li = $('<li><a href="javascript:void(0)">' + data[i]["list"][0]["stairsName"][1]["stairsHotS"][k] + '</a></li>');

                $(li).appendTo($(".stairs-HotS").eq(i));
                if(k==0){
                    $(li).children("a").css("fontSize","14px");
                    (li).children("a").hover(function () {
                        $(this).css("textDecoration","none")
                    })
                }
                if (k == 8) {
                    li.addClass("last");
                    $(li).children("a").css("borderRight","none");
                }
            }

//             /*---------stairs-main主体内容----------*/


            /*--------------------加载左侧------------------*/
            var stairs_main = $('<div class="stairs-main"><div class="main-details"><a href=""><img src="' + data[i]["list"][1]["stairsMain"][0]["mainDetails"][0].mainDetailsImgSrc + '" alt=""></a><ul class="details-name"></ul></div></div>');
            $(".stairsAll .stairs").eq(i).append(stairs_main);

            for (var m = 0; m < data[i]["list"][1]["stairsMain"][0]["mainDetails"][1].detailsName.length; m++) {
                var li = $('<li><a href="">' + data[i]["list"][1]["stairsMain"][0]["mainDetails"][1].detailsName[m] + '</a></li>');
                $(li).appendTo($(".details-name").eq(i));
                $(".details-name li").on("mouseenter",function () {
                    $(this).css("background","#eee").children("a").css("color","#E31436")
                })
                $(".details-name li").on("mouseleave",function () {
                    $(this).css("background","#fff").children("a").css("color","#000")
                })
            }
            /*--------------------加载中部------------------*/

            var ul = $('<ul class="main-list"></ul>');
            $(".stairsAll .stairs .stairs-main").eq(i).append(ul);
            for (var p = 0; p < data[i]["list"][1]["stairsMain"][1]["mainList"].length; p++) {
                var oList = $('<li><h3 class="title"><a href="">' + data[i]["list"][1]["stairsMain"][1]["mainList"][p]["mainListDetails"][0].mainListDetailsTitle + '</a></h3><p class="desc"><a href="">' + data[i]["list"][1]["stairsMain"][1]["mainList"][p]["mainListDetails"][1].mainListDetailsDesc + '</a></p><a href=""><img src="' + data[i]["list"][1]["stairsMain"][1]["mainList"][p]["mainListDetails"][2].mainListDetailsImgSrc + '" alt=""></a></li>');
                $(".stairsAll .stairs .main-list").eq(i).append(oList);
            }

            /*--------------------加载右部------------------*/

            var oDiv = $('<div class="main-newH"><h3 class="main-newH-title">' + data[i]["list"][1]["stairsMain"][2]["mainNewH"][0].mainNewHTitle + '</h3><div class="newH-list"></div><ul class="controlList"><li></li><li></li><li></li></ul></div>');

            $(".stairsAll .stairs .stairs-main").eq(i).append(oDiv);
            /*-------------创建-newH-list里的三个ul-----------*/
            for (var k = 0; k < data[i]["list"][1]["stairsMain"][2]["mainNewH"][1].newHList.length; k++) {

                var ul = $('<ul class="newH-details"></ul>');
                if (k == 0) {    //注意==   一个=直接会炸掉
                    $(ul).addClass("active");
                }
                $(".stairsAll .stairs .main-newH .newH-list").eq(i).append(ul);

                /*-----然后创建4个li  newH-details-List插进ul中 ------*/
                for (var n = 0; n < data[i]["list"][1]["stairsMain"][2]["mainNewH"][1].newHList[0].newHDetails.length; n++) {
                    var oli = $('<li class="newH-details-List"><a href=""><img src="' + data[i]["list"][1]["stairsMain"][2]["mainNewH"][1].newHList[k].newHDetails[n].newHDetailsList[0].newHDetailsListImgSrc + '" alt=""></a><p class="newH-details-desc"><a href="">' + data[i]["list"][1]["stairsMain"][2]["mainNewH"][1].newHList[k].newHDetails[n].newHDetailsList[1].newHDetailsDesc + '</a></p><div  class="price"><span class="show">' + data[i]["list"][1]["stairsMain"][2]["mainNewH"][1].newHList[k].newHDetails[n].newHDetailsList[2].price[0].show + '</span><span class="del">' + data[i]["list"][1]["stairsMain"][2]["mainNewH"][1].newHList[k].newHDetails[n].newHDetailsList[2].price[1].del + '</span></div></li>');

                    $(".stairsAll .stairs .main-newH .newH-list").eq(i).children(".newH-details").eq(k).append(oli);
                    if(n==3){
                        $(oli).css("borderBottom","none")
                    }

                }
            }
            /*---------------然后创建  下方热卖品牌-stairs-hotSell--------------*/
            var ul = $('<ul class="stairs-hotSell"><li class="text">' + data[i]["list"][2]["stairsHotSell"][0].text + '</li></ul>');
            $(".stairsAll .stairs").eq(i).append(ul);


            /*---------创建stairs-hotSell里边的li图片--------*/
            for (var j = 1; j < data[i]["list"][2]["stairsHotSell"].length; j++) {
                var li = $('<li class="stairs-hotSell-List"><a href=""><img src="' + data[i]["list"][2]["stairsHotSell"][j].stairsHotSellList[0]["stairsHotSellListImgSrc"] + '" alt=""></a></li>');

                $(".stairsAll .stairs .stairs-hotSell").eq(i).append(li);
            }




        }

        /*--------小轮播--new的存储-------必须等到全部加载完成之后才能new--*/
        var infant=new Stairs("#infant");
        var beauty=new Stairs("#beauty");
        var costume=new Stairs("#costume");
        var health=new Stairs("#health");
        var care=new Stairs("#care");
        var overSeas=new Stairs("#overSeas");
        var digital=new Stairs("#digital");
        var global=new Stairs("#global");
    }

});

/*--------小轮播-------*/
function Stairs(id) {
    this.Stairs=$(id);
    this.newH_index=0;
    this.newHTimer;
    this.controlList=$(".controlsList",this.stairs);
    this.handle();
}

/*--------小轮播的原型链-------*/
Stairs.prototype={
    /*----------处理程序--------*/
    handle:function(){
        var that=this;
        move();
        function move() {
            that.newHTimer=setInterval(function () {
                that.newH_index++;
                if( that.newH_index>2){
                    that.newH_index=0;
                }
                $(".newH-list>ul", that.Stairs).eq(that.newH_index).stop().fadeIn(100).siblings().stop().fadeOut(100);
                $(".controlList li", that.Stairs).eq(that.newH_index).addClass("active").siblings().removeClass("active");
            },2000);
        }
        $(".stairs-main .main-newH .controlList li", that.Stairs).on("mouseover",function () {
            that.newH_index=$(this).index();
            $(this).addClass("active").siblings().removeClass("active");
            $(".newH-list>ul", that.Stairs).eq(that.newH_index).stop().fadeIn(100).siblings().stop().fadeOut(100);
        });
        $(".main-newH", that.Stairs).on("mouseenter",function () {
            clearInterval(that.newHTimer)
        });
        $(".main-newH", that.Stairs).on("mouseleave",function () {
            move()
        });
    }
};

/*-----------吸顶菜单--------------*/

$(window).scroll(function () {
    var scrollHeight=$(window).scrollTop();
    if(scrollHeight>300){
        $("#absorb-top").css({
            display:"block",
            position:"fixed",
            top:0,
            zIndex:999
        });
        $(".stairsList").show(400);
        $(".fixedRight").show(400);
    }else{
        $("#absorb-top").css({
            display:"none"
        });
        $(".stairsList").hide(400);
        $(".fixedRight").hide(400);
    }

    var oHeight=$(window).scrollTop();   //滚动条的距离
    var oClientHeight = $(window).height()/2;   //屏幕可视高度距离的一半
    $(".stairsAll .stairs").each(function (a,b) {
        var nowHeight=$(b).offset().top;    //当前楼层距离顶部的距离
        var A=Number(a+4);
        if(oClientHeight+oHeight>=nowHeight){   // 当前楼层的距离
            $(".oList li").eq(A).css("background","black").siblings().css("background","#fff");
            $(".oList li").eq(A).children("a").css("color","#E31436");
            $(".oList li").eq(A).siblings().children("a").css("color","#333");
        }else{
            $(".oList li").eq(A).css("background","#fff");
            $(".oList li").eq(A).children("a").css("color","#333");
            return false;
        }
    })
});


/*--------------右侧固定栏-------------*/
$(".fixedRight .signIn").on("mouseenter",function () {
    $(this).css("background","#f6f6f6");
    $(this).children(".iconfont").css("color","red");
    $(this).children(".text").children("a").css("color","red");
    $(this).children(".every").css("display","block");
});
$(".fixedRight .signIn").on("mouseleave",function () {
    $(this).css("background","#fff");
    $(this).children(".iconfont").css("color","#999999");
    $(this).children(".text").children("a").css("color","#999999");
    $(this).children(".every").css("display","none");
});
$(".fixedRight .shopCart").on("mouseenter",function () {
    $(this).css("background","#f6f6f6");
    $(this).children(".iconfont").css("color","red");
    $(this).children(".text").children("a").css("color","red");
});
$(".fixedRight .shopCart").on("mouseleave",function () {
    $(this).css("background","#fff");
    $(this).children(".iconfont").css("color","#999999");
    $(this).children(".text").children("a").css("color","#999999");
});
$(".fixedRight .APP").on("mouseenter",function () {
    $(this).css("background","#f6f6f6");
    $(this).children(".iconfont").css("color","red");
    $(this).children(".text").children("a").css("color","red");
    $(this).children(".A-app").css("display","block");
});
$(".fixedRight .APP").on("mouseleave",function () {
    $(this).css("background","#fff");
    $(this).children(".iconfont").css("color","#999999");
    $(this).children(".text").children("a").css("color","#999999");
    $(this).children(".A-app").css("display","none");
});
$(".top").hover(function () {
    $(this).children(".iconfont").css("color","red");
    $(this).children(".text").children("a").css("color","red");
},function () {
    $(this).children(".iconfont").css("color","#fff");
    $(this).children(".text").children("a").css("color","#fff");
});
$(".top").click(function () {
    $("html,body").animate({
        scrollTop:0
    },600)
});



/*----------------左侧楼梯----------------*/
$(".stairsList li:not(.full,.last)").on("mouseenter",function () {
    $(this).children("a").css("color","#E31436");
    $(this).css("background","black")
});
$(".stairsList li").on("mouseleave",function () {
    $(this).children("a").css("color","#333");
    $(this).css("background","#fff")
});


var newTop;
var flag=true;
if(flag){
    $(".stairsList").on("click","li:not(.last)",function () {
        flag=false;
        var index=$(this).index()-4;
        if(index==-1){
            newTop=$(".homeList").eq(2).offset().top-120;
        }else if(index==-2){
            newTop=$(".homeList").eq(1).offset().top-120;
        }else if(index==-3){
            newTop=$(".homeList").eq(0).offset().top-120;
        }else{
            newTop=$(".stairsAll .stairs").eq(index).offset().top-100;
        }
        $("html,body").stop(true,false).animate({
            scrollTop:newTop
        },400,function () {
            flag=true;
        })

    });
}

/*----------------全球年货节yearGoods------------------*/

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
    var rd=$('<a href="http://localhost/My_project/html/login.html">'+'退出'+'</a>');
    $(".topNavLeft-register").append(rd);
}else{
    console.log(11111);
    //不存在管理员
    $(".topNavLeft-login").html("");
    var oAd=$('<a href="http://localhost/My_project/html/login.html">登录</a>');
    $(".topNavLeft-login").append(oAd);

    $(".topNavLeft-register").html("");
    var oRd=$('<a href="http://localhost/My_project/html/register.html">免费注册</a>');
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