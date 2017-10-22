<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>details</title>
    <link rel="stylesheet" href="../css/details.css">
    <link rel="stylesheet" href="../css/header.css">
    <link rel="stylesheet" href="../css/footer.css">
    <link rel="stylesheet" href="../css/city.css">
</head>
<body>
    <?php
    	$id = $_GET["pid"];   // 100
    ?>
<input id="getGoods" type="hidden" value="<?php echo $id; ?>" />
<div id="main">
    <!------------加载顶部---------------->
    <div id="header">

    </div>
    <div class="main">
        <a href="" class="addImg"><img src="../images/details/addimg.gif" alt=""></a>
        <div class="top-dec">
            <ul class="top">
                <li ><a href="" class="kaola">网易考拉海购 </a></li>
                <li class="title"><i class="iconfont">&#xe724;</i>Apple 苹果 iPhone 7（A1660）移动联通电信4G手机 国内行货</li>
            </ul>
        </div>
        <div class="details-main">
            <!-----------------图片展示内容--------------------->

            <div class="showDetails">
                <!-----------装图片盒子----------->
                <div class="imgBox">
                    <div class="saveImg">
                        <!--<img src="../images/details/test/01.jpg" alt="">-->
                    </div>
                    <div class="moveBox">

                    </div>
                </div>
                <!---------控制按钮组------->
                <div class="controls">
                    <p class="btn-left"><i class="iconfont">&#xe85c;</i></p>
                    <p class="btn-right"><i class="iconfont">&#xe85d;</i></p>
                    <div class="wrapImg">
                        <ul class="imgList">
                            <!--<li><img src="../images/details/test/1.jpg" alt=""></li>-->
                            <!--<li><img src="../images/details/test/2.jpg" alt=""></li>-->
                            <!--<li><img src="../images/details/test/3.jpg" alt=""></li>-->
                            <!--<li><img src="../images/details/test/4.jpg" alt=""></li>-->
                            <!--<li><img src="../images/details/test/5.jpg" alt=""></li>-->
                            <!--<li><img src="../images/details/test/6.jpg" alt=""></li>-->
                        </ul>
                    </div>
                </div>
            </div>

            <!-----------------图片放大内容----------------------->
            <div class="bigShow">
                <!--<img src="../images/details/test/001.jpg" alt="">-->
            </div>

            <!-----------------图片详细内容--------------------->
            <div class="detailsContain">
                <p class="country">

                </p>
                <p class="desc pDesc">Apple 苹果 iPhone 7（A1660）移动联通电信4G手机 国内行货</p>
                <p class="subTit">每位顾客仅限购2台，超出部分将关单处理。</p>
                <div class="full">
                    <img src="../images/details/test/nianhuo.png" alt="" class="full-img">
                    <span>最高满188减100</span>
                    <i class="iconfont">&#xe859;</i>
                </div>
                <div class="m-price">

                </div>
                <div class="activity">
                    <span class="show">活动</span>
                    <span class="reduce">直降</span>
                    <span class="k-r">考拉直降</span>
                </div>
                <div class="dues">
                    <span class="show">税费</span>
                    <span class="post"><i>【本商品包税】</i>无需额外交税</span>
                </div>
                <div class="postage">
                    <span class="show">运费</span>
                    <span class="local">杭州</span>
                    <span class="from">至</span>
                    <!--------城市三级联动-------->
                   
                  <div class="destination">
                     <div style="width:300px;margin:40px auto;" class="desPs">
                    	    <input type="text" id="city" />
                     </div>
                   </div>
                    <div class="free">
                        <p>满88元包邮
                            <i class="iconfont hide">&#xe642;</i>
                            <i class="iconfont open">&#xe85a;</i>
                        </p>
                        <i class="desc">
                            自营订单满88元包邮，不足金额的订单收取10元运费。
                            <br/>
                            &ensp; &ensp; 88元以商品活动后的总金额为准，不含税费，使用虚拟资产
                            <br/>
                            &ensp; &ensp; (优惠券、红包、考拉豆等)不影响包邮的计算。 <br/>
                            特殊商品及入驻商家商品单独计算运费。
                        </i>
                    </div>
                </div>

                <div class="service">
                    <span class="show">服务</span>
                    <span class="hotel">本商品由 自营 杭州1号仓 发货</span>
                </div>
              <div class="save">

                </div>

                <div class="choose-color">

                </div>

                <div class="number">
                    <span class="show">数量</span>
                    <ul class="num-cho">
                        <li class="reduce">—</li>
                        <li class="num">1</li>
                        <li class="add">+</li>
                        <li class="store">库存
                            <span>5</span>
                            件</li>
                    </ul>
                </div>
                <ul class="rightNow">
                    <li class="buyNow"><a href="javascript:void(0)">立即购买</a></li>
                    <li class="colNow">
                        <a href="javascript:void(0)">
                            加入购物车
                        </a>
                    </li>
                </ul>
                <ul class="about">
                    <li>不支持7天无理由退货</li>
                    <li>不支持使用优惠券</li>
                </ul>
                <div class="eval">
                    <i class="iconfont">&#xe661;&#xe661;&#xe661;&#xe661;&#xe661;</i>
                    <span class="percent">99%</span>
                    <span><a href="">321人</a>评价</span>
                    <span><a href="">61人</a>晒单</span>
                </div>
                <div class="eval-contain">
                    <span class="name">p***皮    10.18</span>
                    <p class="ev">
                        发货快，国行正品。已验证。机器很流畅，貌似待机时间确实长了一丢丢。充满电可以用两天一晚上，还是在经常刷微信逛考拉的前提下。哈哈
                        牛逼的考拉🐨不加价。赞👍🏻！客服也不错。人工客服说确认收货了就补发发票，态度很好，应该是个漂亮的妹子吧。👍🏻。坐等发票😄
                    </p>
                    <i class="iconfont top">&#xe85f;</i>
                    <i class="iconfont bottom">&#xe85e;</i>
                </div>
            </div>
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
                    <span class="text">
                    <a href="javascript:void(0)">购物车</a>
                    <em class="total">0</em>
                    </span>
                </li>
                <li class="APP">
                    <i class="iconfont">&#xe625;</i>
                    <span class="text"><a href="javascript:void(0)">APP</a></span>
                    <img class="A-app" src="../images/index/stairsList/fixedApp.png" alt="">
                </li>
                <li class="top">
                    <i class="iconfont">&#xe6af;</i>
                    <span class="text"><a href="javascript:void(0)">TOP</a></span>
                </li>
            </ul>
        </div>


        <!-----------------------相关推荐----------------------->
        <div class="Dec">
            <h3 class="Dec-title">相关推荐
                <b>购买了该商品的人还买了这些</b>
            </h3>
            <ul class="Contain">
                <li class="List">
                    <a href="" class="List-IMg">
                        <img src="../images/details/test/re1.jpg" alt="">
                        <span class="Desc">
                        磨砂系列] NORTHJO 诺左  磨砂手机壳 软壳 苹果 iphone 7/7P
                    </span>
                    </a>
                    <span class="full">满99元减20元，满199元减45元</span>
                    <div class="Dec-price">
                        <span class="Dec-symbol">¥</span>39
                        <del>¥78</del>
                    </div>
                    <a href="" class="eva"><span>50</span>人已评价</a>
                </li>
                <li class="List">
                    <a href="" class="List-IMg">
                        <img src="../images/details/test/re1.jpg" alt="">
                        <span class="Desc">
                        磨砂系列] NORTHJO 诺左  磨砂手机壳 软壳 苹果 iphone 7/7P
                    </span>
                    </a>
                    <span class="full">满99元减20元，满199元减45元</span>
                    <div class="Dec-price">
                        <span class="Dec-symbol">¥</span>39
                        <del>¥78</del>
                    </div>
                    <a href="" class="eva"><span>50</span>人已评价</a>
                </li>
                <li class="List">
                    <a href="" class="List-IMg">
                        <img src="../images/details/test/re1.jpg" alt="">
                        <span class="Desc">
                        磨砂系列] NORTHJO 诺左  磨砂手机壳 软壳 苹果 iphone 7/7P
                    </span>
                    </a>
                    <span class="full">满99元减20元，满199元减45元</span>
                    <div class="Dec-price">
                        <span class="Dec-symbol">¥</span>39
                        <del>¥78</del>
                    </div>
                    <a href="" class="eva"><span>50</span>人已评价</a>
                </li>
                <li class="List">
                    <a href="" class="List-IMg">
                        <img src="../images/details/test/re1.jpg" alt="">
                        <span class="Desc">
                        磨砂系列] NORTHJO 诺左  磨砂手机壳 软壳 苹果 iphone 7/7P
                    </span>
                    </a>
                    <span class="full">满99元减20元，满199元减45元</span>
                    <div class="Dec-price">
                        <span class="Dec-symbol">¥</span>39
                        <del>¥78</del>
                    </div>
                    <a href="" class="eva"><span>50</span>人已评价</a>
                </li>
                <li class="List">
                    <a href="" class="List-IMg">
                        <img src="../images/details/test/re1.jpg" alt="">
                        <span class="Desc">
                        磨砂系列] NORTHJO 诺左  磨砂手机壳 软壳 苹果 iphone 7/7P
                    </span>
                    </a>
                    <span class="full">满99元减20元，满199元减45元</span>
                    <div class="Dec-price">
                        <span class="Dec-symbol">¥</span>39
                        <del>¥78</del>
                    </div>
                    <a href="" class="eva"><span>50</span>人已评价</a>
                </li>

            </ul>
        </div>

        <!------------------------看了又看------------------->

        <div class="see-again">
            <div class="see">
                <ul class="see-contain">
                    <h3 class="title">看了又看</h3>
                    <li class="List">
                        <a href="" class="List-IMg">
                            <img src="../images/details/test/re1.jpg" alt="">
                            <span class="Desc">
                        磨砂系列] NORTHJO 诺左  磨砂手机壳 软壳 苹果 iphone 7/7P
                    </span>
                        </a>
                        <span class="save">立省30元</span>
                        <span class="full">满99元减20元，满199元减45元</span>
                        <div class="Dec-price">
                            <span class="Dec-symbol">¥</span>39
                            <del>¥78</del>
                        </div>
                        <a href="" class="eva"><span>50</span>人已评价</a>
                    </li>
                    <li class="List">
                        <a href="" class="List-IMg">
                            <img src="../images/details/test/re1.jpg" alt="">
                            <span class="Desc">
                        磨砂系列] NORTHJO 诺左  磨砂手机壳 软壳 苹果 iphone 7/7P
                    </span>
                        </a>
                        <span class="save">立省30元</span>
                        <span class="full">满99元减20元，满199元减45元</span>
                        <div class="Dec-price">
                            <span class="Dec-symbol">¥</span>39
                            <del>¥78</del>
                        </div>
                        <a href="" class="eva"><span>50</span>人已评价</a>
                    </li>
                    <li class="List">
                        <a href="" class="List-IMg">
                            <img src="../images/details/test/re1.jpg" alt="">
                            <span class="Desc">
                        磨砂系列] NORTHJO 诺左  磨砂手机壳 软壳 苹果 iphone 7/7P
                    </span>
                        </a>
                        <span class="save">立省30元</span>
                        <span class="full">满99元减20元，满199元减45元</span>
                        <div class="Dec-price">
                            <span class="Dec-symbol">¥</span>39
                            <del>¥78</del>
                        </div>
                        <a href="" class="eva"><span>50</span>人已评价</a>
                    </li>
                    <li class="List">
                        <a href="" class="List-IMg">
                            <img src="../images/details/test/re1.jpg" alt="">
                            <span class="Desc">
                        磨砂系列] NORTHJO 诺左  磨砂手机壳 软壳 苹果 iphone 7/7P
                    </span>
                        </a>
                        <span class="save">立省30元</span>
                        <span class="full">满99元减20元，满199元减45元</span>
                        <div class="Dec-price">
                            <span class="Dec-symbol">¥</span>39
                            <del>¥78</del>
                        </div>
                        <a href="" class="eva"><span>50</span>人已评价</a>
                    </li>
                    <li class="List">
                        <a href="" class="List-IMg">
                            <img src="../images/details/test/re1.jpg" alt="">
                            <span class="Desc">
                        磨砂系列] NORTHJO 诺左  磨砂手机壳 软壳 苹果 iphone 7/7P
                    </span>
                        </a>
                        <span class="save">立省30元</span>
                        <span class="full">满99元减20元，满199元减45元</span>
                        <div class="Dec-price">
                            <span class="Dec-symbol">¥</span>39
                            <del>¥78</del>
                        </div>
                        <a href="" class="eva"><span>50</span>人已评价</a>
                    </li>
                    <li class="List">
                        <a href="" class="List-IMg">
                            <img src="../images/details/test/re1.jpg" alt="">
                            <span class="Desc">
                        磨砂系列] NORTHJO 诺左  磨砂手机壳 软壳 苹果 iphone 7/7P
                    </span>
                        </a>
                        <span class="save">立省30元</span>
                        <span class="full">满99元减20元，满199元减45元</span>
                        <div class="Dec-price">
                            <span class="Dec-symbol">¥</span>39
                            <del>¥78</del>
                        </div>
                        <a href="" class="eva"><span>50</span>人已评价</a>
                    </li>
                </ul>
                <ul class="end-buy">
                    <h3 class="title">最终买下</h3>
                    <li class="List">
                        <a href="" class="List-IMg">
                            <img src="../images/details/test/re1.jpg" alt="">
                            <span class="Desc">
                        磨砂系列] NORTHJO 诺左  磨砂手机壳 软壳 苹果 iphone 7/7P
                    </span>
                        </a>
                        <div class="Dec-price">
                            <span class="Dec-symbol">¥</span>39
                            <del>¥78</del>
                        </div>
                        <a href="" class="eva"><span>50</span>人已评价</a>
                    </li>
                    <li class="List">
                        <a href="" class="List-IMg">
                            <img src="../images/details/test/re1.jpg" alt="">
                            <span class="Desc">
                        磨砂系列] NORTHJO 诺左  磨砂手机壳 软壳 苹果 iphone 7/7P
                    </span>
                        </a>
                        <div class="Dec-price">
                            <span class="Dec-symbol">¥</span>39
                            <del>¥78</del>
                        </div>
                        <a href="" class="eva"><span>50</span>人已评价</a>
                    </li>
                    <li class="List">
                        <a href="" class="List-IMg">
                            <img src="../images/details/test/re1.jpg" alt="">
                            <span class="Desc">
                        磨砂系列] NORTHJO 诺左  磨砂手机壳 软壳 苹果 iphone 7/7P
                    </span>
                        </a>
                        <div class="Dec-price">
                            <span class="Dec-symbol">¥</span>39
                            <del>¥78</del>
                        </div>
                        <a href="" class="eva"><span>50</span>人已评价</a>
                    </li>
                    <li class="List">
                        <a href="" class="List-IMg">
                            <img src="../images/details/test/re1.jpg" alt="">
                            <span class="Desc">
                        磨砂系列] NORTHJO 诺左  磨砂手机壳 软壳 苹果 iphone 7/7P
                    </span>
                        </a>
                        <div class="Dec-price">
                            <span class="Dec-symbol">¥</span>39
                            <del>¥78</del>
                        </div>
                        <a href="" class="eva"><span>50</span>人已评价</a>
                    </li>
                    <li class="List">
                        <a href="" class="List-IMg">
                            <img src="../images/details/test/re1.jpg" alt="">
                            <span class="Desc">
                        磨砂系列] NORTHJO 诺左  磨砂手机壳 软壳 苹果 iphone 7/7P
                    </span>
                        </a>
                        <div class="Dec-price">
                            <span class="Dec-symbol">¥</span>39
                            <del>¥78</del>
                        </div>
                        <a href="" class="eva"><span>50</span>人已评价</a>
                    </li>
                    <li class="List">
                        <a href="" class="List-IMg">
                            <img src="../images/details/test/re1.jpg" alt="">
                            <span class="Desc">
                        磨砂系列] NORTHJO 诺左  磨砂手机壳 软壳 苹果 iphone 7/7P
                    </span>
                        </a>
                        <div class="Dec-price">
                            <span class="Dec-symbol">¥</span>39
                            <del>¥78</del>
                        </div>
                        <a href="" class="eva"><span>50</span>人已评价</a>
                    </li>
                </ul>
                <ul class="hot-sell">
                    <h3 class="title">热销排行榜</h3>
                    <li class="List">
                        <a href="" class="List-IMg">
                            <img src="../images/details/test/re1.jpg" alt="">
                            <span class="Desc">
                        磨砂系列] NORTHJO 诺左  磨砂手机壳 软壳 苹果 iphone 7/7P
                    </span>
                        </a>
                        <span class="rank">1</span>
                        <div class="Dec-price">
                            <span class="Dec-symbol">¥</span>39
                            <del>¥78</del>
                        </div>
                        <a href="" class="eva"><span>50</span>人已评价</a>
                    </li>
                    <li class="List">
                        <a href="" class="List-IMg">
                            <img src="../images/details/test/re1.jpg" alt="">
                            <span class="Desc">
                        磨砂系列] NORTHJO 诺左  磨砂手机壳 软壳 苹果 iphone 7/7P
                    </span>
                        </a>
                        <span class="rank">2</span>
                        <div class="Dec-price">
                            <span class="Dec-symbol">¥</span>39
                            <del>¥78</del>
                        </div>
                        <a href="" class="eva"><span>50</span>人已评价</a>
                    </li>
                    <li class="List">
                        <a href="" class="List-IMg">
                            <img src="../images/details/test/re1.jpg" alt="">
                            <span class="Desc">
                        磨砂系列] NORTHJO 诺左  磨砂手机壳 软壳 苹果 iphone 7/7P
                    </span>
                        </a>
                        <span class="rank">3</span>
                        <div class="Dec-price">
                            <span class="Dec-symbol">¥</span>39
                            <del>¥78</del>
                        </div>
                        <a href="" class="eva"><span>50</span>人已评价</a>
                    </li>
                    <li class="List">
                        <a href="" class="List-IMg">
                            <img src="../images/details/test/re1.jpg" alt="">
                            <span class="Desc">
                        磨砂系列] NORTHJO 诺左  磨砂手机壳 软壳 苹果 iphone 7/7P
                    </span>
                        </a>
                        <span class="rank">4</span>
                        <div class="Dec-price">
                            <span class="Dec-symbol">¥</span>39
                            <del>¥78</del>
                        </div>
                        <a href="" class="eva"><span>50</span>人已评价</a>
                    </li>
                    <li class="List">
                        <a href="" class="List-IMg">
                            <img src="../images/details/test/re1.jpg" alt="">
                            <span class="Desc">
                        磨砂系列] NORTHJO 诺左  磨砂手机壳 软壳 苹果 iphone 7/7P
                    </span>
                        </a>
                        <span class="rank">5</span>
                        <div class="Dec-price">
                            <span class="Dec-symbol">¥</span>39
                            <del>¥78</del>
                        </div>
                        <a href="" class="eva"><span>50</span>人已评价</a>
                    </li>
                </ul>
            </div>
            <!---------图片详情------------>
            <div class="see-details">
                <div class="see-top">
                    <ul class="de-left">
                        <li class="details">
                            商品详情
                            <i class="line active"></i>
                        </li>
                        <li class="dis">
                            用户评价
                            <i class="line"></i>
                            <span>321</span>
                        </li>
                    </ul>
                    <ul class="de-right">
                        <li class="buy-phone">
                            手机购买
                            <i class="iconfont code">&#xe630;</i>
                            <i class="iconfont top">&#xe85a;</i>
                            <i class="iconfont bottom">&#xe860;</i>
                            <div class="imgBox">
                                <img src="../images/details/test/kaola_qrcode_logo.png" alt="" class="smallImg">
                                <img src="../images/details/test/load.png" alt="" class="bigImg">
                            </div>
                        </li>
                        <li class="now-buy"><a href="">立即购买</a></li>
                    </ul>
                </div>
                <!-----------商品详情内容----------------->
                <div class="details-Contain">
                    <div class="see-middle">
                        <ul>
                            <li>商品品牌：Apple 苹果</li>
                            <li>兼容平台：苹果（iOS）</li>
                            <li>像素：1000-1600万</li>
                            <li>型号： iPhone7</li>
                            <li>尺寸：138.3x67.1x7.1mm</li>
                            <li>上市时间：2016.09</li>
                        </ul>
                        <ul>
                            <li>品牌国：美国</li>
                            <li>屏幕尺寸：5.0-4.6英寸</li>
                            <li>内核：四核</li>
                            <li>分辨率：1334x750像素</li>
                            <li>重量：138g</li>
                            <li>内存容量：32GB　128GB　256GB</li>
                        </ul>
                        <ul>
                            <li>品名：Apple 苹果 iPhone7</li>
                            <li>移动4G　移动3G　电信4G　联通4G　电信3G　联通3G</li>
                            <li>售后服务：全国联保</li>
                            <li>屏幕尺寸：4.7英寸</li>
                            <li>包装：盒装</li>
                            <li>黑色　银色　金色　玫瑰金色　亮黑色</li>
                        </ul>
                        <span class="hide-show">展开
                         <i class="iconfont show">&#xe85e;</i>
                         <i class="iconfont hide">&#xe85f;</i>
                    </span>
                        <div class="true">
                            <p class="rea">真</p>
                            <div class="cont">
                                <h4 class="title">假一赔十</h4>
                                <p class="info">网易考拉海购每一件商品都通过严苛的品质把关，保障正品，保障品质。特推出 “假一赔十” 的正品保障政策，杜绝一切假货，让您无忧购物。</p>
                            </div>
                        </div>
                    </div>
                    <div class="see-bottom">
                        <div class="imgDetails">
                            <img src="../images/details/test/de01.jpg" alt="">
                            <img src="../images/details/test/de02.jpg" alt="">
                            <img src="../images/details/test/de03.jpg" alt="">
                            <img src="../images/details/test/de04.jpg" alt="">
                            <img src="../images/details/test/de05.jpg" alt="">
                            <img src="../images/details/test/de06.jpg" alt="">
                            <img src="../images/details/test/de07.jpg" alt="">
                            <img src="../images/details/test/de08.jpg" alt="">
                            <img src="../images/details/test/de09.jpg" alt="">
                            <img src="../images/details/test/de10.jpg"  alt="">
                            <img src="../images/details/test/de11.jpg" alt="">
                            <img src="../images/details/test/de12.jpg" alt="">
                            <img src="../images/details/test/de13.jpg" alt="">
                            <img src="../images/details/test/de14.jpg" alt="">
                            <img src="../images/details/test/de15.jpg" alt="">
                            <img src="../images/details/test/de16.jpg" alt="">
                            <img src="../images/details/test/de17.jpg" alt="">
                            <img src="../images/details/test/de18.jpg" alt="">
                            <img src="../images/details/test/de19.jpg" alt="">
                            <img src="../images/details/test/de20.jpg" alt="">
                            <img src="../images/details/test/de21.jpg" alt="">
                            <img src="../images/details/test/de22.jpg" alt="">
                            <img src="../images/details/test/de23.jpg" alt="">
                            <img src="../images/details/test/de24.jpg" alt="">
                            <img src="../images/details/test/de25.jpg" alt="">
                            <img src="../images/details/test/de26.jpg" alt="">
                            <img src="../images/details/test/de27.jpg" alt="">
                            <img src="../images/details/test/de28.jpg" alt="">
                            <img src="../images/details/test/de29.jpg" alt="">
                            <img src="../images/details/test/de30.jpg" alt="">
                            <img src="../images/details/test/de31.jpg" alt="">
                            <img src="../images/details/test/de32.jpg" alt="">
                            <img src="../images/details/test/de33.jpg" alt="">
                            <img src="../images/details/test/de34.jpg" alt="">
                        </div>
                    </div>
                </div>

                <!-----------用户评价内容控制----------------->
                <div class="desc-Contain">
                    <div class="desc-top">
                        <div class="star">
                            <i class="iconfont">&#xe661;&#xe661;&#xe661;&#xe661;&#xe661;</i>
                            <span>98.8</span>
                            %好评
                        </div>
                        <div class="given-bean">
                            <p>评价送考拉豆</p>
                            <p>精华评价可获得40考拉豆</p>
                            <a href="" class="comment">发表评价</a>
                            <i>|</i>
                            <a href="kaola-bean">考拉豆说明</a>
                        </div>
                    </div>
                    <div class="desc-middle">
                        <ul class="radio-main">
                            <li class="all active">
                                <label for="desc-all" >
                                    <input type="radio" value="" id="desc-all">
                                    <a href="javascript:void(0)"></a>
                                    全部 323
                                </label>
                            </li>
                            <li class="pic">
                                <label for="desc-pic" >
                                    <input type="radio" value="" id="desc-pic">
                                    <a href="javascript:void(0)"></a>
                                    晒图 62
                                </label>
                            </li>
                            <li class="after-view">
                                <label for="desc-view" >
                                    <input type="radio" value="" id="desc-view">
                                    <a href="javascript:void(0)"></a>
                                    追评 8
                                </label>
                            </li>
                        </ul>
                        <div class="has-con">
                            <label for="desc-con" >
                                <input type="checkbox" value="" id="desc-con">
                                <a href="javascript:void(0)">
                                </a>
                                有内容的评价
                                <a href="" class="check-all">查看所有评价</a>
                            </label>
                        </div>
                    </div>
                    <div class="desc-bottom">
                        <div class="dis-user">
                            <div class="img-user">
                                <img src="../images/details/test/user01.jpg" alt="" class="user-icon">
                                <p class="user-name">迷***吻</p>
                            </div>
                            <div class="dis-main">
                                <div class="dis-t">
                                    <i class="iconfont">&#xe661;&#xe661;&#xe661;&#xe661;&#xe661;</i>
                                    <span>内存容量 : 32GB</span>
                                    <span>颜色 : 玫瑰金色</span>
                                </div>
                                <div class="dis-b">
                                    <span>精华评价</span>
                                    很喜欢物流也挺快的、正在使用中！
                                    <p><img src="../images/details/test/user001.jpg" alt=""></p>
                                </div>

                            </div>
                            <ul class="dis-from">
                                <li class="thumbs">
                                    <i class="iconfont">&#xe62b;</i>
                                    <span>10</span>
                                </li>
                                <li class="from-app">
                                    <a href="">来自ios手机版</a>
                                </li>
                                <li>2016.10.18</li>
                            </ul>
                        </div>
                        <div class="dis-user">
                            <div class="img-user">
                                <img src="../images/details/test/user01.jpg" alt="" class="user-icon">
                                <p class="user-name">迷***吻</p>
                            </div>
                            <div class="dis-main">
                                <div class="dis-t">
                                    <i class="iconfont">&#xe661;&#xe661;&#xe661;&#xe661;&#xe661;</i>
                                    <span>内存容量 : 32GB</span>
                                    <span>颜色 : 玫瑰金色</span>
                                </div>
                                <div class="dis-b">
                                    <span>精华评价</span>
                                    很喜欢物流也挺快的、正在使用中！
                                    <p><img src="../images/details/test/user001.jpg" alt=""></p>
                                </div>

                            </div>
                            <ul class="dis-from">
                                <li class="thumbs">
                                    <i class="iconfont">&#xe62b;</i>
                                    <span>10</span>
                                </li>
                                <li class="from-app">
                                    <a href="">来自ios手机版</a>
                                </li>
                                <li>2016.10.18</li>
                            </ul>
                        </div>
                        <div class="dis-user">
                            <div class="img-user">
                                <img src="../images/details/test/user02.jpg" alt="" class="user-icon">
                                <p class="user-name">迷***吻</p>
                            </div>
                            <div class="dis-main">
                                <div class="dis-t">
                                    <i class="iconfont">&#xe661;&#xe661;&#xe661;&#xe661;&#xe661;</i>
                                    <span>内存容量 : 32GB</span>
                                    <span>颜色 : 玫瑰金色</span>
                                </div>
                                <div class="dis-b">
                                    <span>精华评价</span>
                                    很喜欢物流也挺快的、正在使用中！
                                    <p><img src="../images/details/test/user001.jpg" alt=""></p>
                                </div>

                            </div>
                            <ul class="dis-from">
                                <li class="thumbs">
                                    <i class="iconfont">&#xe62b;</i>
                                    <span>10</span>
                                </li>
                                <li class="from-app">
                                    <a href="">来自ios手机版</a>
                                </li>
                                <li>2016.10.18</li>
                            </ul>
                        </div>
                        <div class="dis-user">
                            <div class="img-user">
                                <img src="../images/details/test/user01.jpg" alt="" class="user-icon">
                                <p class="user-name">迷***吻</p>
                            </div>
                            <div class="dis-main">
                                <div class="dis-t">
                                    <i class="iconfont">&#xe661;&#xe661;&#xe661;&#xe661;&#xe661;</i>
                                    <span>内存容量 : 32GB</span>
                                    <span>颜色 : 玫瑰金色</span>
                                </div>
                                <div class="dis-b">
                                    <span>精华评价</span>
                                    很喜欢物流也挺快的、正在使用中！
                                    <p><img src="../images/details/test/user001.jpg" alt=""></p>
                                </div>

                            </div>
                            <ul class="dis-from">
                                <li class="thumbs">
                                    <i class="iconfont">&#xe62b;</i>
                                    <span>10</span>
                                </li>
                                <li class="from-app">
                                    <a href="">来自ios手机版</a>
                                </li>
                                <li>2016.10.18</li>
                            </ul>
                        </div>
                        <div class="dis-user">
                            <div class="img-user">
                                <img src="../images/details/test/user01.jpg" alt="" class="user-icon">
                                <p class="user-name">迷***吻</p>
                            </div>
                            <div class="dis-main">
                                <div class="dis-t">
                                    <i class="iconfont">&#xe661;&#xe661;&#xe661;&#xe661;&#xe661;</i>
                                    <span>内存容量 : 32GB</span>
                                    <span>颜色 : 玫瑰金色</span>
                                </div>
                                <div class="dis-b">
                                    <span>精华评价</span>
                                    很喜欢物流也挺快的、正在使用中！
                                    <p><img src="../images/details/test/user001.jpg" alt=""></p>
                                </div>

                            </div>
                            <ul class="dis-from">
                                <li class="thumbs">
                                    <i class="iconfont">&#xe62b;</i>
                                    <span>10</span>
                                </li>
                                <li class="from-app">
                                    <a href="">来自ios手机版</a>
                                </li>
                                <li>2016.10.18</li>
                            </ul>
                        </div>
                        <div class="dis-user">
                            <div class="img-user">
                                <img src="../images/details/test/user01.jpg" alt="" class="user-icon">
                                <p class="user-name">迷***吻</p>
                            </div>
                            <div class="dis-main">
                                <div class="dis-t">
                                    <i class="iconfont">&#xe661;&#xe661;&#xe661;&#xe661;&#xe661;</i>
                                    <span>内存容量 : 32GB</span>
                                    <span>颜色 : 玫瑰金色</span>
                                </div>
                                <div class="dis-b">
                                    <span>精华评价</span>
                                    很喜欢物流也挺快的、正在使用中！
                                    <p><img src="../images/details/test/user001.jpg" alt=""></p>
                                </div>

                            </div>
                            <ul class="dis-from">
                                <li class="thumbs">
                                    <i class="iconfont">&#xe62b;</i>
                                    <span>10</span>
                                </li>
                                <li class="from-app">
                                    <a href="">来自ios手机版</a>
                                </li>
                                <li>2016.10.18</li>
                            </ul>
                        </div>
                        <div class="dis-user">
                            <div class="img-user">
                                <img src="../images/details/test/user01.jpg" alt="" class="user-icon">
                                <p class="user-name">迷***吻</p>
                            </div>
                            <div class="dis-main">
                                <div class="dis-t">
                                    <i class="iconfont">&#xe661;&#xe661;&#xe661;&#xe661;&#xe661;</i>
                                    <span>内存容量 : 32GB</span>
                                    <span>颜色 : 玫瑰金色</span>
                                </div>
                                <div class="dis-b">
                                    <span>精华评价</span>
                                    很喜欢物流也挺快的、正在使用中！
                                    <p><img src="../images/details/test/user001.jpg" alt=""></p>
                                </div>

                            </div>
                            <ul class="dis-from">
                                <li class="thumbs">
                                    <i class="iconfont">&#xe62b;</i>
                                    <span>10</span>
                                </li>
                                <li class="from-app">
                                    <a href="">来自ios手机版</a>
                                </li>
                                <li>2016.10.18</li>
                            </ul>
                        </div>
                        <div class="dis-user">
                            <div class="img-user">
                                <img src="../images/details/test/user01.jpg" alt="" class="user-icon">
                                <p class="user-name">迷***吻</p>
                            </div>
                            <div class="dis-main">
                                <div class="dis-t">
                                    <i class="iconfont">&#xe661;&#xe661;&#xe661;&#xe661;&#xe661;</i>
                                    <span>内存容量 : 32GB</span>
                                    <span>颜色 : 玫瑰金色</span>
                                </div>
                                <div class="dis-b">
                                    <span>精华评价</span>
                                    很喜欢物流也挺快的、正在使用中！
                                    <p><img src="../images/details/test/user001.jpg" alt=""></p>
                                </div>

                            </div>
                            <ul class="dis-from">
                                <li class="thumbs">
                                    <i class="iconfont">&#xe62b;</i>
                                    <span>10</span>
                                </li>
                                <li class="from-app">
                                    <a href="">来自ios手机版</a>
                                </li>
                                <li>2016.10.18</li>
                            </ul>
                        </div>
                        <div class="dis-user">
                            <div class="img-user">
                                <img src="../images/details/test/user01.jpg" alt="" class="user-icon">
                                <p class="user-name">迷***吻</p>
                            </div>
                            <div class="dis-main">
                                <div class="dis-t">
                                    <i class="iconfont">&#xe661;&#xe661;&#xe661;&#xe661;&#xe661;</i>
                                    <span>内存容量 : 32GB</span>
                                    <span>颜色 : 玫瑰金色</span>
                                </div>
                                <div class="dis-b">
                                    <span>精华评价</span>
                                    很喜欢物流也挺快的、正在使用中！
                                    <p><img src="../images/details/test/user001.jpg" alt=""></p>
                                </div>

                            </div>
                            <ul class="dis-from">
                                <li class="thumbs">
                                    <i class="iconfont">&#xe62b;</i>
                                    <span>10</span>
                                </li>
                                <li class="from-app">
                                    <a href="">来自ios手机版</a>
                                </li>
                                <li>2016.10.18</li>
                            </ul>
                        </div>
                        <div class="dis-user">
                            <div class="img-user">
                                <img src="../images/details/test/user01.jpg" alt="" class="user-icon">
                                <p class="user-name">迷***吻</p>
                            </div>
                            <div class="dis-main">
                                <div class="dis-t">
                                    <i class="iconfont">&#xe661;&#xe661;&#xe661;&#xe661;&#xe661;</i>
                                    <span>内存容量 : 32GB</span>
                                    <span>颜色 : 玫瑰金色</span>
                                </div>
                                <div class="dis-b">
                                    <span>精华评价</span>
                                    很喜欢物流也挺快的、正在使用中！
                                    <p><img src="../images/details/test/user001.jpg" alt=""></p>
                                </div>

                            </div>
                            <ul class="dis-from">
                                <li class="thumbs">
                                    <i class="iconfont">&#xe62b;</i>
                                    <span>10</span>
                                </li>
                                <li class="from-app">
                                    <a href="">来自ios手机版</a>
                                </li>
                                <li>2016.10.18</li>
                            </ul>
                        </div>
                        <div class="dis-user">
                            <div class="img-user">
                                <img src="../images/details/test/user01.jpg" alt="" class="user-icon">
                                <p class="user-name">迷***吻</p>
                            </div>
                            <div class="dis-main">
                                <div class="dis-t">
                                    <i class="iconfont">&#xe661;&#xe661;&#xe661;&#xe661;&#xe661;</i>
                                    <span>内存容量 : 32GB</span>
                                    <span>颜色 : 玫瑰金色</span>
                                </div>
                                <div class="dis-b">
                                    <span>精华评价</span>
                                    很喜欢物流也挺快的、正在使用中！
                                    <p><img src="../images/details/test/user001.jpg" alt=""></p>
                                </div>

                            </div>
                            <ul class="dis-from">
                                <li class="thumbs">
                                    <i class="iconfont">&#xe62b;</i>
                                    <span>10</span>
                                </li>
                                <li class="from-app">
                                    <a href="">来自ios手机版</a>
                                </li>
                                <li>2016.10.18</li>
                            </ul>
                        </div>
                        <div class="dis-user">
                            <div class="img-user">
                                <img src="../images/details/test/user01.jpg" alt="" class="user-icon">
                                <p class="user-name">迷***吻</p>
                            </div>
                            <div class="dis-main">
                                <div class="dis-t">
                                    <i class="iconfont">&#xe661;&#xe661;&#xe661;&#xe661;&#xe661;</i>
                                    <span>内存容量 : 32GB</span>
                                    <span>颜色 : 玫瑰金色</span>
                                </div>
                                <div class="dis-b">
                                    <span>精华评价</span>
                                    很喜欢物流也挺快的、正在使用中！
                                    <p><img src="../images/details/test/user001.jpg" alt=""></p>
                                </div>

                            </div>
                            <ul class="dis-from">
                                <li class="thumbs">
                                    <i class="iconfont">&#xe62b;</i>
                                    <span>10</span>
                                </li>
                                <li class="from-app">
                                    <a href="">来自ios手机版</a>
                                </li>
                                <li>2016.10.18</li>
                            </ul>
                        </div>
                        <div class="dis-user">
                            <div class="img-user">
                                <img src="../images/details/test/user01.jpg" alt="" class="user-icon">
                                <p class="user-name">迷***吻</p>
                            </div>
                            <div class="dis-main">
                                <div class="dis-t">
                                    <i class="iconfont">&#xe661;&#xe661;&#xe661;&#xe661;&#xe661;</i>
                                    <span>内存容量 : 32GB</span>
                                    <span>颜色 : 玫瑰金色</span>
                                </div>
                                <div class="dis-b">
                                    <span>精华评价</span>
                                    很喜欢物流也挺快的、正在使用中！
                                    <p><img src="../images/details/test/user001.jpg" alt=""></p>
                                </div>

                            </div>
                            <ul class="dis-from">
                                <li class="thumbs">
                                    <i class="iconfont">&#xe62b;</i>
                                    <span>10</span>
                                </li>
                                <li class="from-app">
                                    <a href="">来自ios手机版</a>
                                </li>
                                <li>2016.10.18</li>
                            </ul>
                        </div>
                        <div class="dis-user">
                            <div class="img-user">
                                <img src="../images/details/test/user01.jpg" alt="" class="user-icon">
                                <p class="user-name">迷***吻</p>
                            </div>
                            <div class="dis-main">
                                <div class="dis-t">
                                    <i class="iconfont">&#xe661;&#xe661;&#xe661;&#xe661;&#xe661;</i>
                                    <span>内存容量 : 32GB</span>
                                    <span>颜色 : 玫瑰金色</span>
                                </div>
                                <div class="dis-b">
                                    <span>精华评价</span>
                                    很喜欢物流也挺快的、正在使用中！
                                    <p><img src="../images/details/test/user001.jpg" alt=""></p>
                                </div>

                            </div>
                            <ul class="dis-from">
                                <li class="thumbs">
                                    <i class="iconfont">&#xe62b;</i>
                                    <span>10</span>
                                </li>
                                <li class="from-app">
                                    <a href="">来自ios手机版</a>
                                </li>
                                <li>2016.10.18</li>
                            </ul>
                        </div>
                        <div class="dis-user">
                            <div class="img-user">
                                <img src="../images/details/test/user01.jpg" alt="" class="user-icon">
                                <p class="user-name">迷***吻</p>
                            </div>
                            <div class="dis-main">
                                <div class="dis-t">
                                    <i class="iconfont">&#xe661;&#xe661;&#xe661;&#xe661;&#xe661;</i>
                                    <span>内存容量 : 32GB</span>
                                    <span>颜色 : 玫瑰金色</span>
                                </div>
                                <div class="dis-b">
                                    <span>精华评价</span>
                                    很喜欢物流也挺快的、正在使用中！
                                    <p><img src="../images/details/test/user001.jpg" alt=""></p>
                                </div>

                            </div>
                            <ul class="dis-from">
                                <li class="thumbs">
                                    <i class="iconfont">&#xe62b;</i>
                                    <span>10</span>
                                </li>
                                <li class="from-app">
                                    <a href="">来自ios手机版</a>
                                </li>
                                <li>2016.10.18</li>
                            </ul>
                        </div>
                        <div class="dis-user">
                            <div class="img-user">
                                <img src="../images/details/test/user01.jpg" alt="" class="user-icon">
                                <p class="user-name">迷***吻</p>
                            </div>
                            <div class="dis-main">
                                <div class="dis-t">
                                    <i class="iconfont">&#xe661;&#xe661;&#xe661;&#xe661;&#xe661;</i>
                                    <span>内存容量 : 32GB</span>
                                    <span>颜色 : 玫瑰金色</span>
                                </div>
                                <div class="dis-b">
                                    <span>精华评价</span>
                                    很喜欢物流也挺快的、正在使用中！
                                    <p><img src="../images/details/test/user001.jpg" alt=""></p>
                                </div>

                            </div>
                            <ul class="dis-from">
                                <li class="thumbs">
                                    <i class="iconfont">&#xe62b;</i>
                                    <span>10</span>
                                </li>
                                <li class="from-app">
                                    <a href="">来自ios手机版</a>
                                </li>
                                <li>2016.10.18</li>
                            </ul>
                        </div>
                        <div class="dis-user">
                            <div class="img-user">
                                <img src="../images/details/test/user01.jpg" alt="" class="user-icon">
                                <p class="user-name">迷***吻</p>
                            </div>
                            <div class="dis-main">
                                <div class="dis-t">
                                    <i class="iconfont">&#xe661;&#xe661;&#xe661;&#xe661;&#xe661;</i>
                                    <span>内存容量 : 32GB</span>
                                    <span>颜色 : 玫瑰金色</span>
                                </div>
                                <div class="dis-b">
                                    <span>精华评价</span>
                                    很喜欢物流也挺快的、正在使用中！
                                    <p><img src="../images/details/test/user001.jpg" alt=""></p>
                                </div>

                            </div>
                            <ul class="dis-from">
                                <li class="thumbs">
                                    <i class="iconfont">&#xe62b;</i>
                                    <span>10</span>
                                </li>
                                <li class="from-app">
                                    <a href="">来自ios手机版</a>
                                </li>
                                <li>2016.10.18</li>
                            </ul>
                        </div>
                        <div class="dis-user">
                            <div class="img-user">
                                <img src="../images/details/test/user01.jpg" alt="" class="user-icon">
                                <p class="user-name">迷***吻</p>
                            </div>
                            <div class="dis-main">
                                <div class="dis-t">
                                    <i class="iconfont">&#xe661;&#xe661;&#xe661;&#xe661;&#xe661;</i>
                                    <span>内存容量 : 32GB</span>
                                    <span>颜色 : 玫瑰金色</span>
                                </div>
                                <div class="dis-b">
                                    <span>精华评价</span>
                                    很喜欢物流也挺快的、正在使用中！
                                    <p><img src="../images/details/test/user001.jpg" alt=""></p>
                                </div>

                            </div>
                            <ul class="dis-from">
                                <li class="thumbs">
                                    <i class="iconfont">&#xe62b;</i>
                                    <span>10</span>
                                </li>
                                <li class="from-app">
                                    <a href="">来自ios手机版</a>
                                </li>
                                <li>2016.10.18</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>


    <!--------------加载底部-------------->
    <div id="footer">

    </div>
</div>
<script src="../library/jquery-1.9.1.min.js"></script>

<script src="../library/Popt.js"></script>
<script src="../library/cityJson.js"></script>
<script src="../library/citySet.js"></script>

<script src="../js/jquery.cookie.js"></script>
 <script src="../js/goods.js"></script>
 <script src="../js/details.js"></script>
<script>
/*----------项目中不能存在多个jquery文件       子页面中尽量不存在js  尽量用load方法--------*/
   $("#header").load("../txt/header2.0.php", function(){
            //用load的话必须等到页面全部加载完成之后才能引用js不然可能造成js失效
            var headerjs = $("<script>");
            headerjs.attr("src","../js/header.js");
            $(document.body).append(headerjs);
        });

        $("#footer").load("footer.html",function(){

            $.getScript("../js/footer.js");
        });
</script>

</body>
</html>