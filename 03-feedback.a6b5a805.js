!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o),o.register("f7677",(function(t,r){var n=o("8nrFW"),u=o("iD6GO"),i=document.querySelector("form"),a="formCurrentInputs";if(localStorage.getItem(a)){try{obj=JSON.parse(localStorage.getItem(a))}catch(e){return e}e(n)(i.elements).filter((function(e){return"submit"!==e.type})).map((function(e){return e.value=obj[e.name]}))}var l=[];i.addEventListener("input",(0,u.throttle)(500,(function(){l=Object.fromEntries(e(n)(i.elements).filter((function(e){return"submit"!==e.type})).map((function(e){return[e.name,e.value]}))),console.log(l),localStorage.setItem(a,JSON.stringify(l))}))),i.addEventListener("submit",(function(e){e.preventDefault();var t=new FormData(i),r=!0,n=!1,o=void 0;try{for(var u,l=t.entries()[Symbol.iterator]();!(r=(u=l.next()).done);r=!0){var f=u.value;console.log(f[0]+" : "+f[1])}}catch(e){n=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(n)throw o}}localStorage.removeItem(a),i.reset()}))})),o.register("8nrFW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return r.default(e)||n.default(e)||i.default(e)||u.default()};var r=a(o("kMC0W")),n=a(o("7AJDX")),u=a(o("8CtQK")),i=a(o("auk6i"));function a(e){return e&&e.__esModule?e:{default:e}}})),o.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return r.default(e)};var r=function(e){return e&&e.__esModule?e:{default:e}}(o("8NIkP"))})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return r.default(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r.default(e,t)};var r=function(e){return e&&e.__esModule?e:{default:e}}(o("8NIkP"))})),o.register("iD6GO",(function(e,t){var r,n,o,u;function i(e,t,r){var n,o=r||{},u=o.noTrailing,i=void 0!==u&&u,a=o.noLeading,l=void 0!==a&&a,f=o.debounceMode,s=void 0===f?void 0:f,c=!1,d=0;function p(){n&&clearTimeout(n)}function v(){for(var r=arguments.length,o=new Array(r),u=0;u<r;u++)o[u]=arguments[u];var a=this,f=Date.now()-d;function v(){d=Date.now(),t.apply(a,o)}function y(){n=void 0}c||(l||!s||n||v(),p(),void 0===s&&f>e?l?(d=Date.now(),i||(n=setTimeout(s?y:v,e))):v():!0!==i&&(n=setTimeout(s?y:v,void 0===s?e-f:e)))}return v.cancel=function(e){var t=(e||{}).upcomingOnly,r=void 0!==t&&t;p(),c=!r},v}r=e.exports,n="throttle",o=function(){return i},Object.defineProperty(r,n,{get:o,set:u,enumerable:!0,configurable:!0})})),o("f7677")}();
//# sourceMappingURL=03-feedback.a6b5a805.js.map
