const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/SwupA11yPlugin.D84kWg1p.js","_astro/Swup.T76dPaas.js","_astro/index.modern.CkIAsQri.js","_astro/SwupPreloadPlugin.CVIvv7Xf.js","_astro/SwupProgressPlugin.CxS15acw.js","_astro/SwupScrollPlugin.CPHDirUY.js","_astro/SwupBodyClassPlugin.CW89z22S.js","_astro/SwupHeadPlugin.DgE0cn6v.js","_astro/SwupScriptsPlugin.o5PkFIdr.js","_astro/SwupFadeTheme.CYyxYGy0.js"])))=>i.map(i=>d[i]);
import{_ as o}from"./preload-helper.CLcXU_4U.js";function i(n){return JSON.parse(n,c)}function c(n,t){if(Array.isArray(t)&&t.length===2&&typeof t[1]=="string"){const r=t[0];if(t=t[1],r===":regex:"){const s=t.match(/\/(.*?)\/([a-z]*)?$/i)||[];return new RegExp(s[1],s[2]||"")}if(r===":function:")return new Function(`return (${t}).apply(this, arguments);`)}return t}function a(n,{timeoutFallback:t=1e3}={}){"requestIdleCallback"in window?window.requestIdleCallback(()=>n()):setTimeout(()=>n(),t)}function m(n){document.readyState==="complete"?setTimeout(()=>n(),0):window.addEventListener("load",()=>n())}function E(n,{delayAfterLoad:t=0}={}){m(()=>{t>0?setTimeout(()=>a(n),t):a(n)})}async function h(){const[n,t,r,s,d,p,w,l,f]=await Promise.all([o(()=>import("./Swup.T76dPaas.js").then(e=>e.S),[]).then(e=>e.default),o(()=>import("./SwupA11yPlugin.D84kWg1p.js"),__vite__mapDeps([0,1,2])).then(e=>e.default),o(()=>import("./SwupPreloadPlugin.CVIvv7Xf.js"),__vite__mapDeps([3,2,1])).then(e=>e.default),o(()=>import("./SwupProgressPlugin.CxS15acw.js"),__vite__mapDeps([4,2])).then(e=>e.default),o(()=>import("./SwupScrollPlugin.CPHDirUY.js"),__vite__mapDeps([5,2,1])).then(e=>e.default),o(()=>import("./SwupBodyClassPlugin.CW89z22S.js"),__vite__mapDeps([6,2])).then(e=>e.default),o(()=>import("./SwupHeadPlugin.DgE0cn6v.js"),__vite__mapDeps([7,2])).then(e=>e.default),o(()=>import("./SwupScriptsPlugin.o5PkFIdr.js"),__vite__mapDeps([8,2])).then(e=>e.default),o(()=>import("./SwupFadeTheme.CYyxYGy0.js"),__vite__mapDeps([9,2])).then(e=>e.default)]),u=new n({animationSelector:'[class*="transition-"]',containers:["#swup"],cache:!0,plugins:[new t(i("{}")),new r(i('{"preloadHoveredLinks":true,"preloadVisibleLinks":false}')),new s(i("{}")),new d(i("{}")),new p(i("{}")),new w(i('{"awaitAssets":true}')),new l(i("{}")),new f(i('{"mainElement":"#swup"}'))]}),_=e=>document.dispatchEvent(new Event(e));u.hooks.before("content:replace",()=>_("astro:before-swap")),u.hooks.on("content:replace",()=>_("astro:after-swap")),u.hooks.on("page:view",()=>_("astro:page-load"))}E(h);