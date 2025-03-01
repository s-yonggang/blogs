# ExtrudeGeometry

二维延申成三维(路径拉伸)

**ExtrudeGeometry(shapes : Array, options : Object)**
  
shapes — 形状或者一个包含形状的数组。

options — 一个包含有下列参数的对象(10个)：

:::info options:
- curveSegments — int，曲线上点的数量，默认值是12。
- steps — int，用于沿着挤出样条的深度细分的点的数量，默认值为1。
- depth — float，挤出的形状的深度，默认值为1。
- bevelEnabled — bool，对挤出的形状应用是否斜角，默认值为true。
- bevelThickness — float，设置原始形状上斜角的厚度。默认值为0.2。
- bevelSize — float。斜角与原始形状轮廓之间的延伸距离，默认值为bevelThickness-0.1。
- bevelOffset — float. Distance from the shape outline that the bevel starts. Default is 0.
- bevelSegments — int。斜角的分段层数，默认值为3。
- extrudePath — THREE.Curve对象。一条沿着被挤出形状的三维样条线。路径拉伸不支持斜面
- UVGenerator — Object。提供了UV生成器函数的对象。
:::