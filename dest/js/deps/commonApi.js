/*!
 * @project : huya-assets
 * @version : huya-client
 * @author  : Mrfangge
 * @update  : 2017-05-12 9:59:46 am
 */define("deps/commonApi",[],function(require,exports,module){(function(r){var t=function(){return};t.prototype.getCookie=function(r){var t=null,e=/^(\s|\u00A0)+|(\s|\u00A0)+$/g;if(document.cookie&&document.cookie!=""){var n=document.cookie.split(";");for(var o=0;o<n.length;o++){var i=(n[o]||"").replace(e,"");if(i.substring(0,r.length+1)===r+"="){t=decodeURIComponent(i.substring(r.length+1));break}}}return t};t.prototype.setCookie=function(t,e,n){if(typeof n=="number"){}var o=new Date;o.setTime(+o+n*864e5);if(r.ActiveXObject){document.cookie=t+"="+e+(n==null?"":";expires="+o.toGMTString())+";path=/"}else{document.cookie=t+"="+e+(n==null?"":";expires="+o.toUTCString())+";path=/"}};t.prototype.clearCookie=function(r){this.set(r,"",-1)};t.prototype.getUrlParams=function(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i");var n=r.location.search.substr(1).match(e);if(n!=null)return decodeURIComponent(n[2]);return null};t.prototype.md5=function(r){var t=function(r,t){return r<<t|r>>>32-t};var e=function(r,t){var e,n,o,i,a;o=r&2147483648;i=t&2147483648;e=r&1073741824;n=t&1073741824;a=(r&1073741823)+(t&1073741823);if(e&n)return a^2147483648^o^i;if(e|n){if(a&1073741824)return a^3221225472^o^i;else return a^1073741824^o^i}else{return a^o^i}};var n=function(r,t,e){return r&t|~r&e};var o=function(r,t,e){return r&e|t&~e};var i=function(r,t,e){return r^t^e};var a=function(r,t,e){return t^(r|~e)};var u=function(r,o,i,a,u,c,f){r=e(r,e(e(n(o,i,a),u),f));return e(t(r,c),o)};var c=function(r,n,i,a,u,c,f){r=e(r,e(e(o(n,i,a),u),f));return e(t(r,c),n)};var f=function(r,n,o,a,u,c,f){r=e(r,e(e(i(n,o,a),u),f));return e(t(r,c),n)};var v=function(r,n,o,i,u,c,f){r=e(r,e(e(a(n,o,i),u),f));return e(t(r,c),n)};var p=function(r){var t;var e=r.length;var n=e+8;var o=(n-n%64)/64;var i=(o+1)*16;var a=Array(i-1);var u=0;var c=0;while(c<e){t=(c-c%4)/4;u=c%4*8;a[t]=a[t]|r.charCodeAt(c)<<u;c++}t=(c-c%4)/4;u=c%4*8;a[t]=a[t]|128<<u;a[i-2]=e<<3;a[i-1]=e>>>29;return a};var l=function(r){var t="",e="",n,o;for(o=0;o<=3;o++){n=r>>>o*8&255;e="0"+n.toString(16);t=t+e.substr(e.length-2,2)}return t};var s=function(r){r=r.replace(/\x0d\x0a/g,"\n");var t="";for(var e=0;e<r.length;e++){var n=r.charCodeAt(e);if(n<128){t+=String.fromCharCode(n)}else if(n>127&&n<2048){t+=String.fromCharCode(n>>6|192);t+=String.fromCharCode(n&63|128)}else{t+=String.fromCharCode(n>>12|224);t+=String.fromCharCode(n>>6&63|128);t+=String.fromCharCode(n&63|128)}}return t};var g=Array();var d,h,m,C,y,k,A,S,b;var w=7,x=12,U=17,$=22;var P=5,R=9,T=14,I=20;var M=4,j=11,B=16,D=23;var E=6,G=10,L=15,O=21;r=s(r);g=p(r);k=1732584193;A=4023233417;S=2562383102;b=271733878;for(d=0;d<g.length;d+=16){h=k;m=A;C=S;y=b;k=u(k,A,S,b,g[d+0],w,3614090360);b=u(b,k,A,S,g[d+1],x,3905402710);S=u(S,b,k,A,g[d+2],U,606105819);A=u(A,S,b,k,g[d+3],$,3250441966);k=u(k,A,S,b,g[d+4],w,4118548399);b=u(b,k,A,S,g[d+5],x,1200080426);S=u(S,b,k,A,g[d+6],U,2821735955);A=u(A,S,b,k,g[d+7],$,4249261313);k=u(k,A,S,b,g[d+8],w,1770035416);b=u(b,k,A,S,g[d+9],x,2336552879);S=u(S,b,k,A,g[d+10],U,4294925233);A=u(A,S,b,k,g[d+11],$,2304563134);k=u(k,A,S,b,g[d+12],w,1804603682);b=u(b,k,A,S,g[d+13],x,4254626195);S=u(S,b,k,A,g[d+14],U,2792965006);A=u(A,S,b,k,g[d+15],$,1236535329);k=c(k,A,S,b,g[d+1],P,4129170786);b=c(b,k,A,S,g[d+6],R,3225465664);S=c(S,b,k,A,g[d+11],T,643717713);A=c(A,S,b,k,g[d+0],I,3921069994);k=c(k,A,S,b,g[d+5],P,3593408605);b=c(b,k,A,S,g[d+10],R,38016083);S=c(S,b,k,A,g[d+15],T,3634488961);A=c(A,S,b,k,g[d+4],I,3889429448);k=c(k,A,S,b,g[d+9],P,568446438);b=c(b,k,A,S,g[d+14],R,3275163606);S=c(S,b,k,A,g[d+3],T,4107603335);A=c(A,S,b,k,g[d+8],I,1163531501);k=c(k,A,S,b,g[d+13],P,2850285829);b=c(b,k,A,S,g[d+2],R,4243563512);S=c(S,b,k,A,g[d+7],T,1735328473);A=c(A,S,b,k,g[d+12],I,2368359562);k=f(k,A,S,b,g[d+5],M,4294588738);b=f(b,k,A,S,g[d+8],j,2272392833);S=f(S,b,k,A,g[d+11],B,1839030562);A=f(A,S,b,k,g[d+14],D,4259657740);k=f(k,A,S,b,g[d+1],M,2763975236);b=f(b,k,A,S,g[d+4],j,1272893353);S=f(S,b,k,A,g[d+7],B,4139469664);A=f(A,S,b,k,g[d+10],D,3200236656);k=f(k,A,S,b,g[d+13],M,681279174);b=f(b,k,A,S,g[d+0],j,3936430074);S=f(S,b,k,A,g[d+3],B,3572445317);A=f(A,S,b,k,g[d+6],D,76029189);k=f(k,A,S,b,g[d+9],M,3654602809);b=f(b,k,A,S,g[d+12],j,3873151461);S=f(S,b,k,A,g[d+15],B,530742520);A=f(A,S,b,k,g[d+2],D,3299628645);k=v(k,A,S,b,g[d+0],E,4096336452);b=v(b,k,A,S,g[d+7],G,1126891415);S=v(S,b,k,A,g[d+14],L,2878612391);A=v(A,S,b,k,g[d+5],O,4237533241);k=v(k,A,S,b,g[d+12],E,1700485571);b=v(b,k,A,S,g[d+3],G,2399980690);S=v(S,b,k,A,g[d+10],L,4293915773);A=v(A,S,b,k,g[d+1],O,2240044497);k=v(k,A,S,b,g[d+8],E,1873313359);b=v(b,k,A,S,g[d+15],G,4264355552);S=v(S,b,k,A,g[d+6],L,2734768916);A=v(A,S,b,k,g[d+13],O,1309151649);k=v(k,A,S,b,g[d+4],E,4149444226);b=v(b,k,A,S,g[d+11],G,3174756917);S=v(S,b,k,A,g[d+2],L,718787259);A=v(A,S,b,k,g[d+9],O,3951481745);k=e(k,h);A=e(A,m);S=e(S,C);b=e(b,y)}var X=l(k)+l(A)+l(S)+l(b);return X.toLowerCase()};t.prototype.getPop=function(r){$("#"+r).show()};t.prototype.closePop=function(r){$("#"+r).hide()};t.prototype.debug=function(r){alertMsgBox(r,"tip")};r.commonApi=new t})(window,document)});