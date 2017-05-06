define(function(require, exports, module) {
   $('#nav').find('.nav-link').on('mouseenter',function (e) {
       e.preventDefault();
       $('#nav').addClass('nav-on')
   }).on('mouseleave',function (e) {
       e.preventDefault();
       $('#nav').removeClass('nav-on')
   })
})