const sideBar = {
    '/components/': [
        {
            text: '文档组件',
            items: [
                { text: '概述', link: '/components/index' },
                { text: 'color组件', link: '/components/color' },
                { text: 'Line组件', link: '/components/line' },
                { text: '数学公式', link: '/components/maths' },
                { text: 'glslCanvas插件', link: '/components/glsl-canvas' },
                { text: 'glslEditor插件', link: '/components/glsl-editor' },
            ]
        }
    ],

    '/explore/': [
        {
            text: '疑难杂症',
            items: [
                { text: '版本问题', link: '/explore/index' },
                { text: '缓存问题', link: '/explore/1-1' },
                { text: 'declare', link: '/explore/1-3' },
                { text: 'TS Dom元素类型', link: '/explore/1-4' },
            ]

        },
        {
            text: '个人感悟',
            items: [
                { text: '大道不该如此之小', link: '/explore/2-1' },
            ]
        },
        {
            text: '探索',
            items: [
                { text: '方向', link: '/explore/3-1' },
                // { text: '思维、方向', link: '/explore/3-2' },
                // { text: 'Line组件', link: '/trials/line' }
            ]

        },
    ],

    '/data-structure/': [
        {
            text: '数据结构基本概念',
            items: [
                { text: '什么是数据结构', link: '/data-structure/index' },
                { text: '怎么样查找图书', link: '/data-structure/1-1' },
                { text: '空间与时间', link: '/data-structure/1-2' },
                { text: '到底什么是数据结构与算法呢', link: '/data-structure/1-3' },
                { text: '抽象数据类型', link: '/data-structure/1-4' },
            ]
        },
        {
            text: '算法基本概念',
            items: [
                { text: '算法定义', link: '/data-structure/2-1' },
                { text: '空间复杂度、时间复杂度', link: '/data-structure/2-2' },
                { text: '复杂度的渐进表示', link: '/data-structure/2-3' },
            ]
        },
        {
            text: '数据结构',
            items: [
                { text: '多项式的表示', link: '/data-structure/3-1' },
                { text: '线性表', link: '/data-structure/3-2' },
                { text: '链表', link: '/data-structure/3-3' },
                { text: '栈', link: '/data-structure/3-4' },
                { text: '队列', link: '/data-structure/3-5' },
                { text: '树', link: '/data-structure/3-6' },
                { text: '堆', link: '/data-structure/3-7' },
                { text: '哈夫曼树', link: '/data-structure/3-8' },
                { text: '集合', link: '/data-structure/3-9' },
                { text: '图', link: '/data-structure/3-10' },
                { text: '散列', link: '/data-structure/3-11' },
                { text: '串', link: '/data-structure/3-12' },
            ]
        },
        {
            text: '算法',
            items: [
                { text: '排序算法概述', link: '/data-structure/4-1' },
                { text: '冒泡排序', link: '/data-structure/4-2' },
                { text: '插入排序', link: '/data-structure/4-3' },
                { text: '希尔排序', link: '/data-structure/4-4' },
                { text: '选择排序', link: '/data-structure/4-5' },
                { text: '堆排序', link: '/data-structure/4-6' },
                { text: '归并排序', link: '/data-structure/4-7' },
                { text: '快速排序', link: '/data-structure/4-8' },
                // { text: '集合', link: '/data-structure/4-9' },
                // { text: '图', link: '/data-structure/4-10' },
            ]
        },
    ],

    '/design-patterns/': [
        {
            text: 'Config',
            items: [
                { text: '设计模式', link: '/design-patterns/' },
            ]
        }
    ],

    '/algorithm/': [
        {
            text: 'Config',
            items: [
                { text: 'Index', link: '/config/' },
                { text: 'Three', link: '/config/three' },
                { text: 'Four', link: '/config/four' }
            ]
        }
    ],

    '/3DVisualization/linear-algebra': [
        {
            text: '线性代数',
            items: [
                { text: '概述', link: '/3DVisualization/linear-algebra/index' },
                { text: '二三阶行列式', link: '/3DVisualization/linear-algebra/1-1' },
                { text: '全排列', link: '/3DVisualization/linear-algebra/1-2' },
                { text: 'N阶行列式', link: '/3DVisualization/linear-algebra/1-3' },
                { text: '行列式的性质', link: '/3DVisualization/linear-algebra/1-4' },
                { text: '行列式的展开', link: '/3DVisualization/linear-algebra/1-5' },
                { text: '行列式各种试题类型', link: '/3DVisualization/linear-algebra/1-6' },
                { text: '矩阵的运算及性质', link: '/3DVisualization/linear-algebra/1-7' },
                { text: '矩阵特性总结', link: '/3DVisualization/linear-algebra/1-8' },
                { text: '分块矩阵', link: '/3DVisualization/linear-algebra/1-9' },
                { text: '线性方程组', link: '/3DVisualization/linear-algebra/1-10' },
                { text: '初等变换', link: '/3DVisualization/linear-algebra/1-11' },
                { text: '秩', link: '/3DVisualization/linear-algebra/1-12' },
                { text: '向量的基本定义', link: '/3DVisualization/linear-algebra/1-13' },
                { text: '向量的运算', link: '/3DVisualization/linear-algebra/1-14' },
                { text: '向量的线性相关和线性组合', link: '/3DVisualization/linear-algebra/1-15' },
                { text: '特征值与特征向量', link: '/3DVisualization/linear-algebra/1-16' },
                { text: '二次型', link: '/3DVisualization/linear-algebra/1-17' },
            ]
        },
    ],

    '/3DVisualization/graphics/': [
        {
            text: '计算机图形学',
            items: [
                { text: '计算机图形学概述', link: '/3DVisualization/graphics/' },
                { text: '线性代数', link: '/3DVisualization/graphics/1-1' },
                { text: '二维图形变换', link: '/3DVisualization/graphics/2-1' },
                { text: '三维图形变换', link: '/3DVisualization/graphics/2-1-1' },
                { text: '光栅化', link: '/3DVisualization/graphics/3-1' },
                { text: '光栅化的抗锯齿', link: '/3DVisualization/graphics/3-1-1' },
                { text: '光栅化的可见性/闭塞性', link: '/3DVisualization/graphics/3-1-2' },
                { text: '着色', link: '/3DVisualization/graphics/4-1' },
                { text: '实时渲染管线', link: '/3DVisualization/graphics/4-1-1' },
                { text: '纹理映射', link: '/3DVisualization/graphics/4-1-2' },
                { text: '几何', link: '/3DVisualization/graphics/5-1' },
                { text: '几何的曲线', link: '/3DVisualization/graphics/5-1-1' },
                { text: '几何的面', link: '/3DVisualization/graphics/5-1-2' },
                { text: '光栅化阴影', link: '/3DVisualization/graphics/6-1' },
                { text: '光线追踪', link: '/3DVisualization/graphics/7-1' },
                // { text: '光线追踪', link: '/3DVisualization/graphics/8-1' },
                // { text: '光线追踪', link: '/3DVisualization/graphics/9-1' },
                // { text: '光线追踪', link: '/3DVisualization/graphics/10-1' },
                // { text: '材质外观', link: '/3DVisualization/graphics/11-1' },
                // { text: '相机透视', link: '/3DVisualization/graphics/12-1' },
                // { text: '光场、颜色、感知', link: '/3DVisualization/graphics/13-1' },
                { text: '动画仿真', link: '/3DVisualization/graphics/10-1' },
            ]
        }
    ],

    '/3DVisualization/glsl-es/': [
        {
            text: 'GLSL-es',
            collapsed: true,
            items: [
                { text: '顶点/片元着色器', link: '/3DVisualization/glsl-es/' },
                { text: 'GLSL基本语法规范', link: '/3DVisualization/glsl-es/1-1' },
                { text: '基本运算', link: '/3DVisualization/glsl-es/1-2' },
                { text: '内置变量', link: '/3DVisualization/glsl-es/1-3' },
                { text: '内置函数', link: '/3DVisualization/glsl-es/1-4' },
                // { text: '造型函数进阶', link: '/3DVisualization/glsl-es/1-5' },
                // { text: 'Four', link: '/config/four' }
            ]
        },
        {
            text: '疑难杂症',
            collapsed: true,
            items: [
                { text: 'glsl+vue3+vite+ts', link: '/3DVisualization/glsl-es/2-1' },
                { text: 'glsl 语言风格', link: '/3DVisualization/glsl-es/2-2' },
                { text: '运行shader的插件工具', link: '/3DVisualization/glsl-es/2-3' },
            ]
        },
        {
            text: 'The Book of Shaders',
            collapsed: true,
            items: [
                { text: '片元着色器', link: '/3DVisualization/glsl-es/3-1' },
                { text: '基础要点', link: '/3DVisualization/glsl-es/3-2' },
                { text: 'Uniforms', link: '/3DVisualization/glsl-es/3-3' },
                { text: 'ThreeJs与shader', link: '/3DVisualization/glsl-es/3-4' },
                { text: '绘画算法', link: '/3DVisualization/glsl-es/3-5' },
                { text: '颜色', link: '/3DVisualization/glsl-es/3-6' },
                { text: '形状', link: '/3DVisualization/glsl-es/3-7' },
            ]
        }
    ],

    '/3DVisualization/threejs/': [
        {
            text: 'THREE-Geometry',
            collapsed: true,
            items: [
                { text: 'BufferGeometry', link: '3DVisualization/threejs/BufferGeometry' },
                { text: 'Point', link: '3DVisualization/threejs/point' },
                { text: 'Curve', link: '3DVisualization/threejs/line' },
                { text: 'Path', link: '3DVisualization/threejs/path' },
                { text: 'Shape', link: '3DVisualization/threejs/shape' },
                { text: 'ShapeGeometry', link: '3DVisualization/threejs/shapeGeometry' },
                { text: 'ExtrudeGeometry', link: '3DVisualization/threejs/ExtrudeGeometry' },
                { text: 'TubeGeometry', link: '3DVisualization/threejs/TubeGeometry' },
                { text: 'LatheGeometry', link: '3DVisualization/threejs/LatheGeometry' }
            ]
        },
        {
            text: 'THREE-material',
            collapsed: true,
            items: [
                { text: '材质', link: '3DVisualization/threejs/material/Material' },
                { text: 'ShaderMaterial', link: '3DVisualization/threejs/material/ShaderMaterial' },
                { text: 'RewShaderMaterial', link: '3DVisualization/threejs/material/RewShaderMaterial' },
                // { text: 'Point', link: '3DVisualization/threejs/point' },
                // { text: 'Curve', link: '3DVisualization/threejs/line' },
                // { text: 'Path', link: '3DVisualization/threejs/path' },
                // { text: 'Shape', link: '3DVisualization/threejs/shape' },
                // { text: 'ShapeGeometry', link: '3DVisualization/threejs/shapeGeometry' },
                // { text: 'ExtrudeGeometry', link: '3DVisualization/threejs/ExtrudeGeometry' },
                // { text: 'TubeGeometry', link: '3DVisualization/threejs/TubeGeometry' },
                // { text: 'LatheGeometry', link: '3DVisualization/threejs/LatheGeometry' }
            ]
        },
        {
            text: 'THREE-Light',
            // collapsed: true,
            items: [
                { text: '光/阴影', link: '/3DVisualization/threejs/LightAndShadow' },
                // { text: 'Three', link: '/config/three' },
                // { text: 'Four', link: '/config/four' }
            ]
        },
        {
            text: 'THREE-Shadow',
            // collapsed: true,
            items: [
                { text: 'Index', link: '/config/' },
                { text: 'Three', link: '/config/three' },
                { text: 'Four', link: '/config/four' }
            ]
        }
    ],

    '/3DVisualization/babylonjs/': [
        {
            text: 'BabylonJS',
            // collapsed: true,
            items: [
                { text: '概述', link: '/3DVisualization/babylonjs/' },
                // { text: 'Three', link: '/config/three' },
                // { text: 'Four', link: '/config/four' }
            ]
        }
    ],

    '/3DVisualization/svg/': [
        {
            text: 'SVG',
        }
    ],

    '/3DVisualization/canvas/': [
        {
            text: 'Canvas',
        }
    ],

    '/web-core/base/': [
        {
            text: 'one',
            collapsed: false,
            items: [
                { text: '字符编码', link: '/web-core/base/index' },
                { text: '像素', link: '/web-core/base/1-13' },
                { text: 'String', link: '/web-core/base/1-1' },
                { text: 'Boolean', link: '/web-core/base/1-2' },
                { text: 'Number', link: '/web-core/base/1-3' },
                { text: 'Symbol', link: '/web-core/base/1-4' },
                { text: 'BigInt', link: '/web-core/base/1-13' },
                { text: 'Array', link: '/web-core/base/1-5' },
                { text: 'Object', link: '/web-core/base/1-6' },
                { text: 'Math', link: '/web-core/base/1-7' },
                { text: '正则', link: '/web-core/base/1-8' },
                { text: 'Blob', link: '/web-core/base/1-9' },
                { text: 'ArrayBuffer', link: '/web-core/base/1-10' },
                { text: 'TypedArray', link: '/web-core/base/1-11' },
                { text: 'DataView', link: '/web-core/base/1-12' },
            ]
        },
        {
            text: 'two',
            collapsed: false,
            items: [
                { text: '类型转换', link: '/web-core/base/2-1' },
                { text: '类型判定', link: '/web-core/base/2-2' },
                { text: '原型/原型链', link: '/web-core/base/2-3' },
                { text: '作用域/作用域链/闭包', link: '/web-core/base/2-4' },
                { text: '执行上下文', link: '/web-core/base/2-5' },
                { text: 'this指向', link: '/web-core/base/2-6' },
            ]
        },
        {
            text: 'three',
            collapsed: false,
            items: [
                { text: 'DOM', link: '/web-core/base/3-2' },
                { text: 'BOM', link: '/web-core/base/3-3' },
                { text: 'Web Workers', link: '/web-core/base/3-4' },
                { text: 'Web Storage', link: '/web-core/base/3-5' },
                { text: 'Websockets', link: '/web-core/base/3-6' },
                { text: 'WebRTC', link: '/web-core/base/3-7' },
            ]
        },
        {
            text: 'four',
            collapsed: false,
            items: [
                { text: 'DOM事件', link: '/web-core/base/5-1' },
                { text: '事件流', link: '/web-core/base/5-2' },
                { text: '事件委托', link: '/web-core/base/5-3' },
                { text: '事件冒泡/捕获', link: '/web-core/base/5-4' },
                { text: '事件模型', link: '/web-core/base/5-5' },
                { text: 'Drag and Drop', link: '/web-core/base/5-6' },
                { text: '拖拽事件', link: '/web-core/base/5-7' },
                { text: '拖拽效果', link: '/web-core/base/5-8' },
            ]
        },
    ],

    '/web-core/es6/': [
        {
            text: 'Es6+',
            items: [
                { text: '概述', link: '/web-core/es6/index' },
                { text: '顶层对象属性', link: '/web-core/es6/1-0' },
                { text: 'let const', link: '/web-core/es6/1-1' },
                { text: '解构赋值', link: '/web-core/es6/1-2' },
                { text: '字符串拓展', link: '/web-core/es6/1-3' },
                { text: '正则拓展', link: '/web-core/es6/1-4' },
                { text: '数值拓展', link: '/web-core/es6/1-5' },
                { text: '数组拓展', link: '/web-core/es6/1-6' },
                { text: '函数拓展', link: '/web-core/es6/1-7' },
                { text: '对象拓展', link: '/web-core/es6/1-8' },
                // { text: '运算符拓展', link: '/web-core/es6/1-9' },
                { text: 'Symbol', link: '/web-core/es6/1-10' },
                { text: 'set map', link: '/web-core/es6/1-11' },
                { text: 'Proxy', link: '/web-core/es6/1-12' },
                { text: 'Reflect', link: '/web-core/es6/1-13' },
                { text: 'Promise', link: '/web-core/es6/1-14' },
                { text: '迭代器', link: '/web-core/es6/1-15' },
                { text: 'Generator', link: '/web-core/es6/1-16' },
                { text: 'async await', link: '/web-core/es6/1-17' },
                { text: 'Class', link: '/web-core/es6/1-18' },
                { text: 'Module', link: '/web-core/es6/1-19' },
            ]
        },
    ],

    '/web-core/advanced/': [
        {
            text: '高阶函数应用',
            items: [
                { text: '目录', link: '/web-core/advanced/index' },
                { text: '异步编程', link: '/web-core/advanced/1-8' },
                { text: '纯函数', link: '/web-core/advanced/1-1' },
                { text: '惰性函数', link: '/web-core/advanced/1-2' },
                { text: '函数柯里化', link: '/web-core/advanced/1-3' },
                { text: '偏函数', link: '/web-core/advanced/1-4' },
                { text: '组合函数', link: '/web-core/advanced/1-5' },
                { text: '链式调用', link: '/web-core/advanced/1-6' },
                { text: '防抖节流', link: '/web-core/advanced/1-7' },
            ]
        },
    ],

    '/tools/modular': [
        {
            text: '模块化',
            items: [
                { text: '模块化发展', link: '/tools/modular/index' },
                { text: '模块化标准', link: '/tools/modular/1-1' },
                // { text: '基本类型', link: '/tools/typescript/1-2' },
                // { text: '常用类型', link: '/tools/typescript/1-3' },
            ],
        }
    ],

    '/tools/typescript': [
        {
            text: 'Typescript',
            items: [
                { text: '概述', link: '/tools/typescript/index' },
                { text: '语言类型', link: '/tools/typescript/1-1' },
                { text: '基本类型', link: '/tools/typescript/1-2' },
                { text: '常用类型', link: '/tools/typescript/1-3' },
            ],
        }
    ],

    '/tools/webpack': [
        {
            text: 'Webpack',
            items: [
                { text: '概述', link: '/tools/webpack/index' },
                // { text: '模块化', link: '/tools/webpack/1-1' },
                // { text: '模块化规范', link: '/tools/webpack/1-2' },
                { text: '模块化工具', link: '/tools/webpack/1-3' },
                { text: 'webpack基本配置', link: '/tools/webpack/1-4' },
                { text: '手写loader', link: '/tools/webpack/1-5' },
                { text: '手写义插件', link: '/tools/webpack/1-6' },
                // { text: 'Webpack4', link: '/tools/webpack/1-7' },
            ],
        }
    ],

    '/web-optimization/': [
        {
            text: 'web安全',
            items: [
                { text: '同源策略', link: '/web-optimization/safe/index' },
                { text: 'XSS攻击', link: '/web-optimization/safe/1-1' },
                { text: 'CSRF攻击', link: '/web-optimization/safe/1-2' },
                { text: 'SSRF攻击', link: '/web-optimization/safe/1-3' },
                { text: '点击劫持', link: '/web-optimization/safe/1-4' },
                { text: 'CDN劫持', link: '/web-optimization/safe/1-5' },
                { text: 'HTTP严格传输安全（HSTS）', link: '/web-optimization/safe/1-6' },

            ]
        },
        {
            text: '垃圾回收',
            items: [
                { text: '', link: '/web-optimization/GC/index' },
                { text: '内存管理', link: '/web-optimization/GC/1-1' },
                { text: 'V8与JIT', link: '/web-optimization/GC/1-2' },
                { text: 'V8 的GC', link: '/web-optimization/GC/1-3' },
                { text: 'V8 的并发标记', link: '/web-optimization/GC/1-4' },

            ]
        },
        {
            text: '性能优化',
            items: [
                { text: '性能优化', link: '/web-optimization/performance/index' },
                // { text: 'XSS攻击', link: '/web-optimization/GC/1-1' },
            ]
        }
    ],

    // '/web-optimization/': [

    // ],

}

export { sideBar }