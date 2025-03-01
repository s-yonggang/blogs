# MeshBVH

以下的方法都是MeshBVH实例方法：`MeshBVH.prototype.xxx`

## 1. bvhcast
> 方法用于在 BVH 中执行包围盒投射。它允许用户在 BVH 中以自定义的方式定义包围盒投射逻辑，并对每个相交的包围盒和三角形执行操作。
```javascript
bvhcast(otherBvh, matrixToLocal, callbacks) 
```
:::details 用法示例
```javascript
import * as THREE from 'three';
import { MeshBVH, computeBoundsTree } from 'three-mesh-bvh';

// 创建场景、摄像机和渲染器
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 创建几何体和网格
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// 为几何体计算 BVH
geometry.computeBoundsTree();

// 设置相机位置
camera.position.z = 5;

// 创建包围盒和投射方向
const box = new THREE.Box3(new THREE.Vector3(-0.5, -0.5, -0.5), new THREE.Vector3(0.5, 0.5, 0.5));
const direction = new THREE.Vector3(1, 1, 1).normalize();

// 创建自定义包围盒投射逻辑的回调函数
const callbacks = {
  intersectsBounds: (box) => {
    // 检查包围盒是否与 BVH 的节点包围盒相交
    return true;
  },
  intersectsRange: (offset, count) => {
    // 检查包围盒是否与特定范围的三角形相交
    return true;
  },
  intersectsTriangle: (tri) => {
    // 检查包围盒是否与特定三角形相交
    return true;
  }
};

// 执行包围盒投射
const result = geometry.boundsTree.bvhcast(box, direction, callbacks);

if (result) {
  console.log('The bounding box intersects with the geometry.');
} else {
  console.log('The bounding box does not intersect with the geometry.');
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
```
:::

## 2. closestPointToGeometry
> 方法用于查找几何体上最接近另一几何体的点。
```javascript
closestPointToGeometry(otherGeometry, geometryToBvh, target1 = {}, target2 = {}, minThreshold = 0, maxThreshold = Infinity)
```
:::details 用法示例
```javascript
import * as THREE from 'three';
import { MeshBVH, computeBoundsTree, disposeBoundsTree, acceleratedRaycast } from 'three-mesh-bvh';

// 创建场景、摄像机和渲染器
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 创建几何体和网格
const geometry1 = new THREE.BoxGeometry();
const material1 = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const mesh1 = new THREE.Mesh(geometry1, material1);
scene.add(mesh1);

const geometry2 = new THREE.SphereGeometry(0.5, 32, 32);
const material2 = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh2 = new THREE.Mesh(geometry2, material2);
mesh2.position.set(1, 1, 1);
scene.add(mesh2);

// 为几何体计算 BVH
geometry1.computeBoundsTree();
geometry2.computeBoundsTree();

// 设置相机位置
camera.position.z = 5;

// 查找几何体上最接近另一几何体的点
const target = {
  point: new THREE.Vector3(),
  normal: new THREE.Vector3(),
  distance: Infinity
};

geometry1.boundsTree.closestPointToGeometry(geometry1, geometry2, target);

console.log('Closest Point:', target.point);
console.log('Normal at Closest Point:', target.normal);
console.log('Distance to Closest Point:', target.distance);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
```
:::

## 3. closestPointToPoint
> 方法用于查找几何体上最接近给定点的点。
```javascript
closestPointToPoint(point, target = {}, minThreshold = 0, maxThreshold = Infinity)
```
:::details 用法示例
```javascript
import * as THREE from 'three';
import { MeshBVH, computeBoundsTree, disposeBoundsTree, acceleratedRaycast } from 'three-mesh-bvh';

// 创建场景、摄像机和渲染器
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 创建几何体和网格
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// 为几何体计算 BVH
geometry.computeBoundsTree();

// 设置相机位置
camera.position.z = 5;

// 查找几何体上最接近给定点的点
const target = {
  point: new THREE.Vector3(),
  distance: Infinity
};

const point = new THREE.Vector3(1, 1, 1);
geometry.boundsTree.closestPointToPoint(point, target);

console.log('Closest Point:', target.point);
console.log('Distance to Closest Point:', target.distance);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
```
:::

## 4. getBoundingBox
> 方法用于获取几何体的包围盒。
```javascript
getBoundingBox(target)
```
:::details 用法示例
```javascript
import * as THREE from 'three';
import { MeshBVH, computeBoundsTree, disposeBoundsTree, acceleratedRaycast } from 'three-mesh-bvh';

// 创建场景、摄像机和渲染器
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 创建几何体和网格
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// 为几何体计算 BVH
geometry.computeBoundsTree();

// 设置相机位置
camera.position.z = 5;

// 获取几何体的包围盒
const boundingBox = new THREE.Box3();
geometry.boundsTree.getBoundingBox(geometry, boundingBox);

console.log('Bounding Box:', boundingBox);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
```
:::

## 5. indirect
> 方法用于通过间接索引来访问和修改几何体的数据。它允许用户在不直接操作几何体数据的情况下，通过索引来实现各种操作。
>
> 当 indirect 参数为 false 时，表示操作将直接进行，而不是通过间接索引或其他间接方式。这意味着操作将直接应用到几何体或数据上，而不需要通过额外的索引或间接访问。

