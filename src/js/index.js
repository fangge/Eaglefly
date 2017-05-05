var bShutdownCheckState = false;
seajs.config({
    base:'./js/',
    alias : {
        //三方库
        jquery:'plugins/jquery.js',
        nicescroll:'plugins/jquery.nicescroll.min.js',
        commonApi:'deps/commonApi.js',
        upload:'deps/upload.js',
    },
    preload: ["jquery"]
})
seajs.use(['jquery','app/main.js'],function () {
    // 全局$
    window.jQuery = window.$ = $;

    seajs.use('nicescroll',function () {
        $('#vhuya-client-wrap').niceScroll({
            cursorcolor:'#d9d9d9',
            cursoropacitymin:1,
            cursoropacitymax:1,
            cursorwidth:'8px',
            background:'transparent',
            cursorborder:'none',
            cursorborderradius: '5px',
            horizrailenabled:false
        });
    })

    //下载完成后是否关机
    $('#vhuya-client-checkbox').change(function () {
        if($(this).prop('checked')){
            bShutdownCheckState = true
        }else{
            bShutdownCheckState = false;
        }
    })

});