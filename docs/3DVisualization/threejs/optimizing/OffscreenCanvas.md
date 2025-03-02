# 离屏渲染 OffscreenCanvas

OffscreenCanvas 是一个相对较新的浏览器功能，目前仅在Chrome可用，但显然未来会适用到别的浏览器上。 OffscreenCanvas 允许使用Web Worker去渲染画布，这是一种减轻繁重复杂工作的方法，比如把渲染一个复杂的3D场景交给一个Web Worker，避免减慢浏览器的响应速度。它也意味着数据在Worker中加载和解析，因此可能会减少页面加载时的卡顿。

Worker通常会把代码分割到另一个脚本文件中，本网页的大多数示例都有单独的脚本嵌入到他们所在的HTML文件中。

特别需要关注一个重点，Worker不能访问 DOM。 它们不能查看HTML元素，也不能接受鼠标或者键盘事件。它们通常唯一能做的事情就是响应发送给他们的消息并将消息发送回主页面。

想要发送消息给Worker，需要调用 worker.postMessage 并传入1个或2个参数。第一个参数是一个JavaScript对象，它会被 结构化拷贝 并发送给Worker。第二个参数是一个可选的对象数组，它是第一个对象的子集，属于我们想 传递 给Worker的一部分，这些对象是不会被克隆的。相反他们会被 转移 并且不再存在于主页面中。不复存在可能是一个不准确的描述，它们更像是不可访问。只有某些类型的对象可以转移而不是克隆，包括 OffscreenCanvas。 所以一旦转移了 offscreen 对象，在主页面它就没用了。

Worker从它们的 onmessage 方法获取消息。我们调用 postMessage 传递的对象，在 onmessage 方法中，通过 event.data 可以获取到。 上面的代码在传递给Worker的对象中声明了 type: 'main' 。这个对象对浏览器完全没有意义，完全是我们自定义的用法。我们会写一个处理函数，基于 type 参数来调用Worker中的不同方法。然后我们可以按需添加处理函数，并很容易的从主页面中调用它们。

记住Worker根本看不见 DOM 结构。我们遇到的第一个问题是 resizeRendererToDisplaySize 不能获取到 canvas.clientWidth 和 canvas.clientHeight ，因为它们是DOM属性。这是原始代码。