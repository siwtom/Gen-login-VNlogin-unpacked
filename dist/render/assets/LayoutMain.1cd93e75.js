var ao=Object.defineProperty,lo=Object.defineProperties;var so=Object.getOwnPropertyDescriptors;var ze=Object.getOwnPropertySymbols;var co=Object.prototype.hasOwnProperty,uo=Object.prototype.propertyIsEnumerable;var we=(e,o,t)=>o in e?ao(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,ie=(e,o)=>{for(var t in o||(o={}))co.call(o,t)&&we(e,t,o[t]);if(ze)for(var t of ze(o))uo.call(o,t)&&we(e,t,o[t]);return e},ae=(e,o)=>lo(e,so(o));import{d as O,h as l,r as B,c as C,w as ve,n as Se,t as U,a as g,b as mo,e as d,f as vo,g as z,i as b,u as fo,N as Ne,T as ho,j as X,k as Ae,l as Be,m as Z,o as V,p as j,q as po,s as Oe,v as J,x as Ee,y as bo,V as go,z as He,A as Ie,B as xo,C as Me,D as yo,E as Co,F as _o,G as zo,H as wo,I as So,J as Re,K as W,L as Le,M as Fe,O as le,P as K,Q as Io,R as Ro,S as ee,U as ce,W as je,X as fe,Y as se,Z as $e,_ as $o,$ as Po,a0 as de,a1 as Ke,a2 as he,a3 as D,a4 as ue,a5 as H,a6 as q,a7 as Y,a8 as Ve,a9 as P,aa as R,ab as ko,ac as Pe,ad as G,ae as To,af as No,ag as De,ah as Ye,ai as re,aj as We,ak as ke,al as Ao,am as Bo,an as Oo,ao as Eo}from"./main.2046a1e9.js";import{_ as Ho,l as Mo}from"./helpers.6e052430.js";import{_ as Lo}from"./plugin-vue_export-helper.21dcd24c.js";import{_ as Fo}from"./Space.0022c150.js";import{C as jo,_ as Ue,a as qe}from"./Dropdown.b3c364ce.js";import{t as Ko,g as Vo,c as Do,N as Yo}from"./Tag.92553d15.js";import{_ as Wo,a as Uo}from"./Tabs.d2f16e6a.js";import{u as me}from"./use-merged-state.82643886.js";import{u as qo}from"./use-compitable.19f2c203.js";import{_ as Go}from"./a.29636055.js";import{_ as Xo}from"./Alert.30e97a91.js";import"./get.dca81cb3.js";import"./cssr.43c4be52.js";import"./next-frame-once.e0fd6a2a.js";import"./Add.e57c7f6a.js";var Zo=O({name:"ChevronDownFilled",render(){return l("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),Te=O({name:"SlotMachineNumber",props:{clsPrefix:{type:String,required:!0},value:{type:[Number,String],required:!0},oldOriginalNumber:{type:Number,default:void 0},newOriginalNumber:{type:Number,default:void 0}},setup(e){const o=B(null),t=B(e.value),i=B(e.value),r=B("up"),n=B(!1),u=C(()=>n.value?`${e.clsPrefix}-base-slot-machine-current-number--${r.value}-scroll`:null),p=C(()=>n.value?`${e.clsPrefix}-base-slot-machine-old-number--${r.value}-scroll`:null);ve(U(e,"value"),(c,h)=>{t.value=h,i.value=c,Se(v)});function v(){const c=e.newOriginalNumber,h=e.oldOriginalNumber;h===void 0||c===void 0||(c>h?f("up"):h>c&&f("down"))}function f(c){r.value=c,n.value=!1,Se(()=>{var h;(h=o.value)===null||h===void 0||h.offsetWidth,n.value=!0})}return()=>{const{clsPrefix:c}=e;return l("span",{ref:o,class:`${c}-base-slot-machine-number`},t.value!==null?l("span",{class:[`${c}-base-slot-machine-old-number ${c}-base-slot-machine-old-number--top`,p.value]},t.value):null,l("span",{class:[`${c}-base-slot-machine-current-number`,u.value]},l("span",{ref:"numberWrapper",class:[`${c}-base-slot-machine-current-number__inner`,typeof e.value!="number"&&`${c}-base-slot-machine-current-number__inner--not-number`]},i.value)),t.value!==null?l("span",{class:[`${c}-base-slot-machine-old-number ${c}-base-slot-machine-old-number--bottom`,p.value]},t.value):null)}}});const{cubicBezierEaseOut:Q}=mo;function Jo({duration:e=".2s"}={}){return[g("&.fade-up-width-expand-transition-leave-active",{transition:`
 opacity ${e} ${Q},
 max-width ${e} ${Q},
 transform ${e} ${Q}
 `}),g("&.fade-up-width-expand-transition-enter-active",{transition:`
 opacity ${e} ${Q},
 max-width ${e} ${Q},
 transform ${e} ${Q}
 `}),g("&.fade-up-width-expand-transition-enter-to",{opacity:1,transform:"translateX(0) translateY(0)"}),g("&.fade-up-width-expand-transition-enter-from",{maxWidth:"0 !important",opacity:0,transform:"translateY(60%)"}),g("&.fade-up-width-expand-transition-leave-from",{opacity:1,transform:"translateY(0)"}),g("&.fade-up-width-expand-transition-leave-to",{maxWidth:"0 !important",opacity:0,transform:"translateY(60%)"})]}var Qo=g([g("@keyframes n-base-slot-machine-fade-up-in",`
 from {
 transform: translateY(60%);
 opacity: 0;
 }
 to {
 transform: translateY(0);
 opacity: 1;
 }
 `),g("@keyframes n-base-slot-machine-fade-down-in",`
 from {
 transform: translateY(-60%);
 opacity: 0;
 }
 to {
 transform: translateY(0);
 opacity: 1;
 }
 `),g("@keyframes n-base-slot-machine-fade-up-out",`
 from {
 transform: translateY(0%);
 opacity: 1;
 }
 to {
 transform: translateY(-60%);
 opacity: 0;
 }
 `),g("@keyframes n-base-slot-machine-fade-down-out",`
 from {
 transform: translateY(0%);
 opacity: 1;
 }
 to {
 transform: translateY(60%);
 opacity: 0;
 }
 `),d("base-slot-machine",`
 overflow: hidden;
 white-space: nowrap;
 display: inline-block;
 height: 18px;
 line-height: 18px;
 `,[d("base-slot-machine-number",`
 display: inline-block;
 position: relative;
 height: 18px;
 width: .6em;
 max-width: .6em;
 `,[Jo({duration:".2s"}),vo({duration:".2s",delay:"0s"}),d("base-slot-machine-old-number",`
 display: inline-block;
 opacity: 0;
 position: absolute;
 left: 0;
 right: 0;
 `,[z("top",{transform:"translateY(-100%)"}),z("bottom",{transform:"translateY(100%)"}),z("down-scroll",{animation:"n-base-slot-machine-fade-down-out .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),z("up-scroll",{animation:"n-base-slot-machine-fade-up-out .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1})]),d("base-slot-machine-current-number",`
 display: inline-block;
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 1;
 transform: translateY(0);
 width: .6em;
 `,[z("down-scroll",{animation:"n-base-slot-machine-fade-down-in .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),z("up-scroll",{animation:"n-base-slot-machine-fade-up-in .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),b("inner",`
 display: inline-block;
 position: absolute;
 right: 0;
 top: 0;
 width: .6em;
 `,[z("not-number",`
 right: unset;
 left: 0;
 `)])])])])]),et=O({name:"BaseSlotMachine",props:{clsPrefix:{type:String,required:!0},value:{type:[Number,String],default:0},max:{type:Number,default:void 0},appeared:{type:Boolean,required:!0}},setup(e){fo("-base-slot-machine",Qo,U(e,"clsPrefix"));const o=B(),t=B(),i=C(()=>{if(typeof e.value=="string")return[];if(e.value<1)return[0];const r=[];let n=e.value;for(e.max!==void 0&&(n=Math.min(e.max,n));n>=1;)r.push(n%10),n/=10,n=Math.floor(n);return r.reverse(),r});return ve(U(e,"value"),(r,n)=>{typeof r=="string"?(t.value=void 0,o.value=void 0):typeof n=="string"?(t.value=r,o.value=void 0):(t.value=r,o.value=n)}),()=>{const{value:r,clsPrefix:n}=e;return typeof r=="number"?l("span",{class:`${n}-base-slot-machine`},l(ho,{name:"fade-up-width-expand-transition",tag:"span"},{default:()=>i.value.map((u,p)=>l(Te,{clsPrefix:n,key:i.value.length-p-1,oldOriginalNumber:o.value,newOriginalNumber:t.value,value:u}))}),l(Ne,{key:"+",width:!0},{default:()=>e.max!==void 0&&e.max<r?l(Te,{clsPrefix:n,value:"+"}):null})):l("span",{class:`${n}-base-slot-machine`},r)}}});const ot=X("n-avatar-group");var tt=d("avatar",`
 width: var(--n-merged-size);
 height: var(--n-merged-size);
 color: #FFF;
 font-size: var(--n-font-size);
 display: inline-flex;
 position: relative;
 overflow: hidden;
 text-align: center;
 border: var(--n-border);
 border-radius: var(--n-border-radius);
 --n-merged-color: var(--n-color);
 background-color: var(--n-merged-color);
 transition:
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[Ae(g("&","--n-merged-color: var(--n-color-modal);")),Be(g("&","--n-merged-color: var(--n-color-popover);")),g("img",`
 width: 100%;
 height: 100%;
 `),b("text",`
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `),d("icon",`
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `),b("text","line-height: 1.25")]);const rt=Object.assign(Object.assign({},j.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,color:String});var nt=O({name:"Avatar",props:rt,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=Z(e),i=B(!1);let r=null;const n=B(null),u=B(null),p=()=>{const{value:x}=n;if(x&&(r===null||r!==x.innerHTML)){r=x.innerHTML;const{value:w}=u;if(w){const{offsetWidth:S,offsetHeight:$}=w,{offsetWidth:M,offsetHeight:F}=x,A=.9,y=Math.min(S/M*A,$/F*A,1);x.style.transform=`translateX(-50%) translateY(-50%) scale(${y})`}}},v=V(ot,null),f=C(()=>{const{size:x}=e;if(x)return x;const{size:w}=v||{};return w||"medium"}),c=j("Avatar","-avatar",tt,po,e,o),h=V(Ko,null),m=C(()=>{if(v)return!0;const{round:x,circle:w}=e;return x!==void 0||w!==void 0?x||w:h?h.roundRef.value:!1}),_=C(()=>v?!0:e.bordered||!1),I=x=>{i.value=!0;const{onError:w}=e;w&&w(x)};ve(()=>e.src,()=>i.value=!1);const k=C(()=>{const x=f.value,w=m.value,S=_.value,{color:$}=e,{self:{borderRadius:M,fontSize:F,color:A,border:y,colorModal:T,colorPopover:a},common:{cubicBezierEaseInOut:N}}=c.value;let L;return typeof x=="number"?L=`${x}px`:L=c.value.self[Oe("height",x)],{"--n-font-size":F,"--n-border":S?y:"none","--n-border-radius":w?"50%":M,"--n-color":$||A,"--n-color-modal":$||T,"--n-color-popover":$||a,"--n-bezier":N,"--n-merged-size":`var(--n-avatar-size-override, ${L})`}}),E=t?J("avatar",C(()=>{const x=f.value,w=m.value,S=_.value,{color:$}=e;let M="";return x&&(typeof x=="number"?M+=`a${x}`:M+=x[0]),w&&(M+="b"),S&&(M+="c"),$&&(M+=Ee($)),M}),k,e):void 0;return{textRef:n,selfRef:u,mergedRoundRef:m,mergedClsPrefix:o,fitTextTransform:p,cssVars:t?void 0:k,themeClass:E==null?void 0:E.themeClass,onRender:E==null?void 0:E.onRender,hasLoadError:i,handleError:I}},render(){const{$slots:e,src:o,mergedClsPrefix:t,onRender:i}=this;i==null||i();let r;return this.hasLoadError?r=l("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}}):r=bo(e.default,n=>{if(n)return l(go,{onResize:this.fitTextTransform},{default:()=>l("span",{ref:"textRef",class:`${t}-avatar__text`},n)});if(o)return l("img",{src:o,onError:this.handleError,style:{objectFit:this.objectFit}})}),l("span",{ref:"selfRef",class:[`${t}-avatar`,this.themeClass],style:this.cssVars},r)}});const it=e=>{const{errorColor:o,infoColor:t,successColor:i,warningColor:r,fontFamily:n}=e;return{color:o,colorInfo:t,colorSuccess:i,colorError:o,colorWarning:r,fontSize:"12px",fontFamily:n}},at={name:"Badge",common:He,self:it};var lt=at,st=g([g("@keyframes badge-wave-spread",{from:{boxShadow:"0 0 0.5px 0px var(--n-ripple-color)",opacity:.6},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)",opacity:0}}),d("badge",`
 display: inline-flex;
 position: relative;
 vertical-align: middle;
 color: var(--n-color);
 font-family: var(--n-font-family);
 `,[z("as-is",[d("badge-sup",{position:"static",transform:"translateX(0)"},[Ie({transformOrigin:"left bottom",originalTransform:"translateX(0)"})])]),z("dot",[d("badge-sup",`
 height: 8px;
 width: 8px;
 padding: 0;
 min-width: 8px;
 left: 100%;
 bottom: calc(100% - 4px);
 `,[g("::before","border-radius: 4px;")])]),d("badge-sup",`
 background: var(--n-color);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: #FFF;
 position: absolute;
 height: 18px;
 line-height: 18px;
 border-radius: 9px;
 padding: 0 6px;
 text-align: center;
 font-size: var(--n-font-size);
 transform: translateX(-50%);
 left: 100%;
 bottom: calc(100% - 9px);
 font-variant-numeric: tabular-nums;
 z-index: 1;
 display: flex;
 align-items: center;
 `,[Ie({transformOrigin:"left bottom",originalTransform:"translateX(-50%)"}),d("base-wave",{zIndex:1,animationDuration:"2s",animationIterationCount:"infinite",animationDelay:"1s",animationTimingFunction:"var(--n-ripple-bezier)",animationName:"badge-wave-spread"}),g("&::before",`
 opacity: 0;
 transform: scale(1);
 border-radius: 9px;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)])])]);const ct=Object.assign(Object.assign({},j.props),{value:[String,Number],max:Number,dot:Boolean,type:{type:String,default:"default"},show:{type:Boolean,default:!0},showZero:Boolean,processing:Boolean,color:String});var dt=O({name:"Badge",props:ct,setup(e,{slots:o}){const{mergedClsPrefixRef:t,inlineThemeDisabled:i,mergedRtlRef:r}=Z(e),n=j("Badge","-badge",st,lt,e,t),u=B(!1),p=()=>{u.value=!0},v=()=>{u.value=!1},f=C(()=>e.show&&(e.dot||e.value!==void 0&&!(!e.showZero&&e.value<=0)||!xo(o.value)));Me(()=>{f.value&&(u.value=!0)});const c=yo("Badge",r,t),h=C(()=>{const{type:_,color:I}=e,{common:{cubicBezierEaseInOut:k,cubicBezierEaseOut:E},self:{[Oe("color",_)]:x,fontFamily:w,fontSize:S}}=n.value;return{"--n-font-size":S,"--n-font-family":w,"--n-color":I||x,"--n-ripple-color":I||x,"--n-bezier":k,"--n-ripple-bezier":E}}),m=i?J("badge",C(()=>{let _="";const{type:I,color:k}=e;return I&&(_+=I[0]),k&&(_+=Ee(k)),_}),h,e):void 0;return{rtlEnabled:c,mergedClsPrefix:t,appeared:u,showBadge:f,handleAfterEnter:p,handleAfterLeave:v,cssVars:i?void 0:h,themeClass:m==null?void 0:m.themeClass,onRender:m==null?void 0:m.onRender}},render(){var e;const{mergedClsPrefix:o,onRender:t,themeClass:i,$slots:r}=this;t==null||t();const n=(e=r.default)===null||e===void 0?void 0:e.call(r);return l("div",{class:[`${o}-badge`,this.rtlEnabled&&`${o}-badge--rtl`,i,{[`${o}-badge--dot`]:this.dot,[`${o}-badge--as-is`]:!n}],style:this.cssVars},n,l(Co,{name:"fade-in-scale-up-transition",onAfterEnter:this.handleAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>this.showBadge?l("sup",{class:`${o}-badge-sup`,title:Vo(this.value)},_o(r.value,()=>[this.dot?null:l(et,{clsPrefix:o,appeared:this.appeared,max:this.max,value:this.value})]),this.processing?l(zo,{clsPrefix:o}):null):null}))}});const ut=e=>{const{baseColor:o,textColor2:t,bodyColor:i,cardColor:r,dividerColor:n,actionColor:u,scrollbarColor:p,scrollbarColorHover:v,invertedColor:f}=e;return{textColor:t,textColorInverted:"#FFF",color:i,colorEmbedded:u,headerColor:r,headerColorInverted:f,footerColor:u,footerColorInverted:f,headerBorderColor:n,headerBorderColorInverted:f,footerBorderColor:n,footerBorderColorInverted:f,siderBorderColor:n,siderBorderColorInverted:f,siderColor:r,siderColorInverted:f,siderToggleButtonBorder:`1px solid ${n}`,siderToggleButtonColor:o,siderToggleButtonIconColor:t,siderToggleButtonIconColorInverted:t,siderToggleBarColor:Re(i,p),siderToggleBarColorHover:Re(i,v),__invertScrollbar:"true"}},mt=wo({name:"Layout",common:He,peers:{Scrollbar:So},self:ut});var pe=mt,vt=d("layout",`
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 flex: auto;
 overflow: hidden;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[d("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),z("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]);const Ge=X("n-layout-sider"),be={type:String,default:"static"},ft={embedded:Boolean,position:be,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},Xe=X("n-layout");function Ze(e){return O({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},j.props),ft),setup(o){const t=B(null),i=B(null),{mergedClsPrefixRef:r,inlineThemeDisabled:n}=Z(o),u=j("Layout","-layout",vt,pe,o,r);function p(m,_){if(o.nativeScrollbar){const{value:I}=t;I&&(_===void 0?I.scrollTo(m):I.scrollTo(m,_))}else{const{value:I}=i;I&&I.scrollTo(m,_)}}W(Xe,o);const v={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},f={scrollTo:p},c=C(()=>{const{common:{cubicBezierEaseInOut:m},self:_}=u.value;return{"--n-bezier":m,"--n-color":o.embedded?_.colorEmbedded:_.color,"--n-text-color":_.textColor}}),h=n?J("layout",void 0,c,o):void 0;return Object.assign({mergedClsPrefix:r,scrollableElRef:t,scrollbarInstRef:i,hasSiderStyle:v,mergedTheme:u,cssVars:n?void 0:c,themeClass:h==null?void 0:h.themeClass,onRender:h==null?void 0:h.onRender},f)},render(){var o;const{mergedClsPrefix:t,hasSider:i}=this;(o=this.onRender)===null||o===void 0||o.call(this);const r=i?this.hasSiderStyle:void 0,n=[this.themeClass,e&&`${t}-layout-content`,`${t}-layout`,`${t}-layout--${this.position}-positioned`];return l("div",{class:n,style:this.cssVars},this.nativeScrollbar?l("div",{ref:"scrollableElRef",class:`${t}-layout-scroll-container`,style:[this.contentStyle,r],onScroll:this.onScroll},this.$slots):l(Le,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentStyle:[this.contentStyle,r]}),this.$slots))}})}var ht=Ze(!1),pt=Ze(!0),bt=d("layout-header",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,[z("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `),z("bordered",`
 border-bottom: solid 1px var(--n-border-color);
 `)]);const gt={position:be,inverted:Boolean,bordered:{type:Boolean,default:!1}};var xt=O({name:"LayoutHeader",props:Object.assign(Object.assign({},j.props),gt),setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=Z(e),i=j("Layout","-layout-header",bt,pe,e,o),r=C(()=>{const{common:{cubicBezierEaseInOut:u},self:p}=i.value,v={"--n-bezier":u};return e.inverted?(v["--n-color"]=p.headerColorInverted,v["--n-text-color"]=p.textColorInverted,v["--n-border-color"]=p.headerBorderColorInverted):(v["--n-color"]=p.headerColor,v["--n-text-color"]=p.textColor,v["--n-border-color"]=p.headerBorderColor),v}),n=t?J("layout-header",C(()=>e.inverted?"a":"b"),r,e):void 0;return{mergedClsPrefix:o,cssVars:t?void 0:r,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){var e;const{mergedClsPrefix:o}=this;return(e=this.onRender)===null||e===void 0||e.call(this),l("div",{class:[`${o}-layout-header`,this.themeClass,this.position&&`${o}-layout-header--${this.position}-positioned`,this.bordered&&`${o}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),yt=d("layout-sider",`
 flex-shrink: 0;
 box-sizing: border-box;
 position: relative;
 z-index: 1;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 min-width .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: flex;
 justify-content: flex-end;
`,[z("bordered",[b("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),b("left-placement",[z("bordered",[b("border",`
 right: 0;
 `)])]),z("right-placement",`
 justify-content: flex-start;
 `,[z("bordered",[b("border",`
 left: 0;
 `)]),z("collapsed",[d("layout-toggle-button",[d("base-icon",`
 transform: rotate(180deg);
 `)]),d("layout-toggle-bar",[g("&:hover",[b("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),b("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),d("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[d("base-icon",`
 transform: rotate(0);
 `)]),d("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[g("&:hover",[b("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),b("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),z("collapsed",[d("layout-toggle-bar",[g("&:hover",[b("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),b("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),d("layout-toggle-button",[d("base-icon",`
 transform: rotate(0);
 `)])]),d("layout-toggle-button",`
 transition:
 color .3s var(--n-bezier),
 right .3s var(--n-bezier),
 left .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 cursor: pointer;
 width: 24px;
 height: 24px;
 position: absolute;
 top: 50%;
 right: 0;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 18px;
 color: var(--n-toggle-button-icon-color);
 border: var(--n-toggle-button-border);
 background-color: var(--n-toggle-button-color);
 box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .06);
 transform: translateX(50%) translateY(-50%);
 z-index: 1;
 `,[d("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),d("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[b("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),b("bottom",`
 position: absolute;
 top: 34px;
 `),g("&:hover",[b("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),b("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),b("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),g("&:hover",[b("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),b("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),d("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),z("show-content",[d("layout-sider-scroll-container",{opacity:1})]),z("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),Ct=O({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return l("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},l(Fe,{clsPrefix:e},{default:()=>l(jo,null)}))}}),_t=O({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return l("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},l("div",{class:`${e}-layout-toggle-bar__top`}),l("div",{class:`${e}-layout-toggle-bar__bottom`}))}});const zt={position:be,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerStyle:[String,Object],collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function};var wt=O({name:"LayoutSider",props:Object.assign(Object.assign({},j.props),zt),setup(e){const o=V(Xe),t=B(null),i=B(null),r=C(()=>le(v.value?e.collapsedWidth:e.width)),n=C(()=>e.collapseMode!=="transform"?{}:{minWidth:le(e.width)}),u=C(()=>o?o.siderPlacement:"left"),p=B(e.defaultCollapsed),v=me(U(e,"collapsed"),p);function f(w,S){if(e.nativeScrollbar){const{value:$}=t;$&&(S===void 0?$.scrollTo(w):$.scrollTo(w,S))}else{const{value:$}=i;$&&$.scrollTo(w,S)}}function c(){const{"onUpdate:collapsed":w,onUpdateCollapsed:S,onExpand:$,onCollapse:M}=e,{value:F}=v;S&&K(S,!F),w&&K(w,!F),p.value=!F,F?$&&K($):M&&K(M)}W(Ge,{collapsedRef:v,collapseModeRef:U(e,"collapseMode")});const{mergedClsPrefixRef:h,inlineThemeDisabled:m}=Z(e),_=j("Layout","-layout-sider",yt,pe,e,h);function I(w){var S,$;w.propertyName==="max-width"&&(v.value?(S=e.onAfterLeave)===null||S===void 0||S.call(e):($=e.onAfterEnter)===null||$===void 0||$.call(e))}const k={scrollTo:f},E=C(()=>{const{common:{cubicBezierEaseInOut:w},self:S}=_.value,{siderToggleButtonColor:$,siderToggleButtonBorder:M,siderToggleBarColor:F,siderToggleBarColorHover:A}=S,y={"--n-bezier":w,"--n-toggle-button-color":$,"--n-toggle-button-border":M,"--n-toggle-bar-color":F,"--n-toggle-bar-color-hover":A};return e.inverted?(y["--n-color"]=S.siderColorInverted,y["--n-text-color"]=S.textColorInverted,y["--n-border-color"]=S.siderBorderColorInverted,y["--n-toggle-button-icon-color"]=S.siderToggleButtonIconColorInverted,y.__invertScrollbar=S.__invertScrollbar):(y["--n-color"]=S.siderColor,y["--n-text-color"]=S.textColor,y["--n-border-color"]=S.siderBorderColor,y["--n-toggle-button-icon-color"]=S.siderToggleButtonIconColor),y}),x=m?J("layout-sider",C(()=>e.inverted?"a":"b"),E,e):void 0;return Object.assign({scrollableElRef:t,scrollbarInstRef:i,mergedClsPrefix:h,mergedTheme:_,styleMaxWidth:r,mergedCollapsed:v,scrollContainerStyle:n,siderPlacement:u,handleTransitionend:I,handleTriggerClick:c,inlineThemeDisabled:m,cssVars:E,themeClass:x==null?void 0:x.themeClass,onRender:x==null?void 0:x.onRender},k)},render(){var e;const{mergedClsPrefix:o,mergedCollapsed:t,showTrigger:i}=this;return(e=this.onRender)===null||e===void 0||e.call(this),l("aside",{class:[`${o}-layout-sider`,this.themeClass,`${o}-layout-sider--${this.position}-positioned`,`${o}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${o}-layout-sider--bordered`,t&&`${o}-layout-sider--collapsed`,(!t||this.showCollapsedContent)&&`${o}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:le(this.width)}]},this.nativeScrollbar?l("div",{class:`${o}-layout-sider-scroll-container`,onScroll:this.onScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):l(Le,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),i?i==="bar"?l(_t,{clsPrefix:o,style:t?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):l(Ct,{clsPrefix:o,style:t?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?l("div",{class:`${o}-layout-sider__border`}):null)}}),St=g([d("list",`
 --n-merged-border-color: var(--n-border-color);
 --n-merged-color: var(--n-color)
 font-size: var(--n-font-size);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 padding: 0;
 list-style-type: none;
 color: var(--n-text-color);
 background-color: var(--n-merged-color);
 `,[z("bordered",`
 border-radius: var(--n-border-radius);
 border: 1px solid var(--n-merged-border-color);
 `,[d("list-item",`
 padding: 12px 20px;
 `,[g("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]),b("header, footer",`
 padding: 12px 20px;
 `,[g("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)])]),b("header, footer",`
 padding: 12px 0;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[g("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]),d("list-item",`
 padding: 12px 0; 
 box-sizing: border-box;
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition: border-color .3s var(--n-bezier);
 `,[b("prefix",`
 margin-right: 20px;
 flex: 0;
 `),b("suffix",`
 margin-left: 20px;
 flex: 0;
 `),b("main",`
 flex: 1;
 `),g("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)])]),Ae(d("list",`
 --merged-color: var(--n-color-modal);
 --merged-border-color: var(--n-border-color-modal);
 `)),Be(d("list",`
 --merged-color: var(--n-color-popover);
 --merged-border-color: var(--n-border-color-popover);
 `))]);const It=Object.assign(Object.assign({},j.props),{size:{type:String,default:"medium"},bordered:{type:Boolean,default:!1}}),Je=X("n-list");var Rt=O({name:"List",props:It,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=Z(e),i=j("List","-list",St,Io,e,o);W(Je,{mergedClsPrefixRef:o});const r=C(()=>{const{common:{cubicBezierEaseInOut:u},self:{fontSize:p,textColor:v,color:f,colorModal:c,colorPopover:h,borderColor:m,borderColorModal:_,borderColorPopover:I,borderRadius:k}}=i.value;return{"--n-font-size":p,"--n-bezier":u,"--n-text-color":v,"--n-color":f,"--n-border-radius":k,"--n-border-color":m,"--n-border-color-modal":_,"--n-border-color-popover":I,"--n-color-modal":c,"--n-color-popover":h}}),n=t?J("list",void 0,r,e):void 0;return{mergedClsPrefix:o,cssVars:t?void 0:r,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){var e;const{$slots:o,mergedClsPrefix:t,onRender:i}=this;return i==null||i(),l("ul",{class:[`${t}-list`,this.bordered&&`${t}-list--bordered`,this.themeClass],style:this.cssVars},o.header?l("div",{class:`${t}-list__header`},o.header()):null,(e=o.default)===null||e===void 0?void 0:e.call(o),o.footer?l("div",{class:`${t}-list__footer`},o.footer()):null)}}),$t=O({name:"ListItem",setup(){const e=V(Je,null);return e||Ro("list-item","`n-list-item` must be placed in `n-list`."),{mergedClsPrefix:e.mergedClsPrefixRef}},render(){const{$slots:e,mergedClsPrefix:o}=this;return l("li",{class:`${o}-list-item`},e.prefix?l("div",{class:`${o}-list-item__prefix`},e.prefix()):null,e.default?l("div",{class:`${o}-list-item__main`},e):null,e.suffix?l("div",{class:`${o}-list-item__suffix`},e.suffix()):null)}});const te=X("n-menu"),ge=X("n-submenu"),xe=X("n-menu-item-group"),ne=8;function ye(e){const o=V(te),{props:t,mergedCollapsedRef:i}=o,r=V(ge,null),n=V(xe,null),u=C(()=>t.mode==="horizontal"),p=C(()=>u.value?t.dropdownPlacement:"tmNodes"in e?"right-start":"right"),v=C(()=>{var m;return Math.max((m=t.collapsedIconSize)!==null&&m!==void 0?m:t.iconSize,t.iconSize)}),f=C(()=>{var m;return!u.value&&e.root&&i.value&&(m=t.collapsedIconSize)!==null&&m!==void 0?m:t.iconSize}),c=C(()=>{if(u.value)return;const{collapsedWidth:m,indent:_,rootIndent:I}=t,{root:k,isGroup:E}=e,x=I===void 0?_:I;if(k)return i.value?m/2-v.value/2:x;if(n)return _/2+n.paddingLeftRef.value;if(r)return(E?_/2:_)+r.paddingLeftRef.value}),h=C(()=>{const{collapsedWidth:m,indent:_,rootIndent:I}=t,{value:k}=v,{root:E}=e;return u.value||!E||!i.value?ne:(I===void 0?_:I)+k+ne-(m+k)/2});return{dropdownPlacement:p,activeIconSize:f,maxIconSize:v,paddingLeft:c,iconMarginRight:h,NMenu:o,NSubmenu:r}}const Ce={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},Qe=Object.assign(Object.assign({},Ce),{tmNodes:{type:Array,required:!0}}),Pt=O({name:"MenuOptionGroup",props:Qe,setup(e){W(ge,null);const o=ye(e);W(xe,{paddingLeftRef:o.paddingLeft});const{mergedClsPrefixRef:t,props:i}=V(te);return function(){const{value:r}=t,n=o.paddingLeft.value;return l("div",{class:`${r}-menu-item-group`,role:"group"},l("span",{class:`${r}-menu-item-group-title`,style:n!==void 0?`padding-left: ${n}px;`:void 0},ee(e.title),e.extra?l(ce,null," ",ee(e.extra)):null),l("div",null,e.tmNodes.map(u=>_e(u,i))))}}});var eo=O({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:o}=V(te);return{menuProps:o,style:C(()=>{const{paddingLeft:t}=e;return{paddingLeft:t&&`${t}px`}}),iconStyle:C(()=>{const{maxIconSize:t,activeIconSize:i,iconMarginRight:r}=e;return{width:`${t}px`,height:`${t}px`,fontSize:`${i}px`,marginRight:`${r}px`}})}},render(){const{clsPrefix:e,tmNode:o,menuProps:{renderIcon:t,renderLabel:i,renderExtra:r,expandIcon:n}}=this,u=t?t(o.rawNode):ee(this.icon);return l("div",{onClick:this.onClick,role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},u&&l("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[u]),l("div",{class:`${e}-menu-item-content-header`,role:"none"},i?i(o.rawNode):ee(this.title),this.extra||r?l("span",{class:`${e}-menu-item-content-header__extra`}," ",r?r(o.rawNode):ee(this.extra)):null),this.showArrow?l(Fe,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>n?n(o.rawNode):l(Zo,null)}):null)}});const oo=Object.assign(Object.assign({},Ce),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),kt=O({name:"Submenu",props:oo,setup(e){const o=ye(e),{NMenu:t,NSubmenu:i}=o,{props:r,mergedCollapsedRef:n,mergedThemeRef:u}=t,p=C(()=>{const{disabled:m}=e;return i!=null&&i.mergedDisabledRef.value||r.disabled?!0:m}),v=B(!1);W(ge,{paddingLeftRef:o.paddingLeft,mergedDisabledRef:p}),W(xe,null);function f(){const{onClick:m}=e;m&&m()}function c(){p.value||(n.value||t.toggleExpand(e.internalKey),f())}function h(m){v.value=m}return{menuProps:r,mergedTheme:u,doSelect:t.doSelect,inverted:t.invertedRef,isHorizontal:t.isHorizontalRef,mergedClsPrefix:t.mergedClsPrefixRef,maxIconSize:o.maxIconSize,activeIconSize:o.activeIconSize,iconMarginRight:o.iconMarginRight,dropdownPlacement:o.dropdownPlacement,dropdownShow:v,paddingLeft:o.paddingLeft,mergedDisabled:p,mergedValue:t.mergedValueRef,childActive:je(()=>t.activePathRef.value.includes(e.internalKey)),collapsed:C(()=>r.mode==="horizontal"?!1:n.value?!0:!t.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:C(()=>!p.value&&(r.mode==="horizontal"||n.value)),handlePopoverShowChange:h,handleClick:c}},render(){var e;const{mergedClsPrefix:o,menuProps:{renderIcon:t,renderLabel:i}}=this,r=()=>{const{isHorizontal:u,paddingLeft:p,collapsed:v,mergedDisabled:f,maxIconSize:c,activeIconSize:h,title:m,childActive:_,icon:I,handleClick:k,dropdownShow:E,iconMarginRight:x,tmNode:w}=this;return l(eo,{tmNode:w,paddingLeft:p,collapsed:v,disabled:f,iconMarginRight:x,maxIconSize:c,activeIconSize:h,title:m,showArrow:!u,childActive:_,clsPrefix:o,icon:I,hover:E,onClick:k})},n=()=>l(Ne,null,{default:()=>{const{tmNodes:u,collapsed:p}=this;return p?null:l("div",{class:`${o}-submenu-children`,role:"menu"},u.map(v=>_e(v,this.menuProps)))}});return this.root?l(Ue,Object.assign({},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,size:"large",trigger:"hover",disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:t,renderLabel:i}),{default:()=>l("div",{class:`${o}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},r(),this.isHorizontal?null:n())}):l("div",{class:`${o}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},r(),n())}}),to=Object.assign(Object.assign({},Ce),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),Tt=O({name:"MenuOption",props:to,setup(e){const o=ye(e),{NSubmenu:t,NMenu:i}=o,{props:r,mergedClsPrefixRef:n,mergedCollapsedRef:u}=i,p=t?t.mergedDisabledRef:{value:!1},v=C(()=>p.value||e.disabled);function f(h){const{onClick:m}=e;m&&m(h)}function c(h){v.value||(i.doSelect(e.internalKey,e.tmNode.rawNode),f(h))}return{mergedClsPrefix:n,dropdownPlacement:o.dropdownPlacement,paddingLeft:o.paddingLeft,iconMarginRight:o.iconMarginRight,maxIconSize:o.maxIconSize,activeIconSize:o.activeIconSize,mergedTheme:i.mergedThemeRef,menuProps:r,dropdownEnabled:je(()=>e.root&&u.value&&r.mode!=="horizontal"&&!v.value),selected:C(()=>i.mergedValueRef.value===e.internalKey),mergedDisabled:v,handleClick:c}},render(){const{mergedClsPrefix:e,mergedTheme:o,tmNode:t,menuProps:{renderLabel:i}}=this;return l("div",{role:"menuitem",class:[`${e}-menu-item`]},l(qe,{theme:o.peers.Tooltip,themeOverrides:o.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>i?i(t.rawNode):ee(this.title),trigger:()=>l(eo,{tmNode:t,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}});var Nt=O({name:"MenuDivider",setup(){const e=V(te),{mergedClsPrefixRef:o,isHorizontalRef:t}=e;return()=>t.value?null:l("div",{class:`${o.value}-menu-divider`})}});const At=fe(Qe),Bt=fe(to),Ot=fe(oo);function Et(e){return e.type==="divider"||e.type==="render"}function Ht(e){return e.type==="divider"}function _e(e,o){const{rawNode:t}=e;if(Et(t))return Ht(t)?l(Nt,Object.assign({key:e.key},t.props)):void 0;const{labelField:i}=o,{key:r,level:n,isGroup:u}=e,p=Object.assign(Object.assign({},t),{title:t.title||t[i],extra:t.titleExtra||t.extra,key:r,internalKey:r,level:n,root:n===0,isGroup:u});return e.children?e.isGroup?l(Pt,se(p,At,{tmNodes:e.children,key:r})):l(kt,se(p,Ot,{key:r,rawNodes:t[o.childrenField],tmNodes:e.children,tmNode:e})):l(Tt,se(p,Bt,{key:r,tmNode:e}))}var Mt=g([d("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[z("horizontal",`
 display: inline-flex;
 padding-bottom: 0;
 `,[d("submenu","margin: 0;"),d("menu-item","margin: 0;"),d("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[g("&::before","display: none;"),z("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),d("menu-item-content",[z("selected",[b("icon","color: var(--n-item-icon-color-active-horizontal);"),d("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[g("a","color: var(--n-item-text-color-active-horizontal);"),b("extra","color: var(--n-item-text-color-active-horizontal);")])]),z("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[d("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[g("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),b("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),b("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),$e("disabled",[z("selected, child-active",[oe(null,[b("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),d("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[g("a","color: var(--n-item-text-color-active-hover-horizontal);"),b("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),oe("border-bottom: 2px solid var(--n-border-color-horizontal);",[b("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),d("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[g("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),b("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])])]),d("menu-item-content-header",[g("a","color: var(--n-item-text-color-horizontal);")])])]),z("collapsed",[d("menu-item",[z("selected",[g("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)])]),d("menu-item-content",[d("menu-item-content-header","opacity: 0;"),b("arrow","opacity: 0;"),b("icon","color: var(--n-item-icon-color-collapsed);")])]),d("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),d("menu-item-content",`
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[g("> *","z-index: 1;"),g("&::before",`
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),z("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),z("collapsed",[b("arrow","transform: rotate(0);")]),z("selected",[g("&::before","background-color: var(--n-item-color-active);"),b("arrow","color: var(--n-arrow-color-active);"),b("icon","color: var(--n-item-icon-color-active);"),d("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[g("a","color: var(--n-item-text-color-active);"),b("extra","color: var(--n-item-text-color-active);")])]),z("child-active",[d("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[g("a",`
 color: var(--n-item-text-color-child-active);
 `),b("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),b("arrow",`
 color: var(--n-arrow-color-child-active);
 `),b("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),$e("disabled",[z("selected, child-active",[oe(null,[b("arrow","color: var(--n-arrow-color-active-hover);"),b("icon","color: var(--n-item-icon-color-active-hover);"),d("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[g("a","color: var(--n-item-text-color-active-hover);"),b("extra","color: var(--n-item-text-color-active-hover);")])])]),z("selected",[oe(null,[g("&::before","background-color: var(--n-item-color-active-hover);")])]),oe(null,[g("&::before","background-color: var(--n-item-color-hover);"),b("arrow",`
 color: var(--n-arrow-color-hover);
 `),b("icon",`
 color: var(--n-item-icon-color-hover);
 `),d("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[g("a",`
 color: var(--n-item-text-color-hover);
 `),b("extra",`
 color: var(--n-item-text-color-hover);
 `)])])]),b("icon",`
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `),b("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),d("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
 color: var(--n-item-text-color);
 `,[g("a",`
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[g("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),b("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),d("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[d("menu-item-content",`
 height: var(--n-item-height);
 `),d("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[$o({duration:".2s"})])]),d("menu-item-group",[d("menu-item-group-title",`
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]),d("menu-tooltip",[g("a",`
 color: inherit;
 text-decoration: none;
 `)]),d("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function oe(e,o){return[z("hover",e,o),g("&:hover",e,o)]}const Lt=Object.assign(Object.assign({},j.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownPlacement:{type:String,default:"bottom"},dropdownProps:Object,accordion:Boolean,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array});var Ft=O({name:"Menu",props:Lt,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=Z(e),i=j("Menu","-menu",Mt,Po,e,o),r=V(Ge,null),n=C(()=>{var y;const{collapsed:T}=e;if(T!==void 0)return T;if(r){const{collapseModeRef:a,collapsedRef:N}=r;if(a.value==="width")return(y=N.value)!==null&&y!==void 0?y:!1}return!1}),u=C(()=>{const{keyField:y,childrenField:T}=e;return Do(e.items||e.options,{getChildren(a){return a[T]},getKey(a){var N;return(N=a[y])!==null&&N!==void 0?N:a.name}})}),p=C(()=>new Set(u.value.treeNodes.map(y=>y.key))),{watchProps:v}=e,f=B(null);v!=null&&v.includes("defaultValue")?de(()=>{f.value=e.defaultValue}):f.value=e.defaultValue;const c=U(e,"value"),h=me(c,f),m=B([]),_=()=>{m.value=e.defaultExpandAll?u.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||u.value.getPath(h.value,{includeSelf:!1}).keyPath};v!=null&&v.includes("defaultExpandedKeys")?de(_):_();const I=qo(e,["expandedNames","expandedKeys"]),k=me(I,m),E=C(()=>u.value.treeNodes),x=C(()=>u.value.getPath(h.value).keyPath);W(te,{props:e,mergedCollapsedRef:n,mergedThemeRef:i,mergedValueRef:h,mergedExpandedKeysRef:k,activePathRef:x,mergedClsPrefixRef:o,isHorizontalRef:C(()=>e.mode==="horizontal"),invertedRef:U(e,"inverted"),doSelect:w,toggleExpand:$});function w(y,T){const{"onUpdate:value":a,onUpdateValue:N,onSelect:L}=e;N&&K(N,y,T),a&&K(a,y,T),L&&K(L,y,T),f.value=y}function S(y){const{"onUpdate:expandedKeys":T,onUpdateExpandedKeys:a,onExpandedNamesChange:N,onOpenNamesChange:L}=e;T&&K(T,y),a&&K(a,y),N&&K(N,y),L&&K(L,y),m.value=y}function $(y){const T=Array.from(k.value),a=T.findIndex(N=>N===y);if(~a)T.splice(a,1);else{if(e.accordion&&p.value.has(y)){const N=T.findIndex(L=>p.value.has(L));N>-1&&T.splice(N,1)}T.push(y)}S(T)}const M=y=>{const T=u.value.getPath(y!=null?y:h.value,{includeSelf:!1}).keyPath;if(!T.length)return;const a=Array.from(k.value),N=new Set([...a,...T]);e.accordion&&p.value.forEach(L=>{N.has(L)&&!T.includes(L)&&N.delete(L)}),S(Array.from(N))},F=C(()=>{const{inverted:y}=e,{common:{cubicBezierEaseInOut:T},self:a}=i.value,{borderRadius:N,borderColorHorizontal:L,fontSize:ro,itemHeight:no,dividerColor:io}=a,s={"--n-divider-color":io,"--n-bezier":T,"--n-font-size":ro,"--n-border-color-horizontal":L,"--n-border-radius":N,"--n-item-height":no};return y?(s["--n-group-text-color"]=a.groupTextColorInverted,s["--n-color"]=a.colorInverted,s["--n-item-text-color"]=a.itemTextColorInverted,s["--n-item-text-color-hover"]=a.itemTextColorHoverInverted,s["--n-item-text-color-active"]=a.itemTextColorActiveInverted,s["--n-item-text-color-child-active"]=a.itemTextColorChildActiveInverted,s["--n-item-text-color-active-hover"]=a.itemTextColorActiveHoverInverted,s["--n-item-icon-color"]=a.itemIconColorInverted,s["--n-item-icon-color-hover"]=a.itemIconColorHoverInverted,s["--n-item-icon-color-active"]=a.itemIconColorActiveInverted,s["--n-item-icon-color-active-hover"]=a.itemIconColorActiveHoverInverted,s["--n-item-icon-color-child-active"]=a.itemIconColorChildActiveInverted,s["--n-item-icon-color-collapsed"]=a.itemIconColorCollapsedInverted,s["--n-item-text-color-horizontal"]=a.itemTextColorHorizontalInverted,s["--n-item-text-color-hover-horizontal"]=a.itemTextColorHoverHorizontalInverted,s["--n-item-text-color-active-horizontal"]=a.itemTextColorActiveHorizontalInverted,s["--n-item-text-color-child-active-horizontal"]=a.itemTextColorChildActiveHorizontalInverted,s["--n-item-text-color-active-hover-horizontal"]=a.itemTextColorActiveHoverHorizontalInverted,s["--n-item-icon-color-horizontal"]=a.itemIconColorHorizontalInverted,s["--n-item-icon-color-hover-horizontal"]=a.itemIconColorHoverHorizontalInverted,s["--n-item-icon-color-active-horizontal"]=a.itemIconColorActiveHorizontalInverted,s["--n-item-icon-color-active-hover-horizontal"]=a.itemIconColorActiveHoverHorizontalInverted,s["--n-item-icon-color-child-active-horizontal"]=a.itemIconColorChildActiveHorizontalInverted,s["--n-arrow-color"]=a.arrowColorInverted,s["--n-arrow-color-hover"]=a.arrowColorHoverInverted,s["--n-arrow-color-active"]=a.arrowColorActiveInverted,s["--n-arrow-color-active-hover"]=a.arrowColorActiveHoverInverted,s["--n-arrow-color-child-active"]=a.arrowColorChildActiveInverted,s["--n-item-color-hover"]=a.itemColorHoverInverted,s["--n-item-color-active"]=a.itemColorActiveInverted,s["--n-item-color-active-hover"]=a.itemColorActiveHoverInverted,s["--n-item-color-active-collapsed"]=a.itemColorActiveCollapsedInverted):(s["--n-group-text-color"]=a.groupTextColor,s["--n-color"]=a.color,s["--n-item-text-color"]=a.itemTextColor,s["--n-item-text-color-hover"]=a.itemTextColorHover,s["--n-item-text-color-active"]=a.itemTextColorActive,s["--n-item-text-color-child-active"]=a.itemTextColorChildActive,s["--n-item-text-color-active-hover"]=a.itemTextColorActiveHover,s["--n-item-icon-color"]=a.itemIconColor,s["--n-item-icon-color-hover"]=a.itemIconColorHover,s["--n-item-icon-color-active"]=a.itemIconColorActive,s["--n-item-icon-color-active-hover"]=a.itemIconColorActiveHover,s["--n-item-icon-color-child-active"]=a.itemIconColorChildActive,s["--n-item-icon-color-collapsed"]=a.itemIconColorCollapsed,s["--n-item-text-color-horizontal"]=a.itemTextColorHorizontal,s["--n-item-text-color-hover-horizontal"]=a.itemTextColorHoverHorizontal,s["--n-item-text-color-active-horizontal"]=a.itemTextColorActiveHorizontal,s["--n-item-text-color-child-active-horizontal"]=a.itemTextColorChildActiveHorizontal,s["--n-item-text-color-active-hover-horizontal"]=a.itemTextColorActiveHoverHorizontal,s["--n-item-icon-color-horizontal"]=a.itemIconColorHorizontal,s["--n-item-icon-color-hover-horizontal"]=a.itemIconColorHoverHorizontal,s["--n-item-icon-color-active-horizontal"]=a.itemIconColorActiveHorizontal,s["--n-item-icon-color-active-hover-horizontal"]=a.itemIconColorActiveHoverHorizontal,s["--n-item-icon-color-child-active-horizontal"]=a.itemIconColorChildActiveHorizontal,s["--n-arrow-color"]=a.arrowColor,s["--n-arrow-color-hover"]=a.arrowColorHover,s["--n-arrow-color-active"]=a.arrowColorActive,s["--n-arrow-color-active-hover"]=a.arrowColorActiveHover,s["--n-arrow-color-child-active"]=a.arrowColorChildActive,s["--n-item-color-hover"]=a.itemColorHover,s["--n-item-color-active"]=a.itemColorActive,s["--n-item-color-active-hover"]=a.itemColorActiveHover,s["--n-item-color-active-collapsed"]=a.itemColorActiveCollapsed),s}),A=t?J("menu",C(()=>e.inverted?"a":"b"),F,e):void 0;return{mergedClsPrefix:o,controlledExpandedKeys:I,uncontrolledExpanededKeys:m,mergedExpandedKeys:k,uncontrolledValue:f,mergedValue:h,activePath:x,tmNodes:E,mergedTheme:i,mergedCollapsed:n,cssVars:t?void 0:F,themeClass:A==null?void 0:A.themeClass,onRender:A==null?void 0:A.onRender,showOption:M}},render(){const{mergedClsPrefix:e,mode:o,themeClass:t,onRender:i}=this;return i==null||i(),l("div",{role:o==="horizontal"?"menubar":"menu",class:[`${e}-menu`,t,`${e}-menu--${o}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(r=>_e(r,this.$props)))}});const jt={name:"DarkModeSwitch"},Kt=O(ae(ie({},jt),{setup(e){const o=Ke(),{isDarkMode:t}=he(o),i=()=>o.setTheme(!t.value);return(r,n)=>(D(),ue("div",{class:"flex-center text-18px hover:text-primary cursor-pointer",onClick:i},[H(t)?(D(),q(H(Y),{key:0,type:"moon"})):(D(),q(H(Y),{key:1,type:"sun"}))]))}})),Vt=G(" Cloud "),Dt=G(" Local "),Yt=O({setup(e){const o=Ve(),{queryType:t}=he(o);return(i,r)=>{const n=Ho;return D(),q(n,{id:"storageTypeSwitch",value:H(t),"onUpdate:value":r[0]||(r[0]=u=>ko(t)?t.value=u:null),size:"large","checked-value":H(Pe).CLOUD,"unchecked-value":H(Pe).LOCAL},{checked:P(()=>[Vt]),"checked-icon":P(()=>[R(H(Y),{type:"cloud"})]),unchecked:P(()=>[Dt]),"unchecked-icon":P(()=>[R(H(Y),{type:"local"})]),_:1},8,["value","checked-value","unchecked-value"])}}}),Wt={class:"text-xl"},Ut=G(" Dashboard help "),qt=O({setup(e){const o=To(),t=No(),i=De(),r=Ve(),n=Ke(),u=B({id:1,name:i.userInfo.first_name,avatar:"https://avatars.dicebear.com/api/avataaars/xaw.svg"}),p=C(()=>{var f;return[{key:"me",label:`Hey, ${(f=u.value)==null?void 0:f.name}!`},{key:"divider",type:"divider"},{key:"profile",label:"My Account"},{key:"divider",type:"divider"},{key:"logout",label:"Sign out"}]}),v=async f=>{var c;f==="logout"?(i.logout(),n.setTheme(null),r.$patch({list:[]})):f==="profile"?o.push({name:"main.myAccount"}):f==="me"&&t.success(`Welcome back, ${(c=u.value)==null?void 0:c.name}!`)};return(f,c)=>{const h=Ao,m=Fo,_=qe,I=dt,k=$t,E=Rt,x=Wo,w=Uo,S=Yo,$=nt,M=Ue,F=xt;return D(),q(F,{bordered:""},{default:P(()=>[R(h,{text:"",onClick:c[0]||(c[0]=A=>H(o).go(0))},{default:P(()=>[R(H(Y),{type:"refresh",size:"20",depth:2})]),_:1}),R(m,{justify:"space-around",size:"large"},{default:P(()=>[R(Yt)]),_:1}),R(m,{size:20,align:"center",style:{"line-height":"1"}},{default:P(()=>[Ye("span",Wt,re(H(r).pagination.total)+" / "+re(H(i).profileLimit)+" Profiles ",1),R(Kt),R(_,null,{trigger:P(()=>[R(H(We),{to:{name:"main.home"}},{default:P(()=>[R(H(Y),{type:"help",size:"22",depth:2})]),_:1},8,["to"])]),default:P(()=>[Ut]),_:1}),R(S,{trigger:"click",placement:"bottom-end",width:300},{trigger:P(()=>[R(I,{dot:"",processing:""},{default:P(()=>[R(H(Y),{type:"notifications",size:"22",depth:2})]),_:1})]),default:P(()=>[R(w,{type:"line","justify-content":"space-evenly",style:{"--pane-padding":"0"}},{default:P(()=>[R(x,{name:"notifications",tab:"Notifications (5)"},{default:P(()=>[R(E,{style:{margin:"0"}},{default:P(()=>[(D(),ue(ce,null,ke(5,A=>R(k,{key:A},{default:P(()=>[G(" Notification "+re(A),1)]),_:2},1024)),64))]),_:1})]),_:1}),R(x,{name:"messages",tab:"Messages (6)"},{default:P(()=>[R(E,{style:{margin:"0"}},{default:P(()=>[(D(),ue(ce,null,ke(6,A=>R(k,{key:A},{default:P(()=>[G(" Message "+re(A),1)]),_:2},1024)),64))]),_:1})]),_:1})]),_:1})]),_:1}),R(M,{placement:"bottom-end","show-arrow":"",options:H(p),onSelect:v},{default:P(()=>{var A;return[R($,{size:"small",round:"",src:(A=u.value)==null?void 0:A.avatar},null,8,["src"])]}),_:1},8,["options"])]),_:1})]),_:1})}}});var Gt=Lo(qt,[["__scopeId","data-v-2e59b4d8"]]);const Xt=[{label:"Create Profile",name:"main.profile",icon:"plus"},{label:"Profiles",name:"main.profiles.all",icon:"home"},{label:"Automation",name:"main.automation.runScript",icon:"automation"},{label:"My account",name:"main.myAccount",icon:"user"},{label:"Captcha service",name:"main.captchaService",icon:"plugins"},{label:"Market",name:"main.market",icon:"market"},{label:"Support center",name:"main.supportCenter",icon:"comments"}];var Zt="./assets/logo.e2c8f3ac.png";const Jt=["src"],Qt=O({setup(e){const o=Bo(),t=B(Xt),i=f=>f.map(c=>ae(ie({},c),{key:c.name,label:c.name!=null?()=>l(We,{to:c},{default:()=>c.label}):c.label,icon:c.icon!=null?()=>l(Y,{type:c.icon}):void 0,children:c.children&&i(c.children)})),r=B(""),n=B([]),u=C(()=>t.value?i(t.value):[]),p=f=>{const{meta:{alias:c},params:h,name:m}=o;return c&&c===f.name||m===f.name&&(f.params==null||JSON.stringify(h)===JSON.stringify(f.params))},v=f=>{let c=!1;for(const h of f)h.children!=null&&v(h.children)&&n.value.push(h.name),p(h)&&(r.value=h.name,c=!0);return c};return de(()=>t.value&&v(t.value)),(f,c)=>{const h=Ft,m=wt;return D(),q(m,{class:"gen-login-menu",width:220,"native-scrollbar":!1,"collapsed-width":48,"collapse-mode":"width","show-trigger":"arrow-circle",bordered:""},{default:P(()=>[Ye("img",{class:"block logo",src:H(Zt),alt:""},null,8,Jt),R(h,{inverted:"",value:r.value,"default-expanded-keys":n.value,options:H(u),"root-indent":18,"onUpdate:value":c[0]||(c[0]=_=>{r.value=_})},null,8,["value","default-expanded-keys","options"])]),_:1})}}}),er=G(" Your plan has expired. "),or=G(" Upgrade here "),gr=O({setup(e){const o=De(),{planExpired:t}=he(o);return Me(()=>{Mo()}),(i,r)=>{const n=Go,u=Xo,p=Oo("router-view"),v=pt,f=ht;return D(),q(f,{position:"absolute","has-sider":""},{default:P(()=>[R(H(Qt)),R(f,null,{default:P(()=>[R(H(Gt)),R(v,{"content-style":"padding: 12px 24px"},{default:P(()=>[H(t)?(D(),q(u,{key:0,type:"warning"},{default:P(()=>[er,R(n,{onClick:H(o).upgradePlan},{default:P(()=>[or]),_:1},8,["onClick"])]),_:1})):Eo("",!0),R(p)]),_:1})]),_:1})]),_:1})}}});export{gr as default};
