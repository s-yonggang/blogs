import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.5b0c684c.js";const F=JSON.parse('{"title":"模块化发展过程","description":"","frontmatter":{},"headers":[],"relativePath":"tools/modular/index.md","filePath":"tools/modular/index.md","lastUpdated":1729031503000}'),p={name:"tools/modular/index.md"},o=l(`<h1 id="模块化发展过程" tabindex="-1">模块化发展过程 <a class="header-anchor" href="#模块化发展过程" aria-label="Permalink to &quot;模块化发展过程&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>模块化不单单指的是 Javascript ，应该还包括 web 端各类资源，如：img、font等等。</p></div><h2 id="阶段一" tabindex="-1">阶段一 <a class="header-anchor" href="#阶段一" aria-label="Permalink to &quot;阶段一&quot;">​</a></h2><p><strong>基于文件划分的方式实现模块化</strong></p><blockquote><p>文件为独立的模块，在对应位置调用全局成员。缺点：污染全局作用域，命名冲突问题，完全依靠约定。</p></blockquote><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 引入文件模块的具体实现如下 --&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- module.a.js 文件--&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- module.a.js 文件 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;!</span><span style="color:#85E89D;">DOCTYPE</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">html</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">html</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;en&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">head</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">meta</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">charset</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;UTF-8&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">meta</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">http-equiv</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;X-UA-Compatible&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">content</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;IE=edge&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">meta</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;viewport&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">content</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;width=device-width, initial-scale=1.0&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">&gt;Document&lt;/</span><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;module.a.js&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;module.b.js&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">head</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">body</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// module.a.js，module.b.js 存在于全局作用域，会有全局变量的污染问题。 </span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">body</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">html</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 引入文件模块的具体实现如下 --&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- module.a.js 文件--&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- module.a.js 文件 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;!</span><span style="color:#22863A;">DOCTYPE</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">html</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">html</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;en&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">head</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">meta</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">charset</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;UTF-8&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">meta</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">http-equiv</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;X-UA-Compatible&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">content</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;IE=edge&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">meta</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;viewport&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">content</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;width=device-width, initial-scale=1.0&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">title</span><span style="color:#24292E;">&gt;Document&lt;/</span><span style="color:#22863A;">title</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;module.a.js&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;module.b.js&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">head</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">body</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// module.a.js，module.b.js 存在于全局作用域，会有全局变量的污染问题。 </span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">body</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">html</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p><strong>存在问题</strong></p><ol><li>全局变量污染</li><li>命名冲突</li><li>依赖关系不明显</li><li>模块成员不明显</li></ol><h2 id="阶段二" tabindex="-1">阶段二 <a class="header-anchor" href="#阶段二" aria-label="Permalink to &quot;阶段二&quot;">​</a></h2><p><strong>命名空间方式</strong></p><blockquote><p>使用全局对象方式实现模块化，解决了<code>命名冲突</code>的问题。（具体做法是在阶段一的基础之包装一层对象）</p></blockquote><p><strong>存在的问题</strong></p><ol><li>污染全局作用域，模块成员任然可以在外部被访问和修改</li><li>模块的依赖关系任然没有得到解决</li></ol><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// module.a.js 文件内</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> moduleA </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;moduleA&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">fn1</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(){</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">fn2</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(){</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// module.b.js 文件内</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> moduleB </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;moduleB&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">fn1</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(){</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">fn2</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(){</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// module.a.js 文件内</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> moduleA </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&#39;moduleA&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">fn1</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(){</span><span style="color:#D73A49;">...</span><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">fn2</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(){</span><span style="color:#D73A49;">...</span><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// module.b.js 文件内</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> moduleB </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&#39;moduleB&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">fn1</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(){</span><span style="color:#D73A49;">...</span><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">fn2</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(){</span><span style="color:#D73A49;">...</span><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;module.a.js&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;module.b.js&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    moduleA.</span><span style="color:#B392F0;">fn1</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    moduleB.</span><span style="color:#B392F0;">fn1</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;module.a.js&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;module.b.js&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    moduleA.</span><span style="color:#6F42C1;">fn1</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    moduleB.</span><span style="color:#6F42C1;">fn1</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="阶段三" tabindex="-1">阶段三 <a class="header-anchor" href="#阶段三" aria-label="Permalink to &quot;阶段三&quot;">​</a></h2><p><strong>立即执行函数方式</strong>（IIFE）</p><blockquote><p>使用立即执行函数实现模块化，解决了私有化及模块依赖问题。</p></blockquote><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 明确知道需要依赖的模块----moduleName</span></span>
<span class="line"><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">moduleName</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> name </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;moduleA&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">fn1</span><span style="color:#E1E4E8;">() {};</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">fn2</span><span style="color:#E1E4E8;">() {};</span></span>
<span class="line"><span style="color:#E1E4E8;">    window.moduleA </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        fn1: fn1,</span></span>
<span class="line"><span style="color:#E1E4E8;">        fn2: fn2</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}(</span><span style="color:#9ECBFF;">&#39;moduleName&#39;</span><span style="color:#E1E4E8;">))</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 明确知道需要依赖的模块----moduleName</span></span>
<span class="line"><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">moduleName</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;moduleA&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">  </span><span style="color:#6F42C1;">fn1</span><span style="color:#24292E;">() {};</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">  </span><span style="color:#6F42C1;">fn2</span><span style="color:#24292E;">() {};</span></span>
<span class="line"><span style="color:#24292E;">    window.moduleA </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        fn1: fn1,</span></span>
<span class="line"><span style="color:#24292E;">        fn2: fn2</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}(</span><span style="color:#032F62;">&#39;moduleName&#39;</span><span style="color:#24292E;">))</span></span></code></pre></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>此时的问题：没有一个规范化的标准。都只是通过约定的方式实现。</p></div>`,20),t=[o];function e(c,r,E,y,i,d){return n(),a("div",null,t)}const m=s(p,[["render",e]]);export{F as __pageData,m as default};