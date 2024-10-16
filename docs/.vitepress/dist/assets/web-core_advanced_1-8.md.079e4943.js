import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.5b0c684c.js";const p="/blogs/assets/advanced_1-7_1.8683e60c.png",u=JSON.parse('{"title":"异步编程","description":"","frontmatter":{},"headers":[],"relativePath":"web-core/advanced/1-8.md","filePath":"web-core/advanced/1-8.md","lastUpdated":1729031503000}'),o={name:"web-core/advanced/1-8.md"},e=l('<h1 id="异步编程" tabindex="-1">异步编程 <a class="header-anchor" href="#异步编程" aria-label="Permalink to &quot;异步编程&quot;">​</a></h1><h2 id="javascript单线程特性" tabindex="-1">JavaScript单线程特性 <a class="header-anchor" href="#javascript单线程特性" aria-label="Permalink to &quot;JavaScript单线程特性&quot;">​</a></h2><p><strong>JavaScript为什采用单线程？</strong></p><blockquote><p>JavaScript是以<code>单线程</code>模式执行代码（同一时间只能做一件事），采用单线程方式工作的原因与其最开始设计初衷有关。JavaScript最早是运行在浏览器的脚本语言，用于处理页面的动态交互，其核心就是dom操作，采用单线程模式是为了避免复杂的多线程同步问题（当同时操作一个dom元素时，无法明确以哪个工作线程为准）。</p></blockquote><p><strong>单线程</strong></p><blockquote><p>指的是JavaScript负责执行代码的线程只有一个，这也就意味着所有任务必须排对执行，采用单线程的工作模式线程利用率极高，可以节省内存，节约上下文切换时间，没有多线程锁的问题，但如果碰到耗时长的任务，就是导致页面阻塞（页面假死）的情况。为了解决这一问题，JavaScript将任务执行模式分成两种———<code>同步模式</code>和<code>异步模式</code>。</p></blockquote><h2 id="同步模式与异步模式" tabindex="-1">同步模式与异步模式 <a class="header-anchor" href="#同步模式与异步模式" aria-label="Permalink to &quot;同步模式与异步模式&quot;">​</a></h2><p>同步模式：排队依次执行。</p><p>异步模式：开启执行之后，立即执行下一个任务，后续逻辑在回调函数里面定义。</p><div class="tip custom-block"><p class="custom-block-title">JavaScript如何实现异步模式的呢？</p><p>在代码运行中会同时存在大量的<code>同步任务</code>和<code>异步任务</code>，那么JavaScript是如处理<code>同步任务</code>和<code>异步任务</code>任务的执行顺序呢？这里就引出了<code>事件轮询（EventLoop）</code>，它规定了任务在浏览器中的执行顺序，浏览器在运行应用时，通过<code>宏任务/微任务</code>的类型，将不同的任务放到不同的<code>消息队列</code>等待执行。</p></div><h2 id="事件轮询-消息队列" tabindex="-1">事件轮询/消息队列 <a class="header-anchor" href="#事件轮询-消息队列" aria-label="Permalink to &quot;事件轮询/消息队列&quot;">​</a></h2><p><img src="'+p+`" alt="图片"></p><h2 id="宏任务-微任务" tabindex="-1">宏任务/微任务 <a class="header-anchor" href="#宏任务-微任务" aria-label="Permalink to &quot;宏任务/微任务&quot;">​</a></h2><p><strong>宏任务</strong>：可以理解为<code>每次执行栈</code>执行的代码就是一个宏任务。宏任务有————script代码块、setTimeout、setInterval、I/O、UI交互事件、MessageChannel等。</p><blockquote><p>浏览器为了让JavaScript内部宏任务与DOM操作能够有序的执行，<code>会在一个宏任务执行结束后，下一个宏任务执行开始前，对页面进行重新渲染</code>。</p></blockquote><p><strong>微任务</strong>：每个宏任务执行结束后立即执行的任务，发生在宏任务后，渲染之前，执行微任务。微任务有————Promise.then、MutaionObserver、process.nextTick(Node.js环境下)</p><blockquote><p>微任务的响应速度相比宏任务会更快，因为无需等待UI渲染。</p></blockquote><h2 id="回调函数" tabindex="-1">回调函数 <a class="header-anchor" href="#回调函数" aria-label="Permalink to &quot;回调函数&quot;">​</a></h2><p>回调函数： 由调用者调用，执行者执行。所有异步编程的根本就是回调函数。</p><h2 id="promise" tabindex="-1">Promise <a class="header-anchor" href="#promise" aria-label="Permalink to &quot;Promise&quot;">​</a></h2><p>在JavaScript ES6之前，异步编程主要依赖于回调函数。回调函数虽然简单，但存在“回调地狱”（callback hell）的问题，使得代码难以维护。Promise的出现，为异步编程提供了一种更清晰、更结构化的方法。</p><p>Promise是一个代表异步操作的对象，它有三种状态：</p><blockquote><p>Pending（进行中）：初始状态，既不是成功，也不是失败状态。</p><p>Fulfilled（已成功）：操作成功完成。</p><p>Rejected（已失败）：操作失败。</p></blockquote><p>Promise的状态只能从 Pending 变为 Fulfilled 或 Rejected，并且<code>状态一旦改变，就不可逆</code>。</p><div class="tip custom-block"><p class="custom-block-title">注意</p><p>Promise.then每次返回的是一个状态明确，新创建的promise对象，保证其可以链式调用。</p></div><p><strong>基本应用</strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ajax</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">url</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">,</span><span style="color:#FFAB70;">reject</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> xhr </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">XMLHttpRequest</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        xhr.</span><span style="color:#B392F0;">open</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;GET&#39;</span><span style="color:#E1E4E8;">,url);</span></span>
<span class="line"><span style="color:#E1E4E8;">        xhr.responseType </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;json&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        xhr.</span><span style="color:#B392F0;">onload</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.status </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.response)</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">reject</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Error</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.statusText))</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        xhr.</span><span style="color:#B392F0;">onerror</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">reject</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Network error&#39;</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">        xhr.</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">ajax</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./api/user&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ajax</span><span style="color:#24292E;">(</span><span style="color:#E36209;">url</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">((</span><span style="color:#E36209;">resolve</span><span style="color:#24292E;">,</span><span style="color:#E36209;">reject</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> xhr </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">XMLHttpRequest</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">        xhr.</span><span style="color:#6F42C1;">open</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;GET&#39;</span><span style="color:#24292E;">,url);</span></span>
<span class="line"><span style="color:#24292E;">        xhr.responseType </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;json&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        xhr.</span><span style="color:#6F42C1;">onload</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.status </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">200</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.response)</span></span>
<span class="line"><span style="color:#24292E;">            }</span><span style="color:#D73A49;">else</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">reject</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Error</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.statusText))</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        xhr.</span><span style="color:#6F42C1;">onerror</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">reject</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Error</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;Network error&#39;</span><span style="color:#24292E;">));</span></span>
<span class="line"><span style="color:#24292E;">        xhr.</span><span style="color:#6F42C1;">send</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6F42C1;">ajax</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;./api/user&#39;</span><span style="color:#24292E;">)</span></span></code></pre></div><h2 id="generator" tabindex="-1">Generator <a class="header-anchor" href="#generator" aria-label="Permalink to &quot;Generator&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function*</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">foo</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">yield</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;result1&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">yield</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;result2&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">yield</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;result3&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">gen</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">foo</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(gen.</span><span style="color:#B392F0;">next</span><span style="color:#E1E4E8;">().value)</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(gen.</span><span style="color:#B392F0;">next</span><span style="color:#E1E4E8;">().value)</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(gen.</span><span style="color:#B392F0;">next</span><span style="color:#E1E4E8;">().value)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function*</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">foo</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">yield</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;result1&#39;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">yield</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;result2&#39;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">yield</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;result3&#39;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">gen</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">foo</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(gen.</span><span style="color:#6F42C1;">next</span><span style="color:#24292E;">().value)</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(gen.</span><span style="color:#6F42C1;">next</span><span style="color:#24292E;">().value)</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(gen.</span><span style="color:#6F42C1;">next</span><span style="color:#24292E;">().value)</span></span></code></pre></div><p>Generator需要封装一个执行器</p><h2 id="async-await" tabindex="-1">async/await <a class="header-anchor" href="#async-await" aria-label="Permalink to &quot;async/await&quot;">​</a></h2><p>async/await 是对Generator的语法糖。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">fetchData</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">url</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">response</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">fetch</span><span style="color:#E1E4E8;">(url);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">data</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> response.</span><span style="color:#B392F0;">json</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(data);</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Error fetching data:&#39;</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">async</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fetchData</span><span style="color:#24292E;">(</span><span style="color:#E36209;">url</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">try</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">response</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fetch</span><span style="color:#24292E;">(url);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">data</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> response.</span><span style="color:#6F42C1;">json</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(data);</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">catch</span><span style="color:#24292E;"> (error) {</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">error</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;Error fetching data:&#39;</span><span style="color:#24292E;">, error);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,33),c=[e];function t(r,E,y,i,d,F){return a(),n("div",null,c)}const g=s(o,[["render",t]]);export{u as __pageData,g as default};
