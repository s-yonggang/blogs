# cesium

## cesiumWidget

```
Cesium 命名空间
├─ 核心类
│  ├─ Viewer
│  │  ├─ camera：场景中的相机，用于控制视角
│  │  ├─ scene：表示三维场景，包含地形、模型等元素
│  │  ├─ imageryLayers：管理影像图层的集合
│  │  └─ terrainProvider：地形数据提供者
│  ├─ Scene
│  │  ├─ primitives：管理场景中的图元（如模型、线条等）的集合
│  │  ├─ globe：表示地球对象，包含地形和影像
│  │  ├─ skyBox：天空盒，用于模拟天空环境
│  │  └─ fog：雾效果，可增强场景的真实感
│  └─ Camera
│     ├─ position：相机的位置，用三维坐标表示
│     ├─ direction：相机的朝向方向
│     ├─ up：相机的上方向
│     └─ fov：相机的视场角
├─ 数据提供者类
│  ├─ ImageryProvider：用于提供影像数据，如卫星影像、地图瓦片等
│  │  ├─ BingMapsImageryProvider：提供 Bing 地图的影像数据
│  │  ├─ OpenStreetMapImageryProvider：提供 OpenStreetMap 的影像数据
│  │  └─ ArcGisMapServerImageryProvider：提供 ArcGIS 地图服务的影像数据
│  └─ TerrainProvider：用于提供地形数据
│     ├─ CesiumTerrainProvider：Cesium 官方提供的地形数据提供者
│     └─ EllipsoidTerrainProvider：提供基于椭球体的简单地形
├─ 图元类
│  └─ Primitive：表示场景中的基本图形元素，如点、线、面等
│     ├─ PointPrimitive：表示点图元
│     ├─ PolylinePrimitive：表示折线图元
│     ├─ GroundPrimitive：表示地面图元，可用于绘制地面上的图形
│     └─ Model：用于加载和显示三维模型
├─ 实体类
│  └─ Entity：用于表示具有属性和行为的地理实体，如建筑物、车辆等
│     ├─ position：实体的位置
│     ├─ orientation：实体的朝向
│     ├─ billboard：用于显示图标或图片的广告牌
│     ├─ label：用于显示文本标签
│     ├─ ellipse：表示椭圆形状
│     └─ rectangle：表示矩形形状
├─ 事件类
│  └─ ScreenSpaceEventHandler：用于处理屏幕空间的事件，如鼠标点击、拖动等
│     ├─ leftClick：左键点击事件
│     ├─ rightClick：右键点击事件
│     └─ mouseMove：鼠标移动事件
└─ 数学类
   ├─ Cartesian3：表示三维笛卡尔坐标，用于表示位置、方向等
   │  ├─ x：X 坐标值
   │  ├─ y：Y 坐标值
   │  └─ z：Z 坐标值
   ├─ Quaternion：用于表示三维旋转，比欧拉角更适合处理旋转问题
   │  ├─ x：四元数的 X 分量
   │  ├─ y：四元数的 Y 分量
   │  ├─ z：四元数的 Z 分量
   │  └─ w：四元数的 W 分量
   └─ Matrix4：表示 4x4 矩阵，用于表示变换（如平移、旋转、缩放）
      └─ elements：矩阵的元素数组
```