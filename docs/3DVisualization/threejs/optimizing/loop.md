# 按需渲染 loop 优化

three.js给出的例子都是连续渲染的. 换言之他们使用了requestAnimationFrame循环或者写成rAF loop
```javascript
function render() {
  ...
  requestAnimationFrame(render);
}
requestAnimationFrame(render);
```
有些场景连续渲染是有意义的, 但是有些情况下不需要一直动呢? 这种情况下不断地渲染会浪费电, 对于移动设备来说属实不能接受.

`显而易见的解决方法是一开始的时候渲染一次, 只有当什么东西改变了以后再次渲染` ，这种改变包括纹理的变化, 或者再入了模型, 其他源传来了什么数据, 用户调整了设置或者是动了摄像机.