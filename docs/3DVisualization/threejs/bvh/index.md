# three-mesh-bvh

基于 Three.js 的高效 层次包围盒（Bounding Volume Hierarchy, BVH）

旨在`加速复杂 3D 模型的射线检测`（Raycasting）、`碰撞检测`和`空间查询`等操作。它通过构建几何体的 BVH 树优化性能，适用于需要实时交互或大规模场景的应用。

## 核心功能
1. **BVH 树构建**：
   - 将复杂网格的三角形数据组织成 层次包围盒结构，大幅减少射线检测和空间查询的计算量。
   - 支持动态更新 BVH，适用于形变或动态变化的几何体（如动画模型）。

2. **高效射线检测（Raycasting）**：
   - 相比 Three.js 原生的 raycast 方法，性能提升显著，尤其对高多边形模型（如 CAD 模型、扫描网格）。
   - 支持 精确相交测试 和 快速粗略检测，可按需选择。

3. **空间查询**：
   - 范围检测：快速查找模型在指定立方体或球体范围内的三角形。
   - 最近点查询：找到几何体表面距离某空间点最近的位置，适用于碰撞响应或吸附功能。

4. **调试可视化**：
   - 提供可视化 BVH 层级的功能，辅助开发者优化结构和诊断问题。

5. **物理模拟支持**：
   - 与物理引擎（如 Cannon.js、Rapier）结合，加速复杂场景的碰撞检测。

## 应用场景

1. 游戏开发
   - 快速处理玩家与复杂环境的交互（如射击检测、角色移动碰撞）。
   - 优化 AI 的视线检测（如敌人是否看到玩家）。

2. 虚拟现实（VR/AR）
   - 实时手势交互或物体抓取，需要低延迟的射线检测。

3. 工业可视化与 CAD
   - 处理大型机械模型或建筑场景的交互（如点击高亮、测量工具）。
   - `加速点云数据处理中的空间查询`。

4. 三维编辑工具
   - 实现高效的模型编辑功能（如顶点吸附、区域选择）。
   - 支持动态更新 BVH，适应实时网格修改（如雕刻工具）。

5. 物理仿真
   - 为复杂几何体提供快速碰撞检测，避免性能瓶颈。


## 优势

- 性能优先：针对高多边形模型（数万至百万面）优化，减少计算耗时。

- 无缝集成：兼容 Three.js 的 Mesh 和 BufferGeometry，API 设计与原生方法一致。

- 灵活性：支持自定义遍历逻辑，适应不同场景需求（如仅检测特定层级的包围盒）。


## three-mesh-bvh 提供的属性和方法

## 1. AVERAGE、CENTER、SAH
分割策略常量包括 `CENTER`、`AVERAGE` 和 `SAH` （中心分割策略、平均分割策略、表面面积启发式分割策略）。这些策略决定了在构建 BVH（包围体层次结构）节点时如何拆分。
> `SAH`：表面面积启发式，构建较慢但查询效率最高，适合静态模型。适用于 高精度 CAD、离线渲染。
> 
> `CENTER`：按三角形中心分割，构建快但查询效率较低，适合动态几何体。适用于 动画模型、实时编辑工具。
>
> `AVERAGE`：平衡策略，构建和查询效率介于前两者之间。通用场景，不确定时的默认选择。
:::details 示例
```javascript
import { MeshBVH, AVERAGE } from 'three-mesh-bvh';
// 创建几何体
const geometry = new THREE.TorusKnotGeometry(10, 3, 400, 100);
// 使用 AVERAGE 分割策略创建 BVH
const bvh = new MeshBVH(geometry, { strategy: AVERAGE });
// 将 BVH 分配给几何体
geometry.boundsTree = bvh;
```
:::

## 2. BVHShaderGLSL
包含了多种用于处理 BVH（包围体层次结构）的 GLSL 着色器函数和结构体定义。用于在着色器中访问 BVH 数据。
:::details 示例
```javascript
const diamondMaterial = new THREE.ShaderMaterial({
    uniforms: {
        // 场景 / 几何信息
        envMap: { value: environment },
        bvh: { value: new MeshBVHUniformStruct() },
        projectionMatrixInv: { value: camera.projectionMatrixInverse },
        viewMatrixInv: { value: camera.matrixWorld },
        resolution: { value: new THREE.Vector2() },
        // 内部反射设置
        bounces: { value: 3 },
        ior: { value: 2.4 },
        // 色差和颜色设置
        color: { value: new THREE.Color(1, 1, 1) },
        fastChroma: { value: false },
        aberrationStrength: { value: 0.01 },
    },
    vertexShader: /*glsl*/ `
        varying vec3 vWorldPosition;
        varying vec3 vNormal;
        uniform mat4 viewMatrixInv;
        void main() {
            vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
            vNormal = (viewMatrixInv * vec4(normalMatrix * normal, 0.0)).xyz;
            gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
        }
    `,
    fragmentShader: /*glsl*/ `
        #define RAY_OFFSET 0.001

        #include <common>
        precision highp isampler2D;
        precision highp usampler2D;

        ${BVHShaderGLSL.common_functions}
        ${BVHShaderGLSL.bvh_struct_definitions}
        ${BVHShaderGLSL.bvh_ray_functions}

        varying vec3 vWorldPosition;
        varying vec3 vNormal;

        uniform sampler2D envMap;
        uniform float bounces;
        uniform BVH bvh;
        uniform float ior;
        uniform vec3 color;
        uniform bool fastChroma;
        uniform mat4 projectionMatrixInv;
        uniform mat4 viewMatrixInv;
        uniform mat4 modelMatrix;
        uniform vec2 resolution;
        uniform float aberrationStrength;

        #include <cube_uv_reflection_fragment>

        // 执行迭代反射查找，模拟内部反射并返回最终的光线方向。
        vec3 totalInternalReflection(vec3 incomingOrigin, vec3 incomingDirection, vec3 normal, float ior, mat4 modelMatrixInverse) {
            vec3 rayOrigin = incomingOrigin;
            vec3 rayDirection = incomingDirection;

            // 在进入钻石时折射光线方向并调整从钻石表面的偏移以进行光线追踪
            rayDirection = refract(rayDirection, normal, 1.0 / ior);
            rayOrigin = vWorldPosition + rayDirection * RAY_OFFSET;

            // 将光线转换到模型的局部坐标系中
            rayOrigin = (modelMatrixInverse * vec4(rayOrigin, 1.0)).xyz;
            rayDirection = normalize((modelMatrixInverse * vec4(rayDirection, 0.0)).xyz);

            // 执行多次光线投射
            for (float i = 0.0; i < bounces; i++) {
                // 结果
            }

            return rayDirection;
        }
    `
});
```
:::
## 3. INTERSECTED、NOT_INTERSECTED、CONTAINED
空间查询结果状态 的三个常量，主要应用在碰撞检测或范围查询的场景中。三者是互斥的状态，同一查询的返回值必为其中之一。
> 
> `INTERSECTED`：表示查询范围（如球体、立方体）与几何体的包围盒`存在交集`（部分重叠）。
> 
> `NOT_INTERSECTED`：表示查询范围与几何体的包围盒完全`无交集`。
> 
> `CONTAINED`：表示查询范围完全包含`在几何体的包围盒内部`（即几何体的包围盒是查询范围的子集）。

:::tip 使用细节
- 互斥性:
> 三者是互斥的状态，同一查询的返回值必为其中之一。例如，一个物体不可能同时返回 INTERSECTED 和 CONTAINED。

- 层级检测逻辑:
> BVH 树按层级遍历，若父节点返回 CONTAINED，则无需检查子节点。
> 
> 若父节点返回 INTERSECTED，需进一步检测子节点以确定具体相交位置。

- 性能优化意义:
> CONTAINED 可提前终止遍历，减少计算量。
> 
> NOT_INTERSECTED 直接跳过后续处理。
:::

:::details 示例
示例一
```javascript
// 假设已提取视锥体
const viewFrustum = camera.frustum; 
const result = geometry.boundsTree.intersectsFrustum(viewFrustum);
if (result === CONTAINED) {
  // 物体完全在视锥体内，直接渲染
  mesh.visible = true;
} else if (result === INTERSECTED) {
  // 部分可见，需进行精细裁剪
  mesh.visible = checkDetailedVisibility();
}
```
示例二
```javascript
// 检测爆炸范围（球体）内受影响的物体
const explosionSphere = new THREE.Sphere(explosionCenter, radius);
meshes.forEach(mesh => {
  const result = mesh.geometry.boundsTree.intersectsSphere(explosionSphere);
  switch (result) {
    case INTERSECTED:
      // 部分在范围内：计算精确伤害（如距离衰减）
      applyPartialDamage(mesh);
      break;
    case CONTAINED:
      // 完全在范围内：直接造成全额伤害
      applyFullDamage(mesh);
      break;
    case NOT_INTERSECTED:
      // 无影响：跳过
      break;
  }
});
```
示例三
```javascript
// 判断物体是否在相机视锥体内
function updateVisibility(mesh, camera) {
  const frustum = new THREE.Frustum();
  frustum.setFromProjectionMatrix(
    new THREE.Matrix4().multiplyMatrices(
      camera.projectionMatrix,
      camera.matrixWorldInverse
    )
  );
  const result = mesh.geometry.boundsTree.intersectsFrustum(frustum);
  mesh.visible = result !== NOT_INTERSECTED;
}
```
:::
## 4. ExtendedTriangle
ExtendedTriangle 是 three-mesh-bvh 库中扩展自 THREE.Triangle 类的一个类。专为 高效几何计算 设计，尤其在射线检测、相交测试等场景中提供更精确和优化的方法。
- 增强的几何运算：
    - 提供比原生 Triangle 更精确的 射线相交检测 和 点-三角形距离计算。
    - 支持 质心坐标（Barycentric Coordinates） 计算，用于纹理插值或碰撞点信息提取。
    - 优化算法减少浮点误差，提升大规模模型计算的稳定性。
- 与 BVH 的深度集成：
    - 在 MeshBVH 构建过程中自动使用 ExtendedTriangle 处理三角形数据，加速层级包围盒的生成。
    - 直接支持 shaderIntersectFunction，用于在着色器中实现 GPU 加速的三角形相交检测。
- 动态几何支持：
    - 允许实时更新三角形顶点数据（如动画形变），并保持高效的相交检测性能。

:::tip
1. MeshBVH 在构建 BVH 树时会自动将几何体的三角形转换为 ExtendedTriangle。仅在需要 单独处理三角形（如自定义碰撞逻辑）时才需手动实例化。
2. 调用 update(a, b, c) 更新顶点后，ExtendedTriangle 会重新计算内部几何数据（如平面方程），确保后续检测的准确性。若几何体整体变化，需重建 BVH 树（geometry.disposeBoundsTree() + computeBoundsTree()）。
3. ExtendedTriangle 采用 `预计算平面方程` 和 `避免冗余计算` 的策略，减少射线检测时的运算量。在 BVH 的层级剪枝配合下，性能提升显著。
:::

