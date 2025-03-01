# shape(轮廓)

**Shape( points : Array )**
> points: 一个Vector2数组。

> 使用`路径`以及`可选的孔洞`来定义一个二维形状平面。

> 它可以和`ExtrudeGeometry`、`ShapeGeometry`一起使用，获取点，或者获取三角面。
> 
## 属性
- 继承Path所有属性
- 共有属性请参见其基类Path。
- .uuid : String
  > 该类所创建的实例的UUID。它是自动被指定的，因此它不应当被编辑、更改。
- .holes : Array
  > 一个paths数组，定义了形状上的孔洞。

## 方法
- 继承Path所有方法
  > 共有方法请参见其基类Path。
- .extractPoints ( divisions : Integer ) : Array
  > divisions:结果的精细程度（细分数）
- .getPointsHoles ( divisions : Integer ) : Array
  > divisions -- 结果的精细程度（细分数）

  > 获取一个表示形状上的孔洞的Vector2s数组。

  ```js
  const shape = new THREE.Shape();
  shape.moveTo(50, 50);
  shape.lineTo(50, -50);
  shape.lineTo(-50, -50);
  shape.lineTo(-50, 50);
  shape.closePath();

  // 添加孔洞
  const path = new THREE.Path();
  path.absarc(0, 0, 20, 0, Math.PI * 2);
  shape.holes.push(path);

  const shapeGeo = new THREE.ExtrudeGeometry(shape, {
    depth: 20,
    bevelEnabled: false,
    curveSegments: 100,
  });
  const shapeMaterial = new THREE.MeshNormalMaterial();
  const shapeMesh = new THREE.Mesh(shapeGeo, shapeMaterial);
  scene.add(shapeMesh);
  ```


