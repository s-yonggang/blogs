import{_ as a,o as s,c as l,Q as n}from"./chunks/framework.5b0c684c.js";const d=JSON.parse('{"title":"数值的扩展","description":"","frontmatter":{},"headers":[],"relativePath":"web-core/es6/1-5.md","filePath":"web-core/es6/1-5.md","lastUpdated":1729031503000}'),e={name:"web-core/es6/1-5.md"},o=n(`<h1 id="数值的扩展" tabindex="-1">数值的扩展 <a class="header-anchor" href="#数值的扩展" aria-label="Permalink to &quot;数值的扩展&quot;">​</a></h1><h2 id="二进制和八进制表示法" tabindex="-1">二进制和八进制表示法 <a class="header-anchor" href="#二进制和八进制表示法" aria-label="Permalink to &quot;二进制和八进制表示法&quot;">​</a></h2><p>ES6 提供了二进制和八进制数值的新的写法</p><ul><li>0b（0B）：二进制</li><li>0o（0O）：八进制</li></ul><h2 id="number静态方法和属性拓展" tabindex="-1">Number静态方法和属性拓展 <a class="header-anchor" href="#number静态方法和属性拓展" aria-label="Permalink to &quot;Number静态方法和属性拓展&quot;">​</a></h2><ul><li>Number.isFinite()</li><li>Number.isNaN()</li><li>Number.parseInt()</li><li>Number.parseFloat()</li><li>Number.isInteger()</li><li>Number.isSafeInteger()</li><li>Number.EPSILON</li></ul><h2 id="math-对象的扩展" tabindex="-1">Math 对象的扩展 <a class="header-anchor" href="#math-对象的扩展" aria-label="Permalink to &quot;Math 对象的扩展&quot;">​</a></h2><ul><li>Math.trunc()</li><li>Math.sign()</li><li>Math.cbrt()</li><li>Math.clz32()</li><li>Math.imul()</li><li>Math.fround()</li><li>Math.hypot()</li><li>Math.expm1()</li><li>Math.log1p()</li><li>Math.log10()</li><li>Math.log2()</li><li>Math.sinh(x)</li><li>Math.cosh(x)</li><li>Math.tanh(x)</li><li>Math.asinh(x)</li><li>Math.acosh(x)</li><li>Math.atanh(x)</li></ul><h2 id="指数运算符" tabindex="-1">指数运算符 <a class="header-anchor" href="#指数运算符" aria-label="Permalink to &quot;指数运算符&quot;">​</a></h2><ul><li>ES2016 新增了一个指数运算符（**）。</li><li>指数运算符可以与等号结合，形成一个新的赋值运算符（**=）。</li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">a </span><span style="color:#F97583;">**=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 等同于 a = a * a;</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> b </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">b </span><span style="color:#F97583;">**=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 等同于 b = b * b * b;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> a </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">a </span><span style="color:#D73A49;">**=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 等同于 a = a * a;</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> b </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">b </span><span style="color:#D73A49;">**=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 等同于 b = b * b * b;</span></span></code></pre></div><h2 id="bigint-数据类型" tabindex="-1">BigInt 数据类型 <a class="header-anchor" href="#bigint-数据类型" aria-label="Permalink to &quot;BigInt 数据类型&quot;">​</a></h2><ul><li>ES2020 引入了一种新的数据类型 BigInt（大整数），来解决这个问题。BigInt 只用来表示整数，没有位数的限制，任何位数的整数都可以精确表示。</li></ul>`,13),t=[o];function p(i,r,c,h,E,y){return s(),l("div",null,t)}const u=a(e,[["render",p]]);export{d as __pageData,u as default};
