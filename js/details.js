
$(function () {
    /*----------------城市三级联动---------*/
    $("#city").click(function (e) {
        SelCity(this,e);
        console.log("inout",$(this).val(),new Date())
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
        },10)
    });

    /*---------------切换图片----------*/
    var path="http://localhost//My_project/images/details/phone/";
    // var path="http://127.0.0.1/My_project/images/details/phone/";
    // var url="http://127.0.0.1/My_project/json/details/test.json";
    var url="http://localhost//My_project/json/details/test.json";
    var pid=$("#getGoods").val();
    $.ajax({
        url:url,
        type:"GET",
        success:function (data) {
            console.log(data.length);
            /*-------------创建Dom节点---------------*/
            createDom(data);


            /*-------------替换图片---------------*/
            handleDom()
        }
    });

    /*---------------------根据数据创建dom节点和切换图片------------------------*/
    function createDom(arr) {
        for(var i=0;i<arr.length;i++){
            /*如果找到的pid和这个商品pid是一致的话就加在这个商品的数据*/
            if(pid==arr[i].pid){
                /* ------------左边下标切换的图片-------------------*/
                var newData=arr[i].details[0].imgSrc[0].smallImg;
                var newData01=arr[i].details[0].imgSrc[0].showImg;
                var newData001=arr[i].details[0].imgSrc[0].bigImg;
                for(var j=0;j<newData.length;j++){
                    var li=$('<li><img src="'+path+newData[j]+'" alt=""></li>');
                    $(".wrapImg .imgList").append(li);
                }
                /*---------------默认显示第一张----------------------*/
                var smallImg=$('<img src="'+path+newData01[0]+'" alt="">');
                var bigImg=$('<img src="'+path+newData001[0]+'" alt="">');
                $(".saveImg").append(smallImg);
                $(".bigShow").append(bigImg);

                /*---------------显示和放大图片的切换----------------------*/
                $(".imgList li").on("mouseenter",function () {
                    var index=($(this).index());
                    $(".saveImg img")[0].src=path+newData01[index];
                    $(".bigShow img")[0].src=path+newData001[index];
                });


                /*---------------国家-------------------*/
                var oCountry=$('<img src="'+arr[i].details[1]["details-main"][0].country[0]["c-img"]+'" alt="" class="c-img">'+'<span class="from">'+arr[i].details[1]["details-main"][0].country[1]["from"]+'</span>'+
                    '<span class="split">|</span>'+'<a href="" class="name">'+arr[i].details[1]["details-main"][0].country[2]["name"]+'</a>'+
                    '<img src="../images/details/test/ziying.png" alt="" class="self">');
                $(".country").append(oCountry);
               $(".pDesc").html(arr[i].details[1]["details-main"][1].desc);

                /*---------------价格-------------------*/
                var price=arr[i].details[1]["details-main"][4]["m-price"][0].show;
                var oPrice=$('<span class="show">'+arr[i].details[1]["details-main"][4]["m-price"][0].show+'</span>'+
                   '<strong>'+arr[i].details[1]["details-main"][4]["m-price"][1].showNow+'</strong>'+
                '<span class="discount">'+arr[i].details[1]["details-main"][4]["m-price"][2].discount+'</span>'+
                '<span class="refer"> '+arr[i].details[1]["details-main"][4]["m-price"][3].refer+'</span>');
                $(".m-price").append(oPrice);


                /*---------------try catch判断有没有这个数据------------*/
                // try{
                //     function isHas() {
                //         /*---------------有存储的话加载------------*/
                //         var saveData=arr[i].details[1]["details-main"][9]["save"];
                //         if(arr[i].details[1]["details-main"][9]["save"]){
                //             alert(1);
                //             var span=$('<span class="show">'+saveData[0].show+'</span><li class="details"></li>');
                //             $(".save").append(span);
                //             console.log(saveData.length);
                //             for(var i=1;i<saveData.length;i++){
                //                 var oA=$(' <a href="javascript:void(0)"><span>'+saveData[i]+'</span></a>');
                //                 oA.appendTo($(".details"))
                //             }
                //         }
                //
                // //为什么下边代码不能够被执行？？
                //         /* ------------右边颜色的图片  添加颜色-------------------*/
                //         console.log(arr[i].details[1]["details-main"][9]["save"]);
                //         // var colorData=arr[i].details[1]["details-main"][10]["choose-color"];
                //         /*---------------有颜色的话加载------------*/
                //         if(arr[i].details[1]["details-main"][10]["choose-color"]){
                //             alert(2);
                //             var colorMain=$('<span class="show">颜色</span><ul class="chooseImg"></ul>');
                //             $(".choose-color").append(colorMain);
                //             for(var i=0;i<colorData.length;i++){
                //                 var oli=$('<li class="list"><img src="'+path+newData[i]+'" alt="'+colorData[i]+'"></li>');   //右侧小盒子
                //                 $(".chooseImg").append(oli);
                //             }
                //             var liLast=$('<li class="last">已选择</li>');
                //             liLast.appendTo($(".chooseImg"));
                //             var strShow=$('<li class="show-c"></li>');
                //             strShow.appendTo($(".chooseImg"));
                //         }
                //
                //
                //     }
                //
                //     isHas()
                //
                //
                //
                // }catch(err){
                //
                // }









            }


        }


    }

    /*-------------------------------创建完Dom节点后的操作-------------------------------------*/
    function handleDom() {


        /*----------放大图片的显示隐藏------------*/
        $(".imgBox").hover(function () {
            $(".bigShow").css("display","block");
            $(".moveBox").css("display","block");
        },function () {
            $(".bigShow").css("display","none");
            $(".moveBox").css("display","none");
        });

        /*--------------按钮的切换----------*/
        var oLeft=$(".imgList")[0].offsetLeft;
        var imgWidth=80;
        var index=0;
        $(".btn-right").click(function () {
            index++;
            if(index>2){   //这里应该换成图片的个数-x=4（显示的个数）
                index=2;
                return;
            }
            $(".imgList").stop().animate({
                left:oLeft-imgWidth*index
            })
        });
        $(".btn-left").click(function () {
            index--;
            if(index<0){
                index=0;
                return;
            }
            $(".imgList").stop().animate({
                left:oLeft-imgWidth*index
            })
        });

        /*---------------小盒子的移动moveBox----------*/

        $(".imgBox").mousemove(function (e) {
            //被卷去的文档 的宽高
            var _e=window.event||e;
            var oC_left=$(document).scrollLeft();   //获取滚动条的top left值
            var  oC_top=$(document).scrollTop();

            /*------兼容ie------*/
            var pageX=oC_left+_e.clientX;
            var pageY=oC_top+_e.clientY;
            var moveX=pageX-$(".imgBox")[0].offsetLeft-$(".moveBox").width()/2;
            var moveY=pageY-$(".imgBox")[0].offsetTop-$(".moveBox").height()*2;

            if(moveX<0){
                moveX=0;
            }
            if(moveX>$(".imgBox").width()-$(".moveBox").width()){
                moveX=$(".imgBox").width()-$(".moveBox").width()
            }
            if(moveY<0){
                moveY=0;
            }
            if(moveY>$(".imgBox").height()-$(".moveBox").height()){
                moveY=$(".imgBox").height()-$(".moveBox").height()
            }
            $(".moveBox").css({
                left:moveX,
                top:moveY
            });
            $(".bigShow img").css({
                left:-moveX*2,
                top:-moveY*2
            })
        });


        /*-----------------点击按钮颜色的选中-------------------*/
        $(".chooseImg .list").on("click",function () {
            // var newImgSrc=$(this).find("img").attr("src");
            // console.log(newImgSrc)
            // $(".saveImg img")[0].src=newImgSrc;
            $(this).css({
                opacity:1,
                border:"2px solid #c52613"
            });
            $(this).siblings(".list").css({
                opacity:0.3,
                border:"1px dotted #C5C5C5"
            });
            var colorStr=$(this).find("img").attr("alt");
            console.log(colorStr);
            $(this).siblings(".show-c").html(colorStr);
        });
        $(".chooseImg .list").hover(function () {
            $(this).css({
                opacity: 1,
                border:"1px dotted #c52613"
            })
        },function () {
            $(this).css({
                opacity: 0.3,
                border:"1px dotted #C5C5C5"
            })
        });


        $(".dis").click(function () {
            $(this).find(".line").addClass("active"); $(this).siblings().find(".line").removeClass("active");
            $(".details-Contain").css({
                "display":"none"
            });
            $(".desc-Contain").css({
                "display":"block",
                top:0
            });
        });
        $(".de-left .details").click(function () {
            $(this).find(".line").addClass("active"); $(this).siblings().find(".line").removeClass("active");
            $(".details-Contain").css("display","block");
            $(".desc-Contain").css("display","none");
        });
        $(".save .details a").on("click",function () {
            $(this).css("border","1px dotted red").siblings().css("border","1px solid #ccc")
        })

    }

    $(".free p").hover(function () {
        $(".free .desc").css("display","block");
        $(".free .hide").css("display","none");
        $(".free .open").css("display","block");
    },function () {
        $(".free .desc").css("display","none");
        $(".free .hide").css("display","block");
        $(".free .open").css("display","none");
    });
    $(".num-cho .reduce").click(function () {
        var num=Number($(".num-cho  .num").html());
        num--;
        if(num<1){
            num=1;
            return;
        }
        $(".num-cho  .num").html(num)
    });
    $(".num-cho .add").click(function () {
        var num=Number($(".num-cho  .num").html());
        num++;
        if(num>5){
            num=5;
            return;
        }
        $(".num-cho  .num").html(num)
    });


    /*------------------吸顶菜单------------------*/
    $(document).scroll(function () {
        var oScrollTop=$(document).scrollTop();
        if(oScrollTop>=1532){
            $(".see-top").css({
                "position":"fixed",
                "top":0,
                zIndex:999
            });
            $(".now-buy").css("display","block")
        }else{
            $(".see-top").css({
                "position":"relative",
                top:"1532"
            });
            $(".now-buy").css("display","none")
        }
    });

    $(".buy-phone").hover(function () {
        $(".buy-phone .imgBox").css("display","block")
    },function () {
        $(".buy-phone .imgBox").css("display","none")
    });

    //页面每次加载完成之后然后算一下购物车中有没有商品
    $(".total").html(getTotal());

    /*----------------------点击按钮 添加购物车---------------------------*/
    $(".colNow").click(function () {
        /*  pid 描述 颜色 尺码 店家  剩余数量         */
        var pid=$("#getGoods").val();    //商品的pid
        var isHas= isHasGoodsById(pid);



        if(isHas){
            //存在
            updateGoodCountById(pid,1)
        }else{
            var ImgSrc=$(".saveImg img")[0].src;
            console.log(ImgSrc);
            var pDesc=$(".pDesc").html();   //商品描述
            var price =$(".m-price strong").html();
            var oPrice=(price.slice(1)) ;    //商品价格
            var del=$(".m-price .refer").html();
            var oDel=(del.slice(8)) ;   //删除的价格 （参考价）

            var oHotel=$(".hotel").html();
            var Fh=(oHotel.slice(8)) ;    //店家名称

            console.log(pid+"---"+pDesc+"---"+oPrice+"-----"+oDel);
            var goods={
                pid:pid,
                ImgSrc:ImgSrc,
                oPrice:oPrice,
                oDel:oDel,
                pDesc:pDesc,
                count:1,
                Fh:Fh
            };
            addGoodToCar(goods);     //然后存进cookie中
        }
        $(".total").html(getTotal())
    });

    $(".fixedRight .shopCart .text").click(function () {
        location.href="shopCart.php";
    })

});









