:::details 示例
示例一：精确射线检测（如 CAD 模型点击）
```javascript
import { ExtendedTriangle } from 'three-mesh-bvh';
// 定义三角形顶点
const a = new THREE.Vector3(0, 0, 0);
const b = new THREE.Vector3(1, 0, 0);
const c = new THREE.Vector3(0, 1, 0);
const triangle = new ExtendedTriangle(a, b, c);

// 定义射线
const ray = new THREE.Ray(
  new THREE.Vector3(0, 0, 1), // 起点
  new THREE.Vector3(0, 0, -1) // 方向
);

// 检测相交
const hitResult = { point: new THREE.Vector3(), distance: 0, faceIndex: 0 };
if (triangle.intersectRay(ray, hitResult)) {
  console.log('交点坐标:', hitResult.point); // 输出交点 (0, 0, 0)
}
```

示例二：动态更新三角形（如动画形变）
```javascript
// 初始三角形
const triangle = new ExtendedTriangle(vertexA, vertexB, vertexC);

// 每帧更新顶点（例如跟随动画）
function animate() {
  vertexA.y += 0.1 * Math.sin(Date.now() * 0.001);
  triangle.update(vertexA, vertexB, vertexC); // 更新顶点数据
}
```

示例三：计算质心坐标（用于纹理插值）
```javascript
// 假设已知交点 hitPoint 在三角形内
const barycoord = new THREE.Vector3();
triangle.getBarycoord(hitPoint, barycoord);

// 使用质心坐标插值纹理 UV
const uvA = mesh.geometry.attributes.uv.getXYZ(face.a);
const uvB = mesh.geometry.attributes.uv.getXYZ(face.b);
const uvC = mesh.geometry.attributes.uv.getXYZ(face.c);
const interpolatedUV = uvA.multiplyScalar(barycoord.x)
  .add(uvB.multiplyScalar(barycoord.y))
  .add(uvC.multiplyScalar(barycoord.z));
```
:::
## 5. FloatVertexAttributeTexture、IntVertexAttributeTexture、UIntVertexAttributeTexture
用于将几何体的 顶点属性（如位置、法线、颜色等）编码为 WebGL 纹理，以便在着色器中进行高效访问。它们的主要目的是通过 GPU 加速复杂计算（如碰撞检测、SDF 生成等），减少 CPU 与 GPU 之间的数据传输开销。它们继承自 THREE.DataTexture 类。
> FloatVertexAttributeTexture：float（32位浮点），存储连续型数据（如顶点坐标 position、法线 normal、UV uv）。
> 
> IntVertexAttributeTexture：int（32位整型），存储离散型数据（如顶点索引、材质ID、分组标记）。
>
> UIntVertexAttributeTexture：uint（32位无符号），存储无符号整数（如顶点计数、哈希值、自定义编码数据）。
:::details 示例
示例一：传递纹理到着色器
```javascript
// JavaScript 端
const positionTexture = new FloatVertexAttributeTexture(geometry, 'position');
const material = new THREE.ShaderMaterial({
  uniforms: {
    positionTexture: { value: positionTexture.getTexture() }
  },
  fragmentShader: `...`
});


// GLSL 端
uniform sampler2D positionTexture; // 浮点纹理
uniform sampler2D indexTexture;    // 整型纹理

// 获取顶点索引对应的属性值
vec3 getPosition(int vertexIndex) {
  // 计算纹理坐标：vertexIndex → (u, v)
  float width = float(textureSize(positionTexture, 0).x;
  float v = floor(float(vertexIndex) / width) / float(textureSize(positionTexture, 0).y);
  float u = fract(float(vertexIndex) / width);
  // 读取纹理数据（RGB对应vec3属性）
  return texture(positionTexture, vec2(u, v)).rgb;
}

// 获取整型属性
int getMaterialID(int vertexIndex) {
  // 类似逻辑，使用 indexTexture
  return texture(indexTexture, computeUV(vertexIndex)).r;
}
```
示例二：GPU 中计算顶点到点的最近距离
```javascript
// 创建顶点位置纹理
const positionTexture = new FloatVertexAttributeTexture(geometry, 'position');

// 着色器材质
const material = new THREE.ShaderMaterial({
  uniforms: {
    positionTexture: { value: positionTexture.getTexture() },
    queryPoint: { value: new THREE.Vector3() }
  },
  fragmentShader: `
    uniform sampler2D positionTexture;
    uniform vec3 queryPoint;
    varying vec2 vUv;

    void main() {
      // 假设通过 vUv 映射到顶点索引（需实际计算）
      int vertexIndex = int(vUv.x * textureSize(positionTexture, 0).x);
      vec3 position = texture(positionTexture, vUv).rgb;
      float distance = length(position - queryPoint);
      gl_FragColor = vec4(vec3(distance), 1.0);
    }
  `
});
```
:::
## 6. MeshBVH
是three-mesh-bvh 库的核心类，用于为 Three.js 的几何体（BufferGeometry）构建 `层次包围盒`（Bounding Volume Hierarchy, BVH），显著加速射线检测、碰撞检测和空间查询操作。
:::details 示例
示例一：游戏中的射击检测
```javascript
// 初始化
gunMesh.geometry.computeBoundsTree();

// 射击时检测命中
const raycaster = new THREE.Raycaster();
raycaster.set(gunPosition, shootDirection);
raycaster.firstHitOnly = true;
const hits = raycaster.intersectObject(enemyMesh);

if (hits.length > 0) {
  applyDamage(hits[0].point); // 命中处理
}
```
示例二：CAD 模型精确点击
```javascript
// 高精度检测配置
geometry.computeBoundsTree({ strategy: 'SAH' });

// 鼠标点击事件
window.addEventListener('click', (e) => {
  raycaster.setFromCamera(mousePos, camera);
  const hits = raycaster.intersectObjects(cadModels);
  if (hits.length > 0) selectComponent(hits[0].object);
});
```
示例三：VR 中的手势交互
```javascript
// 每帧检测手部控制器与物体的交互
function update() {
  controller.update();
  raycaster.set(controller.position, controller.direction);
  const hits = raycaster.intersectObjects(interactiveObjects);
  if (hits.length > 0) showTooltip(hits[0].object);
}
```
示例四：序列化和反序列化
```javascript
import { MeshBVH } from 'three-mesh-bvh';

const geometry = new THREE.BufferGeometry();
// Assume geometry is properly set up here...

const bvh = new MeshBVH(geometry);
const serialized = MeshBVH.serialize(bvh);

const deserializedBVH = MeshBVH.deserialize(serialized, geometry);
```
示例五：进行射线投射
```javascript
import * as THREE from 'three';
import { MeshBVH } from 'three-mesh-bvh';

const geometry = new THREE.BufferGeometry();
// Assume geometry is properly set up here...

const bvh = new MeshBVH(geometry);

const raycaster = new THREE.Raycaster();
raycaster.set(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, -1));

const intersects = bvh.raycast(raycaster.ray);
console.log(intersects);
```
:::
## 7. MeshBVHHelper
> 是一个用于可视化 MeshBVH 的辅助类。它能够帮助开发者调试和展示 BVH 结构。
:::details 示例
```javascript
new MeshBVHHelper(
  meshBVH: MeshBVH,  // 目标 BVH 实例
  depth?: number,    // 最大可视化深度（默认显示全部层级）
  color?: THREE.Color // 线框颜色（默认 0x00FF00）
);

// 示例
import * as THREE from 'three';
import { MeshBVH, MeshBVHHelper } from 'three-mesh-bvh';

const geometry = new THREE.BufferGeometry();
// 假设 geometry 已经正确设置...

const bvh = new MeshBVH(geometry); // 或者 geometry.computeBoundsTree();
const mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));

const helper = new MeshBVHHelper(mesh, bvh);
scene.add(helper);
```
优化
```javascript
// 仅显示根节点和第 1 层，减少线框数量
const helper = new MeshBVHHelper(mesh.geometry.boundsTree, 1);
```
刷新
```javascript
// 刷新helper
helper.update(mesh.geometry.boundsTree); // 必须调用以同步最新结构
```
调试技巧
```javascript
// SAH 策略用绿色，CENTER 用蓝色
const helperSAH = new MeshBVHHelper(bvhSAH, Infinity, 0x00FF00);
const helperCENTER = new MeshBVHHelper(bvhCENTER, Infinity, 0x0000FF);
```
:::

## 8. validateBounds
> 检查 BVH 结构中的每个节点的包围盒是否正确地包含了其子节点的包围盒。这有助于检测和修复 BVH 结构中的潜在错误，以确保其功能的可靠性。
:::details 示例
```javascript
import * as THREE from 'three';
import { MeshBVH, validateBounds } from 'three-mesh-bvh';

// 创建几何体
const geometry = new THREE.BufferGeometry();
// 假设几何体已经正确设置...

// 创建 BVH
const bvh = new MeshBVH(geometry);

// 验证 BVH 的边界
// const isValid = geometry.boundsTree.validateBounds(); // 等同下面
const isValid = validateBounds(bvh); 

if (isValid) {
  console.log('BVH 边界验证通过');
} else {
  console.log('BVH 边界验证失败');
}
```
:::

## 9. MeshBVHUniformStruct
用于在着色器中使用 BVH 进行加速的光线投射和其他几何操作。它将 BVH 数据打包成纹理，可以在 WebGL 着色器中作为统一变量传递。
> `updateFrom`: 从一个 MeshBVH 实例更新纹理数据。
>
> `dispose`: 释放与 MeshBVHUniformStruct 关联的纹理资源。
:::details 示例
```javascript
import * as THREE from 'three';
import { MeshBVH, MeshBVHUniformStruct, FloatVertexAttributeTexture } from 'three-mesh-bvh';

// 创建几何体
const geometry = new THREE.BufferGeometry();
// 假设几何体已经正确设置...

// 创建 BVH
const bvh = new MeshBVH(geometry);

// 创建 MeshBVHUniformStruct 实例
const bvhUniform = new MeshBVHUniformStruct();
bvhUniform.updateFrom(bvh);

// 创建着色器材质
const material = new THREE.ShaderMaterial({
  uniforms: {
    bvh: { value: bvhUniform },
    normalAttribute: { value: new FloatVertexAttributeTexture() },
    cameraWorldMatrix: { value: new THREE.Matrix4() },
    invProjectionMatrix: { value: new THREE.Matrix4() },
    invModelMatrix: { value: new THREE.Matrix4() },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    precision highp isampler2D;
    precision highp usampler2D;
    // 这里需要包含 BVH 着色器函数
    uniform mat4 cameraWorldMatrix;
    uniform mat4 invProjectionMatrix;
    uniform mat4 invModelMatrix;
    varying vec2 vUv;
    void main() {
      // 在这里使用 BVH 进行光线投射等操作
      gl_FragColor = vec4(vUv, 0.0, 1.0);
    }
  `,
});

// 在渲染循环中更新 uniform 数据
function animate() {
  requestAnimationFrame(animate);

  // 更新 uniform 数据
  material.uniforms.cameraWorldMatrix.value.copy(camera.matrixWorld);
  material.uniforms.invProjectionMatrix.value.copy(camera.projectionMatrixInverse);
  material.uniforms.invModelMatrix.value.copy(mesh.matrixWorld).invert();

  renderer.render(scene, camera);
}
animate();
```
:::

## 10. OrientedBox
用于表示和操作方向包围盒（Oriented Bounding Box，OBB）。与轴对齐包围盒（AABB）不同，OBB 可以有任意的旋转角度，这使得它在某些应用场景中更加灵活和精确。

OrientedBox 提供了以下主要功能：
- 构造函数: 创建一个新的 OrientedBox 实例。
- `set`: 设置 OBB 的最小点、最大点和变换矩阵。
- `intersectsBox`: 检测 OBB 是否与另一个 AABB 相交。
- `intersectsTriangle`: 检测 OBB 是否与一个三角形相交。
- `closestPointToPoint`: 计算 OBB 与一个点之间的最近距离。
- `distanceToPoint`: 计算 OBB 与一个点之间的距离。
- `distanceToBox`: 计算 OBB 与另一个 AABB 之间的距离。

:::details 示例
```javascript
import * as THREE from 'three';
import { OrientedBox } from 'three-mesh-bvh';

