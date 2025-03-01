# TubeGeometry

曲线路径管道

**TubeGeometry(path, tubularSegments, radius, radiusSegments, closed)**

- path — Curve - 一个由基类Curve继承而来的3D路径。 Default is a quadratic bezier curve.
- tubularSegments — Integer - 组成这一管道的分段数，默认值为64。
- radius — Float - 管道的半径，默认值为1。
- radialSegments — Integer - 管道横截面的分段数目，默认值为8。
- closed — Boolean 管道的两端是否闭合，默认值为false。

## 属性
共有属性请参见其基类BufferGeometry。
- .parameters : Object
  > 一个包含着构造函数中每个参数的对象。在对象实例化之后，对该属性的任何修改都不会改变这个几何体。

- .tangents : Array
  > 一个Vector3切线数组。

- .normals : Array
  > 一个Vector3法线数组。

- .binormals : Array
  > 一个Vector3次法线数组。

# 方法
共有方法请参见其基类BufferGeometry。