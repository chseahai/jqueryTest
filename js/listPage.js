/**
 * Created by Administrator on 2017/1/5 0005.
 */
/*-----------------------ajax获取轮播图内容-------------------*/
// var path="http://127.0.0.1/My_project/images/listPage/carousel/";
var path="http://localhost/My_project/images/listPage/carousel/";
var url="http://localhost/My_project/json/listPage/carousel.json";
// var url="http://127.0.0.1/My_project/json/listPage/carousel.json";
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
        if(ImgIndex>2){
            ImgIndex=0;
        }
        $(".ImgList div img").eq(ImgIndex).stop(true,false).fadeIn(100).parent().parent().siblings().children().children().stop(true,false).fadeOut(100);
        $(".controlsList li").eq(ImgIndex).addClass("active").siblings().removeClass("active");
    });
    $(".btnLeft").on("click",function () {
        ImgIndex--;
        if(ImgIndex<0){
            ImgIndex=2;
        }
        $(".ImgList div img").eq(ImgIndex).fadeIn(100).parent().parent().siblings().children().children().fadeOut(100);
        $(".controlsList li").eq(ImgIndex).addClass("active").siblings().removeClass("active");
    });
    /*----------------controlsList控制图片出现消失--------------------*/
    $(".controlsList").on("mouseover","li",function () {
        ImgIndex=$(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $(".ImgList div img").eq(ImgIndex).fadeIn(10).parent().parent().siblings().children().children().fadeOut(10);
    })
}


/*------------------热门大牌----------------------*/
var HotUrl="../json/listPage/Hot.json";
$.ajax({
    url:HotUrl,
    type:"GET",
    success:function (data) {
        var showList=template("showList",data[0]);
        $(".ListBox").html(showList);
        $(".hotNav .oli").on("mouseenter",function () {
            var index=$(this).index();
            $(this).children("em").addClass("active");
            $(this).siblings().children("em").removeClass("active");
            var showList=template("showList",data[index]);
            $(".ListBox").html(showList);
            $(".hot-major .detailsList").on("mouseenter",function () {
                $(this).find(".moveBox").stop().animate({
                    top:-36
                },200)
            });
            $(".hot-major .ListBox .detailsList").on("mouseleave",function () {
                $(this).find(".moveBox").stop().animate({
                    top:0
                },200)
            });
        });
        $(".hot-major .detailsList").on("mouseenter",function () {
            $(this).find(".moveBox").stop().animate({
                top:-36
            },200)
        });
        $(".hot-major .ListBox .detailsList").on("mouseleave",function () {
            $(this).find(".moveBox").stop().animate({
                top:0
            },200)
        });
    }
});

/*------------------生活家电----------------------*/
$.ajax({
    url:"../json/listPage/Life.json",
    type:"GET",
    success:function (data) {
        var lifeShow=template("lifeShow",data[0]);
        $(".lifeBox").html(lifeShow);
        checkProperty(data,0,".lifeBox");
        $(".lifeNav .lifeLi").on("mouseenter",function () {
            var index=$(this).index();
            $(this).children("em").addClass("active");
            $(this).siblings().children("em").removeClass("active");
            var lifeShow=template("lifeShow",data[index]);
            $(".lifeBox").html(lifeShow);

           checkProperty(data,index,".lifeBox");
            $(".lifeBox .details ").on("mouseenter",function () {
                $(this).find(".evaluate").css("display","block");
                $(this).siblings().find(".evaluate").css("display","none");
                /*不需要这么麻烦，直接让他轮播一遍就行了*/
                $(this).find(".dis-main").stop().animate({
                    left:-800
                },10000)
            });

            $(".lifeBox .details ").on("mouseleave",function () {
                $(".details .evaluate").css("display","none");
            });
        });
        $(".lifeBox .details ").on("mouseenter",function () {
            $(this).find(".evaluate").css("display","block");
            $(this).siblings().find(".evaluate").css("display","none");
            /*不需要这么麻烦，直接让他轮播一遍就行了*/
            $(this).find(".dis-main").stop().animate({
               left:-800
            },20000)
        });
        $(".lifeBox .details ").on("mouseleave",function () {
            $(".details .evaluate").css("display","none");
        });
    }
});


