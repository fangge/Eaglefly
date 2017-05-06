var bShutdownCheckState = false;
seajs.config({
    base:'./js/',
    alias : {
        //三方库
        jquery:'plugins/jquery.js',
        swiper:'plugins/swiper.js',
        commonApi:'deps/commonApi.js',
        upload:'deps/upload.js',
    },
    preload: ["jquery"]
})
seajs.use(['jquery','app/main.js'],function () {
    // 全局$
    window.jQuery = window.$ = $;
    seajs.use('swiper',function () {
        var swiper = new Swiper('#swiper1', {
            pagination: '.swiper-pagination',
            spaceBetween: 30,
            effect: 'fade',
            autoplay:1,
            speed:8000
        });
        var swiper = new Swiper('#swiper2', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            paginationBulletRender: function (swiper, index, className) {
                return '<span class="'+className+' skydive-nav'+(index + 1) +'"></span>';
            }
        });
    })

});