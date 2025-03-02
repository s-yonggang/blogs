# 批量处理网格(BatchedMesh)

## 核心
Mesh 的特殊版本，支持多绘制批量渲染。如果您必须渲染`大量具有相同材质但具有不同世界变换和几何形状的对象`，请使用 BatchedMesh。使用 BatchedMesh 将帮助您减少绘制调用的数量，从而提高应用程序的整体渲染性能。

## 示例
```javascript
const box = new THREE.BoxGeometry( 1, 1, 1 );
const sphere = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );

// initialize and add geometries into the batched mesh
const batchedMesh = new BatchedMesh( 10, 5000, 10000, material );
const boxId = batchedMesh.addGeometry( box );
const sphereId = batchedMesh.addGeometry( sphere );

// position the geometries
batchedMesh.setMatrixAt( boxId, boxMatrix );
batchedMesh.setMatrixAt( sphereId, sphereMatrix );

scene.add( batchedMesh );
```

[WebGL / mesh / batch](https://threejs.org/examples/#webgl_mesh_batch)