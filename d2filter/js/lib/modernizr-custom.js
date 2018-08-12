/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-cssfilters-flexbox-flexboxlegacy-addtest-setclasses-testallprops-testprop-teststyles !*/
!function(e,n,t){function r(e,n){return typeof e===n}function o(){var e,n,t,o,s,i,l;for(var a in S)if(S.hasOwnProperty(a)){if(e=[],n=S[a],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)i=e[s],l=i.split("."),1===l.length?Modernizr[l[0]]=o:(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=o),C.push((o?"":"no-")+l.join("-"))}}function s(e){var n=b.className,t=Modernizr._config.classPrefix||"";if(P&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),P?b.className.baseVal=n:b.className=n)}function i(e,n){if("object"==typeof e)for(var t in e)w(e,t)&&i(t,e[t]);else{e=e.toLowerCase();var r=e.split("."),o=Modernizr[r[0]];if(2==r.length&&(o=o[r[1]]),"undefined"!=typeof o)return Modernizr;n="function"==typeof n?n():n,1==r.length?Modernizr[r[0]]=n:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=n),s([(n&&0!=n?"":"no-")+r.join("-")]),Modernizr._trigger(e,n)}return Modernizr}function l(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):P?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function a(e,n){return function(){return e.apply(n,arguments)}}function u(e,n,t){var o;for(var s in e)if(e[s]in n)return t===!1?e[s]:(o=n[e[s]],r(o,"function")?a(o,t||n):o);return!1}function f(e,n){return!!~(""+e).indexOf(n)}function c(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function p(){var e=n.body;return e||(e=l(P?"svg":"body"),e.fake=!0),e}function d(e,t,r,o){var s,i,a,u,f="modernizr",c=l("div"),d=p();if(parseInt(r,10))for(;r--;)a=l("div"),a.id=o?o[r]:f+(r+1),c.appendChild(a);return s=l("style"),s.type="text/css",s.id="s"+f,(d.fake?d:c).appendChild(s),d.appendChild(c),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(n.createTextNode(e)),c.id=f,d.fake&&(d.style.background="",d.style.overflow="hidden",u=b.style.overflow,b.style.overflow="hidden",b.appendChild(d)),i=t(c,e),d.fake?(d.parentNode.removeChild(d),b.style.overflow=u,b.offsetHeight):c.parentNode.removeChild(c),!!i}function m(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function h(n,t,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,n,t);var s=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(s){var i=s.error?"error":"log";s[i].call(s,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!t&&n.currentStyle&&n.currentStyle[r];return o}function y(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(m(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];o--;)s.push("("+m(n[o])+":"+r+")");return s=s.join(" or "),d("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==h(e,null,"position")})}return t}function g(e,n,o,s){function i(){u&&(delete A.style,delete A.modElem)}if(s=r(s,"undefined")?!1:s,!r(o,"undefined")){var a=y(e,o);if(!r(a,"undefined"))return a}for(var u,p,d,m,h,g=["modernizr","tspan","samp"];!A.style&&g.length;)u=!0,A.modElem=l(g.shift()),A.style=A.modElem.style;for(d=e.length,p=0;d>p;p++)if(m=e[p],h=A.style[m],f(m,"-")&&(m=c(m)),A.style[m]!==t){if(s||r(o,"undefined"))return i(),"pfx"==n?m:!0;try{A.style[m]=o}catch(v){}if(A.style[m]!=h)return i(),"pfx"==n?m:!0}return i(),!1}function v(e,n,t,o,s){var i=e.charAt(0).toUpperCase()+e.slice(1),l=(e+" "+N.join(i+" ")+i).split(" ");return r(n,"string")||r(n,"undefined")?g(l,n,o,s):(l=(e+" "+k.join(i+" ")+i).split(" "),u(l,n,t))}function _(e,n,r){return v(e,t,t,n,r)}var C=[],S=[],x={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){S.push({name:e,fn:n,options:t})},addAsyncTest:function(e){S.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=x,Modernizr=new Modernizr;var w,b=n.documentElement,P="svg"===b.nodeName.toLowerCase();!function(){var e={}.hasOwnProperty;w=r(e,"undefined")||r(e.call,"undefined")?function(e,n){return n in e&&r(e.constructor.prototype[n],"undefined")}:function(n,t){return e.call(n,t)}}(),x._l={},x.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},x._trigger=function(e,n){if(this._l[e]){var t=this._l[e];setTimeout(function(){var e,r;for(e=0;e<t.length;e++)(r=t[e])(n)},0),delete this._l[e]}},Modernizr._q.push(function(){x.addTest=i});var T=x._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];x._prefixes=T;var z="CSS"in e&&"supports"in e.CSS,j="supportsCSS"in e;Modernizr.addTest("supports",z||j);var E=(x.testStyles=d,"Moz O ms Webkit"),N=x._config.usePrefixes?E.split(" "):[];x._cssomPrefixes=N;var k=x._config.usePrefixes?E.toLowerCase().split(" "):[];x._domPrefixes=k;var q={elem:l("modernizr")};Modernizr._q.push(function(){delete q.elem});var A={style:q.elem.style};Modernizr._q.unshift(function(){delete A.style});x.testProp=function(e,n,r){return g([e],t,n,r)};x.testAllProps=v,x.testAllProps=_,Modernizr.addTest("cssfilters",function(){if(Modernizr.supports)return _("filter","blur(2px)");var e=l("a");return e.style.cssText=T.join("filter:blur(2px); "),!!e.style.length&&(n.documentMode===t||n.documentMode>9)}),Modernizr.addTest("flexbox",_("flexBasis","1px",!0)),Modernizr.addTest("flexboxlegacy",_("boxDirection","reverse",!0)),o(),s(C),delete x.addTest,delete x.addAsyncTest;for(var L=0;L<Modernizr._q.length;L++)Modernizr._q[L]();e.Modernizr=Modernizr}(window,document);

 // Tests for the existance of working CSS flex properties and adds the "flex-grow-and-wrap" class if they exist, "no-" prefixed if they don't
 Modernizr.addTest("flex-grow-and-wrap", function() {return Modernizr.testAllProps("flexWrap") && Modernizr.testAllProps("flexGrow") && Modernizr.testAllProps("display", "flex");});
