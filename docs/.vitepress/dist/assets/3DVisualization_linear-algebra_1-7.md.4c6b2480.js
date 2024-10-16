import{_ as o,o as e,c as s,k as a,Q as t,a as l}from"./chunks/framework.5b0c684c.js";const r="/blogs/assets/linear-algebra_1-7_2.2ebc8034.png",n="/blogs/assets/linear-algebra_1-7_1.e4347501.png",Q="/blogs/assets/linear-algebra_1-7_3.105962af.png",i="/blogs/assets/linear-algebra_1-7_4.413464c6.png",m="/blogs/assets/linear-algebra_1-7_5.a9986566.png",d="/blogs/assets/linear-algebra_1-7_6.46e75efa.png",c="/blogs/assets/linear-algebra_1-7_7.f66c15b8.png",p="/blogs/assets/linear-algebra_1-7_8.999681f8.png",h="/blogs/assets/linear-algebra_1-7_9.70c40191.png",T="/blogs/assets/linear-algebra_1-7_10.7717c9c7.png",g="/blogs/assets/linear-algebra_1-7_11.6e723f9a.png",_="/blogs/assets/linear-algebra_1-7_12.a5dec82b.png",u="/blogs/assets/linear-algebra_1-7_13.893fd331.png",x="/blogs/assets/linear-algebra_1-7_15.b3fcf6a3.png",b="/blogs/assets/linear-algebra_1-7_14.b003f7c7.png",H="/blogs/assets/linear-algebra_1-7_16.baea362b.png",w="/blogs/assets/linear-algebra_1-7_17.2b1ee647.png",L="/blogs/assets/linear-algebra_1-7_18.732b6252.png",f="/blogs/assets/linear-algebra_1-7_19.b2983192.png",k="/blogs/assets/linear-algebra_1-7_20.0d5bf170.png",y="/blogs/assets/linear-algebra_1-7_21.cd3af425.png",M="/blogs/assets/linear-algebra_1-7_22.fb0b75ae.png",V="/blogs/assets/linear-algebra_1-7_23.bc6054c2.png",n2=JSON.parse('{"title":"矩阵","description":"","frontmatter":{},"headers":[],"relativePath":"3DVisualization/linear-algebra/1-7.md","filePath":"3DVisualization/linear-algebra/1-7.md","lastUpdated":1729031503000}'),A={name:"3DVisualization/linear-algebra/1-7.md"},D=t('<h1 id="矩阵" tabindex="-1">矩阵 <a class="header-anchor" href="#矩阵" aria-label="Permalink to &quot;矩阵&quot;">​</a></h1><h2 id="什么是矩阵" tabindex="-1">什么是矩阵 <a class="header-anchor" href="#什么是矩阵" aria-label="Permalink to &quot;什么是矩阵&quot;">​</a></h2><p><img src="'+r+'" alt="图片"></p><p><strong>由m x n个数 组成的一个 m 行 n 列的<code>数表</code>,就是一个“矩阵”。用于存储数据信息。</strong><img src="'+n+'" alt="图片"></p><h2 id="矩阵于行列式有什么关系" tabindex="-1">矩阵于行列式有什么关系？ <a class="header-anchor" href="#矩阵于行列式有什么关系" aria-label="Permalink to &quot;矩阵于行列式有什么关系？&quot;">​</a></h2><ul><li><p>矩阵本质是一个数表，行列式本质是一个数。（我的理解：一个是数据解构，一个是数）</p></li><li><p>解构上类似：</p><blockquote><p>矩阵的<code>行和列</code>可以是<code>任意</code>的；</p><p>行列式的<code>行和列</code>必须<code>相等</code>的；</p></blockquote><blockquote><p>只有矩阵的为<code>方阵</code>（行和列相等）时，才具备一些行列式的特性。</p></blockquote></li></ul><h2 id="同型矩阵" tabindex="-1">同型矩阵 <a class="header-anchor" href="#同型矩阵" aria-label="Permalink to &quot;同型矩阵&quot;">​</a></h2><ul><li>两个矩阵的行数、列数均相等。</li></ul><h2 id="相等矩阵" tabindex="-1">相等矩阵 <a class="header-anchor" href="#相等矩阵" aria-label="Permalink to &quot;相等矩阵&quot;">​</a></h2><ul><li>两个矩阵同型,并且元素均对应相等。</li></ul><h2 id="矩阵的运算" tabindex="-1">矩阵的运算 <a class="header-anchor" href="#矩阵的运算" aria-label="Permalink to &quot;矩阵的运算&quot;">​</a></h2><h3 id="矩阵的加减运算" tabindex="-1">矩阵的加减运算 <a class="header-anchor" href="#矩阵的加减运算" aria-label="Permalink to &quot;矩阵的加减运算&quot;">​</a></h3><ul><li>必须是同型矩阵才能相加减。</li></ul><p><img src="'+Q+'" alt="图片"></p><ul><li>具有交换律：A+B=B+A</li><li>具有结合律：(A+B)+C=A+(B+C)</li></ul><h3 id="数与矩阵相乘" tabindex="-1">数与矩阵相乘 <a class="header-anchor" href="#数与矩阵相乘" aria-label="Permalink to &quot;数与矩阵相乘&quot;">​</a></h3><p><img src="'+i+'" alt="图片"></p><p><img src="'+m+'" alt="图片"></p><h3 id="矩阵与矩阵相乘" tabindex="-1">矩阵与矩阵相乘 <a class="header-anchor" href="#矩阵与矩阵相乘" aria-label="Permalink to &quot;矩阵与矩阵相乘&quot;">​</a></h3><ul><li>左取 <code>i</code> 行,右取 <code>j</code> 列,对应相乘再相加,构成新矩阵处在<code>( i, j )</code>位置的元素。 <blockquote><p>能否相乘提看内标，结果看外标。</p></blockquote></li></ul><p><img src="'+d+'" alt="图片"></p><h3 id="矩阵与矩阵的乘法运算性质" tabindex="-1">矩阵与矩阵的乘法运算性质 <a class="header-anchor" href="#矩阵与矩阵的乘法运算性质" aria-label="Permalink to &quot;矩阵与矩阵的乘法运算性质&quot;">​</a></h3><ul><li><p>不具备交换律 <img src="'+c+'" alt="图片"></p></li><li><p>不具备消去律 <img src="'+p+'" alt="图片"></p></li><li><p>具备结合律、左分配律、右分配律。 <img src="'+h+'" alt="图片"></p></li></ul><h2 id="特殊矩阵" tabindex="-1">特殊矩阵 <a class="header-anchor" href="#特殊矩阵" aria-label="Permalink to &quot;特殊矩阵&quot;">​</a></h2><p><img src="'+T+'" alt="图片"></p><h2 id="矩阵的转置" tabindex="-1">矩阵的转置 <a class="header-anchor" href="#矩阵的转置" aria-label="Permalink to &quot;矩阵的转置&quot;">​</a></h2><ul><li><p>原来的矩阵<code>行</code>变成<code>列</code>。</p></li><li><p>矩阵转置的性质：</p></li></ul><p><img src="'+g+'" alt="图片"></p><h2 id="方正行列式" tabindex="-1">方正行列式 <a class="header-anchor" href="#方正行列式" aria-label="Permalink to &quot;方正行列式&quot;">​</a></h2><p><img src="'+_+'" alt="图片"></p><h2 id="伴随矩阵" tabindex="-1">伴随矩阵 <a class="header-anchor" href="#伴随矩阵" aria-label="Permalink to &quot;伴随矩阵&quot;">​</a></h2><blockquote><p>矩阵元素的代数余子式的转置；</p></blockquote><p><img src="'+u+'" alt="图片"></p><p><strong>伴随矩阵的起源</strong>： <img src="'+x+'" alt="图片"></p><h2 id="逆矩阵" tabindex="-1">逆矩阵 <a class="header-anchor" href="#逆矩阵" aria-label="Permalink to &quot;逆矩阵&quot;">​</a></h2>',35),Z=a("p",null,[l("回顾一下"),a("code",null,"倒数"),l("：在数的乘法中,若a≠0,则存在唯一的数b，使得ab=ba=1。")],-1),q={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},v={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-1.577ex"},xmlns:"http://www.w3.org/2000/svg",width:"6.341ex",height:"4.613ex",role:"img",focusable:"false",viewBox:"0 -1342 2802.6 2039","aria-hidden":"true"},j=t('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D44E" d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(806.8,0)"><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z" style="stroke-width:3;"></path></g><g data-mml-node="TeXAtom" data-mjx-texclass="ORD" transform="translate(1862.6,0)"><g data-mml-node="mfrac"><g data-mml-node="mn" transform="translate(220,676)"><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(255.5,-686)"><path data-c="1D44F" d="M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z" style="stroke-width:3;"></path></g><rect width="700" height="60" x="120" y="220"></rect></g></g></g></g>',1),P=[j],C=a("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[a("mi",null,"a"),a("mo",null,"="),a("mrow",{"data-mjx-texclass":"ORD"},[a("mfrac",null,[a("mn",null,"1"),a("mi",null,"b")])])])],-1),R=t('<ul><li>在矩阵的乘法中,若|A|≠0, 则存在唯一的矩阵B。使得AB=BA=E。则A可逆,矩阵B是A的逆矩阵,即B=A<sup>-1</sup></li></ul><p><strong>逆矩阵的性质</strong><img src="'+b+'" alt="图片"></p><p>试题1： <img src="'+H+'" alt="图片"></p><details class="details custom-block"><summary>解析</summary><p><img src="'+w+'" alt="图片"></p></details><p>试题2： <img src="'+L+'" alt="图片"></p><details class="details custom-block"><summary>解析</summary><p><img src="'+f+'" alt="图片"></p></details><p>试题3： <img src="'+k+'" alt="图片"></p><details class="details custom-block"><summary>解析</summary><p><img src="'+y+'" alt="图片"></p></details><p>试题4： <img src="'+M+'" alt="图片"></p><details class="details custom-block"><summary>解析</summary><p><img src="'+V+'" alt="图片"></p></details><h2 id="逆矩阵与伴随矩阵" tabindex="-1">逆矩阵与伴随矩阵 <a class="header-anchor" href="#逆矩阵与伴随矩阵" aria-label="Permalink to &quot;逆矩阵与伴随矩阵&quot;">​</a></h2><p><strong><code>推论：A A* = A* A = |A| E</code></strong></p>',12),S={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},O={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-2.17ex"},xmlns:"http://www.w3.org/2000/svg",width:"10.896ex",height:"5.319ex",role:"img",focusable:"false",viewBox:"0 -1392 4816.2 2351","aria-hidden":"true"},B=t('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="msup"><g data-mml-node="mi"><path data-c="1D434" d="M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z" style="stroke-width:3;"></path></g><g data-mml-node="TeXAtom" transform="translate(783,413) scale(0.707)" data-mjx-texclass="ORD"><g data-mml-node="mo"><path data-c="2212" d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mn" transform="translate(778,0)"><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" style="stroke-width:3;"></path></g></g></g><g data-mml-node="mo" transform="translate(2014.5,0)"><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z" style="stroke-width:3;"></path></g><g data-mml-node="TeXAtom" data-mjx-texclass="ORD" transform="translate(3070.2,0)"><g data-mml-node="mfrac"><g data-mml-node="msup" transform="translate(279.7,676)"><g data-mml-node="mi"><path data-c="1D434" d="M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(783,363) scale(0.707)"><path data-c="2217" d="M229 286Q216 420 216 436Q216 454 240 464Q241 464 245 464T251 465Q263 464 273 456T283 436Q283 419 277 356T270 286L328 328Q384 369 389 372T399 375Q412 375 423 365T435 338Q435 325 425 315Q420 312 357 282T289 250L355 219L425 184Q434 175 434 161Q434 146 425 136T401 125Q393 125 383 131T328 171L270 213Q283 79 283 63Q283 53 276 44T250 35Q231 35 224 44T216 63Q216 80 222 143T229 213L171 171Q115 130 110 127Q106 124 100 124Q87 124 76 134T64 161Q64 166 64 169T67 175T72 181T81 188T94 195T113 204T138 215T170 230T210 250L74 315Q65 324 65 338Q65 353 74 363T98 374Q106 374 116 368T171 328L229 286Z" style="stroke-width:3;"></path></g></g><g data-mml-node="mrow" transform="translate(220,-709.5)"><g data-mml-node="mo" transform="translate(0 -0.5)"><path data-c="7C" d="M139 -249H137Q125 -249 119 -235V251L120 737Q130 750 139 750Q152 750 159 735V-235Q151 -249 141 -249H139Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(278,0)"><path data-c="1D434" d="M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(1028,0) translate(0 -0.5)"><path data-c="7C" d="M139 -249H137Q125 -249 119 -235V251L120 737Q130 750 139 750Q152 750 159 735V-235Q151 -249 141 -249H139Z" style="stroke-width:3;"></path></g></g><rect width="1506" height="60" x="120" y="220"></rect></g></g></g></g>',1),I=[B],E=a("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[a("msup",null,[a("mi",null,"A"),a("mrow",{"data-mjx-texclass":"ORD"},[a("mo",null,"−"),a("mn",null,"1")])]),a("mo",null,"="),a("mrow",{"data-mjx-texclass":"ORD"},[a("mfrac",null,[a("msup",null,[a("mi",null,"A"),a("mo",null,"∗")]),a("mrow",null,[a("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),a("mi",null,"A"),a("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|")])])])])],-1),N={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},X={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-2.17ex"},xmlns:"http://www.w3.org/2000/svg",width:"11.696ex",height:"5.319ex",role:"img",focusable:"false",viewBox:"0 -1392 5169.8 2351","aria-hidden":"true"},z=t('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="msup"><g data-mml-node="mi"><path data-c="1D434" d="M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z" style="stroke-width:3;"></path></g><g data-mml-node="TeXAtom" transform="translate(783,413) scale(0.707)" data-mjx-texclass="ORD"><g data-mml-node="mo"><path data-c="2217" d="M229 286Q216 420 216 436Q216 454 240 464Q241 464 245 464T251 465Q263 464 273 456T283 436Q283 419 277 356T270 286L328 328Q384 369 389 372T399 375Q412 375 423 365T435 338Q435 325 425 315Q420 312 357 282T289 250L355 219L425 184Q434 175 434 161Q434 146 425 136T401 125Q393 125 383 131T328 171L270 213Q283 79 283 63Q283 53 276 44T250 35Q231 35 224 44T216 63Q216 80 222 143T229 213L171 171Q115 130 110 127Q106 124 100 124Q87 124 76 134T64 161Q64 166 64 169T67 175T72 181T81 188T94 195T113 204T138 215T170 230T210 250L74 315Q65 324 65 338Q65 353 74 363T98 374Q106 374 116 368T171 328L229 286Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(500,0)"><path data-c="2212" d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mn" transform="translate(1278,0)"><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" style="stroke-width:3;"></path></g></g></g><g data-mml-node="mo" transform="translate(2368,0)"><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z" style="stroke-width:3;"></path></g><g data-mml-node="TeXAtom" data-mjx-texclass="ORD" transform="translate(3423.8,0)"><g data-mml-node="mfrac"><g data-mml-node="mi" transform="translate(498,676)"><path data-c="1D434" d="M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z" style="stroke-width:3;"></path></g><g data-mml-node="mrow" transform="translate(220,-709.5)"><g data-mml-node="mo" transform="translate(0 -0.5)"><path data-c="7C" d="M139 -249H137Q125 -249 119 -235V251L120 737Q130 750 139 750Q152 750 159 735V-235Q151 -249 141 -249H139Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(278,0)"><path data-c="1D434" d="M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(1028,0) translate(0 -0.5)"><path data-c="7C" d="M139 -249H137Q125 -249 119 -235V251L120 737Q130 750 139 750Q152 750 159 735V-235Q151 -249 141 -249H139Z" style="stroke-width:3;"></path></g></g><rect width="1506" height="60" x="120" y="220"></rect></g></g></g></g>',1),J=[z],G=a("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[a("msup",null,[a("mi",null,"A"),a("mrow",{"data-mjx-texclass":"ORD"},[a("mo",null,"∗"),a("mo",null,"−"),a("mn",null,"1")])]),a("mo",null,"="),a("mrow",{"data-mjx-texclass":"ORD"},[a("mfrac",null,[a("mi",null,"A"),a("mrow",null,[a("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),a("mi",null,"A"),a("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|")])])])])],-1),$={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},F={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.564ex"},xmlns:"http://www.w3.org/2000/svg",width:"12.586ex",height:"2.564ex",role:"img",focusable:"false",viewBox:"0 -883.9 5562.8 1133.4","aria-hidden":"true"},U=t('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="msup"><g data-mml-node="mi"><path data-c="1D434" d="M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z" style="stroke-width:3;"></path></g><g data-mml-node="TeXAtom" transform="translate(783,413) scale(0.707)" data-mjx-texclass="ORD"><g data-mml-node="mo"><path data-c="2217" d="M229 286Q216 420 216 436Q216 454 240 464Q241 464 245 464T251 465Q263 464 273 456T283 436Q283 419 277 356T270 286L328 328Q384 369 389 372T399 375Q412 375 423 365T435 338Q435 325 425 315Q420 312 357 282T289 250L355 219L425 184Q434 175 434 161Q434 146 425 136T401 125Q393 125 383 131T328 171L270 213Q283 79 283 63Q283 53 276 44T250 35Q231 35 224 44T216 63Q216 80 222 143T229 213L171 171Q115 130 110 127Q106 124 100 124Q87 124 76 134T64 161Q64 166 64 169T67 175T72 181T81 188T94 195T113 204T138 215T170 230T210 250L74 315Q65 324 65 338Q65 353 74 363T98 374Q106 374 116 368T171 328L229 286Z" style="stroke-width:3;"></path></g></g></g><g data-mml-node="mo" transform="translate(1464.3,0)"><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z" style="stroke-width:3;"></path></g><g data-mml-node="TeXAtom" data-mjx-texclass="ORD" transform="translate(2520.1,0)"><g data-mml-node="mo" transform="translate(0 -0.5)"><path data-c="7C" d="M139 -249H137Q125 -249 119 -235V251L120 737Q130 750 139 750Q152 750 159 735V-235Q151 -249 141 -249H139Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(278,0)"><path data-c="1D434" d="M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(1028,0) translate(0 -0.5)"><path data-c="7C" d="M139 -249H137Q125 -249 119 -235V251L120 737Q130 750 139 750Q152 750 159 735V-235Q151 -249 141 -249H139Z" style="stroke-width:3;"></path></g><g data-mml-node="msup" transform="translate(1306,0)"><g data-mml-node="mi"><path data-c="1D434" d="M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z" style="stroke-width:3;"></path></g><g data-mml-node="TeXAtom" transform="translate(783,413) scale(0.707)" data-mjx-texclass="ORD"><g data-mml-node="mo"><path data-c="2212" d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mn" transform="translate(778,0)"><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" style="stroke-width:3;"></path></g></g></g></g></g></g>',1),K=[U],W=a("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[a("msup",null,[a("mi",null,"A"),a("mrow",{"data-mjx-texclass":"ORD"},[a("mo",null,"∗")])]),a("mo",null,"="),a("mrow",{"data-mjx-texclass":"ORD"},[a("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),a("mi",null,"A"),a("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),a("msup",null,[a("mi",null,"A"),a("mrow",{"data-mjx-texclass":"ORD"},[a("mo",null,"−"),a("mn",null,"1")])])])])],-1);function Y(a2,t2,e2,s2,l2,o2){return e(),s("div",null,[D,a("blockquote",null,[Z,a("mjx-container",q,[(e(),s("svg",v,P)),C])]),R,a("mjx-container",S,[(e(),s("svg",O,I)),E]),a("mjx-container",N,[(e(),s("svg",X,J)),G]),a("mjx-container",$,[(e(),s("svg",F,K)),W])])}const Q2=o(A,[["render",Y]]);export{n2 as __pageData,Q2 as default};