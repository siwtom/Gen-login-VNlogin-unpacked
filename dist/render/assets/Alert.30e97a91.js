import{z as F,ay as B,J as f,aq as u,e as y,i as c,_ as M,g as j,a as k,d as O,m as N,p as E,D as V,c as S,az as D,s as g,v as q,r as J,h as s,aA as K,aB as G,F as Q,y as U,N as X,M as Y,aC as Z,aD as ee,aE as oe,aF as re}from"./main.2046a1e9.js";const ne=r=>{const{lineHeight:o,borderRadius:i,fontWeightStrong:m,baseColor:n,dividerColor:v,actionColor:z,textColor1:t,textColor2:a,closeColor:h,closeColorHover:C,closeColorPressed:b,infoColor:l,successColor:e,warningColor:p,errorColor:x,fontSize:T}=r;return Object.assign(Object.assign({},B),{fontSize:T,lineHeight:o,titleFontWeight:m,borderRadius:i,border:`1px solid ${v}`,color:z,titleTextColor:t,iconColor:a,contentTextColor:a,closeColor:h,closeColorHover:C,closeColorPressed:b,borderInfo:`1px solid ${f(n,u(l,{alpha:.25}))}`,colorInfo:f(n,u(l,{alpha:.08})),titleTextColorInfo:t,iconColorInfo:l,contentTextColorInfo:a,closeColorInfo:h,closeColorHoverInfo:C,closeColorPressedInfo:b,borderSuccess:`1px solid ${f(n,u(e,{alpha:.25}))}`,colorSuccess:f(n,u(e,{alpha:.08})),titleTextColorSuccess:t,iconColorSuccess:e,contentTextColorSuccess:a,closeColorSuccess:h,closeColorHoverSuccess:C,closeColorPressedSuccess:b,borderWarning:`1px solid ${f(n,u(p,{alpha:.33}))}`,colorWarning:f(n,u(p,{alpha:.08})),titleTextColorWarning:t,iconColorWarning:p,contentTextColorWarning:a,closeColorWarning:h,closeColorHoverWarning:C,closeColorPressedWarning:b,borderError:`1px solid ${f(n,u(x,{alpha:.25}))}`,colorError:f(n,u(x,{alpha:.08})),titleTextColorError:t,iconColorError:x,contentTextColorError:a,closeColorError:h,closeColorHoverError:C,closeColorPressedError:b})},te={name:"Alert",common:F,self:ne};var le=te,se=y("alert",`
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
`,[c("icon",{color:"var(--n-icon-color)"}),y("alert-body",{border:"var(--n-border)",padding:"var(--n-padding)"},[c("title",{color:"var(--n-title-text-color)"}),c("content",{color:"var(--n-content-text-color)"})]),M({originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.9)"}}),c("icon",`
 position: absolute;
 left: 0;
 top: 0;
 align-items: center;
 justify-content: center;
 display: flex;
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 margin: var(--n-icon-margin);
 `),c("close",`
 transition: color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 font-size: var(--n-close-size);
 `),j("show-icon",[y("alert-body",{paddingLeft:"calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))"})]),y("alert-body",`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[c("title",`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[k("& +",[c("content",{marginTop:"9px"})])]),c("content",{transition:"color .3s var(--n-bezier)",fontSize:"var(--n-font-size)"})]),c("icon",{transition:"color .3s var(--n-bezier)"})]);const ie=Object.assign(Object.assign({},E.props),{title:{type:String,default:void 0},showIcon:{type:Boolean,default:!0},type:{type:String,default:"default"},closable:{type:Boolean,default:!1},onClose:Function,onAfterLeave:{type:Function,default:void 0},onAfterHide:{type:Function,validator:()=>!0,default:void 0}});var ce=O({name:"Alert",inheritAttrs:!1,props:ie,setup(r){const{mergedClsPrefixRef:o,inlineThemeDisabled:i,mergedRtlRef:m}=N(r),n=E("Alert","-alert",se,le,r,o),v=V("Alert",m,o),z=S(()=>{const{common:{cubicBezierEaseInOut:l},self:e}=n.value,{fontSize:p,borderRadius:x,titleFontWeight:T,lineHeight:P,iconSize:_,iconMargin:I,iconMarginRtl:$,closeSize:A,closeMargin:R,closeMarginRtl:W,padding:w}=e,{type:d}=r,{left:H,right:L}=D(I);return{"--n-bezier":l,"--n-color":e[g("color",d)],"--n-close-color":e[g("closeColor",d)],"--n-close-color-hover":e[g("closeColorHover",d)],"--n-close-color-pressed":e[g("closeColorPressed",d)],"--n-icon-color":e[g("iconColor",d)],"--n-border":e[g("border",d)],"--n-title-text-color":e[g("titleTextColor",d)],"--n-content-text-color":e[g("contentTextColor",d)],"--n-line-height":P,"--n-border-radius":x,"--n-font-size":p,"--n-title-font-weight":T,"--n-icon-size":_,"--n-icon-margin":I,"--n-icon-margin-rtl":$,"--n-close-size":A,"--n-close-margin":R,"--n-close-margin-rtl":W,"--n-padding":w,"--n-icon-margin-left":H,"--n-icon-margin-right":L}}),t=i?q("alert",S(()=>r.type[0]),z,r):void 0,a=J(!0),h=()=>{const{onAfterLeave:l,onAfterHide:e}=r;l&&l(),e&&e()};return{rtlEnabled:v,mergedClsPrefix:o,visible:a,handleCloseClick:()=>{var l;Promise.resolve((l=r.onClose)===null||l===void 0?void 0:l.call(r)).then(e=>{e!==!1&&(a.value=!1)})},handleAfterLeave:()=>{h()},mergedTheme:n,cssVars:i?void 0:z,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var r;return(r=this.onRender)===null||r===void 0||r.call(this),s(X,{onAfterLeave:this.handleAfterLeave},{default:()=>{const{mergedClsPrefix:o,$slots:i}=this,m={class:[`${o}-alert`,this.themeClass,this.showIcon&&`${o}-alert--show-icon`,this.rtlEnabled&&`${o}-alert--rtl`],style:this.cssVars,role:"alert"};return this.visible?s("div",Object.assign({},K(this.$attrs,m)),this.closable&&s(G,{clsPrefix:o,class:`${o}-alert__close`,onClick:this.handleCloseClick}),this.showIcon&&s("div",{class:`${o}-alert__icon`,"aria-hidden":"true"},Q(i.icon,()=>[s(Y,{clsPrefix:o},{default:()=>{switch(this.type){case"success":return s(re,null);case"info":return s(oe,null);case"warning":return s(ee,null);case"error":return s(Z,null);default:return null}}})])),s("div",{class:`${o}-alert-body`},U(i.header,n=>{const v=n||this.title;return v?s("div",{class:`${o}-alert-body__title`},v):null}),i.default&&s("div",{class:`${o}-alert-body__content`},i))):null}})}});export{ce as _};
