import{d as V,r as P,aU as Ge,h as o,aV as qe,aW as U,aX as Ze,j as Je,o as ue,R as Qe,c as H,aA as et,U as tt,M as at,S as nt,aB as rt,aY as it,e as v,g as R,a as $,i as L,Z as ot,m as st,p as ve,aZ as lt,aI as K,w as dt,K as ct,t as I,a0 as ft,s as E,v as bt,y as re,V as ie,P as N,n as ut,a_ as vt,a$ as pt,T as ht,b0 as gt}from"./main.2046a1e9.js";import{A as mt}from"./Add.e57c7f6a.js";import{u as oe}from"./use-compitable.19f2c203.js";import{u as xt}from"./use-merged-state.82643886.js";import{c as yt,a as se,o as wt}from"./cssr.43c4be52.js";const Rt=se(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[se("&::-webkit-scrollbar",{width:0,height:0})]);var Ct=V({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=P(null);function t(i){!(i.currentTarget.offsetWidth<i.currentTarget.scrollWidth)||i.deltaY===0||(i.currentTarget.scrollLeft+=i.deltaY+i.deltaX,i.preventDefault())}const r=Ge();return Rt.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:yt,ssr:r}),Object.assign({selfRef:e,handleWheel:t},{scrollTo(...i){var f;(f=e.value)===null||f===void 0||f.scrollTo(...i)}})},render(){return o("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}}),St=/\s/;function Tt(e){for(var t=e.length;t--&&St.test(e.charAt(t)););return t}var $t=/^\s+/;function zt(e){return e&&e.slice(0,Tt(e)+1).replace($t,"")}var le=0/0,Pt=/^[-+]0x[0-9a-f]+$/i,_t=/^0b[01]+$/i,At=/^0o[0-7]+$/i,Wt=parseInt;function de(e){if(typeof e=="number")return e;if(qe(e))return le;if(U(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=U(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=zt(e);var r=_t.test(e);return r||At.test(e)?Wt(e.slice(2),r?2:8):Pt.test(e)?le:+e}var Bt=function(){return Ze.Date.now()},G=Bt,Lt="Expected a function",Et=Math.max,kt=Math.min;function jt(e,t,r){var s,i,f,b,l,m,x=0,y=!1,h=!1,p=!0;if(typeof e!="function")throw new TypeError(Lt);t=de(t)||0,U(r)&&(y=!!r.leading,h="maxWait"in r,f=h?Et(de(r.maxWait)||0,t):f,p="trailing"in r?!!r.trailing:p);function w(g){var A=s,W=i;return s=i=void 0,x=g,b=e.apply(W,A),b}function C(g){return x=g,l=setTimeout(S,t),y?w(g):b}function z(g){var A=g-m,W=g-x,k=t-A;return h?kt(k,f-W):k}function d(g){var A=g-m,W=g-x;return m===void 0||A>=t||A<0||h&&W>=f}function S(){var g=G();if(d(g))return T(g);l=setTimeout(S,z(g))}function T(g){return l=void 0,p&&s?w(g):(s=i=void 0,b)}function _(){l!==void 0&&clearTimeout(l),x=0,s=m=i=l=void 0}function M(){return l===void 0?b:T(G())}function F(){var g=G(),A=d(g);if(s=arguments,i=this,m=g,A){if(l===void 0)return C(m);if(h)return clearTimeout(l),l=setTimeout(S,t),w(m)}return l===void 0&&(l=setTimeout(S,t)),b}return F.cancel=_,F.flush=M,F}var It="Expected a function";function q(e,t,r){var s=!0,i=!0;if(typeof e!="function")throw new TypeError(It);return U(r)&&(s="leading"in r?!!r.leading:s,i="trailing"in r?!!r.trailing:i),jt(e,t,{leading:s,maxWait:t,trailing:i})}const Q=Je("n-tabs"),pe={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]};var Xt=V({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:pe,setup(e){const t=ue(Q,null);return t||Qe("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:t.paneStyleRef,class:t.paneClassRef,mergedClsPrefix:t.mergedClsPrefixRef}},render(){return o("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}});const Ot=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},it(pe,["displayDirective"]));var J=V({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:Ot,setup(e){const{mergedClsPrefixRef:t,valueRef:r,typeRef:s,closableRef:i,tabStyleRef:f,tabChangeIdRef:b,onBeforeLeaveRef:l,triggerRef:m,handleAdd:x,activateTab:y,handleClose:h}=ue(Q);return{trigger:m,mergedClosable:H(()=>{if(e.internalAddable)return!1;const{closable:p}=e;return p===void 0?i.value:p}),style:f,clsPrefix:t,value:r,type:s,handleClose(p){p.stopPropagation(),!e.disabled&&h(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){x();return}const{name:p}=e,w=++b.id;if(p!==r.value){const{value:C}=l;C?Promise.resolve(C(e.name,r.value)).then(z=>{z&&b.id===w&&y(p)}):y(p)}}}},render(){const{internalAddable:e,clsPrefix:t,name:r,disabled:s,label:i,tab:f,value:b,mergedClosable:l,style:m,trigger:x,$slots:{default:y}}=this,h=i!=null?i:f;return o("div",{class:`${t}-tabs-tab-wrapper`},this.internalLeftPadded?o("div",{class:`${t}-tabs-tab-pad`}):null,o("div",Object.assign({key:r,"data-name":r,"data-disabled":s?!0:void 0},et({class:[`${t}-tabs-tab`,b===r&&`${t}-tabs-tab--active`,s&&`${t}-tabs-tab--disabled`,l&&`${t}-tabs-tab--closable`,e&&`${t}-tabs-tab--addable`],onClick:x==="click"?this.activateTab:void 0,onMouseenter:x==="hover"?this.activateTab:void 0,style:e?void 0:m},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),o("span",{class:`${t}-tabs-tab__label`},e?o(tt,null,o("div",{class:`${t}-tabs-tab__height-placeholder`},"\xA0"),o(at,{clsPrefix:t},{default:()=>o(mt,null)})):y?y():typeof h=="object"?h:nt(h!=null?h:r)),l&&this.type==="card"?o(rt,{clsPrefix:t,class:`${t}-tabs-tab__close`,onClick:this.handleClose,disabled:s}):null))}}),Ft=v("tabs",`
 box-sizing: border-box;
 width: 100%;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[v("tabs-rail",`
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[v("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[v("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[R("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 `),$("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),R("flex",[v("tabs-nav",{width:"100%"},[v("tabs-wrapper",{width:"100%"},[v("tabs-tab",{marginRight:0})])])]),v("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[L("prefix, suffix",`
 display: flex;
 align-items: center;
 `),L("prefix","padding-right: 16px;"),L("suffix","padding-left: 16px;")]),v("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[R("shadow-before",[$("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),R("shadow-after",[$("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),$("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 20px;
 z-index: 1;
 `),$("&::before",`
 left: 0;
 `),$("&::after",`
 right: 0;
 `)]),v("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 width: fit-content;
 `),v("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),v("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),v("tabs-tab",`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[R("disabled",{cursor:"not-allowed"}),L("close",`
 margin-left: 8px;
 font-size: 14px;
 transition: color .3s var(--n-bezier);
 `),L("label",`
 display: flex;
 align-items: center;
 `)]),v("tabs-bar",`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[R("transition-disabled",`
 transition: none;
 `),R("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),v("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),v("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 padding: var(--n-pane-padding);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[$("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),$("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),$("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),$("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),$("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),v("tabs-tab-pad",`
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),R("line-type, bar-type",[v("tabs-tab",`
 font-weight: var(--n-tab-font-weight-active);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[$("&:hover",{color:"var(--n-tab-text-color-hover)"}),R("active",{color:"var(--n-tab-text-color-active)"}),R("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),v("tabs-nav",[R("line-type",[L("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),v("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),v("tabs-bar",`
 border-radius: 0;
 bottom: -1px;
 `)]),R("card-type",[L("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),v("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),v("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),v("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[R("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 `,[L("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),ot("disabled",[$("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),R("closable","padding-right: 6px;"),R("active",`
 border-bottom: 1px solid #0000;
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),R("disabled","color: var(--n-tab-text-color-disabled);")]),v("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);")])])]);const Mt=Object.assign(Object.assign({},ve.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},tabStyle:[String,Object],barWidth:Number,paneClass:String,paneStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]});var Yt=V({name:"Tabs",props:Mt,setup(e,{slots:t}){var r,s,i,f;const{mergedClsPrefixRef:b,inlineThemeDisabled:l}=st(e),m=ve("Tabs","-tabs",Ft,lt,e,b),x=P(null),y=P(null),h=P(null),p=P(null),w=P(null),C=P(!0),z=P(!0),d=oe(e,["labelSize","size"]),S=oe(e,["activeName","value"]),T=P((s=(r=S.value)!==null&&r!==void 0?r:e.defaultValue)!==null&&s!==void 0?s:t.default?(f=(i=K(t.default())[0])===null||i===void 0?void 0:i.props)===null||f===void 0?void 0:f.name:null),_=xt(S,T),M={id:0},F=H(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});dt(_,()=>{M.id=0,W()});function g(){var a;const{value:n}=_;return n===null?null:(a=x.value)===null||a===void 0?void 0:a.querySelector(`[data-name="${n}"]`)}function A(a){if(e.type==="card")return;const{value:n}=y;if(!!n&&a){const c=`${b.value}-tabs-bar--disabled`,{barWidth:u}=e;if(a.dataset.disabled==="true"?n.classList.add(c):n.classList.remove(c),u&&a.offsetWidth>=u){const B=Math.floor((a.offsetWidth-u)/2)+a.offsetLeft;n.style.left=`${B}px`,n.style.maxWidth=`${u}px`}else n.style.left=`${a.offsetLeft}px`,n.style.maxWidth=`${a.offsetWidth}px`;n.style.width="8192px"}}function W(){if(e.type==="card")return;const a=g();a&&A(a)}const k=P(null);let X=0;function he(){const a=k.value;if(a){X=a.getBoundingClientRect().height;const n=`${X}px`;a.style.height=n,a.style.maxHeight=n}}function ge(a){const n=k.value;if(n){const c=a.getBoundingClientRect().height;n.style.maxHeight=`${c}px`,n.style.height=`${Math.max(X,c)}px`}}function me(){const a=k.value;a&&(a.style.maxHeight="",a.style.height="")}const ee={value:[]},te=P("next");function xe(a){const n=_.value;let c="next";for(const u of ee.value){if(u===n)break;if(u===a){c="prev";break}}te.value=c,ye(a)}function ye(a){const{onActiveNameChange:n,onUpdateValue:c,"onUpdate:value":u}=e;n&&N(n,a),c&&N(c,a),u&&N(u,a),T.value=a}function we(a){const{onClose:n}=e;n&&N(n,a)}let Re=!0,ae=0;const Ce=q(function(n){var c;if(n.contentRect.width===0&&n.contentRect.height===0||ae===n.contentRect.width)return;ae=n.contentRect.width;const{type:u}=e;if((u==="line"||u==="bar")&&Re){const{value:B}=y;if(!B)return;const j=`${b.value}-tabs-bar--transition-disabled`;B.classList.add(j),W(),B.classList.remove(j)}u!=="segment"&&Y((c=w.value)===null||c===void 0?void 0:c.$el)},64),D=P(!1);function Se(a){var n;const{target:c,contentRect:{width:u}}=a,B=c.parentElement.offsetWidth;if(!D.value)B<u&&(D.value=!0);else{const{value:j}=p;if(!j)return;B-u>j.$el.offsetWidth&&(D.value=!1)}Y((n=w.value)===null||n===void 0?void 0:n.$el)}const Te=q(Se,64);function $e(){const{onAdd:a}=e;a&&a(),ut(()=>{const n=g(),{value:c}=w;!n||!c||c.scrollTo({left:n.offsetLeft,top:0,behavior:"smooth"})})}function Y(a){if(!a)return;const{scrollLeft:n,scrollWidth:c,offsetWidth:u}=a;C.value=n<=0,z.value=n+u>=c}const ze=q(a=>{Y(a.target)},64);ct(Q,{triggerRef:I(e,"trigger"),tabStyleRef:I(e,"tabStyle"),paneClassRef:I(e,"paneClass"),paneStyleRef:I(e,"paneStyle"),mergedClsPrefixRef:b,typeRef:I(e,"type"),closableRef:I(e,"closable"),valueRef:_,tabChangeIdRef:M,onBeforeLeaveRef:I(e,"onBeforeLeave"),activateTab:xe,handleClose:we,handleAdd:$e}),wt(()=>{W()}),ft(()=>{const{value:a}=h;if(!a)return;const{value:n}=b,c=`${n}-tabs-nav-scroll-wrapper--shadow-before`,u=`${n}-tabs-nav-scroll-wrapper--shadow-after`;C.value?a.classList.remove(c):a.classList.add(c),z.value?a.classList.remove(u):a.classList.add(u)});const Pe={syncBarPosition:()=>{W()}},ne=H(()=>{const{value:a}=d,{type:n}=e,c={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[n],u=`${a}${c}`,{self:{barColor:B,closeColor:j,closeColorHover:_e,closeColorPressed:Ae,tabColor:We,tabBorderColor:Be,paneTextColor:Le,tabFontWeight:Ee,tabBorderRadius:ke,tabFontWeightActive:je,colorSegment:Ie,fontWeightStrong:Oe,tabColorSegment:Fe,[E("panePadding",a)]:Me,[E("tabPadding",u)]:De,[E("tabGap",u)]:Ne,[E("tabTextColor",n)]:He,[E("tabTextColorActive",n)]:Ue,[E("tabTextColorHover",n)]:Ve,[E("tabTextColorDisabled",n)]:Xe,[E("tabFontSize",a)]:Ye},common:{cubicBezierEaseInOut:Ke}}=m.value;return{"--n-bezier":Ke,"--n-color-segment":Ie,"--n-bar-color":B,"--n-tab-font-size":Ye,"--n-tab-text-color":He,"--n-tab-text-color-active":Ue,"--n-tab-text-color-disabled":Xe,"--n-tab-text-color-hover":Ve,"--n-pane-text-color":Le,"--n-tab-border-color":Be,"--n-tab-border-radius":ke,"--n-close-color":j,"--n-close-color-hover":_e,"--n-close-color-pressed":Ae,"--n-tab-color":We,"--n-tab-font-weight":Ee,"--n-tab-font-weight-active":je,"--n-tab-padding":De,"--n-tab-gap":Ne,"--n-pane-padding":Me,"--n-font-weight-strong":Oe,"--n-tab-color-segment":Fe}}),O=l?bt("tabs",H(()=>`${d.value[0]}${e.type[0]}`),ne,e):void 0;return Object.assign({mergedClsPrefix:b,mergedValue:_,renderedNames:new Set,tabsPaneWrapperRef:k,tabsElRef:x,barElRef:y,addTabInstRef:p,xScrollInstRef:w,scrollWrapperElRef:h,addTabFixed:D,tabWrapperStyle:F,handleNavResize:Ce,mergedSize:d,handleScroll:ze,handleTabsResize:Te,cssVars:l?void 0:ne,themeClass:O==null?void 0:O.themeClass,animationDirection:te,renderNameListRef:ee,onAnimationBeforeLeave:he,onAnimationEnter:ge,onAnimationAfterEnter:me,onRender:O==null?void 0:O.onRender},Pe)},render(){const{mergedClsPrefix:e,type:t,addTabFixed:r,addable:s,mergedSize:i,renderNameListRef:f,onRender:b,$slots:{default:l,prefix:m,suffix:x}}=this;b==null||b();const y=l?K(l()).filter(d=>d.type.__TAB_PANE__===!0):[],h=l?K(l()).filter(d=>d.type.__TAB__===!0):[],p=!h.length,w=t==="card",C=t==="segment",z=!w&&!C&&this.justifyContent;return f.value=[],o("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${t}-type`,`${e}-tabs--${i}-size`,z&&`${e}-tabs--flex`],style:this.cssVars},o("div",{class:[`${e}-tabs-nav--${t}-type`,`${e}-tabs-nav`]},re(m,d=>d&&o("div",{class:`${e}-tabs-nav__prefix`},d)),C?o("div",{class:`${e}-tabs-rail`},p?y.map((d,S)=>(f.value.push(d.props.name),o(J,Object.assign({},d.props,{internalCreatedByPane:!0,internalLeftPadded:S!==0}),d.children?{default:d.children.tab}:void 0))):h.map((d,S)=>(f.value.push(d.props.name),S===0?d:be(d)))):o(ie,{onResize:this.handleNavResize},{default:()=>o("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},o(Ct,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:()=>{const d=o("div",{style:this.tabWrapperStyle,class:`${e}-tabs-wrapper`},z?null:o("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}),p?y.map((T,_)=>(f.value.push(T.props.name),Z(o(J,Object.assign({},T.props,{internalCreatedByPane:!0,internalLeftPadded:_!==0&&!z}),T.children?{default:T.children.tab}:void 0)))):h.map((T,_)=>(f.value.push(T.props.name),Z(_!==0&&!z?be(T):T))),!r&&s&&w?fe(s,(p?y.length:h.length)!==0):null,z?null:o("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));let S=d;return w&&s&&(S=o(ie,{onResize:this.handleTabsResize},{default:()=>d})),o("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},S,w?o("div",{class:`${e}-tabs-pad`}):null,w?null:o("div",{ref:"barElRef",class:`${e}-tabs-bar`}))}}))}),r&&s&&w?fe(s,!0):null,re(x,d=>d&&o("div",{class:`${e}-tabs-nav__suffix`},d))),p&&(this.animated?o("div",{ref:"tabsPaneWrapperRef",class:`${e}-tabs-pane-wrapper`},ce(y,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):ce(y,this.mergedValue,this.renderedNames)))}});function ce(e,t,r,s,i,f,b){const l=[];return e.forEach(m=>{const{name:x,displayDirective:y,"display-directive":h}=m.props,p=C=>y===C||h===C,w=t===x;if(m.key!==void 0&&(m.key=x),w||p("show")||p("show:lazy")&&r.has(x)){r.has(x)||r.add(x);const C=!p("if");l.push(C?vt(m,[[pt,w]]):m)}}),b?o(ht,{name:`${b}-transition`,onBeforeLeave:s,onEnter:i,onAfterEnter:f},{default:()=>l}):l}function fe(e,t){return o(J,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:t,disabled:typeof e=="object"&&e.disabled})}function be(e){const t=gt(e);return t.props?t.props.internalLeftPadded=!0:t.props={internalLeftPadded:!0},t}function Z(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}export{Xt as _,Yt as a,J as b};
