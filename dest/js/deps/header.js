/*!
 * @project : huya-assets
 * @version : huya-client
 * @author  : Mrfangge
 * @update  : 2017-06-01 7:05:19 pm
 */define("deps/header",[],function(require,exports,module){$("#nav:not(.nav-fixed)").find(".nav-link").on("mouseenter",function(n){n.preventDefault();$("#nav").addClass("nav-on")}).on("mouseleave",function(n){n.preventDefault();$("#nav").removeClass("nav-on")});$(window).on("scroll",function(){var n=$(window).scrollTop();if(n>0){$("#nav").addClass("nav-on nav-fixed")}else{$("#nav").removeClass("nav-on nav-fixed")}});$("#gotop").on("click",function(){$("body,html").animate({scrollTop:0},400)})});