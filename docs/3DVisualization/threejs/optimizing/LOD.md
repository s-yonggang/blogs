# 多细节层次（LOD，Levels of Detail）

## 核心

多细节层次 —— 在显示网格时，根据摄像机距离物体的距离，来使用更多或者更少的几何体来对其进行显示。

每一个级别都和一个几何体相关联，且在渲染时，可以根据给定的距离，来在这些级别对应的几何体之间进行切换。 通常情况下，你会创建多个几何体，比如说三个，`一个距离很远（低细节）`，`一个距离适中（中等细节）`，`还有一个距离非常近（高质量）`。

## 示例

```javascript
const lod = new THREE.LOD();
// 创建具有3个细节级别的球体并为它们创建新的LOD级别
for( let i = 0; i < 3; i++ ) {
	const geometry = new THREE.IcosahedronGeometry( 10, 3 - i );
	const mesh = new THREE.Mesh( geometry, material );
	lod.addLevel( mesh, i * 75 );
}
scene.add( lod );
```

[webgl / lod](https://threejs.org/examples/#webgl_lod)