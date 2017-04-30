/**
 * Created by kongxiaojian on 2017/4/27.
 */
var Index = function () {
    this.init.apply(this, arguments);
};
$.extend(Index.prototype, {
    currentModule:null,
    init: function () {
        var _this = this;
        _this.setMenu();
        _this.bindEvent();
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
                    }
                    eleStr +='><a href="javascript:;" data-url="'+pageData.url+'">'+pageData.title+'</a></li>';
                }
                $('.navmenu').html(eleStr);
                _this.getData();
            }
        });
        $('.navmenu').on('click','a',function () {
            var url = $(this).data('url');
            $(this).parents('li').addClass('current-nav').siblings('.current-nav').removeClass('current-nav');
            _this.getData();
        });
    },
    bindEvent:function () {
    },
    getData:function () {
        var url = $('.navmenu .current-nav a').data('url');
        if(this.currentModule==url)return;
        this.currentModule=url;
        $.getJSON(this.currentModule+'./modules/config.json', function(res){
            if(res.code==1){
                console.log(res);
            }
        });
    }
});
new Index();