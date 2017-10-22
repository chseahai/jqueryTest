
/*----------获取cookie中的商品   看有没有--------------*/
function getGoodsList() {
    var jsonStr=$.cookie("goods");    //字符串(string)或者undefined
    if(!jsonStr){
        //如果本地没有cookie存在，然后自动创建一个
        $.cookie("goods","[]",{expires:7});   //创建之后cookie不可能是undefined
    }
    var list=JSON.parse(jsonStr);   //存在  然后转化成数组并且将其返回
    return list;
}


/*-----------判断购物车中是否有这类商品--------------*/
function  isHasGoodsById(id) {
    var list=getGoodsList();
    for(var i=0;i<list.length;i++){
        if(list[i].pid==id){
            return true;
            //找到了往下就没必要再找了
            break;
        }
    }
    return false;
}

/*-----------计算本地商品的总数量--------------*/
    function getTotal() {
        var list=getGoodsList();
        var total=0;
        for(var i=0;i<list.length;i++){
            total+=list[i].count;  //当前的总数量
        }
         console.log(total);
        return total;
    }


/*-----------不存在这类商品直接放到cookie中--------------*/
function addGoodToCar(good) {
    var list=getGoodsList();
    list.push(good);
    var jsonStr=JSON.stringify(list);    //转化成字符串存到cookie中
    $.cookie("goods",jsonStr,{expires:7});
}

/*-----------存在这类商品的话 根据商品编号添加购物车--------------*/
function updateGoodCountById(id,num) {
    var list=getGoodsList();
    for(var i=0;i<list.length;i++){
        if(list[i].pid==id){
            list[i].count=list[i].count+num;
            //添加完成之后直接break;
            break;
        }

    }
    //然后要更新cookie 不然一刷新就完全失效了
    var jsonSrt=JSON.stringify(list);
    $.cookie("goods",jsonSrt,{expires:7})
}

/*-----------------------删除商品  删除cookie--------------------------*/
    function delGoodById(id) {
        var list=getGoodsList();
        for(var i=0;i<list.length;i++){
            if(list[i].pid==id){
               list.splice(i,1)
            }
        }
        //数组中删除之后，然后更新一下cookie
        var jsonStr=JSON.stringify(list);
        $.cookie("goods",jsonStr,{expires:7});
    }










