/*!
 * @project : huya-assets
 * @version : huya-client
 * @author  : Mrfangge
 * @update  : 2017-05-11 10:29:41 pm
 */var bShutdownCheckState=false;seajs.config({base:"./js/",alias:{jquery:"plugins/jquery.js",swiper:"plugins/swiper.js",commonApi:"deps/commonApi.js",upload:"deps/upload.js"},preload:["jquery"]});seajs.use(["jquery","app/main.js"],function(){window.jQuery=window.$=$;seajs.use("swiper",function(){var e=new Swiper("#swiper1",{effect:"fade",autoplay:5e3});var n=new Swiper("#swiper2",{pagination:"#swiper2 .swiper-pagination",paginationClickable:true,paginationBulletRender:function(e,n,i){return'<span class="'+i+" skydive-nav"+(n+1)+'"></span>'},autoplay:1e4});var i=new Swiper(".coach-view .swiper-container",{effect:"fade",prevButton:".prev-hidden-btn",nextButton:".next-hidden-btn",onSlideChangeStart:function(){r()}});$("#preview .prev-btn,.coach-view .prev-hidden-btn").on("click",function(e){e.preventDefault();if(i.activeIndex==0){i.slideTo(i.slides.length-1,1e3);return}i.slidePrev()});$("#preview .next-btn,.coach-view .next-hidden-btn").on("click",function(e){e.preventDefault();if(i.activeIndex==i.slides.length-1){i.slideTo(0,1e3);return}i.slideNext()});var a=new Swiper("#preview .swiper-container",{slidesPerView:6,prevButton:".prev-btn",nextButton:".next-btn",spaceBetween:20,onClick:function(e){i.slideTo(e.clickedIndex)}});function r(){$(".coach-preview .preview-on").removeClass("preview-on");var e=$(".coach-preview .swiper-slide").eq(i.activeIndex).addClass("preview-on");if(!e.hasClass("swiper-slide-visible")){if(e.index()>a.activeIndex){var n=Math.floor(a.width/e.width())-1;a.slideTo(e.index()-n)}else{a.slideTo(e.index())}}}var t=new Swiper("#preview2 .swiper-container",{slidesPerView:6,prevButton:".prev-btn",nextButton:".next-btn",spaceBetween:20})});var e=new BMap.Map("map1");var n=new BMap.Point(111.614457,22.71521);e.centerAndZoom(n,15);var i=new BMap.Marker(n);e.addOverlay(i);var a=new BMap.Map("map2");var r=new BMap.Point(117.579219,36.446141);a.centerAndZoom(r,15);var t=new BMap.Marker(r);a.addOverlay(t)});