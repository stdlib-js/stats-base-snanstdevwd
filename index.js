// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("path")):"function"==typeof define&&define.amd?define(["path"],e):(r="undefined"!=typeof globalThis?globalThis:r||self).snanstdevwd=e(r.require$$0)}(this,(function(r){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function n(r){return"number"==typeof r}function o(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+o(i):o(i)+r,n&&(r="-"+r)),r}var a=String.prototype.toLowerCase,c=String.prototype.toUpperCase;function u(r){var e,t,o;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,o=parseInt(t,10),!isFinite(o)){if(!n(t))throw new Error("invalid integer. Value: "+t);o=0}return o<0&&("u"===r.specifier||10!==e)&&(o=4294967295+o+1),o<0?(t=(-o).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=o.toString(e),o||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===c.call(r.specifier)?c.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var l=Math.abs,f=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,d=/e\+(\d)$/,g=/e-(\d)$/,y=/^(\d+)$/,h=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var e,t,o=parseFloat(r.arg);if(!isFinite(o)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);o=r.arg}switch(r.specifier){case"e":case"E":t=o.toExponential(r.precision);break;case"f":case"F":t=o.toFixed(r.precision);break;case"g":case"G":l(o)<1e-4?((e=r.precision)>0&&(e-=1),t=o.toExponential(e)):t=o.toPrecision(r.precision),r.alternate||(t=p.call(t,w,"$1e"),t=p.call(t,v,"e"),t=p.call(t,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=p.call(t,d,"e+0$1"),t=p.call(t,g,"e-0$1"),r.alternate&&(t=p.call(t,y,"$1."),t=p.call(t,h,"$1.e")),o>=0&&r.sign&&(t=r.sign+t),t=r.specifier===s.call(r.specifier)?s.call(t):f.call(t)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var _=String.fromCharCode,E=isNaN,S=Array.isArray;function x(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function A(r){var e,t,n,o,a,c,l,f,s,p,d,g,y;if(!S(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",l=1,f=0;f<r.length;f++)if(n=r[f],"string"==typeof n)c+=n;else{if(e=void 0!==n.precision,!(n=x(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(o=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,E(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,d=n.width,g=n.padRight,y=void 0,(y=d-p.length)<0?p:p=g?p+j(y):j(y)+p)),c+=n.arg||"",l+=1}return c}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function O(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function F(r){var e,t,n,o;for(t=[],o=0,n=k.exec(r);n;)(e=r.slice(o,k.lastIndex-n[0].length)).length&&t.push(e),t.push(O(n)),o=k.lastIndex,n=k.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function N(r){var e,t;if("string"!=typeof r)throw new TypeError(N("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[F(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return A.apply(null,e)}var T,I=Object.prototype,V=I.toString,P=I.__defineGetter__,$=I.__defineSetter__,C=I.__lookupGetter__,R=I.__lookupSetter__;T=function(){try{return e({},"x",{}),!0}catch(r){return!1}}()?t:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(N("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===V.call(t))throw new TypeError(N("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(C.call(r,e)||R.call(r,e)?(n=r.__proto__,r.__proto__=I,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&P&&P.call(r,e,t.get),a&&$&&$.call(r,e,t.set),r};var q=T;function B(r,e,t){q(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var L="function"==typeof Math.fround?Math.fround:null;var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function G(){return M&&"symbol"==typeof Symbol.toStringTag}var Z=Object.prototype.toString;var W=Object.prototype.hasOwnProperty;var U,X="function"==typeof Symbol?Symbol:void 0,z="function"==typeof X?X.toStringTag:"";U=G()?function(r){var e,t,n,o,i;if(null==r)return Z.call(r);t=r[z],i=z,e=null!=(o=r)&&W.call(o,i);try{r[z]=void 0}catch(e){return Z.call(r)}return n=Z.call(r),e?r[z]=t:delete r[z],n}:function(r){return Z.call(r)};var D=U,J="function"==typeof Float32Array;var Y=Number.POSITIVE_INFINITY,H="function"==typeof Float32Array?Float32Array:null;var K,Q="function"==typeof Float32Array?Float32Array:void 0;K=function(){var r,e,t;if("function"!=typeof H)return!1;try{e=new H([1,3.14,-3.14,5e40]),t=e,r=(J&&t instanceof Float32Array||"[object Float32Array]"===D(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===Y}catch(e){r=!1}return r}()?Q:function(){throw new Error("not implemented")};var rr=new K(1);var er="function"==typeof L?L:function(r){return rr[0]=r,rr[0]};var tr=Object,nr=/./;function or(r){return"boolean"==typeof r}var ir=Boolean,ar=Boolean.prototype.toString;var cr=G();function ur(r){return"object"==typeof r&&(r instanceof ir||(cr?function(r){try{return ar.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===D(r)))}function lr(r){return or(r)||ur(r)}B(lr,"isPrimitive",or),B(lr,"isObject",ur);var fr="object"==typeof self?self:null,sr="object"==typeof window?window:null,pr="object"==typeof global?global:null,dr="object"==typeof globalThis?globalThis:null;var gr=function(r){if(arguments.length){if(!or(r))throw new TypeError(N("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(dr)return dr;if(fr)return fr;if(sr)return sr;if(pr)return pr;throw new Error("unexpected error. Unable to resolve global object.")}(),yr=gr.document&&gr.document.childNodes,hr=Int8Array;function br(){return/^\s*function\s*([^(]*)/i}var vr,wr=/^\s*function\s*([^(]*)/i;B(br,"REGEXP",wr),vr=Array.isArray?Array.isArray:function(r){return"[object Array]"===D(r)};var mr=vr;function jr(r){return null!==r&&"object"==typeof r}var _r=function(r){if("function"!=typeof r)throw new TypeError(N("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!mr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(jr);function Er(r){var e,t,n,o;if(("Object"===(t=D(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=wr.exec(n.toString()))return e[1]}return jr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}B(jr,"isObjectLikeArray",_r);var Sr="function"==typeof nr||"object"==typeof hr||"function"==typeof yr?function(r){return Er(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Er(r).toLowerCase():e};var xr,Ar,kr=Object.getPrototypeOf;Ar=Object.getPrototypeOf,xr="function"===Sr(Ar)?kr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===D(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Or=xr;function Fr(r){return null==r?null:(r=tr(r),Or(r))}function Nr(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===D(r))return!0;r=Fr(r)}return!1}function Tr(r,e,t,n){var o,i,a,c,u,l,f,s;if(r<=0)return NaN;if(1===r||0===n)return(l=t[0])==l&&r-e>0?0:NaN;for(c=n<0?(1-r)*n:0,a=0,i=0,f=0,s=0;s<r;s++)(l=t[c])==l&&(o=er(l-i),i=er(i+er(o/(f+=1))),a=er(a+er(o*er(l-i)))),c+=n;return(u=f-e)<=0?NaN:er(a/u)}B(Tr,"ndarray",(function(r,e,t,n,o){var i,a,c,u,l,f,s,p;if(r<=0)return NaN;if(1===r||0===n)return(f=t[o])==f&&r-e>0?0:NaN;for(u=o,c=0,a=0,s=0,p=0;p<r;p++)(f=t[u])==f&&(i=er(f-a),a=er(a+er(i/(s+=1))),c=er(c+er(i*er(f-a)))),u+=n;return(l=s-e)<=0?NaN:er(c/l)}));var Ir,Vr=function(r){try{return function(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}(r)}catch(r){return Nr(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}((0,r.join)(__dirname,"./native.js")),Pr=Ir=Nr(Vr)?Tr:Vr;const{ndarray:$r}=Ir;var Cr=Math.sqrt;function Rr(r,e,t,n){return er(Cr(Pr(r,e,t,n)))}return B(Rr,"ndarray",(function(r,e,t,n,o){return er(Cr($r(r,e,t,n,o)))})),Rr}));
//# sourceMappingURL=index.js.map
