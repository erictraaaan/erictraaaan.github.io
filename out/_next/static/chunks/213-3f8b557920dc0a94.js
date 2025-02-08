"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[213],{7240:(e,t,r)=>{r.r(t),r.d(t,{default:()=>s});var o=r(6847),n=r(6202),a=r(1346),i=r(4374),l=r(1047);function s(e){let{options:t,CacheProvider:r=a.C,children:s}=e,[c]=o.useState(()=>{var e;let r=(0,n.A)({...t,key:null!==(e=null==t?void 0:t.key)&&void 0!==e?e:"mui"});r.compat=!0;let o=r.insert,a=[];return r.insert=function(){for(var e=arguments.length,n=Array(e),i=0;i<e;i++)n[i]=arguments[i];(null==t?void 0:t.enableCssLayer)&&(n[1].styles="@layer mui {".concat(n[1].styles,"}"));let[l,s]=n;return void 0===r.inserted[s.name]&&a.push({name:s.name,isGlobal:!l}),o(...n)},{cache:r,flush:()=>{let e=a;return a=[],e}}});return(0,i.useServerInsertedHTML)(()=>{let e=c.flush();if(0===e.length)return null;let r="",n=c.cache.key,a=[];return e.forEach(e=>{let{name:t,isGlobal:o}=e,i=c.cache.inserted[t];"string"==typeof i&&(o?a.push({name:t,style:i}):(r+=i,n+=" ".concat(t)))}),(0,l.jsxs)(o.Fragment,{children:[a.map(e=>{let{name:r,style:o}=e;return(0,l.jsx)("style",{nonce:null==t?void 0:t.nonce,"data-emotion":"".concat(c.cache.key,"-global ").concat(r),dangerouslySetInnerHTML:{__html:o}},r)}),r&&(0,l.jsx)("style",{nonce:null==t?void 0:t.nonce,"data-emotion":n,dangerouslySetInnerHTML:{__html:r}})]})}),(0,l.jsx)(r,{value:c.cache,children:s})}},7381:(e,t,r)=>{r.d(t,{default:()=>s}),r(6847);var o=r(6024),n=r(9877),a=r(1047);function i(e){let{theme:t,...r}=e,i=n.A in t?t[n.A]:void 0;return(0,a.jsx)(o.default,{...r,themeId:i?n.A:void 0,theme:i||t})}var l=r(441);function s(e){let{theme:t,...r}=e;return"function"!=typeof t&&"colorSchemes"in(n.A in t?t[n.A]:t)?(0,a.jsx)(l.CssVarsProvider,{theme:t,...r}):(0,a.jsx)(i,{theme:t,...r})}},441:(e,t,r)=>{r.r(t),r.d(t,{CssVarsProvider:()=>y,Experimental_CssVarsProvider:()=>m,getInitColorSchemeScript:()=>h,useColorScheme:()=>d}),r(6847);var o=r(7807),n=r(7969),a=r(5015),i=r(7159),l=r(9877),s=r(1047);let c={colorSchemeStorageKey:"mui-color-scheme",defaultLightColorScheme:"light",defaultDarkColorScheme:"dark",modeStorageKey:"mui-mode"},{CssVarsProvider:u,useColorScheme:d,getInitColorSchemeScript:f}=(0,n.default)({themeId:l.A,theme:()=>(0,a.A)({cssVariables:!0}),colorSchemeStorageKey:c.colorSchemeStorageKey,modeStorageKey:c.modeStorageKey,defaultColorScheme:{light:c.defaultLightColorScheme,dark:c.defaultDarkColorScheme},resolveTheme:e=>{let t={...e,typography:(0,i.A)(e.palette,e.typography)};return t.unstable_sx=function(e){return(0,o.A)({sx:e,theme:this})},t}});function m(e){return(0,s.jsx)(u,{...e})}let p=!1,h=e=>(p||(console.warn("MUI: The getInitColorSchemeScript function has been deprecated.\n\nYou should use `import InitColorSchemeScript from '@mui/material/InitColorSchemeScript'`\nand replace the function call with `<InitColorSchemeScript />` instead."),p=!0),f(e)),y=u},3969:(e,t,r)=>{r.d(t,{default:()=>i}),r(6847);var o=r(2805),n=r(1480),a=r(9877);function i(){let e=(0,o.default)(n.A);return e[a.A]||e}},4464:(e,t,r)=>{r.d(t,{default:()=>i});var o=r(4463),n=r(1480),a=r(9877);function i(e){let{props:t,name:r}=e;return(0,o.default)({props:t,name:r,defaultTheme:n.A,themeId:a.A})}},7990:(e,t,r)=>{r.d(t,{A:()=>o});let o=r(6847).createContext(null)},6957:(e,t,r)=>{r.d(t,{A:()=>a});var o=r(6847),n=r(7990);function a(){return o.useContext(n.A)}},8566:(e,t,r)=>{r.d(t,{default:()=>d});var o=r(6847),n=r(1346),a=r(2605),i=r(9028),l=r(3025);r(6202),r(549);var s=function(e,t){var r=arguments;if(null==t||!n.h.call(t,"css"))return o.createElement.apply(void 0,r);var a=r.length,i=Array(a);i[0]=n.E,i[1]=(0,n.c)(e,t);for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)};!function(e){var t;t||(t=e.JSX||(e.JSX={}))}(s||(s={}));var c=(0,n.w)(function(e,t){var r=e.styles,s=(0,l.J)([r],void 0,o.useContext(n.T)),c=o.useRef();return(0,i.i)(function(){var e=t.key+"-global",r=new t.sheet.constructor({key:e,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),o=!1,n=document.querySelector('style[data-emotion="'+e+" "+s.name+'"]');return t.sheet.tags.length&&(r.before=t.sheet.tags[0]),null!==n&&(o=!0,n.setAttribute("data-emotion",e),r.hydrate([n])),c.current=[r,o],function(){r.flush()}},[t]),(0,i.i)(function(){var e=c.current,r=e[0];if(e[1]){e[1]=!1;return}if(void 0!==s.next&&(0,a.sk)(t,s.next,!0),r.tags.length){var o=r.tags[r.tags.length-1].nextElementSibling;r.before=o,r.flush()}t.insert("",s,r,!1)},[t,s.name]),null}),u=r(1047);function d(e){let{styles:t,defaultTheme:r={}}=e,o="function"==typeof t?e=>t(null==e||0===Object.keys(e).length?r:e):t;return(0,u.jsx)(c,{styles:o})}},9835:(e,t,r)=>{let o;r.d(t,{default:()=>s}),r(6847);var n=r(1346),a=r(6202),i=r(3875),l=r(1047);if("object"==typeof document){let e=document.querySelector('[name="emotion-insertion-point"]');if(!e){(e=document.createElement("meta")).setAttribute("name","emotion-insertion-point"),e.setAttribute("content","");let t=document.querySelector("head");t&&t.prepend(e)}class t extends i.v{insert(t,r){return this.key&&this.key.endsWith("global")&&(this.before=e),super.insert(t,r)}}o=((e,t)=>{let r=(0,a.A)(e);return r.sheet=new t({key:r.key,nonce:r.sheet.nonce,container:r.sheet.container,speedy:r.sheet.isSpeedy,prepend:r.sheet.prepend,insertionPoint:r.sheet.insertionPoint}),r})({key:"css",insertionPoint:e},t)}function s(e){let{injectFirst:t,children:r}=e;return t&&o?(0,l.jsx)(n.C,{value:o,children:r}):r}},7433:(e,t,r)=>{r.d(t,{default:()=>i});var o=r(1863),n=r(4051);let a=(0,r(4033).A)("MuiBox",["root"]),i=(0,n.default)({defaultClassName:a.root,generateClassName:o.A.generate})},9069:(e,t,r)=>{r.d(t,{default:()=>y});var o=r(6847),n=r(669),a=r(7505),i=r(2303),l=r(7227),s=r(4463),c=r(6003),u=r(7891),d=r(1047);let f=(0,u.A)(),m=(0,c.A)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[`maxWidth${(0,l.A)(String(r.maxWidth))}`],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}}),p=e=>(0,s.default)({props:e,name:"MuiContainer",defaultTheme:f}),h=(e,t)=>{let{classes:r,fixed:o,disableGutters:n,maxWidth:s}=e,c={root:["root",s&&`maxWidth${(0,l.A)(String(s))}`,o&&"fixed",n&&"disableGutters"]};return(0,i.A)(c,e=>(0,a.Ay)(t,e),r)},y=function(e={}){let{createStyledComponent:t=m,useThemeProps:r=p,componentName:a="MuiContainer"}=e,i=t(({theme:e,ownerState:t})=>({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",...!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}}}),({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce((t,r)=>{let o=e.breakpoints.values[r];return 0!==o&&(t[e.breakpoints.up(r)]={maxWidth:`${o}${e.breakpoints.unit}`}),t},{}),({theme:e,ownerState:t})=>({..."xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},...t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}}}));return o.forwardRef(function(e,t){let o=r(e),{className:l,component:s="div",disableGutters:c=!1,fixed:u=!1,maxWidth:f="lg",classes:m,...p}=o,y={...o,component:s,disableGutters:c,fixed:u,maxWidth:f},g=h(y,a);return(0,d.jsx)(i,{as:s,ownerState:y,className:(0,n.A)(g.root,l),ref:t,...p})})}()},6307:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i}),r(6847);var o=r(8566),n=r(2805),a=r(1047);let i=function(e){let{styles:t,themeId:r,defaultTheme:i={}}=e,l=(0,n.default)(i),s="function"==typeof t?t(r&&l[r]||l):t;return(0,a.jsx)(o.default,{styles:s})}},1700:(e,t,r)=>{r.r(t),r.d(t,{default:()=>L});var o=r(6847),n=r(669),a=r(7505),i=r(2303),l=r(6003),s=r(4463),c=r(2805),u=r(5693),d=r(7891);let f=(e,t)=>e.filter(e=>t.includes(e)),m=(e,t,r)=>{let o=e.keys[0];Array.isArray(t)?t.forEach((t,o)=>{r((t,r)=>{o<=e.keys.length-1&&(0===o?Object.assign(t,r):t[e.up(e.keys[o])]=r)},t)}):t&&"object"==typeof t?(Object.keys(t).length>e.keys.length?e.keys:f(e.keys,Object.keys(t))).forEach(n=>{if(e.keys.includes(n)){let a=t[n];void 0!==a&&r((t,r)=>{o===n?Object.assign(t,r):t[e.up(n)]=r},a)}}):("number"==typeof t||"string"==typeof t)&&r((e,t)=>{Object.assign(e,t)},t)};function p(e){return`--Grid-${e}Spacing`}function h(e){return`--Grid-parent-${e}Spacing`}let y="--Grid-columns",g="--Grid-parent-columns",v=({theme:e,ownerState:t})=>{let r={};return m(e.breakpoints,t.size,(e,t)=>{let o={};"grow"===t&&(o={flexBasis:0,flexGrow:1,maxWidth:"100%"}),"auto"===t&&(o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"}),"number"==typeof t&&(o={flexGrow:0,flexBasis:"auto",width:`calc(100% * ${t} / var(${g}) - (var(${g}) - ${t}) * (var(${h("column")}) / var(${g})))`}),e(r,o)}),r},S=({theme:e,ownerState:t})=>{let r={};return m(e.breakpoints,t.offset,(e,t)=>{let o={};"auto"===t&&(o={marginLeft:"auto"}),"number"==typeof t&&(o={marginLeft:0===t?"0px":`calc(100% * ${t} / var(${g}) + var(${h("column")}) * ${t} / var(${g}))`}),e(r,o)}),r},b=({theme:e,ownerState:t})=>{if(!t.container)return{};let r={[y]:12};return m(e.breakpoints,t.columns,(e,t)=>{let o=t??12;e(r,{[y]:o,"> *":{[g]:o}})}),r},k=({theme:e,ownerState:t})=>{if(!t.container)return{};let r={};return m(e.breakpoints,t.rowSpacing,(t,o)=>{let n="string"==typeof o?o:e.spacing?.(o);t(r,{[p("row")]:n,"> *":{[h("row")]:n}})}),r},x=({theme:e,ownerState:t})=>{if(!t.container)return{};let r={};return m(e.breakpoints,t.columnSpacing,(t,o)=>{let n="string"==typeof o?o:e.spacing?.(o);t(r,{[p("column")]:n,"> *":{[h("column")]:n}})}),r},$=({theme:e,ownerState:t})=>{if(!t.container)return{};let r={};return m(e.breakpoints,t.direction,(e,t)=>{e(r,{flexDirection:t})}),r},w=({ownerState:e})=>({minWidth:0,boxSizing:"border-box",...e.container&&{display:"flex",flexWrap:"wrap",...e.wrap&&"wrap"!==e.wrap&&{flexWrap:e.wrap},gap:`var(${p("row")}) var(${p("column")})`}}),A=e=>{let t=[];return Object.entries(e).forEach(([e,r])=>{!1!==r&&void 0!==r&&t.push(`grid-${e}-${String(r)}`)}),t},C=(e,t="xs")=>{function r(e){return void 0!==e&&("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e&&e>0)}if(r(e))return[`spacing-${t}-${String(e)}`];if("object"==typeof e&&!Array.isArray(e)){let t=[];return Object.entries(e).forEach(([e,o])=>{r(o)&&t.push(`spacing-${e}-${String(o)}`)}),t}return[]},j=e=>void 0===e?[]:"object"==typeof e?Object.entries(e).map(([e,t])=>`direction-${e}-${t}`):[`direction-xs-${String(e)}`];var M=r(1047);let E=(0,d.A)(),I=(0,l.A)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>t.root});function _(e){return(0,s.default)({props:e,name:"MuiGrid",defaultTheme:E})}let L=function(e={}){let{createStyledComponent:t=I,useThemeProps:r=_,useTheme:l=c.default,componentName:s="MuiGrid"}=e,d=(e,t)=>{let{container:r,direction:o,spacing:n,wrap:l,size:c}=e,u={root:["root",r&&"container","wrap"!==l&&`wrap-xs-${String(l)}`,...j(o),...A(c),...r?C(n,t.breakpoints.keys[0]):[]]};return(0,i.A)(u,e=>(0,a.Ay)(s,e),{})};function f(e,t,r=()=>!0){let o={};return null===e||(Array.isArray(e)?e.forEach((e,n)=>{null!==e&&r(e)&&t.keys[n]&&(o[t.keys[n]]=e)}):"object"==typeof e?Object.keys(e).forEach(t=>{let n=e[t];null!=n&&r(n)&&(o[t]=n)}):o[t.keys[0]]=e),o}let m=t(b,x,k,v,$,w,S),p=o.forwardRef(function(e,t){let a=l(),i=r(e),s=(0,u.A)(i),{className:c,children:p,columns:h=12,container:y=!1,component:g="div",direction:v="row",wrap:S="wrap",size:b={},offset:k={},spacing:x=0,rowSpacing:$=x,columnSpacing:w=x,unstable_level:A=0,...C}=s,j=f(b,a.breakpoints,e=>!1!==e),E=f(k,a.breakpoints),I=e.columns??(A?void 0:h),_=e.spacing??(A?void 0:x),L=e.rowSpacing??e.spacing??(A?void 0:$),P=e.columnSpacing??e.spacing??(A?void 0:w),O={...s,level:A,columns:I,container:y,direction:v,wrap:S,spacing:_,rowSpacing:L,columnSpacing:P,size:j,offset:E},W=d(O,a);return(0,M.jsx)(m,{ref:t,as:g,ownerState:O,className:(0,n.A)(W.root,c),...C,children:o.Children.map(p,e=>{var t;return o.isValidElement(e)&&(t=["Grid"],o.isValidElement(e)&&-1!==t.indexOf(e.type.muiName??e.type?._payload?.value?.muiName))&&y&&e.props.container?o.cloneElement(e,{unstable_level:e.props?.unstable_level??A+1}):e})})});return p.muiName="Grid",p}()},2092:(e,t,r)=>{r.r(t),r.d(t,{default:()=>l,useRtl:()=>i});var o=r(6847),n=r(1047);let a=o.createContext(),i=()=>{let e=o.useContext(a);return null!=e&&e},l=function(e){let{value:t,...r}=e;return(0,n.jsx)(a.Provider,{value:null==t||t,...r})}},670:(e,t,r)=>{r.r(t),r.d(t,{default:()=>b});var o=r(6847),n=r(669),a=r(9889),i=r(7505),l=r(2303),s=r(6003),c=r(4463),u=r(5693),d=r(7891),f=r(5919),m=r(2647),p=r(1047);let h=(0,d.A)(),y=(0,s.A)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function g(e){return(0,c.default)({props:e,name:"MuiStack",defaultTheme:h})}let v=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],S=({ownerState:e,theme:t})=>{let r={display:"flex",flexDirection:"column",...(0,f.NI)({theme:t},(0,f.kW)({values:e.direction,breakpoints:t.breakpoints.values}),e=>({flexDirection:e}))};if(e.spacing){let o=(0,m.LX)(t),n=Object.keys(t.breakpoints.values).reduce((t,r)=>(("object"==typeof e.spacing&&null!=e.spacing[r]||"object"==typeof e.direction&&null!=e.direction[r])&&(t[r]=!0),t),{}),i=(0,f.kW)({values:e.direction,base:n}),l=(0,f.kW)({values:e.spacing,base:n});"object"==typeof i&&Object.keys(i).forEach((e,t,r)=>{if(!i[e]){let o=t>0?i[r[t-1]]:"column";i[e]=o}}),r=(0,a.A)(r,(0,f.NI)({theme:t},l,(t,r)=>e.useFlexGap?{gap:(0,m._W)(o,t)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${v(r?i[r]:e.direction)}`]:(0,m._W)(o,t)}}))}return(0,f.iZ)(t.breakpoints,r)},b=function(e={}){let{createStyledComponent:t=y,useThemeProps:r=g,componentName:a="MuiStack"}=e,s=()=>(0,l.A)({root:["root"]},e=>(0,i.Ay)(a,e),{}),c=t(S);return o.forwardRef(function(e,t){let a=r(e),{component:i="div",direction:l="column",spacing:d=0,divider:f,children:m,className:h,useFlexGap:y=!1,...g}=(0,u.A)(a),v=s();return(0,p.jsx)(c,{as:i,ownerState:{direction:l,spacing:d,useFlexGap:y},ref:t,className:(0,n.A)(v.root,h),...g,children:f?function(e,t){let r=o.Children.toArray(e).filter(Boolean);return r.reduce((e,n,a)=>(e.push(n),a<r.length-1&&e.push(o.cloneElement(t,{key:`separator-${a}`})),e),[])}(m,f):m})})}()},6024:(e,t,r)=>{r.d(t,{default:()=>h});var o=r(6847),n=r(6957),a=r(7990);let i="function"==typeof Symbol&&Symbol.for?Symbol.for("mui.nested"):"__THEME_NESTED__";var l=r(1047);let s=function(e){let{children:t,theme:r}=e,s=(0,n.A)(),c=o.useMemo(()=>{let e=null===s?{...r}:"function"==typeof r?r(s):{...s,...r};return null!=e&&(e[i]=null!==s),e},[r,s]);return(0,l.jsx)(a.A.Provider,{value:c,children:t})};var c=r(1346),u=r(5671),d=r(2092),f=r(5385);let m={};function p(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return o.useMemo(()=>{let o=e&&t[e]||t;if("function"==typeof r){let a=r(o),i=e?{...t,[e]:a}:a;return n?()=>i:i}return e?{...t,[e]:r}:{...t,...r}},[e,t,r,n])}let h=function(e){let{children:t,theme:r,themeId:o}=e,a=(0,u.default)(m),i=(0,n.A)()||m,h=p(o,a,r),y=p(o,i,r,!0),g="rtl"===(o?h[o]:h).direction;return(0,l.jsx)(s,{theme:y,children:(0,l.jsx)(c.T.Provider,{value:h,children:(0,l.jsx)(d.default,{value:g,children:(0,l.jsx)(f.A,{value:o?h[o].components:h.components,children:t})})})})}},7969:(e,t,r)=>{r.r(t),r.d(t,{DISABLE_CSS_TRANSITION:()=>p,default:()=>h});var o=r(6847),n=r(8566),a=r(6957),i=r(5381),l=r(6024),s=r(1047);let c="mode",u="color-scheme";function d(e){if("undefined"!=typeof window&&"function"==typeof window.matchMedia&&"system"===e)return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function f(e,t){return"light"===e.mode||"system"===e.mode&&"light"===e.systemMode?t("light"):"dark"===e.mode||"system"===e.mode&&"dark"===e.systemMode?t("dark"):void 0}function m(e,t){let r;if("undefined"!=typeof window){try{(r=localStorage.getItem(e)||void 0)||localStorage.setItem(e,t)}catch(e){}return r||t}}let p="*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";function h(e){let{themeId:t,theme:r={},modeStorageKey:h=c,colorSchemeStorageKey:y=u,disableTransitionOnChange:g=!1,defaultColorScheme:v,resolveTheme:S}=e,b={allColorSchemes:[],colorScheme:void 0,darkColorScheme:void 0,lightColorScheme:void 0,mode:void 0,setColorScheme:()=>{},setMode:()=>{},systemMode:void 0},k=o.createContext(void 0),x={},$={},w="string"==typeof v?v:v.light,A="string"==typeof v?v:v.dark;return{CssVarsProvider:function(e){var b,w,A,C;let{children:j,theme:M,modeStorageKey:E=h,colorSchemeStorageKey:I=y,disableTransitionOnChange:_=g,storageWindow:L="undefined"==typeof window?void 0:window,documentNode:P="undefined"==typeof document?void 0:document,colorSchemeNode:O="undefined"==typeof document?void 0:document.documentElement,disableNestedContext:W=!1,disableStyleSheetGeneration:T=!1,defaultMode:N="system",noSsr:R}=e,G=o.useRef(!1),V=(0,a.A)(),D=o.useContext(k),F=!!D&&!W,K=o.useMemo(()=>M||("function"==typeof r?r():r),[M]),z=K[t],B=z||K,{colorSchemes:H=x,components:q=$,cssVarPrefix:J}=B,U=Object.keys(H).filter(e=>!!H[e]).join(","),X=o.useMemo(()=>U.split(","),[U]),Q="string"==typeof v?v:v.light,Y="string"==typeof v?v:v.dark,Z=H[Q]&&H[Y]?N:(null===(w=H[B.defaultColorScheme])||void 0===w?void 0:null===(b=w.palette)||void 0===b?void 0:b.mode)||(null===(A=B.palette)||void 0===A?void 0:A.mode),{mode:ee,setMode:et,systemMode:er,lightColorScheme:eo,darkColorScheme:en,colorScheme:ea,setColorScheme:ei}=function(e){let{defaultMode:t="light",defaultLightColorScheme:r,defaultDarkColorScheme:n,supportedColorSchemes:a=[],modeStorageKey:i=c,colorSchemeStorageKey:l=u,storageWindow:s="undefined"==typeof window?void 0:window,noSsr:p=!1}=e,h=a.join(","),y=a.length>1,[g,v]=o.useState(()=>{let e=m(i,t),o=m("".concat(l,"-light"),r),a=m("".concat(l,"-dark"),n);return{mode:e,systemMode:d(e),lightColorScheme:o,darkColorScheme:a}}),[S,b]=o.useState(p||!y);o.useEffect(()=>{b(!0)},[]);let k=f(g,e=>"light"===e?g.lightColorScheme:"dark"===e?g.darkColorScheme:void 0),x=o.useCallback(e=>{v(r=>{if(e===r.mode)return r;let o=null!=e?e:t;try{localStorage.setItem(i,o)}catch(e){}return{...r,mode:o,systemMode:d(o)}})},[i,t]),$=o.useCallback(e=>{e?"string"==typeof e?e&&!h.includes(e)?console.error("`".concat(e,"` does not exist in `theme.colorSchemes`.")):v(t=>{let r={...t};return f(t,t=>{try{localStorage.setItem("".concat(l,"-").concat(t),e)}catch(e){}"light"===t&&(r.lightColorScheme=e),"dark"===t&&(r.darkColorScheme=e)}),r}):v(t=>{let o={...t},a=null===e.light?r:e.light,i=null===e.dark?n:e.dark;if(a){if(h.includes(a)){o.lightColorScheme=a;try{localStorage.setItem("".concat(l,"-light"),a)}catch(e){}}else console.error("`".concat(a,"` does not exist in `theme.colorSchemes`."))}if(i){if(h.includes(i)){o.darkColorScheme=i;try{localStorage.setItem("".concat(l,"-dark"),i)}catch(e){}}else console.error("`".concat(i,"` does not exist in `theme.colorSchemes`."))}return o}):v(e=>{try{localStorage.setItem("".concat(l,"-light"),r),localStorage.setItem("".concat(l,"-dark"),n)}catch(e){}return{...e,lightColorScheme:r,darkColorScheme:n}})},[h,l,r,n]),w=o.useCallback(e=>{"system"===g.mode&&v(t=>{let r=(null==e?void 0:e.matches)?"dark":"light";return t.systemMode===r?t:{...t,systemMode:r}})},[g.mode]),A=o.useRef(w);return A.current=w,o.useEffect(()=>{if("function"!=typeof window.matchMedia||!y)return;let e=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return A.current(...t)},t=window.matchMedia("(prefers-color-scheme: dark)");return t.addListener(e),e(t),()=>{t.removeListener(e)}},[y]),o.useEffect(()=>{if(s&&y){let e=e=>{let r=e.newValue;"string"==typeof e.key&&e.key.startsWith(l)&&(!r||h.match(r))&&(e.key.endsWith("light")&&$({light:r}),e.key.endsWith("dark")&&$({dark:r})),e.key===i&&(!r||["light","dark","system"].includes(r))&&x(r||t)};return s.addEventListener("storage",e),()=>{s.removeEventListener("storage",e)}}},[$,x,i,l,h,t,s,y]),{...g,mode:S?g.mode:void 0,systemMode:S?g.systemMode:void 0,colorScheme:S?k:void 0,setMode:x,setColorScheme:$}}({supportedColorSchemes:X,defaultLightColorScheme:Q,defaultDarkColorScheme:Y,modeStorageKey:E,colorSchemeStorageKey:I,defaultMode:Z,storageWindow:L,noSsr:R}),el=ee,es=ea;F&&(el=D.mode,es=D.colorScheme);let ec=o.useMemo(()=>{var e;let t=es||B.defaultColorScheme,r=(null===(e=B.generateThemeVars)||void 0===e?void 0:e.call(B))||B.vars,o={...B,components:q,colorSchemes:H,cssVarPrefix:J,vars:r};if("function"==typeof o.generateSpacing&&(o.spacing=o.generateSpacing()),t){let e=H[t];e&&"object"==typeof e&&Object.keys(e).forEach(t=>{e[t]&&"object"==typeof e[t]?o[t]={...o[t],...e[t]}:o[t]=e[t]})}return S?S(o):o},[B,es,q,H,J]),eu=B.colorSchemeSelector;(0,i.A)(()=>{if(es&&O&&eu&&"media"!==eu){let e=eu;if("class"===eu&&(e=".%s"),"data"===eu&&(e="[data-%s]"),(null==eu?void 0:eu.startsWith("data-"))&&!eu.includes("%s")&&(e="[".concat(eu,'="%s"]')),e.startsWith("."))O.classList.remove(...X.map(t=>e.substring(1).replace("%s",t))),O.classList.add(e.substring(1).replace("%s",es));else{let t=e.replace("%s",es).match(/\[([^\]]+)\]/);if(t){let[e,r]=t[1].split("=");r||X.forEach(t=>{O.removeAttribute(e.replace(es,t))}),O.setAttribute(e,r?r.replace(/"|'/g,""):"")}else O.setAttribute(e,es)}}},[es,eu,O,X]),o.useEffect(()=>{let e;if(_&&G.current&&P){let t=P.createElement("style");t.appendChild(P.createTextNode(p)),P.head.appendChild(t),window.getComputedStyle(P.body),e=setTimeout(()=>{P.head.removeChild(t)},1)}return()=>{clearTimeout(e)}},[es,_,P]),o.useEffect(()=>(G.current=!0,()=>{G.current=!1}),[]);let ed=o.useMemo(()=>({allColorSchemes:X,colorScheme:es,darkColorScheme:en,lightColorScheme:eo,mode:el,setColorScheme:ei,setMode:et,systemMode:er}),[X,es,en,eo,el,ei,et,er,ec.colorSchemeSelector]),ef=!0;(T||!1===B.cssVariables||F&&(null==V?void 0:V.cssVarPrefix)===J)&&(ef=!1);let em=(0,s.jsxs)(o.Fragment,{children:[(0,s.jsx)(l.default,{themeId:z?t:void 0,theme:ec,children:j}),ef&&(0,s.jsx)(n.default,{styles:(null===(C=ec.generateStyleSheets)||void 0===C?void 0:C.call(ec))||[]})]});return F?em:(0,s.jsx)(k.Provider,{value:ed,children:em})},useColorScheme:()=>o.useContext(k)||b,getInitColorSchemeScript:e=>(function(e){let{defaultMode:t="system",defaultLightColorScheme:r="light",defaultDarkColorScheme:o="dark",modeStorageKey:n=c,colorSchemeStorageKey:a=u,attribute:i="data-color-scheme",colorSchemeNode:l="document.documentElement",nonce:d}=e||{},f="",m=i;if("class"===i&&(m=".%s"),"data"===i&&(m="[data-%s]"),m.startsWith(".")){let e=m.substring(1);f+=`${l}.classList.remove('${e}'.replace('%s', light), '${e}'.replace('%s', dark));
      ${l}.classList.add('${e}'.replace('%s', colorScheme));`}let p=m.match(/\[([^\]]+)\]/);if(p){let[e,t]=p[1].split("=");t||(f+=`${l}.removeAttribute('${e}'.replace('%s', light));
      ${l}.removeAttribute('${e}'.replace('%s', dark));`),f+=`
      ${l}.setAttribute('${e}'.replace('%s', colorScheme), ${t?`${t}.replace('%s', colorScheme)`:'""'});`}else f+=`${l}.setAttribute('${m}', colorScheme);`;return(0,s.jsx)("script",{suppressHydrationWarning:!0,nonce:"undefined"==typeof window?d:"",dangerouslySetInnerHTML:{__html:`(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${n}') || '${t}';
  const dark = localStorage.getItem('${a}-dark') || '${o}';
  const light = localStorage.getItem('${a}-light') || '${r}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${f}
  }
} catch(e){}})();`}},"mui-color-scheme-init")})({colorSchemeStorageKey:y,defaultLightColorScheme:w,defaultDarkColorScheme:A,modeStorageKey:h,...e})}}},6003:(e,t,r)=>{r.d(t,{A:()=>o});let o=(0,r(2163).Ay)()},7363:(e,t,r)=>{r.r(t),r.d(t,{default:()=>u,unstable_createUseMediaQuery:()=>c});var o,n=r(6847),a=r(5381),i=r(6520),l=r(5671);let s={...o||(o=r.t(n,2))}.useSyncExternalStore;function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{themeId:t}=e;return function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=(0,l.default)();o&&t&&(o=o[t]||o);let c="undefined"!=typeof window&&void 0!==window.matchMedia,{defaultMatches:u=!1,matchMedia:d=c?window.matchMedia:null,ssrMatchMedia:f=null,noSsr:m=!1}=(0,i.A)({name:"MuiUseMediaQuery",props:r,theme:o}),p="function"==typeof e?e(o):e;return(void 0!==s?function(e,t,r,o,a){let i=n.useCallback(()=>t,[t]),l=n.useMemo(()=>{if(a&&r)return()=>r(e).matches;if(null!==o){let{matches:t}=o(e);return()=>t}return i},[i,e,o,a,r]),[c,u]=n.useMemo(()=>{if(null===r)return[i,()=>()=>{}];let t=r(e);return[()=>t.matches,e=>(t.addEventListener("change",e),()=>{t.removeEventListener("change",e)})]},[i,r,e]);return s(u,c,l)}:function(e,t,r,o,i){let[l,s]=n.useState(()=>i&&r?r(e).matches:o?o(e).matches:t);return(0,a.A)(()=>{if(!r)return;let t=r(e),o=()=>{s(t.matches)};return o(),t.addEventListener("change",o),()=>{t.removeEventListener("change",o)}},[e,r]),l})(p=p.replace(/^@media( ?)/m,""),u,d,f,m)}}let u=c()},6520:(e,t,r)=>{r.d(t,{A:()=>n});var o=r(1779);function n(e){let{theme:t,name:r,props:n}=e;return t&&t.components&&t.components[r]&&t.components[r].defaultProps?(0,o.A)(t.components[r].defaultProps,n):n}},4463:(e,t,r)=>{r.d(t,{default:()=>a});var o=r(6520),n=r(2805);function a(e){let{props:t,name:r,defaultTheme:a,themeId:i}=e,l=(0,n.default)(a);return i&&(l=l[i]||l),(0,o.A)({theme:l,name:r,props:t})}},5381:(e,t,r)=>{r.d(t,{A:()=>n});var o=r(6847);let n="undefined"!=typeof window?o.useLayoutEffect:o.useEffect},549:(e,t,r)=>{var o=r(6779),n={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};function s(e){return o.isMemo(e)?i:l[e.$$typeof]||n}l[o.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},l[o.Memo]=i;var c=Object.defineProperty,u=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,f=Object.getOwnPropertyDescriptor,m=Object.getPrototypeOf,p=Object.prototype;e.exports=function e(t,r,o){if("string"!=typeof r){if(p){var n=m(r);n&&n!==p&&e(t,n,o)}var i=u(r);d&&(i=i.concat(d(r)));for(var l=s(t),h=s(r),y=0;y<i.length;++y){var g=i[y];if(!a[g]&&!(o&&o[g])&&!(h&&h[g])&&!(l&&l[g])){var v=f(r,g);try{c(t,g,v)}catch(e){}}}}return t}},4607:(e,t)=>{var r="function"==typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,n=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,i=r?Symbol.for("react.strict_mode"):60108,l=r?Symbol.for("react.profiler"):60114,s=r?Symbol.for("react.provider"):60109,c=r?Symbol.for("react.context"):60110,u=r?Symbol.for("react.async_mode"):60111,d=r?Symbol.for("react.concurrent_mode"):60111,f=r?Symbol.for("react.forward_ref"):60112,m=r?Symbol.for("react.suspense"):60113,p=r?Symbol.for("react.suspense_list"):60120,h=r?Symbol.for("react.memo"):60115,y=r?Symbol.for("react.lazy"):60116,g=r?Symbol.for("react.block"):60121,v=r?Symbol.for("react.fundamental"):60117,S=r?Symbol.for("react.responder"):60118,b=r?Symbol.for("react.scope"):60119;function k(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case u:case d:case a:case l:case i:case m:return e;default:switch(e=e&&e.$$typeof){case c:case f:case y:case h:case s:return e;default:return t}}case n:return t}}}function x(e){return k(e)===d}t.AsyncMode=u,t.ConcurrentMode=d,t.ContextConsumer=c,t.ContextProvider=s,t.Element=o,t.ForwardRef=f,t.Fragment=a,t.Lazy=y,t.Memo=h,t.Portal=n,t.Profiler=l,t.StrictMode=i,t.Suspense=m,t.isAsyncMode=function(e){return x(e)||k(e)===u},t.isConcurrentMode=x,t.isContextConsumer=function(e){return k(e)===c},t.isContextProvider=function(e){return k(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return k(e)===f},t.isFragment=function(e){return k(e)===a},t.isLazy=function(e){return k(e)===y},t.isMemo=function(e){return k(e)===h},t.isPortal=function(e){return k(e)===n},t.isProfiler=function(e){return k(e)===l},t.isStrictMode=function(e){return k(e)===i},t.isSuspense=function(e){return k(e)===m},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===d||e===l||e===i||e===m||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===h||e.$$typeof===s||e.$$typeof===c||e.$$typeof===f||e.$$typeof===v||e.$$typeof===S||e.$$typeof===b||e.$$typeof===g)},t.typeOf=k},6779:(e,t,r)=>{e.exports=r(4607)}}]);