// 创建一个方向包围盒
const obb = new OrientedBox(
  new THREE.Vector3(-1, -1, -1),
  new THREE.Vector3(1, 1, 1),
  new THREE.Matrix4().makeRotationY(Math.PI / 4)
);

// 设置 OBB 的参数
obb.set(
  new THREE.Vector3(-2, -2, -2),
  new THREE.Vector3(2, 2, 2),
  new THREE.Matrix4().makeRotationZ(Math.PI / 6)
);

// 检测 OBB 是否与 AABB 相交
const aabb = new THREE.Box3(new THREE.Vector3(-3, -3, -3), new THREE.Vector3(3, 3, 3));
const intersectsAABB = obb.intersectsBox(aabb);
console.log('OBB 与 AABB 相交:', intersectsAABB);

// 检测 OBB 是否与三角形相交
const triangle = new THREE.Triangle(
  new THREE.Vector3(0, 0, 0),
  new THREE.Vector3(1, 1, 0),
  new THREE.Vector3(1, 0, 1)
);
const intersectsTriangle = obb.intersectsTriangle(triangle);
console.log('OBB 与三角形相交:', intersectsTriangle);

// 计算 OBB 到点的最近距离
const point = new THREE.Vector3(5, 5, 5);
const closestPoint = new THREE.Vector3();
const distanceToPoint = obb.closestPointToPoint(point, closestPoint);
console.log('OBB 到点的最近距离:', distanceToPoint);
console.log('最近点坐标:', closestPoint);

// 计算 OBB 到点的距离
const distance = obb.distanceToPoint(point);
console.log('OBB 到点的距离:', distance);

// 计算 OBB 到 AABB 的距离
const distanceToBox = obb.distanceToBox(aabb);
console.log('OBB 到 AABB 的距离:', distanceToBox);
```
:::

应用场景：

- 旋转机械的碰撞检测
> 精确检测齿轮、转臂等旋转部件的干涉。

- 车辆物理模拟
> 计算车轮（旋转）与地形的碰撞，避免穿模。

- VR/AR 中的手势交互
> 检测手部控制器（可能旋转）与虚拟物体的交互。

- 动态物体的视锥体裁剪
> 优化旋转物体的渲染剔除，减少 GPU 负载。

:::tip 使用时的优化思想
1. 分层检测：
先用 Box3 快速剔除明显不相交的物体，再用 OrientedBox 精确检测。

2. 减少动态更新频率：
对高频旋转的物体，限制 setFromObject() 的调用次数（如每 2 帧更新一次）。

3. 合并检测批次：
对多个 OBB 的相交检测，使用并行计算（如 GPU 加速）。
:::

OBB vs AABB

| 特性           | `OrientedBox` (OBB)              | `Box3` (AABB)                          |
| :------------- | :------------------------------- | :------------------------------------- |
| **方向敏感性** | ✅ 支持任意旋转，紧密包裹物体     | ❌ 始终对齐坐标轴，旋转后包围盒体积膨胀 |
| **检测精度**   | 更高，减少误判                   | 较低，可能包含无效区域                 |
| **计算复杂度** | 较高（需处理旋转矩阵）           | 较低（仅需比较坐标范围）               |
| **适用场景**   | 旋转物体、复杂形状的精确碰撞检测 | 静态物体、快速粗略检测                 |

## 11. StaticGeometryGenerator
用于 合并多个静态几何体 的工具类，旨在优化场景中大量静态物体的性能。通过将多个网格（Mesh）合并为单个几何体（BufferGeometry），可减少绘制调用（Draw Call）和 BVH 构建开销，特别适用于复杂场景中的静态元素（如建筑、地形、植被等）。
```javascript
new StaticGeometryGenerator(
  meshes: Mesh[],                   // 待合并的网格数组
  options?: {
    applyWorldTransforms?: boolean,  // 是否应用网格的世界变换（默认 true）
    mergeMaterials?: boolean,        // 是否合并材质（默认 false）
    attributes?: string[]            // 需合并的顶点属性（默认 ['position', 'normal', 'uv']）
  }
)
```

主要功能：
- 构造函数: 创建一个新的 StaticGeometryGenerator 实例。
- add: 向生成器中添加几何体。
- generate: 生成合并后的静态几何体。
- applyTransform: 应用变换矩阵到几何体。
- dispose：释放临时内存，通常在生成几何体后调用。

:::details 示例

示例一：合并几何体
```javascript
import * as THREE from 'three';
import { StaticGeometryGenerator } from 'three-mesh-bvh';

// 创建一个几何体生成器
const generator = new StaticGeometryGenerator();

// 创建并添加多个几何体
const geometry1 = new THREE.BoxGeometry(1, 1, 1);
const geometry2 = new THREE.SphereGeometry(0.5, 32, 32);

// 应用变换到几何体
const matrix = new THREE.Matrix4().makeTranslation(2, 0, 0);
generator.add(geometry1);
generator.add(geometry2, matrix);

// 生成合并后的静态几何体
const staticGeometry = generator.generate();

// 创建网格并添加到场景
const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
const mesh = new THREE.Mesh(staticGeometry, material);
scene.add(mesh);

// 渲染循环
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
```
示例二：合并建筑模型并加速射线检测
```javascript
// 初始化场景
const scene = new THREE.Scene();

// 创建多个建筑网格（位置不同）
const buildings = [];
for (let i = 0; i < 100; i++) {
  const building = new THREE.Mesh(buildingGeometry, buildingMaterial);
  building.position.set(
    Math.random() * 100 - 50,
    0,
    Math.random() * 100 - 50
  );
  buildings.push(building);
}

// 合并所有建筑
const generator = new StaticGeometryGenerator(buildings);
const mergedGeometry = generator.generate();
generator.dispose();

// 构建 BVH
mergedGeometry.computeBoundsTree({ strategy: 'SAH' });

// 创建合并后的网格（使用单一材质）
const mergedMaterial = new THREE.MeshStandardMaterial({ color: 0x888888 });
const mergedMesh = new THREE.Mesh(mergedGeometry, mergedMaterial);
scene.add(mergedMesh);

// 射线检测（点击选择建筑）
const raycaster = new THREE.Raycaster();
document.addEventListener('click', (e) => {
  const mouse = new THREE.Vector2(
    (e.clientX / window.innerWidth) * 2 - 1,
    -(e.clientY / window.innerHeight) * 2 + 1
  );
  raycaster.setFromCamera(mouse, camera);
  const hits = raycaster.intersectObject(mergedMesh);
  if (hits.length > 0) {
    console.log('点击位置:', hits[0].point);
  }
});
```
:::

## 12. acceleratedRaycast
用于加速射线投射（raycasting）过程。它利用 BVH（Bounding Volume Hierarchy）数据结构来快速确定射线与几何体的交点，从而提高射线投射的效率。
```javascript
import { acceleratedRaycast } from 'three-mesh-bvh';
// 替换 Three.js 原生方法
THREE.Mesh.prototype.raycast = acceleratedRaycast;
```
性能对比示例：
> 数据基于中等配置 PC，射线检测单次执行时间。

| 模型复杂度（三角形数） | 原生 `raycast` 耗时（ms） | `acceleratedRaycast` 耗时（ms） |
| :--------------------- | :------------------------ | :------------------------------ |
| 1,000                  | ~0.1                      | ~0.2                            |
| 10,000                 | ~1.5                      | ~0.3                            |
| 100,000                | ~15                       | ~0.5                            |
| 1,000,000              | ~150（卡顿）              | ~1.0                            |
:::details 示例
示例一：选取目标
```javascript
// 监听鼠标点击事件
document.addEventListener('click', (event) => {
  // 转换鼠标坐标到标准化设备坐标
  const mouse = new THREE.Vector2(
    (event.clientX / window.innerWidth) * 2 - 1,
    -(event.clientY / window.innerHeight) * 2 + 1
  );
  
  // 更新射线
  raycaster.setFromCamera(mouse, camera);
  
  // 检测所有模型
  const intersects = raycaster.intersectObjects(models);
  
  if (intersects.length > 0) {
    const selectedObject = intersects[0].object;
    console.log("选中对象:", selectedObject);
  }
});
```
示例二：游戏中的子弹命中检测
```javascript
function shootWeapon() {
  // 从枪口发射射线
  const gunDirection = new THREE.Vector3(0, 0, -1);
  gunDirection.applyQuaternion(gunMesh.quaternion);
  raycaster.set(gunMesh.position, gunDirection);
  
  // 仅检测首个命中目标（提升性能）
  raycaster.firstHitOnly = true;
  const hits = raycaster.intersectObjects(enemies);
  
  if (hits.length > 0) {
    applyDamage(hits[0].object, hits[0].point);
  }
}
```
:::

:::tip 注意
1. 必须构建 BVH 树
> 未调用 geometry.computeBoundsTree() 的模型将回退到原生检测，无加速效果。
2. 材质透明度处理
> 若需跳过透明部分（如玻璃窗），需在 onBeforeRaycast 回调中过滤：
```javascript
mesh.onBeforeRaycast = (raycaster) => {
  if (material.transparent) return false; // 跳过透明材质
};
```
3. 与 InstancedMesh 兼容性
> 实例化网格需使用 computeBatchedBoundsTree()：
```javascript
const instancedMesh = new THREE.InstancedMesh(geometry, material, count);
instancedMesh.computeBatchedBoundsTree();
```

结合 BVH 构建策略调整和动态更新机制，可在游戏开发、工业设计、虚拟现实等场景中实现高效、精准的 3D 交互体验。
- 性能飞跃：处理百万级三角形模型仍保持流畅。
- 精准检测：支持完整的交点数据（法线、UV 等）。
- 无缝集成：兼容所有 Three.js 生态插件（如控制器、物理引擎）。
:::

## 13. computeBatchedBoundsTree
用于为 BatchedMesh 生成 BVH（Bounding Volume Hierarchy）。该函数可以为`批量几何体生成 BVH`，从而提高射线投射和碰撞检测的效率。（）
```javascript
InstancedMesh.computeBatchedBoundsTree(options?: {
  strategy?: 'SAH' | 'CENTER' | 'AVERAGE',  // 构建策略（默认 SAH）
  maxDepth?: number,                        // 树的最大深度
  maxLeafTris?: number,                     // 叶节点最大实例数
  onProgress?: (progress: number) => void   // 构建进度回调
}): void
```
:::details 示例
1. 构建实例化 BVH
```javascript
// 创建实例化网格（如 1000 个立方体）
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial();
const instancedMesh = new THREE.InstancedMesh(geometry, material, 1000);

// 随机设置实例的位置和旋转
const matrix = new THREE.Matrix4();
for (let i = 0; i < 1000; i++) {
  matrix.setPosition(
    Math.random() * 100 - 50,
    Math.random() * 10,
    Math.random() * 100 - 50
  );
  matrix.makeRotationY(Math.random() * Math.PI);
  instancedMesh.setMatrixAt(i, matrix);
}

