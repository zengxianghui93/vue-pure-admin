var I=Object.defineProperty,B=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var h=(n,e,t)=>e in n?I(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,x=(n,e)=>{for(var t in e||(e={}))b.call(e,t)&&h(n,t,e[t]);if(f)for(var t of f(e))T.call(e,t)&&h(n,t,e[t]);return n},k=(n,e)=>B(n,N(e));import{y as q,z,L as d,t as P,N as R,O as S,aU as w,I as u,o as H,D as L,S as l,q as c,H as i,C as o,G as M,J as p,u as O}from"./index.12b88443.js";import{u as U}from"./hooks.6c225d1f.js";const G={class:"card-header"},J={class:"font-medium"},K=p("\u83DC\u5355\u6811\u7ED3\u6784\uFF08\u91C7\u7528element-plus\u7684 "),Q=p("Tree V2"),j=p("\u7EC4\u4EF6\u5E76\u652F\u6301\u56FD\u9645\u5316\uFF09"),A={name:"reMenuTree"},Z=q(k(x({},A),{setup(n){const{t:e}=z(),t=d("");let v=d({value:"uniqueId",children:"children"});const _=d();let m=P(()=>R(S().menusTree)),C=w(m.value);const y=s=>{_.value.filter(s)},F=(s,a)=>O(a.meta.title,a.meta.i18n).indexOf(s)!==-1;return(s,a)=>{const E=u("el-link"),V=u("el-input"),g=u("el-tree-v2"),D=u("el-card");return H(),L(D,null,{header:l(()=>[c("div",G,[c("span",J,[K,i(E,{href:"https://element-plus.gitee.io/zh-CN/component/tree-v2.html",target:"_blank",icon:o(U)("node-tree"),style:{"font-size":"16px",margin:"0 5px 4px 0"}},{default:l(()=>[Q]),_:1},8,["icon"]),j])])]),default:l(()=>[i(V,{class:"mb-4",modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=r=>t.value=r),placeholder:"\u8BF7\u8F93\u5165\u5173\u952E\u5B57\u67E5\u627E",clearable:"",onInput:y},null,8,["modelValue"]),i(g,{ref_key:"treeRef",ref:_,data:o(m),props:o(v),"show-checkbox":"",height:500,"filter-method":F,"default-expanded-keys":o(C)},{default:l(({data:r})=>[c("span",null,M(o(e)(r.meta.title)),1)]),_:1},8,["data","props","default-expanded-keys"])]),_:1})}}}));export{Z as default};
