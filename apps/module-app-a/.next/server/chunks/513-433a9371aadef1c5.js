exports.id=513,exports.ids=[513],exports.modules={6321:(e,t,l)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var l in t)Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}(t,{default:function(){return a},noSSR:function(){return d}});let o=l(8678),r=l(5400);l(2015);let n=o._(l(2788));function u(e){return{default:(null==e?void 0:e.default)||e}}function d(e,t){delete t.webpack,delete t.modules;let l=t.loading;return()=>(0,r.jsx)(l,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}function a(e,t){let l=n.default,o={loading:e=>{let{error:t,isLoading:l,pastDelay:o}=e;return null}};e instanceof Promise?o.loader=()=>e:"function"==typeof e?o.loader=e:"object"==typeof e&&(o={...o,...e});let r=(o={...o,...t}).loader;return(o.loadableGenerated&&(o={...o,...o.loadableGenerated},delete o.loadableGenerated),"boolean"!=typeof o.ssr||o.ssr)?l({...o,loader:()=>null!=r?r().then(u):Promise.resolve(u(()=>null))}):(delete o.webpack,delete o.modules,d(l,o))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6164:(e,t,l)=>{"use strict";e.exports=l(361)},2788:(e,t,l)=>{"use strict";e.exports=l(6164).vendored.contexts.Loadable},3894:(e,t,l)=>{e.exports=l(6321)},8678:(e,t)=>{"use strict";t._=t._interop_require_default=function(e){return e&&e.__esModule?e:{default:e}}}};