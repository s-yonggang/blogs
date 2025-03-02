# 实例化网格（InstancedMesh）

## 核心
一种具有实例化渲染支持的特殊版本的Mesh。你可以`使用 InstancedMesh 来渲染大量具有相同几何体与材质、但具有不同世界变换的物体`。 使用 InstancedMesh 将帮助你减少 draw call 的数量，从而提升你应用程序的整体渲染性能。

## 示例
[WebGL / instancing / dynamic](https://threejs.org/examples/#webgl_instancing_dynamic)

[WebGL / instancing / performance](https://threejs.org/examples/#webgl_instancing_performance)

[WebGL / instancing / scatter](https://threejs.org/examples/#webgl_instancing_scatter)

[WebGL / instancing / raycast](https://threejs.org/examples/#webgl_instancing_raycast)