/*------------------厨房电器----------------------*/
$.ajax({
    url:"../json/listPage/kitchen.json",
    type:"GET",
    success:function (data) {
        var showKit=template("showKit",data[0]);
        $(".kitBox").html(showKit);
        checkProperty(data,0,".kitBox");
        $(".kitNav .kitLi").on("mouseenter",function () {
            var index=$(this).index();
            $(this).children("em").addClass("active");
            $(this).siblings().children("em").removeClass("active");
            var showKit=template("showKit",data[index]);
            $(".kitBox").html(showKit);
            checkProperty(data,index,".kitBox");
            $(".kitBox .details ").on("mouseenter",function () {
                $(this).find(".evaluate").css("display","block");
                $(this).siblings().find(".evaluate").css("display","none");
                /*不需要这么麻烦，直接让他轮播一遍就行了*/
                $(this).find(".dis-main").stop().animate({
                    left:-800
                },20000)
            });
            $(".kitBox .details ").on("mouseleave",function () {
                $(".details .evaluate").css("display","none");
            });
        });
        $(".kitBox .details ").on("mouseenter",function () {
            $(this).find(".evaluate").css("display","block");
            $(this).siblings().find(".evaluate").css("display","none");
            /*不需要这么麻烦，直接让他轮播一遍就行了*/
            $(this).find(".dis-main").stop().animate({
                left:-800
            },20000)
        });
        $(".kitBox .details ").on("mouseleave",function () {
            $(".details .evaluate").css("display","none");
        });
    }
});


/*------------------手机数码----------------------*/
$.ajax({
    url:"../json/listPage/phone.json?data="+Math.random(),
    type:"GET",
    success:function (data) {
        var showPhone=template("showPhone",data[0]);
        $(".PhoneBox").html(showPhone);
        checkProperty(data,0,".PhoneBox");
        $(".PhoneNav .phoneLi").on("mouseenter",function () {
            var index=$(this).index();
            $(this).children("em").addClass("active");
            $(this).siblings().children("em").removeClass("active");
            var showPhone=template("showPhone",data[index]);
            $(".PhoneBox").html(showPhone);
            checkProperty(data,index,".PhoneBox");
            $(".PhoneBox .details ").on("mouseenter",function () {
                $(this).find(".evaluate").css("display","block");
                $(this).siblings().find(".evaluate").css("display","none");
                /*不需要这么麻烦，直接让他轮播一遍就行了*/
                $(this).find(".dis-main").stop().animate({
                    left:-800
                },20000)
            });
            $(".PhoneBox .details ").on("mouseleave",function () {
                $(".details .evaluate").css("display","none");
            });
        });
        $(".PhoneBox .details ").on("mouseenter",function () {
            $(this).find(".evaluate").css("display","block");
            $(this).siblings().find(".evaluate").css("display","none");
            /*不需要这么麻烦，直接让他轮播一遍就行了*/
            $(this).find(".dis-main").stop().animate({
                left:-800
            },20000)
        });
        $(".PhoneBox .details ").on("mouseleave",function () {
            $(".details .evaluate").css("display","none");
        });

        $(".navList ").on("click",".details",function(){
            var pid = $(this).attr("pid");
            location.href = "details.php?pid="+pid;
        })


    }

});


