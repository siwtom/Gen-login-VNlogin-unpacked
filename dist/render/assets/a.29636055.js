import{e as c,d,m,p as t,ax as u,c as h,v,h as p}from"./main.2046a1e9.js";var f=c("a",`
 cursor: pointer;
 transition:
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 text-decoration-color: var(--n-text-color);
 color: var(--n-text-color);
`);const x=Object.assign({},t.props);var g=d({name:"A",props:x,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:n}=m(e),a=t("Typography","-a",f,u,e,o),r=h(()=>{const{common:{cubicBezierEaseInOut:i},self:{aTextColor:l}}=a.value;return{"--n-text-color":l,"--n-bezier":i}}),s=n?v("a",void 0,r,e):void 0;return{mergedClsPrefix:o,cssVars:n?void 0:r,themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),p("a",{class:[`${this.mergedClsPrefix}-a`,this.themeClass],style:this.cssVars},this.$slots)}});export{g as _};
