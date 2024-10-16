import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.5b0c684c.js";const F=JSON.parse('{"title":"webpack配置","description":"","frontmatter":{},"headers":[],"relativePath":"tools/webpack/1-4.md","filePath":"tools/webpack/1-4.md","lastUpdated":1729031503000}'),l={name:"tools/webpack/1-4.md"},o=p(`<h1 id="webpack配置" tabindex="-1">webpack配置 <a class="header-anchor" href="#webpack配置" aria-label="Permalink to &quot;webpack配置&quot;">​</a></h1><p>webpack.config.js 是运行在node环境的, 所以必须遵循CommonJs规范</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">path</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;path&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    mode: </span><span style="color:#9ECBFF;">&#39;development&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    entry: </span><span style="color:#9ECBFF;">&#39;./src/main.js&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    output: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        filename: </span><span style="color:#9ECBFF;">&#39;bundle.js&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        path: path.</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&#39;dist&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    module: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        rules: []</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">path</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;path&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    mode: </span><span style="color:#032F62;">&#39;development&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    entry: </span><span style="color:#032F62;">&#39;./src/main.js&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    output: {</span></span>
<span class="line"><span style="color:#24292E;">        filename: </span><span style="color:#032F62;">&#39;bundle.js&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        path: path.</span><span style="color:#6F42C1;">join</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&#39;dist&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    module: {</span></span>
<span class="line"><span style="color:#24292E;">        rules: []</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,3),e=[o];function t(c,r,E,y,i,d){return a(),n("div",null,e)}const m=s(l,[["render",t]]);export{F as __pageData,m as default};
