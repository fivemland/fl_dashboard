(function(){"use strict";var e={6160:function(e,t,n){var r=n(9242),o=n(3396);const i={key:0,class:"main d-flex"},a={class:"right-side"},s=(0,o._)("i",{class:"fas fa-times"},null,-1),u=[s],c={class:"content"};function f(e,t,n,r,s,f){const l=(0,o.up)("LeftMenu"),d=(0,o.up)("router-view");return s.visible?((0,o.wg)(),(0,o.iD)("div",i,[(0,o.Wm)(l),(0,o._)("div",a,[(0,o._)("a",{onClick:t[0]||(t[0]=(...e)=>f.close&&f.close(...e)),href:"#",class:"text-danger float-end me-1"},u),(0,o._)("div",c,[(0,o.Wm)(d)])])])):(0,o.kq)("",!0)}var l=n(7139),d=n(6949);const m=e=>((0,o.dD)("data-v-2d70f061"),e=e(),(0,o.Cn)(),e),p={class:"main text-center px-2"},h=m((()=>(0,o._)("div",{class:"logo"},[(0,o._)("img",{src:d,class:"mt-3"})],-1))),v=["innerHTML"];function g(e,t,n,r,i,a){const s=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",p,[h,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.routes,(e=>((0,o.wg)(),(0,o.iD)("div",{key:e},[(0,o.Wm)(s,{to:e.path},{default:(0,o.w5)((()=>[(0,o._)("div",{class:(0,l.C_)(["menu-link p-1 mt-2",{active:e.path===a.currentPath}]),innerHTML:e.name},null,10,v)])),_:2},1032,["to"])])))),128))])}var b={name:"LeftMenu",computed:{routes(){return this.$router.getRoutes()},currentPath(){return this.$route.path}}},y=n(89);const k=(0,y.Z)(b,[["render",g],["__scopeId","data-v-2d70f061"]]);var w=k,S={components:{LeftMenu:w},data(){return{visible:!1,settings:{}}},methods:{close(){fetch(`https://${GetParentResourceName()}/close`)}},mounted(){window.addEventListener("message",(({data:e})=>{if(void 0!==e.visible&&(this.visible=e.visible),void 0!==e.loadSettings){this.settings={};for(const t of e.loadSettings){let e=localStorage.getItem("dashboard:"+t.name);e=null===e?t.defaultValue:"true"===e,this.settings[t.name]={label:t.label,value:e},fetch(`https://${GetParentResourceName()}/updateSetting`,{method:"POST",body:JSON.stringify({name:t.name,checked:e,storeLoad:!0})})}}if(void 0!==e.saveSettings)for(const t of e.saveSettings)localStorage.setItem("dashboard:"+t.name,t.state)})),document.addEventListener("keydown",(({key:e})=>{this.visible&&("Escape"!==e&&"Home"!==e||this.close())}))}};const _=(0,y.Z)(S,[["render",f]]);var O=_,C=n(678);const E=[{path:"/",name:'<i class="fas fa-user"></i> Áttekintés',component:()=>n.e(923).then(n.bind(n,8923))},{path:"/property",name:'<i class="fas fa-car"></i> Vagyon',component:()=>n.e(140).then(n.bind(n,9140))},{path:"/admins",name:'<i class="fas fa-users"></i> Adminisztrátorok',component:()=>n.e(193).then(n.bind(n,5193))},{path:"/premium",name:'<i class="fas fa-receipt"></i> Támogatás',component:()=>n.e(570).then(n.bind(n,6570))},{path:"/settings",name:'<i class="fas fa-cog"></i> Beállítások',component:()=>n.e(565).then(n.bind(n,7565))}],L=(0,C.p7)({history:(0,C.r5)(),routes:E});var T=L;(0,r.ri)(O).use(T).mount("#app")},6949:function(e,t,n){e.exports=n.p+"img/logo.0c72ff1f.png"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var a=1/0;for(f=0;f<e.length;f++){r=e[f][0],o=e[f][1],i=e[f][2];for(var s=!0,u=0;u<r.length;u++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(s=!1,i<a&&(a=i));if(s){e.splice(f--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var f=e.length;f>0&&e[f-1][2]>i;f--)e[f]=e[f-1];e[f]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{140:"1b254fb6",193:"64b85813",565:"647e9c46",570:"96ccdbf3",923:"477e0770"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{140:"89400ab8",193:"69bd8be4",565:"c66c85d3",570:"4568f5ad",923:"8254bf36"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="dashboard:";n.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var s,u;if(void 0!==i)for(var c=document.getElementsByTagName("script"),f=0;f<c.length;f++){var l=c[f];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==t+i){s=l;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+i),s.src=r),e[r]=[o];var d=function(t,n){s.onerror=s.onload=null,clearTimeout(m);var o=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){var e=function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)n();else{var a=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=a,u.request=s,o.parentNode.removeChild(o),r(u)}};return o.onerror=o.onload=i,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var a=n.miniCssF(r),s=n.p+a;if(t(a,s))return o();e(r,s,o,i)}))},o={143:0};n.f.miniCss=function(e,t){var n={140:1,193:1,565:1,570:1,923:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(t),s=new Error,u=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,o[1](s)}};n.l(a,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,a=r[0],s=r[1],u=r[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(u)var f=u(n)}for(t&&t(r);c<a.length;c++)i=a[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(f)},r=self["webpackChunkdashboard"]=self["webpackChunkdashboard"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(6160)}));r=n.O(r)})();
//# sourceMappingURL=app.10bd9a4c.js.map