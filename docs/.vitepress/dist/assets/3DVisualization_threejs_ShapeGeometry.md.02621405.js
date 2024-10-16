import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.5b0c684c.js";const h=JSON.parse('{"title":"ShapeGeometry","description":"","frontmatter":{},"headers":[],"relativePath":"3DVisualization/threejs/ShapeGeometry.md","filePath":"3DVisualization/threejs/ShapeGeometry.md","lastUpdated":1729031503000}'),l={name:"3DVisualization/threejs/ShapeGeometry.md"},o=p(`<h1 id="shapegeometry" tabindex="-1">ShapeGeometry <a class="header-anchor" href="#shapegeometry" aria-label="Permalink to &quot;ShapeGeometry&quot;">​</a></h1><p>从一个或多个路径形状(Shape)中创建一个<code>单面</code>多边形几何体。</p><p><strong>ShapeGeometry(shapes : Array, curveSegments : Integer)</strong></p><ul><li><p>shapes: 一个单独的shape，或者一个包含形状的Array。默认是单个三角形。</p></li><li><p>curveSegments: 每一个形状的分段数，默认值为12。</p></li></ul><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><p>共有属性请参见其基类BufferGeometry。</p><h2 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-label="Permalink to &quot;方法&quot;">​</a></h2><p>共有方法请参见其基类BufferGeometry。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">y</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">shape</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Shape</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">shape.</span><span style="color:#B392F0;">moveTo</span><span style="color:#E1E4E8;">( x </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">, y </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;"> );</span></span>
<span class="line"><span style="color:#E1E4E8;">shape.</span><span style="color:#B392F0;">bezierCurveTo</span><span style="color:#E1E4E8;">( x </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">, y </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">, x </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, y, x, y );</span></span>
<span class="line"><span style="color:#E1E4E8;">shape.</span><span style="color:#B392F0;">bezierCurveTo</span><span style="color:#E1E4E8;">( x </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">, y, x </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">, y </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">,x </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">, y </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;"> );</span></span>
<span class="line"><span style="color:#E1E4E8;">shape.</span><span style="color:#B392F0;">bezierCurveTo</span><span style="color:#E1E4E8;">( x </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">, y </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">11</span><span style="color:#E1E4E8;">, x </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, y </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">15.4</span><span style="color:#E1E4E8;">, x </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">, y </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">19</span><span style="color:#E1E4E8;"> );</span></span>
<span class="line"><span style="color:#E1E4E8;">shape.</span><span style="color:#B392F0;">bezierCurveTo</span><span style="color:#E1E4E8;">( x </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">12</span><span style="color:#E1E4E8;">, y </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">15.4</span><span style="color:#E1E4E8;">, x </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">16</span><span style="color:#E1E4E8;">, y </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">11</span><span style="color:#E1E4E8;">, x </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">16</span><span style="color:#E1E4E8;">, y </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;"> );</span></span>
<span class="line"><span style="color:#E1E4E8;">shape.</span><span style="color:#B392F0;">bezierCurveTo</span><span style="color:#E1E4E8;">( x </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">16</span><span style="color:#E1E4E8;">, y </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">, x </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">16</span><span style="color:#E1E4E8;">, y, x </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">, y );</span></span>
<span class="line"><span style="color:#E1E4E8;">shape.</span><span style="color:#B392F0;">bezierCurveTo</span><span style="color:#E1E4E8;">( x </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">, y, x </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">, y </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">, x </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">, y </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;"> );</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">geometry</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">ShapeGeometry</span><span style="color:#E1E4E8;">( shape );</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">material</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">MeshBasicMaterial</span><span style="color:#E1E4E8;">( { color: </span><span style="color:#79B8FF;">0x00ff00</span><span style="color:#E1E4E8;"> } );</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">mesh</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Mesh</span><span style="color:#E1E4E8;">( geometry, material ) ;</span></span>
<span class="line"><span style="color:#E1E4E8;">scene.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">( mesh );</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">y</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">shape</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">THREE</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Shape</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">shape.</span><span style="color:#6F42C1;">moveTo</span><span style="color:#24292E;">( x </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">, y </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5</span><span style="color:#24292E;"> );</span></span>
<span class="line"><span style="color:#24292E;">shape.</span><span style="color:#6F42C1;">bezierCurveTo</span><span style="color:#24292E;">( x </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">, y </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">, x </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">, y, x, y );</span></span>
<span class="line"><span style="color:#24292E;">shape.</span><span style="color:#6F42C1;">bezierCurveTo</span><span style="color:#24292E;">( x </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">6</span><span style="color:#24292E;">, y, x </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">6</span><span style="color:#24292E;">, y </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">7</span><span style="color:#24292E;">,x </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">6</span><span style="color:#24292E;">, y </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">7</span><span style="color:#24292E;"> );</span></span>
<span class="line"><span style="color:#24292E;">shape.</span><span style="color:#6F42C1;">bezierCurveTo</span><span style="color:#24292E;">( x </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">6</span><span style="color:#24292E;">, y </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">11</span><span style="color:#24292E;">, x </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, y </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">15.4</span><span style="color:#24292E;">, x </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">, y </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">19</span><span style="color:#24292E;"> );</span></span>
<span class="line"><span style="color:#24292E;">shape.</span><span style="color:#6F42C1;">bezierCurveTo</span><span style="color:#24292E;">( x </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">12</span><span style="color:#24292E;">, y </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">15.4</span><span style="color:#24292E;">, x </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">16</span><span style="color:#24292E;">, y </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">11</span><span style="color:#24292E;">, x </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">16</span><span style="color:#24292E;">, y </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">7</span><span style="color:#24292E;"> );</span></span>
<span class="line"><span style="color:#24292E;">shape.</span><span style="color:#6F42C1;">bezierCurveTo</span><span style="color:#24292E;">( x </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">16</span><span style="color:#24292E;">, y </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">7</span><span style="color:#24292E;">, x </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">16</span><span style="color:#24292E;">, y, x </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">, y );</span></span>
<span class="line"><span style="color:#24292E;">shape.</span><span style="color:#6F42C1;">bezierCurveTo</span><span style="color:#24292E;">( x </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">7</span><span style="color:#24292E;">, y, x </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">, y </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">, x </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">, y </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5</span><span style="color:#24292E;"> );</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">geometry</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">THREE</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">ShapeGeometry</span><span style="color:#24292E;">( shape );</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">material</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">THREE</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">MeshBasicMaterial</span><span style="color:#24292E;">( { color: </span><span style="color:#005CC5;">0x00ff00</span><span style="color:#24292E;"> } );</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">mesh</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">THREE</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Mesh</span><span style="color:#24292E;">( geometry, material ) ;</span></span>
<span class="line"><span style="color:#24292E;">scene.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">( mesh );</span></span></code></pre></div>`,9),e=[o];function r(t,c,y,E,F,C){return a(),n("div",null,e)}const B=s(l,[["render",r]]);export{h as __pageData,B as default};