// 构建批量 BVH
instancedMesh.computeBatchedBoundsTree({
  strategy: 'SAH',
  maxLeafTris: 8 // 每个叶节点最多包含 8 个实例的包围盒
});

// 将实例化网格添加到场景
scene.add(instancedMesh);
```
2. 射线检测（点击选择实例）
```javascript
const raycaster = new THREE.Raycaster();
document.addEventListener('click', (e) => {
  // 转换鼠标坐标到射线
  const mouse = new THREE.Vector2(
    (e.clientX / window.innerWidth) * 2 - 1,
    -(e.clientY / window.innerHeight) * 2 + 1
  );
  raycaster.setFromCamera(mouse, camera);
  
  // 检测命中实例
  const hits = raycaster.intersectObject(instancedMesh);
  if (hits.length > 0) {
    const instanceId = hits[0].instanceId; // 关键：获取实例 ID
    console.log("选中的实例索引:", instanceId);
    highlightInstance(instanceId); // 自定义高亮逻辑
  }
});
```
3. 动态更新实例后重建 BVH
```javascript
// 修改第 5 个实例的位置
const matrix = new THREE.Matrix4();
matrix.setPosition(10, 2, 3);
instancedMesh.setMatrixAt(5, matrix);
instancedMesh.instanceMatrix.needsUpdate = true;

// 释放旧 BVH 并重建
instancedMesh.disposeBatchedBoundsTree();
instancedMesh.computeBatchedBoundsTree();
```
:::

 **`computeBatchedBoundsTree` 与 `computeBoundsTree` 的对比**

| 方法                         | 适用对象        | 构建目标               | 典型场景                       |
| :--------------------------- | :-------------- | :--------------------- | :----------------------------- |
| `computeBoundsTree()`        | 普通 `Mesh`     | 几何体三角形层级的 BVH | 单个复杂模型（如 CAD）         |
| `computeBatchedBoundsTree()` | `InstancedMesh` | 实例包围盒层级的 BVH   | 大规模重复物体（如草地、人群） |

:::tip 注意
1. 实例矩阵更新后必须重建 BVH
> 修改实例的 position/rotation/scale 后，需调用 `disposeBatchedBoundsTree()` + `computeBatchedBoundsTree()`。
2. 射线检测结果中的 instanceId
> 命中结果中的 instanceId 属性表示命中的实例索引，需通过 `instancedMesh.getMatrixAt(instanceId)` 获取实例变换信息。
3. 内存释放
> 销毁实例化网格前调用 disposeBatchedBoundsTree()：
```javascript
instancedMesh.disposeBatchedBoundsTree();
scene.remove(instancedMesh);
```
:::

## 14. computeBoundsTree
用于为 BufferGeometry 生成 BVH（Bounding Volume Hierarchy）。BVH 是一种数据结构，用于加速射线投射、碰撞检测等几何操作。
```javascript
geometry.computeBoundsTree(options?: {
  strategy?: 'SAH' | 'CENTER' | 'AVERAGE',  // 构建策略（默认 SAH）
  maxDepth?: number,                        // 树的最大深度（默认 40）
  maxLeafTris?: number,                     // 叶节点最大三角形数（默认 10）
  verbose?: boolean                         // 输出构建日志（默认 false）
}): void
```

:::details 示例
示例一：基本使用
```javascript
import * as THREE from 'three';
import { acceleratedRaycast, computeBoundsTree, disposeBoundsTree } from 'three-mesh-bvh';

// 添加扩展函数
THREE.BufferGeometry.prototype.computeBoundsTree = computeBoundsTree;
THREE.BufferGeometry.prototype.disposeBoundsTree = disposeBoundsTree;
THREE.Mesh.prototype.raycast = acceleratedRaycast;

// 创建场景、相机和渲染器
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 创建几何体和材质
const geometry = new THREE.TorusKnotGeometry(10, 3, 400, 100);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// 计算 BVH
geometry.computeBoundsTree();

// 设置相机位置
camera.position.z = 50;

// 创建射线投射器
const raycaster = new THREE.Raycaster();
raycaster.firstHitOnly = true;

// 创建鼠标事件监听器
window.addEventListener('mousemove', (event) => {
  const mouse = new THREE.Vector2();
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);

  const intersects = raycaster.intersectObject(mesh);
  if (intersects.length > 0) {
    console.log('Hit:', intersects[0]);
  }
});

// 渲染循环
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
```

示例二：
1. 构建 BVH 并加速射线检测
```javascript
import { acceleratedRaycast } from 'three-mesh-bvh';

// 替换 Three.js 原生射线检测方法
THREE.Mesh.prototype.raycast = acceleratedRaycast;

// 创建几何体并构建 BVH
const geometry = new THREE.TorusKnotGeometry();
geometry.computeBoundsTree({ strategy: 'SAH' });

// 创建网格并添加到场景
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// 射线检测
const raycaster = new THREE.Raycaster();
raycaster.setFromCamera(mouse, camera);
const hits = raycaster.intersectObject(mesh); // 自动使用 BVH 加速
```
2. 动态几何体更新
```javascript
// 修改几何体顶点（例如形变动画）
geometry.attributes.position.array[0] += 0.1;
geometry.attributes.position.needsUpdate = true;

// 释放旧 BVH 并重新构建
geometry.disposeBoundsTree(); 
geometry.computeBoundsTree({ strategy: 'CENTER' }); // 快速重建
```
3. 自定义构建参数
```javascript
// 优化大规模模型：限制叶节点三角形数和深度
geometry.computeBoundsTree({
  strategy: 'SAH',
  maxDepth: 30,
  maxLeafTris: 8,  // 更小的叶节点提升精度
  verbose: true    // 打印构建日志
});

// 输出示例：
// [MeshBVH] 构建耗时: 120ms
// [MeshBVH] 节点数: 2563, 叶节点数: 1420
```


示例三：典型应用场景
1. 复杂模型的点击检测（如 CAD 零件）
```javascript
// 高精度检测配置
geometry.computeBoundsTree({ strategy: 'SAH', maxLeafTris: 5 });

document.addEventListener('click', (e) => {
  raycaster.setFromCamera(mouse, camera);
  const hits = raycaster.intersectObjects(models);
  if (hits.length > 0) selectPart(hits[0].object);
});
```

2. 动态物理碰撞检测
```javascript
// 高精度检测配置
// 每帧检测两个动态物体的碰撞
const obj1.geometry.computeBoundsTree({ strategy: 'CENTER' });
const obj2.geometry.computeBoundsTree({ strategy: 'CENTER' });

function checkCollision() {
  const tree1 = obj1.geometry.boundsTree;
  const tree2 = obj2.geometry.boundsTree;
  const isColliding = tree1.intersectsBounds(tree2);
  if (isColliding) handleCollision();
}
```

3. 开放世界游戏中的快速查询
```javascript
// 合并地形区块后构建 BVH
const terrainGeometry = mergeTerrainChunks();
terrainGeometry.computeBoundsTree();

// 检测玩家是否在危险区域内
const dangerZone = new THREE.Sphere(player.position, RADIUS);
const isInDanger = terrainGeometry.boundsTree.intersectsSphere(dangerZone);
if (isInDanger) applyDamage();
```
:::

性能优化方案：
1. 策略选择建议

| 场景                    | 推荐策略  | 参数建议             |
| :---------------------- | :-------- | :------------------- |
| 静态高精度模型（CAD）   | `SAH`     | `maxLeafTris: 5-10`  |
| 动态物体（角色/机械臂） | `CENTER`  | `maxLeafTris: 10-20` |
| 通用场景                | `AVERAGE` | `maxLeafTris: 10-15` |
1. 内存与性能监控
```javascript
// 估算 BVH 内存占用
const bytes = geometry.boundsTree.estimateMemoryInBytes();
console.log(`BVH 内存占用: ${(bytes / 1024 / 1024).toFixed(2)} MB`);
// 监控射线检测耗时
console.time('raycast');
const hits = raycaster.intersectObject(mesh);
console.timeEnd('raycast'); // 输出: raycast: 0.8ms
```
1. 注意
- 未调用 computeBoundsTree：未构建 BVH 的几何体将回退到原生检测，无加速效果。
- 动态更新后未重建：修改顶点后需调用 disposeBoundsTree() + computeBoundsTree()。
- 过度细分叶节点：maxLeafTris < 5 可能导致树深度暴增，反而降低性能。

## 15. disposeBatchedBoundsTree
用于释放 BatchedMesh 中 BVH（Bounding Volume Hierarchy）的资源。该函数可以释放所有几何体的 BVH，也可以释放指定索引的几何体的 BVH。
:::details 示例
示例一：销毁实例化网格的 BVH
```javascript
// 创建实例化网格并构建 BVH
const instancedMesh = new THREE.InstancedMesh(geometry, material, count);
instancedMesh.computeBatchedBoundsTree();

// 当不再需要 BVH 或销毁网格前
instancedMesh.disposeBatchedBoundsTree();
scene.remove(instancedMesh);
```
示例二：BVH动态更新实例后重建 BVH
```javascript
// 修改实例的位置
instancedMesh.setMatrixAt(index, newMatrix);
instancedMesh.instanceMatrix.needsUpdate = true;

// 释放旧 BVH 并重建
instancedMesh.disposeBatchedBoundsTree();
instancedMesh.computeBatchedBoundsTree();
```

示例三：批量更新优化（避免频繁重建）
```javascript
// 批量更新多个实例的变换
for (let i = 0; i < 100; i++) {
  updateInstanceMatrix(i); // 自定义更新逻辑
  instancedMesh.setMatrixAt(i, newMatrix);
}
instancedMesh.instanceMatrix.needsUpdate = true;

// 统一释放并重建
instancedMesh.disposeBatchedBoundsTree();
instancedMesh.computeBatchedBoundsTree({ strategy: 'CENTER' }); // 快速构建
```

示例四：游戏中的动态物体管理
```javascript
// 敌方单位实例化网格
const enemies = new THREE.InstancedMesh(soldierGeo, soldierMat, 100);
enemies.computeBatchedBoundsTree();

