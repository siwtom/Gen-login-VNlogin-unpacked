import{z as se,ap as le,aq as ce,e as D,i as t,ar as E,a as P,g as f,Z as O,d as de,m as ue,p as U,as as he,r as W,t as fe,c as V,s as v,at as T,au as d,v as be,B as L,h as i,y as m,av as ge,aw as ve,P as A}from"./main.2046a1e9.js";import{u as me}from"./use-merged-state.82643886.js";const we=e=>{const{primaryColor:r,opacityDisabled:c,borderRadius:s,textColor3:l}=e,a="rgba(0, 0, 0, .14)";return Object.assign(Object.assign({},le),{iconColor:l,textColor:"white",loadingColor:r,opacityDisabled:c,railColor:a,railColorActive:r,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:s,railBorderRadiusMedium:s,railBorderRadiusLarge:s,buttonBorderRadiusSmall:s,buttonBorderRadiusMedium:s,buttonBorderRadiusLarge:s,boxShadowFocus:`0 0 0 2px ${ce(r,{alpha:.2})}`})},pe={name:"Switch",common:se,self:we};var ye=pe,xe=D("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[t("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),t("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),t("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),D("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[E({originalTransform:"translateX(-50%) translateY(-50%)"})]),t("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),t("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),t("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),P("&:focus",[t("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),f("round",[t("rail",{borderRadius:"calc(var(--n-rail-height) / 2)"},[t("button",{borderRadius:"calc(var(--n-button-height) / 2)"})])]),O("disabled",[O("icon",[f("pressed",[t("rail",[t("button",{maxWidth:"var(--n-button-width-pressed)"})])]),t("rail",[P("&:active",[t("button",{maxWidth:"var(--n-button-width-pressed)"})])]),f("active",[f("pressed",[t("rail",[t("button",{left:"calc(100% - var(--n-offset) - var(--n-button-width-pressed))"})])]),t("rail",[P("&:active",[t("button",{left:"calc(100% - var(--n-offset) - var(--n-button-width-pressed))"})])])])])]),f("active",[t("rail",[t("button",{left:"calc(100% - (var(--n-rail-height) + var(--n-button-width)) / 2)"})])]),t("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[t("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[E()]),t("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-width);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),f("active",[t("rail","background-color: var(--n-rail-color-active);")]),f("disabled",[t("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)]),f("loading",[t("rail",`
 pointer-events: none;
 `)])]);const ke=Object.assign(Object.assign({},U.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,onChange:[Function,Array]});var Be=de({name:"Switch",props:ke,setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:c}=ue(e),s=U("Switch","-switch",xe,ye,e,r),l=he(e),{mergedSizeRef:a,mergedDisabledRef:b}=l,y=W(e.defaultValue),R=fe(e,"value"),g=me(R,y),x=V(()=>g.value===e.checkedValue),w=W(!1),o=W(!1),u=V(()=>{const{railStyle:n}=e;if(!!n)return n({focused:o.value,checked:x.value})});function h(n){const{"onUpdate:value":B,onChange:C,onUpdateValue:_}=e,{nTriggerFormInput:z,nTriggerFormChange:$}=l;B&&A(B,n),_&&A(_,n),C&&A(C,n),y.value=n,z(),$()}function j(){const{nTriggerFormFocus:n}=l;n()}function K(){const{nTriggerFormBlur:n}=l;n()}function N(){e.loading||b.value||(g.value!==e.checkedValue?h(e.checkedValue):h(e.uncheckedValue))}function I(){o.value=!0,j()}function H(){o.value=!1,K(),w.value=!1}function X(n){e.loading||b.value||n.code==="Space"&&(g.value!==e.checkedValue?h(e.checkedValue):h(e.uncheckedValue),w.value=!1)}function Y(n){e.loading||b.value||n.code==="Space"&&(n.preventDefault(),w.value=!0)}const M=V(()=>{const{value:n}=a,{self:{opacityDisabled:B,railColor:C,railColorActive:_,buttonBoxShadow:z,buttonColor:$,boxShadowFocus:Z,loadingColor:q,textColor:J,iconColor:G,[v("buttonHeight",n)]:k,[v("buttonWidth",n)]:Q,[v("buttonWidthPressed",n)]:ee,[v("railHeight",n)]:S,[v("railWidth",n)]:F,[v("railBorderRadius",n)]:te,[v("buttonBorderRadius",n)]:ne},common:{cubicBezierEaseInOut:oe}}=s.value,ae=T((d(S)-d(k))/2),ie=T(Math.max(d(S),d(k))),re=d(S)>d(k)?F:T(d(F)+d(k)-d(S));return{"--n-bezier":oe,"--n-button-border-radius":ne,"--n-button-box-shadow":z,"--n-button-color":$,"--n-button-width":Q,"--n-button-width-pressed":ee,"--n-button-height":k,"--n-height":ie,"--n-offset":ae,"--n-opacity-disabled":B,"--n-rail-border-radius":te,"--n-rail-color":C,"--n-rail-color-active":_,"--n-rail-height":S,"--n-rail-width":F,"--n-width":re,"--n-box-shadow-focus":Z,"--n-loading-color":q,"--n-text-color":J,"--n-icon-color":G}}),p=c?be("switch",V(()=>a.value[0]),M,e):void 0;return{handleClick:N,handleBlur:H,handleFocus:I,handleKeyup:X,handleKeydown:Y,mergedRailStyle:u,pressed:w,mergedClsPrefix:r,mergedValue:g,checked:x,mergedDisabled:b,cssVars:c?void 0:M,themeClass:p==null?void 0:p.themeClass,onRender:p==null?void 0:p.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:r,checked:c,mergedRailStyle:s,onRender:l,$slots:a}=this;l==null||l();const{checked:b,unchecked:y,icon:R,"checked-icon":g,"unchecked-icon":x}=a,w=!(L(R)&&L(g)&&L(x));return i("div",{role:"switch","aria-checked":c,class:[`${e}-switch`,this.themeClass,w&&`${e}-switch--icon`,c&&`${e}-switch--active`,r&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},i("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:s},m(b,o=>m(y,u=>o||u?i("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},i("div",{class:`${e}-switch__rail-placeholder`},i("div",{class:`${e}-switch__button-placeholder`}),o),i("div",{class:`${e}-switch__rail-placeholder`},i("div",{class:`${e}-switch__button-placeholder`}),u)):null)),i("div",{class:`${e}-switch__button`},m(R,o=>m(g,u=>m(x,h=>i(ge,null,{default:()=>this.loading?i(ve,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(u||o)?i("div",{class:`${e}-switch__button-icon`,key:u?"checked-icon":"icon"},u||o):!this.checked&&(h||o)?i("div",{class:`${e}-switch__button-icon`,key:h?"unchecked-icon":"icon"},h||o):null})))),m(b,o=>o&&i("div",{key:"checked",class:`${e}-switch__checked`},o)),m(y,o=>o&&i("div",{key:"unchecked",class:`${e}-switch__unchecked`},o)))))}});const Ce=()=>{const e=window.navigator.userAgent,r=window.navigator.platform,c=["Macintosh","MacIntel","MacPPC","Mac68K"],s=["Win32","Win64","Windows","WinCE"],l=["iPhone","iPad","iPod"];let a=null;return c.includes(r)?a="Mac OS":l.includes(r)?a="iOS":s.includes(r)?a="Windows":/Android/.test(e)?a="Android":!a&&/Linux/.test(r)&&(a="Linux"),a},_e=()=>Intl.DateTimeFormat().resolvedOptions().timeZone,Ve=()=>{const e=document.createElement("script");e.text=`
  (function(d,t) {
var BASE_URL="https://chat.genlogin.com";
var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
g.src=BASE_URL+"/packs/js/sdk.js";
g.defer = true;
g.async = true;
s.parentNode.insertBefore(g,s);
g.onload=function(){
window.chatwootSDK.run({
websiteToken: 'Lc7yP48dszLmeefgswoyoMJE',
baseUrl: BASE_URL
})
}
})(document,"script");`,document.head.appendChild(e)};export{Be as _,_e as a,Ce as g,Ve as l};
