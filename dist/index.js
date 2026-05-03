"use strict";var i=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=i(function(k,s){
var f=require('@stdlib/number-float64-base-to-float32/dist'),p=require('@stdlib/stats-base-snanvariancewd/dist'),y=require('@stdlib/math-base-special-sqrt/dist');function x(e,r,a,t){return f(y(p(e,r,a,t)))}s.exports=x
});var q=i(function(z,v){
var j=require('@stdlib/number-float64-base-to-float32/dist'),m=require('@stdlib/stats-base-snanvariancewd/dist').ndarray,F=require('@stdlib/math-base-special-sqrt/dist');function R(e,r,a,t,w){return j(F(m(e,r,a,t,w)))}v.exports=R
});var c=i(function(A,o){
var T=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=u(),_=q();T(d,"ndarray",_);o.exports=d
});var E=require("path").join,O=require('@stdlib/utils-try-require/dist'),b=require('@stdlib/assert-is-error/dist'),g=c(),n,l=O(E(__dirname,"./native.js"));b(l)?n=g:n=l;module.exports=n;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
