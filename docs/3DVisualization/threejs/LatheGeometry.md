# LatheGeometry

2D轮廓，经过旋转变换生成一个3D的几何体曲面;

**LatheGeometry(points, segments, phiStart, phiLength)**

- points - Vector2表示的坐标数据组成的数组
- segments - 圆周方向细分数，默认12
- phiStart - 开始角度，默认0
- phiLength - 旋转角度，默认2π

```js
  const path = new THREE.SplineCurve([
    new THREE.Vector2(-12,-50),
    new THREE.Vector2(20,11),
    new THREE.Vector2(-20,50),
  ])
  const pointer = path.getPoints(60);
  const latheGeometry = new THREE.LatheGeometry(pointer,10)
  const material = new THREE.MeshBasicMaterial({
    color: 0x9f00ff,
    wireframe: true,
    side: THREE.DoubleSide
  });
  const geo = new THREE.Mesh(latheGeometry,material);
  scene.add(geo)
```