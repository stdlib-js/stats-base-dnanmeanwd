"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var d=s(function(z,f){
function j(e,r,a,q){var n,u,i,t,v;if(e<=0)return NaN;if(e===1||a===0)return r[q];for(u=q,n=0,t=0,v=0;v<e;v++)i=r[u],i===i&&(t+=1,n+=(i-n)/t),u+=a;return t===0?NaN:n}f.exports=j
});var c=s(function(A,m){
var l=require('@stdlib/strided-base-stride2offset/dist'),R=d();function _(e,r,a){return R(e,r,a,l(e,a))}m.exports=_
});var w=s(function(B,y){
var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=c(),N=d();E(p,"ndarray",N);y.exports=p
});var O=require("path").join,b=require('@stdlib/utils-try-require/dist'),g=require('@stdlib/assert-is-error/dist'),h=w(),o,x=b(O(__dirname,"./native.js"));g(x)?o=h:o=x;module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
