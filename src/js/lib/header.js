
$('#nav:not(.nav-fixed)').find('.nav-link').on('mouseenter',function (e) {
   e.preventDefault();
   $('#nav').addClass('nav-on')
}).on('mouseleave',function (e) {
   e.preventDefault();
   $('#nav').removeClass('nav-on')
})

$(window).on('scroll', function() {
    var now = $(window).scrollTop();
    if(now>0){
        $('#nav').addClass('nav-on nav-fixed')
    }else{
        $('#nav').removeClass('nav-on nav-fixed')
    }
})

$("#gotop").on('click',function () {
    $('body,html').animate({scrollTop:0},400)
})
$('.mobi-header .nav-link-btn').on('click',function () {
    var nav = $(this).parent();
    if(nav.find('.sub-btn').hasClass('sub-btn-on')){
        nav.find('ul').hide();
        nav.find('.sub-btn').removeClass('sub-btn-on');
    }else{
        nav.find('ul').show();
        nav.find('.sub-btn').addClass('sub-btn-on');
    }

})
$('.nav-open').on('click',function () {
    $(this).toggleClass('nav-close');
    $('.nav-link2').toggleClass('show');
})

// 宽窄屏状态
var body = $('body');
window.isNarrow = body.hasClass('g-narrow');

//宽窄屏切换
$(window).on('resize', function(){
    var now = $(window).width();
    // 页面大小改变时 越过临界点触发
    if (now < 1220 && !isNarrow) {
        // 变窄
        $(window).trigger('resize:narrow');
        isNarrow = true;
    } else if (now >= 1220 && isNarrow) {
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
