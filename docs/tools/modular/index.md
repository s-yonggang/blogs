# 模块化发展过程

:::tip
模块化不单单指的是 Javascript ，应该还包括 web 端各类资源，如：img、font等等。
:::

## 阶段一

**基于文件划分的方式实现模块化**
> 文件为独立的模块，在对应位置调用全局成员。缺点：污染全局作用域，命名冲突问题，完全依靠约定。
```html
<!-- 引入文件模块的具体实现如下 -->
<!-- module.a.js 文件-->
<!-- module.a.js 文件 -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="module.a.js"></script>
    <script src="module.b.js"></script>
</head>
<body>
    <script>
        // module.a.js，module.b.js 存在于全局作用域，会有全局变量的污染问题。 
    </script>
</body>
</html>
```
**存在问题**

1. 全局变量污染
2. 命名冲突
3. 依赖关系不明显
4. 模块成员不明显


## 阶段二

**命名空间方式**

> 使用全局对象方式实现模块化，解决了`命名冲突`的问题。（具体做法是在阶段一的基础之包装一层对象）

**存在的问题**
1. 污染全局作用域，模块成员任然可以在外部被访问和修改
2. 模块的依赖关系任然没有得到解决

```js
// module.a.js 文件内
var moduleA = {
    name: 'moduleA',
    fn1: function(){...},
    fn2: function(){...},
    ...
}
// module.b.js 文件内
var moduleB = {
    name: 'moduleB',
    fn1: function(){...},
    fn2: function(){...},
    ...
}
```
```html
<script src="module.a.js"></script>
<script src="module.b.js"></script>
<script>
    moduleA.fn1()
    moduleB.fn1()
</script>
```

## 阶段三

**立即执行函数方式**（IIFE）

> 使用立即执行函数实现模块化，解决了私有化及模块依赖问题。

```js
// 明确知道需要依赖的模块----moduleName
(function(moduleName){
    var name = 'moduleA';
    function  fn1() {};
    function  fn2() {};
    window.moduleA = {
        fn1: fn1,
        fn2: fn2
    }
}('moduleName'))
```

::: info
此时的问题：没有一个规范化的标准。都只是通过约定的方式实现。
:::