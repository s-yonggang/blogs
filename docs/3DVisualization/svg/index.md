# svg基础图形
## 几种使用方法
1. 在浏览器直接打开
2. 内嵌到 HTML 中（推荐⭐⭐⭐）
3. CSS 背景图（推荐⭐）
4. 使用 img 标签引入（推荐⭐）
5. 使用 iframe 标签引入（不推荐❌）
6. 使用 embed 标签引入（不推荐❌）
7. 使用 object 标签引入（不推荐❌）


## SVG重要属性
- viewBox
- preserveAspectRatio

## 基本绘制
```html
<svg width="300" height="300" viewBox="0 0 2000 2000">
    <circle cx="150" cy="150" r="150"></circle>
</svg>
```

## 基本图形

- 圆
  - 语法：`<circle cx="100" cy="100" r="100" />`
  - 属性：cx、cy为圆的坐标，r为圆的半径

- 椭圆
  - 语法：`<ellipse cx="100" cy="100" rx="100" ry="50" />`
  - 属性：cx、cy为椭圆的坐标，rx、ry为椭圆半径

- 矩形
  - 语法：`<rect x="0" y="0" rx="5" ry="5" width="300" height="200" />`
  - 属性：x、y为矩形右上坐标，rx、ry矩形圆角，width、height矩形宽高


- 线条
  - 语法：`<line x1="50" y1="50" x2="100" y2="100" />`
  - 属性：x1、y1起始坐标，x2、y2结束坐标  

- 折线
  - 语法：`<polyline points="0 0,20 20, 20 40, 40 60, 60 80" style="fill:none; stroke: #000000;" />`
  - 属性：points折线集合点，style（不设置看不到效果）

- 多边形
  - 语法：`<polygon points="0 0,20 20, 20 40, 40 60, 60 80" style="fill:none; stroke: #000000;" />`
  - 属性：points折线集合点，style（不设置看不到效果）

### **path** 
  ::: tip 注意：
  所有命令中，大写为**绝对定位**，小写为**相对定位(相对于前一个点)**。
  :::

  ::: tip 直线命令
  1. M（Move to）: 移动虚拟画笔到指定的（x,y）坐标，仅移动不绘制,常用于起始点，用来指明画笔应该从何处开始绘制。
     - 语法：M x y
     - 参数：x、y为坐标
  2. L（Line to）: 绘制一点并且和之前的点（也就是L命令前面的点）连成一条直线。
     - 语法：L x y
     - 参数：x、y为坐标
  3. H（Horizontal Line to）: 可以从之前的点绘制一条水平的直线，H命令可以等价于y值和之前点相同的L命令。
     - 语法：H x
     - 参数：x 为坐标
  4. V（Vertical Line to）：可以从之前的点绘制一条垂直的直线，V命令可以等价于x值和之前点相同的L命令。
     - 语法：V y
     - 参数：y 为坐标
  :::
  
  ::: tip 曲线命令
  1. Q（Quadratic Bezier Curve to）：来绘制一条二次贝塞尔曲线，二次贝塞尔曲线需要一个控制点，用来确定起点和终点的曲线斜率。
     - 语法：Q x1 y1, x y
     - 参数：x、y为终点位置，x1、y1为控制点
  2. T（Smooth Quadratic Bezier Curve to）：是一个延长二次贝塞尔曲线命令，T命令可以**通过前一个控制点推断出后一个控制点**。
     - 语法：T x y 或者 t x y
     - 参数：x、y为终点位置
  3. C（Curve to）：用来绘制一条三次贝塞尔曲线，相对于二次贝塞尔曲线多了一个控制点。
     - C x1 y1, x2 y2, x y
     - x、y为终点位置，x1、y1为曲线起始点的控制点，x2、y2为曲线终止的控制点
  4. S（Smooth Curve to）：三次贝塞尔曲线的S命令和二次贝塞尔曲线的T命令比较相似。
     - 语法：S x2 y2, x y
     - 参数：x、y为终点位置，x2、y2为曲线终止的控制点。
  5. A（Elliptical Arc）：用于画弧形，它可以截取圆或椭圆的弧形成的曲线
     - 语法：A rx ry x-axis-rotation large-arc-flag sweep-flag x y
     - 参数：
        - rx、ry分别为X轴的半径和Y轴的半径
        - x-axis-rotation为弧度在X轴的旋转角度
        - large-arc-flag决定弧线是大于还是小于180度，0表示小角度弧，1表示大角度弧
        - sweep-flag为弧的方向，0表示从起点到终点沿逆时针画弧，1表示从起点到终点沿顺时针画弧
        - x、y为弧形的终点
  :::
  
  ::: tip 结束命令
  1. Z（Close path）：Z命令是一个闭合命令，他会从当前点画一条直线到路径的起始点。不区分大小写。
     - 无线参数（所以不区分大小写）
  :::


## 分组

**`<g>`**

1. 将所有子元素作为一个组合，通常还有一个唯一的id作为名称;
2. 每个组合还可以拥有自己的`<title>`和`<desc>`来供基于文本的xml应用程序识别或者为视障用户提供更好的可访问性;
3. 阅读器会读取`<title>`和`<desc>`元素的内容。鼠标悬停或者轻触组合内的图形时，会显示`<title>`元素内容的提示框;
4. 可以组合元素并可以提供一些注释，组合还可以比较嵌套;


**`<use>`**

