import{B as S,C as _,c as h}from"./index-B9h1x3Kg.js";import{d as j,u as g,b as F}from"./base-gfUM21KV.js";import{w as I,u as c,e as r,g as y,l as u,h as v,f as K,y as P,a8 as E}from"./index-CGGpvY1o.js";const J=j([String,Object,Function]),L={validating:S,success:_,error:h},N=["","default","small","large"],U=({from:o,replacement:e,scope:s,version:n,ref:t,type:a="API"},i)=>{I(()=>c(i),l=>{},{immediate:!0})},b=o=>{const e=y();return r(()=>{var s,n;return(n=(s=e==null?void 0:e.proxy)==null?void 0:s.$props)==null?void 0:n[o]})},m={prefix:Math.floor(Math.random()*1e4),current:0},w=Symbol("elIdInjection"),D=()=>y()?u(w,m):m,R=o=>{const e=D(),s=g();return r(()=>c(o)||`${s.value}-id-${e.prefix}-${e.current++}`)},V=F({type:String,values:N,required:!1}),T=Symbol("size"),$=()=>{const o=u(T,{});return r(()=>c(o.size)||"")},f=Symbol("formContextKey"),z=Symbol("formItemContextKey"),Y=(o,e={})=>{const s=v(void 0),n=e.prop?s:b("size"),t=e.global?s:$(),a=e.form?{size:void 0}:u(f,void 0),i=e.formItem?{size:void 0}:u(z,void 0);return r(()=>n.value||c(o)||(i==null?void 0:i.size)||(a==null?void 0:a.size)||t.value||"")},q=o=>{const e=b("disabled"),s=u(f,void 0);return r(()=>e.value||c(o)||(s==null?void 0:s.disabled)||!1)},A=()=>{const o=u(f,void 0),e=u(z,void 0);return{form:o,formItem:e}},C=(o,{formItemContext:e,disableIdGeneration:s,disableIdManagement:n})=>{s||(s=v(!1)),n||(n=v(!1));const t=v();let a;const i=r(()=>{var l;return!!(!(o.label||o.ariaLabel)&&e&&e.inputIds&&((l=e.inputIds)==null?void 0:l.length)<=1)});return K(()=>{a=I([P(o,"id"),s],([l,p])=>{const d=l??(p?void 0:R().value);d!==t.value&&(e!=null&&e.removeInputId&&(t.value&&e.removeInputId(t.value),!(n!=null&&n.value)&&!p&&d&&e.addInputId(d)),t.value=d)},{immediate:!0})}),E(()=>{a&&a(),e!=null&&e.removeInputId&&t.value&&e.removeInputId(t.value)}),{isLabeledByFormItem:i,inputId:t}};export{L as V,V as a,A as b,C as c,Y as d,q as e,z as f,R as g,N as h,J as i,$ as j,U as k,D as u};
