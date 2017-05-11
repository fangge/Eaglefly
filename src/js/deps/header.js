define(function(require, exports, module) {
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
})