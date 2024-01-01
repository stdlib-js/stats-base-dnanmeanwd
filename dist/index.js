"use strict";var s=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var d=s(function(h,m){
function j(r,a,v){var t,e,i,n,u;if(r<=0)return NaN;if(r===1||v===0)return a[0];for(v<0?e=(1-r)*v:e=0,t=0,n=0,u=0;u<r;u++)i=a[e],i===i&&(n+=1,t+=(i-t)/n),e+=v;return n===0?NaN:t}m.exports=j
});var c=s(function(k,q){
function l(r,a,v,t){var e,i,n,u,f;if(r<=0)return NaN;if(r===1||v===0)return a[t];for(i=t,e=0,u=0,f=0;f<r;f++)n=a[i],n===n&&(u+=1,e+=(n-e)/u),i+=v;return u===0?NaN:e}q.exports=l
});var x=s(function(z,w){
var N=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=d(),R=c();N(p,"ndarray",R);w.exports=p
});var _=require("path").join,E=require('@stdlib/utils-try-require/dist'),O=require('@stdlib/assert-is-error/dist'),b=x(),o,y=E(_(__dirname,"./native.js"));O(y)?o=b:o=y;module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
