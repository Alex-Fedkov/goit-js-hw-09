function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var l=r("7Y9D8");const i=document.querySelector("[name='delay']"),a=document.querySelector("[name='step']"),u=document.querySelector("[name='amount']");function s(e,t){return new Promise(((n,o)=>{setTimeout((()=>{Math.random()>.3?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(t=>{t.preventDefault();const n=Number(i.value),o=Number(a.value),r=Number(u.value);if(n<0)return void e(l).Report.warning("Alarm!","Please, first delay ​​must not be less than or equal 0","Reset");if(o<0)return void e(l).Report.warning("Alarm!","Please, delay step ​​must not be less than or equal 0","Reset");if(r<=0)return void e(l).Report.warning("Alarm!","Please, amount must not be less than to 0","Reset");let d=n;for(let t=1;t<r;t+=1)s(t,d).then((({position:t,delay:n})=>{e(l).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(l).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)})),d+=o}));
//# sourceMappingURL=03-promises.1eb989f4.js.map