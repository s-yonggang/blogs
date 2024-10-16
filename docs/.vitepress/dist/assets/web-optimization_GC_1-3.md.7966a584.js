import{_ as o,C as i,o as t,c,k as a,a as l,H as r,Q as p}from"./chunks/framework.5b0c684c.js";const s="/blogs/assets/GC_1-3_1.5fc51613.png",n="/blogs/assets/GC_1-3_2.6124acb4.png",T=JSON.parse('{"title":"GC","description":"","frontmatter":{},"headers":[],"relativePath":"web-optimization/GC/1-3.md","filePath":"web-optimization/GC/1-3.md","lastUpdated":1729031503000}'),d={name:"web-optimization/GC/1-3.md"},u=p('<h1 id="gc" tabindex="-1">GC <a class="header-anchor" href="#gc" aria-label="Permalink to &quot;GC&quot;">​</a></h1><h2 id="垃圾回收策略" tabindex="-1">垃圾回收策略 <a class="header-anchor" href="#垃圾回收策略" aria-label="Permalink to &quot;垃圾回收策略&quot;">​</a></h2><p>JavaScript 的垃圾回收策略是基于引用计数的。其主要思想是如果一个对象没有任何引用指向它，那么它就是垃圾，可以被回收。</p><ol><li><code>标记-清除</code>（Mark-and-Sweep）: 这是最常见的垃圾回收算法。它包含两个阶段：</li></ol><blockquote><p>标记阶段: 垃圾回收器遍历根对象（全局变量、局部变量和活动函数调用）并标记所有可以到达的对象。</p><p>清除阶段: 垃圾回收器然后扫描内存并释放未标记对象的内存空间。</p></blockquote><ol start="2"><li><code>引用计数</code>（Reference-Counting）: 该策略跟踪对每个对象的引用数。如果一个对象的引用数为零，那么它就是垃圾，可以被回收。然而，这种策略存在一个问题，即循环引用，其中两个对象相互引用但无法从根对象访问。</li><li><code>增量式垃圾回收</code>（Incremental Garbage Collection）: 该策略将垃圾回收过程分解成更小、更可管理的块，使应用程序在垃圾回收过程中可以继续运行。</li><li><code>分代式垃圾回收</code>（Generational Garbage Collection）: 该策略将堆分为不同的代，根据对象的年龄将它们分为新生代和老生代。新生代中的对象通常被分配在其中，而老生代中的对象通常被分配在其中。垃圾回收器首先关注新生代中的垃圾回收，然后转向老生代。</li></ol><h2 id="引用计数" tabindex="-1">引用计数 <a class="header-anchor" href="#引用计数" aria-label="Permalink to &quot;引用计数&quot;">​</a></h2><p>引用计数 (Reference-Counting) 算法是一种垃圾回收算法，其工作原理是跟踪对象的引用计数。如果对象的引用计数为零，那么该对象被视为垃圾，可以被回收。</p><h3 id="引用计数原理" tabindex="-1">引用计数原理 <a class="header-anchor" href="#引用计数原理" aria-label="Permalink to &quot;引用计数原理&quot;">​</a></h3><div class="info custom-block"><p class="custom-block-title">引用计数原理流程</p><ol><li><p>根对象识别:</p><ul><li>根对象包括全局变量、局部变量、活动函数调用的上下文、以及在调用栈 (call stack) 中的变量。</li><li>根对象可以直接访问的对象被标记为 &quot;可到达&quot; (reachable)。例如，如果在全局变量中存储了一个对象，那么该对象就是可到达的。</li></ul></li><li><p>引用计数的跟踪:</p><ul><li>垃圾回收器会检查所有可到达的根对象，并跟踪它们的直接属性 (direct properties) 和间接属性 (indirect properties)。</li><li>例如，如果一个可到达的对象 A 有一个属性 B，并且 B 也是一个可到达的对象，那么 B 的引用计数会加 1。</li><li>垃圾回收器会重复此过程，直到所有可到达的对象的引用计数都被跟踪。</li></ul></li><li><p>引用计数的更新:</p><ul><li>垃圾回收器会在以下情况更新对象的引用计数： <blockquote><p>当一个对象的属性被赋值为另一个对象时，该对象的引用计数会加 1。</p><p>当一个对象的属性被删除或设置为 null 时，该对象的引用计数会减 1。</p></blockquote></li></ul></li><li><p>不可到达对象的标记:</p><ul><li>所有未标记的对象都被视为不可到达 (unreachable) 或垃圾 (garbage)。</li><li>垃圾回收器会将所有不可到达的对象标记为 &quot;不可到达&quot;。</li></ul></li><li><p>内存释放:</p><ul><li>引用计数算法的最后一步是释放不可到达对象的内存空间。</li><li>垃圾回收器会将不可到达对象的内存空间返回给操作系统。</li></ul></li></ol><p><strong>循环引用问题</strong>:</p><p>引用计数算法也存在循环引用问题，即如果两个对象相互引用，并且没有其他根对象可以访问它们，那么这两个对象都将被标记为 &quot;可到达&quot;，从而无法被回收。</p></div><h3 id="引用计数算法优缺点" tabindex="-1">引用计数算法优缺点 <a class="header-anchor" href="#引用计数算法优缺点" aria-label="Permalink to &quot;引用计数算法优缺点&quot;">​</a></h3><p><strong>优点</strong>:</p><ul><li>实现简单：引用计数算法的实现相对简单，不需要跟踪对象的引用路径。</li><li>实时性：引用计数算法可以立即回收不可到达的对象，不需要等待特定事件或周期。</li><li>高效：引用计数算法的执行速度相对较快，因为它不需要跟踪对象的引用路径。</li></ul><p><strong>缺点</strong>:</p><ul><li>循环引用问题：如果两个对象相互引用，并且没有其他根对象可以访问它们，那么这两个对象都将被标记为 &quot;可到达&quot;，从而无法被回收。</li><li>内存碎片：引用计数算法可能造成内存碎片，因为它不移动对象的内存位置。</li><li>额外的开销：引用计数算法需要在每次对对象的属性进行赋值或删除时更新对象的引用计数。</li></ul><h2 id="标记-清除算法" tabindex="-1">标记-清除算法 <a class="header-anchor" href="#标记-清除算法" aria-label="Permalink to &quot;标记-清除算法&quot;">​</a></h2><p>标记-清除算法的工作原理是标记出所有可到达的 (reachable) 对象，然后清除所有未标记的 (unreachable) 对象。</p><h3 id="标记-清除算法原理" tabindex="-1">标记-清除算法原理 <a class="header-anchor" href="#标记-清除算法原理" aria-label="Permalink to &quot;标记-清除算法原理&quot;">​</a></h3><div class="info custom-block"><p class="custom-block-title">标记-清除算法原理流程</p><p><code>标记阶段 (Mark Phase)</code>:</p><ol><li><p>根对象识别:</p><ul><li>垃圾回收器从根对象 (root objects) 开始，根对象包括全局变量、局部变量、活动函数调用的上下文、以及在调用栈 (call stack) 中的变量。</li><li>根对象可以直接访问的对象被标记为 &quot;可到达&quot; (reachable)。例如，如果在全局变量中存储了一个对象，那么该对象就是可到达的。</li></ul></li><li><p>可到达对象的标记：</p><ul><li>垃圾回收器会检查所有可到达的根对象，并标记它们为 &quot;可到达&quot;。</li><li>接下来，垃圾回收器会检查所有可到达对象的直接属性 (direct properties) 和间接属性 (indirect properties)。</li><li>例如，如果一个可到达的对象 A 有一个属性 B，并且 B 也是一个可到达的对象，那么 B 也会被标记为 &quot;可到达&quot;。</li><li>垃圾回收器会重复此过程，直到所有可到达的对象都被标记为 &quot;可到达&quot;。</li></ul></li><li><p>不可到达对象的标记:</p><ul><li>所有未标记的对象都被视为不可到达 (unreachable) 或垃圾 (garbage)。</li><li>垃圾回收器会将所有不可到达的对象标记为 &quot;不可到达&quot;。</li></ul></li></ol><p><code>清除阶段 (Sweep Phase)</code>:</p><ul><li>标记阶段完成后，垃圾回收器会对所有不可到达的对象进行清除。</li><li>也就是说，所有不可到达的对象都被视为垃圾，可以被回收。</li><li>垃圾回收器会释放不可到达对象的内存空间，并将其返回给操作系统。</li><li>注意，在清除阶段，垃圾回收器并不会移动对象的内存位置。相反，它会将所有可到达的对象整理到一端，并将不可到达的对象留在另一端。</li></ul><p><code>循环引用问题</code>：</p><ul><li>标记-清除算法也存在循环引用问题，即如果两个对象相互引用，并且没有其他根对象可以访问它们，那么这两个对象都将被标记为 &quot;可到达&quot;，从而无法被回收。</li><li>为了解决循环引用问题，可以采用其他的垃圾回收算法，例如标记-压缩 (Mark-and-Compact) 算法或引用计数 (Reference-Counting) 算法。</li></ul></div><h3 id="标记-清除算法优缺点" tabindex="-1">标记-清除算法优缺点 <a class="header-anchor" href="#标记-清除算法优缺点" aria-label="Permalink to &quot;标记-清除算法优缺点&quot;">​</a></h3><p>优点：</p><ul><li>它可以有效地回收内存，并且不需要移动对象的内存位置。</li><li>它可以与其他垃圾回收算法 (如标记-并行、标记-压缩) 相结合，提高垃圾回收的效率和性能。</li></ul><p>缺点：</p><ul><li>它会造成内存碎片 (memory fragmentation)，因为它在清除阶段会释放连续的内存空间，而不进行整理。</li><li>它需要暂停应用程序 (stop-the-world) 进行垃圾回收，这会造成性能损失。</li><li>它存在循环引用问题，即如果两个对象相互引用，并且没有其他根对象可以访问它们，那么这两个对象都将被标记为 &quot;可到达&quot;，从而无法被回收。</li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>一些 JavaScript 引擎 (如 V8) 采用了标记-清除算法的变体，例如<code>标记-并行</code> (Mark-and-Parallel)、<code>标记-压缩</code> (Mark-and-Compact) <code>和标记-清除-并行</code> (Mark-Sweep-and-Parallel) 算法，以提高垃圾回收的效率和性能。</p></div><h2 id="v8引擎-gc-优化" tabindex="-1">V8引擎 GC 优化 <a class="header-anchor" href="#v8引擎-gc-优化" aria-label="Permalink to &quot;V8引擎 GC 优化&quot;">​</a></h2><p>V8 JavaScript 引擎的垃圾回收 (GC) 机制是一种自动内存管理系统，旨在回收不再需要的内存，从而避免内存泄漏和提高应用程序的性能。V8 采用了分代式 GC 算法，将内存分为新生代和老生代，并使用不同的垃圾回收算法来处理这两代内存。</p><h2 id="新生代" tabindex="-1">新生代 <a class="header-anchor" href="#新生代" aria-label="Permalink to &quot;新生代&quot;">​</a></h2><p>新生代 (Young Generation): 新生代是 V8 引擎中最新的、大部分对象都存活的区域。新生代分为 From 空间和 To 空间，通常大小为 1 到 8 MB。新生代中的对象通过 <code>Scavenge</code> 算法进行垃圾回收。</p><div class="info custom-block"><p class="custom-block-title">Scavenge算法原理</p><ol><li>首先，V8 引擎将 From 空间中的活动对象复制到 To 空间中。</li><li>然后，V8 引擎将 From 空间中的非活动对象标记为可回收的。</li><li>接下来，V8 引擎将 To 空间中的非活动对象标记为可回收的。</li><li>最后，V8 引擎将 To 空间中的非活动对象回收，并将 To 空间和 From 空间进行交换。</li></ol></div><h2 id="老生代" tabindex="-1">老生代 <a class="header-anchor" href="#老生代" aria-label="Permalink to &quot;老生代&quot;">​</a></h2><p>老生代 (Old Generation): 老生代是 V8 引擎中存活时间较长的区域，其中包含大部分的全局对象和闭包。老生代中的对象通过<code> Mark-Sweep</code> 算法进行垃圾回收。</p><div class="info custom-block"><p class="custom-block-title">Mark-Sweep算法原理</p><ol><li>首先，V8 引擎将根对象（如全局对象、函数参数、本地变量等）标记为活动的。</li><li>然后，V8 引擎将根对象的所有引用的对象标记为活动的。</li><li>接下来，V8 引擎将所有未标记为活动的对象标记为可回收的。</li><li>最后，V8 引擎将可回收的对象回收，并将它们从内存中释放。</li></ol></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>请务必注意，JavaScript 引擎的具体实现细节可能会有所不同，并且某些引擎可能使用不同的垃圾回收算法或优化。请始终参考您正在使用的 JavaScript 引擎的文档，以获取最准确的信息。</p></div><h2 id="全停顿-stop-the-world" tabindex="-1">全停顿 Stop-The-World <a class="header-anchor" href="#全停顿-stop-the-world" aria-label="Permalink to &quot;全停顿 Stop-The-World&quot;">​</a></h2><p>由于垃圾回收是在JS引擎中进行的，而Mark-Compact算法在执行过程中需要移动对象，而当活动对象较多的时候，它的执行速度不可能很快，为了避免JavaScript应用逻辑和垃圾回收器的内存资源竞争导致的不一致性问题，垃圾回收器会将JavaScript应用暂停，这个过程，被称为<code>全停顿（stop-the-world）</code>。</p><blockquote><p>如果一次GC需要100ms，应用逻辑就会暂停100ms。全停顿的策略导致垃圾回收中不能及时响应用户的输入，而且如果有动画会造成动画效果的卡顿。</p></blockquote><p>在 V8 的分代式垃圾回收中,新生代中存活对象通常较少,所以即便它是全停顿的影响也不大。但 V8 的老生代配置得较大,且存活对象较多,全堆垃圾回收的标记、清理、整理等动作造成的停顿就会比较明显。</p><h2 id="orinoco-优化" tabindex="-1">Orinoco 优化 <a class="header-anchor" href="#orinoco-优化" aria-label="Permalink to &quot;Orinoco 优化&quot;">​</a></h2><p>Orinoco 是 V8 垃圾回收器项目的代号，旨在提高 V8 引擎的垃圾回收效率和性能。它利用最新的和最好的垃圾回收技术来降低主线程挂起的时间：<code>并行垃圾回收</code>、<code>增量垃圾回收</code>、<code>延迟清理</code>和<code>并发垃圾回收</code>。其主要目的是进一步利用多核性能降低每次停顿的时间，提升用户体验。</p><h2 id="并行垃圾回收" tabindex="-1">并行垃圾回收 <a class="header-anchor" href="#并行垃圾回收" aria-label="Permalink to &quot;并行垃圾回收&quot;">​</a></h2><p>使用多个线程并行执行垃圾回收操作 （&quot;stop-the-world&quot;中的工作） ，以提高垃圾回收的吞吐量，垃圾回收所耗费的时间等于总时间除以参与的线程数量（加上一些同步开销）。这包括并行标记、并行清除、并行整理等操作。</p><p><img src="'+s+'" alt="图片"></p><h2 id="增量垃圾回收" tabindex="-1">增量垃圾回收 <a class="header-anchor" href="#增量垃圾回收" aria-label="Permalink to &quot;增量垃圾回收&quot;">​</a></h2><p>增量式垃圾回收是主线程间歇性的去做少量的垃圾回收的方式。不会在增量式垃圾回收的时候执行整个垃圾回收的过程，只是整个垃圾回收过程中的一小部分工作。（期间可以穿插主线程代码运行）</p><p>但是在 JavaScript 中做这样的工作是极其困难的，因为 JavaScript 也在做增量式垃圾回收的时候同时执行，这意味着堆的状态已经发生了变化，这有可能会导致之前的增量回收工作完全无效。但这仍然是解决问题的好方法，通过 JavaScript 间歇性执行，同时也间歇性进行垃圾回收，两者交替执行，从而提高效率。</p><p><img src="'+n+'" alt="图片"></p><h2 id="并发垃圾回收" tabindex="-1">并发垃圾回收 <a class="header-anchor" href="#并发垃圾回收" aria-label="Permalink to &quot;并发垃圾回收&quot;">​</a></h2><p>并发是主线程一直执行 JavaScript，而辅助线程在后台完全的执行垃圾回收。这种方式是这三种技术中最难的一种，JavaScript 堆里面的内容随时都有可能发生变化，从而使之前做的工作完全无效。最重要的是，现在有读/写竞争（read/write races），主线程和辅助线程极有可能在同一时间去更改同一个对象。这种方式的优势也非常明显，主线程不会被挂起，JavaScript 可以自由地执行 ，尽管为了保证同一对象同一时间只有一个辅助线程在修改而带来的一些同步开销。</p><h2 id="延迟清理-lazy-sweeping" tabindex="-1">延迟清理(Lazy Sweeping) <a class="header-anchor" href="#延迟清理-lazy-sweeping" aria-label="Permalink to &quot;延迟清理(Lazy Sweeping)&quot;">​</a></h2><p>增量标记只是对活动对象和非活动对象进行标记,对于真正的清理释放内存,V8 则采用的是 延迟清理。</p><p>之所以采用<code>延迟清理(Lazy Sweeping)</code>,是因为当增量标记完成后,假如当前的可用内存足以让我们快速的执行代码,所以没必要立即清理内存或者只清理部分垃圾,而不清理全部。</p><p>增量标记和延迟清理的出现,极大改善了 &quot;全停顿&quot; 的现象。但是增量标记是标记一点,JavaScript执行一段,那如果你刚标记完一个活动对象,js代码就把该对象设置为非活动对象或者反过来,这就有可能引起对象引用改变,标记错误的现象。这就需要使用 <code>写入屏障</code> 技术来记录这些引用关系的变化。</p>',53),h={class:"tip custom-block"},b=a("p",{class:"custom-block-title"},"写入屏障（write barriers）",-1),q=a("h2",{id:"三色标记法",tabindex:"-1"},[l("三色标记法 "),a("a",{class:"header-anchor",href:"#三色标记法","aria-label":'Permalink to "三色标记法"'},"​")],-1),m=a("p",null,"老生代是采用标记清理算法,在没有采用增量算法之前,单纯使用黑色和白色来标记数据就可以了,其标记流程即在一次执行完整的标记前,垃圾回收会将所有数据设置为白色,然后从根开始深度遍历,将所有能访问到的数据标记为黑色,标记为黑色的数据对象就是活动对象,剩余的白色数据对象也就是待清理的垃圾对象。",-1),_=a("p",null,"如果采用黑白的标记策略,那么垃圾回收器执行了一段增量回收后,暂停后启用主线程去执行了 JavaScript 应用程序,随后垃圾回收器再次被启动,这时候内存黑白色都有,我们便不能得知下一步走到哪里了。",-1),k=a("p",null,"为了解决这个问题,V8 团队采用了一种特殊方式,即 三色标记法,也就是使用每个对象的两个标记位和一个标记工作表来实现标记。",-1),f=a("p",null,"其中两个标记位编码三种颜色：白色（00），灰色（10）和黑色（11）。",-1),g=a("p",null,"最初所有的对象都是白色，意味着收集器还没有发现他们。当收集器发现一个对象时,将其标记为灰色并推入到标记工作表中。当收集器从标记工作表中弹出对象并访问他的所有字段时，灰色就会变成黑色。这种方案被称做 三色标记法。当没有灰色对象时,标记结束。所有剩余的白色对象无法达到，可以被安全的回收。",-1),v=a("p",null,"采用 三色标记法 后我们在恢复执行时就好办多了,可以直接通过当前内存中没有灰色节点来判断整个标记是否完成,如没有灰色节点,直接进入清理阶段,如还有灰色标记,恢复时直接从灰色的节点开始执行即可。",-1);function S(P,V,C,x,w,G){const e=i("lines");return t(),c("div",null,[u,a("div",h,[b,a("p",null,[l("内存屏障（英语：Memory barrier），也称内存栅栏，内存栅障，屏障指令等，是一类同步屏障指令，"),r(e,{text:"它使得 CPU 或编译器在对内存进行操作的时候, 严格按照一定的顺序来执行"}),l("。")])]),q,m,_,k,f,g,v])}const M=o(d,[["render",S]]);export{T as __pageData,M as default};
