# 大量对象渲染优化————合并成一个几何体

```javascript
import * as BufferGeometryUtils from 'three/addons/utils/BufferGeometryUtils.js';
```
处理大量 大量对象渲染，可以 将所有几何体的数组传入`BufferGeometryUtils.mergeGeometries`, 这个方法将会将其合并到一个mesh中，相当于只需渲染一次大一点的几何体对象;

合并几何体是一个常见的优化手段. 比如, 可以将一百多棵树合并成一个几何体, 一堆石头合并成一块石头, 零零碎碎的栅栏合并成一个栅栏的mesh. 另一个在 Minecraft 中的例子是, `它不太可能单独绘制每个立方体, 而是创建一组合并的立方体, 并且选择性地删除那些永远不可见的面`。

- 存在的问题1：合并后多材质应用问题，可以通过使用顶点着色法来解决
- 存在的问题2：合并后多单个几何体动画问题，可以通过使用顶点着色法来解决、可以通过使用 Morphtargets
> 所谓变形目标 morphtargets 是一种给每个顶点提供多个值, 以及使他们进行变形或者说lerp(线性插值)的方法. morphtargets通常用于3D角色的面部动画, 但这并不是唯一的用途.
