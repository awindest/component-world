import{S as rt,b as ot,s as st,j as it,y as B,p as lt,q as K,z as ue,e as V,A as de,t as F,o as G,B as ct,C as Ie,f as ft,k as ut,l as dt,D as be,E as C,h as ht,m as pt,w as mt,F as z,G as W,H as Pe,I as Y,J as X,K as le}from"./chunks/index-5ed1c05b.js";import{S as nt,I as q,g as ze,f as We,a as ve,b as ce,s as J,i as Ye,c as fe,P as Xe,d as _t,e as gt,h as yt}from"./chunks/singletons-0c2710c4.js";function wt(a,e){return a==="/"||e==="ignore"?a:e==="never"?a.endsWith("/")?a.slice(0,-1):a:e==="always"&&!a.endsWith("/")?a+"/":a}function bt(a){return a.split("%25").map(decodeURI).join("%25")}function vt(a){for(const e in a)a[e]=decodeURIComponent(a[e]);return a}const Et=["href","pathname","search","searchParams","toString","toJSON"];function kt(a,e){const n=new URL(a);for(const o of Et){let i=n[o];Object.defineProperty(n,o,{get(){return e(),i},enumerable:!0,configurable:!0})}return St(n),n}function St(a){Object.defineProperty(a,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const Rt="/__data.json";function Lt(a){return a.replace(/\/$/,"")+Rt}function It(a){let e=5381;if(typeof a=="string"){let n=a.length;for(;n;)e=e*33^a.charCodeAt(--n)}else if(ArrayBuffer.isView(a)){const n=new Uint8Array(a.buffer,a.byteOffset,a.byteLength);let o=n.length;for(;o;)e=e*33^n[--o]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const he=window.fetch;window.fetch=(a,e)=>((a instanceof Request?a.method:(e==null?void 0:e.method)||"GET")!=="GET"&&ee.delete(Ue(a)),he(a,e));const ee=new Map;function At(a,e){const n=Ue(a,e),o=document.querySelector(n);if(o!=null&&o.textContent){const{body:i,...l}=JSON.parse(o.textContent),t=o.getAttribute("data-ttl");return t&&ee.set(n,{body:i,init:l,ttl:1e3*Number(t)}),Promise.resolve(new Response(i,l))}return he(a,e)}function $t(a,e,n){if(ee.size>0){const o=Ue(a,n),i=ee.get(o);if(i){if(performance.now()<i.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(i.body,i.init);ee.delete(o)}}return he(e,n)}function Ue(a,e){let o=`script[data-sveltekit-fetched][data-url=${JSON.stringify(a instanceof Request?a.url:a)}]`;return e!=null&&e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(o+=`[data-hash="${It(e.body)}"]`),o}const Ot=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Pt(a){const e=[];return{pattern:a==="/"?/^\/$/:new RegExp(`^${Nt(a).map(o=>{const i=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(o);if(i)return e.push({name:i[1],matcher:i[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const l=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(o);if(l)return e.push({name:l[1],matcher:l[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!o)return;const t=o.split(/\[(.+?)\](?!\])/);return"/"+t.map((g,d)=>{if(d%2){if(g.startsWith("x+"))return Ee(String.fromCharCode(parseInt(g.slice(2),16)));if(g.startsWith("u+"))return Ee(String.fromCharCode(...g.slice(2).split("-").map(P=>parseInt(P,16))));const _=Ot.exec(g);if(!_)throw new Error(`Invalid param: ${g}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,E,k,L,j]=_;return e.push({name:L,matcher:j,optional:!!E,rest:!!k,chained:k?d===1&&t[0]==="":!1}),k?"(.*?)":E?"([^/]*)?":"([^/]+?)"}return Ee(g)}).join("")}).join("")}/?$`),params:e}}function Ut(a){return!/^\([^)]+\)$/.test(a)}function Nt(a){return a.slice(1).split("/").filter(Ut)}function Tt(a,e,n){const o={},i=a.slice(1);let l="";for(let t=0;t<e.length;t+=1){const c=e[t];let g=i[t];if(c.chained&&c.rest&&l&&(g=g?l+"/"+g:l),l="",g===void 0)c.rest&&(o[c.name]="");else{if(c.matcher&&!n[c.matcher](g)){if(c.optional&&c.chained){let d=i.indexOf(void 0,t);if(d===-1){const _=e[t+1];if(_!=null&&_.rest&&_.chained)l=g;else return}for(;d>=t;)i[d]=i[d-1],d-=1;continue}return}o[c.name]=g}}if(!l)return o}function Ee(a){return a.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function jt(a,e,n,o){const i=new Set(e);return Object.entries(n).map(([c,[g,d,_]])=>{const{pattern:E,params:k}=Pt(c),L={id:c,exec:j=>{const P=E.exec(j);if(P)return Tt(P,k,o)},errors:[1,..._||[]].map(j=>a[j]),layouts:[0,...d||[]].map(t),leaf:l(g)};return L.errors.length=L.layouts.length=Math.max(L.errors.length,L.layouts.length),L});function l(c){const g=c<0;return g&&(c=~c),[g,a[c]]}function t(c){return c===void 0?c:[i.has(c),a[c]]}}function Dt(a){let e,n,o;var i=a[0][0];function l(t){return{props:{data:t[2],form:t[1]}}}return i&&(e=z(i,l(a))),{c(){e&&W(e.$$.fragment),n=B()},l(t){e&&Pe(e.$$.fragment,t),n=B()},m(t,c){e&&Y(e,t,c),K(t,n,c),o=!0},p(t,c){const g={};if(c&4&&(g.data=t[2]),c&2&&(g.form=t[1]),i!==(i=t[0][0])){if(e){ue();const d=e;V(d.$$.fragment,1,0,()=>{X(d,1)}),de()}i?(e=z(i,l(t)),W(e.$$.fragment),F(e.$$.fragment,1),Y(e,n.parentNode,n)):e=null}else i&&e.$set(g)},i(t){o||(e&&F(e.$$.fragment,t),o=!0)},o(t){e&&V(e.$$.fragment,t),o=!1},d(t){t&&G(n),e&&X(e,t)}}}function Ct(a){let e,n,o;var i=a[0][0];function l(t){return{props:{data:t[2],$$slots:{default:[qt]},$$scope:{ctx:t}}}}return i&&(e=z(i,l(a))),{c(){e&&W(e.$$.fragment),n=B()},l(t){e&&Pe(e.$$.fragment,t),n=B()},m(t,c){e&&Y(e,t,c),K(t,n,c),o=!0},p(t,c){const g={};if(c&4&&(g.data=t[2]),c&523&&(g.$$scope={dirty:c,ctx:t}),i!==(i=t[0][0])){if(e){ue();const d=e;V(d.$$.fragment,1,0,()=>{X(d,1)}),de()}i?(e=z(i,l(t)),W(e.$$.fragment),F(e.$$.fragment,1),Y(e,n.parentNode,n)):e=null}else i&&e.$set(g)},i(t){o||(e&&F(e.$$.fragment,t),o=!0)},o(t){e&&V(e.$$.fragment,t),o=!1},d(t){t&&G(n),e&&X(e,t)}}}function qt(a){let e,n,o;var i=a[0][1];function l(t){return{props:{data:t[3],form:t[1]}}}return i&&(e=z(i,l(a))),{c(){e&&W(e.$$.fragment),n=B()},l(t){e&&Pe(e.$$.fragment,t),n=B()},m(t,c){e&&Y(e,t,c),K(t,n,c),o=!0},p(t,c){const g={};if(c&8&&(g.data=t[3]),c&2&&(g.form=t[1]),i!==(i=t[0][1])){if(e){ue();const d=e;V(d.$$.fragment,1,0,()=>{X(d,1)}),de()}i?(e=z(i,l(t)),W(e.$$.fragment),F(e.$$.fragment,1),Y(e,n.parentNode,n)):e=null}else i&&e.$set(g)},i(t){o||(e&&F(e.$$.fragment,t),o=!0)},o(t){e&&V(e.$$.fragment,t),o=!1},d(t){t&&G(n),e&&X(e,t)}}}function Ze(a){let e,n=a[5]&&Qe(a);return{c(){e=ft("div"),n&&n.c(),this.h()},l(o){e=ut(o,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var i=dt(e);n&&n.l(i),i.forEach(G),this.h()},h(){be(e,"id","svelte-announcer"),be(e,"aria-live","assertive"),be(e,"aria-atomic","true"),C(e,"position","absolute"),C(e,"left","0"),C(e,"top","0"),C(e,"clip","rect(0 0 0 0)"),C(e,"clip-path","inset(50%)"),C(e,"overflow","hidden"),C(e,"white-space","nowrap"),C(e,"width","1px"),C(e,"height","1px")},m(o,i){K(o,e,i),n&&n.m(e,null)},p(o,i){o[5]?n?n.p(o,i):(n=Qe(o),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(o){o&&G(e),n&&n.d()}}}function Qe(a){let e;return{c(){e=ht(a[6])},l(n){e=pt(n,a[6])},m(n,o){K(n,e,o)},p(n,o){o&64&&mt(e,n[6])},d(n){n&&G(e)}}}function Bt(a){let e,n,o,i,l;const t=[Ct,Dt],c=[];function g(_,E){return _[0][1]?0:1}e=g(a),n=c[e]=t[e](a);let d=a[4]&&Ze(a);return{c(){n.c(),o=it(),d&&d.c(),i=B()},l(_){n.l(_),o=lt(_),d&&d.l(_),i=B()},m(_,E){c[e].m(_,E),K(_,o,E),d&&d.m(_,E),K(_,i,E),l=!0},p(_,[E]){let k=e;e=g(_),e===k?c[e].p(_,E):(ue(),V(c[k],1,1,()=>{c[k]=null}),de(),n=c[e],n?n.p(_,E):(n=c[e]=t[e](_),n.c()),F(n,1),n.m(o.parentNode,o)),_[4]?d?d.p(_,E):(d=Ze(_),d.c(),d.m(i.parentNode,i)):d&&(d.d(1),d=null)},i(_){l||(F(n),l=!0)},o(_){V(n),l=!1},d(_){c[e].d(_),_&&G(o),d&&d.d(_),_&&G(i)}}}function Vt(a,e,n){let{stores:o}=e,{page:i}=e,{components:l}=e,{form:t}=e,{data_0:c=null}=e,{data_1:g=null}=e;ct(o.page.notify);let d=!1,_=!1,E=null;return Ie(()=>{const k=o.page.subscribe(()=>{d&&(n(5,_=!0),n(6,E=document.title||"untitled page"))});return n(4,d=!0),k}),a.$$set=k=>{"stores"in k&&n(7,o=k.stores),"page"in k&&n(8,i=k.page),"components"in k&&n(0,l=k.components),"form"in k&&n(1,t=k.form),"data_0"in k&&n(2,c=k.data_0),"data_1"in k&&n(3,g=k.data_1)},a.$$.update=()=>{a.$$.dirty&384&&o.page.set(i)},[l,t,c,g,d,_,E,o,i]}class Ft extends rt{constructor(e){super(),ot(this,e,Vt,Bt,st,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Gt="modulepreload",Ht=function(a,e){return new URL(a,e).href},xe={},ke=function(e,n,o){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(l=>{if(l=Ht(l,o),l in xe)return;xe[l]=!0;const t=l.endsWith(".css"),c=t?'[rel="stylesheet"]':"";if(!!o)for(let _=i.length-1;_>=0;_--){const E=i[_];if(E.href===l&&(!t||E.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${c}`))return;const d=document.createElement("link");if(d.rel=t?"stylesheet":Gt,t||(d.as="script",d.crossOrigin=""),d.href=l,document.head.appendChild(d),t)return new Promise((_,E)=>{d.addEventListener("load",_),d.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${l}`)))})})).then(()=>e())},Jt={},pe=[()=>ke(()=>import("./chunks/0-a553754a.js"),["./chunks/0-a553754a.js","./chunks/_layout-da46b06b.js","./components/layout.svelte-da1b9f4b.js","./chunks/index-5ed1c05b.js"],import.meta.url),()=>ke(()=>import("./chunks/1-c8d8401b.js"),["./chunks/1-c8d8401b.js","./components/error.svelte-ece0c596.js","./chunks/index-5ed1c05b.js","./chunks/singletons-0c2710c4.js","./chunks/index-231167f4.js"],import.meta.url),()=>ke(()=>import("./chunks/2-2d58cbd6.js"),["./chunks/2-2d58cbd6.js","./components/pages/_page.svelte-8826be5d.js","./chunks/index-5ed1c05b.js","./chunks/index-231167f4.js","./assets/_page-359610ff.css"],import.meta.url)],Kt=[],Mt={"/":[2]},zt={handleError:({error:a})=>{console.error(a)}};class Ae{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class et{constructor(e,n){this.status=e,this.location=n}}async function Wt(a){var e;for(const n in a)if(typeof((e=a[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(a).map(async([o,i])=>[o,await i])));return a}const Yt=-1,Xt=-2,Zt=-3,Qt=-4,xt=-5,en=-6;function tn(a,e){if(typeof a=="number")return i(a,!0);if(!Array.isArray(a)||a.length===0)throw new Error("Invalid input");const n=a,o=Array(n.length);function i(l,t=!1){if(l===Yt)return;if(l===Zt)return NaN;if(l===Qt)return 1/0;if(l===xt)return-1/0;if(l===en)return-0;if(t)throw new Error("Invalid input");if(l in o)return o[l];const c=n[l];if(!c||typeof c!="object")o[l]=c;else if(Array.isArray(c))if(typeof c[0]=="string"){const g=c[0],d=e==null?void 0:e[g];if(d)return o[l]=d(i(c[1]));switch(g){case"Date":o[l]=new Date(c[1]);break;case"Set":const _=new Set;o[l]=_;for(let L=1;L<c.length;L+=1)_.add(i(c[L]));break;case"Map":const E=new Map;o[l]=E;for(let L=1;L<c.length;L+=2)E.set(i(c[L]),i(c[L+1]));break;case"RegExp":o[l]=new RegExp(c[1],c[2]);break;case"Object":o[l]=Object(c[1]);break;case"BigInt":o[l]=BigInt(c[1]);break;case"null":const k=Object.create(null);o[l]=k;for(let L=1;L<c.length;L+=2)k[c[L]]=i(c[L+1]);break;default:throw new Error(`Unknown type ${g}`)}}else{const g=new Array(c.length);o[l]=g;for(let d=0;d<c.length;d+=1){const _=c[d];_!==Xt&&(g[d]=i(_))}}else{const g={};o[l]=g;for(const d in c){const _=c[d];g[d]=i(_)}}return o[l]}return i(0)}function Ne(a){const e=new Set(a);function n(o,i){if(o){for(const l in o)if(l[0]!=="_"&&!e.has(l)){const t=a.join(", ");throw new Error(`Invalid export '${l}'${i?` in ${i}`:""} (valid exports are ${t}, or anything with a '_' prefix)`)}}}return n}Ne(["load","prerender","csr","ssr","trailingSlash"]);Ne(["load","prerender","csr","ssr","actions","trailingSlash"]);Ne(["GET","POST","PATCH","PUT","DELETE","prerender","trailingSlash"]);const Se=jt(pe,Kt,Mt,Jt),$e=pe[0],Oe=pe[1];$e();Oe();let te={};try{te=JSON.parse(sessionStorage[nt])}catch{}function Re(a){te[a]=fe()}function nn({target:a,base:e}){var Je;const n=document.documentElement,o=[];let i=null;const l={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},c=!1,g=!1,d=!0,_=!1,E=!1,k=!1,L=!1,j,P=(Je=history.state)==null?void 0:Je[q];P||(P=Date.now(),history.replaceState({...history.state,[q]:P},"",location.href));const me=te[P];me&&(history.scrollRestoration="manual",scrollTo(me.x,me.y));let H,Te,ne;async function je(){ne=ne||Promise.resolve(),await ne,ne=null;const r=new URL(location.href),s=oe(r,!0);i=null,await Ce(s,r,[])}async function _e(r,{noScroll:s=!1,replaceState:u=!1,keepFocus:f=!1,state:h={},invalidateAll:p=!1},m,b){return typeof r=="string"&&(r=new URL(r,ze(document))),se({url:r,scroll:s?fe():null,keepfocus:f,redirect_chain:m,details:{state:h,replaceState:u},nav_token:b,accepted:()=>{p&&(L=!0)},blocked:()=>{},type:"goto"})}async function De(r){const s=oe(r,!1);if(!s)throw new Error(`Attempted to preload a URL that does not belong to this app: ${r}`);return i={id:s.id,promise:Ve(s).then(u=>(u.type==="loaded"&&u.state.error&&(i=null),u))},i.promise}async function ae(...r){const u=Se.filter(f=>r.some(h=>f.exec(h))).map(f=>Promise.all([...f.layouts,f.leaf].map(h=>h==null?void 0:h[1]())));await Promise.all(u)}async function Ce(r,s,u,f,h={},p){var b,w;Te=h;let m=r&&await Ve(r);if(m||(m=await He(s,{id:null},await x(new Error(`Not found: ${s.pathname}`),{url:s,params:{},route:{id:null}}),404)),s=(r==null?void 0:r.url)||s,Te!==h)return!1;if(m.type==="redirect")if(u.length>10||u.includes(s.pathname))m=await re({status:500,error:await x(new Error("Redirect loop"),{url:s,params:{},route:{id:null}}),url:s,route:{id:null}});else return _e(new URL(m.location,s).href,{},[...u,s.pathname],h),!1;else((w=(b=m.props)==null?void 0:b.page)==null?void 0:w.status)>=400&&await J.updated.check()&&await ie(s);if(o.length=0,L=!1,_=!0,f&&f.details){const{details:y}=f,R=y.replaceState?0:1;y.state[q]=P+=R,history[y.replaceState?"replaceState":"pushState"](y.state,"",s)}if(i=null,g?(t=m.state,m.props.page&&(m.props.page.url=s),j.$set(m.props)):qe(m),f){const{scroll:y,keepfocus:R}=f;if(R||Le(),await le(),d){const I=s.hash&&document.getElementById(s.hash.slice(1));y?scrollTo(y.x,y.y):I?I.scrollIntoView():scrollTo(0,0)}}else await le();d=!0,m.props.page&&(H=m.props.page),p&&p(),_=!1}function qe(r){var f;t=r.state;const s=document.querySelector("style[data-sveltekit]");s&&s.remove(),H=r.props.page,j=new Ft({target:a,props:{...r.props,stores:J},hydrate:!0});const u={from:null,to:{params:t.params,route:{id:((f=t.route)==null?void 0:f.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};l.after_navigate.forEach(h=>h(u)),g=!0}async function Z({url:r,params:s,branch:u,status:f,error:h,route:p,form:m}){const b=u.filter(Boolean);let w="never";for(const A of u)(A==null?void 0:A.slash)!==void 0&&(w=A.slash);r.pathname=wt(r.pathname,w),r.search=r.search;const y={type:"loaded",state:{url:r,params:s,branch:u,error:h,route:p},props:{components:b.map(A=>A.node.component)}};m!==void 0&&(y.props.form=m);let R={},I=!H;for(let A=0;A<b.length;A+=1){const v=b[A];R={...R,...v.data},(I||!t.branch.some(N=>N===v))&&(y.props[`data_${A}`]=R,I=I||Object.keys(v.data??{}).length>0)}return I||(I=Object.keys(H.data).length!==Object.keys(R).length),(!t.url||r.href!==t.url.href||t.error!==h||m!==void 0||I)&&(y.props.page={error:h,params:s,route:p,status:f,url:new URL(r),form:m??null,data:I?R:H.data}),y}async function ge({loader:r,parent:s,url:u,params:f,route:h,server_data_node:p}){var y,R,I;let m=null;const b={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},w=await r();if((y=w.universal)!=null&&y.load){let D=function(...v){for(const N of v){const{href:T}=new URL(N,u);b.dependencies.add(T)}};const A={route:{get id(){return b.route=!0,h.id}},params:new Proxy(f,{get:(v,N)=>(b.params.add(N),v[N])}),data:(p==null?void 0:p.data)??null,url:kt(u,()=>{b.url=!0}),async fetch(v,N){let T;v instanceof Request?(T=v.url,N={body:v.method==="GET"||v.method==="HEAD"?void 0:await v.blob(),cache:v.cache,credentials:v.credentials,headers:v.headers,integrity:v.integrity,keepalive:v.keepalive,method:v.method,mode:v.mode,redirect:v.redirect,referrer:v.referrer,referrerPolicy:v.referrerPolicy,signal:v.signal,...N}):T=v;const S=new URL(T,u).href;return D(S),g?$t(T,S,N):At(T,N)},setHeaders:()=>{},depends:D,parent(){return b.parent=!0,s()}};m=await w.universal.load.call(null,A)??null,m=m?await Wt(m):null}return{node:w,loader:r,server:p,universal:(R=w.universal)!=null&&R.load?{type:"data",data:m,uses:b}:null,data:m??(p==null?void 0:p.data)??null,slash:((I=w.universal)==null?void 0:I.trailingSlash)??(p==null?void 0:p.slash)}}function Be(r,s,u,f,h){if(L)return!0;if(!f)return!1;if(f.parent&&r||f.route&&s||f.url&&u)return!0;for(const p of f.params)if(h[p]!==t.params[p])return!0;for(const p of f.dependencies)if(o.some(m=>m(new URL(p))))return!0;return!1}function ye(r,s){return(r==null?void 0:r.type)==="data"?{type:"data",data:r.data,uses:{dependencies:new Set(r.uses.dependencies??[]),params:new Set(r.uses.params??[]),parent:!!r.uses.parent,route:!!r.uses.route,url:!!r.uses.url},slash:r.slash}:(r==null?void 0:r.type)==="skip"?s??null:null}async function Ve({id:r,invalidating:s,url:u,params:f,route:h}){if((i==null?void 0:i.id)===r)return i.promise;const{errors:p,layouts:m,leaf:b}=h,w=[...m,b];p.forEach(S=>S==null?void 0:S().catch(()=>{})),w.forEach(S=>S==null?void 0:S[1]().catch(()=>{}));let y=null;const R=t.url?r!==t.url.pathname+t.url.search:!1,I=t.route?r!==t.route.id:!1,D=w.reduce((S,O,U)=>{var Q;const $=t.branch[U],M=!!(O!=null&&O[0])&&(($==null?void 0:$.loader)!==O[1]||Be(S.some(Boolean),I,R,(Q=$.server)==null?void 0:Q.uses,f));return S.push(M),S},[]);if(D.some(Boolean)){try{y=await tt(u,D)}catch(S){return re({status:500,error:await x(S,{url:u,params:f,route:{id:h.id}}),url:u,route:h})}if(y.type==="redirect")return y}const A=y==null?void 0:y.nodes;let v=!1;const N=w.map(async(S,O)=>{var Q;if(!S)return;const U=t.branch[O],$=A==null?void 0:A[O];if((!$||$.type==="skip")&&S[1]===(U==null?void 0:U.loader)&&!Be(v,I,R,(Q=U.universal)==null?void 0:Q.uses,f))return U;if(v=!0,($==null?void 0:$.type)==="error")throw $;return ge({loader:S[1],url:u,params:f,route:h,parent:async()=>{var Me;const Ke={};for(let we=0;we<O;we+=1)Object.assign(Ke,(Me=await N[we])==null?void 0:Me.data);return Ke},server_data_node:ye($===void 0&&S[0]?{type:"skip"}:$??null,U==null?void 0:U.server)})});for(const S of N)S.catch(()=>{});const T=[];for(let S=0;S<w.length;S+=1)if(w[S])try{T.push(await N[S])}catch(O){if(O instanceof et)return{type:"redirect",location:O.location};let U=500,$;A!=null&&A.includes(O)?(U=O.status??U,$=O.error):O instanceof Ae?(U=O.status,$=O.body):$=await x(O,{params:f,url:u,route:{id:h.id}});const M=await Fe(S,T,p);return M?await Z({url:u,params:f,branch:T.slice(0,M.idx).concat(M.node),status:U,error:$,route:h}):await He(u,{id:h.id},$,U)}else T.push(void 0);return await Z({url:u,params:f,branch:T,status:200,error:null,route:h,form:s?void 0:null})}async function Fe(r,s,u){for(;r--;)if(u[r]){let f=r;for(;!s[f];)f-=1;try{return{idx:f+1,node:{node:await u[r](),loader:u[r],data:{},server:null,universal:null}}}catch{continue}}}async function re({status:r,error:s,url:u,route:f}){const h={},p=await $e();let m=null;if(p.server)try{const y=await tt(u,[!0]);if(y.type!=="data"||y.nodes[0]&&y.nodes[0].type!=="data")throw 0;m=y.nodes[0]??null}catch{(u.origin!==location.origin||u.pathname!==location.pathname||c)&&await ie(u)}const b=await ge({loader:$e,url:u,params:h,route:f,parent:()=>Promise.resolve({}),server_data_node:ye(m)}),w={node:await Oe(),loader:Oe,universal:null,server:null,data:null};return await Z({url:u,params:h,branch:[b,w],status:r,error:s,route:null})}function oe(r,s){if(Ye(r,e))return;const u=bt(r.pathname.slice(e.length)||"/");for(const f of Se){const h=f.exec(u);if(h)return{id:r.pathname+r.search,invalidating:s,route:f,params:vt(h),url:r}}}function Ge({url:r,type:s,intent:u,delta:f}){var b,w;let h=!1;const p={from:{params:t.params,route:{id:((b=t.route)==null?void 0:b.id)??null},url:t.url},to:{params:(u==null?void 0:u.params)??null,route:{id:((w=u==null?void 0:u.route)==null?void 0:w.id)??null},url:r},willUnload:!u,type:s};f!==void 0&&(p.delta=f);const m={...p,cancel:()=>{h=!0}};return E||l.before_navigate.forEach(y=>y(m)),h?null:p}async function se({url:r,scroll:s,keepfocus:u,redirect_chain:f,details:h,type:p,delta:m,nav_token:b,accepted:w,blocked:y}){const R=oe(r,!1),I=Ge({url:r,type:p,delta:m,intent:R});if(!I){y();return}Re(P),w(),E=!0,g&&J.navigating.set(I),await Ce(R,r,f,{scroll:s,keepfocus:u,details:h},b,()=>{E=!1,l.after_navigate.forEach(D=>D(I)),J.navigating.set(null)})}async function He(r,s,u,f){return r.origin===location.origin&&r.pathname===location.pathname&&!c?await re({status:f,error:u,url:r,route:s}):await ie(r)}function ie(r){return location.href=r.href,new Promise(()=>{})}function at(){let r;n.addEventListener("mousemove",p=>{const m=p.target;clearTimeout(r),r=setTimeout(()=>{f(m,2)},20)});function s(p){f(p.composedPath()[0],1)}n.addEventListener("mousedown",s),n.addEventListener("touchstart",s,{passive:!0});const u=new IntersectionObserver(p=>{for(const m of p)m.isIntersecting&&(ae(new URL(m.target.href).pathname),u.unobserve(m.target))},{threshold:0});function f(p,m){const b=We(p,n);if(!b)return;const{url:w,external:y}=ve(b,e);if(y)return;const R=ce(b);R.reload||(m<=R.preload_data?De(w):m<=R.preload_code&&ae(w.pathname))}function h(){u.disconnect();for(const p of n.querySelectorAll("a")){const{url:m,external:b}=ve(p,e);if(b)continue;const w=ce(p);w.reload||(w.preload_code===Xe.viewport&&u.observe(p),w.preload_code===Xe.eager&&ae(m.pathname))}}l.after_navigate.push(h),h()}return{after_navigate:r=>{Ie(()=>(l.after_navigate.push(r),()=>{const s=l.after_navigate.indexOf(r);l.after_navigate.splice(s,1)}))},before_navigate:r=>{Ie(()=>(l.before_navigate.push(r),()=>{const s=l.before_navigate.indexOf(r);l.before_navigate.splice(s,1)}))},disable_scroll_handling:()=>{(_||!g)&&(d=!1)},goto:(r,s={})=>_e(r,s,[]),invalidate:r=>{if(typeof r=="function")o.push(r);else{const{href:s}=new URL(r,location.href);o.push(u=>u.href===s)}return je()},invalidateAll:()=>(L=!0,je()),preload_data:async r=>{const s=new URL(r,ze(document));await De(s)},preload_code:ae,apply_action:async r=>{if(r.type==="error"){const s=new URL(location.href),{branch:u,route:f}=t;if(!f)return;const h=await Fe(t.branch.length,u,f.errors);if(h){const p=await Z({url:s,params:t.params,branch:u.slice(0,h.idx).concat(h.node),status:r.status??500,error:r.error,route:f});t=p.state,j.$set(p.props),le().then(Le)}}else if(r.type==="redirect")_e(r.location,{invalidateAll:!0},[]);else{const s={form:r.data,page:{...H,form:r.data,status:r.status}};j.$set(s),r.type==="success"&&le().then(Le)}},_start_router:()=>{var r;history.scrollRestoration="manual",addEventListener("beforeunload",s=>{var f;let u=!1;if(!E){const h={from:{params:t.params,route:{id:((f=t.route)==null?void 0:f.id)??null},url:t.url},to:null,willUnload:!0,type:"leave",cancel:()=>u=!0};l.before_navigate.forEach(p=>p(h))}u?(s.preventDefault(),s.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Re(P);try{sessionStorage[nt]=JSON.stringify(te)}catch{}}}),(r=navigator.connection)!=null&&r.saveData||at(),n.addEventListener("click",s=>{if(s.button||s.which!==1||s.metaKey||s.ctrlKey||s.shiftKey||s.altKey||s.defaultPrevented)return;const u=We(s.composedPath()[0],n);if(!u)return;const{url:f,external:h,has:p}=ve(u,e),m=ce(u);if(!f||!(u instanceof SVGAElement)&&f.protocol!==location.protocol&&!(f.protocol==="https:"||f.protocol==="http:")||p.download)return;if(h||m.reload){Ge({url:f,type:"link"})||s.preventDefault(),E=!0;return}const[w,y]=f.href.split("#");if(y!==void 0&&w===location.href.split("#")[0]){k=!0,Re(P),t.url=f,J.page.set({...H,url:f}),J.page.notify();return}se({url:f,scroll:m.noscroll?fe():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:f.href===location.href},accepted:()=>s.preventDefault(),blocked:()=>s.preventDefault(),type:"link"})}),n.addEventListener("submit",s=>{var w;if(s.defaultPrevented)return;const u=HTMLFormElement.prototype.cloneNode.call(s.target),f=s.submitter;if(((f==null?void 0:f.formMethod)||u.method)!=="get")return;const p=new URL(((w=s.submitter)==null?void 0:w.hasAttribute("formaction"))&&(f==null?void 0:f.formAction)||u.action);if(Ye(p,e))return;const{noscroll:m,reload:b}=ce(s.target);b||(s.preventDefault(),s.stopPropagation(),p.search=new URLSearchParams(new FormData(s.target)).toString(),se({url:p,scroll:m?fe():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"}))}),addEventListener("popstate",s=>{var u;if((u=s.state)!=null&&u[q]){if(s.state[q]===P)return;const f=s.state[q]-P;se({url:new URL(location.href),scroll:te[s.state[q]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{P=s.state[q]},blocked:()=>{history.go(-f)},type:"popstate",delta:f})}}),addEventListener("hashchange",()=>{k&&(k=!1,history.replaceState({...history.state,[q]:++P},"",location.href))});for(const s of document.querySelectorAll("link"))s.rel==="icon"&&(s.href=s.href);addEventListener("pageshow",s=>{s.persisted&&J.navigating.set(null)})},_hydrate:async({status:r=200,error:s,node_ids:u,params:f,route:h,data:p,form:m})=>{c=!0;const b=new URL(location.href);({params:f={},route:h={id:null}}=oe(b,!1)||{});let w;try{const y=u.map(async(R,I)=>{const D=p[I];return ge({loader:pe[R],url:b,params:f,route:h,parent:async()=>{const A={};for(let v=0;v<I;v+=1)Object.assign(A,(await y[v]).data);return A},server_data_node:ye(D)})});w=await Z({url:b,params:f,branch:await Promise.all(y),status:r,error:s,form:m,route:Se.find(({id:R})=>R===h.id)??null})}catch(y){if(y instanceof et){await ie(new URL(y.location,location.href));return}w=await re({status:y instanceof Ae?y.status:500,error:await x(y,{url:b,params:f,route:h}),url:b,route:h})}qe(w)}}}async function tt(a,e){var l;const n=new URL(a);n.pathname=Lt(a.pathname),n.searchParams.append("x-sveltekit-invalidated",e.map(t=>t?"1":"").join("_"));const o=await he(n.href),i=await o.json();if(!o.ok)throw new Error(i);return(l=i.nodes)==null||l.forEach(t=>{(t==null?void 0:t.type)==="data"&&(t.data=tn(t.data),t.uses={dependencies:new Set(t.uses.dependencies??[]),params:new Set(t.uses.params??[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),i}function x(a,e){return a instanceof Ae?a.body:zt.handleError({error:a,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}function Le(){const a=document.querySelector("[autofocus]");if(a)a.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{var o;(o=getSelection())==null||o.removeAllRanges()}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex")}}async function on({env:a,hydrate:e,paths:n,target:o,version:i}){_t(n),yt(i);const l=nn({target:o,base:n.base});gt({client:l}),e?await l._hydrate(e):l.goto(location.href,{replaceState:!0}),l._start_router()}export{on as start};
