(function(){var l,n=this;function p(a){return void 0!==a}
function q(a,b,c){a=a.split(".");c=c||n;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&p(b)?c[d]=b:c[d]?c=c[d]:c=c[d]={}}
function r(a,b){a=a.split(".");b=b||n;for(var c;c=a.shift();)if(null!=b[c])b=b[c];else return null;return b}
function t(){}
function aa(a){a.getInstance=function(){return a.Ja?a.Ja:a.Ja=new a}}
function ba(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function ca(a){return"array"==ba(a)}
function da(a){var b=ba(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function u(a){return"string"==typeof a}
function ea(a){return"function"==ba(a)}
function fa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function ga(a){return a[ia]||(a[ia]=++ja)}
var ia="closure_uid_"+(1E9*Math.random()>>>0),ja=0;function ka(a,b,c){return a.call.apply(a.bind,arguments)}
function la(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function w(a,b,c){w=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ka:la;return w.apply(null,arguments)}
function ma(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
function na(a,b){for(var c in b)a[c]=b[c]}
var x=Date.now||function(){return+new Date};
function y(a,b){function c(){}
c.prototype=b.prototype;a.B=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.fc=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;function oa(a){if(Error.captureStackTrace)Error.captureStackTrace(this,oa);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
y(oa,Error);oa.prototype.name="CustomError";var pa;function qa(a){return/^[\s\xa0]*$/.test(a)}
var ra=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function sa(a,b){return a<b?-1:a>b?1:0}
function ta(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var ua=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(u(a))return u(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},z=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=u(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},va=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=u(a)?a.split(""):a,k=0;k<d;k++)if(k in g){var h=g[k];
b.call(c,h,k,a)&&(e[f++]=h)}return e},wa=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=u(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));
return e},xa=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=u(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1};
function ya(a,b){a:{for(var c=a.length,d=u(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:u(a)?a.charAt(b):a[b]}
function Ca(a,b){return 0<=ua(a,b)}
function Da(a,b){b=ua(a,b);0<=b&&Array.prototype.splice.call(a,b,1)}
function Ea(a){return Array.prototype.concat.apply(Array.prototype,arguments)}
function Fa(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Ga(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(da(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
function Ha(a,b,c,d){return Array.prototype.splice.apply(a,Ia(arguments,1))}
function Ia(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
;function Ja(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Ka(a){var b=La,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function Ma(){var a=Na,b;for(b in a)return!1;return!0}
function Oa(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function Pa(a){var b={},c;for(c in a)b[c]=a[c];return b}
var Qa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ra(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Qa.length;f++)c=Qa[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var A;a:{var Sa=n.navigator;if(Sa){var Ta=Sa.userAgent;if(Ta){A=Ta;break a}}A=""}function B(a){return-1!=A.indexOf(a)}
;function Ua(){return(B("Chrome")||B("CriOS"))&&!B("Edge")}
;function Va(){this.b="";this.f=Wa}
Va.prototype.va=!0;Va.prototype.ua=function(){return this.b};
function Xa(a){return a instanceof Va&&a.constructor===Va&&a.f===Wa?a.b:"type_error:SafeUrl"}
var Ya=/^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i;function Za(a){if(a instanceof Va)return a;a=a.va?a.ua():String(a);Ya.test(a)||(a="about:invalid#zClosurez");return $a(a)}
var Wa={};function $a(a){var b=new Va;b.b=a;return b}
$a("about:blank");function ab(){this.b="";this.f=bb}
ab.prototype.va=!0;ab.prototype.ua=function(){return this.b};
var bb={};function cb(){this.b=""}
cb.prototype.va=!0;cb.prototype.ua=function(){return this.b};
function db(a){var b=new cb;b.b=a;return b}
db("<!DOCTYPE html>");db("");db("<br>");function eb(a,b){b=b instanceof Va?b:Za(b);a.href=Xa(b)}
function fb(a,b){a.rel="stylesheet";a.href=b instanceof ab&&b.constructor===ab&&b.f===bb?b.b:"type_error:TrustedResourceUrl"}
;function gb(a,b,c){a&&(a.dataset?a.dataset[hb(b)]=c:a.setAttribute("data-"+b,c))}
function C(a,b){return a?a.dataset?a.dataset[hb(b)]:a.getAttribute("data-"+b):null}
function ib(a,b){a&&(a.dataset?delete a.dataset[hb(b)]:a.removeAttribute("data-"+b))}
var jb={};function hb(a){return jb[a]||(jb[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
;function kb(a){n.setTimeout(function(){throw a;},0)}
var lb;
function mb(){var a=n.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!B("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=w(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!B("Trident")&&!B("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(p(c.next)){c=c.next;var a=c.Ha;c.Ha=null;a()}};
return function(a){d.next={Ha:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){n.setTimeout(a,0)}}
;function nb(a,b,c){this.i=c;this.g=a;this.j=b;this.f=0;this.b=null}
nb.prototype.get=function(){var a;0<this.f?(this.f--,a=this.b,this.b=a.next,a.next=null):a=this.g();return a};
function ob(a,b){a.j(b);a.f<a.i&&(a.f++,b.next=a.b,a.b=b)}
;function pb(){this.f=this.b=null}
var rb=new nb(function(){return new qb},function(a){a.reset()},100);
pb.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};
function qb(){this.next=this.scope=this.b=null}
qb.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
qb.prototype.reset=function(){this.next=this.scope=this.b=null};function sb(a,b){tb||ub();vb||(tb(),vb=!0);var c=wb,d=rb.get();d.set(a,b);c.f?c.f.next=d:c.b=d;c.f=d}
var tb;function ub(){var a=n.Promise;if(-1!=String(a).indexOf("[native code]")){var b=a.resolve(void 0);tb=function(){b.then(xb)}}else tb=function(){var a=xb;
!ea(n.setImmediate)||n.Window&&n.Window.prototype&&!B("Edge")&&n.Window.prototype.setImmediate==n.setImmediate?(lb||(lb=mb()),lb(a)):n.setImmediate(a)}}
var vb=!1,wb=new pb;function xb(){for(var a;a=wb.remove();){try{a.b.call(a.scope)}catch(b){kb(b)}ob(rb,a)}vb=!1}
;function D(){this.f=this.f;this.K=this.K}
D.prototype.f=!1;D.prototype.dispose=function(){this.f||(this.f=!0,this.A())};
function yb(a,b){a.f?p(void 0)?b.call(void 0):b():(a.K||(a.K=[]),a.K.push(p(void 0)?w(b,void 0):b))}
D.prototype.A=function(){if(this.K)for(;this.K.length;)this.K.shift()()};
function zb(a){a&&"function"==typeof a.dispose&&a.dispose()}
function Ab(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];da(d)?Ab.apply(null,d):zb(d)}}
;function E(a){D.call(this);this.j=1;this.g=[];this.i=0;this.b=[];this.H={};this.w=!!a}
y(E,D);l=E.prototype;l.subscribe=function(a,b,c){var d=this.H[a];d||(d=this.H[a]=[]);var e=this.j;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.j=e+3;d.push(e);return e};
l.unsubscribe=function(a,b,c){if(a=this.H[a]){var d=this.b;if(a=ya(a,function(a){return d[a+1]==b&&d[a+2]==c}))return this.S(a)}return!1};
l.S=function(a){var b=this.b[a];if(b){var c=this.H[b];0!=this.i?(this.g.push(a),this.b[a+1]=t):(c&&Da(c,a),delete this.b[a],delete this.b[a+1],delete this.b[a+2])}return!!b};
l.M=function(a,b){var c=this.H[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.w)for(e=0;e<c.length;e++){var g=c[e];Bb(this.b[g+1],this.b[g+2],d)}else{this.i++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.b[g+1].apply(this.b[g+2],d)}finally{if(this.i--,0<this.g.length&&0==this.i)for(;c=this.g.pop();)this.S(c)}}return 0!=e}return!1};
function Bb(a,b,c){sb(function(){a.apply(b,c)})}
l.clear=function(a){if(a){var b=this.H[a];b&&(z(b,this.S,this),delete this.H[a])}else this.b.length=0,this.H={}};
l.ba=function(a){if(a){var b=this.H[a];return b?b.length:0}a=0;for(b in this.H)a+=this.ba(b);return a};
l.A=function(){E.B.A.call(this);this.clear();this.g.length=0};var Cb=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};q("yt.config_",Cb,void 0);q("yt.tokens_",window.yt&&window.yt.tokens_||{},void 0);var Db=window.yt&&window.yt.msgs_||r("window.ytcfg.msgs")||{};q("yt.msgs_",Db,void 0);function Eb(a){Fb(Cb,arguments)}
function F(a,b){return a in Cb?Cb[a]:b}
function G(a,b){ea(a)&&(a=Gb(a));return window.setTimeout(a,b)}
function Hb(a){window.clearTimeout(a)}
function Gb(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Ib(b)}}:a}
function Ib(a,b){var c=r("yt.logging.errors.log");c?c(a,b,void 0,void 0,void 0):(c=F("ERRORS",[]),c.push([a,b,void 0,void 0,void 0]),Eb("ERRORS",c))}
function Fb(a,b){if(1<b.length){var c=b[0];a[c]=b[1]}else for(c in b=b[0],b)a[c]=b[c]}
var Jb=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()},Kb="Microsoft Internet Explorer"==navigator.appName;var Lb=r("yt.pubsub.instance_")||new E;E.prototype.subscribe=E.prototype.subscribe;E.prototype.unsubscribeByKey=E.prototype.S;E.prototype.publish=E.prototype.M;E.prototype.clear=E.prototype.clear;q("yt.pubsub.instance_",Lb,void 0);var Mb=r("yt.pubsub.subscribedKeys_")||{};q("yt.pubsub.subscribedKeys_",Mb,void 0);var Nb=r("yt.pubsub.topicToKeys_")||{};q("yt.pubsub.topicToKeys_",Nb,void 0);var Ob=r("yt.pubsub.isSynchronous_")||{};q("yt.pubsub.isSynchronous_",Ob,void 0);
var Pb=r("yt.pubsub.skipSubId_")||null;q("yt.pubsub.skipSubId_",Pb,void 0);function Qb(a,b,c){var d=Rb();if(d){var e=d.subscribe(a,function(){if(!Pb||Pb!=e){var d=arguments,g;g=function(){Mb[e]&&b.apply(c||window,d)};
try{Ob[a]?g():G(g,0)}catch(k){Ib(k)}}},c);
Mb[e]=!0;Nb[a]||(Nb[a]=[]);Nb[a].push(e);return e}return 0}
function Sb(a){var b=Rb();b&&("number"==typeof a?a=[a]:"string"==typeof a&&(a=[parseInt(a,10)]),z(a,function(a){b.unsubscribeByKey(a);delete Mb[a]}))}
function Tb(a,b){var c=Rb();return c?c.publish.apply(c,arguments):!1}
function Ub(a){Nb[a]&&(a=Nb[a],z(a,function(a){Mb[a]&&delete Mb[a]}),a.length=0)}
function Vb(a){var b=Rb();if(b)if(b.clear(a),a)Ub(a);else for(var c in Nb)Ub(c)}
function Rb(){return r("yt.pubsub.instance_")}
;function Wb(a,b){if(window.spf){var c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Xb,""),c=c.replace(Yb,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Zb(a,b)}
function Zb(a,b){var c=$b(a),d=document.getElementById(c),e=d&&C(d,"loaded"),f=d&&!e;e?b&&b():(b&&(e=Qb(c,b),b=""+ga(b),ac[b]=e),f||(d=bc(a,c,function(){C(d,"loaded")||(gb(d,"loaded","true"),Tb(c),G(ma(Vb,c),0))})))}
function bc(a,b,c){var d=document.createElement("script");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
d.onreadystatechange=function(){switch(d.readyState){case "loaded":case "complete":d.onload()}};
d.src=a;a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(d,a.firstChild);return d}
function cc(a,b){a&&b&&(a=""+ga(b),(a=ac[a])&&Sb(a))}
function $b(a){var b=document.createElement("a");eb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+ta(a)}
var Xb=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Yb=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/,ac={};var dc=null;function ec(){var a=F("BG_I",null),b=F("BG_IU",null),c=F("BG_P",void 0);b?Wb(b,function(){dc=new botguard.bg(c)}):a&&(eval(a),dc=new botguard.bg(c))}
function fc(){return null!=dc}
function gc(){return dc?dc.invoke():null}
;function hc(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a)throw Error("Invalid URI scheme in origin");var c="",d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1),b=b.substring(0,d);
if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function ic(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;v=m=0}
function b(a){for(var b=g,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];for(var d=e[1],f=e[2],h=e[3],k=e[4],m,v,c=0;80>c;c++)40>c?20>c?(m=h^d&(f^h),v=1518500249):(m=d^f^h,v=1859775393):60>c?(m=d&f|h&(d|f),v=2400959708):(m=d^f^h,v=3395469782),m=((a<<5|a>>>27)&4294967295)+m+k+v+b[c]&4294967295,k=h,h=f,f=(d<<30|d>>>2)&4294967295,d=a,a=m;e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=e[2]+f&4294967295;
e[3]=e[3]+h&4294967295;e[4]=e[4]+k&4294967295}
function c(a,c){if("string"===typeof a){a=unescape(encodeURIComponent(a));for(var d=[],e=0,g=a.length;e<g;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==m)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,v+=64;for(;d<c;)if(f[m++]=a[d++],v++,64==m)for(m=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,v+=64}
function d(){var a=[],d=8*v;56>m?c(k,56-m):c(k,64-(m-56));for(var g=63;56<=g;g--)f[g]=d&255,d>>>=8;b(f);for(g=d=0;5>g;g++)for(var h=24;0<=h;h-=8)a[d++]=e[g]>>h&255;return a}
for(var e=[],f=[],g=[],k=[128],h=1;64>h;++h)k[h]=0;var m,v;a();return{reset:a,update:c,digest:d,lb:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}}
;/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var jc=window,kc=document,mc=jc.location;function nc(){}
var oc=/\[native code\]/;function H(a,b,c){return a[b]=a[b]||c}
function pc(a){for(var b=0;b<this.length;b++)if(this[b]===a)return b;return-1}
function qc(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}
function I(){var a;if((a=Object.create)&&oc.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}
var rc=H(jc,"gapi",{});function sc(a){return/^\s*$/.test(a)?!1:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,""))}
function tc(a){a=String(a);if(sc(a))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}
function uc(a){return eval("("+a+")")}
function vc(a){var b=[];wc(new xc,a,b);return b.join("")}
function xc(){}
function wc(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(ca(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),e=d[f],wc(a,e,c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");f="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(e=b[d],"function"!=typeof e&&(c.push(f),yc(d,c),c.push(":"),wc(a,e,c),f=","));c.push("}");return}}switch(typeof b){case "string":yc(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var zc={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Ac=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;function yc(a,b){b.push('"',a.replace(Ac,function(a){var b=zc[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),zc[a]=b);return b}),'"')}
;function Bc(a,b){this.width=a;this.height=b}
l=Bc.prototype;l.aspectRatio=function(){return this.width/this.height};
l.isEmpty=function(){return!(this.width*this.height)};
l.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
l.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
l.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Cc(a){this.b=a||{cookie:""}}
var Dc=/\s*;\s*/;l=Cc.prototype;l.isEnabled=function(){return navigator.cookieEnabled};
l.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');p(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(x()+1E3*c)).toUTCString();this.b.cookie=a+"="+b+e+d+c+f};
l.get=function(a,b){for(var c=a+"=",d=(this.b.cookie||"").split(Dc),e=0,f;f=d[e];e++){if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
l.remove=function(a,b,c){var d=p(this.get(a));this.set(a,"",0,b,c);return d};
l.isEmpty=function(){return!this.b.cookie};
l.ba=function(){return this.b.cookie?(this.b.cookie||"").split(Dc).length:0};
l.clear=function(){for(var a=(this.b.cookie||"").split(Dc),b=[],c=[],d,e,f=0;e=a[f];f++)d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Ec=new Cc("undefined"==typeof document?null:document);Ec.f=3950;function Fc(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0}
;function Gc(a,b){var c=Hc;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;function Ic(){}
;function Jc(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=null;if(a=a||window.event){this.event=a;for(var b in a)b in Kc||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==
this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}}
Jc.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Jc.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Jc.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};
var Kc={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};function Lc(a,b,c){this.b=a;this.g=b;this.f=c}
var Mc=1;function Nc(a){var b={};void 0!==a.b?b.trackingParams=a.b:(b.veType=a.g,null!=a.f&&(b.veCounter=a.f));return b}
;var Oc=null;"undefined"!=typeof XMLHttpRequest?Oc=function(){return new XMLHttpRequest}:"undefined"!=typeof ActiveXObject&&(Oc=function(){return new ActiveXObject("Microsoft.XMLHTTP")});
function Pc(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function Qc(a){this.b=a}
Qc.prototype.set=function(a,b){p(b)?this.b.set(a,vc(b)):this.b.remove(a)};
Qc.prototype.get=function(a){var b;try{b=this.b.get(a)}catch(c){return}if(null!==b)try{return tc(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Qc.prototype.remove=function(a){this.b.remove(a)};function J(a){return F("EXPERIMENT_FLAGS",{})[a]}
;function Rc(){return{apiaryHost:F("APIARY_HOST",void 0),Fa:F("APIARY_HOST_FIRSTPARTY",void 0),gapiHintOverride:F("GAPI_HINT_OVERRIDE"),gapiHintParams:F("GAPI_HINT_PARAMS",void 0),innertubeApiKey:F("INNERTUBE_API_KEY",void 0),innertubeApiVersion:F("INNERTUBE_API_VERSION",void 0),ub:F("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:F("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),wb:F("INNERTUBE_CONTEXT_HL",void 0),vb:F("INNERTUBE_CONTEXT_GL",void 0),Wb:F("XHR_APIARY_HOST",void 0)}}
function Sc(a){a={client:{hl:a.wb,gl:a.vb,clientName:a.ub,clientVersion:a.innertubeContextClientVersion}};F("DELEGATED_SESSION_ID")&&(a.user={onBehalfOfUser:F("DELEGATED_SESSION_ID")});return a}
;var K;K=H(jc,"___jsl",I());H(K,"I",0);H(K,"hel",10);function Tc(){var a=mc.href,b;if(K.dpo)b=K.h;else{b=K.h;var c=/([#].*&|[#])jsh=([^&#]*)/g,d=/([?#].*&|[?#])jsh=([^&#]*)/g;if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}
function Uc(a){var b=H(K,"PQ",[]);K.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}
function Vc(a){return H(H(K,"H",I()),a,I())}
;function Wc(){return B("iPhone")&&!B("iPod")&&!B("iPad")}
;function Xc(a){this.b=a}
y(Xc,Qc);function Yc(a){this.data=a}
function Zc(a){return!p(a)||a instanceof Yc?a:new Yc(a)}
Xc.prototype.set=function(a,b){Xc.B.set.call(this,a,Zc(b))};
Xc.prototype.f=function(a){a=Xc.B.get.call(this,a);if(!p(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Xc.prototype.get=function(a){if(a=this.f(a)){if(a=a.data,!p(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};var $c=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function L(a){return a.match($c)}
function ad(a){return a?decodeURI(a):a}
function bd(a){if(a[1]){var b=a[0],c=b.indexOf("#");0<=c&&(a.push(b.substr(c)),a[0]=b=b.substr(0,c));c=b.indexOf("?");0>c?a[1]="?":c==b.length-1&&(a[1]=void 0)}return a.join("")}
function cd(a,b,c){if(ca(b))for(var d=0;d<b.length;d++)cd(a,String(b[d]),c);else null!=b&&c.push("&",a,""===b?"":"=",encodeURIComponent(String(b)))}
function dd(a,b,c){for(c=c||0;c<b.length;c+=2)cd(b[c],b[c+1],a);return a}
function ed(a,b){for(var c in b)cd(c,b[c],a);return a}
function fd(a){a=ed([],a);a[0]="";return a.join("")}
function gd(a,b){return bd(2==arguments.length?dd([a],arguments[1],0):dd([a],arguments,1))}
;function hd(a,b,c){var d=[],e=[];if(1==(ca(c)?2:1))return e=[b,a],z(d,function(a){e.push(a)}),id(e.join(" "));
var f=[],g=[];z(c,function(a){g.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];z(d,function(a){e.push(a)});
a=id(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function id(a){var b=ic();b.update(a);return b.lb().toLowerCase()}
;var jd=H(K,"perf",I());H(jd,"g",I());var kd=H(jd,"i",I());H(jd,"r",[]);I();I();function ld(a,b,c){b&&0<b.length&&(b=md(b),c&&0<c.length&&(b+="___"+md(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=H(kd,"_p",I()),H(b,c,I())[a]=(new Date).getTime(),b=jd.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}
function md(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/\,/g,"_")}
;function nd(a){if(a.classList)return a.classList;a=a.className;return u(a)&&a.match(/\S+/g)||[]}
function od(a,b){return a.classList?a.classList.contains(b):Ca(nd(a),b)}
function rd(a,b){a.classList?a.classList.add(b):od(a,b)||(a.className+=0<a.className.length?" "+b:b)}
function sd(a,b){a.classList?a.classList.remove(b):od(a,b)&&(a.className=va(nd(a),function(a){return a!=b}).join(" "))}
function td(a,b,c){c?rd(a,b):sd(a,b)}
;function ud(a){this.b=a}
y(ud,Xc);ud.prototype.set=function(a,b,c){if(b=Zc(b)){if(c){if(c<x()){ud.prototype.remove.call(this,a);return}b.expiration=c}b.creation=x()}ud.B.set.call(this,a,b)};
ud.prototype.f=function(a,b){var c=ud.B.f.call(this,a);if(c){if(b=!b){b=c.creation;var d=c.expiration;b=!!d&&d<x()||!!b&&b>x()}if(b)ud.prototype.remove.call(this,a);else return c}};function vd(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?ca(b[f])?Ga(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function wd(a,b){var c=a.split("#",2);a=c[0];var c=1<c.length?"#"+c[1]:"",d=a.split("?",2);a=d[0];var d=vd(d[1]||""),e;for(e in b)d[e]=b[e];return bd(ed([a],d))+c}
;var xd=I(),yd=[];function zd(a){throw Error("Bad hint"+(a?": "+a:""));}
yd.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?K[b]=H(K,b,[]).concat(c):H(K,b,c)}if(b=a.u)a=H(K,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);
var Ad=/^(\/[a-zA-Z0-9_\-]+)+$/,Bd=/^[a-zA-Z0-9\-_\.,!]+$/,Cd=/^gapi\.loaded_[0-9]+$/,Dd=/^[a-zA-Z0-9,._-]+$/;function Ed(a,b,c,d){var e=a.split(";"),f=e.shift(),g=xd[f],k=null;g?k=g(e,b,c,d):zd("no hint processor for: "+f);k||zd("failed to generate load url");b=k;c=b.match(Fd);(d=b.match(Gd))&&1===d.length&&Hd.test(b)&&c&&1===c.length||zd("failed sanity: "+a);return k}
function Id(a,b,c,d){function e(a){return encodeURIComponent(a).replace(/%2C/g,",")}
a=Jd(a);Cd.test(c)||zd("invalid_callback");b=Kd(b);d=d&&d.length?Kd(d):null;return[encodeURIComponent(a.Kb).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.Ea?"/am="+e(a.Ea):"",a.Ra?"/rs="+e(a.Ra):"",a.Ya?"/t="+e(a.Ya):"","/cb=",e(c)].join("")}
function Jd(a){"/"!==a.charAt(0)&&zd("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))zd("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),g=decodeURIComponent(f[0]),k=decodeURIComponent(f[1]);2==f.length&&g&&k&&(a[g]=a[g]||k)}b="/"+c.join("/");Ad.test(b)||zd("invalid_prefix");c=Ld(a,"k",!0);d=Ld(a,"am");e=Ld(a,"rs");a=Ld(a,"t");return{Kb:b,version:c,
Ea:d,Ra:e,Ya:a}}
function Kd(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");Dd.test(e)&&b.push(e)}return b.join(",")}
function Ld(a,b,c){a=a[b];!a&&c&&zd("missing: "+b);if(a){if(Bd.test(a))return a;zd("invalid: "+b)}return null}
var Hd=/^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,Gd=/\/cb=/g,Fd=/\/\//g;function Md(){var a=Tc();if(!a)throw Error("Bad hint");return a}
xd.m=function(a,b,c,d){(a=a[0])||zd("missing_hint");return"https://apis.google.com"+Id(a,b,c,d)};
var Nd=decodeURI("%73cript"),Od=/^[-+_0-9\/A-Za-z]+={0,2}$/;function Pd(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d];e&&0>pc.call(b,e)&&c.push(e)}return c}
function Qd(){var a=K.nonce;if(void 0!==a)return a&&a===String(a)&&a.match(Od)?a:K.nonce=null;var b=H(K,"us",[]);if(!b||!b.length)return K.nonce=null;for(var c=kc.getElementsByTagName(Nd),d=0,e=c.length;d<e;++d){var f=c[d];if(f.src&&(a=String(f.getAttribute("nonce")||"")||null)){for(var g=0,k=b.length;g<k&&b[g]!==f.src;++g);if(g!==k&&a&&a===String(a)&&a.match(Od))return K.nonce=a}}return null}
function Rd(a){if("loading"!=kc.readyState)Sd(a);else{var b=Qd(),c="";null!==b&&(c=' nonce="'+b+'"');kc.write("<"+Nd+' src="'+encodeURI(a)+'"'+c+"></"+Nd+">")}}
function Sd(a){var b=kc.createElement(Nd);b.setAttribute("src",a);a=Qd();null!==a&&b.setAttribute("nonce",a);b.async="true";(a=kc.getElementsByTagName(Nd)[0])?a.parentNode.insertBefore(b,a):(kc.head||kc.body||kc.documentElement).appendChild(b)}
function Td(a,b){var c=b&&b._c;if(c)for(var d=0;d<yd.length;d++){var e=yd[d][0],f=yd[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}
function Ud(a,b,c){Vd(function(){var c;c=b===Tc()?H(rc,"_",I()):I();c=H(Vc(b),"_",c);a(c)},c)}
function Wd(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);Td(a,c);b=a?a.split(":"):[];var d=c.h||Md(),e=H(K,"ah",I());if(e["::"]&&b.length){a=[];for(var f=null;f=b.shift();){var g=f.split("."),g=e[f]||e[g[1]&&"ns:"+g[0]||""]||d,k=a.length&&a[a.length-1]||null,h=k;k&&k.hint==g||(h={hint:g,features:[]},a.push(h));h.features.push(f)}var m=a.length;if(1<m){var v=c.callback;v&&(c.callback=function(){0==--m&&v()})}for(;b=a.shift();)Xd(b.features,c,b.hint)}else Xd(b||[],c,d)}
function Xd(a,b,c){function d(a,b){if(za)return 0;jc.clearTimeout(v);pd.push.apply(pd,ha);var d=((rc||{}).config||{}).update;d?d(f):f&&H(K,"cu",[]).push(f);if(b){ld("me0",a,lc);try{Ud(b,c,m)}finally{ld("me1",a,lc)}}return 1}
a=qc(a)||[];var e=b.callback,f=b.config,g=b.timeout,k=b.ontimeout,h=b.onerror,m=void 0;"function"==typeof h&&(m=h);var v=null,za=!1;if(g&&!k||!g&&k)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var h=H(Vc(c),"r",[]).sort(),pd=H(Vc(c),"L",[]).sort(),lc=[].concat(h);0<g&&(v=jc.setTimeout(function(){za=!0;k()},g));
var ha=Pd(a,pd);if(ha.length){var ha=Pd(a,h),Aa=H(K,"CP",[]),Ba=Aa.length;Aa[Ba]=function(a){function b(){var a=Aa[Ba+1];a&&a()}
function c(b){Aa[Ba]=null;d(ha,a)&&Uc(function(){e&&e();b()})}
if(!a)return 0;ld("ml1",ha,lc);0<Ba&&Aa[Ba-1]?Aa[Ba]=function(){c(b)}:c(b)};
if(ha.length){var qd="loaded_"+K.I++;rc[qd]=function(a){Aa[Ba](a);rc[qd]=null};
a=Ed(c,ha,"gapi."+qd,h);h.push.apply(h,ha);ld("ml0",ha,lc);b.sync||jc.___gapisync?Rd(a):Sd(a)}else Aa[Ba](nc)}else d(ha)&&e&&e()}
function Vd(a,b){if(K.hee&&0<K.hel)try{return a()}catch(c){b&&b(c),K.hel--,Wd("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}}
rc.load=function(a,b){return Vd(function(){return Wd(a,b)})};var Yd="StopIteration"in n?n.StopIteration:{message:"StopIteration",stack:""};function Zd(){}
Zd.prototype.next=function(){throw Yd;};
Zd.prototype.aa=function(){return this};
function $d(a){if(a instanceof Zd)return a;if("function"==typeof a.aa)return a.aa(!1);if(da(a)){var b=0,c=new Zd;c.next=function(){for(;;){if(b>=a.length)throw Yd;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function ae(a,b){if(da(a))try{z(a,b,void 0)}catch(c){if(c!==Yd)throw c;}else{a=$d(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==Yd)throw c;}}}
function be(a){if(da(a))return Fa(a);a=$d(a);var b=[];ae(a,function(a){b.push(a)});
return b}
;function M(a,b){this.l=p(a)?a:0;this.o=p(b)?b:0}
M.prototype.equals=function(a){return a instanceof M&&(this==a?!0:this&&a?this.l==a.l&&this.o==a.o:!1)};
M.prototype.ceil=function(){this.l=Math.ceil(this.l);this.o=Math.ceil(this.o);return this};
M.prototype.floor=function(){this.l=Math.floor(this.l);this.o=Math.floor(this.o);return this};
M.prototype.round=function(){this.l=Math.round(this.l);this.o=Math.round(this.o);return this};var ce=B("Opera"),N=B("Trident")||B("MSIE"),de=B("Edge"),ee=B("Gecko")&&!(-1!=A.toLowerCase().indexOf("webkit")&&!B("Edge"))&&!(B("Trident")||B("MSIE"))&&!B("Edge"),fe=-1!=A.toLowerCase().indexOf("webkit")&&!B("Edge"),ge=B("Windows");function he(){var a=n.document;return a?a.documentMode:void 0}
var ie;a:{var je="",ke=function(){var a=A;if(ee)return/rv\:([^\);]+)(\)|;)/.exec(a);if(de)return/Edge\/([\d\.]+)/.exec(a);if(N)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(fe)return/WebKit\/(\S+)/.exec(a);if(ce)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
ke&&(je=ke?ke[1]:"");if(N){var le=he();if(null!=le&&le>parseFloat(je)){ie=String(le);break a}}ie=je}var me=ie,Hc={};
function O(a){return Gc(a,function(){for(var b=0,c=ra(String(me)).split("."),d=ra(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",k=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];if(0==g[0].length&&0==k[0].length)break;b=sa(0==g[1].length?0:parseInt(g[1],10),0==k[1].length?0:parseInt(k[1],10))||sa(0==g[2].length,0==k[2].length)||sa(g[2],k[2]);g=g[3];k=k[3]}while(0==b)}return 0<=b})}
var ne;var oe=n.document;ne=oe&&N?he()||("CSS1Compat"==oe.compatMode?parseInt(me,10):5):void 0;!ee&&!N||N&&9<=Number(ne)||ee&&O("1.9.1");var pe=N&&!O("9");function qe(a){re();var b=new ab;b.b=a;return b}
var re=t;function se(a){this.b=a}
y(se,ud);function te(){}
y(te,Ic);te.prototype.ba=function(){var a=0;ae(this.aa(!0),function(){a++});
return a};
te.prototype.clear=function(){var a=be(this.aa(!0)),b=this;z(a,function(a){b.remove(a)})};var ue=B("Firefox"),ve=Wc()||B("iPod"),we=B("iPad"),xe=B("Android")&&!(Ua()||B("Firefox")||B("Opera")||B("Silk")),ye=Ua(),ze=B("Safari")&&!(Ua()||B("Coast")||B("Opera")||B("Edge")||B("Silk")||B("Android"))&&!(Wc()||B("iPad")||B("iPod"));function Ae(a){return a?new Be(Ce(a)):pa||(pa=new Be)}
function De(a){var b=document;return u(a)?b.getElementById(a):a}
function Ee(a){var b=document;return b.querySelectorAll&&b.querySelector?b.querySelectorAll("."+a):Fe(a)}
function Fe(a){var b,c,d,e;b=document;if(b.querySelectorAll&&b.querySelector&&a)return b.querySelectorAll(""+(a?"."+a:""));if(a&&b.getElementsByClassName){var f=b.getElementsByClassName(a);return f}f=b.getElementsByTagName("*");if(a){e={};for(c=d=0;b=f[c];c++){var g=b.className;"function"==typeof g.split&&Ca(g.split(/\s+/),a)&&(e[d++]=b)}e.length=d;return e}return f}
function Ge(a){a=a.document;a=He(a)?a.documentElement:a.body;return new Bc(a.clientWidth,a.clientHeight)}
function Ie(a){var b=a.scrollingElement?a.scrollingElement:!fe&&He(a)?a.documentElement:a.body||a.documentElement;a=a.parentWindow||a.defaultView;return N&&O("10")&&a.pageYOffset!=b.scrollTop?new M(b.scrollLeft,b.scrollTop):new M(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)}
function He(a){return"CSS1Compat"==a.compatMode}
function Je(a){for(var b;b=a.firstChild;)a.removeChild(b)}
function Ke(a){if(!a)return null;if(a.firstChild)return a.firstChild;for(;a&&!a.nextSibling;)a=a.parentNode;return a?a.nextSibling:null}
function Le(a){if(!a)return null;if(!a.previousSibling)return a.parentNode;for(a=a.previousSibling;a&&a.lastChild;)a=a.lastChild;return a}
function Ce(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function Me(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=b;else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=b}else Je(a),a.appendChild(Ce(a).createTextNode(String(b)))}
var Ne={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},Oe={IMG:" ",BR:"\n"};function Pe(a){if(pe&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];Qe(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");pe||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function Qe(a,b,c){if(!(a.nodeName in Ne))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in Oe)b.push(Oe[a.nodeName]);else for(a=a.firstChild;a;)Qe(a,b,c),a=a.nextSibling}
function Re(a){var b=Se.ab;return b?Te(a,function(a){return!b||u(a.className)&&Ca(a.className.split(/\s+/),b)},!0,void 0):null}
function Te(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null}
function Be(a){this.b=a||n.document||document}
Be.prototype.getElementsByTagName=function(a,b){return(b||this.b).getElementsByTagName(String(a))};
Be.prototype.createElement=function(a){return this.b.createElement(String(a))};
Be.prototype.isElement=function(a){return fa(a)&&1==a.nodeType};
Be.prototype.contains=function(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a};function P(a,b){this.b=0;this.D=void 0;this.i=this.f=this.g=null;this.j=this.w=!1;if(a!=t)try{var c=this;a.call(b,function(a){Ue(c,2,a)},function(a){Ue(c,3,a)})}catch(d){Ue(this,3,d)}}
function Ve(){this.next=this.context=this.f=this.g=this.b=null;this.i=!1}
Ve.prototype.reset=function(){this.context=this.f=this.g=this.b=null;this.i=!1};
var We=new nb(function(){return new Ve},function(a){a.reset()},100);
function Xe(a,b,c){var d=We.get();d.g=a;d.f=b;d.context=c;return d}
function Ye(a){if(a instanceof P)return a;var b=new P(t);Ue(b,2,a);return b}
function Ze(a){return new P(function(b,c){c(a)})}
P.prototype.then=function(a,b,c){return $e(this,ea(a)?a:null,ea(b)?b:null,c)};
Fc(P);P.prototype.cancel=function(a){0==this.b&&sb(function(){var b=new af(a);bf(this,b)},this)};
function bf(a,b){if(0==a.b)if(a.g){var c=a.g;if(c.f){for(var d=0,e=null,f=null,g=c.f;g&&(g.i||(d++,g.b==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.b&&1==d?bf(c,b):(f?(d=f,d.next==c.i&&(c.i=d),d.next=d.next.next):cf(c),df(c,e,3,b)))}a.g=null}else Ue(a,3,b)}
function ef(a,b){a.f||2!=a.b&&3!=a.b||ff(a);a.i?a.i.next=b:a.f=b;a.i=b}
function $e(a,b,c,d){var e=Xe(null,null,null);e.b=new P(function(a,g){e.g=b?function(c){try{var e=b.call(d,c);a(e)}catch(m){g(m)}}:a;
e.f=c?function(b){try{var e=c.call(d,b);!p(e)&&b instanceof af?g(b):a(e)}catch(m){g(m)}}:g});
e.b.g=a;ef(a,e);return e.b}
P.prototype.G=function(a){this.b=0;Ue(this,2,a)};
P.prototype.K=function(a){this.b=0;Ue(this,3,a)};
function Ue(a,b,c){if(0==a.b){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.b=1;var d;a:{var e=c,f=a.G,g=a.K;if(e instanceof P)ef(e,Xe(f||t,g||null,a)),d=!0;else{var k;if(e)try{k=!!e.$goog_Thenable}catch(m){k=!1}else k=!1;if(k)e.then(f,g,a),d=!0;else{if(fa(e))try{var h=e.then;if(ea(h)){gf(e,h,f,g,a);d=!0;break a}}catch(m){g.call(a,m);d=!0;break a}d=!1}}}d||(a.D=c,a.b=b,a.g=null,ff(a),3!=b||c instanceof af||hf(a,c))}}
function gf(a,b,c,d,e){function f(a){k||(k=!0,d.call(e,a))}
function g(a){k||(k=!0,c.call(e,a))}
var k=!1;try{b.call(a,g,f)}catch(h){f(h)}}
function ff(a){a.w||(a.w=!0,sb(a.J,a))}
function cf(a){var b=null;a.f&&(b=a.f,a.f=b.next,b.next=null);a.f||(a.i=null);return b}
P.prototype.J=function(){for(var a;a=cf(this);)df(this,a,this.b,this.D);this.w=!1};
function df(a,b,c,d){if(3==c&&b.f&&!b.i)for(;a&&a.j;a=a.g)a.j=!1;if(b.b)b.b.g=null,jf(b,c,d);else try{b.i?b.g.call(b.context):jf(b,c,d)}catch(e){kf.call(null,e)}ob(We,b)}
function jf(a,b,c){2==b?a.g.call(a.context,c):a.f&&a.f.call(a.context,c)}
function hf(a,b){a.j=!0;sb(function(){a.j&&kf.call(null,b)})}
var kf=kb;function af(a){oa.call(this,a)}
y(af,oa);af.prototype.name="cancel";function lf(a){this.b=a}
y(lf,te);l=lf.prototype;l.isAvailable=function(){if(!this.b)return!1;try{return this.b.setItem("__sak","1"),this.b.removeItem("__sak"),!0}catch(a){return!1}};
l.set=function(a,b){try{this.b.setItem(a,b)}catch(c){if(0==this.b.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
l.get=function(a){a=this.b.getItem(a);if(!u(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.b.removeItem(a)};
l.ba=function(){return this.b.length};
l.aa=function(a){var b=0,c=this.b,d=new Zd;d.next=function(){if(b>=c.length)throw Yd;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!u(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
l.clear=function(){this.b.clear()};
l.key=function(a){return this.b.key(a)};function mf(){var a=null;try{a=window.localStorage||null}catch(b){}this.b=a}
y(mf,lf);function nf(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.b=a}
y(nf,lf);var of=r("yt.dom.getNextId_");if(!of){of=function(){return++pf};
q("yt.dom.getNextId_",of,void 0);var pf=0}function qf(){var a=document,b;xa(["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"],function(c){b=a[c];return!!b});
return b}
;function rf(a){this.b=a||Rc();sf||(sf=tf(this.b))}
var sf=null;function tf(a){return(new P(function(b){try{var c={gapiHintOverride:a.gapiHintOverride,_c:{jsl:{h:a.gapiHintParams}},callback:b},d=ea(c)?{callback:c}:c||{};d._c&&d._c.jsl&&d._c.jsl.h||Ra(d,{_c:{jsl:{h:F("GAPI_HINT_PARAMS",void 0)}}});if(d.gapiHintOverride||F("GAPI_HINT_OVERRIDE")){var e;var f=document.location.href;if(-1!=f.indexOf("?")){var f=(f||"").split("#")[0],g=f.split("?",2);e=vd(1<g.length?g[1]:g[0])}else e={};var k=e.gapi_jsh;k&&Ra(d,{_c:{jsl:{h:k}}})}Wd("client",d)}catch(h){Ib(h)}})).then(function(){})}
rf.prototype.i=function(){var a=r("gapi.config.update");a("googleapis.config/auth/useFirstPartyAuth",!0);var b=this.b.apiaryHost;qa(null==b?"":String(b))||a("googleapis.config/root",(-1==b.indexOf("://")?"//":"")+b);b=this.b.Fa;qa(null==b?"":String(b))||a("googleapis.config/root-1p",(-1==b.indexOf("://")?"//":"")+b);a("googleapis.config/sessionIndex",F("SESSION_INDEX"));r("gapi.client.setApiKey")(this.b.innertubeApiKey)};
rf.prototype.f=function(){return{context:Sc(this.b)}};
rf.prototype.g=function(a,b,c){var d,e=!1;0<c.timeout&&(d=G(function(){e||(e=!0,c.P&&c.P())},c.timeout));
uf(this,a,b,function(a){if(!e)if(e=!0,d&&Hb(d),a)c.F&&c.F(a);else if(c.onError)c.onError()})};
function uf(a,b,c,d){var e={path:"/youtubei/"+a.b.innertubeApiVersion+"/"+b,headers:{"X-Goog-Visitor-Id":F("VISITOR_DATA")},method:"POST",body:vc(c)},f=w(a.i,a);sf.then(function(){f();r("gapi.client.request")(e).execute(d||t)})}
;var La=r("yt.events.listeners_")||{};q("yt.events.listeners_",La,void 0);var vf=r("yt.events.counter_")||{count:0};q("yt.events.counter_",vf,void 0);function wf(a,b,c,d){a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Ka(function(e){return e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})}
function Q(a,b,c,d){if(!a||!a.addEventListener&&!a.attachEvent)return"";d=!!d;var e=wf(a,b,c,d);if(e)return e;var e=++vf.count+"",f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document),g;g=f?function(d){d=new Jc(d);if(!Te(d.relatedTarget,function(b){return b==a},!0))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new Jc(b);
b.currentTarget=a;return c.call(a,b)};
g=Gb(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,g,d)):a.attachEvent("on"+b,g);La[e]=[a,b,c,g,d];return e}
function xf(a){a&&("string"==typeof a&&(a=[a]),z(a,function(a){if(a in La){var b=La[a],d=b[0],e=b[1],f=b[3],b=b[4];d.removeEventListener?d.removeEventListener(e,f,b):d.detachEvent&&d.detachEvent("on"+e,f);delete La[a]}}))}
;var yf={log_event:"events",log_interaction:"interactions"},zf={},Af={},Bf=0,Na=r("yt.logging.transport.logsQueue_")||{};q("yt.logging.transport.logsQueue_",Na,void 0);function Cf(a,b){Na[a.endpoint]=Na[a.endpoint]||[];var c=Na[a.endpoint];c.push(a.Oa);Af[a.endpoint]=b;c.length>=(Number(J("web_logging_max_batch")||0)||20)?Df():Ef()}
function Df(){Hb(Bf);if(!Ma()){for(var a in Na){var b=zf[a];if(!b){b=Af[a];if(!b)continue;b=new b;zf[a]=b}var c=b.f();c.requestTimeMs=Math.round(Jb());c[yf[a]]=Na[a];b.g(a,c,{});delete Na[a]}Ma()||Ef()}}
function Ef(){Hb(Bf);Bf=G(Df,F("LOGGING_BATCH_TIMEOUT",1E4))}
;function Ff(a,b,c,d,e,f,g){function k(){4==(h&&"readyState"in h?h.readyState:0)&&b&&Gb(b)(h)}
var h=Oc&&Oc();if(!("open"in h))return null;"onloadend"in h?h.addEventListener("loadend",k,!1):h.onreadystatechange=k;c=(c||"GET").toUpperCase();d=d||"";h.open(c,a,!0);f&&(h.responseType=f);g&&(h.withCredentials=!0);f="POST"==c;if(e=Gf(a,e))for(var m in e)h.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(f=!1);f&&h.setRequestHeader("Content-Type","application/x-www-form-urlencoded");h.send(d);return h}
function Gf(a,b){b=b||{};var c;c||(c=window.location.href);var d=L(a)[1]||null,e=ad(L(a)[3]||null);d&&e?(d=c,c=L(a),d=L(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?ad(L(c)[3]||null)==e&&(Number(L(c)[4]||null)||null)==(Number(L(a)[4]||null)||null):!0;for(var f in Hf){if((e=d=F(Hf[f]))&&!(e=c)){var e=f,g=F("CORS_HEADER_WHITELIST")||{},k=ad(L(a)[3]||null);e=k?(g=g[k])?Ca(g,e):!1:!0}e&&(b[f]=d)}return b}
function If(a,b){b.method="POST";b.C||(b.C={});Jf(a,b)}
function Kf(a,b){var c=F("XSRF_FIELD_NAME",void 0),d;b.headers&&(d=b.headers["Content-Type"]);return!b.hc&&(!ad(L(a)[3]||null)||b.withCredentials||ad(L(a)[3]||null)==document.location.hostname)&&"POST"==b.method&&(!d||"application/x-www-form-urlencoded"==d)&&!(b.C&&b.C[c])}
function Jf(a,b){var c=b.format||"JSON";b.tb&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var d=F("XSRF_FIELD_NAME",void 0),e=F("XSRF_TOKEN",void 0),f=b.xa;f&&(f[d]&&delete f[d],a=wd(a,f||{}));var g=b.postBody||"",f=b.C;Kf(a,b)&&(f||(f={}),f[d]=e);f&&u(g)&&(d=vd(g),Ra(d,f),g=b.Pa&&"JSON"==b.Pa?JSON.stringify(d):fd(d));var k=!1,h,m=Ff(a,function(a){if(!k){k=!0;h&&Hb(h);var d=Pc(a),e=null;if(d||400<=a.status&&500>a.status)e=
Lf(c,a,b.gc);if(d)a:if(204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(e&&e.return_code,10);break a;case "RAW":d=!0;break a}d=!!e}var e=e||{},f=b.context||n;d?b.F&&b.F.call(f,a,e):b.onError&&b.onError.call(f,a,e);b.wa&&b.wa.call(f,a,e)}},b.method,g,b.headers,b.responseType,b.withCredentials);
b.P&&0<b.timeout&&(h=G(function(){k||(k=!0,m.abort(),Hb(h),b.P.call(b.context||n,m))},b.timeout))}
function Lf(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=uc(a));break;case "XML":if(b=(b=b.responseXML)?Mf(b):null)d={},z(b.getElementsByTagName("*"),function(a){d[a.tagName]=Nf(a)})}c&&Of(d);
return d}
function Of(a){if(fa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d;d=db(a[b]);a[c]=d}else Of(a[b])}}
function Mf(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Nf(a){var b="";z(a.childNodes,function(a){b+=a.nodeValue});
return b}
var Hf={"X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};function Pf(){if(!Qf&&!Rf||!window.JSON)return null;var a;try{a=Qf.get("yt-player-two-stage-token")}catch(b){}if(!u(a))try{a=Rf.get("yt-player-two-stage-token")}catch(b){}if(!u(a))return null;try{a=JSON.parse(a,void 0)}catch(b){}return a}
var Rf,Sf=new mf;Rf=Sf.isAvailable()?new se(Sf):null;var Qf,Tf=new nf;Qf=Tf.isAvailable()?new se(Tf):null;function Uf(a,b,c){var d=Vf,e={};e.eventTimeMs=Math.round(c||Jb());e[a]=b;Cf({endpoint:"log_event",Oa:e},d)}
;function Vf(){this.b=Rc();Wf||(Wf=Xf(this.b))}
var Wf=null;function Xf(a){return(new P(function(b){Wb(F("GAPI_LOADER_URL",void 0),function(){try{r("yt.gapi.load")("client",{gapiHintOverride:a.gapiHintOverride,_c:{jsl:{h:a.gapiHintParams}},callback:b})}catch(c){Ib(c)}})})).then(function(){})}
Vf.prototype.i=function(){var a=r("gapi.config.update");a("googleapis.config/auth/useFirstPartyAuth",!0);var b=this.b.apiaryHost;qa(null==b?"":String(b))||a("googleapis.config/root",(-1==b.indexOf("://")?"//":"")+b);b=this.b.Fa;qa(null==b?"":String(b))||a("googleapis.config/root-1p",(-1==b.indexOf("://")?"//":"")+b);a("googleapis.config/sessionIndex",F("SESSION_INDEX"));r("gapi.client.setApiKey")(this.b.innertubeApiKey)};
Vf.prototype.f=function(){return{context:Sc(this.b)}};
Vf.prototype.g=function(a,b,c){var d,e=!1;0<c.timeout&&(d=G(function(){e||(e=!0,c.P&&c.P())},c.timeout));
Yf(this,a,b,function(a){if(!e)if(e=!0,d&&Hb(d),a)c.F&&c.F(a);else if(c.onError)c.onError()})};
function Yf(a,b,c,d){var e={path:"/youtubei/"+a.b.innertubeApiVersion+"/"+b,headers:{"X-Goog-Visitor-Id":F("VISITOR_DATA")},method:"POST",body:vc(c)},f=w(a.i,a);Wf.then(function(){f();r("gapi.client.request")(e).execute(d||t)})}
;function Zf(){this.b=Rc()}
Zf.prototype.f=function(){return{context:Sc(this.b)}};
Zf.prototype.g=function(a,b,c){b={headers:{"Content-Type":"application/json","X-Goog-Visitor-Id":F("VISITOR_DATA")},C:b,Pa:"JSON",P:c.P,F:c.F,onError:c.onError,timeout:c.timeout,withCredentials:!0};a:{c=[];var d=hc(String(n.location.href)),e=n.__OVERRIDE_SID;null==e&&(e=(new Cc(document)).get("SID"));if(e&&(d=(e=0==d.indexOf("https:")||0==d.indexOf("chrome-extension:"))?n.__SAPISID:n.__APISID,null==d&&(d=(new Cc(document)).get(e?"SAPISID":"APISID")),d)){var e=e?"SAPISIDHASH":"APISIDHASH",f=String(n.location.href);
c=f&&d&&e?[e,hd(hc(f),d,c||null)].join(" "):null;break a}c=null}c&&(b.headers.Authorization=c,b.headers["X-Goog-AuthUser"]=F("SESSION_INDEX",0));If("//"+this.b.Wb+("/youtubei/"+this.b.innertubeApiVersion+"/"+a)+"?alt=json&key="+this.b.innertubeApiKey,b)};function $f(){if(null==r("_lact",window)){var a=parseInt(F("LACT"),10),a=isFinite(a)?x()-Math.max(a,0):-1;q("_lact",a,window);-1==a&&ag();Q(document,"keydown",ag);Q(document,"keyup",ag);Q(document,"mousedown",ag);Q(document,"mouseup",ag);Qb("page-mouse",ag);Qb("page-scroll",ag);Qb("page-resize",ag)}}
function ag(){null==r("_lact",window)&&($f(),r("_lact",window));var a=x();q("_lact",a,window);Tb("USER_ACTIVE")}
function bg(){var a=r("_lact",window);return null==a?-1:Math.max(x()-a,0)}
;var cg={},dg=0;function eg(a,b,c){fg(gg(),{attachChild:{csn:a,parentVisualElement:Nc(b),visualElements:[Nc(c)]}},void 0)}
function hg(a,b){var c=gg();b=wa(b,function(a){return Nc(a)});
fg(c,{visibilityUpdate:{csn:a,visualElements:b}})}
function fg(a,b,c){b.eventTimeMs=Math.round(Jb());b.lactMs=bg();c&&(b.clientData=ig(c));Cf({endpoint:"log_interaction",Oa:b},a)}
function ig(a){var b={};a.analyticsChannelData&&(b.analyticsDatas=wa(a.analyticsChannelData,function(a){return{tabName:a.tabName,cardName:a.cardName,isChannelScreen:a.isChannelScreen,insightId:a.insightId,externalChannelId:a.externalChannelId,externalContentOwnerId:a.externalContentOwnerId}}));
return{playbackData:{clientPlaybackNonce:a.clientPlaybackNonce},analyticsChannelData:b,externalLinkData:a.externalLinkData}}
;function gg(){return J("enable_youtubei_innertube")?Zf:rf}
;function jg(){var a=F("ROOT_VE_TYPE",void 0);return a?new Lc(void 0,a,void 0):null}
function kg(){var a=F("client-screen-nonce",void 0);a||(a=F("EVENT_ID",void 0));return a}
;function lg(a,b){isNaN(b)&&(b=void 0);var c=r("yt.scheduler.instance.addJob");return c?c(a,1,b):void 0===b?(a(),NaN):G(a,b||0)}
;var mg=[],ng=!1;function og(){function a(){ng=!0;"google_ad_status"in window?Eb("DCLKSTAT",1):Eb("DCLKSTAT",2)}
Wb("//static.doubleclick.net/instream/ad_status.js",a);mg.push(lg(function(){ng||"google_ad_status"in window||(cc("//static.doubleclick.net/instream/ad_status.js",a),Eb("DCLKSTAT",3))},5E3))}
function pg(){return parseInt(F("DCLKSTAT",0),10)}
;var qg=x().toString();function rg(a,b,c){var d=F("EVENT_ID");d&&(b||(b={}),b.ei||(b.ei=d));if(b){var d=a,e=F("VALID_SESSION_TEMPDATA_DOMAINS",[]),f=ad(L(window.location.href)[3]||null);f&&e.push(f);f=ad(L(d)[3]||null);if(Ca(e,f)||!f&&0==d.lastIndexOf("/",0)){J("autoescape_tempdata_url")&&(e=document.createElement("a"),eb(e,d),d=e.href);var f=L(d),d=f[5],e=f[6],f=f[7],g="";d&&(g+=d);e&&(g+="?"+e);f&&(g+="#"+f);d=g;e=d.indexOf("#");if(d=0>e?d:d.substr(0,e))J("enable_more_related_ve_logging")&&(b.itct||b.ved)&&(b.csn=b.csn||
kg()),d="ST-"+ta(d).toString(36),e=b?fd(b):"",Ec.set(""+d,e,5,"/","youtube.com"),b&&(b=b.itct||b.ved,d=r("yt.logging.screen.storeParentElement"),b&&d&&d(new Lc(b)))}}if(c)return!1;(window.ytspf||{}).enabled?spf.navigate(a):(c=window.location,a=bd(ed([a],{}))+"",a=a instanceof Va?a:Za(a),c.href=Xa(a));return!0}
;function sg(a){a=a||{};this.url=a.url||"";this.urlV9As2=a.url_v9as2||"";this.args=a.args||Pa(tg);this.assets=a.assets||{};this.attrs=a.attrs||Pa(ug);this.params=a.params||Pa(vg);this.minVersion=a.min_version||"8.0.0";this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
var tg={enablejsapi:1},ug={},vg={allowscriptaccess:"always",allowfullscreen:"true",bgcolor:"#000000"};function wg(a){a instanceof sg||(a=new sg(a));return a}
function xg(a){var b=new sg,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];b[c]="object"==ba(d)?Pa(d):d}return b}
;function yg(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}
l=yg.prototype;l.getHeight=function(){return this.bottom-this.top};
l.contains=function(a){return this&&a?a instanceof yg?a.left>=this.left&&a.right<=this.right&&a.top>=this.top&&a.bottom<=this.bottom:a.l>=this.left&&a.l<=this.right&&a.o>=this.top&&a.o<=this.bottom:!1};
l.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
l.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
l.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};function zg(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}
zg.prototype.contains=function(a){return a instanceof M?a.l>=this.left&&a.l<=this.left+this.width&&a.o>=this.top&&a.o<=this.top+this.height:this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height};
zg.prototype.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
zg.prototype.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
zg.prototype.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Ag(a,b){var c=Ce(a);return c.defaultView&&c.defaultView.getComputedStyle&&(a=c.defaultView.getComputedStyle(a,null))?a[b]||a.getPropertyValue(b)||"":""}
function Bg(a,b){return Ag(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}
function Cg(a){var b;try{b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}N&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function Dg(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}
function Eg(a){var b=Fg;if("none"!=Bg(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function Fg(a){var b=a.offsetWidth,c=a.offsetHeight,d=fe&&!b&&!c;return p(b)&&!d||!a.getBoundingClientRect?new Bc(b,c):(a=Cg(a),new Bc(a.right-a.left,a.bottom-a.top))}
function Gg(a,b){if(/^\d+px?$/.test(b))return parseInt(b,10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;b=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return+b}
function Hg(a,b){return(b=a.currentStyle?a.currentStyle[b]:null)?Gg(a,b):0}
var Ig={thin:2,medium:4,thick:6};function Jg(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;b=a.currentStyle?a.currentStyle[b+"Width"]:null;return b in Ig?Ig[b]:Gg(a,b)}
;function Kg(){this.g=this.f=this.b=0;this.i="";var a=r("window.navigator.plugins"),b=r("window.navigator.mimeTypes"),a=a&&a["Shockwave Flash"],b=b&&b["application/x-shockwave-flash"],b=a&&b&&b.enabledPlugin&&a.description||"";if(a=b){var c=a.indexOf("Shockwave Flash");0<=c&&(a=a.substr(c+15));for(var c=a.split(" "),d="",a="",e=0,f=c.length;e<f;e++)if(d)if(a)break;else a=c[e];else d=c[e];d=d.split(".");c=parseInt(d[0],10)||0;d=parseInt(d[1],10)||0;e=0;if("r"==a.charAt(0)||"d"==a.charAt(0))e=parseInt(a.substr(1),
10)||0;a=[c,d,e]}else a=[0,0,0];this.i=b;b=a;this.b=b[0];this.f=b[1];this.g=b[2];if(0>=this.b){var g,k,h,m;if(Kb)try{g=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(v){g=null}else h=document.body,m=document.createElement("object"),m.setAttribute("type","application/x-shockwave-flash"),g=h.appendChild(m);if(g&&"GetVariable"in g)try{k=g.GetVariable("$version")}catch(v){k=""}h&&m&&h.removeChild(m);(g=k||"")?(g=g.split(" ")[1].split(","),g=[parseInt(g[0],10)||0,parseInt(g[1],10)||0,parseInt(g[2],
10)||0]):g=[0,0,0];this.b=g[0];this.f=g[1];this.g=g[2]}}
aa(Kg);function Lg(a,b,c,d){b="string"==typeof b?b.split("."):[b,c,d];b[0]=parseInt(b[0],10)||0;b[1]=parseInt(b[1],10)||0;b[2]=parseInt(b[2],10)||0;return a.b>b[0]||a.b==b[0]&&a.f>b[1]||a.b==b[0]&&a.f==b[1]&&a.g>=b[2]}
;function Mg(a){if(window.spf){var b=a.match(Ng);spf.style.load(a,b?b[1]:"",void 0)}else Og(a)}
function Og(a){var b=Pg(a),c=document.getElementById(b),d=c&&C(c,"loaded");d||c&&!d||(c=Qg(a,b,function(){C(c,"loaded")||(gb(c,"loaded","true"),Tb(b),G(ma(Vb,b),0))}))}
function Qg(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=qe(a);fb(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Pg(a){var b=document.createElement("a");eb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+ta(a)}
var Ng=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;var Rg;var Sg=A,Sg=Sg.toLowerCase();if(-1!=Sg.indexOf("android")){var Tg=Sg.match(/android\D*(\d\.\d)[^\;|\)]*[\;\)]/);if(Tg)Rg=Number(Tg[1]);else{var Ug={cupcake:1.5,donut:1.6,eclair:2,froyo:2.2,gingerbread:2.3,honeycomb:3,"ice cream sandwich":4,jellybean:4.1},Vg=[],Wg=0,Xg;for(Xg in Ug)Vg[Wg++]=Xg;var Yg=Sg.match("("+Vg.join("|")+")");Rg=Yg?Ug[Yg[0]]:0}}else Rg=void 0;var Zg=['video/mp4; codecs="avc1.42001E, mp4a.40.2"','video/webm; codecs="vp8.0, vorbis"'],$g=['audio/mp4; codecs="mp4a.40.2"'];N&&O("9");!fe||O("528");ee&&O("1.9b")||N&&O("8")||ce&&O("9.5")||fe&&O("528");ee&&!O("8")||N&&O("9");var ah;var bh=A,ch=bh.match(/\((iPad|iPhone|iPod)( Simulator)?;/);if(!ch||2>ch.length)ah=void 0;else{var dh=bh.match(/\((iPad|iPhone|iPod)( Simulator)?; (U; )?CPU (iPhone )?OS (\d+_\d)[_ ]/);ah=dh&&6==dh.length?Number(dh[5].replace("_",".")):0}0<=ah&&0<=A.search("Safari")&&A.search("Version");function eh(a){D.call(this);this.b=[];this.g=a||this}
y(eh,D);function fh(a,b,c,d){d=Gb(w(d,a.g));d={target:b,name:c,qa:d};b.addEventListener(c,d.qa,void 0);a.b.push(d)}
function gh(a){for(;a.b.length;){var b=a.b.pop();b.target.removeEventListener(b.name,b.qa)}}
eh.prototype.A=function(){gh(this);eh.B.A.call(this)};function R(a,b){this.version=a;this.args=b}
function hh(a){if(!a.Wa){var b={};a.call(b);a.Wa=b.version}return a.Wa}
function ih(a,b){function c(){a.apply(this,b.args)}
if(!b.args||!b.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");var d;try{d=hh(a)}catch(e){}if(!d||b.version!=d)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");c.prototype=a.prototype;try{return new c}catch(e){throw e.message="yt.pubsub2.Data.deserialize(): "+e.message,e;}}
function S(a,b){this.topic=a;this.b=b}
S.prototype.toString=function(){return this.topic};var jh=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};function kh(a){R.call(this,1,arguments)}
y(kh,R);var lh=new S("timing-sent",kh);var mh=r("yt.pubsub2.instance_")||new E;E.prototype.subscribe=E.prototype.subscribe;E.prototype.unsubscribeByKey=E.prototype.S;E.prototype.publish=E.prototype.M;E.prototype.clear=E.prototype.clear;q("yt.pubsub2.instance_",mh,void 0);var nh=r("yt.pubsub2.subscribedKeys_")||{};q("yt.pubsub2.subscribedKeys_",nh,void 0);var oh=r("yt.pubsub2.topicToKeys_")||{};q("yt.pubsub2.topicToKeys_",oh,void 0);var ph=r("yt.pubsub2.isAsync_")||{};q("yt.pubsub2.isAsync_",ph,void 0);q("yt.pubsub2.skipSubKey_",null,void 0);
function T(a,b){var c=qh();c&&c.publish.call(c,a.toString(),a,b)}
function U(a,b,c){var d=qh();if(!d)return 0;var e=d.subscribe(a.toString(),function(d,g){if(!window.yt.pubsub2.skipSubKey_||window.yt.pubsub2.skipSubKey_!=e){var f=function(){if(nh[e])try{if(g&&a instanceof S&&a!=d)try{g=ih(a.b,g)}catch(h){throw h.message="yt.pubsub2 cross-binary conversion error for "+a.toString()+": "+h.message,h;}b.call(c||window,g)}catch(h){Ib(h)}};
ph[a.toString()]?r("yt.scheduler.instance")?lg(f,void 0):G(f,0):f()}});
nh[e]=!0;oh[a.toString()]||(oh[a.toString()]=[]);oh[a.toString()].push(e);return e}
function rh(a){var b=qh();b&&("number"==typeof a&&(a=[a]),z(a,function(a){b.unsubscribeByKey(a);delete nh[a]}))}
function qh(){return r("yt.pubsub2.instance_")}
;var sh={},th=0;function uh(a){var b=new Image,c=""+th++;sh[c]=b;b.onload=b.onerror=function(){delete sh[c]};
b.src=a}
;function vh(a,b,c){D.call(this);this.b=a;this.j=b||0;this.g=c;this.i=w(this.nb,this)}
y(vh,D);l=vh.prototype;l.ca=0;l.A=function(){vh.B.A.call(this);this.stop();delete this.b;delete this.g};
l.start=function(a){this.stop();var b=this.i;a=p(a)?a:this.j;if(!ea(b))if(b&&"function"==typeof b.handleEvent)b=w(b.handleEvent,b);else throw Error("Invalid listener argument");this.ca=2147483647<Number(a)?-1:n.setTimeout(b,a||0)};
l.stop=function(){this.isActive()&&n.clearTimeout(this.ca);this.ca=0};
l.isActive=function(){return 0!=this.ca};
l.nb=function(){this.ca=0;this.b&&this.b.call(this.g)};var wh={vc:!0},xh={ad_at:"adType",cpn:"clientPlaybackNonce",csn:"clientScreenNonce",yt_lt:"loadType",yt_ad:"isMonetized",yt_ad_pr:"prerollAllowed",yt_red:"isRedSubscriber",yt_vis:"isVisible"},yh=["isMonetized","prerollAllowed","isRedSubscriber","isVisible"],zh=w(jh.clearResourceTimings||jh.webkitClearResourceTimings||jh.mozClearResourceTimings||jh.msClearResourceTimings||jh.oClearResourceTimings||t,jh);
function Ah(a,b){if(!b&&"_"!=a[0]){var c=a;jh.mark&&(0==c.lastIndexOf("mark_",0)||(c="mark_"+c),jh.mark(c))}var c=Bh(),d=b||Jb();c[a]&&(c["_"+a]=c["_"+a]||[c[a]],c["_"+a].push(d));c[a]=d;(Ch()["tick_"+a]=b)||Jb();J("csi_on_gel")?(c=Dh(),"_start"==a?Uf("latencyActionBaselined",{clientActionNonce:c},b):Uf("latencyActionTicked",{tickName:a,clientActionNonce:c},b),a=!0):a=!1;a||(a=!!r("yt.timing.pingSent_")&&!!J("navigation_only_csi_reset"));if(!a&&(b=F("TIMING_ACTION",void 0),a=Bh(),r("yt.timing.ready_")&&
b&&a._start&&Eh())){b=!0;c=F("TIMING_WAIT",[]);if(c.length)for(var d=0,e=c.length;d<e;++d)if(!(c[d]in a)){b=!1;break}b&&Fh()}}
function Gh(){var a=Hh().info.yt_lt="hot_bg";Ch().info_yt_lt=a;if(J("csi_on_gel"))if("yt_lt"in xh){var b={},c=xh.yt_lt;Ca(yh,c)&&(a=!!a);b[c]=a;a=Dh();b.clientActionNonce=a;Uf("latencyActionInfo",b)}else Ib(Error("Unknown label yt_lt logged with GEL CSI."))}
function Eh(){var a=Bh();if(a.aft)return a.aft;for(var b=F("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
function Fh(){if(!J("csi_on_gel")){var a=Bh(),b=Hh().info,c=a._start,d;for(d in a)if(0==d.lastIndexOf("_",0)&&ca(a[d])){var e=d.slice(1);if(e in wh){var f=wa(a[d],function(a){return Math.round(a-c)});
b["all_"+e]=f.join()}delete a[d]}e=!!b.ap;if(f=r("yt.timing.reportbuilder_")){if(f=f(a,b,void 0))Ih(f,e),Jh(),zh(),Kh(!1,void 0)}else{var g=F("CSI_SERVICE_NAME","youtube"),f={v:2,s:g,action:F("TIMING_ACTION",void 0)},k=b.srt;delete b.srt;void 0===a.srt&&(k||0===k||(k=jh.timing||{},k=Math.max(0,k.responseStart-k.navigationStart),isNaN(k)&&b.pt&&(k=b.pt)),k||0===k)&&(b.srt=Math.round(k));if(b.h5jse){var h=window.location.protocol+r("ytplayer.config.assets.js");(h=jh.getEntriesByName?jh.getEntriesByName(h)[0]:
null)?b.h5jse=Math.round(b.h5jse-h.responseEnd):delete b.h5jse}a.aft=Eh();Lh()&&"youtube"==g&&(Gh(),g=a.vc,h=a.pbs,delete a.aft,b.aft=Math.round(h-g));for(var m in b)"_"!=m.charAt(0)&&(f[m]=b[m]);a.ps=Jb();b={};m=[];for(d in a)"_"!=d.charAt(0)&&(g=Math.round(a[d]-c),b[d]=g,m.push(d+"."+g));f.rt=m.join(",");(a=r("ytdebug.logTiming"))&&a(f,b);J("navigation_only_csi_reset")||(Jh(),zh(),Kh(!1,void 0));Ih(f,e,void 0);T(lh,new kh(b.aft+(k||0)))}}}
function Ih(a,b,c){if(J("debug_csi_data")){var d=r("yt.timing.csiData");d||(d=[],q("yt.timing.csiData",d,void 0));d.push({page:location.href,time:new Date,args:a})}var d="",e;for(e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b)try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")||a&&uh(a)}catch(f){a&&uh(a)}else a&&uh(a);Kh(!0,c)}
function Dh(){var a=Hh().nonce;if(!a){var b;a:{if(window.crypto&&window.crypto.getRandomValues)try{var c=Array(16),d=new Uint8Array(16);window.crypto.getRandomValues(d);for(a=0;a<c.length;a++)c[a]=d[a];b=c;break a}catch(e){}b=Array(16);for(c=0;16>c;c++){d=x();for(a=0;a<d%23;a++)b[c]=Math.random();b[c]=Math.floor(256*Math.random())}if(qg)for(c=1,d=0;d<qg.length;d++)b[c%16]=b[c%16]^b[(c-1)%16]/4^qg.charCodeAt(d),c++}c=[];for(d=0;d<b.length;d++)c.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(b[d]&
63));a=c.join("");Hh().nonce=a}return a}
function Bh(){return Hh().tick}
function Ch(){var a=Hh();"gel"in a||(a.gel={});return a.gel}
function Hh(){return r("ytcsi.data_")||Jh()}
function Jh(){var a={tick:{},info:{}};q("ytcsi.data_",a,void 0);return a}
function Kh(a,b){q("yt.timing."+(b||"")+"pingSent_",a,void 0)}
function Lh(){var a=Bh(),b=a.pbr,c=a.vc,a=a.pbs;return b&&c&&a&&b<c&&c<a&&1==Hh().info.yt_pvis}
;new vh(Mh,1E3);function Mh(){Ah("vptl",0);Ah("vpl",0)}
;var Nh={"api.invalidparam":2,auth:150,"drm.auth":150,"heartbeat.net":150,"heartbeat.servererror":150,"heartbeat.stop":150,"html5.unsupportedads":5,"fmt.noneavailable":5,"fmt.decode":5,"fmt.unplayable":5,"html5.missingapi":5,"html5.unsupportedlive":5,"drm.unavailable":5};function Oh(a,b){D.call(this);this.D=this.w=a;this.Z=b;this.G=!1;this.g={};this.ga=this.Y=null;this.$=new E;yb(this,ma(zb,this.$));this.j={};this.N=this.ha=this.i=this.pa=this.b=null;this.da=!1;this.O=this.J=this.W=this.X=null;this.ia={};this.hb=["onReady"];this.ea=new eh(this);yb(this,ma(zb,this.ea));this.na=null;this.Ca=NaN;this.fa={};Ph(this);this.L("onDetailedError",w(this.Cb,this));this.L("onTabOrderChange",w(this.kb,this));this.L("onTabAnnounce",w(this.Da,this));this.L("WATCH_LATER_VIDEO_ADDED",
w(this.Db,this));this.L("WATCH_LATER_VIDEO_REMOVED",w(this.Eb,this));ue||(this.L("onMouseWheelCapture",w(this.Ab,this)),this.L("onMouseWheelRelease",w(this.Bb,this)));this.L("onAdAnnounce",w(this.Da,this));this.T=new eh(this);yb(this,ma(zb,this.T));this.oa=!1;this.ma=null}
y(Oh,D);var Qh=["drm.unavailable","fmt.noneavailable","html5.missingapi","html5.unsupportedads","html5.unsupportedlive"];l=Oh.prototype;l.ya=function(a,b){this.f||(Rh(this,a),Sh(this,b),this.G&&Th(this))};
function Rh(a,b){a.pa=b;a.b=xg(b);a.i=a.b.attrs.id||a.i;"video-player"==a.i&&(a.i=a.Z,a.b.attrs.id=a.Z);a.D.id==a.i&&(a.i+="-player",a.b.attrs.id=a.i);a.b.args.enablejsapi="1";a.b.args.playerapiid=a.Z;a.ha||(a.ha=Uh(a,a.b.args.jsapicallback||"onYouTubePlayerReady"));a.b.args.jsapicallback=null;if(b=a.b.attrs.width)a.D.style.width=Dg(Number(b)||b,!0);if(b=a.b.attrs.height)a.D.style.height=Dg(Number(b)||b,!0)}
l.qb=function(){return this.pa};
function Th(a){a.b.loaded||(a.b.loaded=!0,"0"!=a.b.args.autoplay?a.g.loadVideoByPlayerVars(a.b.args):a.g.cueVideoByPlayerVars(a.b.args))}
function Vh(a){if(!p(a.b.disable.flash)){var b=a.b.disable,c;c=Lg(Kg.getInstance(),a.b.minVersion);b.flash=!c}return!a.b.disable.flash}
function Wh(a,b){if((!b||(5!=(Nh[b.errorCode]||5)?0:-1!=Qh.indexOf(b.errorCode)))&&Vh(a)){(b=Xh(a))&&b.stopVideo&&b.stopVideo();var c=a.b;b&&b.getUpdatedConfigurationData&&(b=b.getUpdatedConfigurationData(),c=wg(b));c.args.autoplay=1;c.args.html5_unavailable="1";Rh(a,c);Sh(a,"flash")}}
function Sh(a,b){if(!a.f){if(!b){if(!(b=!a.b.html5&&Vh(a))){if(!p(a.b.disable.html5)){var c;b=!0;void 0!=a.b.args.deviceHasDisplay&&(b=a.b.args.deviceHasDisplay);if(2.2==Rg)c=!0;else{a:{var d=b;b=r("yt.player.utils.videoElement_");b||(b=document.createElement("VIDEO"),q("yt.player.utils.videoElement_",b,void 0));try{if(b.canPlayType)for(var d=d?Zg:$g,e=0;e<d.length;e++)if(b.canPlayType(d[e])){c=null;break a}c="fmt.noneavailable"}catch(f){c="html5.missingapi"}}c=!c}c&&(c=Yh(a)||a.b.assets.js);a.b.disable.html5=
!c;c||(a.b.args.html5_unavailable="1")}b=!!a.b.disable.html5}b=b?Vh(a)?"flash":"unsupported":"html5"}("flash"==b?a.Ub:a.Vb).call(a)}}
function Yh(a){var b=!0,c=Xh(a);c&&a.b&&(a=a.b,b=C(c,"version")==a.assets.js);return b&&!!r("yt.player.Application.create")}
l.Vb=function(){if(!this.da){var a=Yh(this);a&&"html5"==Zh(this)?(this.N="html5",this.G||this.V()):($h(this),this.N="html5",a&&this.W?(this.w.appendChild(this.W),this.V()):(this.b.loaded=!0,this.X=w(function(){var a=this.w,c=xg(this.b);r("yt.player.Application.create")(a,c);this.V()},this),this.da=!0,a?this.X():(Wb(this.b.assets.js,this.X),Mg(this.b.assets.css))))}};
l.Ub=function(){var a=xg(this.b);if(!this.J){var b=Xh(this);b&&(this.J=document.createElement("SPAN"),this.J.tabIndex=0,fh(this.ea,this.J,"focus",this.Ka),this.O=document.createElement("SPAN"),this.O.tabIndex=0,fh(this.ea,this.O,"focus",this.Ka),b.parentNode&&b.parentNode.insertBefore(this.J,b),b.parentNode&&b.parentNode.insertBefore(this.O,b.nextSibling))}a.attrs.width=a.attrs.width||"100%";a.attrs.height=a.attrs.height||"100%";if("flash"==Zh(this))this.N="flash",this.G||this.V();else{$h(this);this.N=
"flash";this.b.loaded=!0;var b=Kg.getInstance(),c=(-1<b.i.indexOf("Gnash")&&-1==b.i.indexOf("AVM2")||9==b.b&&1==b.f||9==b.b&&0==b.f&&1==b.g?0:9<=b.b)||-1<navigator.userAgent.indexOf("Sony/COM2")&&!Lg(b,9,1,58)?a.url:a.urlV9As2;window!=window.top&&document.referrer&&(a.args.framer=document.referrer.substring(0,128));b=this.w;if(c){var b=u(b)?De(b):b,d=Pa(a.attrs);d.tabindex=0;var e=Pa(a.params);e.flashvars=fd(a.args);if(Kb){d.classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";e.movie=c;var a=document.createElement("object"),
f;for(f in d)a.setAttribute(f,d[f]);for(f in e)d=document.createElement("param"),d.setAttribute("name",f),d.setAttribute("value",e[f]),a.appendChild(d)}else{d.type="application/x-shockwave-flash";d.src=c;a=document.createElement("embed");a.setAttribute("name",d.id);for(f in d)a.setAttribute(f,d[f]);for(f in e)a.setAttribute(f,e[f])}f=document.createElement("div");f.appendChild(a);b.innerHTML=f.innerHTML}this.V()}};
l.Ka=function(){Xh(this).focus()};
function Xh(a){var b=De(a.i);!b&&a.D&&a.D.querySelector&&(b=a.D.querySelector("#"+a.i));return b}
l.V=function(){if(!this.f){var a=Xh(this),b=!1;try{a&&a.getApiInterface&&a.getApiInterface()&&(b=!0)}catch(f){}if(b)if(this.da=!1,a.isNotServable&&a.isNotServable(this.b.args.video_id))Wh(this);else{Ph(this);this.G=!0;a=Xh(this);a.addEventListener&&(this.Y=ai(this,a,"addEventListener"));a.removeEventListener&&(this.ga=ai(this,a,"removeEventListener"));for(var b=a.getApiInterface(),b=b.concat(a.getInternalApiInterface()),c=0;c<b.length;c++){var d=b[c];this.g[d]||(this.g[d]=ai(this,a,d))}for(var e in this.j)this.Y(e,
this.j[e]);Th(this);this.ha&&this.ha(this.g);this.$.M("onReady",this.g)}else this.Ca=G(w(this.V,this),50)}};
function ai(a,b,c){var d=b[c];return function(){try{return a.na=null,d.apply(b,arguments)}catch(e){"Bad NPObject as private data!"!=e.message&&"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.na=e,Ib(e,"WARNING"))}}}
function Ph(a){a.G=!1;if(a.ga)for(var b in a.j)a.ga(b,a.j[b]);for(var c in a.fa)Hb(parseInt(c,10));a.fa={};a.Y=null;a.ga=null;for(var d in a.g)a.g[d]=null;a.g.addEventListener=w(a.L,a);a.g.removeEventListener=w(a.Mb,a);a.g.destroy=w(a.dispose,a);a.g.getLastError=w(a.rb,a);a.g.getPlayerType=w(a.sb,a);a.g.getCurrentVideoConfig=w(a.qb,a);a.g.loadNewVideoConfig=w(a.ya,a);a.g.isReady=w(a.Xb,a)}
l.Xb=function(){return this.G};
l.L=function(a,b){if(!this.f&&(b=Uh(this,b))){if(!Ca(this.hb,a)&&!this.j[a]){var c=bi(this,a);this.Y&&this.Y(a,c)}this.$.subscribe(a,b);"onReady"==a&&this.G&&G(ma(b,this.g),0)}};
l.Mb=function(a,b){this.f||(b=Uh(this,b))&&this.$.unsubscribe(a,b)};
function Uh(a,b){var c=b;if("string"==typeof b){if(a.ia[b])return a.ia[b];c=function(){var a=r(b);a&&a.apply(n,arguments)};
a.ia[b]=c}return c?c:null}
function bi(a,b){var c="ytPlayer"+b+a.Z;a.j[b]=c;n[c]=function(c){var d=G(function(){if(!a.f){a.$.M(b,c);var e=a.fa,g=String(d);g in e&&delete e[g]}},0);
Oa(a.fa,String(d))};
return c}
l.kb=function(a){a=a?Le:Ke;for(var b=a(document.activeElement);b&&(1!=b.nodeType||b==this.J||b==this.O||(b.focus(),b!=document.activeElement));)b=a(b)};
l.Da=function(a){Tb("a11y-announce",a)};
l.Cb=function(a){Wh(this,a)};
l.Db=function(a){Tb("WATCH_LATER_VIDEO_ADDED",a)};
l.Eb=function(a){Tb("WATCH_LATER_VIDEO_REMOVED",a)};
l.Ab=function(){this.oa||(ye?(this.ma=Ie(document),fh(this.T,window,"scroll",this.Jb),fh(this.T,this.w,"touchmove",this.Hb)):(fh(this.T,this.w,"mousewheel",this.Na),fh(this.T,this.w,"wheel",this.Na)),this.oa=!0)};
l.Bb=function(){gh(this.T);this.oa=!1};
l.Na=function(a){a=a||window.event;a.returnValue=!1;a.preventDefault&&a.preventDefault()};
l.Jb=function(){window.scrollTo(this.ma.l,this.ma.o)};
l.Hb=function(a){a.preventDefault()};
l.sb=function(){return this.N||Zh(this)};
l.rb=function(){return this.na};
function Zh(a){return(a=Xh(a))?"div"==a.tagName.toLowerCase()?"html5":"flash":null}
function $h(a){Ah("dcp");a.cancel();Ph(a);a.N=null;a.b&&(a.b.loaded=!1);var b=Xh(a);"html5"==Zh(a)?a.W=b:b&&b.destroy&&b.destroy();Je(a.w);gh(a.ea);a.J=null;a.O=null}
l.cancel=function(){this.X&&cc(this.b.assets.js,this.X);Hb(this.Ca);this.da=!1};
l.A=function(){$h(this);if(this.W&&this.b)try{this.W.destroy()}catch(b){Ib(b)}this.ia=null;for(var a in this.j)n[this.j[a]]=null;this.pa=this.b=this.g=null;delete this.w;delete this.D;Oh.B.A.call(this)};var ci={},di="player_uid_"+(1E9*Math.random()>>>0);function ei(a,b){a=u(a)?De(a):a;b=wg(b);var c=di+"_"+ga(a),d=ci[c];if(d)return d.ya(b),d.g;d=new Oh(a,c);ci[c]=d;Tb("player-added",d.g);yb(d,ma(fi,d));G(function(){d.ya(b)},0);
return d.g}
function fi(a){ci[a.Z]=null}
function gi(a){a=De(a);if(!a)return null;var b=di+"_"+ga(a),c=ci[b];c||(c=new Oh(a,b),ci[b]=c);return c.g}
;var hi=r("yt.abuse.botguardInitialized")||fc;q("yt.abuse.botguardInitialized",hi,void 0);var ii=r("yt.abuse.invokeBotguard")||gc;q("yt.abuse.invokeBotguard",ii,void 0);var ji=r("yt.abuse.dclkstatus.checkDclkStatus")||pg;q("yt.abuse.dclkstatus.checkDclkStatus",ji,void 0);var ki=r("yt.player.exports.navigate")||rg;q("yt.player.exports.navigate",ki,void 0);var li=r("yt.player.embed")||ei;q("yt.player.embed",li,void 0);var mi=r("yt.player.getPlayerByElement")||gi;q("yt.player.getPlayerByElement",mi,void 0);
var ni=r("yt.util.activity.init")||$f;q("yt.util.activity.init",ni,void 0);var oi=r("yt.util.activity.getTimeSinceActive")||bg;q("yt.util.activity.getTimeSinceActive",oi,void 0);var pi=r("yt.util.activity.setTimestamp")||ag;q("yt.util.activity.setTimestamp",pi,void 0);function qi(a){R.call(this,1,arguments);this.b=a}
y(qi,R);function V(a){R.call(this,1,arguments);this.b=a}
y(V,R);function ri(a,b,c){R.call(this,3,arguments);this.g=a;this.f=b;this.b=null!=c?!!c:null}
y(ri,R);function si(a,b,c,d,e){R.call(this,2,arguments);this.f=a;this.b=b;this.i=c||null;this.g=d||null;this.source=e||null}
y(si,R);function ti(a,b,c){R.call(this,1,arguments);this.b=a;this.subscriptionId=b}
y(ti,R);function ui(a,b,c,d,e,f,g){R.call(this,1,arguments);this.f=a;this.subscriptionId=b;this.b=c;this.j=d||null;this.i=e||null;this.g=f||null;this.source=g||null}
y(ui,R);
var vi=new S("subscription-batch-subscribe",qi),wi=new S("subscription-batch-unsubscribe",qi),xi=new S("subscription-subscribe",si),yi=new S("subscription-subscribe-loading",V),zi=new S("subscription-subscribe-loaded",V),Ai=new S("subscription-subscribe-success",ti),Bi=new S("subscription-subscribe-external",si),Ci=new S("subscription-unsubscribe",ui),Di=new S("subscription-unsubscirbe-loading",V),Ei=new S("subscription-unsubscribe-loaded",V),Fi=new S("subscription-unsubscribe-success",V),Gi=new S("subscription-external-unsubscribe",
ui),Hi=new S("subscription-enable-ypc",V),Ii=new S("subscription-disable-ypc",V),Ji=new S("subscription-prefs",ri),Ki=new S("subscription-prefs-success",ri),Li=new S("subscription-prefs-failure",ri);function Mi(a,b){var c=document.location.protocol+"//"+document.domain+"/post_login";b&&(c=gd(c,"mode",b));b=gd("/signin?context=popup","next",c);b=gd(b,"feature","sub_button");if(b=window.open(b,"loginPopup","width=375,height=440,resizable=yes,scrollbars=yes",!0))c=Qb("LOGGED_IN",function(b){Sb(F("LOGGED_IN_PUBSUB_KEY",void 0));Eb("LOGGED_IN",!0);a(b)}),Eb("LOGGED_IN_PUBSUB_KEY",c),b.moveTo((screen.width-375)/2,(screen.height-440)/2)}
q("yt.pubsub.publish",Tb,void 0);function Ni(){var a=F("PLAYER_CONFIG");return a&&a.args&&void 0!==a.args.authuser?!0:!(!F("SESSION_INDEX")&&!F("LOGGED_IN"))}
;function Oi(){var a=qf();return a?a:null}
;function Pi(a,b){(a=De(a))&&a.style&&(a.style.display=b?"":"none",td(a,"hid",!b))}
function Qi(a){z(arguments,function(a){!da(a)||a instanceof Element?Pi(a,!0):z(a,function(a){Qi(a)})})}
function Ri(a){z(arguments,function(a){!da(a)||a instanceof Element?Pi(a,!1):z(a,function(a){Ri(a)})})}
;var Si={},Ti="ontouchstart"in document;function Ui(a,b,c){var d;switch(a){case "mouseover":case "mouseout":d=3;break;case "mouseenter":case "mouseleave":d=9}return Te(c,function(a){return od(a,b)},!0,d)}
function W(a){var b="mouseover"==a.type&&"mouseenter"in Si||"mouseout"==a.type&&"mouseleave"in Si,c=a.type in Si||b;if("HTML"!=a.target.tagName&&c){if(b){var b="mouseover"==a.type?"mouseenter":"mouseleave",c=Si[b],d;for(d in c.H){var e=Ui(b,d,a.target);e&&!Te(a.relatedTarget,function(a){return a==e},!0)&&c.M(d,e,b,a)}}if(b=Si[a.type])for(d in b.H)(e=Ui(a.type,d,a.target))&&b.M(d,e,a.type,a)}}
Q(document,"blur",W,!0);Q(document,"change",W,!0);Q(document,"click",W);Q(document,"focus",W,!0);Q(document,"mouseover",W);Q(document,"mouseout",W);Q(document,"mousedown",W);Q(document,"keydown",W);Q(document,"keyup",W);Q(document,"keypress",W);Q(document,"cut",W);Q(document,"paste",W);Ti&&(Q(document,"touchstart",W),Q(document,"touchend",W),Q(document,"touchcancel",W));function Vi(a){this.j=a;this.g={};this.ka=[];this.i=[]}
function X(a,b){return"yt-uix"+(a.j?"-"+a.j:"")+(b?"-"+b:"")}
Vi.prototype.unregister=function(){Sb(this.ka);this.ka.length=0;rh(this.i);this.i.length=0};
Vi.prototype.init=t;Vi.prototype.dispose=t;function Wi(a,b,c){a.i.push(U(b,c,a))}
function Xi(a,b,c){var d=X(a,void 0),e=w(c,a);b in Si||(Si[b]=new E);Si[b].subscribe(d,e);a.g[c]=e}
function Yi(a,b,c){if(b in Si){var d=Si[b];d.unsubscribe(X(a,void 0),a.g[c]);0>=d.ba()&&(d.dispose(),delete Si[b])}delete a.g[c]}
function Zi(a,b){gb(a,"tooltip-text",b)}
;function $i(){Vi.call(this,"tooltip");this.b=0;this.f={}}
y($i,Vi);aa($i);l=$i.prototype;l.register=function(){Xi(this,"mouseover",this.ja);Xi(this,"mouseout",this.R);Xi(this,"focus",this.Ia);Xi(this,"blur",this.Ga);Xi(this,"click",this.R);Xi(this,"touchstart",this.Va);Xi(this,"touchend",this.la);Xi(this,"touchcancel",this.la)};
l.unregister=function(){Yi(this,"mouseover",this.ja);Yi(this,"mouseout",this.R);Yi(this,"focus",this.Ia);Yi(this,"blur",this.Ga);Yi(this,"click",this.R);Yi(this,"touchstart",this.Va);Yi(this,"touchend",this.la);Yi(this,"touchcancel",this.la);this.dispose();$i.B.unregister.call(this)};
l.dispose=function(){for(var a in this.f)this.R(this.f[a]);this.f={}};
l.ja=function(a){if(!(this.b&&1E3>x()-this.b)){var b=parseInt(C(a,"tooltip-hide-timer"),10);b&&(ib(a,"tooltip-hide-timer"),Hb(b));var b=w(function(){aj(this,a);ib(a,"tooltip-show-timer")},this),c=parseInt(C(a,"tooltip-show-delay"),10)||0,b=G(b,c);
gb(a,"tooltip-show-timer",b.toString());a.title&&(Zi(a,bj(a)),a.title="");b=ga(a).toString();this.f[b]=a}};
l.R=function(a){var b=parseInt(C(a,"tooltip-show-timer"),10);b&&(Hb(b),ib(a,"tooltip-show-timer"));b=w(function(){if(a){var b=De(cj(this,a));b&&(dj(b),b&&b.parentNode&&b.parentNode.removeChild(b),ib(a,"content-id"));(b=De(cj(this,a,"arialabel")))&&b.parentNode&&b.parentNode.removeChild(b)}ib(a,"tooltip-hide-timer")},this);
b=G(b,50);gb(a,"tooltip-hide-timer",b.toString());if(b=C(a,"tooltip-text"))a.title=b;b=ga(a).toString();delete this.f[b]};
l.Ia=function(a){this.b=0;this.ja(a)};
l.Ga=function(a){this.b=0;this.R(a)};
l.Va=function(a,b,c){c.changedTouches&&(this.b=0,a=Ui(b,X(this),c.changedTouches[0].target),this.ja(a))};
l.la=function(a,b,c){c.changedTouches&&(this.b=x(),a=Ui(b,X(this),c.changedTouches[0].target),this.R(a))};
function ej(a,b){Zi(a,b);a=C(a,"content-id");(a=De(a))&&Me(a,b)}
function bj(a){return C(a,"tooltip-text")||a.title}
function aj(a,b){if(b){var c=bj(b);if(c){var d=De(cj(a,b));if(!d){d=document.createElement("div");d.id=cj(a,b);d.className=X(a,"tip");var e=document.createElement("div");e.className=X(a,"tip-body");var f=document.createElement("div");f.className=X(a,"tip-arrow");var g=document.createElement("div");g.setAttribute("aria-hidden","true");g.className=X(a,"tip-content");var k=fj(a,b),h=cj(a,b,"content");g.id=h;gb(b,"content-id",h);e.appendChild(g);k&&d.appendChild(k);d.appendChild(e);d.appendChild(f);var m=
Pe(b),h=cj(a,b,"arialabel"),f=document.createElement("div");rd(f,X(a,"arialabel"));f.id=h;m=b.hasAttribute("aria-label")?b.getAttribute("aria-label"):"rtl"==document.body.getAttribute("dir")?c+" "+m:m+" "+c;Me(f,m);b.setAttribute("aria-labelledby",h);h=Oi()||document.body;h.appendChild(f);h.appendChild(d);ej(b,c);(c=parseInt(C(b,"tooltip-max-width"),10))&&e.offsetWidth>c&&(e.style.width=c+"px",rd(g,X(a,"normal-wrap")));g=od(b,X(a,"reverse"));gj(a,b,d,e,k,g)||gj(a,b,d,e,k,!g);var v=X(a,"tip-visible");
G(function(){rd(d,v)},0)}}}}
function gj(a,b,c,d,e,f){var g;td(c,X(a,"tip-reverse"),f);var k=0;f&&(k=1);a=Eg(b);f=new M((a.width-10)/2,f?a.height:0);var h=Ce(b);g=new M(0,0);var m;m=h?Ce(h):document;m=!N||9<=Number(ne)||He(Ae(m).b)?m.documentElement:m.body;b!=m&&(m=Cg(b),h=Ie(Ae(h).b),g.l=m.left+h.l,g.o=m.top+h.o);f=new M(g.l+f.l,g.o+f.o);f=new M(f.l,f.o);g=(k&8&&"rtl"==Bg(c,"direction")?k^4:k)&-9;k=Eg(c);h=new Bc(k.width,k.height);f=new M(f.l,f.o);h=new Bc(h.width,h.height);0!=g&&(g&4?f.l-=h.width+0:g&2&&(f.l-=h.width/2),g&
1&&(f.o-=h.height+0));g=new zg(0,0,0,0);g.left=f.l;g.top=f.o;g.width=h.width;g.height=h.height;f=g;g=0;if(!(g&496||(g=f,h=new M(g.left,g.top),h instanceof M?(g=h.l,h=h.o):(g=h,h=void 0),c.style.left=Dg(g,!1),c.style.top=Dg(h,!1),h=new Bc(f.width,f.height),k==h||k&&h&&k.width==h.width&&k.height==h.height)))if(k=h,g=He(Ae(Ce(c)).b),!N||O("10")||g&&O("8"))f=c.style,ee?f.MozBoxSizing="border-box":fe?f.WebkitBoxSizing="border-box":f.boxSizing="border-box",f.width=Math.max(k.width,0)+"px",f.height=Math.max(k.height,
0)+"px";else if(f=c.style,g){if(N){g=Hg(c,"paddingLeft");h=Hg(c,"paddingRight");m=Hg(c,"paddingTop");var v=Hg(c,"paddingBottom");g=new yg(m,h,v,g)}else g=Ag(c,"paddingLeft"),h=Ag(c,"paddingRight"),m=Ag(c,"paddingTop"),v=Ag(c,"paddingBottom"),g=new yg(parseFloat(m),parseFloat(h),parseFloat(v),parseFloat(g));if(!N||9<=Number(ne))h=Ag(c,"borderLeftWidth"),m=Ag(c,"borderRightWidth"),v=Ag(c,"borderTopWidth"),za=Ag(c,"borderBottomWidth"),h=new yg(parseFloat(v),parseFloat(m),parseFloat(za),parseFloat(h));
else{h=Jg(c,"borderLeft");m=Jg(c,"borderRight");var v=Jg(c,"borderTop"),za=Jg(c,"borderBottom"),h=new yg(v,m,za,h)}f.pixelWidth=k.width-h.left-g.left-g.right-h.right;f.pixelHeight=k.height-h.top-g.top-g.bottom-h.bottom}else f.pixelWidth=k.width,f.pixelHeight=k.height;f=Ge(window);1==c.nodeType?(c=Cg(c),h=new M(c.left,c.top)):(c=c.changedTouches?c.changedTouches[0]:c,h=new M(c.clientX,c.clientY));c=Eg(d);m=Math.floor(c.width/2);k=!!(f.height<h.o+a.height);a=!!(h.o<a.height);g=!!(h.l<m);f=!!(f.width<
h.l+m);h=(c.width+3)/-2- -5;b=C(b,"force-tooltip-direction");if("left"==b||g)h=-5;else if("right"==b||f)h=20-c.width-3;b=Math.floor(h)+"px";d.style.left=b;e&&(e.style.left=b,e.style.height=c.height+"px",e.style.width=c.width+"px");return!(k||a)}
function cj(a,b,c){a=X(a);var d=b.__yt_uid_key;d||(d=of(),b.__yt_uid_key=d);b=a+d;c&&(b+="-"+c);return b}
function fj(a,b){var c=null;ge&&od(b,X(a,"masked"))&&((c=De("yt-uix-tooltip-shared-mask"))?(c.parentNode.removeChild(c),Qi(c)):(c=document.createElement("iframe"),c.src='javascript:""',c.id="yt-uix-tooltip-shared-mask",c.className=X(a,"tip-mask")));return c}
function dj(a){var b=De("yt-uix-tooltip-shared-mask"),c=b&&Te(b,function(b){return b==a},!1,2);
b&&c&&(b.parentNode.removeChild(b),Ri(b),document.body.appendChild(b))}
;function hj(){Vi.call(this,"subscription-button")}
y(hj,Vi);aa(hj);hj.prototype.register=function(){Xi(this,"click",this.ra);Wi(this,yi,this.Ma);Wi(this,zi,this.La);Wi(this,Ai,this.Gb);Wi(this,Di,this.Ma);Wi(this,Ei,this.La);Wi(this,Fi,this.Ib);Wi(this,Hi,this.zb);Wi(this,Ii,this.yb)};
hj.prototype.unregister=function(){Yi(this,"click",this.ra);hj.B.unregister.call(this)};
var Se={za:"hover-enabled",Za:"yt-uix-button-subscribe",$a:"yt-uix-button-subscribed",Yb:"ypc-enabled",ab:"yt-uix-button-subscription-container",bb:"yt-subscription-button-disabled-mask-container"},ij={Zb:"channel-external-id",cb:"subscriber-count-show-when-subscribed",eb:"subscriber-count-tooltip",fb:"subscriber-count-title",$b:"href",ac:"insecure",Aa:"is-subscribed",cc:"parent-url",dc:"clicktracking",gb:"style-type",Ba:"subscription-id",ec:"target",ib:"ypc-enabled"};l=hj.prototype;
l.ra=function(a){var b=C(a,"href"),c=C(a,"insecure"),d=Ni(),c=c&&!0;if(b)a=C(a,"target")||"_self",window.open(b,a);else if(!c)if(d){b=C(a,"channel-external-id");d=C(a,"clicktracking");if(C(a,"ypc-enabled"))var c=C(a,"ypc-item-type"),e=C(a,"ypc-item-id"),c={itemType:c,itemId:e,subscriptionElement:a};else c=null;e=C(a,"parent-url");if(C(a,"is-subscribed")){var f=C(a,"subscription-id");T(Ci,new ui(b,f,c,a,d,e))}else T(xi,new si(b,c,d,e))}else jj(this,a)};
l.Ma=function(a){this.U(a.b,this.Ta,!0)};
l.La=function(a){this.U(a.b,this.Ta,!1)};
l.Gb=function(a){this.U(a.b,this.Ua,!0,a.subscriptionId)};
l.Ib=function(a){this.U(a.b,this.Ua,!1)};
l.zb=function(a){this.U(a.b,this.ob)};
l.yb=function(a){this.U(a.b,this.mb)};
l.Ua=function(a,b,c){b?(gb(a,ij.Aa,"true"),c&&gb(a,ij.Ba,c)):(ib(a,ij.Aa),ib(a,ij.Ba));kj(a)};
l.Ta=function(a,b){var c;c=Re(a);td(c,Se.bb,b);a.setAttribute("aria-busy",b?"true":"false");a.disabled=b};
function kj(a){var b=C(a,ij.gb),c=!!C(a,"is-subscribed"),b="-"+b,d=Se.$a+b;td(a,Se.Za+b,!c);td(a,d,c);C(a,ij.eb)&&!C(a,ij.cb)&&(b=X($i.getInstance()),td(a,b,!c),a.title=c?"":C(a,ij.fb));c?G(function(){rd(a,Se.za)},1E3):sd(a,Se.za)}
l.ob=function(a){var b=!!C(a,"ypc-item-type"),c=!!C(a,"ypc-item-id");!C(a,"ypc-enabled")&&b&&c&&(rd(a,"ypc-enabled"),gb(a,ij.ib,"true"))};
l.mb=function(a){C(a,"ypc-enabled")&&(sd(a,"ypc-enabled"),ib(a,"ypc-enabled"))};
function lj(a,b){return va(Ee(X(a)),function(a){return b==C(a,"channel-external-id")},a)}
l.jb=function(a,b,c){var d=Ia(arguments,2);z(a,function(a){b.apply(this,Ea(a,d))},this)};
l.U=function(a,b,c){var d=lj(this,a);this.jb.apply(this,Ea([d],Ia(arguments,1)))};
function jj(a,b){a=w(function(a){a.discoverable_subscriptions&&Eb("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS",a.discoverable_subscriptions);this.ra(b)},a);
Mi(a,"subscribe")}
;var mj=window.yt&&window.yt.uix&&window.yt.uix.widgets_||{};q("yt.uix.widgets_",mj,void 0);function nj(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
function oj(a,b,c){u(a)&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});b=/\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);a.videoId=b&&b[2]?b[2]:null;return pj(a)}
function pj(a,b,c){if(fa(a)){b="endSeconds startSeconds mediaContentUrl suggestedQuality videoId two_stage_token".split(" ");c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}return{videoId:a,startSeconds:b,suggestedQuality:c}}
function qj(a,b,c,d){if(fa(a)&&!ca(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}c={index:b,startSeconds:c,suggestedQuality:d};u(a)&&16==a.length?c.list="PL"+a:c.playlist=a;return c}
function rj(a){var b=a.video_id||a.videoId;if(u(b)){var c=Pf()||{},d=Pf()||{};p(void 0)?d[b]=void 0:delete d[b];var e=x()+3E5,f=Rf;if(f&&window.JSON){u(d)||(d=JSON.stringify(d,void 0));try{f.set("yt-player-two-stage-token",d,e)}catch(g){f.remove("yt-player-two-stage-token")}}(b=c[b])&&(a.two_stage_token=b)}}
;var sj=null,tj=[];function uj(a){return{externalChannelId:a.externalChannelId,xb:!!a.isChannelPaid,source:a.source,subscriptionId:a.subscriptionId}}
function vj(a){wj(uj(a))}
function wj(a){Ni()?(T(xi,new si(a.externalChannelId,a.xb?{itemType:"U",itemId:a.externalChannelId}:null)),(a="/gen_204?"+fd({event:"subscribe",source:a.source}))&&uh(a)):xj(a)}
function xj(a){Mi(function(b){b.subscription_ajax&&wj(a)},null)}
function yj(a){a=uj(a);T(Ci,new ui(a.externalChannelId,a.subscriptionId,null));(a="/gen_204?"+fd({event:"unsubscribe",source:a.source}))&&uh(a)}
function zj(a){sj&&sj.channelSubscribed(a.b,a.subscriptionId)}
function Aj(a){sj&&sj.channelUnsubscribed(a.b)}
;function Bj(a){D.call(this);this.g=a;this.g.subscribe("command",this.Qa,this);this.i={};this.j=!1}
y(Bj,D);l=Bj.prototype;l.start=function(){this.j||this.f||(this.j=!0,Cj(this.g,"RECEIVING"))};
l.Qa=function(a,b){if(this.j&&!this.f){var c=b||{};switch(a){case "addEventListener":u(c.event)&&(a=c.event,a in this.i||(b=w(this.Ob,this,a),this.i[a]=b,this.addEventListener(a,b)));break;case "removeEventListener":u(c.event)&&Dj(this,c.event);break;default:this.b.isReady()&&this.b[a]&&(b=Ej(a,b||{}),b=this.b[a].apply(this.b,b),(b=Fj(a,b))&&this.j&&!this.f&&Cj(this.g,a,b))}}};
l.Ob=function(a,b){this.j&&!this.f&&Cj(this.g,a,this.sa(a,b))};
l.sa=function(a,b){if(null!=b)return{value:b}};
function Dj(a,b){b in a.i&&(a.removeEventListener(b,a.i[b]),delete a.i[b])}
l.A=function(){this.g.unsubscribe("command",this.Qa,this);this.g=null;for(var a in this.i)Dj(this,a);Bj.B.A.call(this)};function Gj(a,b){Bj.call(this,b);this.b=a;this.start()}
y(Gj,Bj);Gj.prototype.addEventListener=function(a,b){this.b.addEventListener(a,b)};
Gj.prototype.removeEventListener=function(a,b){this.b.removeEventListener(a,b)};
function Ej(a,b){switch(a){case "loadVideoById":return b=pj(b),rj(b),[b];case "cueVideoById":return b=pj(b),rj(b),[b];case "loadVideoByPlayerVars":return rj(b),[b];case "cueVideoByPlayerVars":return rj(b),[b];case "loadPlaylist":return b=qj(b),rj(b),[b];case "cuePlaylist":return b=qj(b),rj(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];
case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey]}return[]}
function Fj(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
Gj.prototype.sa=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Gj.B.sa.call(this,a,b)};
Gj.prototype.A=function(){Gj.B.A.call(this);delete this.b};function Hj(a,b,c,d){D.call(this);this.i=b||null;this.J="*";this.j=c||null;this.b=null;this.channel=d||null;this.N=!!a;this.G=w(this.O,this);window.addEventListener("message",this.G)}
y(Hj,D);Hj.prototype.O=function(a){if(!("*"!=this.j&&a.origin!=this.j||this.i&&a.source!=this.i)&&u(a.data)){var b;try{b=tc(a.data)}catch(c){return}if(!(null==b||this.N&&(this.b&&this.b!=b.id||this.channel&&this.channel!=b.channel))&&b)switch(b.event){case "listening":"null"!=a.origin?this.j=this.J=a.origin:Ib(Error("MessageEvent origin is null"),"WARNING");this.i=a.source;this.b=b.id;this.g&&(this.g(),this.g=null);break;case "command":this.w&&(this.D&&!Ca(this.D,b.func)||this.w(b.func,b.args))}}};
Hj.prototype.sendMessage=function(a,b){if(b=b||this.i){this.b&&(a.id=this.b);this.channel&&(a.channel=this.channel);try{var c=vc(a);b.postMessage(c,this.J)}catch(d){Ib(d,"WARNING")}}};
Hj.prototype.A=function(){window.removeEventListener("message",this.G);Hj.B.A.call(this)};function Ij(a,b,c){Hj.call(this,a,b,c||F("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname,"widget");this.D=this.g=this.w=null}
y(Ij,Hj);function Jj(){var a=this.f=new Ij(!!F("WIDGET_ID_ENFORCE")),b=w(this.Lb,this);a.w=b;a.D=null;this.f.channel="widget";if(a=F("WIDGET_ID"))this.f.b=a;this.i=[];this.w=!1;this.j={}}
l=Jj.prototype;l.Lb=function(a,b){"addEventListener"==a&&b?(a=b[0],this.j[a]||"onReady"==a||(this.addEventListener(a,Kj(this,a)),this.j[a]=!0)):this.Xa(a,b)};
l.Xa=function(){};
function Kj(a,b){return w(function(a){this.sendMessage(b,a)},a)}
l.addEventListener=function(){};
l.pb=function(){this.w=!0;this.sendMessage("initialDelivery",this.ta());this.sendMessage("onReady");z(this.i,this.Sa,this);this.i=[]};
l.ta=function(){return null};
function Lj(a,b){a.sendMessage("infoDelivery",b)}
l.Sa=function(a){this.w?this.f.sendMessage(a):this.i.push(a)};
l.sendMessage=function(a,b){this.Sa({event:a,info:void 0==b?null:b})};
l.dispose=function(){this.f=null};function Mj(a){Jj.call(this);this.b=a;this.g=[];this.addEventListener("onReady",w(this.Fb,this));this.addEventListener("onVideoProgress",w(this.Sb,this));this.addEventListener("onVolumeChange",w(this.Tb,this));this.addEventListener("onApiChange",w(this.Nb,this));this.addEventListener("onPlaybackQualityChange",w(this.Pb,this));this.addEventListener("onPlaybackRateChange",w(this.Qb,this));this.addEventListener("onStateChange",w(this.Rb,this))}
y(Mj,Jj);l=Mj.prototype;l.Xa=function(a,b){if(this.b[a]){b=b||[];if(0<b.length&&nj(a)){var c;c=b;if(fa(c[0])&&!ca(c[0]))c=c[0];else{var d={};switch(a){case "loadVideoById":case "cueVideoById":d=pj.apply(window,c);break;case "loadVideoByUrl":case "cueVideoByUrl":d=oj.apply(window,c);break;case "loadPlaylist":case "cuePlaylist":d=qj.apply(window,c)}c=d}rj(c);b.length=1;b[0]=c}this.b[a].apply(this.b,b);nj(a)&&Lj(this,this.ta())}};
l.Fb=function(){var a=w(this.pb,this);this.f.g=a};
l.addEventListener=function(a,b){this.g.push({eventType:a,listener:b});this.b.addEventListener(a,b)};
l.ta=function(){if(!this.b)return null;var a=this.b.getApiInterface();Da(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c],f=e;if(0==f.search("get")||0==f.search("is")){var f=e,g=0;0==f.search("get")?g=3:0==f.search("is")&&(g=2);f=f.charAt(g).toLowerCase()+f.substr(g+1);try{var k=this.b[e]();b[f]=k}catch(h){}}}b.videoData=this.b.getVideoData();b.currentTimeLastUpdated_=x()/1E3;return b};
l.Rb=function(a){a={playerState:a,currentTime:this.b.getCurrentTime(),duration:this.b.getDuration(),videoData:this.b.getVideoData(),videoStartBytes:0,videoBytesTotal:this.b.getVideoBytesTotal(),videoLoadedFraction:this.b.getVideoLoadedFraction(),playbackQuality:this.b.getPlaybackQuality(),availableQualityLevels:this.b.getAvailableQualityLevels(),videoUrl:this.b.getVideoUrl(),playlist:this.b.getPlaylist(),playlistIndex:this.b.getPlaylistIndex(),currentTimeLastUpdated_:x()/1E3,playbackRate:this.b.getPlaybackRate(),
mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());this.b.getStoryboardFormat&&(a.storyboardFormat=this.b.getStoryboardFormat());Lj(this,a)};
l.Pb=function(a){Lj(this,{playbackQuality:a})};
l.Qb=function(a){Lj(this,{playbackRate:a})};
l.Nb=function(){for(var a=this.b.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.b.getOptions(e);b[e]={options:f};for(var g=0,k=f.length;g<k;g++){var h=f[g],m=this.b.getOption(e,h);b[e][h]=m}}this.sendMessage("apiInfoDelivery",b)};
l.Tb=function(){Lj(this,{muted:this.b.isMuted(),volume:this.b.getVolume()})};
l.Sb=function(a){a={currentTime:a,videoBytesLoaded:this.b.getVideoBytesLoaded(),videoLoadedFraction:this.b.getVideoLoadedFraction(),currentTimeLastUpdated_:x()/1E3,playbackRate:this.b.getPlaybackRate(),mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());Lj(this,a)};
l.dispose=function(){Mj.B.dispose.call(this);for(var a=0;a<this.g.length;a++){var b=this.g[a];this.b.removeEventListener(b.eventType,b.listener)}this.g=[]};function Nj(){D.call(this);this.b=new E;yb(this,ma(zb,this.b))}
y(Nj,D);Nj.prototype.subscribe=function(a,b,c){return this.f?0:this.b.subscribe(a,b,c)};
Nj.prototype.unsubscribe=function(a,b,c){return this.f?!1:this.b.unsubscribe(a,b,c)};
Nj.prototype.S=function(a){return this.f?!1:this.b.S(a)};
Nj.prototype.M=function(a,b){return this.f?!1:this.b.M.apply(this.b,arguments)};function Oj(a,b,c){Nj.call(this);this.g=a;this.i=b;this.j=c}
y(Oj,Nj);function Cj(a,b,c){if(!a.f){var d=a.g;d.f||a.i!=d.b||(a={id:a.j,command:b},c&&(a.data=c),d.b.postMessage(vc(a),d.i))}}
Oj.prototype.A=function(){this.i=this.g=null;Oj.B.A.call(this)};function Pj(a,b,c){D.call(this);this.b=a;this.i=c;this.j=Q(window,"message",w(this.w,this));this.g=new Oj(this,a,b);yb(this,ma(zb,this.g))}
y(Pj,D);Pj.prototype.w=function(a){var b;if(b=!this.f)if(b=a.origin==this.i)a:{b=this.b;do{var c;b:{c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(a=a.data,u(a))){try{a=tc(a)}catch(d){return}a.command&&(b=this.g,b.f||b.M("command",a.command,a.data))}};
Pj.prototype.A=function(){xf(this.j);this.b=null;Pj.B.A.call(this)};var Qj=document,Y=window;var Rj=!1,Sj="";function Tj(a){a=a.match(/[\d]+/g);if(!a)return"";a.length=3;return a.join(".")}
(function(){if(navigator.plugins&&navigator.plugins.length){var a=navigator.plugins["Shockwave Flash"];if(a&&(Rj=!0,a.description)){Sj=Tj(a.description);return}if(navigator.plugins["Shockwave Flash 2.0"]){Rj=!0;Sj="2.0.0.11";return}}if(navigator.mimeTypes&&navigator.mimeTypes.length&&(a=navigator.mimeTypes["application/x-shockwave-flash"],Rj=!(!a||!a.enabledPlugin))){Sj=Tj(a.enabledPlugin.description);return}try{var b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");Rj=!0;Sj=Tj(b.GetVariable("$version"));
return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");Rj=!0;Sj="6.0.21";return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),Rj=!0,Sj=Tj(b.GetVariable("$version"))}catch(c){}})();
var Uj=Rj,Vj=Sj;function Wj(a){return(a=a.exec(A))?a[1]:""}
(function(){if(ue)return Wj(/Firefox\/([0-9.]+)/);if(N||de||ce)return me;if(ye)return Wj(/Chrome\/([0-9.]+)/);if(ze&&!(Wc()||B("iPad")||B("iPod")))return Wj(/Version\/([0-9.]+)/);if(ve||we){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(A);if(a)return a[1]+"."+a[2]}else if(xe)return(a=Wj(/Android\s+([0-9.]+)/))?a:Wj(/Version\/([0-9.]+)/);return""})();(function(){var a=!1;try{var b=Object.defineProperty({},"passive",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a})();function Xj(a){Yj();this.enabled=Math.random()<a;this.events=[]}
var Yj=n.performance&&n.performance.now?w(n.performance.now,n.performance):x;function Zj(a){Xj.call(this,a)}
y(Zj,Xj);new Zj(1E-4);var ak=(new Date).getTime();function bk(){var a=Pa(ck);return new P(function(b,c){a.F=function(a){Pc(a)?b(a):c(new dk("Request failed, status="+a.status,"net.badstatus"))};
a.onError=function(){c(new dk("Unknown request error","net.unknown"))};
a.P=function(){c(new dk("Request timed out","net.timeout"))};
Jf("//googleads.g.doubleclick.net/pagead/id",a)})}
function dk(a,b){oa.call(this,a+", errorCode="+b);this.errorCode=b}
y(dk,oa);dk.prototype.name="PromiseAjaxError";function ek(a){oa.call(this,a.message||a.description||a.name);this.b=a instanceof af}
y(ek,oa);ek.prototype.name="BiscottiError";function fk(a,b){this.f=a;this.b=b}
fk.prototype.then=function(a,b,c){try{if(p(this.f))return a?Ye(a.call(c,this.f)):Ye(this.f);if(p(this.b)){if(!b)return Ze(this.b);var d=b.call(c,this.b);return!p(d)&&this.b.b?Ze(this.b):Ye(d)}throw Error("Invalid Result_ state");}catch(e){return Ze(e)}};
Fc(fk);var ck={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},gk=null;function hk(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))return ik(""),gk=new fk(""),"";a=JSON.parse(a.substr(4)).id;ik(a);gk=new fk(a);jk(18E5,2);return a}
function kk(a,b){b=new ek(b);ik("");gk=new fk(void 0,b);0<a&&jk(12E4,a-1);throw b;}
function jk(a,b){G(function(){var a=w(kk,n,b),a=bk().then(hk,a);$e(a,null,t,void 0)},a)}
function ik(a){q("yt.www.ads.biscotti.lastId_",a,void 0)}
;function lk(){}
function mk(){try{var a;try{var b=r("yt.www.ads.biscotti.getId_"),c;if(b)c=b();else{if(!gk){var d=w(kk,n,2);gk=bk().then(hk,d)}c=gk}a=c}catch(e){a=Ze(e)}a.then(nk,lk);G(mk,18E5)}catch(e){Ib(e)}}
function nk(a){var b;a:{try{b=window.top.location.href}catch(v){b=2;break a}b=null!=b?b==window.document.location.href?0:1:2}b={dt:ak,flash:Vj||"0",frm:b};b.u_tz=-(new Date).getTimezoneOffset();var c;try{c=Y.history.length}catch(v){c=0}b.u_his=c;b.u_java=!!Y.navigator&&"unknown"!==typeof Y.navigator.javaEnabled&&!!Y.navigator.javaEnabled&&Y.navigator.javaEnabled();Y.screen&&(b.u_h=Y.screen.height,b.u_w=Y.screen.width,b.u_ah=Y.screen.availHeight,b.u_aw=Y.screen.availWidth,b.u_cd=Y.screen.colorDepth);
Y.navigator&&Y.navigator.plugins&&(b.u_nplug=Y.navigator.plugins.length);Y.navigator&&Y.navigator.mimeTypes&&(b.u_nmime=Y.navigator.mimeTypes.length);b.bid=a;b.ca_type=Uj?"flash":"image";if(J("enable_server_side_search_pyv")||J("enable_server_side_mweb_search_pyv")){var d;a=window;try{d=a.screenX;var e=a.screenY}catch(v){}try{var f=a.outerWidth,g=a.outerHeight}catch(v){}try{var k=a.innerWidth,h=a.innerHeight}catch(v){}d=[a.screenLeft,a.screenTop,d,e,a.screen?a.screen.availWidth:void 0,a.screen?a.screen.availTop:
void 0,f,g,k,h];var m;e=window.top||Y;try{m=e.document&&!e.document.body?new Bc(-1,-1):Ge(e||window).round()}catch(v){m=new Bc(-12245933,-12245933)}e=0;window.SVGElement&&document.createElementNS&&(e|=1);na(b,{bc:e,bih:m.height,biw:m.width,brdim:d.join(),vis:{visible:1,hidden:2,prerender:3,preview:4}[Qj.webkitVisibilityState||Qj.mozVisibilityState||Qj.visibilityState||""]||0,wgl:!!Y.WebGLRenderingContext})}If("/ad_data_204",{tb:!0,C:b})}
;function ok(){this.b=F("ALT_PREF_COOKIE_NAME","PREF");var a;if(a=Ec.get(""+this.b,void 0)){a=unescape(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Z[d]=c.toString())}}}
aa(ok);var Z=r("yt.prefs.UserPrefs.prefs_")||{};q("yt.prefs.UserPrefs.prefs_",Z,void 0);function pk(a){if(/^f([1-9][0-9]*)$/.test(a))throw"ExpectedRegexMatch: "+a;}
function qk(a){if(!/^\w+$/.test(a))throw"ExpectedRegexMismatch: "+a;}
function rk(a){a=void 0!==Z[a]?Z[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
ok.prototype.get=function(a,b){qk(a);pk(a);a=void 0!==Z[a]?Z[a].toString():null;return null!=a?a:b?b:""};
ok.prototype.set=function(a,b){qk(a);pk(a);if(null==b)throw"ExpectedNotNull";Z[a]=b.toString()};
ok.prototype.remove=function(a){qk(a);pk(a);delete Z[a]};
ok.prototype.clear=function(){Z={}};function sk(a){for(var b=0;b<a.length;b++){var c=a[b];"send_follow_on_ping_action"==c.name&&c.data&&c.data.follow_on_url&&(c=c.data.follow_on_url)&&uh(c)}}
;function tk(a){R.call(this,1,arguments);this.qa=a}
y(tk,R);function uk(a,b){R.call(this,2,arguments);this.f=a;this.b=b}
y(uk,R);function vk(a,b,c,d){R.call(this,1,arguments);this.b=b;this.f=c||null;this.itemId=d||null}
y(vk,R);function wk(a,b){R.call(this,1,arguments);this.f=a;this.b=b||null}
y(wk,R);function xk(a){R.call(this,1,arguments)}
y(xk,R);var yk=new S("ypc-core-load",tk),zk=new S("ypc-guide-sync-success",uk),Ak=new S("ypc-purchase-success",vk),Bk=new S("ypc-subscription-cancel",xk),Ck=new S("ypc-subscription-cancel-success",wk),Dk=new S("ypc-init-subscription",xk);var Ek=!1,Fk=[],Gk=[];function Hk(a){a.b?Ek?T(Bi,a):T(yk,new tk(function(){T(Dk,new xk(a.b))})):Ik(a.f,a.i,a.g,a.source)}
function Jk(a){a.b?Ek?T(Gi,a):T(yk,new tk(function(){T(Bk,new xk(a.b))})):Kk(a.f,a.subscriptionId,a.i,a.g,a.source)}
function Lk(a){Mk(Fa(a.b))}
function Nk(a){Ok(Fa(a.b))}
function Pk(a){Qk(a.g,a.f,a.b)}
function Rk(a){var b=a.itemId,c=a.b.subscriptionId;b&&c&&T(Ai,new ti(b,c,a.b.channelInfo))}
function Sk(a){var b=a.b;Ja(a.f,function(a,d){T(Ai,new ti(d,a,b[d]))})}
function Tk(a){T(Fi,new V(a.f.itemId));a.b&&a.b.length&&(Uk(a.b,Fi),Uk(a.b,Hi))}
function Ik(a,b,c,d){var e=new V(a);T(yi,e);var f={};f.c=a;c&&(f.eurl=c);d&&(f.source=d);c={};(d=F("PLAYBACK_ID"))&&(c.plid=d);(d=F("EVENT_ID"))&&(c.ei=d);b&&Vk(b,c);Jf("/subscription_ajax?action_create_subscription_to_channel=1",{method:"POST",xa:f,C:c,F:function(b,c){b=c.response;T(Ai,new ti(a,b.id,b.channel_info));b.show_feed_privacy_dialog&&Tb("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG",a);b.actions&&sk(b.actions)},
wa:function(){T(zi,e)}})}
function Kk(a,b,c,d,e){var f=new V(a);T(Di,f);var g={};d&&(g.eurl=d);e&&(g.source=e);d={};d.c=a;d.s=b;(a=F("PLAYBACK_ID"))&&(d.plid=a);(a=F("EVENT_ID"))&&(d.ei=a);c&&Vk(c,d);Jf("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",xa:g,C:d,F:function(a,b){a=b.response;T(Fi,f);a.actions&&sk(a.actions)},
wa:function(){T(Ei,f)}})}
function Qk(a,b,c){if(a){var d={};d.channel_id=a;switch(b){case "receive-all-updates":d.receive_all_updates=!0;break;case "receive-no-updates":d.receive_no_updates=!0;d.receive_post_updates=!1;break;case "receive-highlight-updates":d.receive_all_updates=!1;d.receive_no_updates=!1;break;default:return}null===c||d.receive_no_updates||(d.receive_post_updates=c);var e=new ri(a,b,c);Jf("/subscription_ajax?action_update_subscription_preferences=1",{method:"POST",C:d,onError:function(){T(Li,e)},
F:function(){T(Ki,e)}})}}
function Mk(a){if(a.length){var b=Ha(a,0,40);T("subscription-batch-subscribe-loading");Uk(b,yi);var c={};c.a=b.join(",");var d=function(){T("subscription-batch-subscribe-loaded");Uk(b,zi)};
Jf("/subscription_ajax?action_create_subscription_to_all=1",{method:"POST",C:c,F:function(c,f){d();c=f.response;f=c.id;if(ca(f)&&f.length==b.length){var e=c.channel_info_map;z(f,function(a,c){c=b[c];T(Ai,new ti(c,a,e[c]))});
a.length?Mk(a):T("subscription-batch-subscribe-finished")}},
onError:function(){d();T("subscription-batch-subscribe-failure")}})}}
function Ok(a){if(a.length){var b=Ha(a,0,40);T("subscription-batch-unsubscribe-loading");Uk(b,Di);var c={};c.c=b.join(",");var d=function(){T("subscription-batch-unsubscribe-loaded");Uk(b,Ei)};
Jf("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",C:c,F:function(){d();Uk(b,Fi);a.length&&Ok(a)},
onError:function(){d()}})}}
function Uk(a,b){z(a,function(a){T(b,new V(a))})}
function Vk(a,b){a=vd(a);na(b,a)}
;var Wk=null,Xk=null,Yk=null,Zk={};function $k(a){var b=a.id;a=a.ve_type;var c=Mc++;a=new Lc(void 0,a,c);Zk[b]=a;b=kg();c=jg();b&&c&&eg(b,c,a)}
function al(a){var b=a.csn;a=a.root_ve_type;if(b&&a&&(Eb("client-screen-nonce",b),Eb("ROOT_VE_TYPE",a),a=jg()))for(var c in Zk)eg(b,a,Zk[c])}
function bl(a){Zk[a.id]=new Lc(a.tracking_params)}
function cl(a){var b=kg();a=Zk[a.id];b&&a&&fg(gg(),{click:{csn:b,visualElement:Nc(a)}},void 0)}
function dl(a){a=a.ids;var b=kg();if(b){for(var c=[],d=0;d<a.length;d++){var e=Zk[a[d]];e&&c.push(e)}c.length&&hg(b,c)}}
function el(){var a=Wk.startInteractionLogging;a&&a()}
;q("yt.setConfig",Eb,void 0);q("yt.setMsg",function(a){Fb(Db,arguments)},void 0);
q("yt.logging.errors.log",function(a,b,c,d,e){c={name:c||F("INNERTUBE_CONTEXT_CLIENT_NAME",1),version:d||F("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0)};e=window&&window.yterr||e||!1;if(a&&e&&!(5<=dg)){e=a.stacktrace;d=a.columnNumber;var f=r("window.location.href");if(u(a))a={message:a,name:"Unknown error",lineNumber:"Not available",fileName:f,stack:"Not available"};else{var g,k,h=!1;try{g=a.lineNumber||a.ic||"Not available"}catch(za){g="Not available",h=!0}try{k=a.fileName||a.filename||a.sourceURL||
n.$googDebugFname||f}catch(za){k="Not available",h=!0}a=!h&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:g,fileName:k,stack:a.stack||"Not available"}}e=e||a.stack;g=a.lineNumber.toString();isNaN(g)||isNaN(d)||(g=g+":"+d);if(!(cg[a.message]||0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js"))){b={xa:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,1E3),line:g,level:b||"ERROR"},C:{url:F("PAGE_NAME",
window.location.href),file:a.fileName},method:"POST"};e&&(b.C.stack=e);for(var m in c)b.C["client."+m]=c[m];if(m=F("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var v in m)b.C[v]=m[v];Jf("/error_204",b);cg[a.message]=!0;dg++}}},void 0);
q("writeEmbed",function(){var a=F("PLAYER_CONFIG",void 0);"1"!=a.privembed&&mk();"gvn"==a.args.ps&&(document.body.style.backgroundColor="transparent");var b=document.referrer,c=F("POST_MESSAGE_ORIGIN");window!=window.top&&b&&b!=document.URL&&(a.args.loaderUrl=b);F("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");a.args.autoplay&&rj(a.args);Wk=b=ei("player",a);b.addEventListener("onScreenChanged",al);b.addEventListener("onLogClientVeCreated",$k);b.addEventListener("onLogServerVeCreated",bl);b.addEventListener("onLogVeClicked",
cl);b.addEventListener("onLogVesShown",dl);b.addEventListener("onReady",el);var d=F("POST_MESSAGE_ID","player");F("ENABLE_JS_API")?Yk=new Mj(b):F("ENABLE_POST_API")&&u(d)&&u(c)&&(Xk=new Pj(window.parent,d,c),Yk=new Gj(b,Xk.g));F("ENABLE_CAST_API")||(a.args.enablecastapi="0");F("BG_P")&&(F("BG_I")||F("BG_IU"))&&ec();og();sj=b;sj.addEventListener("SUBSCRIBE",vj);sj.addEventListener("UNSUBSCRIBE",yj);tj.push(U(Ai,zj),U(Fi,Aj))},void 0);
q("yt.www.watch.ads.restrictioncookie.spr",function(a){(a+="mac_204?action_fcts=1")&&uh(a);return!0},void 0);
var fl=Gb(function(){Ah("ol");Ek=!0;Gk.push(U(xi,Hk),U(Ci,Jk));Ek||Gk.push(U(Bi,Hk),U(Gi,Jk),U(vi,Lk),U(wi,Nk),U(Ji,Pk),U(Ak,Rk),U(Ck,Tk),U(zk,Sk));var a=ok.getInstance(),b=1<window.devicePixelRatio;if(!!((rk("f"+(Math.floor(119/31)+1))||0)&67108864)!=b){var c="f"+(Math.floor(119/31)+1),d=rk(c)||0,d=b?d|67108864:d&-67108865;0==d?delete Z[c]:Z[c]=d.toString(16).toString();var a=a.b,b=[],e;for(e in Z)b.push(e+"="+escape(Z[e]));Ec.set(""+a,b.join("&"),63072E3,"/","youtube.com")}}),gl=Gb(function(){var a=
Wk;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();F("PL_ATT")&&(dc=null);for(var a=0,b=mg.length;a<b;a++){var c=mg[a];if(!isNaN(c)){var d=r("yt.scheduler.instance.cancelJob");d?d(c):Hb(c)}}mg.length=0;a=$b("//static.doubleclick.net/instream/ad_status.js");if(b=document.getElementById(a))Vb(a),b.parentNode.removeChild(b);ng=!1;Eb("DCLKSTAT",0);Sb(Fk);Fk.length=0;rh(Gk);Gk.length=0;Ek=!1;sj&&(sj.removeEventListener("SUBSCRIBE",wj),sj.removeEventListener("UNSUBSCRIBE",yj));sj=null;rh(tj);tj.length=0;
Ab(Yk,Xk);if(a=Wk)a.removeEventListener("onScreenChanged",al),a.removeEventListener("onLogClientVeCreated",$k),a.removeEventListener("onLogServerVeCreated",bl),a.removeEventListener("onLogVeClicked",cl),a.removeEventListener("onLogVesShown",dl),a.removeEventListener("onReady",el),a.destroy();Zk={}});
window.addEventListener?(window.addEventListener("load",fl),window.addEventListener("unload",gl)):window.attachEvent&&(window.attachEvent("onload",fl),window.attachEvent("onunload",gl));var hl=hj.getInstance(),il=X(hl);il in mj||(hl.register(),hl.ka.push(Qb("yt-uix-init-"+il,hl.init,hl)),hl.ka.push(Qb("yt-uix-dispose-"+il,hl.dispose,hl)),mj[il]=hl);})();
