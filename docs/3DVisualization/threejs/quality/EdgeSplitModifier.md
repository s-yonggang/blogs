# EdgeSplitModifier（溶解器）

EdgeSplitModifier 的设计目的是通过“溶解”边缘来修改几何体，使其看起来更加平滑。

## 示例 

```javascript
import { EdgeSplitModifier } from 'three/addons/modifiers/EdgeSplitModifier.js';

const geometry = new THREE.IcosahedronGeometry( 10, 3 );
const modifier = new EdgeSplitModifier();
const cutOffAngle = 0.5;
const tryKeepNormals = false;
modifier.modify( geometry, cutOffAngle, tryKeepNormals );
```
> 使用插值的顶点法线，网格的面会在边缘处变得模糊，从而呈现出平滑的外观。
> 
>  您可以通过设置 cutOffAngle 来控制平滑度。
> 
>  如果希望尝试保留原始法线，请将 tryKeepNormals 设置为 true。

[misc / modifiers / EdgeSplit](https://threejs.org/examples/#webgl_modifier_edgesplit)