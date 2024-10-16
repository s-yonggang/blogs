import{_ as s,o as a,c as i,Q as t}from"./chunks/framework.5b0c684c.js";const o="/blogs/assets/3DVisualization_graphics_3_1.9e95f237.png",p="/blogs/assets/3DVisualization_graphics_3_2.cb3fdd41.png",l="/blogs/assets/3DVisualization_graphics_3_3.b2cd8068.png",e="/blogs/assets/3DVisualization_graphics_3_4.7d0d354e.png",c="/blogs/assets/3DVisualization_graphics_3_5.5067004b.png",r="/blogs/assets/3DVisualization_graphics_3_6.c5a2771d.png",_="/blogs/assets/3DVisualization_graphics_3_7.5afa5c55.png",n="/blogs/assets/3DVisualization_graphics_3_8.09bccd05.png",g="/blogs/assets/3DVisualization_graphics_3_9.0ae591f0.png",h="/blogs/assets/3DVisualization_graphics_3_10.ce65fca3.png",u="/blogs/assets/3DVisualization_graphics_3_12.56e17084.png",d="/blogs/assets/3DVisualization_graphics_3_11.c853c6ea.png",b="/blogs/assets/3DVisualization_graphics_3_13.8c1fc590.png",m="/blogs/assets/3DVisualization_graphics_3_14.a5e6e850.png",q="/blogs/assets/3DVisualization_graphics_3_15.ee2bcdfc.png",k="/blogs/assets/3DVisualization_graphics_3_16.4d3de176.png",f="/blogs/assets/3DVisualization_graphics_3_17.e05ece16.png",$=JSON.parse('{"title":"光栅化","description":"","frontmatter":{},"headers":[],"relativePath":"3DVisualization/graphics/3-1.md","filePath":"3DVisualization/graphics/3-1.md","lastUpdated":1729031503000}'),D={name:"3DVisualization/graphics/3-1.md"},V=t('<h1 id="光栅化" tabindex="-1">光栅化 <a class="header-anchor" href="#光栅化" aria-label="Permalink to &quot;光栅化&quot;">​</a></h1><ul><li>不同的光栅显示。</li><li>重新调整三角形。</li></ul><h2 id="定义视锥体" tabindex="-1">定义视锥体 <a class="header-anchor" href="#定义视锥体" aria-label="Permalink to &quot;定义视锥体&quot;">​</a></h2><p><img src="'+o+'" alt=""></p><p>需要定义的参数：</p><blockquote><p>长宽比：aspect ratio</p><p>垂直可视角度：field-of-view (fovY)</p><p>水平可视角度：可以根据长宽比，从相机到左右两边中点的连线得到。</p></blockquote><p><img src="'+p+'" alt=""></p><h2 id="如何绘制到屏幕上" tabindex="-1">如何绘制到屏幕上 <a class="header-anchor" href="#如何绘制到屏幕上" aria-label="Permalink to &quot;如何绘制到屏幕上&quot;">​</a></h2><p>在做完MVP之后，绘制到屏幕。</p><ul><li>M-模型变换（放置对象）</li><li>V-视图变换（放置照相机）</li><li>P-投影变换 <ul><li>透视投影</li><li>正交投影</li></ul></li></ul><p>什么是屏幕：</p><blockquote><p>像素数组。</p><p>阵列的大小：分辨率。</p><p>一种典型的光栅显示器。</p></blockquote><p>什么是光栅:</p><blockquote><p>德语中的光栅==屏幕。</p><p>光栅化 == 绘制在屏幕上。</p></blockquote><p>什么是像素:</p><blockquote><p>在图形中，一个像素是一个颜色均匀的小方块。一个像素内颜色不会发生任何差异。</p><p>颜色是（红、绿、蓝）的混合物。</p></blockquote><h2 id="定义屏幕空间" tabindex="-1">定义屏幕空间 <a class="header-anchor" href="#定义屏幕空间" aria-label="Permalink to &quot;定义屏幕空间&quot;">​</a></h2><p><img src="'+l+'" alt=""> 这里的像素从0开始：上图蓝色像素点为（2，1）：</p><blockquote><p>像素值是（x，y）的形式，其中x和y都是整数。</p><p>像素范围是从（0、0）到（width-1、height-1）。</p><p>像素点（x，y）位于（x + 0.5，y + 0.5）的中心。</p><p>屏幕覆盖范围（0、0）到（width、height）。（一个像素覆盖1）</p></blockquote><p>把物体变换到 <code>width*height</code> 的屏幕中： <img src="'+e+'" alt=""></p><blockquote><p>先不管Z轴。</p></blockquote><p>变换矩阵为： <img src="'+c+'" alt=""></p><h2 id="电视光栅显示crt" tabindex="-1">电视光栅显示CRT <a class="header-anchor" href="#电视光栅显示crt" aria-label="Permalink to &quot;电视光栅显示CRT&quot;">​</a></h2><p><img src="'+r+'" alt=""></p><h2 id="三角形绘制" tabindex="-1">三角形绘制 <a class="header-anchor" href="#三角形绘制" aria-label="Permalink to &quot;三角形绘制&quot;">​</a></h2><p><img src="'+_+'" alt=""> 为什么使用三角形？</p><ul><li>最基本的多边形。（可用于分解其他多边形）</li><li>保证是平面的。</li><li>定义良好的内部。（很好判定内外）</li><li>明确的三角形上的顶点插值方法。（重心坐标插值）</li></ul><p><strong>如何将三角的覆盖的区域绘制称为像素点</strong>？</p><p><img src="'+n+'" alt=""></p><h2 id="采样" tabindex="-1">采样 <a class="header-anchor" href="#采样" aria-label="Permalink to &quot;采样&quot;">​</a></h2><ul><li>在一个区域内，通过一个连续的函数，不停的去访问各个点的值。</li><li>采样就是把一个函数离散化的过程。</li><li>采样是图形学中的一个核心思想。</li></ul><blockquote><p>我们取样时间（1D）、面积（2D）、方向（2D）、体积（3D）</p></blockquote><p><img src="'+g+'" alt=""></p><p><strong>定义inside二进制函数判断任意坐标（x,y）是否在三角形内</strong>：</p><p><img src="'+h+'" alt=""></p><p>而我们的采样就是，在屏幕空间中（这里是整个屏幕），定义的<code>inside函数</code>在不同的像素中心，确定这个函数的值是1还是0（然后标记不同的颜色）。</p><p><strong>像素的中心</strong>：（需要加0.5） <img src="'+u+'" alt=""></p><p><strong>采样函数</strong>：去遍历所有的点 <img src="'+d+'" alt=""></p><p><strong>inside函数判断一个点是否在三角形内</strong>：通过<code>向量叉乘</code>可以得到。</p><p><img src="'+b+'" alt=""> 特殊情况：要么不处理，要么严格规定判断规则。 <img src="'+m+'" alt=""></p><p><strong>光栅化优化</strong>：</p><p>采样优化方法一 <img src="'+q+'" alt=""></p><blockquote><p>通过三角形的顶点缩小采样范围。不需要进行整个屏幕像素的遍历。</p></blockquote><p>采样优化方法二 <img src="'+k+'" alt=""></p><blockquote><p>三角形每一行的最左和最右的，形成的包围盒。（这并不容易）</p></blockquote><h2 id="锯齿问题" tabindex="-1">锯齿问题 <a class="header-anchor" href="#锯齿问题" aria-label="Permalink to &quot;锯齿问题&quot;">​</a></h2><p><img src="'+f+'" alt=""></p>',47),z=[V];function x(P,T,y,S,v,w){return a(),i("div",null,z)}const A=s(D,[["render",x]]);export{$ as __pageData,A as default};