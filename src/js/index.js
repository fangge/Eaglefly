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
            effect: 'fade',
            autoplay:5000
        });
        var swiper2 = new Swiper('#swiper2', {
            pagination: '#swiper2 .swiper-pagination',
            paginationClickable: true,
            paginationBulletRender: function (swiper, index, className) {
                return '<span class="'+className+' skydive-nav'+(index + 1) +'"></span>';
            },
            autoplay:10000
        });
    })

});