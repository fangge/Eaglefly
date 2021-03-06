
require('./lib/swiper');
require('./lib/jPages.min')
require('./lib/commonApi')
require('./lib/header');

$(window).load(function() {
    $('.moment').find('a').on('click',function(){
        var url = $(this).attr('data-href'),id = url.match(/http:\/\/v\.youku\.com\/v_show\/id_(.+)\.html/)[1];
        if(/Android|webOS|iPhone|Windows Phone|iPod|BlackBerry|SymbianOS/i.test(window.navigator.userAgent)){
            //如果是手机，直接打开播放页
            window.open(url);
        }else{
            $('#video-pop').html("<embed src='http://static.youku.com/v20170518.0/v/swf/upsplayer/loader.swf?VideoIDS="+id+"&isAutoPlay=true&embedid=MjE4LjE5LjQxLjE3MAI2OTE3NjM4OTcCAg%3D%3D&wd=&winType=adshow&cna=dLuREWxPpncCAduJtEzsztAm&partnerid=0edbfd2e4fc91b72&vext=pid%253D0edbfd2e4fc91b72%2526emb%253DMjE4LjE5LjQxLjE3MAI2OTE3NjM4OTcCAg%253D%253D%2526bc%253D%2526cna%253DdLuREWxPpncCAduJtEzsztAm%2526vvlogext%253Dpc_i%25253D1494340674365RHB%252526pc_u%25253D-%252526rvpvid%25253D-%252526rycid%25253D-%252526yvft%25253D1496311498031%252526vsidc%25253D1%252526seid%25253D1496295717225hPw%252526vstp%25253D13%252526svstp%25253D21%2526type%253D0%2526embsig%253D1_1496312684_774c5b2bbd5050f0424aff14a085d0d8' allowFullScreen='true' quality='high' width='600' height='400' align='middle' allowScriptAccess='always' type='application/x-shockwave-flash'></embed>").show();
            $('#video-wrap').show();
        }


    })

    $('#video-wrap').on('click',function(){
        $(this).hide();
        $('#video-pop').html('').hide();
    })

    if($('#list').find('li').length>6){
        $('.page-nav').jPages({
            containerID:"list",
            previous:"上一页",
            next:"下一页",
            perPage:6
        })
    }
    if($('#list2').find('li').length>6){
        $('.page-nav').jPages({
            containerID:"list2",
            previous:"上一页",
            next:"下一页",
            perPage:12
        })
    }

    var swiper = new Swiper('#swiper1', {
        effect: 'fade',
        autoplay:5000,
        lazyLoading : true
    });
    var swiper2 = new Swiper('#swiper2', {
        pagination: '#swiper2 .swiper-pagination',
        paginationClickable: true,
        paginationBulletRender: function (swiper, index, className) {
            return '<span class="'+className+' skydive-nav'+(index + 1) +'"></span>';
        },
        autoplay:10000
    });
    var swiper = new Swiper('#mobi-coach .swiper-container', {
        slidesPerView: 3,
        prevButton:'#mobi-coach .prev-btn',
        nextButton:'#mobi-coach .next-btn',
        spaceBetween:20
    });

    var viewSwiper = new Swiper('.coach-view .swiper-container', {
        effect: 'fade',
        prevButton:'.prev-hidden-btn',
        nextButton:'.next-hidden-btn',
        onSlideChangeStart: function() {
            updateNavPosition()
        }
    })

    $('#preview .prev-btn,.coach-view .prev-hidden-btn').on('click', function(e) {
        e.preventDefault()
        if (viewSwiper.activeIndex == 0) {
            viewSwiper.slideTo(viewSwiper.slides.length - 1, 1000);
            return
        }
        viewSwiper.slidePrev()
    })
    $('#preview .next-btn,.coach-view .next-hidden-btn').on('click', function(e) {
        e.preventDefault()
        if (viewSwiper.activeIndex == viewSwiper.slides.length - 1) {
            viewSwiper.slideTo(0, 1000);
            return
        }
        viewSwiper.slideNext()
    })

    var previewSwiper = new Swiper('#preview .swiper-container', {
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

    var previewSwiper2 = new Swiper('#preview2 .swiper-container', {
        slidesPerView: 6,
        prevButton:'.prev-btn',
        nextButton:'.next-btn',
        spaceBetween:20
    });
    var map1 = new BMap.Map("map1");
    var point1 = new BMap.Point(111.614457,22.71521);
    map1.centerAndZoom(point1,15);
    var marker = new BMap.Marker(point1);
    map1.addOverlay(marker);

    var map2 = new BMap.Map("map2");
    var point2 = new BMap.Point(117.579219,36.446141);
    map2.centerAndZoom(point2,15);
    var marker2 = new BMap.Marker(point2);
    map2.addOverlay(marker2);

})