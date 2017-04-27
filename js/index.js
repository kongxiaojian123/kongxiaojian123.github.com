/**
 * Created by kongxiaojian on 2017/4/27.
 */
var Index = function () {
    this.init.apply(this, arguments);
};
$.extend(Index.prototype, {
    init: function () {
        var _this = this;
        _this.bindEvent();
    },
    bindEvent:function () {
        $('.menu-right').on('click',function () {
            if($(this).hasClass('hover')){
                $(this).removeClass('hover');
            }else{
                $(this).addClass('hover');
            }
        })
    }
});
new Index();