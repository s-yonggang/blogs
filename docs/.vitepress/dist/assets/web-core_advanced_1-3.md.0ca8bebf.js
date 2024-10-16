import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.5b0c684c.js";const C=JSON.parse('{"title":"函数柯里化（Currying）","description":"","frontmatter":{},"headers":[],"relativePath":"web-core/advanced/1-3.md","filePath":"web-core/advanced/1-3.md","lastUpdated":1729031503000}'),p={name:"web-core/advanced/1-3.md"},o=l(`<h1 id="函数柯里化-currying" tabindex="-1">函数柯里化（Currying） <a class="header-anchor" href="#函数柯里化-currying" aria-label="Permalink to &quot;函数柯里化（Currying）&quot;">​</a></h1><p>函数柯里化：固定某个函数的一些参数，得到该函数剩余参数的新函数，如果没有剩余参数，则调用。</p><p><strong><code>优点</code></strong>：</p><ul><li><p>参数复用</p></li><li><p>提前返回</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// sum函数</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">sum</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">c</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">d</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> arr </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [a, b, c, d];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> arr.</span><span style="color:#B392F0;">reduce</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">acc</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">current</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> acc </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> current, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 柯里化函数</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">currying</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">fn</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">...</span><span style="color:#FFAB70;">rest</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> fn.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> rest.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">...</span><span style="color:#FFAB70;">newRest</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">currying</span><span style="color:#E1E4E8;">(fn, </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">rest, </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">newRest) </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">fn</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">rest)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// sum函数进行柯里化</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> sumCurrying </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">currying</span><span style="color:#E1E4E8;">(sum)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">sumCurrying</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">)) </span><span style="color:#6A737D;">// 10</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">sumCurrying</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">)(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">)(</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">)(</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">)) </span><span style="color:#6A737D;">// 10</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// sum函数</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">sum</span><span style="color:#24292E;">(</span><span style="color:#E36209;">a</span><span style="color:#24292E;">, </span><span style="color:#E36209;">b</span><span style="color:#24292E;">, </span><span style="color:#E36209;">c</span><span style="color:#24292E;">, </span><span style="color:#E36209;">d</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> arr </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [a, b, c, d];</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> arr.</span><span style="color:#6F42C1;">reduce</span><span style="color:#24292E;">((</span><span style="color:#E36209;">acc</span><span style="color:#24292E;">, </span><span style="color:#E36209;">current</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> acc </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> current, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 柯里化函数</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">currying</span><span style="color:#24292E;">(</span><span style="color:#E36209;">fn</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">...</span><span style="color:#E36209;">rest</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> fn.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> rest.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">...</span><span style="color:#E36209;">newRest</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">currying</span><span style="color:#24292E;">(fn, </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">rest, </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">newRest) </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fn</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">...</span><span style="color:#24292E;">rest)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// sum函数进行柯里化</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> sumCurrying </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">currying</span><span style="color:#24292E;">(sum)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">sumCurrying</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">)) </span><span style="color:#6A737D;">// 10</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">sumCurrying</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">)(</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">)(</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">)(</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">)) </span><span style="color:#6A737D;">// 10</span></span></code></pre></div>`,5),e=[o];function c(r,t,y,E,i,F){return n(),a("div",null,e)}const d=s(p,[["render",c]]);export{C as __pageData,d as default};
