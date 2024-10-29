# 着色器

## 顶点着色器
Vertex Shader 用于定位几何体的顶点，它的工作原理是发送`顶点位置`、`网格变换`（position、旋rotation和 scale 等）、`摄像机信息`（position、rotation、fov 等）。GPU 将按照 Vertex Shader 中的指令处理这些信息，然后将顶点投影到 2D 空间中渲染成 Canvas。

在每个顶点之间，有些数据`会发生变化`，这类数据称为 `attribute`；有些数据在顶点之间`永远不会变化`，称这种数据为 `uniform`。Vertex Shader 会首先触发，当顶点被放置，GPU 知道几何体的哪些像素可见，然后执行 `Fragment Shader`。

- attribute：使用顶点数组封装每个顶点的数据，一般用于每个顶点都各不相同的变量，如顶点的位置。
- uniform：顶点着色器使用的常量数据，不能被修改，一般用于对同一组顶点组成的单个 3D 物体中所有顶点都相同的变量，如当前光源的位置。

## 片元着色器

Fragment Shader 在 Vertex Shader 之后执行，它的作用是`为几何体的每个可见像素进行着色`。我们可以通过 uniforms（全局的） 将数据发送给它，也可以将 Vertex Shader 中的数据发送给它，这种从 Vertex Shader 发送到 Fragment Shader 的数据称为 `varying`。

Fragment Shader 中最直接的指令就是可以使用相同的颜色为所有像素进行着色。如果只设置了颜色属性，就相当于得到了与 MeshBasicMaterial 等价的材质。如果我们将光照的位置发送给 Fragment Shader，然后根据像素收到光照影响的多少来给像素上色，此时就能得到与 MeshPhongMaterial 效果等价的材质。

- varying: 从顶点着色器发送到片元着色器中的插值计算数据。