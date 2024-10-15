# 点模型

## 顶点坐标
- 使用`BufferGeometry`创建集合对象。
```js
// 方式一 vertices = new Float32Array(arr)
const pointBuffer = new THREE.BufferGeometry();
const vertices = new Float32Array([x1,y1,z1,x2,y2,z2]);
const geometry = pointBuffer.setAttribute("position", new THREE.BufferAttribute(vertices, 3));

// 方式二 pointArr = pointArr.push(new THREE.Vector3(x,y,z))
const pointArr = [new THREE.Vector3(x1,y1,z1),new THREE.Vector3(x2,y2,z2)]
const geometry = new THREE.BufferGeometry().setFromPoints(pointArr);
```

## 点材质
PointsMaterial
```js
const pointMaterial = new THREE.PointsMaterial({
    color: 0xff0000,
    size: 0.8,
});
```

## 点模型
Points
```js
const pointMesh = new THREE.Points(geometry, pointMaterial);
scene.add(pointMesh);
```