:::details 用法示例
```javascript
import * as THREE from 'three';
import { MeshBVH, computeBoundsTree } from 'three-mesh-bvh';

// 创建场景、摄像机和渲染器
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 创建几何体和网格
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// 为几何体计算 BVH
geometry.computeBoundsTree();

// 创建间接索引
const index = new THREE.BufferAttribute(new Uint16Array([0, 1, 2, 3, 4, 5]), 1);

// 设置相机位置
camera.position.z = 5;

// 使用间接索引访问和修改几何体数据
geometry.boundsTree.indirect(geometry, index, (i) => {
  const positionAttribute = geometry.getAttribute('position');
  const x = positionAttribute.getX(i);
  const y = positionAttribute.getY(i);
  const z = positionAttribute.getZ(i);
  positionAttribute.setXYZ(i, x + 1, y + 1, z + 1);
  positionAttribute.needsUpdate = true;
});

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
```
:::

## 6. intersectsBox
> 方法用于检查几何体是否与给定的`轴对齐包围盒（AABB）相交`。
```javascript
intersectsBox(box, boxToMesh)
```
:::details 用法示例
```javascript
import * as THREE from 'three';
import { MeshBVH, computeBoundsTree, disposeBoundsTree, acceleratedRaycast } from 'three-mesh-bvh';

// 创建场景、摄像机和渲染器
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 创建几何体和网格
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// 为几何体计算 BVH
geometry.computeBoundsTree();

// 设置相机位置
camera.position.z = 5;

// 创建一个轴对齐包围盒
const box = new THREE.Box3(new THREE.Vector3(-1, -1, -1), new THREE.Vector3(1, 1, 1));

// 检查几何体是否与包围盒相交
const intersects = [];
geometry.boundsTree.intersectsBox(box, intersects);

if (intersects.length > 0) {
  console.log('The geometry intersects with the box.');
} else {
  console.log('The geometry does not intersect with the box.');
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
```
:::

## 7. intersectsGeometry
> 方法用于检查两个几何体是否相交。
```javascript
intersectsGeometry(otherGeometry, geomToMesh)
```
:::details 用法示例
```javascript
import * as THREE from 'three';
import { MeshBVH, computeBoundsTree, disposeBoundsTree, acceleratedRaycast } from 'three-mesh-bvh';

// 创建场景、摄像机和渲染器
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 创建几何体和网格
const geometry1 = new THREE.BoxGeometry();
const material1 = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const mesh1 = new THREE.Mesh(geometry1, material1);
scene.add(mesh1);

const geometry2 = new THREE.SphereGeometry(0.5, 32, 32);
const material2 = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh2 = new THREE.Mesh(geometry2, material2);
mesh2.position.set(0.5, 0.5, 0.5);
scene.add(mesh2);

// 为几何体计算 BVH
geometry1.computeBoundsTree();
geometry2.computeBoundsTree();

// 设置相机位置
camera.position.z = 5;

// 检查两个几何体是否相交
const intersects = [];
geometry1.boundsTree.intersectsGeometry(geometry1, geometry2, intersects);

if (intersects.length > 0) {
  console.log('The geometries intersect.');
} else {
  console.log('The geometries do not intersect.');
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
```
:::

## 8. intersectsSphere
> 方法用于检查几何体是否与给定的球体相交。
```javascript
intersectsSphere(sphere)
```

:::details 用法示例
```javascript
import * as THREE from 'three';
import { MeshBVH, computeBoundsTree, disposeBoundsTree, acceleratedRaycast } from 'three-mesh-bvh';

// 创建场景、摄像机和渲染器
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 创建几何体和网格
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// 为几何体计算 BVH
geometry.computeBoundsTree();

// 设置相机位置
camera.position.z = 5;

// 创建一个球体
const sphere = new THREE.Sphere(new THREE.Vector3(0.5, 0.5, 0.5), 0.5);

// 检查几何体是否与球体相交
const intersects = [];
geometry.boundsTree.intersectsSphere(sphere, intersects);

if (intersects.length > 0) {
  console.log('The geometry intersects with the sphere.');
} else {
  console.log('The geometry does not intersect with the sphere.');
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
```
:::

## 9. raycast
> 方法用于在 BVH 中执行光线投射。
```javascript
raycast(ray2, materialOrSide = FrontSide, near = 0, far = Infinity)
```
:::details 用法示例
```javascript
import * as THREE from 'three';
import { MeshBVH, computeBoundsTree, disposeBoundsTree, acceleratedRaycast } from 'three-mesh-bvh';

// 创建场景、摄像机和渲染器
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 创建几何体和网格
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// 为几何体计算 BVH
geometry.computeBoundsTree();

// 加速光线投射
acceleratedRaycast(mesh);

// 设置相机位置
camera.position.z = 5;

// 创建光线投射器
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

function onMouseMove(event) {
  // 将鼠标位置转换为归一化设备坐标
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  // 更新光线投射器
  raycaster.setFromCamera(mouse, camera);

  // 执行光线投射
  const intersects = [];
  geometry.boundsTree.raycast(raycaster, intersects);

  // 处理交点
  if (intersects.length > 0) {
    console.log('Intersected at:', intersects[0].point);
  }
}

window.addEventListener('mousemove', onMouseMove, false);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
```
:::

