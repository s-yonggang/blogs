# three-mesh-bvh 基本使用

## MeshBVH 层次结构基本使用

单个几何体：
```javascript
// 添加扩展函数(THREE的原有方法)
THREE.BufferGeometry.prototype.computeBoundsTree = computeBoundsTree;
THREE.BufferGeometry.prototype.disposeBoundsTree = disposeBoundsTree;
THREE.Mesh.prototype.raycast = acceleratedRaycast;

// 创建几何体
const geom = new THREE.SphereGeometry(1, 32, 32);
const mesh = new THREE.Mesh(geom, new THREE.MeshBasicMaterial({}));
// 计算几何体的 BVH
geom.computeBoundsTree({
  strategy: CENTER,// AVERAGE、CENTER、SAH      // 使用中心策略
  maxDepth: 40,                                 // 最大深度
  maxLeafTris: 10,                              // 每个叶子节点的最大三角形数
  setBoundingBox: true,                         // 设置边界框
  useSharedArrayBuffer: false,                  // 是否使用共享数组缓冲区
  verbose: true,                                // 是否输出详细信息
  onProgress: (progress) => {
    console.log(`Progress: ${progress * 100}%`); // 进度回调
  },
  range: {
    start: 0,
    count: geom.index ? geom.index.count : geom.attributes.position.count // 范围
  }
});
const helper = new MeshBVHHelper(mesh, 40) // 辅助线
scene.add(mesh,helper)
```

批量几何体：

```javascript

```


