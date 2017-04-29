/**
 * Created by kongxiaojian on 2017/4/27.
 */
var Index = function () {
    this.init.apply(this, arguments);
};
$.extend(Index.prototype, {
    iframe:$('.main'),
    init: function () {
        var _this = this;
        _this.bindEvent();
        _this.setMenu();
    },
    setMenu:function () {
        var _this = this;
        $.getJSON('./modules/config.json', function(res){
            if(res.code==1){
                var data = res.data;
                var eleStr = '';
                for(var i=0;i<data.pageList.length;i++){
                    var pageData = data.pageList[i];
                    eleStr +='<li';
                    if(i==0){
                        eleStr +=' class="current-nav"';
                        _this.iframe.attr('src',pageData.url).data('url',pageData.url);
                    }
                    eleStr +='><a href="javascript:;" data-url="'+pageData.url+'">'+pageData.title+'</a></li>';
                }
                $('.navmenu').html(eleStr);
            }
        });
        $('.navmenu').on('click','a',function () {
            var url = $(this).data('url');
            $(this).parents('li').addClass('current-nav').siblings('.current-nav').removeClass('current-nav');
            var iframeUrl = _this.iframe.data('url');
            url!=iframeUrl&&_this.iframe.attr('src',url).data('url',url);
        });
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