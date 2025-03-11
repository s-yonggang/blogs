# three-mesh-bvh MeshBVH  层次结构基本使用

## 单个几何体：bvh

方式一：添加扩展函数（修改原型链）
```javascript
import {
  computeBoundsTree, 
  disposeBoundsTree,
  acceleratedRaycast,
  MeshBVHHelper
} from 'three-mesh-bvh';
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
方式二：手动构建 BVH
```javascript 
import { MeshBVH, MeshBVHHelper} from 'three-mesh-bvh';

const bvh = new MeshBVH(geom, {
  strategy: 1,                 // 使用中心策略
  maxDepth: 40,                // 最大深度
  maxLeafTris: 10,             // 每个叶子节点的最大三角形数
  setBoundingBox: true,        // 设置边界框
  useSharedArrayBuffer: false, // 是否使用共享数组缓冲区
  verbose: true,               // 是否输出详细信息
  onProgress: (progress) => {
    console.log(`Progress: ${progress * 100}%`); // 进度回调
  },
  range: {
    start: 0,
    count: geom.index ? geom.index.count : geom.attributes.position.count // 范围
  }
})
geom.boundsTree = bvh;
const helper = new MeshBVHHelper(mesh, 40) // 辅助线
scene.add(mesh,helper)
```


## 批量几何体：bvh

多种几何体、不同坐标位置、相同材质 做 bvh 计算
```javascript
const material = new THREE.MeshBasicMaterial({});
const boxGeo = new THREE.BoxGeometry(2.0, 2.0, 2.0);
const sphereGeo = new THREE.SphereGeometry(1.2, 32, 32);
const torusGeo = new THREE.TorusGeometry(2, 0.4, 16, 32);
const maxVertexCount = boxGeo.attributes.position.count + sphereGeo.attributes.position.count + torusGeo.attributes.position.count;
const maxIndexCount = (boxGeo.index ? boxGeo.index.count : 0) + (sphereGeo.index ? sphereGeo.index.count : 0) + (torusGeo.index ? torusGeo.index.count : 0);
const batchedMesh = new THREE.BatchedMesh(100, maxVertexCount, maxIndexCount, material);
const geometries = [boxGeo, sphereGeo, torusGeo];
const geometryIds = geometries.map(geometry => batchedMesh.addGeometry(geometry));
const num = 20
for (let i = 0; i < num; i++) {
  batchedMesh.addInstance(geometryIds[i % geometryIds.length])
  batchedMesh.setMatrixAt(i, randomizeMatrix(new THREE.Matrix4())); // 设置位置
}
batchedMesh.computeBoundsTree(geometryIds[num]);
scene.add(batchedMesh)
```

多个几何体合并成一个、再做 bvh 计算
```javascript
// gltf-格式-模型压缩
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('./draco/gltf/');
// gltf-格式-模型加载
const loader = new GLTFLoader();
loader.setDRACOLoader(dracoLoader);
loader.setMeshoptDecoder(MeshoptDecoder);

const [A] = await Promise.all([
  loader.loadAsync('./models/gears.glb'),
]);

// 将模型合并处理
const geometries: any = [];
A.scene.traverse((child: any) => {
  if (child.isMesh) {
    child.updateMatrixWorld = true;
    const geometry = child.geometry.clone();
    geometry.applyMatrix4(child.matrixWorld)
    geometries.push(geometry);
  }
});
const mergedGeometry = BufferGeometryUtils.mergeGeometries(geometries, false);

const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(mergedGeometry, material);
mergedGeometry.computeBoundsTree( {
    strategy: CENTER,
    maxDepth: 40,
    maxLeafTris: 10,
    verbose: true,
    setBoundingBox: true,
    useSharedArrayBuffer: false,
    onProgress: (progress) => {
      console.log(`Progress: ${progress * 100}%`);
    },
    range: {
      start: 0,
      count: mergedGeometry.index ? mergedGeometry.index.count : mergedGeometry.attributes.position.count
    }
  }
);
const helper = new MeshBVHHelper(mesh, 40) // 辅助线
scene.add(helper)
```
