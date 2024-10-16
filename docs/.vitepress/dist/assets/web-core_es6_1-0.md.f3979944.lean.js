import{_ as t,C as o,o as s,c as i,H as n,a,Q as r,k as e}from"./chunks/framework.5b0c684c.js";const P=JSON.parse('{"title":"顶层对象属性","description":"","frontmatter":{},"headers":[],"relativePath":"web-core/es6/1-0.md","filePath":"web-core/es6/1-0.md","lastUpdated":1729031503000}'),c={name:"web-core/es6/1-0.md"},h=r("",5),_=e("blockquote",null,[e("p",null,"垫片库global-this模拟了这个提案，可以在所有环境拿到globalThis（低版本向上兼容）。")],-1),d=e("h2",{id:"申明变量的",tabindex:"-1"},[a("申明变量的 "),e("a",{class:"header-anchor",href:"#申明变量的","aria-label":'Permalink to "申明变量的"'},"​")],-1),b=e("p",null,"ES6中为了保持兼容性",-1),u=e("ul",null,[e("li",null,"var命令和function命令声明的全局变量，依旧是顶层对象的属性（保持变量提升的特性）。"),e("li",null,"let命令、const命令、class命令声明的全局变量，不属于顶层对象的属性（从 ES6 开始，全局变量将逐步与顶层对象的属性脱钩）。")],-1);function p(f,m,T,g,k,x){const l=o("lines");return s(),i("div",null,[h,n(l,{text:"ES2020 在语言标准的层面，引入globalThis作为顶层对象"}),a("。 任何环境下，globalThis都是存在的，都可以从它拿到顶层对象，指向全局环境下的this。"),_,d,b,u])}const q=t(c,[["render",p]]);export{P as __pageData,q as default};