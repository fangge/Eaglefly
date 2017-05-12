/*!
 * @project : huya-assets
 * @version : huya-client
 * @author  : Mrfangge
 * @update  : 2017-05-12 9:59:46 am
 */!function(e,r){function t(e){return function(r){return{}.toString.call(r)=="[object "+e+"]"}}function n(){return x++}function a(e){return e.match(S)[0]}function i(e){for(e=e.replace(U,"/");e.match(q);)e=e.replace(q,"/");return e=e.replace(C,"$1/")}function s(e){var r=e.length-1,t=e.charAt(r);return"#"===t?e.substring(0,r):".js"===e.substring(r-2)||e.indexOf("?")>0||".css"===e.substring(r-3)||"/"===t?e:e+".js"}function o(e){var r=b.alias;return r&&T(r[e])?r[e]:e}function u(e){var r=b.paths,t;return r&&(t=e.match(I))&&T(r[t[1]])&&(e=r[t[1]]+t[2]),e}function c(e){var r=b.vars;return r&&e.indexOf("{")>-1&&(e=e.replace(j,function(e,t){return T(r[t])?r[t]:e})),e}function f(e){var r=b.map,t=e;if(r)for(var n=0,a=r.length;a>n;n++){var i=r[n];if(t=w(i)?i(e)||e:e.replace(i[0],i[1]),t!==e)break}return t}function l(e,r){var t,n=e.charAt(0);if(G.test(e))t=e;else if("."===n)t=i((r?a(r):b.cwd)+e);else if("/"===n){var s=b.cwd.match(R);t=s?s[0]+e.substring(1):e}else t=b.base+e;return 0===t.indexOf("//")&&(t=location.protocol+t),t}function v(e,r){if(!e)return"";e=o(e),e=u(e),e=c(e),e=s(e);var t=l(e,r);return t=f(t)}function d(e){return e.hasAttribute?e.src:e.getAttribute("src",4)}function h(e,r,t){var n=H.test(e),a=L.createElement(n?"link":"script");if(t){var i=w(t)?t(e):t;i&&(a.charset=i)}p(a,r,n,e),n?(a.rel="stylesheet",a.href=e):(a.async=!0,a.src=e),M=a,V?F.insertBefore(a,V):F.appendChild(a),M=null}function p(e,t,n,a){function i(){e.onload=e.onerror=e.onreadystatechange=null,n||b.debug||F.removeChild(e),e=null,t()}var s="onload"in e;return!n||!K&&s?(s?(e.onload=i,e.onerror=function(){O("error",{uri:a,node:e}),i()}):e.onreadystatechange=function(){/loaded|complete/.test(e.readyState)&&i()},r):(setTimeout(function(){g(e,t)},1),r)}function g(e,r){var t=e.sheet,n;if(K)t&&(n=!0);else if(t)try{t.cssRules&&(n=!0)}catch(e){"NS_ERROR_DOM_SECURITY_ERR"===e.name&&(n=!0)}setTimeout(function(){n?r():g(e,r)},20)}function E(){if(M)return M;if(P&&"interactive"===P.readyState)return P;for(var e=F.getElementsByTagName("script"),r=e.length-1;r>=0;r--){var t=e[r];if("interactive"===t.readyState)return P=t}}function m(e){var r=[];return e.replace(Y,"").replace(W,function(e,t,n){n&&r.push(n)}),r}function y(e,r){this.uri=e,this.dependencies=r||[],this.exports=null,this.status=0,this._waitings={},this._remain=0}if(!e.seajs){var _=e.seajs={version:"2.2.0"},b=_.data={},A=t("Object"),T=t("String"),D=Array.isArray||t("Array"),w=t("Function"),x=0,N=b.events={};_.on=function(e,r){var t=N[e]||(N[e]=[]);return t.push(r),_},_.off=function(e,r){if(!e&&!r)return N=b.events={},_;var t=N[e];if(t)if(r)for(var n=t.length-1;n>=0;n--)t[n]===r&&t.splice(n,1);else delete N[e];return _};var O=_.emit=function(e,r){var t=N[e],n;if(t)for(t=t.slice();n=t.shift();)n(r);return _},S=/[^?#]*\//,U=/\/\.\//g,q=/\/[^\/]+\/\.\.\//,C=/([^:\/])\/\//g,I=/^([^\/:]+)(\/.+)$/,j=/{([^{]+)}/g,G=/^\/\/.|:\//,R=/^.*?\/\/.*?\//,L=document,$=a(L.URL),k=L.scripts,X=L.getElementById("seajsnode")||k[k.length-1],B=a(d(X)||$);_.resolve=v;var F=L.head||L.getElementsByTagName("head")[0]||L.documentElement,V=F.getElementsByTagName("base")[0],H=/\.css(?:\?|$)/i,M,P,K=+navigator.userAgent.replace(/.*AppleWebKit\/(\d+)\..*/,"$1")<536;_.request=h;var W=/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|\/\*[\S\s]*?\*\/|\/(?:\\\/|[^\/\r\n])+\/(?=[^\/])|\/\/.*|\.\s*require|(?:^|[^$])\brequire\s*\(\s*(["'])(.+?)\1\s*\)/g,Y=/\\\\/g,z=_.cache={},J,Q={},Z={},ee={},re=y.STATUS={FETCHING:1,SAVED:2,LOADING:3,LOADED:4,EXECUTING:5,EXECUTED:6};y.prototype.resolve=function(){for(var e=this,r=e.dependencies,t=[],n=0,a=r.length;a>n;n++)t[n]=y.resolve(r[n],e.uri);return t},y.prototype.load=function(){var e=this;if(!(e.status>=re.LOADING)){e.status=re.LOADING;var t=e.resolve();O("load",t);for(var n=e._remain=t.length,a,i=0;n>i;i++)a=y.get(t[i]),a.status<re.LOADED?a._waitings[e.uri]=(a._waitings[e.uri]||0)+1:e._remain--;if(0===e._remain)return e.onload(),r;var s={};for(i=0;n>i;i++)a=z[t[i]],a.status<re.FETCHING?a.fetch(s):a.status===re.SAVED&&a.load();for(var o in s)s.hasOwnProperty(o)&&s[o]()}},y.prototype.onload=function(){var e=this;e.status=re.LOADED,e.callback&&e.callback();var r=e._waitings,t,n;for(t in r)r.hasOwnProperty(t)&&(n=z[t],n._remain-=r[t],0===n._remain&&n.onload());delete e._waitings,delete e._remain},y.prototype.fetch=function(e){function t(){_.request(s.requestUri,s.onRequest,s.charset)}function n(){delete Q[o],Z[o]=!0,J&&(y.save(i,J),J=null);var e,r=ee[o];for(delete ee[o];e=r.shift();)e.load()}var a=this,i=a.uri;a.status=re.FETCHING;var s={uri:i};O("fetch",s);var o=s.requestUri||i;return!o||Z[o]?(a.load(),r):Q[o]?(ee[o].push(a),r):(Q[o]=!0,ee[o]=[a],O("request",s={uri:i,requestUri:o,onRequest:n,charset:b.charset}),s.requested||(e?e[s.requestUri]=t:t()),r)},y.prototype.exec=function(){function e(r){return y.get(e.resolve(r)).exec()}var t=this;if(t.status>=re.EXECUTING)return t.exports;t.status=re.EXECUTING;var a=t.uri;e.resolve=function(e){return y.resolve(e,a)},e.async=function(r,t){return y.use(r,t,a+"_async_"+n()),e};var i=t.factory,s=w(i)?i(e,t.exports={},t):i;return s===r&&(s=t.exports),delete t.factory,t.exports=s,t.status=re.EXECUTED,O("exec",t),s},y.resolve=function(e,r){var t={id:e,refUri:r};return O("resolve",t),t.uri||_.resolve(t.id,r)},y.define=function(e,t,n){var a=arguments.length;1===a?(n=e,e=r):2===a&&(n=t,D(e)?(t=e,e=r):t=r),!D(t)&&w(n)&&(t=m(""+n));var i={id:e,uri:y.resolve(e),deps:t,factory:n};if(!i.uri&&L.attachEvent){var s=E();s&&(i.uri=s.src)}O("define",i),i.uri?y.save(i.uri,i):J=i},y.save=function(e,r){var t=y.get(e);t.status<re.SAVED&&(t.id=r.id||e,t.dependencies=r.deps||[],t.factory=r.factory,t.status=re.SAVED)},y.get=function(e,r){return z[e]||(z[e]=new y(e,r))},y.use=function(r,t,n){var a=y.get(n,D(r)?r:[r]);a.callback=function(){for(var r=[],n=a.resolve(),i=0,s=n.length;s>i;i++)r[i]=z[n[i]].exec();t&&t.apply(e,r),delete a.callback},a.load()},y.preload=function(e){var r=b.preload,t=r.length;t?y.use(r,function(){r.splice(0,t),y.preload(e)},b.cwd+"_preload_"+n()):e()},_.use=function(e,r){return y.preload(function(){y.use(e,r,b.cwd+"_use_"+n())}),_},y.define.cmd={},e.define=y.define,_.Module=y,b.fetchedList=Z,b.cid=n,_.require=function(e){var r=y.get(y.resolve(e));return r.status<re.EXECUTING&&(r.onload(),r.exec()),r.exports};var te=/^(.+?\/)(\?\?)?(seajs\/)+/;b.base=(B.match(te)||["",B])[1],b.dir=B,b.cwd=$,b.charset="utf-8",b.preload=function(){var e=[],r=location.search.replace(/(seajs-\w+)(&|$)/g,"$1=1$2");return r+=" "+L.cookie,r.replace(/(seajs-\w+)=1/g,function(r,t){e.push(t)}),e}(),_.config=function(e){for(var r in e){var t=e[r],n=b[r];if(n&&A(n))for(var a in t)n[a]=t[a];else D(n)?t=n.concat(t):"base"===r&&("/"!==t.slice(-1)&&(t+="/"),t=l(t)),b[r]=t}return O("config",e),_}}}(this);