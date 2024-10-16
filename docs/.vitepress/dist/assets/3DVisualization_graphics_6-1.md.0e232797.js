import{_ as a,o,c as p,Q as s}from"./chunks/framework.5b0c684c.js";const i="/blogs/assets/3DVisualization_graphics_6_1.2056541b.png",t="/blogs/assets/3DVisualization_graphics_6_2.869d9529.png",e="/blogs/assets/3DVisualization_graphics_6_3.1e55c754.png",l="/blogs/assets/3DVisualization_graphics_6_4.25c71ed9.png",n="/blogs/assets/3DVisualization_graphics_6_5.25f61cc7.png",c="/blogs/assets/3DVisualization_graphics_6_6.f262b71e.png",r="/blogs/assets/3DVisualization_graphics_6_7.984ffac7.png",_="/blogs/assets/3DVisualization_graphics_6_8.9a835a76.png",g="/blogs/assets/3DVisualization_graphics_6_9.1782da98.png",D=JSON.parse('{"title":"光栅化阴影","description":"","frontmatter":{},"headers":[],"relativePath":"3DVisualization/graphics/6-1.md","filePath":"3DVisualization/graphics/6-1.md","lastUpdated":1729031503000}'),h={name:"3DVisualization/graphics/6-1.md"},d=s('<h1 id="光栅化阴影" tabindex="-1">光栅化阴影 <a class="header-anchor" href="#光栅化阴影" aria-label="Permalink to &quot;光栅化阴影&quot;">​</a></h1><p>如何使用栅格化来绘制阴影？</p><h2 id="阴影映射-shadow-mapping" tabindex="-1">阴影映射（Shadow mapping） <a class="header-anchor" href="#阴影映射-shadow-mapping" aria-label="Permalink to &quot;阴影映射（Shadow mapping）&quot;">​</a></h2><p>着色是一种局部的现象，着色的时候只考虑，光源、着色点自己（物体本身）、摄像机。这其实是不正确的，因为会存在其他物体遮挡在着色点和光源之间，这个时候着色是无法解决阴影的存在，Shadow mapping就是用来解决这一问题，并且限制在光栅化中。</p><p><strong>Shadow mapping 是一种图像空间算法</strong></p><ul><li>在阴影计算过程中，不需要知道场景的几何形状。</li><li>同样也存在走样现象。</li><li>经典的<code>Shadow mapping</code>只能处理<code>点光源</code>。</li></ul><p><strong>Shadow mapping 的核心思想</strong>：</p><p>如果有一个点，它不在阴影里，你又能看到这个点，说明：摄像机能看到这个点，光源也能看到这个点（硬阴影）。</p><p><strong>点光源下如何生成阴影</strong>？</p><p>第一步： <img src="'+i+'" alt=""></p><blockquote><p>从光源看向场景/物体，记录当前得到场景/物体对应的深度（Z-Buffer），光源深度缓冲图。</p></blockquote><p>第二步： <img src="'+t+'" alt=""></p><blockquote><p>从定义的相机看向场景。</p></blockquote><p><img src="'+e+'" alt=""></p><blockquote><p>橙色线条对应的点：投影回点光源深度缓冲图对应的像素位置深度距离。</p><p>然后计算橙色线条对应的点实际到点光源的深度距离。</p><p>进行比对（结果是一致的，证明摄像机能看到这个点，光源也能看到这个点--可见的）。</p></blockquote><p><img src="'+l+'" alt=""></p><blockquote><p>红色线条对应的点：投影回点光源深度缓冲图对应的像素位置深度距离。</p><p>然后计算红色线条对应的点实际到点光源的深度距离。</p><p>进行比对（结果不一样--存在阴影）。</p></blockquote><h2 id="shadow-mapping-应用示例" tabindex="-1">Shadow mapping 应用示例 <a class="header-anchor" href="#shadow-mapping-应用示例" aria-label="Permalink to &quot;Shadow mapping 应用示例&quot;">​</a></h2><p><img src="'+n+'" alt=""></p><p><img src="'+c+'" alt=""></p><blockquote><p>图左：从光线的角度来看，这个场景。</p><p>图右：从眼睛（像机）的角度来看。</p></blockquote><p><img src="'+r+'" alt=""></p><blockquote><p>记录从光的角度来看，深度缓冲图（Shadow map）。</p></blockquote><p><img src="'+_+'" alt=""></p><blockquote><p>绿色是阴影贴图上的距离（灯光、阴影点）≈ 深度。</p><p>非绿色是阴影应该出现的地方。（该区域投影回点光源的深度的实际距离 与 点光源深度缓冲图记录的深度距离 比对得出）</p></blockquote><h2 id="shadow-mapping存在的一些问题" tabindex="-1">Shadow mapping存在的一些问题 <a class="header-anchor" href="#shadow-mapping存在的一些问题" aria-label="Permalink to &quot;Shadow mapping存在的一些问题&quot;">​</a></h2><ul><li>由于数值（浮点数）存在的精度问题（比对 深度缓冲图时）。</li><li>Shadow map 自身分辨率。</li><li>只能做硬阴影。</li></ul><p>Shadow mapping 虽然存在一些问题，但任然是工业界的主流技术。</p><h2 id="硬阴影与软阴影" tabindex="-1">硬阴影与软阴影 <a class="header-anchor" href="#硬阴影与软阴影" aria-label="Permalink to &quot;硬阴影与软阴影&quot;">​</a></h2><p><img src="'+g+'" alt=""></p>',30),m=[d];function u(b,q,k,f,w,S){return o(),p("div",null,m)}const z=a(h,[["render",u]]);export{D as __pageData,z as default};