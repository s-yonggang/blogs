import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.5b0c684c.js";const g=JSON.parse('{"title":"Bigint","description":"","frontmatter":{},"headers":[],"relativePath":"web-core/base/1-13.md","filePath":"web-core/base/1-13.md","lastUpdated":1729031503000}'),o={name:"web-core/base/1-13.md"},p=l(`<h1 id="bigint" tabindex="-1">Bigint <a class="header-anchor" href="#bigint" aria-label="Permalink to &quot;Bigint&quot;">​</a></h1><p>BigInt 是一种内置对象，它提供了一种方法来表示<code>大于 2^53 - 1 的整数</code>。BigInt 可以表示任意大的整数。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">bigNum</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">BigInt</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// 1n</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">bigNum</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 1n</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">bigNum</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">BigInt</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// 1n</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">bigNum</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#D73A49;">n</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// 1n</span></span></code></pre></div><h2 id="bigint与number不同点" tabindex="-1">Bigint与Number不同点 <a class="header-anchor" href="#bigint与number不同点" aria-label="Permalink to &quot;Bigint与Number不同点&quot;">​</a></h2><ul><li>不能用于 Math 对象中的方法</li><li>不能和任何 Number 实例混合运算。</li><li>不支持单目 (+) 运算符</li><li>不支持 <code>&gt;&gt;&gt;</code>（无符号右移），因为 BigInt 都是有符号的</li><li>使用除法 <code>/</code> 时会存在一些问题。带小数的运算会被取整。</li><li>构造函数不支持 new 操作符。</li></ul><div class="tip custom-block"><p class="custom-block-title">注意</p><p>当使用 BigInt 时，带小数的运算会被取整。</p></div><h2 id="bigint与number的比较运输" tabindex="-1">Bigint与Number的比较运输 <a class="header-anchor" href="#bigint与number的比较运输" aria-label="Permalink to &quot;Bigint与Number的比较运输&quot;">​</a></h2><ul><li>不是严格相等的，但是宽松相等的（==）。</li><li>也可以混在一个数组内并排序。</li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">0</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">// ↪ false</span></span>
<span class="line"><span style="color:#79B8FF;">0</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">// ↪ true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">1</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// ↪ true</span></span>
<span class="line"><span style="color:#79B8FF;">2</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">// ↪ false</span></span>
<span class="line"><span style="color:#79B8FF;">2</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&gt;=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">// ↪ true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">mixed</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">4</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">12</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">mixed.</span><span style="color:#B392F0;">sort</span><span style="color:#E1E4E8;">(); </span><span style="color:#6A737D;">//  ↪ [-12n, 0, 0n, 10, 4n, 4, 6]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">0</span><span style="color:#D73A49;">n</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">// ↪ false</span></span>
<span class="line"><span style="color:#005CC5;">0</span><span style="color:#D73A49;">n</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">// ↪ true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">1</span><span style="color:#D73A49;">n</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// ↪ true</span></span>
<span class="line"><span style="color:#005CC5;">2</span><span style="color:#D73A49;">n</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">// ↪ false</span></span>
<span class="line"><span style="color:#005CC5;">2</span><span style="color:#D73A49;">n</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&gt;=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">// ↪ true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">mixed</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">4</span><span style="color:#D73A49;">n</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">6</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">12</span><span style="color:#D73A49;">n</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#D73A49;">n</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">mixed.</span><span style="color:#6F42C1;">sort</span><span style="color:#24292E;">(); </span><span style="color:#6A737D;">//  ↪ [-12n, 0, 0n, 10, 4n, 4, 6]</span></span></code></pre></div><h2 id="条件运算" tabindex="-1">条件运算 <a class="header-anchor" href="#条件运算" aria-label="Permalink to &quot;条件运算&quot;">​</a></h2><p>BigInt 在需要转换成 Boolean 的时表现跟 Number 类似。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">0</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">12</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">// ↪ 12n</span></span>
<span class="line"><span style="color:#79B8FF;">0</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">12</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">// ↪ 0n</span></span>
<span class="line"><span style="color:#B392F0;">Boolean</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">);</span><span style="color:#6A737D;">// ↪ false</span></span>
<span class="line"><span style="color:#B392F0;">Boolean</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">12</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">);</span><span style="color:#6A737D;">// ↪ true</span></span>
<span class="line"><span style="color:#F97583;">!</span><span style="color:#79B8FF;">12</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">// ↪ false</span></span>
<span class="line"><span style="color:#F97583;">!</span><span style="color:#79B8FF;">0</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">// ↪ true</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">0</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Hello from the if!&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Hello from the else!&quot;</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// 它被执行</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">0</span><span style="color:#D73A49;">n</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">12</span><span style="color:#D73A49;">n</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">// ↪ 12n</span></span>
<span class="line"><span style="color:#005CC5;">0</span><span style="color:#D73A49;">n</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">12</span><span style="color:#D73A49;">n</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">// ↪ 0n</span></span>
<span class="line"><span style="color:#6F42C1;">Boolean</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#D73A49;">n</span><span style="color:#24292E;">);</span><span style="color:#6A737D;">// ↪ false</span></span>
<span class="line"><span style="color:#6F42C1;">Boolean</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">12</span><span style="color:#D73A49;">n</span><span style="color:#24292E;">);</span><span style="color:#6A737D;">// ↪ true</span></span>
<span class="line"><span style="color:#D73A49;">!</span><span style="color:#005CC5;">12</span><span style="color:#D73A49;">n</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">// ↪ false</span></span>
<span class="line"><span style="color:#D73A49;">!</span><span style="color:#005CC5;">0</span><span style="color:#D73A49;">n</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">// ↪ true</span></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">0</span><span style="color:#D73A49;">n</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Hello from the if!&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">} </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Hello from the else!&quot;</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// 它被执行</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="静态方法" tabindex="-1">静态方法 <a class="header-anchor" href="#静态方法" aria-label="Permalink to &quot;静态方法&quot;">​</a></h2><h2 id="bigint-asintn" tabindex="-1">BigInt.asIntN() <a class="header-anchor" href="#bigint-asintn" aria-label="Permalink to &quot;BigInt.asIntN()&quot;">​</a></h2><ul><li><strong>描述</strong>：将 BigInt 值转换为一个 -2^(width-1) 与 2^(width-1)-1 之间的有符号整数。</li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">BigInt.</span><span style="color:#B392F0;">asIntN</span><span style="color:#E1E4E8;">(width, bigint);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">BigInt.</span><span style="color:#6F42C1;">asIntN</span><span style="color:#24292E;">(width, bigint);</span></span></code></pre></div><ul><li><strong>参数</strong>： <ul><li><code>width</code>：可存储整数的位数。</li><li><code>bigint</code>：要存储在指定位数上的整数。</li></ul></li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">max</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">**</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">64</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">BigInt.</span><span style="color:#B392F0;">asIntN</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">64</span><span style="color:#E1E4E8;">, max); </span><span style="color:#6A737D;">// 9223372036854775807n</span></span>
<span class="line"><span style="color:#E1E4E8;">BigInt.</span><span style="color:#B392F0;">asIntN</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">64</span><span style="color:#E1E4E8;">, max </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// -9223372036854775808n negative because of overflow</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">max</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#D73A49;">n</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">**</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">64</span><span style="color:#D73A49;">n</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#D73A49;">n</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#D73A49;">n</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">BigInt.</span><span style="color:#6F42C1;">asIntN</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">64</span><span style="color:#24292E;">, max); </span><span style="color:#6A737D;">// 9223372036854775807n</span></span>
<span class="line"><span style="color:#24292E;">BigInt.</span><span style="color:#6F42C1;">asIntN</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">64</span><span style="color:#24292E;">, max </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#D73A49;">n</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// -9223372036854775808n negative because of overflow</span></span></code></pre></div><h2 id="bigint-asuintn" tabindex="-1">BigInt.asUintN() <a class="header-anchor" href="#bigint-asuintn" aria-label="Permalink to &quot;BigInt.asUintN()&quot;">​</a></h2><ul><li><strong>描述</strong>：将 BigInt 转换为一个 0 和 2^width-1 之间的无符号整数。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">BigInt.asUintN(width, bigint);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">BigInt.asUintN(width, bigint);</span></span></code></pre></div><ul><li><strong>参数</strong>： <ul><li><code>width</code>：可存储整数的位数。</li><li><code>bigint</code>：要存储在指定位数上的整数。</li></ul></li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">max</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">**</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">64</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">BigInt.</span><span style="color:#B392F0;">asUintN</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">64</span><span style="color:#E1E4E8;">, max);</span><span style="color:#6A737D;">// ↪ 18446744073709551615n</span></span>
<span class="line"><span style="color:#E1E4E8;">BigInt.</span><span style="color:#B392F0;">asUintN</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">64</span><span style="color:#E1E4E8;">, max </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">);</span><span style="color:#6A737D;">// ↪ 0n  zero because of overflow</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">max</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#D73A49;">n</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">**</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">64</span><span style="color:#D73A49;">n</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#D73A49;">n</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">BigInt.</span><span style="color:#6F42C1;">asUintN</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">64</span><span style="color:#24292E;">, max);</span><span style="color:#6A737D;">// ↪ 18446744073709551615n</span></span>
<span class="line"><span style="color:#24292E;">BigInt.</span><span style="color:#6F42C1;">asUintN</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">64</span><span style="color:#24292E;">, max </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#D73A49;">n</span><span style="color:#24292E;">);</span><span style="color:#6A737D;">// ↪ 0n  zero because of overflow</span></span></code></pre></div><h2 id="实例方法" tabindex="-1">实例方法 <a class="header-anchor" href="#实例方法" aria-label="Permalink to &quot;实例方法&quot;">​</a></h2><h2 id="bigint-prototype-tolocalestring" tabindex="-1">BigInt.prototype.toLocaleString() <a class="header-anchor" href="#bigint-prototype-tolocalestring" aria-label="Permalink to &quot;BigInt.prototype.toLocaleString()&quot;">​</a></h2><ul><li><strong>描述</strong>：返回一个表示给定 BigInt 对象的字符串，该字符串格式因不同语言而不同。在支持 Intl.NumberFormat API 的实现中，该方法仅是调用了 Intl.NumberFormat 方法。</li></ul><h2 id="bigint-prototype-tostring" tabindex="-1">BigInt.prototype.toString() <a class="header-anchor" href="#bigint-prototype-tostring" aria-label="Permalink to &quot;BigInt.prototype.toString()&quot;">​</a></h2><ul><li><strong>描述</strong>：BigInt 对象重写 Object 对象的 toString() 方法；它不继承 Object.prototype.toString()。对于 BigInt 对象，toString() 方法返回指定基数中对象的字符串表示形式。</li></ul><h2 id="bigint-prototype-valueof" tabindex="-1">BigInt.prototype.valueOf() <a class="header-anchor" href="#bigint-prototype-valueof" aria-label="Permalink to &quot;BigInt.prototype.valueOf()&quot;">​</a></h2><ul><li><strong>描述</strong>：返回 BigInt 对象包装的原始值。</li></ul>`,30),e=[p];function t(c,r,y,i,E,F){return n(),a("div",null,e)}const u=s(o,[["render",t]]);export{g as __pageData,u as default};
