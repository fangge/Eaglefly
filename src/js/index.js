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


        var viewSwiper = new Swiper('.coach-view .swiper-container', {
            effect: 'fade',
            prevButton:'.prev-hidden-btn',
            nextButton:'.next-hidden-btn',
            onSlideChangeStart: function() {
                updateNavPosition()
            }
        })

        $('.coach-preview .prev-btn,.coach-view .prev-hidden-btn').on('click', function(e) {
            e.preventDefault()
            if (viewSwiper.activeIndex == 0) {
                viewSwiper.slideTo(viewSwiper.slides.length - 1, 1000);
                return
            }
            viewSwiper.slidePrev()
        })
        $('.coach-preview .next-btn,.coach-view .next-hidden-btn').on('click', function(e) {
            e.preventDefault()
            if (viewSwiper.activeIndex == viewSwiper.slides.length - 1) {
                viewSwiper.slideTo(0, 1000);
                return
            }
            viewSwiper.slideNext()
        })

        var previewSwiper = new Swiper('.coach-preview .swiper-container', {
            slidesPerView: 6,
            prevButton:'.prev-btn',
            nextButton:'.next-btn',
            spaceBetween:20,
            onClick: function(swiper) {
                viewSwiper.slideTo(swiper.clickedIndex)
            }
        })

        function updateNavPosition() {
            $('.coach-preview .preview-on').removeClass('preview-on');
            var activeNav = $('.coach-preview .swiper-slide').eq(viewSwiper.activeIndex).addClass('preview-on');
            if (!activeNav.hasClass('swiper-slide-visible')) {
                if (activeNav.index() > previewSwiper.activeIndex) {
                    var thumbsPerNav = Math.floor(previewSwiper.width / activeNav.width()) - 1
                    previewSwiper.slideTo(activeNav.index() - thumbsPerNav)
                } else {
                    previewSwiper.slideTo(activeNav.index())
                }
            }
        }

    })

});