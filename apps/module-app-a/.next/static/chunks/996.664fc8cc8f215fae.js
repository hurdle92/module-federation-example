(self.webpackChunkmoduleAppA=self.webpackChunkmoduleAppA||[]).push([[996,615],{6936:function(e,t){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DOMAttributeNames:function(){return r},default:function(){return u},isEqualNode:function(){return o}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function l(e){let{type:t,props:n}=e,l=document.createElement(t);for(let e in n){if(!n.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===n[e])continue;let o=r[e]||e.toLowerCase();"script"===t&&("async"===o||"defer"===o||"noModule"===o)?l[o]=!!n[e]:l.setAttribute(o,n[e])}let{children:o,dangerouslySetInnerHTML:u}=n;return u?l.innerHTML=u.__html||"":o&&(l.textContent="string"==typeof o?o:Array.isArray(o)?o.join(""):""),l}function o(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){let r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}function u(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let n=t[e.type]||[];n.push(e),t[e.type]=n});let r=t.title?t.title[0]:null,l="";if(r){let{children:e}=r.props;l="string"==typeof e?e:Array.isArray(e)?e.join(""):""}l!==document.title&&(document.title=l),["meta","base","link","style","script"].forEach(e=>{n(e,t[e]||[])})}}}n=(e,t)=>{let n=document.getElementsByTagName("head")[0],r=n.querySelector("meta[name=next-head-count]"),u=Number(r.content),a=[];for(let t=0,n=r.previousElementSibling;t<u;t++,n=(null==n?void 0:n.previousElementSibling)||null){var i;(null==n?void 0:null==(i=n.tagName)?void 0:i.toLowerCase())===e&&a.push(n)}let c=t.map(l).filter(e=>{for(let t=0,n=a.length;t<n;t++)if(o(a[t],e))return a.splice(t,1),!1;return!0});a.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),c.forEach(e=>n.insertBefore(e,r)),r.content=(u-a.length+c.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},700:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{cancelIdleCallback:function(){return r},requestIdleCallback:function(){return n}});let n="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},r="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6827:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return g},handleClientScriptLoad:function(){return b},initScriptLoader:function(){return h}});let r=n(6004),l=n(1263),o=n(5400),u=r._(n(8033)),a=l._(n(7059)),i=n(6200),c=n(6936),f=n(700),d=new Map,s=new Set,p=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],y=e=>{if(u.default.preinit){e.forEach(e=>{u.default.preinit(e,{as:"style"})});return}{let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},_=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:l=null,dangerouslySetInnerHTML:o,children:u="",strategy:a="afterInteractive",onError:i,stylesheets:f}=e,_=n||t;if(_&&s.has(_))return;if(d.has(t)){s.add(_),d.get(t).then(r,i);return}let b=()=>{l&&l(),s.add(_)},h=document.createElement("script"),m=new Promise((e,t)=>{h.addEventListener("load",function(t){e(),r&&r.call(this,t),b()}),h.addEventListener("error",function(e){t(e)})}).catch(function(e){i&&i(e)});for(let[n,r]of(o?(h.innerHTML=o.__html||"",b()):u?(h.textContent="string"==typeof u?u:Array.isArray(u)?u.join(""):"",b()):t&&(h.src=t,d.set(t,m)),Object.entries(e))){if(void 0===r||p.includes(n))continue;let e=c.DOMAttributeNames[n]||n.toLowerCase();h.setAttribute(e,r)}"worker"===a&&h.setAttribute("type","text/partytown"),h.setAttribute("data-nscript",a),f&&y(f),document.body.appendChild(h)};function b(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,f.requestIdleCallback)(()=>_(e))}):_(e)}function h(e){e.forEach(b),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");s.add(t)})}function m(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:l=null,strategy:c="afterInteractive",onError:d,stylesheets:p,...y}=e,{updateScripts:b,scripts:h,getIsSsr:m,appDir:g,nonce:v}=(0,a.useContext)(i.HeadManagerContext),M=(0,a.useRef)(!1);(0,a.useEffect)(()=>{let e=t||n;M.current||(l&&e&&s.has(e)&&l(),M.current=!0)},[l,t,n]);let O=(0,a.useRef)(!1);if((0,a.useEffect)(()=>{!O.current&&("afterInteractive"===c?_(e):"lazyOnload"===c&&("complete"===document.readyState?(0,f.requestIdleCallback)(()=>_(e)):window.addEventListener("load",()=>{(0,f.requestIdleCallback)(()=>_(e))})),O.current=!0)},[e,c]),("beforeInteractive"===c||"worker"===c)&&(b?(h[c]=(h[c]||[]).concat([{id:t,src:n,onLoad:r,onReady:l,onError:d,...y}]),b(h)):m&&m()?s.add(t||n):m&&!m()&&_(e)),g){if(p&&p.forEach(e=>{u.default.preinit(e,{as:"style"})}),"beforeInteractive"===c)return n?(u.default.preload(n,y.integrity?{as:"script",integrity:y.integrity,nonce:v}:{as:"script",nonce:v}),(0,o.jsx)("script",{nonce:v,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n,{...y,id:t}])+")"}})):(y.dangerouslySetInnerHTML&&(y.children=y.dangerouslySetInnerHTML.__html,delete y.dangerouslySetInnerHTML),(0,o.jsx)("script",{nonce:v,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...y,id:t}])+")"}}));"afterInteractive"===c&&n&&u.default.preload(n,y.integrity?{as:"script",integrity:y.integrity,nonce:v}:{as:"script",nonce:v})}return null}Object.defineProperty(m,"__nextScript",{value:!0});let g=m;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6200:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"HeadManagerContext",{enumerable:!0,get:function(){return r}});let r=n(6004)._(n(7059)).default.createContext({})},6996:function(e,t,n){e.exports=n(6827)},6004:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}n.r(t),n.d(t,{_:function(){return r},_interop_require_default:function(){return r}})},1263:function(e,t,n){"use strict";function r(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(r=function(e){return e?n:t})(e)}function l(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=r(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var a=o?Object.getOwnPropertyDescriptor(e,u):null;a&&(a.get||a.set)?Object.defineProperty(l,u,a):l[u]=e[u]}return l.default=e,n&&n.set(e,l),l}n.r(t),n.d(t,{_:function(){return l},_interop_require_wildcard:function(){return l}})}}]);