// 当敌人被消灭时，释放其 BVH 并移除
function destroyEnemy(index) {
  enemies.disposeBatchedBoundsTree(); // 释放旧资源
  enemies.removeInstance(index);      // 假设有自定义方法移除实例
  enemies.computeBatchedBoundsTree(); // 重建新 BVH
}
```

示例五：实时编辑工具中的实例调整
```javascript
// 拖拽调整实例位置
function onDragEnd() {
  // 更新拖拽实例的矩阵
  instancedMesh.setMatrixAt(draggedIndex, newMatrix);
  instancedMesh.instanceMatrix.needsUpdate = true;

  // 更新 BVH
  instancedMesh.disposeBatchedBoundsTree();
  instancedMesh.computeBatchedBoundsTree();
}
```

示例六：大规模场景的卸载
```javascript
// 切换场景时释放资源
function unloadScene() {
  scene.traverse((obj) => {
    if (obj.isInstancedMesh && obj.geometry.boundsTree) {
      obj.disposeBatchedBoundsTree();
    }
  });
  scene.clear(); // 移除所有对象
}
```
:::

 **`disposeBatchedBoundsTree` 与 `disposeBoundsTree` 的对比**

| 方法                         | 适用对象        | 作用目标             | 典型场景               |
| :--------------------------- | :-------------- | :------------------- | :--------------------- |
| `disposeBoundsTree()`        | 普通 `Mesh`     | 释放单个几何体的 BVH | 单个动态模型更新或销毁 |
| `disposeBatchedBoundsTree()` | `InstancedMesh` | 释放实例化网格的 BVH | 实例变换更新或批量销毁 |

:::tip 注意
1. 更新后必须重建 BVH
调用 disposeBatchedBoundsTree() 后，若未重新构建 computeBatchedBoundsTree()，射线检测将回退到原生未加速模式。

2. 避免冗余调用
若实例未变化，无需频繁销毁/重建 BVH。例如静态场景只需构建一次。

3. 内存泄漏风险
未正确释放 BVH 的实例化网格会导致内存持续占用，尤其在动态场景中需严格配对调用：
```javascript
instancedMesh.computeBatchedBoundsTree(); // 构建
// ... 使用 BVH ...
instancedMesh.disposeBatchedBoundsTree(); // 释放
```

在以下场景中必须使用：

- 实例位置/旋转/缩放修改后：确保 BVH 与最新数据同步。
- 实例删除或场景卸载时：避免残留无效数据。
- 切换 BVH 构建策略前：清理旧策略生成的层级结构。
:::

## 16. disposeBoundsTree
用于 释放几何体（BufferGeometry）的 BVH 树资源 的方法，专门管理普通 Mesh 的 BVH 内存生命周期。它在动态几何更新、对象销毁或场景切换时至关重要，避免内存泄漏并优化性能。

:::details 示例
示例一：销毁几何体的 BVH
```javascript
// 创建几何体并构建 BVH
const geometry = new THREE.BoxGeometry();
geometry.computeBoundsTree();

// 当不再需要 BVH 或销毁对象前
geometry.disposeBoundsTree(); // 释放 BVH 资源
scene.remove(mesh);           // 从场景移除网格
```

示例二：动态几何更新
```javascript
// 修改顶点数据（如形变动画）
geometry.attributes.position.array[0] += 0.1;
geometry.attributes.position.needsUpdate = true;

// 释放旧 BVH 并重建
geometry.disposeBoundsTree();
geometry.computeBoundsTree({ strategy: 'CENTER' }); // 快速重建
```

示例三：场景切换时批量释放
```javascript
// 遍历场景中所有几何体并释放 BVH
scene.traverse((obj) => {
  if (obj.isMesh && obj.geometry?.boundsTree) {
    obj.geometry.disposeBoundsTree();
  }
});
```

示例四：动态形变动画（如布料模拟）
```javascript
function updateClothGeometry() {
  // 更新顶点数据
  clothGeometry.attributes.position.needsUpdate = true;
  // 每 5 帧更新一次 BVH（平衡性能与精度）
  if (frameCount % 5 === 0) {
    clothGeometry.disposeBoundsTree();
    clothGeometry.computeBoundsTree({ strategy: 'CENTER' });
  }
}
```

示例五：可破坏物体的碎片管理
```javascript
// 物体破碎时生成碎片几何体
const fragments = createFragments(originalMesh);
fragments.forEach(fragment => {
  fragment.geometry.computeBoundsTree(); // 为碎片构建 BVH
  scene.add(fragment);
});

// 销毁碎片时释放资源
function destroyFragment(fragment) {
  fragment.geometry.disposeBoundsTree();
  scene.remove(fragment);
}
```

示例六：资源敏感型应用（如移动端）
```javascript
// 当对象移出视锥体时释放 BVH
function onObjectCulled(obj) {
  if (obj.geometry?.boundsTree) {
    obj.geometry.disposeBoundsTree(); // 释放不可见对象的 BVH
  }
}

// 当对象重新进入视锥体时重建
function onObjectVisible(obj) {
  if (!obj.geometry.boundsTree) {
    obj.geometry.computeBoundsTree();
  }
}
```

:::tip 注意
1. 更新后必须重建：调用 disposeBoundsTree() 后，若未重新构建 computeBoundsTree()，射线检测将回退到原生未加速模式。

2. 与 Three.js 原生 dispose 集成：在 Three.js 标准的资源释放流程中同步调用：
```javascript
function disposeMesh(mesh) {
  mesh.geometry.disposeBoundsTree();
  mesh.geometry.dispose();  // Three.js 原生方法，释放几何体
  mesh.material.dispose();  // 释放材质
  scene.remove(mesh);
}
```
3. 避免冗余调用：静态几何体无需频繁释放/重建，仅在数据变化时调用。

必须调用此方法的场景：
- 几何体顶点数据发生修改。
- 对象被永久移除或场景卸载。
- 切换 BVH 构建策略（如从 SAH 改为 CENTER）。
:::

:::
## 17. estimateMemoryInBytes
用于估算 BVH（Bounding Volume Hierarchy）所占用的内存字节数。该函数通过遍历 BVH 对象，计算其各个部分所占用的内存大小，从而提供一个粗略的内存使用估算。

```javascript
geometry.boundsTree.estimateMemoryInBytes(): number
```

:::details 示例
示例一：估算内存占用
```javascript
// 创建几何体并构建 BVH
const geometry = new THREE.TorusKnotGeometry();
geometry.computeBoundsTree();

// 估算内存占用
const bytes = geometry.boundsTree.estimateMemoryInBytes();
console.log(`BVH 内存占用: ${bytes} 字节 (${(bytes / 1024 / 1024).toFixed(2)} MB)`);

// 输出示例：
// "BVH 内存占用: 524288 字节 (0.50 MB)"
```

示例二：动态场景内存监控
```javascript
// 监控形变动画中的 BVH 内存变化
function animate() {
  updateGeometryVertices(); // 修改顶点数据
  geometry.disposeBoundsTree();
  geometry.computeBoundsTree();

  const currentBytes = geometry.boundsTree.estimateMemoryInBytes();
  if (currentBytes > MEMORY_THRESHOLD) {
    console.warn("BVH 内存超出阈值，可能需优化参数！");
  }
}
```
示例三：大规模 CAD 模型加载优化
```javascript
// 加载模型后分析内存
loader.load("model.glb", (gltf) => {
  const mesh = gltf.scene.children[0];
  mesh.geometry.computeBoundsTree({ strategy: 'SAH' });
  
  const bytes = mesh.geometry.boundsTree.estimateMemoryInBytes();
  if (bytes > 100 * 1024 * 1024) { // 超过 100MB
    console.warn("模型 BVH 内存过大，建议简化几何体或调整参数。");
  }
});
```

示例四：大规模 CAD 模型加载优化
```javascript
let lastBytes = 0;
function checkMemoryLeak() {
  geometry.disposeBoundsTree();
  geometry.computeBoundsTree();
  
  const currentBytes = geometry.boundsTree.estimateMemoryInBytes();
  if (currentBytes > lastBytes * 1.5) {
    console.error("检测到 BVH 内存异常增长，可能存在泄漏！");
  }
  lastBytes = currentBytes;
}
```

示例五：多细节层次（LOD）管理
```javascript
// 根据距离切换不同精度的 BVH
function updateLOD(cameraPosition) {
  const distance = mesh.position.distanceTo(cameraPosition);
  
  if (distance > 1000 && !mesh.geometry.lowResBVH) {
    // 切换到低精度 BVH
    geometry.disposeBoundsTree();
    geometry.computeBoundsTree({ maxLeafTris: 20 });
    console.log("低精度 BVH 内存:", geometry.boundsTree.estimateMemoryInBytes());
  }
}
```
示例六：对比不同构建策略的内存消耗
```javascript
function compareMemory(geometry) {
  // 策略1: SAH（高精度，内存可能更高）
  geometry.computeBoundsTree({ strategy: 'SAH' });
  const sahBytes = geometry.boundsTree.estimateMemoryInBytes();
  geometry.disposeBoundsTree();

  // 策略2: CENTER（快速构建，内存可能更低）
  geometry.computeBoundsTree({ strategy: 'CENTER' });
  const centerBytes = geometry.boundsTree.estimateMemoryInBytes();
  geometry.disposeBoundsTree();

  console.log(`SAH 策略: ${sahBytes} 字节 | CENTER 策略: ${centerBytes} 字节`);
}
```

:::
## 18. getBVHExtremes
用于测量 BVH（Bounding Volume Hierarchy）树的最小和最大极值，包括节点深度、叶三角形数量和不同轴上的分裂数。该函数返回一个数组，其中包含 BVH 的每个组根的极值（它返回几何体在 BVH 层级结构中各轴向（X/Y/Z）的最小和最大值）。

```javascript
geometry.boundsTree.getBVHExtremes(): {
  minX: number, maxX: number,
  minY: number, maxY: number,
  minZ: number, maxZ: number
}
```
:::details 示例
示例一：获取几何体的全局极值
```javascript
// 创建几何体并构建 BVH
const geometry = new THREE.SphereGeometry(5);
geometry.computeBoundsTree();

// 获取 BVH 极值点
const extremes = geometry.boundsTree.getBVHExtremes();
console.log("X轴范围:", extremes.minX, "~", extremes.maxX);
console.log("Y轴范围:", extremes.minY, "~", extremes.maxY);
console.log("Z轴范围:", extremes.minZ, "~", extremes.maxZ);

// 输出示例（半径为5的球体）：
// X轴范围: -5 ~ 5
// Y轴范围: -5 ~ 5
// Z轴范围: -5 ~ 5
// 计算原生几何体的包围盒
```

示例二：
```javascript
geometry.computeBoundingBox();
const nativeBox = geometry.boundingBox;

// 对比 BVH 极值与原生包围盒
console.log("原生包围盒 min:", nativeBox.min);
console.log("BVH 极值 minX:", extremes.minX, "vs 原生 minX:", nativeBox.min.x);
```

示例三：动态几何体极值监控
```javascript
// 形变动画中更新极值
function updateGeometry() {
  // 修改顶点数据
  geometry.attributes.position.array[0] += 0.1;
  geometry.attributes.position.needsUpdate = true;

  // 重建 BVH 并获取新极值
  geometry.disposeBoundsTree();
  geometry.computeBoundsTree();
  const newExtremes = geometry.boundsTree.getBVHExtremes();
  console.log("新 X 轴范围:", newExtremes.minX, "~", newExtremes.maxX);
}
```

示例四：空间适配（如自适应相机视角）
```javascript
// 根据模型极值自动调整相机位置
const extremes = model.geometry.boundsTree.getBVHExtremes();
const center = new THREE.Vector3(
  (extremes.minX + extremes.maxX) / 2,
  (extremes.minY + extremes.maxY) / 2,
  (extremes.minZ + extremes.maxZ) / 2
);
const size = new THREE.Vector3(
  extremes.maxX - extremes.minX,
  extremes.maxY - extremes.minY,
  extremes.maxZ - extremes.minZ
);

// 设置相机视野
camera.position.copy(center).add(new THREE.Vector3(0, 0, size.length() * 2));
camera.lookAt(center);
```

示例五：碰撞检测预筛选
```javascript
// 快速排除明显不交的物体
const obj1Extremes = obj1.geometry.boundsTree.getBVHExtremes();
const obj2Extremes = obj2.geometry.boundsTree.getBVHExtremes();

// 检测包围盒是否可能有交集
const mayCollide = !(
  obj1Extremes.maxX < obj2Extremes.minX ||
  obj1Extremes.minX > obj2Extremes.maxX ||
  obj1Extremes.maxY < obj2Extremes.minY ||
  obj1Extremes.minY > obj2Extremes.maxY ||
  obj1Extremes.maxZ < obj2Extremes.minZ ||
  obj1Extremes.minZ > obj2Extremes.maxZ
);

