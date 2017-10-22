<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>网易考拉海购-网易旗下_正品低价_海外直采_海外直邮</title>
    <link rel="stylesheet" href="css/index.css">
    <link rel="stylesheet" href="css/footer.css">
</head>
<body>
	<?php
	//	@$un = $_GET["uName"];   // 100
		@$un=$_SESSION["uName"];
	?>
     <input type="hidden" id="uNp" value="<?php echo @$un; ?>"/>
<div id="wrap">
    <div class="year-top">
        <a href=""><img src="images/year.jpg" alt=""></a>
    </div>
    <!-----------------------顶部导航栏---------------------->
    <div id="topWrap">
        <div class="topNav">
            <ul class="topNavLeft">
                <li class="topNavLeft-welcome">考拉欢迎您！</li>
                <li class="topNavLeft-login"><a href="html/login.html">登录</a></li>
                <li class="topNavLeft-iconfont">|</li>
                <li class="topNavLeft-register"><a href="html/register.html">免费注册</a></li>
                <li class="topNavLeft-phone">
                    <a href=""><i class="iconfont">&#xe625;</i>手机考拉海购</a>
                    <div class="app">
                        <i class="iconfont">&#xe6af;</i>
                        <p><img src="images/index/topNav/app3.jpg" alt=""></p>
                        <strong class="value">
                            下载APP
                            <br/>
                            领1000元新人红包
                        </strong>
                    </div>
                </li>
            </ul>
            <ul class="topNavRight">
                <li class="topNavRight-day">
                    <a href="">每日签到</a>
                    <i class="iconfont">&#xe694;</i>
                </li>
                <li class="order"><a href="">我的订单</a></li>
                <li class="topNavRight-person">
                    <a href="">个人中心</a>
                    <i class="iconfont">&#xe642;</i>
                    <ul class="client-List">
                        <li><a href="">我的优惠券</a></li>
                        <li class="line"><a href="">我的考拉豆</a></li>
                        <li><a href="">账户安全</a></li>
                        <li class="line"><a href="">我的实名认证</a></li>
                        <li><a href="">我收藏的商品</a></li>
                        <li class="line"><a href="">我关注的品牌</a></li>
                        <li><a href="">售后管理</a></li>
                    </ul>
                </li>
                <li class="topNavRight-client">
                    <a href="">客户服务</a>
                    <i class="iconfont">&#xe642;</i>
                    <ul class="client-List">
                        <li>
                            <a href="">联系客服</a>
                            <i class="iconfont">&#xe60f;</i>

                        </li>
                        <li>
                            <a href="">帮助中心</a>
                            <i class="iconfont">&#xe626;</i>

                        </li>
                    </ul>
                </li>
                <li class="topNavRight-buy">
                    <a href="">充值中心</a>
                    <i class="iconfont">&#xe642;</i>
                    <ul class="client-List">
                        <li><a href="">游戏充值</a></li>
                    </ul>
                </li>
                <li class="topNavRight-notice"><a href="">消费者告知书</a></li>
                <li class="topNavRight-more">
                    <a href="">更多</a>
                    <i class="iconfont">&#xe642;</i>
                    <ul class="client-List">
                        <li class="line"><a href="">收藏本站</a></li>
                        <li class="List-sina">
                            <a href="">新浪微博</a>
                        </li>
                        <li class="List-chat">
                            <a href="">微信公众号</a>
                        </li>
                        <li class="List-yx line">
                            <a href="">易信公众号</a>
                        </li>
                        <li class="line"><a href="">招商合作</a></li>
                        <li><a href="">考位招聘</a></li>
                    </ul>
                    <span class="collect-Img">
                          <!--存放图片-->
                         <img src="images/index/topNav/wb.jpg"  alt="1">
                         <img src="images/index/topNav/wx.jpg" alt="2">
                        <img src="images/index/topNav/yx.jpg" alt="3">
                         <p class="move-box">
                        <!--移动的小三角-->
                        <i class="iconfont">&#xe60a;</i>
                    </p>
                    </span>
                </li>
            </ul>
        </div>
    </div>
    <!-----------------------顶部搜索框---------------------->
    <div id="WrapTopSearch">
        <div class="topSearch">
            <div class="topLogo">
                <img src="images/index/topSearch/logo.png" alt="">
            </div>
            <div class="searchBox">
                <div class="search">
                    <div class="search-input">
                        <input type="text" placeholder="在千万海外商品中搜索">
                        <div class="showBaiDu"></div>
                    </div>
                    <p class="input-left">
                        <i class="iconfont">&#xe662;</i>
                    </p>
                    <p class="toSearchBtn">
                        <i class="iconfont">&#xe662;</i>
                    </p>
                </div>
                <div class="suggest">
                    <ul>
                        <li class="oLi"><a href="">麦片</a></li>
                        <li><a href="">马油</a></li>
                        <li><a href="">lamy</a></li>
                        <li><a href="">卫生巾</a></li>
                        <li><a href="">德运奶粉</a></li>
                    </ul>
                </div>
                <a class="shopCart" href="http://localhost/My_project/html/shopCart.php">
                    <i class="iconfont">&#xe604;</i>
                    <span>购物车</span>
                </a>
            </div>
        </div>
    </div>
    <!------------------------主体导航栏--------------------->
    <div id="topTabBox">
        <div class="topTab">
            <!--All-classify所有分类-->
            <div class="All-classify">
                <div class="tab-type">
                    <div class="icon">
                        <i></i>
                        <i></i>
                        <i></i>
                    </div>
                    <span>所有分类</span>
                </div>
                <!--tab-menu   左侧主菜单-->
                <ul class="tab-menu">

                </ul>
                <!--tab-menu-details 右侧详情菜单-->
                <div class="tab-menu-details">
                </div>
            </div>
            <ul class="Tab-details">
                <li  class="tab-type"><a href="http://localhost/My_project/index.php">首页</a></li>
                <li  class="tab-type"><a href="http://localhost/My_project/html/listPage.html">今日限时购</a></li>
                <li  class="tab-type"><a href="http://localhost/My_project/html/listPage.html">每日上新</a></li>
                <li  class="tab-type"><a href="http://localhost/My_project/html/listPage.html">国家馆</a></li>
                <li  class="tab-type"><a href="http://localhost/My_project/html/listPage.html">全球旗舰</a></li>
            </ul>
        </div>
        <!---------轮播图------------>
        <div class="carousel">
            <div class="ImgList">
                <!--图片内容-->
            </div>
            <div class="btns">
                <div class="btnLeft">&lt;</div>
                <div class="btnRight">&gt;</div>
            </div>
            <ul class="controlsList">
                <!--下标控制内容-->
            </ul>
        </div>
        <div class="sell-promise">
            <div class="sell-details">
                <a href="" class="quality">
                    <i class="iconfont">&#xe600;</i>
                    <p>100%正品</p>
                </a>
                <a href="" class="sell-days">
                    <i class="iconfont">&#xe60b;</i>
                    <p>30天无忧退货</p>
                </a>
                <a href="" class="Pinkage">
                    <i class="iconfont">&#xe60c;</i>
                    <p>满88包邮(部分特殊商品除外)</p>
                </a>
            </div>
            <a href="" class="sell-get">
                <i class="iconfont">&#xe625;</i>
                <span>领考拉1000元新人礼,APP下单更享手机价</span>
            </a>
        </div>
    </div>
    <div class="empty">
        <!--空白盒子-->
    </div>
    <!----------------------吸顶菜单------------------------------>
    <div class="absorb-top" id="absorb-top">
        <!--吸顶菜单-->
        <div class="topSearch">
            <div class="topLogo">
                <img src="//haitao.nos.netease.com/8005aa86318a450bb67a5844247987b6.png?imageView&thumbnail=162x0&quality=85&v=1) no-repeat" alt="">
            </div>
            <div class="searchBox">
                <div class="search">
                    <div class="search-input">
                        <input type="text" placeholder="在千万海外商品中搜索">
                        <div class="showBaiDu"></div>
                    </div>
                    <p class="input-left">
                        <i class="iconfont">&#xe662;</i>
                    </p>
                    <p class="toSearchBtn">
                        <i class="iconfont">&#xe662;</i>
                    </p>
                </div>
            </div>
        </div>
    </div>


    <!---------------------主体内容-------------------------------->
    <div id="wrapMain">
        <!--sliding door滑动门展示顶部-->
        <div class="showSliding">
            <ul class="sliding">
                <li>
                    <div class="desc"><h4>私物精选</h4></div>
                    <div><a href=""><img src="images/index/showSliding/1.jpg" alt=""></a></div>
                </li>
                <li>
                    <div class="desc"><h4>天天特价</h4></div>
                    <div><a href=""><img src="images/index/showSliding/2.jpg" alt=""></a></div>
                </li>
                <li>
                    <div class="desc"><h4>年度热销</h4></div>
                    <div><a href=""><img src="images/index/showSliding/3.jpg" alt=""></a></div>
                </li>
                <li>
                    <div class="desc"><h4>双旦尽享</h4></div>
                    <div><a href=""><img src="images/index/topTabBoxDetails/slide01.png" alt=""></a></div>
                </li><li>
                <div class="desc"><h4>年终盘点</h4></div>
                <div><a href=""><img src="images/index/topTabBoxDetails/slide02.png" alt=""></a></div>
            </li>
            </ul>
        </div>
        <div class="main-home">
            <div class="homeList">
                <h3 class="home-top">
                    <span class="title">今日限时购</span>
                    <span class="time">
                        <span>本场还剩</span>
                        <div class="showtime">
                            <strong></strong>
                            <strong></strong>
                            <strong></strong>
                            <strong></strong>
                            <strong></strong>
                            <strong></strong>
                             <strong></strong>
                            <strong></strong>
                        </div>
                    </span>
                    <a href="">进入限时购频道></a>
                </h3>
                <div class="home-details">
                    <ul class="home-List">
                        <script id="showGoods" type="text/html">
                            {{each List as contain i}}
                            <li class="goods">
                                <a href="" class="img"><img src="{{contain.imgSrc}}" alt="">
                                    <span>
                        <b>超级秒杀</b>
                        </span>
                                </a>
                                <div class="right">
                                    <a href="#" class="title">{{contain.title}}</a>
                                    <a href="#" class="desc">{{contain.desc}}</a>
                                    <p class="price">
                                        <span class="show">{{contain.show}}</span>
                                        <del class="del">{{contain.del}}</del>
                                    </p>
                                    <div class="purchase">
                                        <p class="text">
                                            {{contain.due}}
                                            <span style="width:{{contain.width}}"></span>
                                        </p>
                                        <a class="now-go" href="">立即抢购</a>
                                    </div>
                                </div>
                            </li>

                            {{/each}}
                        </script>
                    </ul>
                    <div class="home-goTo">
                        <a href=""><img src="images/index/showGoods/5.jpg" alt=""></a>
                    </div>
                </div>
            </div>
            <div class="homeList News">
                <h3 class="home-top news">
                    <span class="title">每日上新</span>
                    <span class="time">全世界好物，0点更新</span>
                    <a href="">进入新品频道></a>
                </h3>
                <ul class="news-details">

                </ul>
                <div class="home-goTo">
                    <a href=""><img src="images/index/showNews/5.jpg" alt=""></a>
                </div>
            </div>
            <div class="homeList Hot">
                <h3 class="home-top">
                    <span class="title">热门品牌</span>
                    <span class="time">全球精选，一网打尽</span>
                </h3>
                <ul class="HotList">
                    <li>
                        <a href="">
                            <img src="images/index/showHot/1.jpg" alt="">
                            <img class="smallImg" src="images/index/showHot/01.jpg" alt="">
                            <h3>RASTAR 星辉</h3>
                            <p>经典国货玩具品牌</p>
                        </a>

                    </li>
                    <li>
                        <a href="">
                            <img src="images/index/showHot/2.jpg" alt="">
                            <img class="smallImg" src="images/index/showHot/02.jpg" alt="">
                            <h3>CHANEL 香奈儿</h3>
                            <p>把高雅时尚带给每个人</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="images/index/showHot/3.jpg" alt="">
                            <img class="smallImg" src="images/index/showHot/03.jpg" alt="">
                            <h3>Tangle ANGEL</h3>
                            <p>有翘臀蝴蝶骨的颜值梳</p>
                        </a>
                    </li>
                    <li>
                        <a href=""><img src="images/index/showHot/4.jpg" alt="" class="HotImg"></a>
                    </li>
                </ul>
            </div>
        </div>
        <!--然后是模板加载11项楼梯-->
        <div class="stairsAll">

        </div>
    </div>
    <!-----------------stairsList   固定的楼梯---------------------->
    <div class="stairsList">
        <ul class="oList">
            <li class="full"><a href=""><img src="images/index/stairsList/01.jpg" alt=""></a></li>
            <li class="Time"><a href="javascript:void(0)">今日限时购</a></li>
            <li class="New"><a href="javascript:void(0)">每日上新</a></li>
            <li class="Hot"><a href="javascript:void(0)">热门品牌</a></li>
            <li  class="list"><a href="javascript:void(0)">母婴专区</a></li>
            <li  class="list"><a href="javascript:void(0)">美容彩妆</a></li>
            <li  class="list"><a href="javascript:void(0)">服饰鞋包</a></li>
            <li  class="list"><a href="javascript:void(0)">家居个护</a></li>
            <li  class="list"><a href="javascript:void(0)">营养保健</a></li>
            <li  class="list"><a href="javascript:void(0)">海外直邮</a></li>
            <li  class="list"><a href="javascript:void(0)">数码家电</a></li>
            <li  class="list"><a href="javascript:void(0)">环球美食</a></li>
            <li class="last"><a href="javascript:void(0)"><img src="images/index/stairsList/app.jpg" alt=""></a></li>
        </ul>
    </div>
    <!------------------右侧固定栏--------------------------------->
    <div class="fixedRight">
        <ul class="RightList">
            <li class="signIn">
                <i class="iconfont">&#xe61e;</i>
                <span class="text"><a href="javascript:void(0)">签到</a></span>
                <a class="every">
                    每日签到<br/>
                    赢考拉豆
                    <i class="iconfont">&#xe60a;</i>
                </a>
            </li>
            <li class="shopCart">
                <i class="iconfont">&#xe607;</i>
                <span class="text"><a href="http://localhost/My_project/html/shopCart.php">购物车</a></span>
            </li>
            <li class="APP">
                <i class="iconfont">&#xe625;</i>
                <span class="text"><a href="javascript:void(0)">APP</a></span>
                <img class="A-app" src="images/index/stairsList/fixedApp.png" alt="">
            </li>
            <li class="top">
                <i class="iconfont">&#xe6af;</i>
                <span class="text"><a href="javascript:void(0)">TOP</a></span>
            </li>
        </ul>
    </div>
    <!---------------------猜你喜欢------------------------------->
    <div class="think-like">
        <h3 class="home-top">
            <span class="title">猜你喜欢</span>
            <span class="desc">根据你的浏览记录推荐的商品</span>
        </h3>
        <ul class="like-details">
            <li class="list">
                <a href=""><img src="images/index/thinkLike/01.jpg" alt=""></a>
                <a class="write" href="">
                    <span class="page"></span>
                    <span class="desc">Aveeno 艾维诺 婴儿天然燕麦滋润保湿润肤乳 226克</span>
                </a>
                <span class="save">98元任选2件，136元任选3件</span>
                <div class="price">
                    <span class="show"><span class="symbol">￥</span>58</span>
                    <del class="del"><span class="symbol">￥</span>88</del>
                    <span class="eva"><a href="">3877人已评价</a></span>
                </div>
            </li>
            <li class="list">
                <a href=""><img src="images/index/thinkLike/02.jpg" alt=""></a>
                <a class="write" href="">
                    <span class="page">2件装 |</span>
                    <span class="desc"> Devondale 德运 高钙脱脂成人牛奶粉 1000克/袋 2袋 </span>
                </a>
                <span class="save">立省4元</span>
                <div class="price">
                    <span class="show"><span class="symbol">￥</span>95</span>
                    <del class="del"><span class="symbol">￥</span>159</del>
                    <span class="eva"><a href="">21589人已评价</a></span>
                </div>
            </li>
            <li class="list">
                <a href=""><img src="images/index/thinkLike/03.jpg" alt=""></a>
                <a class="write" href="">
                    <span class="page">2包装 | </span>
                    <span class="desc">【官方直采】Merries 花王妙而舒 L 54片/包 2包装 纸尿裤/尿不湿 </span>
                </a>
                <span class="save">立省120元</span>
                <div class="price">
                    <span class="show"><span class="symbol">￥</span>190</span>
                    <del class="del"><span class="symbol">￥</span>399</del>
                    <span class="eva"><a href="">29183人已评价</a></span>
                </div>
            </li>
            <li class="list last">
                <a href=""><img src="images/index/thinkLike/04.jpg" alt=""></a>
                <a class="write" href="">
                    <span class="page">2件装 |</span>
                    <span class="desc"> DHC 蝶翠诗 纯榄润唇膏 1.5克/支 2支装</span>
                </a>
                <span class="save">立省13元</span>
                <div class="price">
                    <span class="show"><span class="symbol">￥</span>86</span>
                    <del class="del"><span class="symbol">￥</span>138</del>
                    <span class="eva"><a href="">10927人已评价</a></span>
                </div>
            </li>
        </ul>
    </div>
    <!-----------------全球年货节--------------------------->
    <div class="yearGoods">
        <a href="" class="Goods-left">全球年货节
            <i class="line-top"></i>
            <i class="line-bottom"></i>
        </a>
        <div class="Goods-main">
            <ul class="Goods-top">
                <li class="oColor"><a href="">年货好礼</a></li>
                <li class="oColor"><a href="">量版</a></li>
                <li class="oColor"><a href="">包税</a></li>
                <li class="oColor"><a href="">满减</a></li>
                <li class="oColor"><a href="">任选</a></li>
                <li><a href="">纸尿裤</a></li>
                <li><a href="">奶粉</a></li>
                <li><a href="">母婴</a></li>
                <li><a href="">美容彩妆</a></li>
                <li><a href="">箱包鞋饰</a></li>
            </ul>
            <div class="line"></div>
            <ul class="Goods-bottom">
                <li><a href="">营养保健</a></li>
                <li><a href="">海外直邮</a></li>
                <li><a href="">服饰运动</a></li>
                <li><a href="">个人洗护</a></li>
                <li><a href="">家居生活</a></li>
                <li><a href="">环球美食</a></li>
                <li><a href="">数码家电</a></li>
                <li><a href="">网易严选</a></li>
                <li><a href="">水果生鲜</a></li>
                <li><a href="">全球旗舰</a></li>
            </ul>
        </div>

        <a href="javascript:void(0)" class="Goods-right">
            <i class="line-top"></i>
            <i class="line-bottom"></i>
            <i class="iconfont hide">&#xe858;</i>
            <i class="iconfont show">&#xe859;</i>
        </a>
    </div>

    <!-----------------load加载footer底部--------------------------->
    <div id="footer">

    </div>
</div>
<script src="library/jquery-1.9.1.min.js"></script>
<script src="library/template.js"></script>
<script src="js/index.js"></script>
<script>
    $("#footer").load("txt/footer.txt");
</script>
</body>
</html>