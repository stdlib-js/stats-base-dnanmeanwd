// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";function n(r,n,e){var t,a,i,f,u;if(r<=0)return NaN;if(1===r||0===e)return n[0];for(a=e<0?(1-r)*e:0,t=0,f=0,u=0;u<r;u++)(i=n[a])==i&&(t+=(i-t)/(f+=1)),a+=e;return 0===f?NaN:t}function e(r,n,e,t){var a,i,f,u,o;if(r<=0)return NaN;if(1===r||0===e)return n[t];for(i=t,a=0,u=0,o=0;o<r;o++)(f=n[i])==f&&(a+=(f-a)/(u+=1)),i+=e;return 0===u?NaN:a}r(n,"ndarray",e);export{n as default,e as ndarray};
//# sourceMappingURL=index.mjs.map
