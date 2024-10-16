import{_ as o,C as s,o as n,c,k as e,a as t,H as a,Q as i}from"./chunks/framework.5b0c684c.js";const v=JSON.parse('{"title":"let const","description":"","frontmatter":{},"headers":[],"relativePath":"web-core/es6/1-1.md","filePath":"web-core/es6/1-1.md","lastUpdated":1729031503000}'),r={name:"web-core/es6/1-1.md"},_=i("",7),d=e("h2",{id:"块级作用域",tabindex:"-1"},[t("块级作用域 "),e("a",{class:"header-anchor",href:"#块级作用域","aria-label":'Permalink to "块级作用域"'},"​")],-1),u=e("ul",null,[e("li",null,"块级作用域是指在一对花括号 { } 内声明的变量只能在这对{ }内访问。"),e("li",null,"块级作用域是ES6引入的特性，使用 let 和 const 关键字声明的变量具有块级作用域，增强了变量的作用范围控制和代码的可维护性。")],-1),h=e("blockquote",null,[e("p",null,[t("ES5 只有全局作用域和函数作用域，没有块级作用域，因此在编码中存在诸多问题。"),e("br"),t(" ES5 规定，函数只能在顶层作用域和函数作用域之中声明，不能在块级作用域声明。")])],-1),p=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},"编码风格推荐"),e("ol",null,[e("li",null,"建议主要使用 const"),e("li",null,"确定需要修改的变量使用 let"),e("li",null,"不使用 var")])],-1);function m(b,f,k,x,S,P){const l=s("lines");return n(),c("div",null,[_,e("p",null,[t("本质：const实际上保证的，并不是变量的值不得改动，而是变量指向的那个"),a(l,{text:"内存地址所保存的数据"}),t("不得改动。")]),d,u,h,e("p",null,[t("ES6明确允许在块级作用域之中声明函数。在块级作用域内"),a(l,{text:"函数声明语句的行为类似于let"}),t("，在块级作用域之外不可引用。")]),p])}const T=o(r,[["render",m]]);export{v as __pageData,T as default};
