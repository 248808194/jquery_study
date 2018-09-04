/**
 * Created by zhoutao on 18-5-17.
 */

//自执行函数 ,当页面框架加载完成后自动执行.

(function (arg) {

    var status = 1;
    $.extend({
        'zhoutao' : function () {
            return '12';
        }
    })
})(jQuery)


(function (arg) {

    $.extend({
        'zhoutao': function () {
            return 12;
        }
    })

})(jQuery)//将jquery当成参数传递到函数下,