if (mayCollide) {
  performDetailedCollisionCheck(); // 执行精细检测
}
```

示例六：动态加载区域划分
```javascript
// 根据极值将大型模型分块加载
const extremes = largeModel.geometry.boundsTree.getBVHExtremes();
const chunkSize = 1000; // 每块 1000 单位

for (let x = extremes.minX; x < extremes.maxX; x += chunkSize) {
  for (let z = extremes.minZ; z < extremes.maxZ; z += chunkSize) {
    loadChunk(x, z, chunkSize); // 自定义加载逻辑
  }
}
```
:::

:::tip 注意
1. 与 geometry.boundingBox 的差异：geometry.boundingBox 直接计算几何体顶点范围，而 getBVHExtremes 基于 BVH 的包围盒层级。两者通常一致，但在某些构建策略下可能存在微小差异。
2. 动态更新同步：修改几何体顶点后需调用 computeBoundsTree() 重建 BVH，否则 getBVHExtremes 返回旧数据。
3. 性能开销：极值计算在 BVH 构建时已完成，调用 getBVHExtremes 仅是读取缓存数据，无额外计算开销。
:::

## 19. getJSONStructure
用于 将 BVH 树结构导出为 JSON 格式 的方法，旨在支持 BVH 数据的序列化、调试和离线分析。通过该方法，开发者可以将复杂的 BVH 层级结构转换为轻量化的 JSON 对象，便于存储、传输或可视化验证。
```javascript
geometry.boundsTree.getJSONStructure(): Object

Object:{
  boundingBox: { min: [x, y, z], max: [x, y, z] }, // 节点的包围盒
  offset: number,                // 子节点或三角形数据的偏移量
  count?: number,                // 叶节点中的三角形数量（仅叶节点存在）
  splitAxis?: number,            // 分割轴（0=X, 1=Y, 2=Z，仅内部节点存在）
  children?: [Object, Object]    // 子节点（仅内部节点存在）
}
```

- BVH 结构序列化
    - 将 BVH 树的节点层级、包围盒数据（min/max 坐标）和三角形索引转换为 JSON 对象。
    - 不包含几何体原始顶点数据，仅记录 BVH 的拓扑结构。
- 离线分析与调试
    - 导出 JSON 文件后，可用外部工具（如 Python 脚本、Three.js 可视化工具）分析 BVH 的构建质量。
    - 验证包围盒是否紧密包裹几何体，或检查层级分割是否合理。
- 数据持久化：
    - 保存 BVH 结构到本地或服务器，避免重复构建耗时操作（尤其对大型模型）。


:::details 示例

示例一：导出 BVH 结构为 JSON
```javascript
// 构建 BVH
const geometry = new THREE.BoxGeometry();
geometry.computeBoundsTree();

// 获取 JSON 结构
const bvhJSON = geometry.boundsTree.getJSONStructure();

// 转换为字符串并保存
const jsonStr = JSON.stringify(bvhJSON);
downloadJSON(jsonStr, 'bvh.json'); // 假设 downloadJSON 是自定义下载函数

// 控制台输出示例：
// {
//   "boundingBox": { "min": [-1, -1, -1], "max": [1, 1, 1] },
//   "splitAxis": 0,
//   "children": [
//     { "boundingBox": { "min": [-1, -1, -1], "max": [0, 1, 1] }, ... },
//     { "boundingBox": { "min": [0, -1, -1], "max": [1, 1, 1] }, ... }
//   ]
// }
```

示例二：调试 BVH 分割策略
```javascript
// 对比不同策略的 BVH 结构
function compareBVHStrategies(geometry) {
  // SAH 策略
  geometry.computeBoundsTree({ strategy: 'SAH' });
  const sahJSON = geometry.boundsTree.getJSONStructure();
  geometry.disposeBoundsTree();

  // CENTER 策略
  geometry.computeBoundsTree({ strategy: 'CENTER' });
  const centerJSON = geometry.boundsTree.getJSONStructure();

  console.log('SAH 策略节点数:', countNodes(sahJSON));
  console.log('CENTER 策略节点数:', countNodes(centerJSON));
}

// 计算节点总数
function countNodes(node) {
  if (!node.children) return 1;
  return 1 + countNodes(node.children[0]) + countNodes(node.children[1]);
}
```

示例三：结合可视化工具分析 将导出的 JSON 导入自定义 Three.js 工具，渲染 BVH 层级：
```javascript
// 加载 JSON 并生成线框包围盒
async function loadAndVisualizeBVH(jsonPath) {
  const response = await fetch(jsonPath);
  const bvhJSON = await response.json();
  
  const helper = new THREE.Group();
  traverseBVHJSON(bvhJSON, (node) => {
    const box = new THREE.Box3(
      new THREE.Vector3().fromArray(node.boundingBox.min),
      new THREE.Vector3().fromArray(node.boundingBox.max)
    );
    const boxHelper = new THREE.Box3Helper(box, 0x00ff00);
    helper.add(boxHelper);
  });
  scene.add(helper);
}

