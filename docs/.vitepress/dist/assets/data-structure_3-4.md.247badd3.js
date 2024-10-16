import{_ as l,C as a,o as c,c as i,k as t,a as s,H as n,Q as o}from"./chunks/framework.5b0c684c.js";const p="/blogs/assets/data-structure_3-4_1.3d51f552.png",r="/blogs/assets/data-structure_3-4_2.3d7334bd.png",_="/blogs/assets/data-structure_3-4_3.f9c6ddcd.png",d="/blogs/assets/data-structure_3-4_4.04a0f8b3.png",u="/blogs/assets/data-structure_3-4_5.28910bea.png",m="/blogs/assets/data-structure_3-4_6.24515ee5.png",b="/blogs/assets/data-structure_3-4_7.1009aa51.png",R=JSON.parse('{"title":"什么是栈","description":"","frontmatter":{},"headers":[],"relativePath":"data-structure/3-4.md","filePath":"data-structure/3-4.md","lastUpdated":1729031503000}'),g={name:"data-structure/3-4.md"},h=t("h1",{id:"什么是栈",tabindex:"-1"},[s("什么是栈 "),t("a",{class:"header-anchor",href:"#什么是栈","aria-label":'Permalink to "什么是栈"'},"​")],-1),k=t("p",null,[s("栈也是一种特殊的线性表，在计算机学科里面有广泛的用途，如"),t("code",null,"函数调用"),s("、"),t("code",null,"递归"),s("、"),t("code",null,"表达式求值"),s("等都要用到栈。")],-1),f={class:"info custom-block"},S=t("p",{class:"custom-block-title"},"【表达式求值】示例",-1),T=t("p",null,[t("img",{src:p,alt:"图片"})],-1),q=t("p",null,[t("strong",null,"问题"),s("： 因为运算符是有优先级的，所以上图中我们所看到的 "),t("strong",null,"6"),s(" 他可能就不是用来做加法运算的，这个问题就变得复杂了。")],-1),P=t("p",null,[t("strong",null,"解决"),s("： 如果我们看到运算符号，就知道两个运算数了，这个问题就很好解决了。刚好"),t("code",null,"后缀表达式"),s("能满足。")],-1),x={class:"tip custom-block"},v=t("p",{class:"custom-block-title"},"提示",-1),V=t("p",null,[t("strong",null,"前缀表达式"),s("：运算符号位于两个运算数之前")],-1),N=t("strong",null,"中缀表达式",-1),y=o('<p><strong>后缀表达式</strong>：运算符号位于两个运算数之后（a b c *+ d e /-）</p><blockquote><p>后缀表达式的求值策略：从左向右“扫描”逐个处理运算数和运算符号。碰到数先依次记下，碰到<code>运算符</code>就计算<code>运算符</code>前记下的两位<code>数</code>。</p></blockquote><blockquote><p>示例：6 2 / 3 - 4 2 * + = ？</p></blockquote><p>【<strong>启示</strong>】</p><blockquote><p>我们需要一种存储方法，满足我们<span class="line1">能顺序存储运算数，并在需要时“倒序”输出（也就是<code>先进后出</code>，这就是<strong>栈</strong>）</span>。</p></blockquote>',5),A=o('<h2 id="栈的抽象数据类型描述" tabindex="-1">栈的抽象数据类型描述 <a class="header-anchor" href="#栈的抽象数据类型描述" aria-label="Permalink to &quot;栈的抽象数据类型描述&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">抽象数据类型描述</p><p>类型名称：栈（Stack）；</p><p>数据对象集：一个有0个或多个元素的有穷线性表；</p><p>操作集：长度为MaxSize的栈S ∈ Stack，栈元素item ∈ ElementType</p><blockquote><ol><li><p>生成空栈，其最大长度为MaxSize；</p></li><li><p>判断栈S是否已满；</p></li><li><p>将元素item压入栈底；</p></li><li><p>判断栈S是否为空；</p></li><li><p>删除并返回栈顶元素；</p></li></ol></blockquote></div><div class="tip custom-block"><p class="custom-block-title">栈（Stack）</p><p>栈是具有一定操作约束的线性表（<strong>先进后出</strong>）</p><p>👉 只在一端（栈顶、Top）做插入<sup>入栈（Push）</sup>、删除<sup>出栈（Pop）</sup>。 <img src="'+r+'" alt="图片"></p></div><h2 id="栈的实现" tabindex="-1">栈的实现 <a class="header-anchor" href="#栈的实现" aria-label="Permalink to &quot;栈的实现&quot;">​</a></h2><details class="details custom-block"><summary>【数组实现栈】</summary><ol><li>入栈 <img src="'+_+'" alt="图片"></li><li>出栈 <img src="'+d+'" alt="图片"></li></ol></details><details class="details custom-block"><summary>【链表实现栈】</summary><p>栈的链式存储结构实际上就是一个<code>单链表</code>，叫做<code>链栈</code>。插入和删除操作只能在<code>链栈</code>的栈顶进行。<span class="line1">栈顶指针应该在链表头部</span>，因为是单链表，如果放在尾部删除操作会有问题。</p><ol><li>初始化 <img src="'+u+'" alt="图片"></li><li>入栈 <img src="'+m+'" alt="图片"></li><li>出栈 <img src="'+b+'" alt="图片"></li></ol></details><h2 id="栈的应用" tabindex="-1">栈的应用 <a class="header-anchor" href="#栈的应用" aria-label="Permalink to &quot;栈的应用&quot;">​</a></h2><ul><li><p>中缀表达式转换为后缀表达式</p></li><li><p>函数调用及递归实现</p></li><li><p>深度优先搜索</p></li><li><p>回溯算法</p></li><li><p>......</p></li></ul>',8);function C(B,E,I,$,D,z){const e=a("Badge");return c(),i("div",null,[h,k,t("div",f,[S,T,q,P,t("div",x,[v,V,t("p",null,[N,s("：运算符号位于两个运算数之间（a + b * c - d / e） "),n(e,{type:"tip",text:"平常使用"})]),y])]),A])}const H=l(g,[["render",C]]);export{R as __pageData,H as default};
