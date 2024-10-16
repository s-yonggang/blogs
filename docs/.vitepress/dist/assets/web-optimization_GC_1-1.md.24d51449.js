import{_ as n,o as a,c as l,Q as p}from"./chunks/framework.5b0c684c.js";const o="/blogs/assets/GC_1-1_1.ff66a966.png",e="/blogs/assets/GC_1-1_2.be99345e.png",s="/blogs/assets/GC_1-1_3.dd7dbdd5.png",h=JSON.parse('{"title":"内存管理","description":"","frontmatter":{},"headers":[],"relativePath":"web-optimization/GC/1-1.md","filePath":"web-optimization/GC/1-1.md","lastUpdated":1729031503000}'),t={name:"web-optimization/GC/1-1.md"},c=p('<h1 id="内存管理" tabindex="-1">内存管理 <a class="header-anchor" href="#内存管理" aria-label="Permalink to &quot;内存管理&quot;">​</a></h1><p>高级语言程序最终被编译器（解释器）转换成一条条机器指令，程序最终的执行形式是进程，进程为程序提供运行时刻环境（run-time environment），此环境处理许多事务如：为源程序中的对象分配和安排存储位置，过程连接，参数传递，与操作系统、输入输出设备等的接口。</p><p>程序在执行前，操作系统需要为该进程分配内存空间，典型的运行时刻内存划分如下：</p><p><img src="'+o+'" alt="图片"></p><h2 id="javascript内存空间" tabindex="-1">JavaScript内存空间 <a class="header-anchor" href="#javascript内存空间" aria-label="Permalink to &quot;JavaScript内存空间&quot;">​</a></h2><p>与其他编程语言类似，JavaScript的内存空间同样可分为<code>栈空间</code>和<code>堆空间</code>：</p><ul><li>JavaScript中那些具有固定大小的基本数据类型（String、Undefined、Null、Boolean、Number、Symbol、Bigint） 存储在栈空间中。</li><li>对象都分布在堆内存空间中，在栈空间中存储的是存-储于堆空间的对象的引用地址。</li></ul><p><img src="'+e+`" alt="图片"></p><h2 id="执行上下文栈" tabindex="-1">执行上下文栈 <a class="header-anchor" href="#执行上下文栈" aria-label="Permalink to &quot;执行上下文栈&quot;">​</a></h2><p>每次当控制器转到可执行代码的时候，就会进入一个执行上下文，JavaScript中的运行环境三种情况：</p><ul><li>全局环境：JavaScript代码运行起来会首先进入该环境</li><li>函数环境：当函数被调用执行时，会进入当前函数中执行代码</li><li>eval（不建议使用，可忽略）</li></ul><p>代码的一次执行通常会有许多个执行上下文，每次过程（函数）调用都会产生一个新的执行上下文，js中通过调用栈(Call stack)来管理这些执行上下文，栈底永远都是全局上下文，而栈顶就是当前正在执行的上下文。</p><p><strong>每个执行上下文通常有的元素</strong>（来自《编译原理》运行时环境章节）：</p><table><thead><tr><th style="text-align:left;">元素</th><th>描述</th></tr></thead><tbody><tr><td style="text-align:left;">返回值</td><td>本活动返回给调用过程的值；</td></tr><tr><td style="text-align:left;">实参区域</td><td>调用过程提供的实参值；</td></tr><tr><td style="text-align:left;">控制链</td><td>指向调用过程活动记录的指针，用于本次活动结束时的恢复；</td></tr><tr><td style="text-align:left;">存取链</td><td>指向直接外围过程的最近一次活动的活动记录指针，用于对非局部名字的访问；</td></tr><tr><td style="text-align:left;">机器状态域</td><td>保存断点的现场信息、寄存器、PSW等；</td></tr><tr><td style="text-align:left;">局部数据区</td><td>在本次活动中，为过程中定义的局部变量分配的存储空间；</td></tr><tr><td style="text-align:left;">临时数据区</td><td>存放中间计算结果；</td></tr></tbody></table><p><strong>从变量对象到活动对象</strong></p><p>执行上下文的周期：</p><ul><li><code>创建阶段</code> 在这个阶段中，执行上下文会分别创建变量对象，建立作用域链，以及确定this的指向；</li><li><code>代码执行阶段</code> 创建完成之后，就会开始执行代码，这个时候，会完成变量赋值，函数引用，以及执行其他代码；</li></ul><div class="info custom-block"><p class="custom-block-title">示例</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> fn </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">foo</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">d</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">innnerFoo</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(a);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">innnerFoo</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    fn </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> innnerFoo;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">bar</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">fn</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">foo</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">bar</span><span style="color:#E1E4E8;">(); </span><span style="color:#6A737D;">// 2</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> fn </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">foo</span><span style="color:#24292E;">(</span><span style="color:#E36209;">d</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> a </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">innnerFoo</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(a);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">innnerFoo</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    fn </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> innnerFoo;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">bar</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">fn</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">foo</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">6</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6F42C1;">bar</span><span style="color:#24292E;">(); </span><span style="color:#6A737D;">// 2</span></span></code></pre></div><p>上面代码实际运行顺序：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">innnerFoo</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(a);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> a;</span></span>
<span class="line"><span style="color:#E1E4E8;">a</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#B392F0;">innnerFoo</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">fn </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> innnerFoo;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">innnerFoo</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(a);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> a;</span></span>
<span class="line"><span style="color:#24292E;">a</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6F42C1;">innnerFoo</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">fn </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> innnerFoo;</span></span></code></pre></div><p>控制台： <img src="`+s+`" alt="图片"> 可以看到，当刚刚进入foo()函数时，就已经确定了this指向、参数值、和作用域链（Scope），并且还创建了变量对象。</p></div><p><strong>变量对象</strong></p><p>变量对象创建的过程：</p><ul><li>建立arguments对象。检查当前上下文中的参数，建立该对象下的属性与属性值。</li><li>检查当前上下文的函数声明，也就是使用function关键字声明的函数。在变量对象中以函数名建立一个属性，属性值为指向该函数所在内存地址的引用。如果函数名的属性已经存在，那么该属性将会被新的引用所覆盖。</li><li>检查当前上下文中的变量声明，每找到一个变量声明，就在变量对象中以变量名建立一个属性，属性值为undefined。如果该变量名的属性已经存在，为了防止同名的函数被修改为undefined，则会直接跳过，原属性值不会被修改。</li><li>求出this值</li></ul><p>还是上面的例子，刚进入<code>foo()</code>函数时，变量对象上就确定了参数的值，并得到了a的声明并初始化为undefined，而innerFoo函数声明也被识别，this指向window。</p><div class="info custom-block"><p class="custom-block-title">示例</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(foo); </span><span style="color:#6A737D;">// function foo</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">foo</span><span style="color:#E1E4E8;">() { console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;function foo&#39;</span><span style="color:#E1E4E8;">) }</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> foo </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(foo); </span><span style="color:#6A737D;">// function foo</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">foo</span><span style="color:#24292E;">() { console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;function foo&#39;</span><span style="color:#24292E;">) }</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> foo </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">20</span><span style="color:#24292E;">;</span></span></code></pre></div><p>最终打印的是函数foo的声明，即后面对foo的声明不会影响foo的值（即指向函数<code>foo()</code>，执行阶段foo的值由于执行foo=20而改变）。</p></div><p><strong>活动对象</strong></p><p>执行上下文的创建阶段做了一系列工作后，变量对象中的属性还不能访问，上面例子中的a也将在执行过程中被赋值：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 执行阶段</span></span>
<span class="line"><span style="color:#e1e4e8;">VO -&gt; AO</span></span>
<span class="line"><span style="color:#e1e4e8;">VO = {</span></span>
<span class="line"><span style="color:#e1e4e8;">    arguments: {...},</span></span>
<span class="line"><span style="color:#e1e4e8;">    a: 2,</span></span>
<span class="line"><span style="color:#e1e4e8;">    innerFoo: &lt;innerFoo reference&gt;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    this: Window</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 执行阶段</span></span>
<span class="line"><span style="color:#24292e;">VO -&gt; AO</span></span>
<span class="line"><span style="color:#24292e;">VO = {</span></span>
<span class="line"><span style="color:#24292e;">    arguments: {...},</span></span>
<span class="line"><span style="color:#24292e;">    a: 2,</span></span>
<span class="line"><span style="color:#24292e;">    innerFoo: &lt;innerFoo reference&gt;,</span></span>
<span class="line"><span style="color:#24292e;">    this: Window</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="访问非局部变量" tabindex="-1">访问非局部变量 <a class="header-anchor" href="#访问非局部变量" aria-label="Permalink to &quot;访问非局部变量&quot;">​</a></h2><p>js是一门函数式编程语言，支持过程（函数嵌套）定义，这样对于非局部数据的访问就比较麻烦，需要在每个执行上下文中加入访问链（作用域链），作用域链是由当前环境与上层环境的一系列变量对象组成，它保证了当前执行环境对符合访问权限的变量和函数的有序访问。对应的上例chrome断点调试右侧的scope信息。</p><p>正是由于这种作用域链的特性，出现一个重要的概念：闭包 <img src="`+s+`" alt="图片"> 可以看到这个时候Scope链多了一个<code>Closure(foo)</code> <br> 闭包是一种特殊的对象。它由两部分组成：执行上下文(<code>foo()</code>)，以及在该执行上下文中创建的函数（<code>innerFoo()</code>）。<br> 当<code>innerFoo()</code>执行时，如果访问了<code>foo()</code>中变量对象中的值，那么闭包就会产生。Chrome用foo来表示闭包。<br></p><h2 id="内存管理-1" tabindex="-1">内存管理 <a class="header-anchor" href="#内存管理-1" aria-label="Permalink to &quot;内存管理&quot;">​</a></h2><p>内存空间生命周期：</p><ul><li>分配所需要的内存；</li><li>使用分配到的内存（读、写）；</li><li>不需要时将其释放、归还；</li></ul><p>对于函数调用创建的执行上下文，通常当其执行完毕后，其执行环境就被销毁，变量对象所占用的空间都会被回收，但是当我们使用了闭包时，就不一定了。</p><div class="info custom-block"><p class="custom-block-title">示例</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">assignHandler</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> element </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;someElement&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    element.</span><span style="color:#B392F0;">onclick</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">alert</span><span style="color:#E1E4E8;">(element.id);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">assignHandler</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">assignHandler</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> element </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">getElementById</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;someElement&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    element.</span><span style="color:#6F42C1;">onclick</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">alert</span><span style="color:#24292E;">(element.id);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6F42C1;">assignHandler</span><span style="color:#24292E;">();</span></span></code></pre></div><p>上面例子中，element的点击事件处理程序内访问了其包含执行上下文(assignHandler())变量对象中的element变量，这会导致虽然assignHandler()执行完毕，但是其变量对象还是不能得到回收，一种减少此情况下内存泄漏影响的方法是：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">assignHandler</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> element </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;someElement&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> id </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> element.id;</span></span>
<span class="line"><span style="color:#E1E4E8;">    element.</span><span style="color:#B392F0;">onclick</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">alert</span><span style="color:#E1E4E8;">(id);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    element </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">assignHandler</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">assignHandler</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> element </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">getElementById</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;someElement&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> id </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> element.id;</span></span>
<span class="line"><span style="color:#24292E;">    element.</span><span style="color:#6F42C1;">onclick</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">alert</span><span style="color:#24292E;">(id);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    element </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6F42C1;">assignHandler</span><span style="color:#24292E;">();</span></span></code></pre></div><p>虽然assignHandler()的变量对象不能被回收，但是element变量被显式赋值为null后，其引用的堆中DOM对象将被回收，降低了内存泄漏影响。</p><p>全局上下文将一直存在直到程序结束。对于全局上下文的变量对象所占用的空间，尤其是在堆中分配的对象空间的管理。</p></div>`,34),r=[c];function i(E,y,d,F,u,g){return a(),l("div",null,r)}const m=n(t,[["render",i]]);export{h as __pageData,m as default};