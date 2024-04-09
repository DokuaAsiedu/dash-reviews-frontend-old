(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[683],{3809:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"actionAsyncStorage",{enumerable:!0,get:function(){return n}});let n=(0,r(8267).createAsyncLocalStorage)();("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8267:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"createAsyncLocalStorage",{enumerable:!0,get:function(){return i}});let r=Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");class n{disable(){throw r}getStore(){}run(){throw r}exit(){throw r}enterWith(){throw r}}let o=globalThis.AsyncLocalStorage;function i(){return o?new o:new n}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1770:function(e,t,r){"use strict";function n(e){}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"clientHookInServerComponentError",{enumerable:!0,get:function(){return n}}),r(8754),r(7294),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6612:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ReadonlyURLSearchParams:function(){return g},useSearchParams:function(){return y},usePathname:function(){return b},ServerInsertedHTMLContext:function(){return s.ServerInsertedHTMLContext},useServerInsertedHTML:function(){return s.useServerInsertedHTML},useRouter:function(){return m},useParams:function(){return h},useSelectedLayoutSegments:function(){return v},useSelectedLayoutSegment:function(){return _},redirect:function(){return c.redirect},permanentRedirect:function(){return c.permanentRedirect},RedirectType:function(){return c.RedirectType},notFound:function(){return f.notFound}});let n=r(7294),o=r(6216),i=r(349),u=r(1770),l=r(8865),a=r(5160),s=r(594),c=r(7573),f=r(9249),d=Symbol("internal for urlsearchparams readonly");function p(){return Error("ReadonlyURLSearchParams cannot be modified")}class g{[Symbol.iterator](){return this[d][Symbol.iterator]()}append(){throw p()}delete(){throw p()}set(){throw p()}sort(){throw p()}constructor(e){this[d]=e,this.entries=e.entries.bind(e),this.forEach=e.forEach.bind(e),this.get=e.get.bind(e),this.getAll=e.getAll.bind(e),this.has=e.has.bind(e),this.keys=e.keys.bind(e),this.values=e.values.bind(e),this.toString=e.toString.bind(e),this.size=e.size}}function y(){(0,u.clientHookInServerComponentError)("useSearchParams");let e=(0,n.useContext)(i.SearchParamsContext);return(0,n.useMemo)(()=>e?new g(e):null,[e])}function b(){return(0,u.clientHookInServerComponentError)("usePathname"),(0,n.useContext)(i.PathnameContext)}function m(){(0,u.clientHookInServerComponentError)("useRouter");let e=(0,n.useContext)(o.AppRouterContext);if(null===e)throw Error("invariant expected app router to be mounted");return e}function h(){(0,u.clientHookInServerComponentError)("useParams");let e=(0,n.useContext)(o.GlobalLayoutRouterContext),t=(0,n.useContext)(i.PathParamsContext);return(0,n.useMemo)(()=>(null==e?void 0:e.tree)?function e(t,r){for(let n of(void 0===r&&(r={}),Object.values(t[1]))){let t=n[0],o=Array.isArray(t),i=o?t[1]:t;!i||i.startsWith(a.PAGE_SEGMENT_KEY)||(o&&("c"===t[2]||"oc"===t[2])?r[t[0]]=t[1].split("/"):o&&(r[t[0]]=t[1]),r=e(n,r))}return r}(e.tree):t,[null==e?void 0:e.tree,t])}function v(e){void 0===e&&(e="children"),(0,u.clientHookInServerComponentError)("useSelectedLayoutSegments");let{tree:t}=(0,n.useContext)(o.LayoutRouterContext);return function e(t,r,n,o){let i;if(void 0===n&&(n=!0),void 0===o&&(o=[]),n)i=t[1][r];else{var u;let e=t[1];i=null!=(u=e.children)?u:Object.values(e)[0]}if(!i)return o;let s=i[0],c=(0,l.getSegmentValue)(s);return!c||c.startsWith(a.PAGE_SEGMENT_KEY)?o:(o.push(c),e(i,r,!1,o))}(t,e)}function _(e){void 0===e&&(e="children"),(0,u.clientHookInServerComponentError)("useSelectedLayoutSegment");let t=v(e);return 0===t.length?null:t[0]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9249:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{notFound:function(){return n},isNotFoundError:function(){return o}});let r="NEXT_NOT_FOUND";function n(){let e=Error(r);throw e.digest=r,e}function o(e){return"object"==typeof e&&null!==e&&"digest"in e&&e.digest===r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2445:function(e,t){"use strict";var r,n;Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RedirectStatusCode",{enumerable:!0,get:function(){return r}}),(n=r||(r={}))[n.SeeOther=303]="SeeOther",n[n.TemporaryRedirect=307]="TemporaryRedirect",n[n.PermanentRedirect=308]="PermanentRedirect",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7573:function(e,t,r){"use strict";var n,o;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{RedirectType:function(){return n},getRedirectError:function(){return s},redirect:function(){return c},permanentRedirect:function(){return f},isRedirectError:function(){return d},getURLFromRedirectError:function(){return p},getRedirectTypeFromError:function(){return g},getRedirectStatusCodeFromError:function(){return y}});let i=r(7714),u=r(3809),l=r(2445),a="NEXT_REDIRECT";function s(e,t,r){void 0===r&&(r=l.RedirectStatusCode.TemporaryRedirect);let n=Error(a);n.digest=a+";"+t+";"+e+";"+r+";";let o=i.requestAsyncStorage.getStore();return o&&(n.mutableCookies=o.mutableCookies),n}function c(e,t){void 0===t&&(t="replace");let r=u.actionAsyncStorage.getStore();throw s(e,t,(null==r?void 0:r.isAction)?l.RedirectStatusCode.SeeOther:l.RedirectStatusCode.TemporaryRedirect)}function f(e,t){void 0===t&&(t="replace");let r=u.actionAsyncStorage.getStore();throw s(e,t,(null==r?void 0:r.isAction)?l.RedirectStatusCode.SeeOther:l.RedirectStatusCode.PermanentRedirect)}function d(e){if("object"!=typeof e||null===e||!("digest"in e)||"string"!=typeof e.digest)return!1;let[t,r,n,o]=e.digest.split(";",4),i=Number(o);return t===a&&("replace"===r||"push"===r)&&"string"==typeof n&&!isNaN(i)&&i in l.RedirectStatusCode}function p(e){return d(e)?e.digest.split(";",3)[2]:null}function g(e){if(!d(e))throw Error("Not a redirect error");return e.digest.split(";",2)[1]}function y(e){if(!d(e))throw Error("Not a redirect error");return Number(e.digest.split(";",4)[3])}(o=n||(n={})).push="push",o.replace="replace",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7714:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"requestAsyncStorage",{enumerable:!0,get:function(){return n}});let n=(0,r(8267).createAsyncLocalStorage)();("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8865:function(e,t){"use strict";function r(e){return Array.isArray(e)?e[1]:e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getSegmentValue",{enumerable:!0,get:function(){return r}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3412:function(e,t){"use strict";var r,n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PrefetchKind:function(){return r},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return i},ACTION_RESTORE:function(){return u},ACTION_SERVER_PATCH:function(){return l},ACTION_PREFETCH:function(){return a},ACTION_FAST_REFRESH:function(){return s},ACTION_SERVER_ACTION:function(){return c},isThenable:function(){return f}});let o="refresh",i="navigate",u="restore",l="server-patch",a="prefetch",s="fast-refresh",c="server-action";function f(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(n=r||(r={})).AUTO="auto",n.FULL="full",n.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6504:function(e,t,r){"use strict";function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(282),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3686:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return v}});let n=r(8754),o=r(1757),i=r(5893),u=o._(r(7294)),l=n._(r(3935)),a=n._(r(6665)),s=r(1908),c=r(4706),f=r(5670);r(1558);let d=r(1973),p=n._(r(3293)),g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/dash-reviews-frontend/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function y(e,t,r,n,o,i){let u=null==e?void 0:e.src;e&&e["data-loaded-src"]!==u&&(e["data-loaded-src"]=u,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&o(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,o=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}}))}function b(e){let[t,r]=u.version.split(".",2),n=parseInt(t,10),o=parseInt(r,10);return n>18||18===n&&o>=3?{fetchPriority:e}:{fetchpriority:e}}let m=(0,u.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:o,height:l,width:a,decoding:s,className:c,style:f,fetchPriority:d,placeholder:p,loading:g,unoptimized:m,fill:h,onLoadRef:v,onLoadingCompleteRef:_,setBlurComplete:j,setShowAltText:O,onLoad:S,onError:P,...C}=e;return(0,i.jsx)("img",{...C,...b(d),loading:g,width:a,height:l,decoding:s,"data-nimg":h?"fill":"1",className:c,style:f,sizes:o,srcSet:n,src:r,ref:(0,u.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(P&&(e.src=e.src),e.complete&&y(e,p,v,_,j,m))},[r,p,v,_,j,P,m,t]),onLoad:e=>{y(e.currentTarget,p,v,_,j,m)},onError:e=>{O(!0),"empty"!==p&&j(!0),P&&P(e)}})});function h(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...b(r.fetchPriority)};return t&&l.default.preload?(l.default.preload(r.src,n),null):(0,i.jsx)(a.default,{children:(0,i.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...n},"__nimg-"+r.src+r.srcSet+r.sizes)})}let v=(0,u.forwardRef)((e,t)=>{let r=(0,u.useContext)(d.RouterContext),n=(0,u.useContext)(f.ImageConfigContext),o=(0,u.useMemo)(()=>{let e=g||n||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[n]),{onLoad:l,onLoadingComplete:a}=e,y=(0,u.useRef)(l);(0,u.useEffect)(()=>{y.current=l},[l]);let b=(0,u.useRef)(a);(0,u.useEffect)(()=>{b.current=a},[a]);let[v,_]=(0,u.useState)(!1),[j,O]=(0,u.useState)(!1),{props:S,meta:P}=(0,s.getImgProps)(e,{defaultLoader:p.default,imgConf:o,blurComplete:v,showAltText:j});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(m,{...S,unoptimized:P.unoptimized,placeholder:P.placeholder,fill:P.fill,onLoadRef:y,onLoadingCompleteRef:b,setBlurComplete:_,setShowAltText:O,ref:t}),P.priority?(0,i.jsx)(h,{isAppRouter:!r,imgAttributes:S}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3480:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return _}});let n=r(8754),o=r(5893),i=n._(r(7294)),u=r(7950),l=r(7387),a=r(6982),s=r(6921),c=r(7727),f=r(1973),d=r(6216),p=r(1722),g=r(6504),y=r(634),b=r(3412),m=new Set;function h(e,t,r,n,o,i){if(i||(0,l.isLocalURL)(t)){if(!n.bypassPrefetchedCheck){let o=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(m.has(o))return;m.add(o)}Promise.resolve(i?e.prefetch(t,o):e.prefetch(t,r,n)).catch(e=>{})}}function v(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}let _=i.default.forwardRef(function(e,t){let r,n;let{href:a,as:m,children:_,prefetch:j=null,passHref:O,replace:S,shallow:P,scroll:C,locale:w,onClick:E,onMouseEnter:x,onTouchStart:M,legacyBehavior:R=!1,...I}=e;r=_,R&&("string"==typeof r||"number"==typeof r)&&(r=(0,o.jsx)("a",{children:r}));let A=i.default.useContext(f.RouterContext),T=i.default.useContext(d.AppRouterContext),k=null!=A?A:T,N=!A,L=!1!==j,z=null===j?b.PrefetchKind.AUTO:b.PrefetchKind.FULL,{href:F,as:H}=i.default.useMemo(()=>{if(!A){let e=v(a);return{href:e,as:m?v(m):e}}let[e,t]=(0,u.resolveHref)(A,a,!0);return{href:e,as:m?(0,u.resolveHref)(A,m):t||e}},[A,a,m]),D=i.default.useRef(F),U=i.default.useRef(H);R&&(n=i.default.Children.only(r));let G=R?n&&"object"==typeof n&&n.ref:t,[K,W,B]=(0,p.useIntersection)({rootMargin:"200px"}),V=i.default.useCallback(e=>{(U.current!==H||D.current!==F)&&(B(),U.current=H,D.current=F),K(e),G&&("function"==typeof G?G(e):"object"==typeof G&&(G.current=e))},[H,G,F,B,K]);i.default.useEffect(()=>{k&&W&&L&&h(k,F,H,{locale:w},{kind:z},N)},[H,F,W,w,L,null==A?void 0:A.locale,k,N,z]);let q={ref:V,onClick(e){R||"function"!=typeof E||E(e),R&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),k&&!e.defaultPrevented&&function(e,t,r,n,o,u,a,s,c){let{nodeName:f}=e.currentTarget;if("A"===f.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,l.isLocalURL)(r)))return;e.preventDefault();let d=()=>{let e=null==a||a;"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:u,locale:s,scroll:e}):t[o?"replace":"push"](n||r,{scroll:e})};c?i.default.startTransition(d):d()}(e,k,F,H,S,P,C,w,N)},onMouseEnter(e){R||"function"!=typeof x||x(e),R&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),k&&(L||!N)&&h(k,F,H,{locale:w,priority:!0,bypassPrefetchedCheck:!0},{kind:z},N)},onTouchStart(e){R||"function"!=typeof M||M(e),R&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),k&&(L||!N)&&h(k,F,H,{locale:w,priority:!0,bypassPrefetchedCheck:!0},{kind:z},N)}};if((0,s.isAbsoluteUrl)(H))q.href=H;else if(!R||O||"a"===n.type&&!("href"in n.props)){let e=void 0!==w?w:null==A?void 0:A.locale,t=(null==A?void 0:A.isLocaleDomain)&&(0,g.getDomainLocale)(H,e,null==A?void 0:A.locales,null==A?void 0:A.domainLocales);q.href=t||(0,y.addBasePath)((0,c.addLocale)(H,e,null==A?void 0:A.defaultLocale))}return R?i.default.cloneElement(n,q):(0,o.jsx)("a",{...I,...q,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1722:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return a}});let n=r(7294),o=r(9126),i="function"==typeof IntersectionObserver,u=new Map,l=[];function a(e){let{rootRef:t,rootMargin:r,disabled:a}=e,s=a||!i,[c,f]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);return(0,n.useEffect)(()=>{if(i){if(s||c)return;let e=d.current;if(e&&e.tagName)return function(e,t,r){let{id:n,observer:o,elements:i}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=l.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=u.get(n)))return t;let o=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:o},l.push(r),u.set(r,t),t}(r);return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),u.delete(n);let e=l.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&l.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!c){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[s,r,t,c,d.current]),[p,c,(0,n.useCallback)(()=>{f(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1908:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return l}}),r(1558);let n=r(7386),o=r(4706);function i(e){return void 0!==e.default}function u(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l(e,t){var r;let l,a,s,{src:c,sizes:f,unoptimized:d=!1,priority:p=!1,loading:g,className:y,quality:b,width:m,height:h,fill:v=!1,style:_,onLoad:j,onLoadingComplete:O,placeholder:S="empty",blurDataURL:P,fetchPriority:C,layout:w,objectFit:E,objectPosition:x,lazyBoundary:M,lazyRoot:R,...I}=e,{imgConf:A,showAltText:T,blurComplete:k,defaultLoader:N}=t,L=A||o.imageConfigDefault;if("allSizes"in L)l=L;else{let e=[...L.deviceSizes,...L.imageSizes].sort((e,t)=>e-t),t=L.deviceSizes.sort((e,t)=>e-t);l={...L,allSizes:e,deviceSizes:t}}let z=I.loader||N;delete I.loader,delete I.srcSet;let F="__next_img_default"in z;if(F){if("custom"===l.loader)throw Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=z;z=t=>{let{config:r,...n}=t;return e(n)}}if(w){"fill"===w&&(v=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[w];e&&(_={..._,...e});let t={responsive:"100vw",fill:"100vw"}[w];t&&!f&&(f=t)}let H="",D=u(m),U=u(h);if("object"==typeof(r=c)&&(i(r)||void 0!==r.src)){let e=i(c)?c.default:c;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(a=e.blurWidth,s=e.blurHeight,P=P||e.blurDataURL,H=e.src,!v){if(D||U){if(D&&!U){let t=D/e.width;U=Math.round(e.height*t)}else if(!D&&U){let t=U/e.height;D=Math.round(e.width*t)}}else D=e.width,U=e.height}}let G=!p&&("lazy"===g||void 0===g);(!(c="string"==typeof c?c:H)||c.startsWith("data:")||c.startsWith("blob:"))&&(d=!0,G=!1),l.unoptimized&&(d=!0),F&&c.endsWith(".svg")&&!l.dangerouslyAllowSVG&&(d=!0),p&&(C="high");let K=u(b),W=Object.assign(v?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:E,objectPosition:x}:{},T?{}:{color:"transparent"},_),B=k||"empty"===S?null:"blur"===S?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:D,heightInt:U,blurWidth:a,blurHeight:s,blurDataURL:P||"",objectFit:W.objectFit})+'")':'url("'+S+'")',V=B?{backgroundSize:W.objectFit||"cover",backgroundPosition:W.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:B}:{},q=function(e){let{config:t,src:r,unoptimized:n,width:o,quality:i,sizes:u,loader:l}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:a,kind:s}=function(e,t,r){let{deviceSizes:n,allSizes:o}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:o,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))],kind:"x"}}(t,o,u),c=a.length-1;return{sizes:u||"w"!==s?u:"100vw",srcSet:a.map((e,n)=>l({config:t,src:r,quality:i,width:e})+" "+("w"===s?e:n+1)+s).join(", "),src:l({config:t,src:r,quality:i,width:a[c]})}}({config:l,src:c,unoptimized:d,width:D,quality:K,sizes:f,loader:z});return{props:{...I,loading:G?"lazy":g,fetchPriority:C,width:D,height:U,decoding:"async",className:y,style:{...W,...V},sizes:q.sizes,srcSet:q.srcSet,src:q.src},meta:{unoptimized:d,priority:p,placeholder:S,fill:v}}}},7386:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:o,blurDataURL:i,objectFit:u}=e,l=n?40*n:t,a=o?40*o:r,s=l&&a?"viewBox='0 0 "+l+" "+a+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+s+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(s?"none":"contain"===u?"xMidYMid":"cover"===u?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+i+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},9267:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getImageProps:function(){return l},default:function(){return a}});let n=r(8754),o=r(1908),i=r(3686),u=n._(r(3293)),l=e=>{let{props:t}=(0,o.getImgProps)(e,{defaultLoader:u.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/dash-reviews-frontend/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},a=i.Image},3293:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:o}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},594:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ServerInsertedHTMLContext:function(){return o},useServerInsertedHTML:function(){return i}});let n=r(1757)._(r(7294)),o=n.default.createContext(null);function i(e){let t=(0,n.useContext)(o);t&&t(e)}},2471:function(e){e.exports={style:{fontFamily:"'__Inter_7e5540', '__Inter_Fallback_7e5540'",fontStyle:"normal"},className:"__className_7e5540"}},9019:function(e){e.exports={style:{fontFamily:"'__Lexend_Peta_516322', '__Lexend_Peta_Fallback_516322'",fontStyle:"normal"},className:"__className_516322"}},5675:function(e,t,r){e.exports=r(9267)},1664:function(e,t,r){e.exports=r(3480)},9332:function(e,t,r){e.exports=r(6612)},5054:function(e,t,r){"use strict";r.d(t,{w_:function(){return c}});var n=r(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(o),u=["attr","size","title"];function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach(function(t){var n,o;n=t,o=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(n))in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function c(e){return t=>n.createElement(f,l({attr:s({},e.attr)},t),function e(t){return t&&t.map((t,r)=>n.createElement(t.tag,s({key:r},t.attr),e(t.child)))}(e.child))}function f(e){var t=t=>{var r,{attr:o,size:i,title:a}=e,c=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,u),f=i||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,c,{className:r,style:s(s({color:e.color||t.color},t.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),a&&n.createElement("title",null,a),e.children)};return void 0!==i?n.createElement(i.Consumer,null,e=>t(e)):t(o)}}}]);