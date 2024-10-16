import{_ as a,o as s,c as e,Q as t}from"./chunks/framework.5b0c684c.js";const l="/blogs/assets/linear-algebra_1-5_1.2a448165.png",r="/blogs/assets/linear-algebra_1-5_2.c5c89583.png",o="/blogs/assets/linear-algebra_1-5_3.20e9c99d.png",i="/blogs/assets/linear-algebra_1-5_4.43ccafb6.png",c="/blogs/assets/linear-algebra_1-5_5.cda9b22b.png",n="/blogs/assets/linear-algebra_1-5_6.86ee6185.png",_="/blogs/assets/linear-algebra_1-5_7.396cdb8b.png",p="/blogs/assets/linear-algebra_1-5_8.c0c98f9b.png",m="/blogs/assets/linear-algebra_1-5_10.9d0f605d.png",b="/blogs/assets/linear-algebra_1-5_11.7f73c718.png",d="/blogs/assets/linear-algebra_1-5_9.f5d13d5b.png",g="/blogs/assets/linear-algebra_1-6_3.66161b8e.png",u="/blogs/assets/linear-algebra_1-5_13.3a6f4434.png",h="/blogs/assets/linear-algebra_1-5_14.e4d69807.png",f="/blogs/assets/linear-algebra_1-5_15.0f1226c9.png",k="/blogs/assets/linear-algebra_1-5_16.b96f88a3.png",q="/blogs/assets/linear-algebra_1-5_17.8bea1a9b.png",P="/blogs/assets/linear-algebra_1-5_18.a82db23d.png",I=JSON.parse('{"title":"行列式的展开","description":"","frontmatter":{},"headers":[],"relativePath":"3DVisualization/linear-algebra/1-5.md","filePath":"3DVisualization/linear-algebra/1-5.md","lastUpdated":1729031503000}'),x={name:"3DVisualization/linear-algebra/1-5.md"},y=t('<h1 id="行列式的展开" tabindex="-1">行列式的展开 <a class="header-anchor" href="#行列式的展开" aria-label="Permalink to &quot;行列式的展开&quot;">​</a></h1><h2 id="为什么要展开" tabindex="-1">为什么要展开？ <a class="header-anchor" href="#为什么要展开" aria-label="Permalink to &quot;为什么要展开？&quot;">​</a></h2><p><img src="'+l+'" alt="图片"></p><p>降阶行列式，要引入两个新的念：<code>余子式</code>、<code>代数余子式</code>。</p><h2 id="余子式" tabindex="-1">余子式 <a class="header-anchor" href="#余子式" aria-label="Permalink to &quot;余子式&quot;">​</a></h2><ul><li>M<sub>ij</sub>(余子式)：选中一个元素后,直接删掉其所在的行列，剩余下来的元素按照原位置不变，再次构成的(n-1)阶行列式。</li></ul><p><img src="'+r+'" alt="图片"></p><h2 id="代数余子式" tabindex="-1">代数余子式 <a class="header-anchor" href="#代数余子式" aria-label="Permalink to &quot;代数余子式&quot;">​</a></h2><p><code>代数余子式</code> 就是<code>前面带着一个符号的余子式</code>，就叫代数余子式。</p><blockquote><p>这个符号由被选中元素的“位置”决定。</p></blockquote><details class="details custom-block"><summary>示例</summary><p><img src="'+o+'" alt="图片"></p></details><h2 id="行列式的展开定理" tabindex="-1">行列式的展开定理 <a class="header-anchor" href="#行列式的展开定理" aria-label="Permalink to &quot;行列式的展开定理&quot;">​</a></h2><ul><li>行列式 = 某一行(列)的“元素”与该行(列)的“代数余子式”对应相乘再相加。</li></ul><p><img src="'+i+'" alt="图片"></p><p>试题1： <img src="'+c+'" alt="图片"></p><details class="details custom-block"><summary>解析</summary><p><img src="'+n+'" alt="图片"></p></details><p>试题2： <img src="'+_+'" alt="图片"></p><details class="details custom-block"><summary>解析</summary><p><img src="'+p+'" alt="图片"></p></details><h2 id="拓展-替换法则" tabindex="-1">拓展--替换法则 <a class="header-anchor" href="#拓展-替换法则" aria-label="Permalink to &quot;拓展--替换法则&quot;">​</a></h2><h3 id="替换法则起源" tabindex="-1">替换法则起源 <a class="header-anchor" href="#替换法则起源" aria-label="Permalink to &quot;替换法则起源&quot;">​</a></h3><div class="info custom-block"><p class="custom-block-title">INFO</p><p>起源一： <img src="'+m+'" alt="图片"> 起源二： <img src="'+b+'" alt="图片"></p></div><h3 id="替换法则的基本原则" tabindex="-1">替换法则的基本原则 <a class="header-anchor" href="#替换法则的基本原则" aria-label="Permalink to &quot;替换法则的基本原则&quot;">​</a></h3><div class="info custom-block"><p class="custom-block-title">替换法则，代数余子式求和</p><p><img src="'+d+'" alt="图片"></p></div><details class="details custom-block"><summary>试题1：</summary><p><img src="'+g+'" alt="图片"></p><p>解析： <img src="'+u+'" alt="图片"></p><hr><p><img src="'+h+'" alt="图片"> 解析： <img src="'+f+'" alt="图片"></p></details><details class="details custom-block"><summary>试题2：</summary><p><img src="'+k+'" alt="图片"></p></details><h3 id="替换法则推论" tabindex="-1">替换法则推论 <a class="header-anchor" href="#替换法则推论" aria-label="Permalink to &quot;替换法则推论&quot;">​</a></h3><p><img src="'+q+'" alt="图片"></p><details class="details custom-block"><summary>试题1：</summary><p><img src="'+P+'" alt="图片"></p></details>',28),v=[y];function T(V,D,S,N,$,z){return s(),e("div",null,v)}const B=a(x,[["render",T]]);export{I as __pageData,B as default};