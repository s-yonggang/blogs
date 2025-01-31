const navBar = [
    // { text: '首页', link: '/' },
    {
        text: '基础组件', link: '/components/index'
    },
    // { text: 'Examples', link: '/markdown-examples' },

    // {
    //     text: '龙场悟道',
    //     items: [
    //         { text: '经脉资质', link: '/components/index' },
    //         { text: '试炼之地', link: '/trials/' },
    //         { text: '功法神通', link: '/magic/' },
    //     ],
    // },
    {
        text: 'web可视化',
        items: [
            {
                items: [
                    { text: '线性代数', link: '/3DVisualization/linear-algebra/' },
                    { text: '计算机图形学', link: '/3DVisualization/graphics/' },
                ]
            },
            {
                items: [
                    { text: 'GLSL-es', link: '/3DVisualization/glsl-es/' },
                    // { text: 'threeJs', link: '/3DVisualization/threejs/' },
                    // { text: 'babylonJs', link: '/3DVisualization/babylonjs/' },
                ]
            },
            {
                items: [
                    { text: 'Svg', link: '/3DVisualization/svg/' },
                    { text: 'Canvas', link: '/3DVisualization/canvas/' }
                ]
            }
        ]
    },
    {
        text: '前端文档',
        items: [
            { text: '基础核心', link: '/web-core/base/' },
            { text: '函数编程', link: '/web-core/advanced/' },
            { text: 'ES+规范', link: '/web-core/es6/' },
            { text: '疑难杂症', link: '/explore/index' },
        ]
    },
    {
        text: '模块化与工具',
        items: [
            { text: '模块化', link: '/tools/modular/' },
            { text: 'typescript', link: '/tools/typescript/' },
            { text: 'vite', link: '/tools/vite/' },
            { text: 'webpack', link: '/tools/webpack/' },
        ]
    },
    {
        text: '安全与性能',
        items: [
            { text: '安全', link: '/web-optimization/safe/' },
            { text: '性能', link: '/web-optimization/performance/' },
            { text: '垃圾回收', link: '/web-optimization/GC/' },
        ]
    },
    {
        text: '数据结构/设计模式',
        items: [
            { text: '数据结构与算法', link: '/data-structure/index' },
            { text: '设计模式', link: '/design-patterns/index' },
        ]
    },

]

export { navBar }