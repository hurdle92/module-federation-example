(self.webpackChunkmoduleAppA=self.webpackChunkmoduleAppA||[]).push([[957],{3605:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return y}});let r=i(6004),n=i(1263),o=i(5400),s=n._(i(7059)),l=r._(i(8033)),a=r._(i(9504)),u=i(6241),d=i(7087),c=i(5766);i(9484);let f=i(3455),g=r._(i(3677)),p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function m(e,t,i,r,n,o,s){let l=null==e?void 0:e.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&n(!0),null==i?void 0:i.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,n=!1;i.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{n=!0,t.stopPropagation()}})}(null==r?void 0:r.current)&&r.current(e)}}))}function h(e){let[t,i]=s.version.split(".",2),r=parseInt(t,10),n=parseInt(i,10);return r>18||18===r&&n>=3?{fetchPriority:e}:{fetchpriority:e}}let b=(0,s.forwardRef)((e,t)=>{let{src:i,srcSet:r,sizes:n,height:l,width:a,decoding:u,className:d,style:c,fetchPriority:f,placeholder:g,loading:p,unoptimized:b,fill:v,onLoadRef:y,onLoadingCompleteRef:w,setBlurComplete:S,setShowAltText:_,sizesInput:j,onLoad:x,onError:C,...P}=e;return(0,o.jsx)("img",{...P,...h(f),loading:p,width:a,height:l,decoding:u,"data-nimg":v?"fill":"1",className:d,style:c,sizes:n,srcSet:r,src:i,ref:(0,s.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(C&&(e.src=e.src),e.complete&&m(e,g,y,w,S,b,j))},[i,g,y,w,S,C,b,j,t]),onLoad:e=>{m(e.currentTarget,g,y,w,S,b,j)},onError:e=>{_(!0),"empty"!==g&&S(!0),C&&C(e)}})});function v(e){let{isAppRouter:t,imgAttributes:i}=e,r={as:"image",imageSrcSet:i.srcSet,imageSizes:i.sizes,crossOrigin:i.crossOrigin,referrerPolicy:i.referrerPolicy,...h(i.fetchPriority)};return t&&l.default.preload?(l.default.preload(i.src,r),null):(0,o.jsx)(a.default,{children:(0,o.jsx)("link",{rel:"preload",href:i.srcSet?void 0:i.src,...r},"__nimg-"+i.src+i.srcSet+i.sizes)})}let y=(0,s.forwardRef)((e,t)=>{let i=(0,s.useContext)(f.RouterContext),r=(0,s.useContext)(c.ImageConfigContext),n=(0,s.useMemo)(()=>{let e=p||r||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:i}},[r]),{onLoad:l,onLoadingComplete:a}=e,m=(0,s.useRef)(l);(0,s.useEffect)(()=>{m.current=l},[l]);let h=(0,s.useRef)(a);(0,s.useEffect)(()=>{h.current=a},[a]);let[y,w]=(0,s.useState)(!1),[S,_]=(0,s.useState)(!1),{props:j,meta:x}=(0,u.getImgProps)(e,{defaultLoader:g.default,imgConf:n,blurComplete:y,showAltText:S});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(b,{...j,unoptimized:x.unoptimized,placeholder:x.placeholder,fill:x.fill,onLoadRef:m,onLoadingCompleteRef:h,setBlurComplete:w,setShowAltText:_,sizesInput:e.sizes,ref:t}),x.priority?(0,o.jsx)(v,{isAppRouter:!i,imgAttributes:j}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6241:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return l}}),i(9484);let r=i(1192),n=i(7087);function o(e){return void 0!==e.default}function s(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l(e,t){var i;let l,a,u,{src:d,sizes:c,unoptimized:f=!1,priority:g=!1,loading:p,className:m,quality:h,width:b,height:v,fill:y=!1,style:w,overrideSrc:S,onLoad:_,onLoadingComplete:j,placeholder:x="empty",blurDataURL:C,fetchPriority:P,layout:z,objectFit:O,objectPosition:E,lazyBoundary:I,lazyRoot:R,...M}=e,{imgConf:A,showAltText:k,blurComplete:D,defaultLoader:L}=t,F=A||n.imageConfigDefault;if("allSizes"in F)l=F;else{let e=[...F.deviceSizes,...F.imageSizes].sort((e,t)=>e-t),t=F.deviceSizes.sort((e,t)=>e-t);l={...F,allSizes:e,deviceSizes:t}}if(void 0===L)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let G=M.loader||L;delete M.loader,delete M.srcSet;let N="__next_img_default"in G;if(N){if("custom"===l.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=G;G=t=>{let{config:i,...r}=t;return e(r)}}if(z){"fill"===z&&(y=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[z];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[z];t&&!c&&(c=t)}let B="",T=s(b),V=s(v);if("object"==typeof(i=d)&&(o(i)||void 0!==i.src)){let e=o(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(a=e.blurWidth,u=e.blurHeight,C=C||e.blurDataURL,B=e.src,!y){if(T||V){if(T&&!V){let t=T/e.width;V=Math.round(e.height*t)}else if(!T&&V){let t=V/e.height;T=Math.round(e.width*t)}}else T=e.width,V=e.height}}let W=!g&&("lazy"===p||void 0===p);(!(d="string"==typeof d?d:B)||d.startsWith("data:")||d.startsWith("blob:"))&&(f=!0,W=!1),l.unoptimized&&(f=!0),N&&d.endsWith(".svg")&&!l.dangerouslyAllowSVG&&(f=!0),g&&(P="high");let U=s(h),q=Object.assign(y?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:O,objectPosition:E}:{},k?{}:{color:"transparent"},w),J=D||"empty"===x?null:"blur"===x?'url("data:image/svg+xml;charset=utf-8,'+(0,r.getImageBlurSvg)({widthInt:T,heightInt:V,blurWidth:a,blurHeight:u,blurDataURL:C||"",objectFit:q.objectFit})+'")':'url("'+x+'")',Y=J?{backgroundSize:q.objectFit||"cover",backgroundPosition:q.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:J}:{},H=function(e){let{config:t,src:i,unoptimized:r,width:n,quality:o,sizes:s,loader:l}=e;if(r)return{src:i,srcSet:void 0,sizes:void 0};let{widths:a,kind:u}=function(e,t,i){let{deviceSizes:r,allSizes:n}=e;if(i){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(i);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:n,kind:"w"}}return"number"!=typeof t?{widths:r,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))],kind:"x"}}(t,n,s),d=a.length-1;return{sizes:s||"w"!==u?s:"100vw",srcSet:a.map((e,r)=>l({config:t,src:i,quality:o,width:e})+" "+("w"===u?e:r+1)+u).join(", "),src:l({config:t,src:i,quality:o,width:a[d]})}}({config:l,src:d,unoptimized:f,width:T,quality:U,sizes:c,loader:G});return{props:{...M,loading:W?"lazy":p,fetchPriority:P,width:T,height:V,decoding:"async",className:m,style:{...q,...Y},sizes:H.sizes,srcSet:H.srcSet,src:S||H.src},meta:{unoptimized:f,priority:g,placeholder:x,fill:y}}}},1192:function(e,t){"use strict";function i(e){let{widthInt:t,heightInt:i,blurWidth:r,blurHeight:n,blurDataURL:o,objectFit:s}=e,l=r?40*r:t,a=n?40*n:i,u=l&&a?"viewBox='0 0 "+l+" "+a+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+u+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(u?"none":"contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return i}})},5766:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return o}});let r=i(6004)._(i(7059)),n=i(7087),o=r.default.createContext(n.imageConfigDefault)},7087:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{VALID_LOADERS:function(){return i},imageConfigDefault:function(){return r}});let i=["default","imgix","cloudinary","akamai","custom"],r={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},6061:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{default:function(){return a},getImageProps:function(){return l}});let r=i(6004),n=i(6241),o=i(3605),s=r._(i(3677));function l(e){let{props:t}=(0,n.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,i]of Object.entries(t))void 0===i&&delete t[e];return{props:t}}let a=o.Image},3677:function(e,t){"use strict";function i(e){let{config:t,src:i,width:r,quality:n}=e;return t.path+"?url="+encodeURIComponent(i)+"&w="+r+"&q="+(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),i.__next_img_default=!0;let r=i},3455:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return r}});let r=i(6004)._(i(7059)).default.createContext(null)},7338:function(e,t,i){e.exports=i(6061)}}]);