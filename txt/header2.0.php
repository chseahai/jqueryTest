<?php
session_start();
?>
<?php
    	@$un=$_SESSION["uName"];
?>
<input type="hidden" id="uNp" value="<?php echo @$un; ?>"/>
<div id="wrap">
    <div class="year-top">
        <a href=""><img src="../images/year.jpg" alt=""></a>
    </div>

    <!--顶部导航栏--->
    <div id="topWrap">
        <div class="topNav">
            <ul class="topNavLeft">
                <li class="topNavLeft-welcome">考拉欢迎您！</li>
                <li class="topNavLeft-login"><a href="">登录</a></li>
                <li class="topNavLeft-iconfont">|</li>
                <li class="topNavLeft-register"><a href="">免费注册</a></li>
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
    <!--顶部搜索框-->
    <div id="WrapTopSearch">
        <div class="topSearch">
            <div class="topLogo">
                <img src="../images/index/topSearch/logo.png" alt="">
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
                <a class="shopCart" href="#">
                    <i class="iconfont">&#xe604;</i>
                    <span>
                    购物车
                     <em class="total">0</em>
                    </span>
                </a>
            </div>
        </div>
    </div>
    <!--主体导航栏-->
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
                <li  class="tab-type"><a href="">今日限时购</a></li>
                <li  class="tab-type"><a href="">每日上新</a></li>
                <li  class="tab-type"><a href="">国家馆</a></li>
                <li  class="tab-type"><a href="">全球旗舰</a></li>
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
    </div>
    <div class="empty">
        <!--空白盒子-->
    </div>

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
</div>