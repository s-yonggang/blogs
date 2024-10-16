import{_ as s,o as e,c as a,Q as l}from"./chunks/framework.5b0c684c.js";const b=JSON.parse('{"title":"Reflect","description":"","frontmatter":{},"headers":[],"relativePath":"web-core/es6/1-13.md","filePath":"web-core/es6/1-13.md","lastUpdated":1729031503000}'),o={name:"web-core/es6/1-13.md"},n=l(`<h1 id="reflect" tabindex="-1">Reflect <a class="header-anchor" href="#reflect" aria-label="Permalink to &quot;Reflect&quot;">​</a></h1><p>与大多数全局对象不同 Reflect 并非一个构造函数，所以不能通过 new 运算符对其进行调用。</p><h2 id="静态方法" tabindex="-1">静态方法 <a class="header-anchor" href="#静态方法" aria-label="Permalink to &quot;静态方法&quot;">​</a></h2><p>Reflect对象一共有 13 个静态方法。</p><ul><li><code>Reflect.apply</code>(target, thisArg, args)</li><li><code>Reflect.construct</code>(target, args)</li><li><code>Reflect.get</code>(target, name, receiver)</li><li><code>Reflect.set</code>(target, name, value, receiver)</li><li><code>Reflect.defineProperty</code>(target, name, desc)</li><li><code>Reflect.deleteProperty</code>(target, name)</li><li><code>Reflect.has</code>(target, name)</li><li><code>Reflect.ownKeys</code>(target)</li><li><code>Reflect.isExtensible</code>(target)</li><li><code>Reflect.preventExtensions</code>(target)</li><li><code>Reflect.getOwnPropertyDescriptor</code>(target, name)</li><li><code>Reflect.getPrototypeOf</code>(target)</li><li><code>Reflect.setPrototypeOf</code>(target, prototype)</li></ul><h2 id="reflect对象的设计目的有这样几个" tabindex="-1">Reflect对象的设计目的有这样几个 <a class="header-anchor" href="#reflect对象的设计目的有这样几个" aria-label="Permalink to &quot;Reflect对象的设计目的有这样几个&quot;">​</a></h2><p>Reflect 是一个内置的对象，它提供拦截 JavaScript 操作的方法。</p><ol><li><p>将Object对象的一些明显属于语言内部的方法放到 Reflect 对象上（比如Object.defineProperty）。</p></li><li><p>修改某些Object方法的返回结果，让其变得更合理。</p><blockquote><p>比如，Object.defineProperty(obj, name, desc)在无法定义属性时，会抛出一个错误<br> 而Reflect.defineProperty(obj, name, desc)则会返回false。</p></blockquote></li><li><p>让 Object 操作都变成函数行为。</p><blockquote><p>某些Object操作是命令式，比如name in obj和delete obj[name] <br> 而Reflect.has(obj, name)和Reflect.deleteProperty(obj, name)让它们变成了函数行为。</p></blockquote></li><li><p>Reflect对象的方法与Proxy对象的方法一一对应，只要是Proxy对象的方法，就能在Reflect对象上找到对应的方法。</p><blockquote><p>这就让Proxy对象可以方便地调用对应的Reflect方法，完成默认行为，作为修改行为的基础。也就是说，不管Proxy怎么修改默认行为，你总可以在Reflect上获取默认行为。</p></blockquote></li></ol><div class="info custom-block"><p class="custom-block-title">使用 Proxy 实现一个简单 观察者模式</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">queuedObservers</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Set</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">observe</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">fn</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> queuedObservers.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(fn);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">observable</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">obj</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Proxy</span><span style="color:#E1E4E8;">(obj, {set});</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">target</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">value</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">receiver</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">result</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Reflect.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(target, key, value, receiver);</span></span>
<span class="line"><span style="color:#E1E4E8;">  queuedObservers.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">observer</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">observer</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> result;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">queuedObservers</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Set</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">observe</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#E36209;">fn</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> queuedObservers.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(fn);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">observable</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#E36209;">obj</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Proxy</span><span style="color:#24292E;">(obj, {set});</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(</span><span style="color:#E36209;">target</span><span style="color:#24292E;">, </span><span style="color:#E36209;">key</span><span style="color:#24292E;">, </span><span style="color:#E36209;">value</span><span style="color:#24292E;">, </span><span style="color:#E36209;">receiver</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">result</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Reflect.</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(target, key, value, receiver);</span></span>
<span class="line"><span style="color:#24292E;">  queuedObservers.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">(</span><span style="color:#E36209;">observer</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">observer</span><span style="color:#24292E;">());</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> result;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></div>`,9),p=[n];function t(c,r,y,E,i,d){return e(),a("div",null,p)}const u=s(o,[["render",t]]);export{b as __pageData,u as default};
