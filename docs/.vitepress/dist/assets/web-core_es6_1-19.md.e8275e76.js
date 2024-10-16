import{_ as l,C as p,o as e,c as t,k as a,a as s,H as o,Q as r}from"./chunks/framework.5b0c684c.js";const f=JSON.parse('{"title":"module","description":"","frontmatter":{},"headers":[],"relativePath":"web-core/es6/1-19.md","filePath":"web-core/es6/1-19.md","lastUpdated":1729031503000}'),c={name:"web-core/es6/1-19.md"},E=a("h1",{id:"module",tabindex:"-1"},[s("module "),a("a",{class:"header-anchor",href:"#module","aria-label":'Permalink to "module"'},"​")],-1),y=r(`<details class="details custom-block"><summary>比如，CommonJS 模块就是对象，输入时必须查找对象属性。而ES6 模块不是对象。</summary><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// CommonJS模块</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> { stat, exists, readfile } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;fs&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">// 等同于</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> _fs </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;fs&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> stat </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> _fs.stat;</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> exists </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> _fs.exists;</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> readfile </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> _fs.readfile;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// CommonJS模块</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> { stat, exists, readfile } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;fs&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">// 等同于</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> _fs </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;fs&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> stat </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> _fs.stat;</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> exists </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> _fs.exists;</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> readfile </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> _fs.readfile;</span></span></code></pre></div><p>上面代码的实质是整体加载fs模块（即加载fs的所有方法），生成一个对象（_fs），然后再从这个对象上面读取 3 个方法。这种加载称为<code>“运行时加载”</code>，因为只有运行时才能得到这个对象，导致完全没办法在编译时做“静态优化”。</p><hr><p>ES6 模块是通过export命令显式指定输出的代码，再通过import命令输入。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { stat, exists, readFile } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;fs&#39;</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { stat, exists, readFile } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;fs&#39;</span><span style="color:#24292E;">;</span></span></code></pre></div><p>上面代码的实质是从fs模块加载 3 个方法，其他方法不加载。这种加载称为<code>“编译时加载”或静态加载</code>，即 ES 可以在编译时就完成模块加载，效率要比 CommonJS 模块的加载方式高。</p><p>编译时加载，使得静态分析成为可能。有了它，就能进一步拓宽 JavaScript 的语法，比如引入宏（macro）和类型检验（type system）这些只能靠静态分析实现的功能。</p></details><h2 id="import" tabindex="-1">import() <a class="header-anchor" href="#import" aria-label="Permalink to &quot;import()&quot;">​</a></h2><ul><li>import命令会被 JavaScript 引擎静态分析，先于模块内的其他语句执行。也就是说，import和export命令只能在模块的顶层，不能在代码块之中。</li><li>ES2020提案 引入<code>import(specifier)</code>函数，支持动态加载模块。它是运行时执行（异步）。 <blockquote><p>import函数的参数specifier，指定所要加载的模块的位置。import命令能够接受什么参数，import()函数就能接受什么参数，两者区别主要是后者为动态加载。</p></blockquote></li></ul><h2 id="export-命令" tabindex="-1">export 命令 <a class="header-anchor" href="#export-命令" aria-label="Permalink to &quot;export 命令&quot;">​</a></h2><p>模块功能主要由两个命令构成：export和import。export命令用于规定模块的对外接口，import命令用于输入其他模块提供的功能。</p><ol><li>一个模块就是一个独立的文件。该文件内部的所有变量，外部无法获取。使用<code>export</code>关键字可以导出内部变量。</li></ol><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 第一种</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> variable1 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> variable2 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 第二种</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> variable1 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> variable2 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> { variable1,variable2};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 第一种</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> variable1 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> variable2 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 第二种</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> variable1 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> variable2 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> { variable1,variable2};</span></span></code></pre></div><ol start="2"><li>export输出的变量就是本来的名字，可以使用<code>as</code>关键字重命名。</li></ol><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> variable1 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> variable2 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  v1 </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> variable1,</span></span>
<span class="line"><span style="color:#E1E4E8;">  v2 </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> variable1,</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> variable1 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> variable2 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  v1 </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> variable1,</span></span>
<span class="line"><span style="color:#24292E;">  v2 </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> variable1,</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><ol start="3"><li>export命令可以出现在模块的任何位置，只要处于模块顶层就可以。如果处于块级作用域内，就会报错。</li></ol><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">foo</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;bar&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// SyntaxError</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">foo</span><span style="color:#E1E4E8;">()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">foo</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;bar&#39;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// SyntaxError</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6F42C1;">foo</span><span style="color:#24292E;">()</span></span></code></pre></div><ol start="4"><li>export命令规定的是对外的接口，接口名与模块内部变量之间，必须建立一 一对应的关系。</li></ol><blockquote><p>可以理解为导出文件中的一块区域，不能直接导出单个变量。只能是：</p><p>①<code>export + 完整的申明</code> （var、const、let、function、class）</p><p>②<code>export + { 变量名, 变量名,... }</code></p><p>③<code>export + 模块集合</code></p></blockquote><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> name1; </span><span style="color:#6A737D;">// export + 完整的申明</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> { name1, </span><span style="color:#6A737D;">/* …, */</span><span style="color:#E1E4E8;"> nameN }; </span><span style="color:#6A737D;">// export + { 变量名, 变量名,... }</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;module-name&quot;</span><span style="color:#E1E4E8;">;    </span><span style="color:#6A737D;">// 导出模块合集</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> module1 </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;module-name&quot;</span><span style="color:#E1E4E8;">;  </span><span style="color:#6A737D;">// 导出模块合集 重新命名</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> { name1, </span><span style="color:#6A737D;">/* …, */</span><span style="color:#E1E4E8;"> nameN } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;module-name&quot;</span><span style="color:#E1E4E8;">;   </span><span style="color:#6A737D;">// 导出模块合集 中的一部分</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> name1; </span><span style="color:#6A737D;">// export + 完整的申明</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> { name1, </span><span style="color:#6A737D;">/* …, */</span><span style="color:#24292E;"> nameN }; </span><span style="color:#6A737D;">// export + { 变量名, 变量名,... }</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">*</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;module-name&quot;</span><span style="color:#24292E;">;    </span><span style="color:#6A737D;">// 导出模块合集</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">*</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> module1 </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;module-name&quot;</span><span style="color:#24292E;">;  </span><span style="color:#6A737D;">// 导出模块合集 重新命名</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> { name1, </span><span style="color:#6A737D;">/* …, */</span><span style="color:#24292E;"> nameN } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;module-name&quot;</span><span style="color:#24292E;">;   </span><span style="color:#6A737D;">// 导出模块合集 中的一部分</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">注意</p><p>export 语句输出的接口，与其对应的值是<code>动态绑定关系</code>，即通过该接口，可以取到模块内部实时的值。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> foo </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#B392F0;">setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> foo </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> foo </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6F42C1;">setTimeout</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> foo </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1000</span><span style="color:#24292E;">);</span></span></code></pre></div><p>上面代码输出变量foo，值为1，1000 毫秒之后变成2。这一点与 CommonJS 规范完全不同。CommonJS 模块输出的是值的缓存，不存在动态更新，原因是ES是引用、CommonJS是拷贝，拷贝时是什么就是什么。</p></div><h2 id="import-命令" tabindex="-1">import 命令 <a class="header-anchor" href="#import-命令" aria-label="Permalink to &quot;import 命令&quot;">​</a></h2><p>使用export命令定义了模块的对外接口以后，其他 JS 文件就可以通过import命令加载这个模块。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;module-name&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> defaultExport </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;module-name&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> name </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;module-name&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { export1 } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;module-name&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { export1 </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> alias1 } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;module-name&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> alias } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;module-name&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { export1, export2 } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;module-name&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { export1, export2 </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> alias2, </span><span style="color:#6A737D;">/* … */</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;module-name&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { &quot;string name&quot; as alias } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;module-name&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> defaultExport, { export1, </span><span style="color:#6A737D;">/* … */</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;module-name&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> defaultExport, </span><span style="color:#79B8FF;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> name </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;module-name&quot;</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;module-name&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> defaultExport </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;module-name&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">*</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> name </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;module-name&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { export1 } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;module-name&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { export1 </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> alias1 } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;module-name&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> alias } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;module-name&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { export1, export2 } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;module-name&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { export1, export2 </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> alias2, </span><span style="color:#6A737D;">/* … */</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;module-name&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { &quot;string name&quot; as alias } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;module-name&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> defaultExport, { export1, </span><span style="color:#6A737D;">/* … */</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;module-name&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> defaultExport, </span><span style="color:#005CC5;">*</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> name </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;module-name&quot;</span><span style="color:#24292E;">;</span></span></code></pre></div><ul><li>import命令要使用as关键字，将输入的变量重命名。</li><li>import命令输入的变量都是只读的，因为它的本质是输入接口。不允许改写接口。</li><li>import后面的from指定模块文件的位置，可以是相对路径，也可以是绝对路径，.js后缀可以省略。 <blockquote><p>如果只是模块名，不带有路径，那么必须有配置文件，告诉 JavaScript 引擎该模块的位置。</p></blockquote></li><li>import命令具有提升效果，会提升到整个模块的头部，首先执行（可以出现在任何位置，只要处于模块顶层，处于块级作用域报错），因为import命令是编译阶段执行的。</li><li>如果多次重复执行同一句import语句，那么只会执行一次，而不会执行多次。</li></ul><h2 id="export-default-命令" tabindex="-1">export default 命令 <a class="header-anchor" href="#export-default-命令" aria-label="Permalink to &quot;export default 命令&quot;">​</a></h2><ul><li>export default命令，为模块指定默认输出。一个模块只能有一个默认输出。</li><li>export default就是输出一个叫做default的变量或方法（所以它后面不能跟变量声明语句），然后系统允许你为它取任意名字。</li></ul>`,21);function i(d,m,u,F,A,D){const n=p("lines");return e(),t("div",null,[E,a("p",null,[s("在 ES6 之前，社区制定了一些模块加载方案，"),o(n,{text:"最主要的有 CommonJS 和 AMD 两种。前者用于服务器，后者用于浏览器"}),s("。ES6 在语言标准的层面上，实现了模块功能，而且实现得相当简单，完全可以取代 CommonJS 和 AMD 规范，"),o(n,{text:"ES规范成为浏览器和服务器通用的模块解决方案"}),s("。")]),a("ul",null,[a("li",null,[o(n,{type:"wave",text:"ES6 模块的设计思想是尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量"}),s("。CommonJS 和 AMD 模块，都只能在运行时确定这些东西。")])]),y])}const x=l(c,[["render",i]]);export{f as __pageData,x as default};