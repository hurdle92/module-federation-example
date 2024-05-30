exports.id=38,exports.ids=[38],exports.modules={6532:(e,t)=>{"use strict";function n(e){let{ampFirst:t=!1,hybrid:n=!1,hasQuery:r=!1}=void 0===e?{}:e;return t||n&&r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return n}})},9504:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return _},defaultHead:function(){return p}});let r=n(8678),o=n(9817),u=n(5400),a=o._(n(2015)),d=r._(n(5119)),l=n(2502),i=n(5502),s=n(6532);function p(e){void 0===e&&(e=!1);let t=[(0,u.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,u.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function c(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}n(9484);let f=["name","httpEquiv","charSet","itemProp"];function y(e,t){let{inAmpMode:n}=t;return e.reduce(c,[]).reverse().concat(p(n).reverse()).filter(function(){let e=new Set,t=new Set,n=new Set,r={};return o=>{let u=!0,a=!1;if(o.key&&"number"!=typeof o.key&&o.key.indexOf("$")>0){a=!0;let t=o.key.slice(o.key.indexOf("$")+1);e.has(t)?u=!1:e.add(t)}switch(o.type){case"title":case"base":t.has(o.type)?u=!1:t.add(o.type);break;case"meta":for(let e=0,t=f.length;e<t;e++){let t=f[e];if(o.props.hasOwnProperty(t)){if("charSet"===t)n.has(t)?u=!1:n.add(t);else{let e=o.props[t],n=r[t]||new Set;("name"!==t||!a)&&n.has(e)?u=!1:(n.add(e),r[t]=n)}}}}return u}}()).reverse().map((e,t)=>{let r=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,a.default.cloneElement(e,t)}return a.default.cloneElement(e,{key:r})})}let _=function(e){let{children:t}=e,n=(0,a.useContext)(l.AmpStateContext),r=(0,a.useContext)(i.HeadManagerContext);return(0,u.jsx)(d.default,{reduceComponentsToState:y,headManager:r,inAmpMode:(0,s.isInAmpMode)(n),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5119:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let r=n(2015),o=()=>{},u=()=>{};function a(e){var t;let{headManager:n,reduceComponentsToState:a}=e;function d(){if(n&&n.mountedInstances){let t=r.Children.toArray(Array.from(n.mountedInstances).filter(Boolean));n.updateHead(a(t,e))}}return null==n||null==(t=n.mountedInstances)||t.add(e.children),d(),o(()=>{var t;return null==n||null==(t=n.mountedInstances)||t.add(e.children),()=>{var t;null==n||null==(t=n.mountedInstances)||t.delete(e.children)}}),o(()=>(n&&(n._pendingUpdate=d),()=>{n&&(n._pendingUpdate=d)})),u(()=>(n&&n._pendingUpdate&&(n._pendingUpdate(),n._pendingUpdate=null),()=>{n&&n._pendingUpdate&&(n._pendingUpdate(),n._pendingUpdate=null)})),null}},9484:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},6164:(e,t,n)=>{"use strict";e.exports=n(361)},2502:(e,t,n)=>{"use strict";e.exports=n(6164).vendored.contexts.AmpContext},5502:(e,t,n)=>{"use strict";e.exports=n(6164).vendored.contexts.HeadManagerContext},2657:(e,t,n)=>{e.exports=n(9504)},8678:(e,t)=>{"use strict";t._=t._interop_require_default=function(e){return e&&e.__esModule?e:{default:e}}},9817:(e,t)=>{"use strict";function n(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(n=function(e){return e?r:t})(e)}t._=t._interop_require_wildcard=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=n(t);if(r&&r.has(e))return r.get(e);var o={__proto__:null},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var d=u?Object.getOwnPropertyDescriptor(e,a):null;d&&(d.get||d.set)?Object.defineProperty(o,a,d):o[a]=e[a]}return o.default=e,r&&r.set(e,o),o}}};