define(function(require, exports, module) {

    require('deps/commonApi');
    require('deps/header');

    var body = $('body');
    window.isNarrow = body.hasClass('g-narrow');
    //宽窄屏切换
    $(window).on('resize', function(){
        var now = $(window).width();
        // 页面大小改变时 越过临界点触发
        if (now < 1428 && !isNarrow) {
            // 变窄
            $(window).trigger('resize:narrow');
            isNarrow = true;
        } else if (now >= 1428 && isNarrow) {
            // 变宽
            $(window).trigger('resize:wide');
            isNarrow = false;
        }
    });
    $(window).on('resize:narrow', function(){
        body.addClass('g-narrow');
    }).on('resize:wide', function(){
        body.removeClass('g-narrow');
    })
    $(window).trigger('resize');
})
