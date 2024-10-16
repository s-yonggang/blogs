import{_ as s,o,c as a,Q as i}from"./chunks/framework.5b0c684c.js";const t="/blogs/assets/3DVisualization_graphics_2_1-1.5a8fb2a3.png",p="/blogs/assets/3DVisualization_graphics_2_1-2.90b6f950.png",l="/blogs/assets/3DVisualization_graphics_2_1-3.0a48fce8.png",c="/blogs/assets/3DVisualization_graphics_2_1-4.1b39ee95.png",r="/blogs/assets/3DVisualization_graphics_2_1-5.6b89cfc9.png",e="/blogs/assets/3DVisualization_graphics_2_1-6.db04c949.png",_="/blogs/assets/3DVisualization_graphics_2_1-7.c336a01e.png",n="/blogs/assets/3DVisualization_graphics_2_1-8.83eb9600.png",g="/blogs/assets/3DVisualization_graphics_2_1-9.d6843ad3.png",u="/blogs/assets/3DVisualization_graphics_2_1-10.c06be867.png",b="/blogs/assets/3DVisualization_graphics_2_1-11.0a7a883c.png",m="/blogs/assets/3DVisualization_graphics_2_1-12.571830f6.png",h="/blogs/assets/3DVisualization_graphics_2_1-13.10bf88d8.png",d="/blogs/assets/3DVisualization_graphics_2_1-14.5211b2f6.png",k="/blogs/assets/3DVisualization_graphics_2_1-15.d91bac07.png",q="/blogs/assets/3DVisualization_graphics_2_1-16.db2d3171.png",z="/blogs/assets/3DVisualization_graphics_2_1-17.08be26e0.png",D="/blogs/assets/3DVisualization_graphics_2_1-18.48c39810.png",V="/blogs/assets/3DVisualization_graphics_2_1-19.f9130848.png",f="/blogs/assets/3DVisualization_graphics_2_1-20.a7016050.png",x="/blogs/assets/3DVisualization_graphics_2_1-21.8e59d706.png",P="/blogs/assets/3DVisualization_graphics_2_1-22.82e47100.png",T="/blogs/assets/3DVisualization_graphics_2_1-23.ae0b342d.png",I=JSON.parse('{"title":"三维图形变换","description":"","frontmatter":{},"headers":[],"relativePath":"3DVisualization/graphics/2-1-1.md","filePath":"3DVisualization/graphics/2-1-1.md","lastUpdated":1729031503000}'),v={name:"3DVisualization/graphics/2-1-1.md"},A=i('<h1 id="三维图形变换" tabindex="-1">三维图形变换 <a class="header-anchor" href="#三维图形变换" aria-label="Permalink to &quot;三维图形变换&quot;">​</a></h1><h2 id="三维空间变换" tabindex="-1">三维空间变换 <a class="header-anchor" href="#三维空间变换" aria-label="Permalink to &quot;三维空间变换&quot;">​</a></h2><p><strong>矩阵表示</strong>： <img src="'+t+'" alt=""></p><p><strong>缩放变换、平移变换矩阵</strong><img src="'+p+'" alt=""></p><p><strong>旋转变换矩阵</strong>（三维空间中最复杂的变换） <img src="'+l+'" alt=""></p><p><strong>任意角的旋转</strong><img src="'+c+'" alt=""></p><p><strong>罗德里格斯的旋转公式</strong></p><blockquote><p>旋转轴默认过远点 <img src="'+r+'" alt=""> 对任意旋转变换，给出一个旋转矩阵。</p></blockquote><p>当我们想要围绕某一个点旋转</p><blockquote><p>先将这个移到原点。</p><p>在进行旋转。</p><p>在将所有的变换恢复到原来的点。</p></blockquote><p><strong>罗德里格斯的旋转公式推导</strong><img src="'+e+'" alt=""></p><p><strong>四元数</strong> 用于旋转与旋转的差值计算。（旋转矩阵不适合做差值计算）</p><h2 id="三维变换" tabindex="-1">三维变换 <a class="header-anchor" href="#三维变换" aria-label="Permalink to &quot;三维变换&quot;">​</a></h2><ul><li>视图变换</li><li>投影变换 <ul><li>正交投影</li><li>透视投影</li></ul></li></ul><p>什么是视图变换？</p><div class="info custom-block"><p class="custom-block-title">拍一张照片的流程</p><ol><li>布置好拍照场景，人和物（<code>model</code> transformation）</li><li>找一个角度，布置相机的位置(<code>view</code> transformation)</li><li>拍照!(<code>projection</code> transformation)</li></ol><p><code> 模型变换-视图变换-投影变换</code></p></div><h2 id="视图变换-相机" tabindex="-1">视图变换/相机 <a class="header-anchor" href="#视图变换-相机" aria-label="Permalink to &quot;视图变换/相机&quot;">​</a></h2><p><strong>定义相机</strong></p><p><img src="'+_+'" alt=""></p><p><strong>约定相机的初始位置</strong></p><ul><li>原点：（0，0，0）</li><li>朝向：-Z</li><li>向上方向：Y <img src="'+n+'" alt=""></li></ul><p><strong>如何初始化相机的初始位置</strong>？ 一 一对应 <img src="'+g+'" alt=""></p><p>相机初始化写成矩阵的行式（先平移再旋转） <img src="'+u+'" alt=""></p><p>视图变换：相机为了设置为一个约定位置，其他所有的物体也要跟着变换，保证相机与物体保持不变。</p><blockquote><p>视图变换操作的是相机，物体模型要跟着变换，做相对运动。</p><p>模型变换与视图变换经常在一起，被称为<code>模型视图变换</code>。</p></blockquote><h2 id="投影变换" tabindex="-1">投影变换 <a class="header-anchor" href="#投影变换" aria-label="Permalink to &quot;投影变换&quot;">​</a></h2><ul><li>3D 到 2D</li><li>正交投影</li><li>透视投影</li></ul><p><img src="'+b+'" alt=""></p><p><img src="'+m+'" alt=""></p><h2 id="正交投影" tabindex="-1">正交投影 <a class="header-anchor" href="#正交投影" aria-label="Permalink to &quot;正交投影&quot;">​</a></h2><p>一种简单的做法是:</p><blockquote><p>相机位于原点，看着-Z，Y向上。</p><p>Z 降维。</p><p>变换生成的矩形扩展为二维矩阵。</p></blockquote><p><img src="'+h+'" alt=""></p><p>还有一种标准的做法是：</p><blockquote><p>把一个长方体映射到“典型的（正则、规范、标准）”立方体。</p><p>通过转换中心长方体。</p><p>通过转换中心长方体。</p></blockquote><p>先平移（中心到原点），后缩放（长度/宽度/高度到2）</p><blockquote><p>为什么是2，因为是从中心原点向正负坐标各延申1个单位长度。</p></blockquote><p><img src="'+d+'" alt=""></p><blockquote><p>因为我们是沿着-Z方向看，所以 <code>n &gt; f</code>。</p><p>这与左/右定则有关。</p></blockquote><h2 id="透视投影" tabindex="-1">透视投影 <a class="header-anchor" href="#透视投影" aria-label="Permalink to &quot;透视投影&quot;">​</a></h2><ul><li>最常见的是计算机图形学，艺术，视觉系统。</li><li>满足近大远小。</li><li>平行的直线将不再平行，收敛于单点。</li></ul><p><img src="'+k+'" alt=""></p><p><strong>回顾齐次坐标</strong>：</p><blockquote><p>（x、y、z、1）、（kx、ky、kz、k != 0）、（xz、yz、z<sup>2</sup>、z != 0）在3D中都表示同一点（x、y、z）</p></blockquote><p>透视投影分为两步：</p><ol><li>先像远平面挤压到近平面。</li><li>再进行正交投影。</li></ol><p><img src="'+q+'" alt=""></p><p>挤压步骤：</p><blockquote><p>近平面不变。</p><p>远平面Z 值不变，只是向近平面收缩。</p><p>远平面的中心点不变。</p></blockquote><p><img src="'+z+'" alt=""></p><blockquote><p>这描述的是Y，X是同样的道理。 <img src="'+D+'" alt=""></p></blockquote><p>挤压用齐次坐标表示： <img src="'+V+'" alt=""></p><p>求变换矩阵： <img src="'+f+'" alt=""></p><blockquote><p>变换矩阵的第三如何求呢？观察挤压步骤发现：</p><p>①、近平面上的任何一个点都不会改变。</p><p>②、远平面上的任何一个点的z都不会改变。</p><p>③、远平面的中心点不变。</p></blockquote><p>根据上面①、② 可以得到变换矩阵的第三行前面两个：（0 0 A B） <img src="'+x+'" alt=""></p><p>再根据 ③ 可以求出A 和 B</p><p><img src="'+P+'" alt=""></p><p><img src="'+T+'" alt=""></p>',58),S=[A];function Z(y,B,$,N,Y,C){return o(),a("div",null,S)}const j=s(v,[["render",Z]]);export{I as __pageData,j as default};
