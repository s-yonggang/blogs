# BufferGeometry

- 点、线、面、几何体的有效表述。
- BufferGeometry包括了`顶点位置`，`面片索引`、`法相量`、`颜色值`、`UV 坐标`和`自定义缓存属性值`。使用 BufferGeometry 可以有效减少向 GPU 传输上述数据所需的开销。
- 几何体都是基于BufferGeometry (opens new window)类构建的，BufferGeometry是一个几何体对象，用于存储顶点数据。

## BufferAttribute

**BufferAttribute( array : TypedArray, itemSize : Integer, normalized : Boolean )**

这个类用于存储与BufferGeometry相关联的 attribute（例如顶点位置向量，面片索引，法向量，颜色值，UV坐标以及任何自定义 attribute ）。 利用 BufferAttribute，可以更高效的向GPU传递数据。


## setAttribute ( name : String, attribute : BufferAttribute )
通过threejs的属性缓冲区对象`BufferAttribute` (opens new window)表示threejs几何体顶点数据。
```js
const geometry = new THREE.BufferGeometry();

// 顶点
const vertices = new Float32Array( [
	-1.0, -1.0, 1.0,
	 1.0, -1.0, 1.0,
	 1.0,  1.0, 1.0,

	 1.0,  1.0, 1.0,
	-1.0,  1.0, 1.0,
	-1.0, -1.0, 1.0
] );

// 顶点颜色（rgba）
const colors = new Float32Array([
    1.0, 0.0, 0.0,
    0.0, 1.0, 0.0,
    0.0, 0.0, 1.0,

    1.0, 0.0, 0.0,
    0.0, 1.0, 0.0,
    0.0, 0.0, 1.0,
])

geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
geometry.setAttribute( 'color', new THREE.BufferAttribute( colors, 3 ) );
const material = new THREE.MeshBasicMaterial( { 
    vertexColors: true, // 使用顶点颜色属性
    wireframe: true
} );
const mesh = new THREE.Mesh( geometry, material );
```

## geometry.attributes
也可以通过`geometry.attributes.position`设置几何体顶点位置属性的值BufferAttribute。
```js
geometry.attributes.position = new THREE.BufferAttribute( vertices, 3 )
```


## setFromPoints(points : Array)
- 通过点队列设置该 BufferGeometry 的 attribute。
- 是几何体BufferGeometry的一个方法，通过该方法可以把数组pointsArr中坐标数据提取出来赋值给几何体`geometry.attributes.position`;
- 用向量Vector3 | Vector2 作为一组顶点坐标;
```js
// 三维向量Vector3表示的坐标值
const pointsArr3 = [
    new THREE.Vector3(0,0,0),
    new THREE.Vector3(0,100,0),
    new THREE.Vector3(0,100,100),
    new THREE.Vector3(0,0,100),
];
// 二维向量Vector2表示的坐标值
const pointsArr2 = [
    new THREE.Vector2(0,0),
    new THREE.Vector2(100,0),
    new THREE.Vector2(100,100),
    new THREE.Vector2(0,100),
];

geometry.setFromPoints(pointsArr3);
geometry.setFromPoints(pointsArr2);
```