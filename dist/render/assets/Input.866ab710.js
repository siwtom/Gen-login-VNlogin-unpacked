import{d as J,h as t,j as Jo,o as Zo,c as y,bI as qo,e as u,i as a,a as g,g as m,Z as V,m as Go,p as xe,bJ as Qo,r as v,t as er,as as or,W as he,C as rr,b4 as nr,a0 as fe,w as ve,K as tr,D as ar,s as ae,az as ir,v as lr,y as Y,F as ie,L as sr,U as cr,V as dr,M as ur,aP as pe,n as hr,P as p,aN as ge}from"./main.2046a1e9.js";import{u as fr,N as be,a as vr}from"./Suffix.8c4bc0ef.js";import{u as pr}from"./use-merged-state.82643886.js";var gr=J({name:"Eye",render(){return t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},t("path",{d:"M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),t("circle",{cx:"256",cy:"256",r:"80",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"}))}}),br=J({name:"EyeOff",render(){return t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},t("path",{d:"M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z",fill:"currentColor"}),t("path",{d:"M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z",fill:"currentColor"}),t("path",{d:"M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z",fill:"currentColor"}),t("path",{d:"M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z",fill:"currentColor"}),t("path",{d:"M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z",fill:"currentColor"}))}});const we=Jo("n-input");function mr(o){let b=0;for(const z of o)b++;return b}function X(o){return["",void 0,null].includes(o)}var me=J({name:"InputWordCount",setup(o,{slots:b}){const{mergedValueRef:z,maxlengthRef:C,mergedClsPrefixRef:h}=Zo(we),l=y(()=>{const{value:i}=z;return i===null||Array.isArray(i)?0:mr(i)});return()=>{const{value:i}=C,{value:s}=z;return t("span",{class:`${h.value}-input-word-count`},qo(b.default,{value:s===null||Array.isArray(s)?"":s},()=>[i===void 0?l.value:`${l.value} / ${i}`]))}}}),xr=u("input",`
 max-width: 100%;
 cursor: text;
 line-height: 1.5;
 z-index: auto;
 outline: none;
 box-sizing: border-box;
 position: relative;
 display: inline-flex;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 --n-padding-vertical: calc((var(--n-height) - 1.5 * var(--n-font-size)) / 2);
`,[a("input, textarea",`
 overflow: hidden;
 flex-grow: 1;
 position: relative;
 `),a("input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder",`
 box-sizing: border-box;
 font-size: inherit;
 line-height: 1.5;
 font-family: inherit;
 border: none;
 outline: none;
 background-color: #0000;
 text-align: inherit;
 transition:
 caret-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 `),a("input-el, textarea-el",`
 -webkit-appearance: none;
 scrollbar-width: none;
 width: 100%;
 min-width: 0;
 text-decoration-color: var(--n-text-decoration-color);
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 background-color: transparent;
 `,[g("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),g("&::placeholder","color: #0000;"),g("&:-webkit-autofill ~",[a("placeholder","display: none;")])]),m("round",[V("textarea","border-radius: calc(var(--n-height) / 2);")]),a("placeholder",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: hidden;
 color: var(--n-placeholder-color);
 `,[g("span",`
 width: 100%;
 display: inline-block;
 `)]),m("textarea",[a("placeholder","overflow: visible;")]),V("autosize","width: 100%;"),m("autosize",[a("textarea-el, input-el",`
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]),u("input-wrapper",`
 overflow: hidden;
 display: inline-flex;
 flex-grow: 1;
 position: relative;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 `),a("input-mirror",`
 padding: 0;
 height: var(--n-height);
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: nowrap;
 pointer-events: none;
 `),a("input-el",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[g("+",[a("placeholder",`
 display: flex;
 align-items: center; 
 `)])]),V("textarea",[a("placeholder","white-space: nowrap;")]),a("eye",`
 transition: color .3s var(--n-bezier);
 `),m("textarea","width: 100%;",[u("input-word-count",`
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `),m("resizable",[u("input-wrapper",`
 resize: vertical;
 min-height: var(--n-height);
 `)]),a("textarea",`
 position: static;
 `),a("textarea-el, textarea-mirror, placeholder",`
 height: 100%;
 left: var(--n-padding-left);
 right: var(--n-padding-right);
 padding-left: 0;
 padding-right: 0;
 padding-top: var(--n-padding-vertical);
 padding-bottom: var(--n-padding-vertical);
 word-break: break-word;
 display: inline-block;
 vertical-align: bottom;
 box-sizing: border-box;
 line-height: var(--n-line-height-textarea);
 margin: 0;
 resize: none;
 white-space: pre-wrap;
 `),a("textarea-mirror",`
 width: 100%;
 pointer-events: none;
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre-wrap;
 overflow-wrap: break-word;
 `)]),m("pair",[a("input-el, placeholder","text-align: center;"),a("separator",`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `,[u("icon",`
 color: var(--n-icon-color);
 `),u("base-icon",`
 color: var(--n-icon-color);
 `)])]),m("disabled",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[a("border","border: var(--n-border-disabled);"),a("input-el, textarea-el",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `),a("placeholder","color: var(--n-placeholder-color-disabled);"),a("separator","color: var(--n-text-color-disabled);",[u("icon",`
 color: var(--n-icon-color-disabled);
 `),u("base-icon",`
 color: var(--n-icon-color-disabled);
 `)]),a("suffix, prefix","color: var(--n-text-color-disabled);",[u("icon",`
 color: var(--n-icon-color-disabled);
 `),u("internal-icon",`
 color: var(--n-icon-color-disabled);
 `)])]),V("disabled",[a("eye",`
 display: flex;
 align-items: center;
 justify-content: center;
 color: var(--n-icon-color);
 cursor: pointer;
 `,[g("&:hover",`
 color: var(--n-icon-color-hover);
 `),g("&:active",`
 color: var(--n-icon-color-pressed);
 `),u("icon",[g("&:hover",`
 color: var(--n-icon-color-hover);
 `),g("&:active",`
 color: var(--n-icon-color-pressed);
 `)])]),g("&:hover",[a("state-border","border: var(--n-border-hover);")]),m("focus","background-color: var(--n-color-focus);",[a("state-border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),a("border, state-border",`
 box-sizing: border-box;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: inherit;
 border: var(--n-border);
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),a("state-border",`
 border-color: #0000;
 z-index: 1;
 `),a("prefix","margin-right: 4px;"),a("suffix",`
 margin-left: 4px;
 `),a("suffix, prefix",`
 transition: color .3s var(--n-bezier);
 flex-wrap: nowrap;
 flex-shrink: 0;
 line-height: var(--n-height);
 white-space: nowrap;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-suffix-text-color);
 `,[u("base-loading",`
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `),u("base-clear",`
 font-size: var(--n-icon-size);
 `,[a("placeholder",[u("base-icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]),g(">",[u("icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]),u("base-icon",`
 font-size: var(--n-icon-size);
 `)]),u("input-word-count",`
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `),["warning","error"].map(o=>m(`${o}-status`,[V("disabled",[u("base-loading",`
 color: var(--n-loading-color-${o})
 `),a("input-el, textarea-el",`
 caret-color: var(--n-caret-color-${o});
 `),a("state-border",`
 border: var(--n-border-${o});
 `),g("&:hover",[a("state-border",`
 border: var(--n-border-hover-${o});
 `)]),g("&:focus",`
 background-color: var(--n-color-focus-${o});
 `,[a("state-border",`
 box-shadow: var(--n-box-shadow-focus-${o});
 border: var(--n-border-focus-${o});
 `)]),m("focus",`
 background-color: var(--n-color-focus-${o});
 `,[a("state-border",`
 box-shadow: var(--n-box-shadow-focus-${o});
 border: var(--n-border-focus-${o});
 `)])])]))]);const wr=Object.assign(Object.assign({},xe.props),{bordered:{type:Boolean,default:void 0},type:{type:String,default:"text"},placeholder:[Array,String],defaultValue:{type:[String,Array],default:null},value:[String,Array],disabled:{type:Boolean,default:void 0},size:String,rows:{type:[Number,String],default:3},round:Boolean,minlength:[String,Number],maxlength:[String,Number],clearable:Boolean,autosize:{type:[Boolean,Object],default:!1},pair:Boolean,separator:String,readonly:{type:[String,Boolean],default:!1},passivelyActivated:Boolean,showPasswordOn:String,stateful:{type:Boolean,default:!0},autofocus:Boolean,inputProps:Object,resizable:{type:Boolean,default:!0},showCount:Boolean,loading:{type:Boolean,default:void 0},onMousedown:Function,onKeydown:Function,onKeyup:Function,onInput:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClick:[Function,Array],onChange:[Function,Array],onClear:[Function,Array],status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],textDecoration:[String,Array],attrSize:{type:Number,default:20},onInputBlur:[Function,Array],onInputFocus:[Function,Array],onDeactivate:[Function,Array],onActivate:[Function,Array],onWrapperFocus:[Function,Array],onWrapperBlur:[Function,Array],internalDeactivateOnEnter:Boolean,internalForceFocus:Boolean,internalLoadingBeforeSuffix:Boolean,showPasswordToggle:Boolean});var Ar=J({name:"Input",props:wr,setup(o){const{mergedClsPrefixRef:b,mergedBorderedRef:z,inlineThemeDisabled:C,mergedRtlRef:h}=Go(o),l=xe("Input","-input",xr,Qo,o,b),i=v(null),s=v(null),Z=v(null),le=v(null),x=v(null),W=v(null),A=v(null),{localeRef:ye}=fr("Input"),O=v(o.defaultValue),Ce=er(o,"value"),w=pr(Ce,O),P=or(o),{mergedSizeRef:q,mergedDisabledRef:B,mergedStatusRef:ze}=P,E=v(!1),M=v(!1),S=v(!1),k=v(!1);let G=null;const Q=y(()=>{const{placeholder:e,pair:r}=o;return r?Array.isArray(e)?e:e===void 0?["",""]:[e,e]:e===void 0?[ye.value.placeholder]:[e]}),Ae=y(()=>{const{value:e}=S,{value:r}=w,{value:n}=Q;return!e&&(X(r)||Array.isArray(r)&&X(r[0]))&&n[0]}),Se=y(()=>{const{value:e}=S,{value:r}=w,{value:n}=Q;return!e&&n[1]&&(X(r)||Array.isArray(r)&&X(r[1]))}),ee=he(()=>o.internalForceFocus||E.value),Re=he(()=>{if(B.value||o.readonly||!o.clearable||!ee.value&&!M.value)return!1;const{value:e}=w,{value:r}=ee;return o.pair?!!(Array.isArray(e)&&(e[0]||e[1]))&&(M.value||r):!!e&&(M.value||r)}),oe=y(()=>{const{showPasswordOn:e}=o;if(e)return e;if(o.showPasswordToggle)return"click"}),T=v(!1),_e=y(()=>{const{textDecoration:e}=o;return e?Array.isArray(e)?e.map(r=>({textDecoration:r})):[{textDecoration:e}]:["",""]}),se=v(void 0),Fe=()=>{var e,r;if(o.type==="textarea"){const{autosize:n}=o;if(n&&(se.value=(r=(e=A.value)===null||e===void 0?void 0:e.$el)===null||r===void 0?void 0:r.offsetWidth),!s.value||typeof n=="boolean")return;const{paddingTop:c,paddingBottom:d,lineHeight:f}=window.getComputedStyle(s.value),R=Number(c.slice(0,-2)),_=Number(d.slice(0,-2)),F=Number(f.slice(0,-2)),{value:I}=Z;if(!I)return;if(n.minRows){const D=Math.max(n.minRows,1),te=`${R+_+F*D}px`;I.style.minHeight=te}if(n.maxRows){const D=`${R+_+F*n.maxRows}px`;I.style.maxHeight=D}}},Be=y(()=>{const{maxlength:e}=o;return e===void 0?void 0:Number(e)});rr(()=>{const{value:e}=w;Array.isArray(e)||ne(e)});const Ee=nr().proxy;function N(e){const{onUpdateValue:r,"onUpdate:value":n,onInput:c}=o,{nTriggerFormInput:d}=P;r&&p(r,e),n&&p(n,e),c&&p(c,e),O.value=e,d()}function H(e){const{onChange:r}=o,{nTriggerFormChange:n}=P;r&&p(r,e),O.value=e,n()}function $e(e){const{onBlur:r}=o,{nTriggerFormBlur:n}=P;r&&p(r,e),n()}function Pe(e){const{onFocus:r}=o,{nTriggerFormFocus:n}=P;r&&p(r,e),n()}function Me(e){const{onClear:r}=o;r&&p(r,e)}function ke(e){const{onInputBlur:r}=o;r&&p(r,e)}function Te(e){const{onInputFocus:r}=o;r&&p(r,e)}function Ie(){const{onDeactivate:e}=o;e&&p(e)}function De(){const{onActivate:e}=o;e&&p(e)}function Ve(e){const{onClick:r}=o;r&&p(r,e)}function We(e){const{onWrapperFocus:r}=o;r&&p(r,e)}function Oe(e){const{onWrapperBlur:r}=o;r&&p(r,e)}function Ne(){S.value=!0}function He(e){S.value=!1,e.target===W.value?j(e,1):j(e,0)}function j(e,r=0,n="input"){const c=e.target.value;if(ne(c),o.type==="textarea"){const{value:f}=A;f&&f.syncUnifiedContainer()}if(G=c,S.value)return;const d=c;if(!o.pair)n==="input"?N(d):H(d);else{let{value:f}=w;Array.isArray(f)?f=[...f]:f=["",""],f[r]=d,n==="input"?N(f):H(f)}Ee.$forceUpdate()}function je(e){ke(e),e.relatedTarget===i.value&&Ie(),e.relatedTarget!==null&&(e.relatedTarget===x.value||e.relatedTarget===W.value||e.relatedTarget===s.value)||(k.value=!1),U(e,"blur")}function Ue(e){Te(e),E.value=!0,k.value=!0,De(),U(e,"focus")}function Ke(e){o.passivelyActivated&&(Oe(e),U(e,"blur"))}function Le(e){o.passivelyActivated&&(E.value=!0,We(e),U(e,"focus"))}function U(e,r){e.relatedTarget!==null&&(e.relatedTarget===x.value||e.relatedTarget===W.value||e.relatedTarget===s.value||e.relatedTarget===i.value)||(r==="focus"?(Pe(e),E.value=!0):r==="blur"&&($e(e),E.value=!1))}function Ye(e,r){j(e,r,"change")}function Xe(e){Ve(e)}function Je(e){Me(e),o.pair?(N(["",""]),H(["",""])):(N(""),H(""))}function Ze(e){const{onMousedown:r}=o;r&&r(e);const{tagName:n}=e.target;if(n!=="INPUT"&&n!=="TEXTAREA"){if(o.resizable){const{value:c}=i;if(c){const{left:d,top:f,width:R,height:_}=c.getBoundingClientRect(),F=14;if(d+R-F<e.clientX&&e.clientY<d+R&&f+_-F<e.clientY&&e.clientY<f+_)return}}e.preventDefault(),E.value||ce()}}function qe(){var e;M.value=!0,o.type==="textarea"&&((e=A.value)===null||e===void 0||e.handleMouseEnterWrapper())}function Ge(){var e;M.value=!1,o.type==="textarea"&&((e=A.value)===null||e===void 0||e.handleMouseLeaveWrapper())}function Qe(){B.value||oe.value==="click"&&(T.value=!T.value)}function eo(e){if(B.value)return;e.preventDefault();const r=c=>{c.preventDefault(),ge("mouseup",document,r)};if(pe("mouseup",document,r),oe.value!=="mousedown")return;T.value=!0;const n=()=>{T.value=!1,ge("mouseup",document,n)};pe("mouseup",document,n)}function oo(e){var r;switch((r=o.onKeydown)===null||r===void 0||r.call(o,e),e.code){case"Escape":re();break;case"Enter":case"NumpadEnter":ro(e);break}}function ro(e){var r,n;if(o.passivelyActivated){const{value:c}=k;if(c){o.internalDeactivateOnEnter&&re();return}e.preventDefault(),o.type==="textarea"?(r=s.value)===null||r===void 0||r.focus():(n=x.value)===null||n===void 0||n.focus()}}function re(){o.passivelyActivated&&(k.value=!1,hr(()=>{var e;(e=i.value)===null||e===void 0||e.focus()}))}function ce(){var e,r,n;B.value||(o.passivelyActivated?(e=i.value)===null||e===void 0||e.focus():((r=s.value)===null||r===void 0||r.focus(),(n=x.value)===null||n===void 0||n.focus()))}function no(){var e;!((e=i.value)===null||e===void 0)&&e.contains(document.activeElement)&&document.activeElement.blur()}function to(){var e,r;(e=s.value)===null||e===void 0||e.select(),(r=x.value)===null||r===void 0||r.select()}function ao(){B.value||(s.value?s.value.focus():x.value&&x.value.focus())}function io(){const{value:e}=i;(e==null?void 0:e.contains(document.activeElement))&&e!==document.activeElement&&re()}function ne(e){const{type:r,pair:n,autosize:c}=o;if(!n&&c)if(r==="textarea"){const{value:d}=Z;d&&(d.textContent=(e!=null?e:"")+`\r
`)}else{const{value:d}=le;d&&(e?d.textContent=e:d.innerHTML="&nbsp;")}}function lo(){Fe()}const de=v({top:"0"});function so(e){var r;const{scrollTop:n}=e.target;de.value.top=`${-n}px`,(r=A.value)===null||r===void 0||r.syncUnifiedContainer()}let K=null;fe(()=>{const{autosize:e,type:r}=o;e&&r==="textarea"?K=ve(w,n=>{!Array.isArray(n)&&n!==G&&ne(n)}):K==null||K()});let L=null;fe(()=>{o.type==="textarea"?L=ve(w,e=>{var r;!Array.isArray(e)&&e!==G&&((r=A.value)===null||r===void 0||r.syncUnifiedContainer())}):L==null||L()}),tr(we,{mergedValueRef:w,maxlengthRef:Be,mergedClsPrefixRef:b});const co={wrapperElRef:i,inputElRef:x,textareaElRef:s,isCompositing:S,focus:ce,blur:no,select:to,deactivate:io,activate:ao},uo=ar("Input",h,b),ue=y(()=>{const{value:e}=q,{common:{cubicBezierEaseInOut:r},self:{color:n,borderRadius:c,textColor:d,caretColor:f,caretColorError:R,caretColorWarning:_,textDecorationColor:F,border:I,borderDisabled:D,borderHover:te,borderFocus:ho,placeholderColor:fo,placeholderColorDisabled:vo,lineHeightTextarea:po,colorDisabled:go,colorFocus:bo,textColorDisabled:mo,boxShadowFocus:xo,iconSize:wo,colorFocusWarning:yo,boxShadowFocusWarning:Co,borderWarning:zo,borderFocusWarning:Ao,borderHoverWarning:So,colorFocusError:Ro,boxShadowFocusError:_o,borderError:Fo,borderFocusError:Bo,borderHoverError:Eo,clearSize:$o,clearColor:Po,clearColorHover:Mo,clearColorPressed:ko,iconColor:To,iconColorDisabled:Io,suffixTextColor:Do,countTextColor:Vo,iconColorHover:Wo,iconColorPressed:Oo,loadingColor:No,loadingColorError:Ho,loadingColorWarning:jo,[ae("padding",e)]:Uo,[ae("fontSize",e)]:Ko,[ae("height",e)]:Lo}}=l.value,{left:Yo,right:Xo}=ir(Uo);return{"--n-bezier":r,"--n-count-text-color":Vo,"--n-color":n,"--n-font-size":Ko,"--n-border-radius":c,"--n-height":Lo,"--n-padding-left":Yo,"--n-padding-right":Xo,"--n-text-color":d,"--n-caret-color":f,"--n-text-decoration-color":F,"--n-border":I,"--n-border-disabled":D,"--n-border-hover":te,"--n-border-focus":ho,"--n-placeholder-color":fo,"--n-placeholder-color-disabled":vo,"--n-icon-size":wo,"--n-line-height-textarea":po,"--n-color-disabled":go,"--n-color-focus":bo,"--n-text-color-disabled":mo,"--n-box-shadow-focus":xo,"--n-loading-color":No,"--n-caret-color-warning":_,"--n-color-focus-warning":yo,"--n-box-shadow-focus-warning":Co,"--n-border-warning":zo,"--n-border-focus-warning":Ao,"--n-border-hover-warning":So,"--n-loading-color-warning":jo,"--n-caret-color-error":R,"--n-color-focus-error":Ro,"--n-box-shadow-focus-error":_o,"--n-border-error":Fo,"--n-border-focus-error":Bo,"--n-border-hover-error":Eo,"--n-loading-color-error":Ho,"--n-clear-color":Po,"--n-clear-size":$o,"--n-clear-color-hover":Mo,"--n-clear-color-pressed":ko,"--n-icon-color":To,"--n-icon-color-hover":Wo,"--n-icon-color-pressed":Oo,"--n-icon-color-disabled":Io,"--n-suffix-text-color":Do}}),$=C?lr("input",y(()=>{const{value:e}=q;return e[0]}),ue,o):void 0;return Object.assign(Object.assign({},co),{wrapperElRef:i,inputElRef:x,inputMirrorElRef:le,inputEl2Ref:W,textareaElRef:s,textareaMirrorElRef:Z,textareaScrollbarInstRef:A,rtlEnabled:uo,uncontrolledValue:O,mergedValue:w,passwordVisible:T,mergedPlaceholder:Q,showPlaceholder1:Ae,showPlaceholder2:Se,mergedFocus:ee,isComposing:S,activated:k,showClearButton:Re,mergedSize:q,mergedDisabled:B,textDecorationStyle:_e,mergedClsPrefix:b,mergedBordered:z,mergedShowPasswordOn:oe,placeholderStyle:de,mergedStatus:ze,textAreaScrollContainerWidth:se,handleTextAreaScroll:so,handleCompositionStart:Ne,handleCompositionEnd:He,handleInput:j,handleInputBlur:je,handleInputFocus:Ue,handleWrapperBlur:Ke,handleWrapperFocus:Le,handleMouseEnter:qe,handleMouseLeave:Ge,handleMouseDown:Ze,handleChange:Ye,handleClick:Xe,handleClear:Je,handlePasswordToggleClick:Qe,handlePasswordToggleMousedown:eo,handleWrapperKeyDown:oo,handleTextAreaMirrorResize:lo,getTextareaScrollContainer:()=>s.value,mergedTheme:l,cssVars:C?void 0:ue,themeClass:$==null?void 0:$.themeClass,onRender:$==null?void 0:$.onRender})},render(){const{mergedClsPrefix:o,mergedStatus:b,themeClass:z,onRender:C,$slots:h}=this;return C==null||C(),t("div",{ref:"wrapperElRef",class:[`${o}-input`,z,b&&`${o}-input--${b}-status`,{[`${o}-input--rtl`]:this.rtlEnabled,[`${o}-input--disabled`]:this.mergedDisabled,[`${o}-input--textarea`]:this.type==="textarea",[`${o}-input--resizable`]:this.resizable&&!this.autosize,[`${o}-input--autosize`]:this.autosize,[`${o}-input--round`]:this.round&&this.type!=="textarea",[`${o}-input--pair`]:this.pair,[`${o}-input--focus`]:this.mergedFocus,[`${o}-input--stateful`]:this.stateful}],style:this.cssVars,tabindex:!this.mergedDisabled&&this.passivelyActivated&&!this.activated?0:void 0,onFocus:this.handleWrapperFocus,onBlur:this.handleWrapperBlur,onClick:this.handleClick,onMousedown:this.handleMouseDown,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd,onKeyup:this.onKeyup,onKeydown:this.handleWrapperKeyDown},t("div",{class:`${o}-input-wrapper`},Y(h.prefix,l=>l&&t("div",{class:`${o}-input__prefix`},l)),this.type==="textarea"?t(sr,{ref:"textareaScrollbarInstRef",class:`${o}-input__textarea`,container:this.getTextareaScrollContainer,triggerDisplayManually:!0,useUnifiedContainer:!0},{default:()=>{const{textAreaScrollContainerWidth:l}=this,i={width:this.autosize&&l&&`${l}px`};return t(cr,null,t("textarea",Object.assign({},this.inputProps,{ref:"textareaElRef",class:`${o}-input__textarea-el`,autofocus:this.autofocus,rows:Number(this.rows),placeholder:this.placeholder,value:this.mergedValue,disabled:this.mergedDisabled,maxlength:this.maxlength,minlength:this.minlength,readonly:this.readonly,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,style:[this.textDecorationStyle[0],i],onBlur:this.handleInputBlur,onFocus:this.handleInputFocus,onInput:this.handleInput,onChange:this.handleChange,onScroll:this.handleTextAreaScroll})),this.showPlaceholder1?t("div",{class:`${o}-input__placeholder`,style:[this.placeholderStyle,i],key:"placeholder"},this.mergedPlaceholder[0]):null,this.autosize?t(dr,{onResize:this.handleTextAreaMirrorResize},{default:()=>t("div",{ref:"textareaMirrorElRef",class:`${o}-input__textarea-mirror`,key:"mirror"})}):null)}}):t("div",{class:`${o}-input__input`},t("input",Object.assign({type:this.type==="password"&&this.mergedShowPasswordOn&&this.passwordVisible?"text":this.type},this.inputProps,{ref:"inputElRef",class:`${o}-input__input-el`,style:this.textDecorationStyle[0],tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[0],disabled:this.mergedDisabled,maxlength:this.maxlength,minlength:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[0]:this.mergedValue,readonly:this.readonly,autofocus:this.autofocus,size:this.attrSize,onBlur:this.handleInputBlur,onFocus:this.handleInputFocus,onInput:l=>this.handleInput(l,0),onChange:l=>this.handleChange(l,0)})),this.showPlaceholder1?t("div",{class:`${o}-input__placeholder`},t("span",null,this.mergedPlaceholder[0])):null,this.autosize?t("div",{class:`${o}-input__input-mirror`,key:"mirror",ref:"inputMirrorElRef"},"\xA0"):null),!this.pair&&Y(h.suffix,l=>l||this.clearable||this.showCount||this.mergedShowPasswordOn||this.loading!==void 0?t("div",{class:`${o}-input__suffix`},[Y(h.clear,i=>(this.clearable||i)&&t(be,{clsPrefix:o,show:this.showClearButton,onClear:this.handleClear},{default:()=>i})),this.internalLoadingBeforeSuffix?null:l,this.loading!==void 0?t(vr,{clsPrefix:o,loading:this.loading,showArrow:!1,showClear:!1,style:this.cssVars}):null,this.internalLoadingBeforeSuffix?l:null,this.showCount&&this.type!=="textarea"?t(me,null,{default:i=>{var s;return(s=h.count)===null||s===void 0?void 0:s.call(h,i)}}):null,this.mergedShowPasswordOn&&this.type==="password"?t(ur,{clsPrefix:o,class:`${o}-input__eye`,onMousedown:this.handlePasswordToggleMousedown,onClick:this.handlePasswordToggleClick},{default:()=>this.passwordVisible?ie(h["password-visible-icon"],()=>[t(gr,null)]):ie(h["password-invisible-icon"],()=>[t(br,null)])}):null]):null)),this.pair?t("span",{class:`${o}-input__separator`},ie(h.separator,()=>[this.separator])):null,this.pair?t("div",{class:`${o}-input-wrapper`},t("div",{class:`${o}-input__input`},t("input",{ref:"inputEl2Ref",type:this.type,class:`${o}-input__input-el`,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[1],disabled:this.mergedDisabled,maxlength:this.maxlength,minlength:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[1]:void 0,readonly:this.readonly,style:this.textDecorationStyle[1],onBlur:this.handleInputBlur,onFocus:this.handleInputFocus,onInput:l=>this.handleInput(l,1),onChange:l=>this.handleChange(l,1)}),this.showPlaceholder2?t("div",{class:`${o}-input__placeholder`},t("span",null,this.mergedPlaceholder[1])):null),Y(h.suffix,l=>(this.clearable||l)&&t("div",{class:`${o}-input__suffix`},[this.clearable&&t(be,{clsPrefix:o,show:this.showClearButton,onClear:this.handleClear},{default:()=>{var i;return(i=h.clear)===null||i===void 0?void 0:i.call(h)}}),l]))):null,this.mergedBordered?t("div",{class:`${o}-input__border`}):null,this.mergedBordered?t("div",{class:`${o}-input__state-border`}):null,this.showCount&&this.type==="textarea"?t(me,null,{default:l=>{var i;return(i=h.count)===null||i===void 0?void 0:i.call(h,l)}}):null)}});export{Ar as _};
