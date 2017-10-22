/*
 自执行函数（没有名字且可以调用），可以防止全局变量污染（命名冲突）
 */
(function() {
    /*
     $.fn    理解为JQuery对象的原型对象        key:value
     $.fn.键名 = 值    这样就为JQuery对像的原型对象添加了一个键值对
     原型对象：可以被所有属于该类型的实例共享吧

     */

    /*
     为jquery对像的原型对象添加了一个键值对
     键：mousewheel
     值：函数
     形参：func     代表将来所有接受到的一个实参函数
     */
    $.fn.mousewheel = function(func) {
        //this   -->$(document)   表示的是jquery对象
        //func();
        //事件    事件目标、事件类型、事件处理程序、事件对象
        //console.log(this)
        ///this[0]  -->document  代表原生的节点对象
        //事件目标：  this[0]
        //mousewheel DOMMouseScroll

        on(this[0], "mousewheel", handler)
        on(this[0], "DOMMouseScroll", handler)

        /*事件处理程序*/
        function handler(e) {
            //e  就代表事件对象
            //wheelDelta 120 ↑  -120↓     detail  -3↑  3↓
            if (e.wheelDelta == 120 || e.detail == -3) { //上
                e.fx = "up";
            } else { //下
                e.fx = "down";
            }

            func(e);
        }

    }

    /*
     滚动滚动事件
     onmousewheel
     DOMMouseScroll  火狐   用传统的绑定方式无法实现   节点.on+事件名 = 回调函数      。  得用事件监听
     事件监听：

     事件目标.addEventListener(事件名,事件处理程序,是否捕获)  //标准的模式
     事件目标.attachEvent(on + 事件名,事件处理程序)
     */

    /*
     dom 			事件目标
     eventType		事件名或事件。类型     不加on
     fn				事件处理程序
     */
    function on(dom, eventType, fn) {
        if (dom.addEventListener) { //标准模式
            dom.addEventListener(eventType, fn);
        } else { //IE低版本
            dom.attachEvent("on" + eventType, fn);
        }
    }

})()

