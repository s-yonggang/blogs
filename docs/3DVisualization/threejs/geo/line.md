# Curve

Curve是所有曲线父类

## 2D曲线

接收参数 new THREE.Vector2(x,y)

- lineCurve: 直线;
- ArcCurve: 圆弧;
- EllipseCurve: 椭圆;
- SplineCurve：二维样条曲线;
- QuadraticBezierCurve: 二维二次贝塞尔曲线;
- CubicBezierCurve: 二维三次贝塞尔曲线;

## 3D曲线

接收参数 new THREE.Vector3(x,y,z)

- lineCurve3: 直线;
- CatmullRomCurve3: 三维样条曲线;
- CubicBezierCurve3: 三维三次贝塞尔曲线;
- QuadraticBezierCurve3: 三维二次贝塞尔曲线;

## .getPoints

要将曲线划分为的分段数。默认是 5;

```js
// CubicBezierCurve3 可以替换上面的曲线类型
const curve = new THREE.CubicBezierCurve3(
	new THREE.Vector3( -10, 0, 0 ),
	new THREE.Vector3( -5, 15, 0 ),
	new THREE.Vector3( 20, 15, 0 ),
	new THREE.Vector3( 10, 0, 0 )
);
const points = curve.getPoints( 50 );
const geometry = new THREE.BufferGeometry().setFromPoints( points );
const material = new THREE.LineBasicMaterial( { color: 0xff0000 } );
const curveObject = new THREE.Line( geometry, material );
```

::: tip
.getPoints()获取点的方式并不是按照曲线等间距的方式，而是会`考虑曲线斜率变化`，斜率变化快的位置返回的顶点更密集。

.getSpacedPoints()是按照曲线长度`等间距`返回顶点数据
:::


## EllipseCurve、ArcCurve

**EllipseCurve 椭圆**
```js
EllipseCurve( aX, aY, xRadius,yRadius, aStartAngle, aEndAngle, aClockwise )
// 示例
const arc = new THREE.EllipseCurve(0, 0, 100, 50);
```
| EllipseCurve参数| 含义                                                    |
| :-------------| :-------------------------------------------------------|
| aX, aY        | 椭圆中心坐标                                             |
| xRadius       | 椭圆x轴半径                                              |
| yRadius       | 椭圆y轴半径                                              |
| aStartAngle   | 弧线开始角度，从x轴正半轴开始，默认0，弧度单位              |
| aEndAngle     | 弧线结束角度，从x轴正半轴算起，默认2 x Math.PI，弧度单位    |
| aClockwise    | 是否顺时针绘制，默认值为false                             |


**ArcCurve 圆**
```js
ArcCurve( aX, aY, aRadius, aStartAngle, aEndAngle, aClockwise )
// 示例
const arc = new THREE.ArcCurve(0, 0, 100, 0, 2 * Math.PI);
```
| ArcCurve参数 | 含义                                                    |
| :---------- | :------------------------------------------------------ |
| aX, aY      | 圆心坐标                                                 |
| aRadius     | 圆弧半径                                                 |
| aStartAngle | 弧线开始角度，从x轴正半轴开始，默认0，弧度单位              |
| aEndAngle   | 弧线结束角度，从x轴正半轴算起，默认2 x Math.PI，弧度单位    |
| aClockwise  | 是否顺时针绘制，默认值为false                             |


## CurvePath

- 组合曲线对象，用于将多个曲线拼接为一条曲线。

- 组合曲线CurvePath和它的父类Curve一样具有`.getPoints()`(默认值为12)和`.getSpacedPoints()`((默认值为40))取点方法。

```js
const CurvePath = new THREE.CurvePath();
CurvePath.curves.push(curve1, curve2, curve3); // curve1, curve2, curve3
const pointsArr = CurvePath.getPoints(16);
const geometry = new THREE.BufferGeometry().setFromPointers(pointsArr);
const material = new THREE.LineBasicMaterial({ color: 0xff0000 });
const curvePathMesh = new THREE.Line(geometry, material);
scene.add(curvePathMesh);
```
