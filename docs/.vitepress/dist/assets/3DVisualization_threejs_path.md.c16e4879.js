import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.5b0c684c.js";const C=JSON.parse('{"title":"path类","description":"","frontmatter":{},"headers":[],"relativePath":"3DVisualization/threejs/path.md","filePath":"3DVisualization/threejs/path.md","lastUpdated":1729031503000}'),o={name:"3DVisualization/threejs/path.md"},p=l(`<h1 id="path类" tabindex="-1">path类 <a class="header-anchor" href="#path类" aria-label="Permalink to &quot;path类&quot;">​</a></h1><blockquote><p>Path是一个多用途的路径（路径）对象，它通常在创建Shape对象时使用。</p><p>可以定义多条直线或曲线路径，以及其交点。Path可以由多个子路径构成，每个子路径可以包含多个路径段。</p></blockquote><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">path</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Path</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">path</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">THREE</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Path</span><span style="color:#24292E;">();</span></span></code></pre></div><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><ul><li>currentPoint : Vector2 <blockquote><p>表示当前路径点对象的属性。默认情况下，它是（0,0）。</p></blockquote></li><li>autoClose <blockquote><p>表示路径是否自动关闭的属性。默认情况下，它是false。</p></blockquote></li></ul><h2 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-label="Permalink to &quot;方法&quot;">​</a></h2><ul><li>.moveTo ( x : Float, y : Float ) - 起点</li><li>.lineTo ( x : Float, y : Float )</li><li>.quadraticCurveTo ( cpX : Float, cpY : Float, x : Float, y : Float ) - 二次贝塞尔曲线</li><li>.bezierCurveTo ( cp1X : Float, cp1Y : Float, cp2X : Float, cp2Y : Float, x : Float, y : Float ) - 三次贝塞尔曲线</li><li>.arc(aX, aY, aRadius, aStartAngle, aEndAngle, aClockwise) - 相对</li><li>.ellipse(aX, aY, xRadius,yRadius, aStartAngle, aEndAngle, aClockwise)- 相对</li><li>.absarc(aX, aY, aRadius, aStartAngle, aEndAngle, aClockwise) -绝对</li><li>.absellipse(aX, aY, xRadius,yRadius, aStartAngle, aEndAngle, aClockwise) - 绝对</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">path</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Path</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  path.</span><span style="color:#B392F0;">moveTo</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">50</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">50</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  path.</span><span style="color:#B392F0;">lineTo</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  path.</span><span style="color:#B392F0;">absarc</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">90</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">50</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,Math.</span><span style="color:#79B8FF;">PI</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  path.autoClose </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">pathPoints</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> path.</span><span style="color:#B392F0;">getPoints</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">pathGeometry</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">BufferGeometry</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">setFromPoints</span><span style="color:#E1E4E8;">(pathPoints)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">pathMesh</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Line</span><span style="color:#E1E4E8;">(pathGeometry,curvePathMaterial)</span></span>
<span class="line"><span style="color:#E1E4E8;">  scene.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(pathMesh)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">path</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">THREE</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Path</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  path.</span><span style="color:#6F42C1;">moveTo</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">50</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">50</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  path.</span><span style="color:#6F42C1;">lineTo</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">100</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">100</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  path.</span><span style="color:#6F42C1;">absarc</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">100</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">90</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">50</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,Math.</span><span style="color:#005CC5;">PI</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  path.autoClose </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">pathPoints</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> path.</span><span style="color:#6F42C1;">getPoints</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">100</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">pathGeometry</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">THREE</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">BufferGeometry</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">setFromPoints</span><span style="color:#24292E;">(pathPoints)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">pathMesh</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">THREE</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Line</span><span style="color:#24292E;">(pathGeometry,curvePathMaterial)</span></span>
<span class="line"><span style="color:#24292E;">  scene.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(pathMesh)</span></span></code></pre></div>`,8),e=[p];function t(c,r,E,y,i,F){return a(),n("div",null,e)}const d=s(o,[["render",t]]);export{C as __pageData,d as default};
