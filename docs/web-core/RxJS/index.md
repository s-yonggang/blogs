# RxJS

## 什么是 RxJS？

1. `RxJS 是一个库`，它通过使用 `observable` 序列来编写**异步**和**基于事件**的程序。
> 可以把 RxJS 当做是用来处理事件的 Lodash 。

2. ReactiveX 结合了 `观察者模式`、`迭代器模式` 和 使用`组合式的函数式编程`，以满足以一种理想方式来管理事件序列所需要的一切。
> [设计模式](https://refactoringguru.cn/design-patterns)

3. RxJS 是响应式的程序：异步响应数据`流`的编程方式。

4. RxJS 经常用来处理 异步 或者 事件 的 JavaScript 函数库。异步场景：
> - AJAX、XHR、fetch API
> 
> - Service Worker、Node Stream
> 
> - setTimeout、setInterval
> 
> - Promise


## RxJS 六个核心模块

在 RxJS 中用来解决异步事件管理的的基本概念是：

- **Observable (可观察对象)**: 表示一个概念，这个概念是一个可调用的未来值或事件的集合。
- **Observer (观察者)**: 一个回调函数的集合，它知道如何去监听由 Observable 提供的值。
- **Subscription (订阅)**: 表示 Observable 的执行，主要用于取消 Observable 的执行。
- **Operators (操作符)**: 采用函数式编程风格的纯函数 (pure function)，使用像 map、filter、concat、flatMap 等这样的操作符来处理集合。
- **Subject (主体)**: 相当于 EventEmitter，并且是将值或事件多路推送给多个 Observer 的唯一方式。
- **Schedulers (调度器)**: 用来控制并发并且是中央集权的调度员，允许我们在发生计算时进行协调，例如 setTimeout 或 requestAnimationFrame 或其他。

## RxJS 特性

### 纯净性 (Purity)
RxJS 强大的正是它使用`纯函数`来产生值的能力。这意味着你的代码更不容易出错。
```javascript
var count = 0;
var button = document.querySelector('button');
button.addEventListener('click', () => console.log(`Clicked ${++count} times`));
```
> 通常你会创建一个非纯函数，在这个函数之外也使用了共享变量的代码，这将使得你的应用状态一团糟。


使用 RxJS 的话，你会将应用状态隔离出来。
```javascript
var count = 0;
var button = document.querySelector('button');
button.addEventListener('click', () => console.log(`Clicked ${++count} times`));
```
> scan 操作符的工作原理与数组的 reduce 类似。它需要一个暴露给回调函数当参数的初始值。每次回调函数运行后的返回值会作为下次回调函数运行时的参数。

### 流动性 (Flow)
RxJS 提供了一整套操作符来帮助你控制事件如何流经 observables 。

下面的代码展示的是如何控制一秒钟内最多点击一次，先来看使用普通的 JavaScript：
```javascript
var count = 0;
var rate = 1000;
var lastClick = Date.now() - rate;
var button = document.querySelector('button');
button.addEventListener('click', () => {
  if (Date.now() - lastClick >= rate) {
    console.log(`Clicked ${++count} times`);
    lastClick = Date.now();
  }
});
```

使用 RxJS：
```javascript
var button = document.querySelector('button');
Rx.Observable.fromEvent(button, 'click')
  .throttleTime(1000)
  .scan(count => count + 1, 0)
  .subscribe(count => console.log(`Clicked ${count} times`));
```

其他流程控制操作符有 filter、delay、debounceTime、take、takeUntil、distinct、distinctUntilChanged 等等。

### 值 (Values)

对于流经 observables 的值，你可以对其进行转换。

下面的代码展示的是如何累加每次点击的鼠标 x 坐标，先来看使用普通的 JavaScript：
```javascript
var count = 0;
var rate = 1000;
var lastClick = Date.now() - rate;
var button = document.querySelector('button');
button.addEventListener('click', (event) => {
  if (Date.now() - lastClick >= rate) {
    count += event.clientX;
    console.log(count)
    lastClick = Date.now();
  }
});
```

使用 RxJS：
```javascript
var button = document.querySelector('button');
Rx.Observable.fromEvent(button, 'click')
  .throttleTime(1000)
  .map(event => event.clientX)
  .scan((count, clientX) => count + clientX, 0)
  .subscribe(count => console.log(count));
```
其他产生值的操作符有 pluck、pairwise、 sample 等等。