1. 复杂的图形中经常会出现重复元素，svg 使用`<use>`元素为定义在`<g>`元素内的组合或者任意独立图形元素提供了类似复杂黏贴的能力;
2. 定义了一组`<g>`图形对象后，使用`<use>`标签再次显示它们。要指定想要的重用的组合就给xlink:href属性指定URI即可，同时还要指定x和y的位置以表示组合应该移动到的位置;
3. `<use>`元素并不限制只使用在同一个文件内的对象，还可以指定任意有效的文件或者URI;
   
**`<defs>`**

1. SVG规范推荐我们将所有想要复用的对象放置在元素内，这样SVG阅读器进入流式环境中就能更轻松地处理数据;
2. 由于组合在`<defs>`元素内，它们不会立刻绘制到屏幕上，而是作为"模板"供其他地方使用。

**`<symbol>`**

- 作为模板，同`<defs>`一样，内部的所有元素都不会展现在画布上，因此咱们无需把它放在 规范内。然而，咱们还是习惯将它放到 `<defs>`中，因为 symbol 也是咱们定义的供后续使用的元素。

**`<image>`**

- 顾名思义里面放图片的，至于说是矢量图(vector)还是位图(raster)，都成，用起来也方便：


:::tip 总结
- 使用 `<g>` 来组合形状。
- 对于需要有额外特性的组合使用 `<symbol>`
- 使用 `<defs>` 元素定义组合和模板。
- 使用 `<use>` 元素来放置你定义的组合和模板。
:::



## **style属性**
| 属性                | 说明                                                                                                                |
| :------------------ | :------------------------------------------------------------------------------------------------------------------ |
| *fill*              | 图形内部使用哪种颜色进行填充，如果未指定，则会使用**黑色**填充，也可以指定为 none，即不填充图形内部，保持透明       |
| *fill-opacity*      | 定义填充颜色透明度（合法的范围是：0 - 1）                                                                           |
| *stroke*            | 定义图形边框的颜色                                                                                                  |
| *stroke-width*      | 定义图形边框的宽度                                                                                                  |
| *stroke-opacity*    | 定义轮廓颜色的透明度（合法的范围是：0 - 1）                                                                         |
| *stroke-linecap*    | 定义轮廓终点的形状：butt（默认值）、round（由stroke-width大小控制）、square（多出一段由stroke-width大小控制的长度） |
| *stroke-linejoin*   | 定义了轮廓连接处的样式：miter（默认值）、round（用圆角连接，实现平滑效果）、bevel：连接处会形成一个斜面             |
| *stroke-dasharray*  | 定义轮廓为虚线                                                                                                      |
| *stroke-dashoffset* | 定义轮廓为虚线路径开始的距离。值可为正值、负值、百分比。                                                            |
| *stroke-miterlimit* | 定义轮廓两条线交汇在一起形成一个尖角                                                                                |
| *shape-rendering*   | geometricPrecision/定义轮开启关闭（crispEdges）反锯齿功能                                                           |
| *opacity*           | 定义元素的透明值（合法的范围是：0 - 1）                                                                             |


**注意：形状元素、文本内容元素 对`fill-rules`属性的使用**

fill-rule属性用来设置复杂形状的填充规则。它有两种填充方式：nonzero 和 evenodd。 该属性简单说就是判断某点属于该形状的“内部”还是“外部”


## 文字
`<text></text>`
   - x、y： x和y属性决定了文字的绘制起点;
   - dx、yx：dx和dy属性与x和y属性不同的是，x和y属性是绝对的坐标，而dx和dy属性是相对于当前位置的偏移量;
   - rotate：可以把文字旋转一个角度;
   - textLength：定了一个字符串的计算长度;
   - lengthAdjust：spacing(只拉伸或压缩间距（文字不变形）)、spacingAndGlyphs(同时拉伸或压缩间距和文字本身（文字变形）);
   - fill、stroke：填充和轮廓也都可以应用于文字;
   - CSS文字属性：同样也可以应用于SVG（font-weight、font-size、font-family、font-style、font-variant、font-stretch、font-size-adjust、kerning、letter-spacing、word-spacing、text-decoration ... ）;

`<tspan></tspan>` 
   - tspan标签和text标签一样都可以用来添加文字，的text标签的属性在tspan标签中也适用，属于行类元素;
   - tspan标签必须是一个text元素的子元素或别的子元素tspan的子元素;
   - 需要注意的是tspan标签的x、y和 dx、dy 会对标签后面的内容造成影响;

`<textPath></textPath>`
   - 可以利用它的xlink:href属性取得一个任意路径，并且可以让字符顺着路径渲染;

## 渐变
   **`<stop></stop>`标签用来定义渐变的颜色坡度，具有三个属性：**
   - offset：定义渐变开始和结束的位置;
   - stop-color：（定义颜色）;
   - stop-opacity：（定义透明度）;

   **线性渐变**

   - 语法：`<linearGradient x1="" y1="" x2="" y2=""></linearGradient>`
   - 属性：x1、y1定义线性渐变的起点， x2、y2定义渐变的终点;
      
   **径向渐变**

   - 语法：`<radialGradient cx="" cy="" r="" fx="" fy=""></radialGradient>`
   - 属性： cx、cy、r分别为圆的坐标和半径，也就是渐变的范围，fx、fy定义渐变的中心点，也叫渐变的焦点。
  


## 裁剪和蒙层
   **裁剪**
   `<clipPath id="clipPath"><path d=""></path></clipPath>` ---> "clip-path="url(#clipPath)"

   **蒙层**
   `<mark id="clipPath"><path d=""></path></mark>` ---> "mask="url(#Mask)"

## 动画  

