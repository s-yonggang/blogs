# path类

> Path是一个多用途的路径（路径）对象，它通常在创建Shape对象时使用。
> 
> 可以定义多条直线或曲线路径，以及其交点。Path可以由多个子路径构成，每个子路径可以包含多个路径段。
```js
const path = new THREE.Path();
```

## 属性
- currentPoint : Vector2
  > 表示当前路径点对象的属性。默认情况下，它是（0,0）。
- autoClose
  > 表示路径是否自动关闭的属性。默认情况下，它是false。

## 方法

- .moveTo ( x : Float, y : Float ) - 起点
- .lineTo ( x : Float, y : Float ) 
- .quadraticCurveTo ( cpX : Float, cpY : Float, x : Float, y : Float ) - 二次贝塞尔曲线
- .bezierCurveTo ( cp1X : Float, cp1Y : Float, cp2X : Float, cp2Y : Float, x : Float, y : Float ) - 三次贝塞尔曲线
- .arc(aX, aY, aRadius, aStartAngle, aEndAngle, aClockwise) - 相对
- .ellipse(aX, aY, xRadius,yRadius, aStartAngle, aEndAngle, aClockwise)- 相对
- .absarc(aX, aY, aRadius, aStartAngle, aEndAngle, aClockwise) -绝对
- .absellipse(aX, aY, xRadius,yRadius, aStartAngle, aEndAngle, aClockwise) - 绝对

```js
  const path = new THREE.Path();
  path.moveTo(50,50)
  path.lineTo(100,100)
  path.absarc(100,90,50,0,Math.PI)
  path.autoClose = true;
  const pathPoints = path.getPoints(100);
  const pathGeometry = new THREE.BufferGeometry().setFromPoints(pathPoints)
  const pathMesh = new THREE.Line(pathGeometry,curvePathMaterial)
  scene.add(pathMesh)
```