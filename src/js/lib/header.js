
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
$('.mobi-header .nav-link-btn').on('touchstart',function () {
    var nav = $(this).parent();
    if(nav.find('.sub-btn').hasClass('sub-btn-on')){
        nav.find('ul').hide();
        nav.find('.sub-btn').removeClass('sub-btn-on');
    }else{
        nav.find('ul').show();
        nav.find('.sub-btn').addClass('sub-btn-on');
    }

})
$('.nav-open').on('touchstart',function () {
    $(this).toggleClass('nav-close');
    $('.nav-link2').toggleClass('show');
})