/*------------------美体仪器----------------------*/
$.ajax({
    url:"../json/listPage/beauty.json",
    type:"GET",
    success:function (data) {
        var showBeauty=template("showBeauty",data[0]);
        $(".beautyBox").html(showBeauty);
        checkProperty(data,0,".beautyBox");
        $(".beautyNav .beautyLi").on("mouseenter",function () {
            var index=$(this).index();
            $(this).children("em").addClass("active");
            $(this).siblings().children("em").removeClass("active");
            var showBeauty=template("showBeauty",data[index]);
            $(".beautyBox").html(showBeauty);
            checkProperty(data,index,".beautyBox");
            $(".beautyBox .details ").on("mouseenter",function () {
                $(this).find(".evaluate").css("display","block");
                $(this).siblings().find(".evaluate").css("display","none");
                /*不需要这么麻烦，直接让他轮播一遍就行了*/
                $(this).find(".dis-main").stop().animate({
                    left:-800
                },20000)
            });
            $(".beautyBox .details ").on("mouseleave",function () {
                $(".details .evaluate").css("display","none");
            });
        });
        $(".beautyBox .details ").on("mouseenter",function () {
            $(this).find(".evaluate").css("display","block");
            $(this).siblings().find(".evaluate").css("display","none");
            /*不需要这么麻烦，直接让他轮播一遍就行了*/
            $(this).find(".dis-main").stop().animate({
                left:-800
            },20000)
        });
        $(".beautyBox .details ").on("mouseleave",function () {
            $(".details .evaluate").css("display","none");
        });
    }
});

/*------------------办公用品----------------------*/
$.ajax({
    url:"../json/listPage/office.json",
    type:"GET",
    success:function (data) {
        var showOffice=template("showOffice",data[0]);
        $(".officeBox").html(showOffice);
        checkProperty(data,0,".officeBox");
        $(".officeNav .officeLi").on("mouseenter",function () {
            var index=$(this).index();
            $(this).children("em").addClass("active");
            $(this).siblings().children("em").removeClass("active");
            var showOffice=template("showOffice",data[index]);
            $(".officeBox").html(showOffice);
            checkProperty(data,index,".officeBox");
            $(".officeBox .details ").on("mouseenter",function () {
                $(this).find(".evaluate").css("display","block");
                $(this).siblings().find(".evaluate").css("display","none");
                /*不需要这么麻烦，直接让他轮播一遍就行了*/
                $(this).find(".dis-main").stop().animate({
                    left:-800
                },20000)
            });
            $(".officeBox .details ").on("mouseleave",function () {
                $(".details .evaluate").css("display","none");
            });
        });
        $(".officeBox .details ").on("mouseenter",function () {
            $(this).find(".evaluate").css("display","block");
            $(this).siblings().find(".evaluate").css("display","none");
            /*不需要这么麻烦，直接让他轮播一遍就行了*/
            $(this).find(".dis-main").stop().animate({
                left:-800
            },20000)
        });
        $(".officeBox .details ").on("mouseleave",function () {
            $(".details .evaluate").css("display","none");
        });
    }
});

/*------------------右侧固定栏----------------------*/
$(window).scroll(function () {
    var oHeight=$(window).scrollTop();   //滚动条的距离
    var clientHeight=$(window).height();   //屏幕可视高度
    if(oHeight>=clientHeight){
        $(".fixedRight").fadeIn(400)
    }else{
        $(".fixedRight").fadeOut(400)
    }
});

var newTop;
var flag=true;
if(flag){
    $(".list-controls").on("click","li:not(.list-top,.list-cart)",function () {
        flag=false;
        var index=$(this).index();
        if(index==1){
            newTop=$(".lifeHousehold").offset().top;
        }else if(index==2){
            newTop=$(".kitchen").offset().top;
        }else if(index==3){
            newTop=$(".phone-numerical").offset().top;
        }else if(index==4){
            newTop=$(".beauty").offset().top;
        }else if(index==5){
            newTop=$(".office-tool").offset().top;
        }
        $("html,body").stop(true,false).animate({
            scrollTop:newTop
        },0,function () {
            flag=true;
        })

    });
}
$(".list-top").click(function () {
    $("html,body").stop(true,false).animate({
        scrollTop:0
    },0,function () {
        flag=true;
    })
});



/*--------------------封装方法，判断属性----------------------*/
function checkProperty(Data,index,Element) {
    for(var i=0;i<Data[index].List.length;i++){
        if(Data[index].List[i].mar==undefined){
            $(Element+" .details ").eq(i).find(".evaluate").css({
                top:212,
                height:32
            })
        }
    }
}


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


$(".navList ").on("click",".details",function(){
    var pid = $(this).attr("pid");
    location.href = "details.php?pid="+pid;
})