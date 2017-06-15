/*!
 * @project : huya-assets
 * @version : huya-client
 * @author  : Mrfangge
 * @update  : 2017-06-15 2:51:06 pm
 */define("app/main",["deps/commonApi","deps/header"],function(require,exports,module){require("deps/commonApi");require("deps/header");var r=$("body");window.isNarrow=r.hasClass("g-narrow");$(window).on("resize",function(){var r=$(window).width();if(r<1428&&!isNarrow){$(window).trigger("resize:narrow");isNarrow=true}else if(r>=1428&&isNarrow){$(window).trigger("resize:wide");isNarrow=false}});$(window).on("resize:narrow",function(){r.addClass("g-narrow")}).on("resize:wide",function(){r.removeClass("g-narrow")});$(window).trigger("resize")});define("deps/commonApi",[],function(require,exports,module){(function(r){var n=function(){return};n.prototype.getCookie=function(r){var n=null,e=/^(\s|\u00A0)+|(\s|\u00A0)+$/g;if(document.cookie&&document.cookie!=""){var o=document.cookie.split(";");for(var t=0;t<o.length;t++){var i=(o[t]||"").replace(e,"");if(i.substring(0,r.length+1)===r+"="){n=decodeURIComponent(i.substring(r.length+1));break}}}return n};n.prototype.setCookie=function(n,e,o){if(typeof o=="number"){}var t=new Date;t.setTime(+t+o*864e5);if(r.ActiveXObject){document.cookie=n+"="+e+(o==null?"":";expires="+t.toGMTString())+";path=/"}else{document.cookie=n+"="+e+(o==null?"":";expires="+t.toUTCString())+";path=/"}};n.prototype.clearCookie=function(r){this.set(r,"",-1)};n.prototype.getUrlParams=function(n){var e=new RegExp("(^|&)"+n+"=([^&]*)(&|$)","i");var o=r.location.search.substr(1).match(e);if(o!=null)return decodeURIComponent(o[2]);return null};n.prototype.md5=function(r){var n=function(r,n){return r<<n|r>>>32-n};var e=function(r,n){var e,o,t,i,a;t=r&2147483648;i=n&2147483648;e=r&1073741824;o=n&1073741824;a=(r&1073741823)+(n&1073741823);if(e&o)return a^2147483648^t^i;if(e|o){if(a&1073741824)return a^3221225472^t^i;else return a^1073741824^t^i}else{return a^t^i}};var o=function(r,n,e){return r&n|~r&e};var t=function(r,n,e){return r&e|n&~e};var i=function(r,n,e){return r^n^e};var a=function(r,n,e){return n^(r|~e)};var u=function(r,t,i,a,u,s,f){r=e(r,e(e(o(t,i,a),u),f));return e(n(r,s),t)};var s=function(r,o,i,a,u,s,f){r=e(r,e(e(t(o,i,a),u),f));return e(n(r,s),o)};var f=function(r,o,t,a,u,s,f){r=e(r,e(e(i(o,t,a),u),f));return e(n(r,s),o)};var c=function(r,o,t,i,u,s,f){r=e(r,e(e(a(o,t,i),u),f));return e(n(r,s),o)};var v=function(r){var n;var e=r.length;var o=e+8;var t=(o-o%64)/64;var i=(t+1)*16;var a=Array(i-1);var u=0;var s=0;while(s<e){n=(s-s%4)/4;u=s%4*8;a[n]=a[n]|r.charCodeAt(s)<<u;s++}n=(s-s%4)/4;u=s%4*8;a[n]=a[n]|128<<u;a[i-2]=e<<3;a[i-1]=e>>>29;return a};var d=function(r){var n="",e="",o,t;for(t=0;t<=3;t++){o=r>>>t*8&255;e="0"+o.toString(16);n=n+e.substr(e.length-2,2)}return n};var l=function(r){r=r.replace(/\x0d\x0a/g,"\n");var n="";for(var e=0;e<r.length;e++){var o=r.charCodeAt(e);if(o<128){n+=String.fromCharCode(o)}else if(o>127&&o<2048){n+=String.fromCharCode(o>>6|192);n+=String.fromCharCode(o&63|128)}else{n+=String.fromCharCode(o>>12|224);n+=String.fromCharCode(o>>6&63|128);n+=String.fromCharCode(o&63|128)}}return n};var p=Array();var w,g,m,h,C,$,y,k,A;var b=7,x=12,S=17,z=22;var N=5,T=9,U=14,D=20;var P=4,R=11,I=16,M=23;var j=6,B=10,E=15,G=21;r=l(r);p=v(r);$=1732584193;y=4023233417;k=2562383102;A=271733878;for(w=0;w<p.length;w+=16){g=$;m=y;h=k;C=A;$=u($,y,k,A,p[w+0],b,3614090360);A=u(A,$,y,k,p[w+1],x,3905402710);k=u(k,A,$,y,p[w+2],S,606105819);y=u(y,k,A,$,p[w+3],z,3250441966);$=u($,y,k,A,p[w+4],b,4118548399);A=u(A,$,y,k,p[w+5],x,1200080426);k=u(k,A,$,y,p[w+6],S,2821735955);y=u(y,k,A,$,p[w+7],z,4249261313);$=u($,y,k,A,p[w+8],b,1770035416);A=u(A,$,y,k,p[w+9],x,2336552879);k=u(k,A,$,y,p[w+10],S,4294925233);y=u(y,k,A,$,p[w+11],z,2304563134);$=u($,y,k,A,p[w+12],b,1804603682);A=u(A,$,y,k,p[w+13],x,4254626195);k=u(k,A,$,y,p[w+14],S,2792965006);y=u(y,k,A,$,p[w+15],z,1236535329);$=s($,y,k,A,p[w+1],N,4129170786);A=s(A,$,y,k,p[w+6],T,3225465664);k=s(k,A,$,y,p[w+11],U,643717713);y=s(y,k,A,$,p[w+0],D,3921069994);$=s($,y,k,A,p[w+5],N,3593408605);A=s(A,$,y,k,p[w+10],T,38016083);k=s(k,A,$,y,p[w+15],U,3634488961);y=s(y,k,A,$,p[w+4],D,3889429448);$=s($,y,k,A,p[w+9],N,568446438);A=s(A,$,y,k,p[w+14],T,3275163606);k=s(k,A,$,y,p[w+3],U,4107603335);y=s(y,k,A,$,p[w+8],D,1163531501);$=s($,y,k,A,p[w+13],N,2850285829);A=s(A,$,y,k,p[w+2],T,4243563512);k=s(k,A,$,y,p[w+7],U,1735328473);y=s(y,k,A,$,p[w+12],D,2368359562);$=f($,y,k,A,p[w+5],P,4294588738);A=f(A,$,y,k,p[w+8],R,2272392833);k=f(k,A,$,y,p[w+11],I,1839030562);y=f(y,k,A,$,p[w+14],M,4259657740);$=f($,y,k,A,p[w+1],P,2763975236);A=f(A,$,y,k,p[w+4],R,1272893353);k=f(k,A,$,y,p[w+7],I,4139469664);y=f(y,k,A,$,p[w+10],M,3200236656);$=f($,y,k,A,p[w+13],P,681279174);A=f(A,$,y,k,p[w+0],R,3936430074);k=f(k,A,$,y,p[w+3],I,3572445317);y=f(y,k,A,$,p[w+6],M,76029189);$=f($,y,k,A,p[w+9],P,3654602809);A=f(A,$,y,k,p[w+12],R,3873151461);k=f(k,A,$,y,p[w+15],I,530742520);y=f(y,k,A,$,p[w+2],M,3299628645);$=c($,y,k,A,p[w+0],j,4096336452);A=c(A,$,y,k,p[w+7],B,1126891415);k=c(k,A,$,y,p[w+14],E,2878612391);y=c(y,k,A,$,p[w+5],G,4237533241);$=c($,y,k,A,p[w+12],j,1700485571);A=c(A,$,y,k,p[w+3],B,2399980690);k=c(k,A,$,y,p[w+10],E,4293915773);y=c(y,k,A,$,p[w+1],G,2240044497);$=c($,y,k,A,p[w+8],j,1873313359);A=c(A,$,y,k,p[w+15],B,4264355552);k=c(k,A,$,y,p[w+6],E,2734768916);y=c(y,k,A,$,p[w+13],G,1309151649);$=c($,y,k,A,p[w+4],j,4149444226);A=c(A,$,y,k,p[w+11],B,3174756917);k=c(k,A,$,y,p[w+2],E,718787259);y=c(y,k,A,$,p[w+9],G,3951481745);$=e($,g);y=e(y,m);k=e(k,h);A=e(A,C)}var L=d($)+d(y)+d(k)+d(A);return L.toLowerCase()};n.prototype.getPop=function(r){$("#"+r).show()};n.prototype.closePop=function(r){$("#"+r).hide()};n.prototype.debug=function(r){alertMsgBox(r,"tip")};r.commonApi=new n})(window,document)});define("deps/header",[],function(require,exports,module){$("#nav:not(.nav-fixed)").find(".nav-link").on("mouseenter",function(r){r.preventDefault();$("#nav").addClass("nav-on")}).on("mouseleave",function(r){r.preventDefault();$("#nav").removeClass("nav-on")});$(window).on("scroll",function(){var r=$(window).scrollTop();if(r>0){$("#nav").addClass("nav-on nav-fixed")}else{$("#nav").removeClass("nav-on nav-fixed")}});$("#gotop").on("click",function(){$("body,html").animate({scrollTop:0},400)})});