import{_ as a,o as s,c as t,Q as o}from"./chunks/framework.5b0c684c.js";const i="/blogs/assets/3DVisualization_graphics_5_1-1.a29f3d73.png",l="/blogs/assets/3DVisualization_graphics_5_1-2.a3c1767f.png",p="/blogs/assets/3DVisualization_graphics_5_1-3.cc6e49a1.png",e="/blogs/assets/3DVisualization_graphics_5_1-4.e2fcc98f.png",c="/blogs/assets/3DVisualization_graphics_5_1-5.5d6477ce.png",r="/blogs/assets/3DVisualization_graphics_5_1-6.4a74d754.png",n="/blogs/assets/3DVisualization_graphics_5_1-7.4a60fadd.png",_="/blogs/assets/3DVisualization_graphics_5_1-8.cd17322b.png",b="/blogs/assets/3DVisualization_graphics_5_1-9.7c742ca0.png",h="/blogs/assets/3DVisualization_graphics_5_1-10.17d457fc.png",g="/blogs/assets/3DVisualization_graphics_5_1-11.5a96d71b.png",u="/blogs/assets/3DVisualization_graphics_5_1-12.017aeb6c.png",d="/blogs/assets/3DVisualization_graphics_5_1-13.d95bdde5.png",m="/blogs/assets/3DVisualization_graphics_5_1-14.43761a47.png",q="/blogs/assets/3DVisualization_graphics_5_1-15.2d3a2dfc.png",k="/blogs/assets/3DVisualization_graphics_5_1-16.599917c8.png",f="/blogs/assets/3DVisualization_graphics_5_1-18.9cd934b1.png",V="/blogs/assets/3DVisualization_graphics_5_1-19.c6aa9990.png",v=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"3DVisualization/graphics/5-1-1.md","filePath":"3DVisualization/graphics/5-1-1.md","lastUpdated":1729031503000}'),D={name:"3DVisualization/graphics/5-1-1.md"},z=o('<h2 id="几何的曲线" tabindex="-1">几何的曲线 <a class="header-anchor" href="#几何的曲线" aria-label="Permalink to &quot;几何的曲线&quot;">​</a></h2><p>这里主要描述的是<code>显示的几何</code>。前面的说的隐式几很多的表示方法，显示几何同样也有很多表示方法。</p><p><img src="'+i+'" alt=""></p><blockquote><p>三角面</p><p>贝塞尔曲面</p><p>细分曲面</p><p>点云</p></blockquote><h2 id="点云表示几何-显示几何" tabindex="-1">点云表示几何（显示几何） <a class="header-anchor" href="#点云表示几何-显示几何" aria-label="Permalink to &quot;点云表示几何（显示几何）&quot;">​</a></h2><p><img src="'+l+'" alt=""></p><ul><li>最简单的表示：点列表（x、y、z）。</li><li>易于表示任何类型的几何图形。</li><li>适用于大型数据集（&gt;&gt;1点/像素）。</li><li>经常转换成多边形网格。</li><li>很难在采样不足的区域中绘制出数据（缺点）。</li></ul><h2 id="三角面-多边形表示几何-显示几何" tabindex="-1">三角面/多边形表示几何（显示几何） <a class="header-anchor" href="#三角面-多边形表示几何-显示几何" aria-label="Permalink to &quot;三角面/多边形表示几何（显示几何）&quot;">​</a></h2><p><img src="'+p+'" alt=""> 在图形学中应用最为广泛的。</p><ul><li>存储顶点和多边形（通常是三角形或四形）</li><li>更易于进行处理/模拟，自适应采样</li><li>数据结构更复杂</li><li>是图形中最常见的一种表示</li></ul><p><strong>在计算机中三角形面如何形成物体的</strong>（.obj格式文件） <img src="'+e+'" alt=""></p><blockquote><p>定义好顶点、纹理坐标、法线后然后定义他们之间的连接关系。</p></blockquote><h2 id="贝塞尔曲线表示几何-显示几何" tabindex="-1">贝塞尔曲线表示几何（显示几何） <a class="header-anchor" href="#贝塞尔曲线表示几何-显示几何" aria-label="Permalink to &quot;贝塞尔曲线表示几何（显示几何）&quot;">​</a></h2><p><img src="'+c+'" alt=""></p><p><img src="'+r+'" alt=""></p><blockquote><p>用一系列的<code>控制点</code>去定义曲线。<code>控制点</code>它会定义曲线满足一些性质</p><p>一开始沿着P0 到P1 往前走，最终会在P3结束。并且在结束的会沿着P2 到 P3往外走。</p></blockquote><p><strong>如何画出一条贝塞尔曲线</strong>？</p><h2 id="二次贝塞尔曲线" tabindex="-1">二次贝塞尔曲线 <a class="header-anchor" href="#二次贝塞尔曲线" aria-label="Permalink to &quot;二次贝塞尔曲线&quot;">​</a></h2><p><img src="'+n+'" alt=""> 根据给出的三个控制点：</p><blockquote><p>我们可以定义它的起点是在时间 0，它的终点是在时间 1，任意时间点为 t。</p><p>想要画出它贝塞尔曲线，实则就是要把在它在0-1之间的任意时间 t对应在平面空间中的位置找出来。</p><p>简单来说就是：给你一个时间t（在0-1之间），这个点在哪。</p><p>①、在b0到b1之间假设 t 位置的长度比为 n，这点记作b10。</p><p>②、在b1到b2之间找长度比为 n 的位置，这点记作b11。连接b10和b11得到一个新的线段（两个点）。</p><p>③、b10和b11之间找到长度比为 n 的位置，记作b20，此时 b20 就是该贝塞尔曲线上的一个点（一个点）。</p><p>根据 t 的不同值（0-1），我们可以求出一个平滑的贝塞尔曲线。</p></blockquote><h2 id="三次贝塞尔曲线" tabindex="-1">三次贝塞尔曲线 <a class="header-anchor" href="#三次贝塞尔曲线" aria-label="Permalink to &quot;三次贝塞尔曲线&quot;">​</a></h2><p>三次贝塞尔曲线也是同样的道理。 <img src="'+_+'" alt=""></p><blockquote><p>每次减一个点，重复的进行递归。</p></blockquote><p><img src="'+b+'" alt=""><img src="'+h+'" alt=""></p><blockquote><p>b后面2这里不是平方，指的是第二层。</p></blockquote><h2 id="贝塞尔曲线-代数公式" tabindex="-1">贝塞尔曲线-代数公式 <a class="header-anchor" href="#贝塞尔曲线-代数公式" aria-label="Permalink to &quot;贝塞尔曲线-代数公式&quot;">​</a></h2><p><img src="'+g+'" alt=""></p><blockquote><p>给定n+1个控制点，我们可以得到n阶的贝塞尔曲线。</p><p>这个贝塞尔曲线在任意时间 t 它都是之前给定的控制点的线性组合。</p><p>它组合的系数就是一个多项式，这个多项式是与时间有关的。</p><p>贝塞尔曲线的任意时间点就是控制点的组合，怎么组合？----用伯恩斯坦多项式进行组合。</p></blockquote><p><img src="'+u+'" alt=""></p><blockquote><p>坐标可以是三维坐标。</p></blockquote><h2 id="伯恩斯坦多项式" tabindex="-1">伯恩斯坦多项式 <a class="header-anchor" href="#伯恩斯坦多项式" aria-label="Permalink to &quot;伯恩斯坦多项式&quot;">​</a></h2><p><img src="'+d+'" alt=""></p><h2 id="贝塞尔曲线特性" tabindex="-1">贝塞尔曲线特性 <a class="header-anchor" href="#贝塞尔曲线特性" aria-label="Permalink to &quot;贝塞尔曲线特性&quot;">​</a></h2><ul><li>贝塞尔曲线必须过起点（t=0）和终点（t=1）。</li><li>三次贝塞尔曲线系数3 ？</li><li>仿射变换下：贝塞尔曲线依然一致。（对投影不行）</li><li>凸包性质</li></ul><h2 id="凸包" tabindex="-1">凸包 <a class="header-anchor" href="#凸包" aria-label="Permalink to &quot;凸包&quot;">​</a></h2><p>能够<code>包围一系列给定的几何形体</code>的<code>最小</code>的<code>凸多边形</code>。</p><p><img src="'+m+'" alt=""></p><h2 id="逐段贝塞尔曲线" tabindex="-1">逐段贝塞尔曲线 <a class="header-anchor" href="#逐段贝塞尔曲线" aria-label="Permalink to &quot;逐段贝塞尔曲线&quot;">​</a></h2><p><img src="'+q+'" alt=""></p><blockquote><p>虽然可以绘制出平滑的曲线，但是无法表现控制。</p></blockquote><p>逐段三次贝塞尔是最常见的技术：<strong>每四个控制点定义一条贝塞尔曲线</strong>。 <img src="'+k+'" alt=""></p><blockquote><p>这里其实有个小问题：连续性问题。</p></blockquote><p><strong>连续性</strong></p><p>C0连续 <img src="'+f+'" alt=""></p><blockquote><p>第一段的终点等于第二段的起点（几何上最简单的连续）。</p></blockquote><p>C1连续 <img src="'+V+'" alt=""></p><blockquote><p>切线也要连续，向临两个控制必须共线，距离相等。一阶导数的连续。</p><p>还有要求更高的导数连续...</p></blockquote><h2 id="b-splines-b样条曲线" tabindex="-1">B-splines（b样条曲线） <a class="header-anchor" href="#b-splines-b样条曲线" aria-label="Permalink to &quot;B-splines（b样条曲线）&quot;">​</a></h2><p>它是对贝塞尔曲线的拓展。</p><ul><li>局部性，更可控。（非常复杂）</li></ul>',50),P=[z];function x(T,S,B,C,$,A){return s(),t("div",null,P)}const E=a(D,[["render",x]]);export{v as __pageData,E as default};