
# ShapeGeometry

从一个或多个路径形状(Shape)中创建一个`单面`多边形几何体。

**ShapeGeometry(shapes : Array, curveSegments : Integer)**

- shapes: 一个单独的shape，或者一个包含形状的Array。默认是单个三角形。

- curveSegments: 每一个形状的分段数，默认值为12。

## 属性
共有属性请参见其基类BufferGeometry。

## 方法
共有方法请参见其基类BufferGeometry。

```js
const x = 0, y = 0;

const shape = new THREE.Shape();

shape.moveTo( x + 5, y + 5 );
shape.bezierCurveTo( x + 5, y + 5, x + 4, y, x, y );
shape.bezierCurveTo( x - 6, y, x - 6, y + 7,x - 6, y + 7 );
shape.bezierCurveTo( x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19 );
shape.bezierCurveTo( x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7 );
shape.bezierCurveTo( x + 16, y + 7, x + 16, y, x + 10, y );
shape.bezierCurveTo( x + 7, y, x + 5, y + 5, x + 5, y + 5 );

const geometry = new THREE.ShapeGeometry( shape );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const mesh = new THREE.Mesh( geometry, material ) ;
scene.add( mesh );
```