<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>购物车-网易考拉海购</title>
    <link rel="stylesheet" href="../css/shopCart.css">
    <link rel="stylesheet" href="../css/footer.css">
</head>
<body>
<?php
    	@$un=$_SESSION["uName"];
?>
<input type="hidden" id="uNp" value="<?php echo @$un; ?>"/>
<div id="shopCart-wrap">
    <div class="year-top">
        <a href=""><img src="../images/year.jpg" alt=""></a>
    </div>
    <!-----------顶部导航栏------------------>
    <div id="topWrap">
        <div class="topNav">
            <ul class="topNavLeft">
                <li class="topNavLeft-welcome">考拉欢迎您！</li>
                <li class="topNavLeft-login"><a href="login.html">登录</a></li>
                <li class="topNavLeft-iconfont">|</li>
                <li class="topNavLeft-register"><a href="register.html">免费注册</a></li>
                <li class="topNavLeft-phone">
                    <a href=""><i class="iconfont">&#xe625;</i>手机考拉海购</a>
                    <div class="app">
                        <i class="iconfont">&#xe6af;</i>
                        <p><img src="../images/index/topNav/app3.jpg" alt=""></p>
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
                         <img src="../images/index/topNav/wb.jpg"  alt="1">
                         <img src="../images/index/topNav/wx.jpg" alt="2">
                        <img src="../images/index/topNav/yx.jpg" alt="3">
                         <p class="move-box">
                        <!--移动的小三角-->
                        <i class="iconfont">&#xe60a;</i>
                    </p>
                    </span>
                </li>
            </ul>
        </div>
    </div>
    <div class="logo">
        <a href="../index.php"> <img src="../images/index/topSearch/logo.png" alt=""></a>
    </div>

    <!------------------我的购物车详情------------------->
    <div id="shopCart-main">
        <h4 class="myCart">
            我的购物车
            <span class="total">0</span>
            <span class="tip">
                    <i class="iconfont">&#xe866;</i>
                    考拉自营商品已免运费
                    <i class="iconfont que">&#xe626;</i>
                </span>
        </h4>
        <div class="head f-cb">
            <ul class="cb-li">
                <li class="col col1">
                    <input type="checkbox" id="selectAll" checked="checked" class="selectAll">
                    <label for="selectAll" class="lab">全选</label>
                </li>
                <li class="col col2">商品信息</li>
                <li class="col col3">单价(元)</li>
                <li class="col col4">数量</li>
                <li class="col col5">金额(元)</li>
                <li class="col col6">操作</li>
            </ul>
        </div>

        <!---------------商品的详情----------------->




        </div>
        <!---------------吸底菜单---------------------->
        <div class="totalbox">
            <div class="tbar">
                <div class="lt">
                    <input type="checkbox" id="setAll" class="setAll" name="setAll" >
                    <label for="setAll">全选</label>
                    <b class="opt">删除选中商品</b>
                </div>

                <div class="rt">
                    <p class="allGoods">
                        已选商品 <em class="num all-Num">0</em>件
                        <span class="itm">总价(不含运费)：<em class="num">￥0</em>
                            </span>
                    </p>
                    <p class="all-money">
                        活动优惠：-￥0.00
                        <span class="itm">商品应付总计：￥12830.00</span>
                        <span class="itm">商品税费（不含运费税）：￥0.00</span>
                    </p>
                    <a href="javascript:void(0)" class="gobuy">去结算</a>
                </div>
            </div>
        </div>
    </div>

    <div class="emptyShopCart">
        <h3 class="myCart">

            我的购物车 
        </h3>
        <div class="no-cart">
            <p class="gogo">购物车里空空如也，麻溜的去 </p>
            <a href="../index.php" class="toGo">逛逛吧></a>
        </div>
    </div>
    <!-----------------猜你喜欢------------------------>
    <div class="think-like">
        <h3 class="home-top">
            <span class="title">猜你喜欢</span>
            <span class="desc">根据你的浏览记录推荐的商品</span>
        </h3>
        <ul class="like-details">
            <li class="list">
                <a href=""><img src="../images/index/thinkLike/01.jpg" alt=""></a>
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
                <a href=""><img src="../images/index/thinkLike/02.jpg" alt=""></a>
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
                <a href=""><img src="../images/index/thinkLike/03.jpg" alt=""></a>
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
            <li class="list">
                <a href=""><img src="../images/index/thinkLike/02.jpg" alt=""></a>
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
            <li class="list last">
                <a href=""><img src="../images/index/thinkLike/04.jpg" alt=""></a>
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

    <!-----------------大家都在买------------------------>
    <div class="think-like">
        <h3 class="home-top">
            <span class="title">大家都在买</span>
            <span class="desc">全网最热门的商品推荐</span>
        </h3>
        <ul class="like-details">
            <li class="list">
                <a href=""><img src="../images/index/thinkLike/01.jpg" alt=""></a>
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
                <a href=""><img src="../images/index/thinkLike/02.jpg" alt=""></a>
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
                <a href=""><img src="../images/index/thinkLike/03.jpg" alt=""></a>
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
            <li class="list">
                <a href=""><img src="../images/index/thinkLike/02.jpg" alt=""></a>
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
            <li class="list last">
                <a href=""><img src="../images/index/thinkLike/04.jpg" alt=""></a>
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
    <!---------遮罩提示---------->
    <div id="wrap">
    	<div class="contain">
    		<div class="title">
    			<p>提示</p>
    			<span class="close">X</span>
    		</div>
    		<div class="delIs">
    			<div class="main">
    				<h3>
    					<i class="iconfont">&#xe698;</i>
    					确定要删除该商品吗？
    				</h3>
    			</div>

    			<li class="ensure">确定</li>
    			<li class="cancel">取消</li>

    		</div>
    	</div>
    </div>


     <!----------底部引入----------->
    <div id="footer">

    </div>
</div>
<script src="../library/jquery-1.9.1.min.js"></script>
    <script src="../library/jquery.cookie.js"></script>
    <script src="../js/goods.js"></script>
    <script src="../js/shopCart.js"></script>
<script>

    $("#footer").load("footer.html",function () {
        var oFjs=$("<script>");
        oFjs.attr=("src","../js/footer.js");
        $(document.body).append(oFjs)
    })
</script>
</body>
</html>