## 10. raycastFirst
> 方法用于在 BVH 中执行光线投射，并返回第一个相交的结果。
```javascript
raycastFirst(ray2, materialOrSide = FrontSide, near = 0, far = Infinity)
```
:::details 用法示例
```javascript
import * as THREE from 'three';
import { MeshBVH, computeBoundsTree, disposeBoundsTree, acceleratedRaycast } from 'three-mesh-bvh';

// 创建场景、摄像机和渲染器
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 创建几何体和网格
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// 为几何体计算 BVH
geometry.computeBoundsTree();

// 加速光线投射
acceleratedRaycast(mesh);

// 设置相机位置
camera.position.z = 5;

// 创建光线投射器
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

function onMouseMove(event) {
  // 将鼠标位置转换为归一化设备坐标
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  // 更新光线投射器
  raycaster.setFromCamera(mouse, camera);

  // 执行光线投射并获取第一个相交结果
  const intersection = geometry.boundsTree.raycastFirst(raycaster);

  // 处理交点
  if (intersection) {
    console.log('First intersected at:', intersection.point);
  }
}

window.addEventListener('mousemove', onMouseMove, false);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
```
:::

## 11. refit
> 方法用于在几何体的顶点位置发生变化后重新调整 BVH，而不需要重新构建整个 BVH。这对于需要动态更新几何体的场景非常有用。
```javascript
refit(nodeIndices = null)
```
:::details 用法示例
```javascript
import * as THREE from 'three';
import { MeshBVH, computeBoundsTree, refit } from 'three-mesh-bvh';

// 创建场景、摄像机和渲染器
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 创建几何体和网格
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// 为几何体计算 BVH
geometry.computeBoundsTree();

// 设置相机位置
camera.position.z = 5;

// 动态更新几何体顶点位置
function updateGeometry() {
  const positionAttribute = geometry.getAttribute('position');
  const count = positionAttribute.count;

  for (let i = 0; i < count; i++) {
    const x = positionAttribute.getX(i);
    const y = positionAttribute.getY(i);
    const z = positionAttribute.getZ(i);
    positionAttribute.setXYZ(i, x + (Math.random() - 0.5) * 0.1, y + (Math.random() - 0.5) * 0.1, z + (Math.random() - 0.5) * 0.1);
  }

  positionAttribute.needsUpdate = true;

  // 重新调整 BVH
  geometry.boundsTree.refit(geometry);
}

function animate() {
  requestAnimationFrame(animate);
  updateGeometry();
  renderer.render(scene, camera);
}

animate();
```
:::

## 12. shapecast
> 方法用于在 BVH 中执行形状投射。它允许用户在 BVH 中以自定义的方式定义形状投射逻辑，并对每个相交的包围盒和三角形执行操作。
```javascript
shapecast(callbacks)
```
:::details 用法示例
```javascript
import * as THREE from 'three';
import { MeshBVH, computeBoundsTree } from 'three-mesh-bvh';

// 创建场景、摄像机和渲染器
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 创建几何体和网格
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// 为几何体计算 BVH
geometry.computeBoundsTree();

// 设置相机位置
camera.position.z = 5;

// 创建自定义形状投射逻辑的回调函数
const callbacks = {
  intersectsBounds: (box) => {
    // 检查形状是否与包围盒相交
    const sphere = new THREE.Sphere(new THREE.Vector3(0, 0, 0), 1);
    return box.intersectsSphere(sphere);
  },
  intersectsRange: (offset, count) => {
    // 检查形状是否与特定范围的三角形相交
    return true;
  },
  intersectsTriangle: (tri) => {
    // 检查形状是否与特定三角形相交
    const sphere = new THREE.Sphere(new THREE.Vector3(0, 0, 0), 1);
    return tri.intersectsSphere(sphere);
  }
};

// 执行形状投射
const result = geometry.boundsTree.shapecast(callbacks);

if (result) {
  console.log('The shape intersects with the geometry.');
} else {
  console.log('The shape does not intersect with the geometry.');
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
```
:::

## 13. traverse
> 方法用于遍历 BVH 中的所有节点。它允许用户以自定义的方式对每个包围盒和三角形执行操作。
```javascript
traverse(callback, rootIndex = 0)
```
:::details 用法示例
```javascript
import * as THREE from 'three';
import { MeshBVH, computeBoundsTree } from 'three-mesh-bvh';

// 创建场景、摄像机和渲染器
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 创建几何体和网格
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// 为几何体计算 BVH
geometry.computeBoundsTree();

// 设置相机位置
camera.position.z = 5;

// 遍历 BVH 中的所有节点，并输出每个节点的包围盒信息
geometry.boundsTree.traverse((node) => {
  console.log('Node bounding box:', node.boundingBox);
});

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
```
:::