import{_ as i,C as t,o as a,c,k as e,a as o,H as d,Q as s}from"./chunks/framework.5b0c684c.js";const g=JSON.parse('{"title":"同源策略","description":"","frontmatter":{},"headers":[],"relativePath":"web-optimization/safe/index.md","filePath":"web-optimization/safe/index.md","lastUpdated":1729031503000}'),r={name:"web-optimization/safe/index.md"},n=e("h1",{id:"同源策略",tabindex:"-1"},[o("同源策略 "),e("a",{class:"header-anchor",href:"#同源策略","aria-label":'Permalink to "同源策略"'},"​")],-1),p=s('<h2 id="file域的同源策略" tabindex="-1">file域的同源策略 <a class="header-anchor" href="#file域的同源策略" aria-label="Permalink to &quot;file域的同源策略&quot;">​</a></h2><p>在之前的浏览器中，任意两个file域的URI被认为是同源的。本地磁盘上的任何HTML文件都可以读取本地磁盘上的任何其他文件。</p><p>从Gecko 1.9开始，文件使用了更细致的同源策略，只有当源文件的父目录是目标文件的祖先目录时，文件才能读取另一个文件。</p><h2 id="cookie的同源策略" tabindex="-1">cookie的同源策略 <a class="header-anchor" href="#cookie的同源策略" aria-label="Permalink to &quot;cookie的同源策略&quot;">​</a></h2><p>cookie使用不同的源定义方式，一个页面可以为本域和任何父域设置cookie，只要是父域不是公共后缀(public suffix)即可。</p><p>不管使用哪个协议(HTTP/HTTPS)或端口号，浏览器都允许给定的域以及其任何子域名访问cookie。设置 cookie时，可以使用 <code>domain</code> / <code>path</code> / <code>secure</code> 和 <code>http-only</code> 标记来限定其访问性。</p><p>所以 <code>https://localhost:8080/</code> 和 <code>http://localhost:8081/</code> 的Cookie是共享的</p><h2 id="flash-silverlight跨域" tabindex="-1">Flash/SilverLight跨域 <a class="header-anchor" href="#flash-silverlight跨域" aria-label="Permalink to &quot;Flash/SilverLight跨域&quot;">​</a></h2><p>浏览器的各种插件也存在跨域需求。通常是通过在服务器配置crossdomain.xml，设置本服务允许哪些域名的跨域访问。</p><p>客户端会请求此文件，如果发现自己的域名在访问列表里，就发起真正的请求，否则不发送请求。</p><h2 id="源的更改" tabindex="-1">源的更改 <a class="header-anchor" href="#源的更改" aria-label="Permalink to &quot;源的更改&quot;">​</a></h2><p>同源策略认为域和子域属于不同的域，例如 <code>child1.a.com</code> 与 <code>a.com</code> 、 <code>child1.a.com</code> 与 <code>child2.a.com</code> 、 <code>xxx.child1.a.com</code> 与 <code>child1.a.com</code> 两两不同源。</p><p>对于这种情况，可以在两个方面各自设置 document.domain=&#39;a.com&#39; 来改变其源来实现以上任意两个页面之间的通信。</p><p>另外因为浏览器单独保存端口号，这种赋值会导致端口号被重写为 <code>null</code> 。</p><h2 id="跨源访问" tabindex="-1">跨源访问 <a class="header-anchor" href="#跨源访问" aria-label="Permalink to &quot;跨源访问&quot;">​</a></h2><p>同源策略控制了不同源之间的交互，这些交互通常分为三类：</p><ul><li>通常允许跨域写操作(Cross-origin writes)：链接(links)、重定向、表单提交。</li><li>通常允许跨域资源嵌入(Cross-origin embedding)</li><li>通常不允许跨域读操作(Cross-origin reads)</li></ul><div class="info custom-block"><p class="custom-block-title">可能嵌入跨源的资源的一些示例有：</p><ul><li><code>&lt;script src=&quot;...&quot;&gt;&lt;/script&gt;</code> 标签嵌入跨域脚本。语法错误信息只能在同源脚本中捕捉到。</li><li><code>&lt;link rel=&quot;stylesheet&quot; href=&quot;...&quot;&gt;</code> 标签嵌入CSS。由于CSS的松散的语法规则，CSS的跨域需要一个设置正确的Content-Type 消息头。</li><li><code>&lt;img&gt;</code> / <code>&lt;video&gt;</code> / <code>&lt;audio&gt;</code> 嵌入多媒体资源。</li><li><code>&lt;object&gt;</code> 、 <code>&lt;embed&gt;</code> 和 <code>&lt;applet&gt;</code> 的插件。</li><li><code> @font-face</code> 引入的字体。一些浏览器允许跨域字体( cross-origin fonts)，一些需要同源字体(same-origin fonts)。</li><li><code>&lt;frame&gt;</code> 和 <code>&lt;iframe&gt;</code> 载入的任何资源。站点可以使用X-Frame-Options消息头来阻止这种形式的跨域交互。</li></ul></div><h2 id="jsonp跨域" tabindex="-1">JSONP跨域 <a class="header-anchor" href="#jsonp跨域" aria-label="Permalink to &quot;JSONP跨域&quot;">​</a></h2><p>JSONP就是利用 <code>&lt;script&gt;</code> 标签的跨域能力实现跨域数据的访问，请求动态生成的JavaScript脚本同时带一个callback函数名作为参数。</p><p>服务端收到请求后，动态生成脚本产生数据，并在代码中以产生的数据为参数调用callback函数。</p><p>JSONP也存在一些安全问题，例如当对传入/传回参数没有做校验就直接执行返回的时候，会造成XSS问题。没有做Referer或Token校验就给出数据的时候，可能会造成数据泄露。</p><p>另外JSONP在没有设置callback函数的白名单情况下，可以合法的做一些设计之外的函数调用，引入问题。这种攻击也被称为SOME攻击。</p><h2 id="跨源脚本api访问" tabindex="-1">跨源脚本API访问 <a class="header-anchor" href="#跨源脚本api访问" aria-label="Permalink to &quot;跨源脚本API访问&quot;">​</a></h2><p>Javascript的APIs中，如 iframe.contentWindow , window.parent, window.open 和 window.opener 允许文档间相互引用。当两个文档的源不同时，这些引用方式将对 window 和 location 对象的访问添加限制。</p><p>window 允许跨源访问的方法有：</p><ul><li>window.blur</li><li>window.close</li><li>window.focus</li><li>window.postMessage</li></ul><p>window 允许跨源访问的属性有：</p><ul><li>window.closed</li><li>window.frames</li><li>window.length</li><li>window.location</li><li>window.opener</li><li>window.parent</li><li>window.self</li><li>window.top</li><li>window.window</li></ul><p>其中 window.location 允许读/写，其他的属性只允许读。</p><h2 id="跨源数据存储访问" tabindex="-1">跨源数据存储访问 <a class="header-anchor" href="#跨源数据存储访问" aria-label="Permalink to &quot;跨源数据存储访问&quot;">​</a></h2><p>存储在浏览器中的数据，如 localStorage 和 IndexedDB，以源进行分割。每个源都拥有自己单独的存储空间，一个源中的Javascript脚本不能对属于其它源的数据进行读写操作。</p><h2 id="cors" tabindex="-1">CORS <a class="header-anchor" href="#cors" aria-label="Permalink to &quot;CORS&quot;">​</a></h2><p>CORS是一个W3C标准，全称是跨域资源共享(Cross-origin resource sharing)。通过这个标准，可以允许浏览器读取跨域的资源。</p><h2 id="常见请求头" tabindex="-1">常见请求头 <a class="header-anchor" href="#常见请求头" aria-label="Permalink to &quot;常见请求头&quot;">​</a></h2><ul><li><p>Origin</p><blockquote><p>预检请求或实际请求的源站URI, 浏览器请求默认会发送该字段：<code>Origin: &lt;origin&gt;</code></p></blockquote></li><li><p>Access-Control-Request-Method</p><blockquote><p>声明请求使用的方法：<code>Access-Control-Request-Method: &lt;method&gt;</code></p></blockquote></li><li><p>Access-Control-Request-Headers</p><blockquote><p>声明请求使用的header字段：<code>Access-Control-Request-Headers: &lt;field-name&gt;[, &lt;field-name&gt;]*</code></p></blockquote></li></ul><h2 id="常见返回头" tabindex="-1">常见返回头 <a class="header-anchor" href="#常见返回头" aria-label="Permalink to &quot;常见返回头&quot;">​</a></h2><ul><li><p>Access-Control-Allow-Origin</p><blockquote><p>声明允许访问的源外域URI；</p><p>对于携带身份凭证的请求不可使用通配符 <code>*</code></p><p><code>Access-Control-Allow-Origin: &lt;origin&gt; | *</code></p></blockquote></li><li><p>Access-Control-Expose-Headers</p><blockquote><p>声明允许暴露的头；</p><p><code>Access-Control-Expose-Headers: X-My-Custom-Header, X-Another-Custom-Header</code></p></blockquote></li><li><p>Access-Control-Max-Age</p><blockquote><p>声明Cache时间；</p><p><code>Access-Control-Max-Age: &lt;delta-seconds&gt;</code></p></blockquote></li><li><p>Access-Control-Allow-Credentials</p><blockquote><p>声明是否允许在请求中带入</p><p><code>Access-Control-Allow-Credentials: true</code></p></blockquote></li><li><p>Access-Control-Allow-Methods</p><blockquote><p>声明允许的访问方式</p><p><code>Access-Control-Allow-Methods: &lt;method&gt;[, &lt;method&gt;]*</code></p></blockquote></li><li><p>Access-Control-Allow-Headers</p><blockquote><p>声明允许的头</p><p><code>Access-Control-Allow-Headers: &lt;field-name&gt;[, &lt;field-name&gt;]*</code></p></blockquote></li></ul><div class="tip custom-block"><p class="custom-block-title">防御建议</p><ol><li>如非必要不开启CORS；</li><li>定义详细的白名单，不使用通配符，仅配置所需要的头；</li><li>配置 Vary: Origin 头部；</li><li>如非必要不使用 <code>Access-Control-Allow-Credentials</code>；</li><li>限制缓存的时间；</li></ol></div><h2 id="阻止跨源访问" tabindex="-1">阻止跨源访问 <a class="header-anchor" href="#阻止跨源访问" aria-label="Permalink to &quot;阻止跨源访问&quot;">​</a></h2><p>阻止跨域写操作，可以检测请求中的 CSRF token ，这个标记被称为Cross-Site Request Forgery (CSRF) 标记。</p><p>阻止资源的跨站读取，因为嵌入资源通常会暴露信息，需要保证资源是不可嵌入的。但是多数情况下浏览器都不会遵守 Content-Type 消息头。例如如果在HTML文档中指定 <code>&lt;script&gt;</code> 标记，则浏览器会尝试将HTML解析为JavaScript。</p>',42);function h(u,m,b,w,k,q){const l=t("lines");return a(),c("div",null,[n,e("p",null,[o("同源策略限制了不同源之间如何进行资源交互，是用于隔离潜在恶意文件的重要安全机制。 是否同源由URL决定，URL由协议、域名、端口和路径组成，"),d(l,{text:"如果两个URL的协议、域名和端口相同，则表示他们同源"}),o("。")]),p])}const C=i(r,[["render",h]]);export{g as __pageData,C as default};