// 递归遍历 JSON 节点
function traverseBVHJSON(node, callback) {
```

示例四：预构建 BVH 并离线存储
```javascript
// 预计算大型模型的 BVH，保存到服务器
const modelGeometry = loadModelGeometry(); // 自定义加载逻辑
modelGeometry.computeBoundsTree({ strategy: 'SAH' });

// 导出为 JSON
const bvhData = modelGeometry.boundsTree.getJSONStructure();
saveToServer(bvhData, 'model_bvh.json'); // 假设 saveToServer 是自定义函数

// 后续使用时直接加载，无需重新构建
fetch('model_bvh.json')
  .then(res => res.json())
  .then(json => {
    modelGeometry.boundsTree = MeshBVH.fromJSON(json, modelGeometry);
  });
```

示例五：自动化测试与验证
```javascript
// 单元测试中验证 BVH 结构正确性
it('BVH 应正确包裹几何体', () => {
  geometry.computeBoundsTree();
  const bvhJSON = geometry.boundsTree.getJSONStructure();
  
  // 验证根节点包围盒与几何体包围盒一致
  const rootBoundingBox = new THREE.Box3().setFromArray([
    ...bvhJSON.boundingBox.min,
    ...bvhJSON.boundingBox.max
  ]);
  geometry.computeBoundingBox();
  assert(rootBoundingBox.equals(geometry.boundingBox));
});
```

示例六：优化构建参数调优
```javascript
// 分析不同 maxLeafTris 对层级深度的影响
const maxLeafTrisOptions = [5, 10, 20];
maxLeafTrisOptions.forEach(value => {
  geometry.computeBoundsTree({ maxLeafTris: value });
  const json = geometry.boundsTree.getJSONStructure();
  console.log(`maxLeafTris=${value} 层级深度:`, calculateDepth(json));
  geometry.disposeBoundsTree();
});

function calculateDepth(node) {
  if (!node.children) return 1;
  return 1 + Math.max(
    calculateDepth(node.children[0]),
    calculateDepth(node.children[1])
  );
}
```
:::

:::tip 注意
1. 不包含几何体数据：
    - JSON 仅存储 BVH 结构，恢复时需关联原始几何体（顶点/索引需完全一致）。

2. 版本兼容性：
    - 导出的 JSON 结构与 three-mesh-bvh 版本绑定，跨版本加载可能失败。

3. 性能与内存：
    - 大型模型的 JSON 文件可能较大（如百万级节点），需谨慎处理内存和网络传输。
    - 导出过程本身是同步操作，可能阻塞主线程（建议在 Worker 中处理）。
:::

## 20. getTriangleHitPointInfo
用于 从射线检测结果中提取三角形层级信息 的方法。当射线与几何体的三角形相交时，它能够返回被命中三角形的详细数据（如顶点索引、质心坐标、UV 等），为精确交互提供底层支持。
```javascript
getTriangleHitPointInfo(
  hit: RaycastResult,           // 射线检测结果对象
  target?: TriangleHitInfo      // 可选，存储结果的容器
): TriangleHitInfo

TriangleHitInfo: {
  faceIndex: number,       // 三角形在几何体中的索引
  baryCoord: Vector3,      // 质心坐标 (u, v, w)
  a: number,               // 顶点A的索引
  b: number,               // 顶点B的索引
  c: number                // 顶点C的索引
}
```
- 三角形元数据提取：获取命中三角形的 顶点索引（a、b、c），用于访问几何体的顶点属性（如位置、法线、UV）
- 精确交互支持：结合命中点的局部坐标，支持高亮三角形、顶点编辑或物理碰撞反馈。
- 与Three.js 数据兼容：返回的顶点索引与 BufferGeometry 的 index 属性一致，可直接用于修改几何体数据。

:::details 示例
示例一：获取三角形顶点索引
```javascript
// 执行射线检测
const raycaster = new THREE.Raycaster();
raycaster.setFromCamera(mouse, camera);
const hits = raycaster.intersectObject(mesh);

if (hits.length > 0) {
  // 提取三角形信息
  const hitInfo = mesh.geometry.boundsTree.getTriangleHitPointInfo(hits[0]);
  
  console.log("命中三角形索引:", hitInfo.faceIndex);
  console.log("顶点索引:", hitInfo.a, hitInfo.b, hitInfo.c);
  
  // 获取顶点坐标（假设几何体有 position 属性）
  const positions = mesh.geometry.attributes.position.array;
  const pointA = new THREE.Vector3().fromArray(positions, hitInfo.a * 3);
  const pointB = new THREE.Vector3().fromArray(positions, hitInfo.b * 3);
  const pointC = new THREE.Vector3().fromArray(positions, hitInfo.c * 3);
}
```

示例二：插值顶点属性（如 UV 坐标）
```javascript
if (hits.length > 0) {
  const hitInfo = mesh.geometry.boundsTree.getTriangleHitPointInfo(hits[0]);
  
  // 获取三角形三个顶点的 UV
  const uvs = mesh.geometry.attributes.uv.array;
  const uvA = new THREE.Vector2().fromArray(uvs, hitInfo.a * 2);
  const uvB = new THREE.Vector2().fromArray(uvs, hitInfo.b * 2);
  const uvC = new THREE.Vector2().fromArray(uvs, hitInfo.c * 2);
  
  // 使用质心坐标插值 UV
  const interpolatedUV = new THREE.Vector2()
    .add(uvA.multiplyScalar(hitInfo.baryCoord.x))
    .add(uvB.multiplyScalar(hitInfo.baryCoord.y))
    .add(uvC.multiplyScalar(hitInfo.baryCoord.z));
  
  console.log("插值后的 UV:", interpolatedUV);
}
```

示例三：动态修改命中三角形颜色
```javascript
// 假设几何体有 color 属性
const colors = mesh.geometry.attributes.color.array;

if (hits.length > 0) {
  const hitInfo = mesh.geometry.boundsTree.getTriangleHitPointInfo(hits[0]);
  
  // 将命中三角形设为红色
  colors[hitInfo.a * 3] = 1;   // R
  colors[hitInfo.a * 3 + 1] = 0; // G
  colors[hitInfo.a * 3 + 2] = 0; // B
  // 同理修改 hitInfo.b 和 hitInfo.c 的顶点颜色
  mesh.geometry.attributes.color.needsUpdate = true;
}
```

示例四：三维建模工具中的面选择
```javascript
// 用户点击选择三角形
document.addEventListener('click', (e) => {
  const hits = raycaster.intersectObject(modelMesh);
  if (hits.length > 0) {
    const hitInfo = modelMesh.geometry.boundsTree.getTriangleHitPointInfo(hits[0]);
    selectTriangle(hitInfo.faceIndex); // 高亮或编辑选中的面
  }
});
```

示例五：游戏中的精确伤害计算
```javascript
// 子弹命中角色时计算伤害区域
function onBulletHit(hit) {
  const hitInfo = character.geometry.boundsTree.getTriangleHitPointInfo(hit);
  const damageArea = getTriangleArea(hitInfo.a, hitInfo.b, hitInfo.c);
  applyDamage(damageArea * DAMAGE_FACTOR);
}
```

示例六：动态地形编辑
```javascript
// 根据射线命中点挖洞
function digTerrain(hit) {
  const hitInfo = terrain.geometry.boundsTree.getTriangleHitPointInfo(hit);
  
  // 获取三角形顶点位置并下移
  const positions = terrain.geometry.attributes.position.array;
  displaceVertex(positions, hitInfo.a, -1); // 下移顶点A
  displaceVertex(positions, hitInfo.b, -1);
  displaceVertex(positions, hitInfo.c, -1);
  
  terrain.geometry.attributes.position.needsUpdate = true;
  terrain.geometry.computeBoundsTree(); // 更新 BVH
}

function displaceVertex(positions, index, delta) {
  positions[index * 3 + 1] += delta; // 修改 Y 坐标
}
```
:::

:::tip 注意事项
1. 几何体需包含索引（index 属性）：
若几何体未使用索引（即非 IndexedBufferGeometry），顶点索引 a、b、c 可能不准确。

2. 动态几何更新：
修改顶点数据后需调用 computeBoundsTree 重建 BVH，否则后续检测可能引用无效索引。

3. 性能优化：
频繁调用此方法可能影响性能，建议在需要时（如点击事件）使用，避免每帧调用。
:::

## 21. shaderDistanceFunction
three-mesh-bvh 库中提供的 GLSL 代码片段，用于在着色器中实现 基于 BVH 的精确距离场（Signed Distance Field, SDF）计算。它允许开发者直接在 GPU 上高效计算几何体表面的有符号距离，适用于动态变形、碰撞响应或特殊视觉效果。

```javascript
float computeBVHDistance(
  vec3 queryPoint,  // 世界空间中的查询点
  BVH bvh,          // 传入的 BVH Uniform 结构
  float maxDist     // 可选，最大搜索距离（默认无限）
);
```
底层实现：
1. BVH 遍历：从根节点开始，递归检测查询点与节点包围盒的最近距离，剪枝无效分支。
2. 叶子节点精确计算：对叶子节点内的所有三角形，计算点到三角形表面的最近距离。
3. 距离合并：返回所有叶子节点中的最小距离值。

核心功能：
- GPU 加速距离计算
    - 利用 BVH 的层级结构快速跳过无关区域，减少距离计算的采样次数。
    - 支持动态几何体（需配合 MeshBVHUniformStruct 更新 BVH 数据）。
- 可定制距离逻辑
    - 提供基础函数 computeBVHDistance，可直接获取点到几何体表面的最短距离。
    - 支持扩展自定义距离衰减、方向约束等效果。
- 与 Three.js 着色器集成
    - 通过 ShaderMaterial 或 CustomShader 将距离函数嵌入渲染管线。
:::details 示例
示例一：传递 BVH 数据到着色器
```javascript
import { MeshBVHUniformStruct, shaderStructs, shaderDistanceFunction } from 'three-mesh-bvh';

// 创建几何体并构建 BVH
const geometry = new THREE.SphereGeometry(2);
geometry.computeBoundsTree();

// 初始化 BVH Uniform
const bvhUniforms = {
  bvh: { value: new MeshBVHUniformStruct(geometry.boundsTree) }
};

// 创建着色器材质
const material = new THREE.ShaderMaterial({
  uniforms: { ...bvhUniforms, time: { value: 0 } },
  vertexShader: `
    varying vec3 vWorldPosition;
    void main() {
      vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
      gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    ${shaderStructs} // 引入 BVH 结构定义
    uniform BVH bvh; // 声明 BVH Uniform
    varying vec3 vWorldPosition;
    ${shaderDistanceFunction} // 引入距离计算函数

    void main() {
      // 计算当前点到几何体的距离
      float distance = computeBVHDistance(vWorldPosition, bvh);
      
      // 基础距离场渲染：距离越近颜色越红
      gl_FragColor = vec4(vec3(1.0 - smoothstep(0.0, 2.0, distance)), 1.0);
    }
  `
});
```

示例二：扩展自定义效果（如动态波纹）
```javascript
// 在 fragmentShader 中添加波纹效果
float ripple = sin(length(vWorldPosition) * 10.0 - time * 2.0) * 0.1;
distance -= ripple * exp(-distance * 2.0);

// 根据距离混合颜色
vec3 color = mix(vec3(1.0, 0.0, 0.0), vec3(0.0, 0.5, 1.0), smoothstep(0.0, 1.0, distance));
gl_FragColor = vec4(color, 1.0);
```

示例三：动态变形（如球体扭曲）
```javascript
// 根据距离场动态偏移顶点
vec3 displacedPosition = position + normal * (sin(distance * 10.0 - time) * 0.1;
gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(displacedPosition, 1.0);
```

示例四：交互式流体模拟（基于距离场的力计算）
```javascript
// 计算梯度获取表面方向
vec3 gradient = vec3(
  computeBVHDistance(vWorldPosition + vec3(0.01, 0, 0), bvh) - distance,
  computeBVHDistance(vWorldPosition + vec3(0, 0.01, 0), bvh) - distance,
  computeBVHDistance(vWorldPosition + vec3(0, 0, 0.01), bvh) - distance
);
vec3 surfaceNormal = normalize(gradient);

// 模拟流体浮力
float buoyancy = max(0.0, -distance) * 0.5;
velocity += surfaceNormal * buoyancy * deltaTime;
```

示例五：安全区域可视化（游戏中的毒圈效果）
```javascript
float safeRadius = 50.0;
float safeDistance = distance - safeRadius;
float edgeWidth = 5.0;

// 毒圈内绿色，边缘渐变红色
vec3 color = mix(
  vec3(0.0, 1.0, 0.0),
  vec3(1.0, 0.0, 0.0),
  smoothstep(-edgeWidth, edgeWidth, safeDistance)
);
gl_FragColor = vec4(color, 1.0);
```
:::

性能优化技巧：
1. 限制搜索深度
```javascript
//  glsl
// 设置最大搜索距离，减少复杂模型的采样次数
float distance = computeBVHDistance(vWorldPosition, bvh, 10.0);
```
2. 空间分区跳转
```javascript
//  glsl
// 设置最大搜索距离，减少复杂模型的采样次数
float distance = computeBVHDistance(vWorldPosition, bvh, 10.0);
```
3. LOD 分级
```javascript
// 根据相机距离切换 BVH 精度
function updateMaterial() {
  const distanceToCamera = mesh.position.distanceTo(camera.position);
  if (distanceToCamera > 100.0 && !isLowDetail) {
    geometry.disposeBoundsTree();
    geometry.computeBoundsTree({ maxLeafTris: 20 });
    material.uniforms.bvh.value.update();
    isLowDetail = true;
  }
}
```

:::tip 注意
1. WebGL 递归限制
    - GLSL 不支持递归，函数内部采用 栈迭代 实现 BVH 遍历，需设置合理的 maxDepth 防止栈溢出。

2. 精度与性能平衡
    - 增加 maxLeafTris 可提升性能但降低精度。
    - 减少 maxDist 加快计算但可能裁剪有效区域。

3. 动态更新同步
    - 修改几何体后需调用 bvhUniforms.bvh.value.update() 同步 GPU 数据。
:::

## 22. shaderIntersectFunction
three-mesh-bvh 库中提供的 GLSL 代码片段，用于在着色器中实现 基于 BVH 的射线与几何体的精确相交检测。它允许开发者直接在 GPU 上高效计算光线与复杂模型的交点，支持实时光线追踪、动态阴影、反射等高级渲染效果。

```javascript
// glsl
bool intersectBVH(
  Ray ray,        // 输入射线（包含起点 origin 和方向 direction）
  BVH bvh,        // 传入的 BVH Uniform 结构
  inout HitInfo hit, // 存储命中信息（位置、法线、UV 等）
  float maxDist   // 可选，最大检测距离（默认无限）
);

struct HitInfo {
  bool hasHit;          // 是否命中
  vec3 point;           // 命中点坐标（世界空间）
  vec3 normal;          // 命中点法线（世界空间）
  vec2 uv;              // 命中点 UV 坐标
  float distance;       // 命中点距射线起点的距离
  uint triangleIndex;   // 命中的三角形索引
};
```
底层实现原理：
- BVH 遍历：从根节点开始，利用栈迭代遍历 BVH 树，跳过射线未命中的包围盒。
- 叶子节点检测：对叶子节点内的所有三角形执行 Moller-Trumbore 算法检测相交。
- 最近命中筛选：保留距离射线起点最近的交点信息。


核心功能：
1. GPU 加速射线检测
    - 利用预构建的 BVH 树结构，在着色器中快速跳过无关区域，减少射线与三角形的相交测试次数。
    - 支持动态几何体（需配合 MeshBVHUniformStruct 更新 BVH 数据）。
2. 精确交点信息
    - 返回命中点的 位置、法线、UV 坐标 及 三角形索引，支持精细化渲染逻辑。
3. 与 Three.js 深度集成
    - 通过 ShaderMaterial 或自定义着色器无缝集成到 Three.js 渲染管线。


:::details 示例
示例一：传递 BVH 数据到着色器
```javascript
import { MeshBVHUniformStruct, shaderStructs, shaderIntersectFunction } from 'three-mesh-bvh';

// 创建几何体并构建 BVH
const geometry = new THREE.TorusKnotGeometry();
geometry.computeBoundsTree();

// 初始化 BVH Uniform
const bvhUniforms = {
  bvh: { value: new MeshBVHUniformStruct(geometry.boundsTree) },
  time: { value: 0 }
};

// 创建着色器材质
const material = new THREE.ShaderMaterial({
  uniforms: bvhUniforms,
  vertexShader: `
    varying vec3 vWorldPosition;
    varying vec3 vWorldNormal;
    void main() {
      vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
      vWorldNormal = normalize(normalMatrix * normal);
      gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    ${shaderStructs} // 引入 BVH 结构定义
    uniform BVH bvh; // 声明 BVH Uniform
    varying vec3 vWorldPosition;
    varying vec3 vWorldNormal;
    ${shaderIntersectFunction} // 引入相交检测函数

    void main() {
      // 生成从相机到片元的射线
      Ray ray;
      ray.origin = vWorldPosition;
      ray.direction = normalize(reflect(normalize(vWorldPosition - cameraPosition), vWorldNormal));

      // 执行 BVH 相交检测
      HitInfo hit;
      if (intersectBVH(ray, bvh, hit)) {
        // 使用交点法线着色
        gl_FragColor = vec4(hit.normal * 0.5 + 0.5, 1.0);
      } else {
        // 无命中时显示背景色
        gl_FragColor = vec4(0.1, 0.1, 0.1, 1.0);
      }
    }
  `
});
```
示例二：扩展动态效果（如焦散光模拟）
```javascript
// 在 fragmentShader 中添加焦散效果
if (hit.hasHit) {
  // 计算光线在水面下的折射路径
  vec3 refracted = refract(ray.direction, hit.normal, 1.0 / 1.33);
  Ray refractedRay = Ray(hit.point + refracted * 0.01, refracted);
  HitInfo refractedHit;
  if (intersectBVH(refractedRay, bvh, refractedHit)) {
    // 根据二次命中点计算焦散强度
    float intensity = pow(max(0.0, dot(refractedHit.normal, -refractedRay.direction)), 5.0);
    gl_FragColor = vec4(vec3(intensity * 2.0), 1.0);
  }
}
```

示例三： 实时光线追踪反射
```javascript
// glsl
// 计算镜面反射路径
vec3 reflectedDir = reflect(normalize(ray.direction), hit.normal);
Ray reflectedRay = Ray(hit.point + reflectedDir * 0.01, reflectedDir);
HitInfo reflectedHit;
if (intersectBVH(reflectedRay, bvh, reflectedHit, 100.0)) {
  vec3 reflectedColor = textureCube(envMap, reflectedHit.normal).rgb;
  gl_FragColor = vec4(reflectedColor, 1.0);
}
```

示例四：动态软阴影（PCF 滤波）
```javascript
// glsl
// 光源方向
vec3 lightDir = normalize(lightPosition - hit.point);
float shadow = 1.0;
for (int i = 0; i < 16; i++) {
  // 随机偏移光源位置
  vec3 jitteredLightDir = lightDir + 0.02 * randomVec3(i);
  Ray shadowRay = Ray(hit.point + hit.normal * 0.01, jitteredLightDir);
  HitInfo shadowHit;
  if (intersectBVH(shadowRay, bvh, shadowHit, length(lightPosition - hit.point))) {
    shadow -= 0.06;
  }
}
gl_FragColor = vec4(texture2D(albedoMap, hit.uv).rgb * shadow, 1.0);
```
示例五：交互式体积渲染
```javascript
// glsl
// 光线步进检测几何体表面
float stepSize = 0.1;
float totalDist = 0.0;
while (totalDist < 100.0) {
  vec3 samplePoint = ray.origin + ray.direction * totalDist;
  HitInfo sampleHit;
  if (intersectBVH(Ray(samplePoint, ray.direction), bvh, sampleHit, stepSize)) {
    // 累积体积透光率
    float density = 0.1;
    transmittance *= exp(-density * stepSize);
    if (transmittance < 0.01) break;
  }
  totalDist += stepSize;
}
gl_FragColor = vec4(transmittance);
```
:::

性能优化技巧：
1. 自适应步长
```glsl es
// 根据 BVH 节点包围盒调整步长
float computeStepSize(vec3 pos) {
  float nearest = queryBVHNearest(pos, bvh); // 自定义最近距离查询
  return clamp(nearest, 0.1, 2.0);
}
```
2. 层级剔除
```glsl es
// 提前跳过远距离检测
if (hit.distance > maxRenderDist) {
  hit.hasHit = false;
  return;
}
```
3. 实例化对象批处理
```javascript
// 对 InstancedMesh 使用 computeBatchedBoundsTree()
const instancedMesh = new THREE.InstancedMesh(geometry, material, 1000);
instancedMesh.computeBatchedBoundsTree();
```

:::tip 注意事项
1. WebGL 版本兼容性:
需启用 WebGL2 或 OES_texture_float 扩展以支持浮点纹理。
2. 动态几何更新：
修改顶点数据后需调用 bvhUniforms.bvh.value.update() 同步到 GPU。
3. 光线起点偏移：
避免自相交：从命中点沿法线方向微调 (hit.point + hit.normal * 0.001)。

通过 shaderIntersectFunction，开发者可在 GPU 上实现 电影级光线追踪效果，结合 BVH 的加速结构显著提升以下场景的渲染效率与质量：
- 实时反射/折射：精确模拟水面、玻璃材质的光路。
- 动态阴影：支持软阴影、接触硬化等高级效果。
- 体积交互：如烟雾透光、激光扫描。
:::

## 23. shaderStructs
hree-mesh-bvh 库中提供的 GLSL 结构体和工具函数集合，用于在着色器中定义与 BVH 相关的数据结构和纹理访问逻辑。它是实现 GPU 加速射线检测（`shaderIntersectFunction`）和距离场计算（`shaderDistanceFunction`）的基础依赖。

```glsl es
// 定义 BVH 节点结构
struct BVHNode {
  vec3 min;           // 包围盒最小值
  vec3 max;           // 包围盒最大值
  uint leftChild;     // 左子节点索引
  uint rightChild;    // 右子节点索引
  uint triangleCount; // 叶节点中的三角形数（非叶节点为0）
};

// 定义三角形结构
struct Triangle {
  uint a, b, c; // 顶点索引
};

// 声明全局 Uniform 纹理
uniform highp sampler2D bvhTexture;     // 存储 BVH 节点数据
uniform highp sampler2D triangleTexture;// 存储三角形索引数据

// 纹理解码函数
float decodeFloat(vec4 value) { /* ... */ }
uint decodeUint(vec4 value) { /* ... */ }
vec3 decodeVec3(vec4 value) { /* ... */ }

// 其他辅助函数...
```

核心功能：
1. BVH 数据结构声明
    - 定义 BVHNode、Triangle 等核心结构体，描述 BVH 树的节点层级和三角形数据。
    - 声明全局 Uniform 纹理，用于在着色器中存储 BVH 树和顶点属性。

2. 纹理解码工具函数
    - 提供 decodeFloat、decodeUint 等方法，将纹理像素值解码为浮点数或整型数据。
    - 支持从纹理中读取 BVH 节点信息（包围盒、子节点索引等）。

3. 与 Three.js 数据格式兼容
    - 确保从 JavaScript 传递的 MeshBVHUniformStruct 数据与着色器结构对齐。

:::details 示例

**关键工具函数**

| 函数名                        | 参数                                | 返回值     | 作用                                 |
| :---------------------------- | :---------------------------------- | :--------- | :----------------------------------- |
| **`getBVHNode(bvh, index)`**  | `bvh`: BVH 结构 `index`: 节点索引   | `BVHNode`  | 从纹理中读取指定索引的 BVH 节点数据  |
| **`getTriangle(bvh, index)`** | `bvh`: BVH 结构 `index`: 三角形索引 | `Triangle` | 读取三角形顶点索引                   |
| **`getPosition(bvh, index)`** | `bvh`: BVH 结构 `index`: 顶点索引   | `vec3`     | 读取顶点位置（需确保顶点纹理已绑定） |

示例一：绑定 BVH 数据
```javascript
import { MeshBVHUniformStruct, shaderStructs } from 'three-mesh-bvh';

// 创建几何体并构建 BVH
const geometry = new THREE.BoxGeometry();
geometry.computeBoundsTree();

// 初始化 BVH Uniform
const bvhUniforms = {
  bvh: { value: new MeshBVHUniformStruct(geometry.boundsTree) }
};

// 创建着色器材质
const material = new THREE.ShaderMaterial({
  uniforms: bvhUniforms,
  vertexShader: `
    varying vec3 vWorldPosition;
    void main() {
      vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
      gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    ${shaderStructs} // 引入结构体定义
    uniform BVH bvh; // 声明 BVH Uniform（由 MeshBVHUniformStruct 自动填充）
    varying vec3 vWorldPosition;

    void main() {
      // 示例：读取 BVH 根节点
      BVHNode rootNode = getBVHNode(bvh, 0);
      vec3 nodeMin = rootNode.min;
      vec3 nodeMax = rootNode.max;

      // 可视化根节点包围盒范围
      float xWidth = nodeMax.x - nodeMin.x;
      gl_FragColor = vec4(vec3(xWidth / 10.0), 1.0);
    }
  `
});
```

示例二：扩展自定义逻辑-遍历 BVH 层级
```glsl es
// 手动实现 BVH 遍历逻辑
bool customBVHTraverse(Ray ray, BVH bvh, inout HitInfo hit) {
  uint stack[32]; // 遍历栈
  int stackPtr = 0;
  stack[stackPtr++] = 0; // 从根节点开始（索引0）

  while (stackPtr > 0) {
    uint nodeIndex = stack[--stackPtr];
    BVHNode node = getBVHNode(bvh, nodeIndex);

    // 检测射线与节点包围盒是否相交
    if (!intersectRayAABB(ray, node.min, node.max)) continue;

    if (node.triangleCount > 0) {
      // 叶节点：检测所有三角形
      for (uint i = 0; i < node.triangleCount; i++) {
        Triangle tri = getTriangle(bvh, node.triangleOffset + i);
        // ... 执行三角形相交检测 ...
      }
    } else {
      // 内部节点：压入子节点
      stack[stackPtr++] = node.leftChild;
      stack[stackPtr++] = node.rightChild;
    }
  }
  return hit.hasHit;
}
```


示例三：动态查询顶点属性
```javascript
// 读取命中三角形的顶点位置
if (hit.hasHit) {
  Triangle tri = getTriangle(bvh, hit.triangleIndex);
  vec3 a = getPosition(bvh, tri.a);
  vec3 b = getPosition(bvh, tri.b);
  vec3 c = getPosition(bvh, tri.c);
  
  // 计算质心插值
  vec3 interpPos = a * hit.baryCoord.x + b * hit.baryCoord.y + c * hit.baryCoord.z;
  gl_FragColor = vec4(interpPos, 1.0);
}
```

示例四：自定义光线追踪着色器
```glsl es
// 实现 Whitted 风格光线追踪
vec3 traceRay(Ray ray) {
  HitInfo hit;
  if (intersectBVH(ray, bvh, hit)) {
    // 递归计算反射/折射
    vec3 reflectedColor = traceRay(reflectRay(ray, hit));
    vec3 refractedColor = traceRay(refractRay(ray, hit));
    return mix(reflectedColor, refractedColor, hit.transparency);
  } else {
    return textureCube(skybox, ray.direction).rgb;
  }
}
```

示例五：GPU 加速碰撞检测
```javascript
// 检测粒子与几何体的碰撞
bool isColliding(vec3 particlePos) {
  // 构造一个极短的射线模拟点查询
  Ray ray = Ray(particlePos - vec3(0.001), vec3(0.002, 0.0, 0.0));
  HitInfo hit;
  return intersectBVH(ray, bvh, hit, 0.002);
}
```

示例六：动态几何变形反馈
```javascript
// 根据射线命中点偏移顶点
if (hit.triangleIndex == selectedTriangle) {
  vec3 newPos = a * hit.baryCoord.x + b * hit.baryCoord.y + c * hit.baryCoord.z + offset;
  setPosition(bvh, tri.a, newPos); // 假设支持写入
}
```
:::

:::tip 注意事项

1. 纹理格式一致性：
JavaScript 中 MeshBVHUniformStruct 生成的纹理格式必须与 shaderStructs 的解码逻辑匹配。
2. 性能敏感操作：
避免在片段着色器中频繁遍历深层 BVH 树，可能导致 GPU 过热。
3. WebGL 扩展依赖：
需启用 EXT_float_blend 和 OES_texture_float 扩展以支持浮点纹理操作。
:::