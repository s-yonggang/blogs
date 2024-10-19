# GLSL-es 
GLSL ES是在GLSL（OpenGL着色器语言）的基础上，删除和简化了一部分功能后形成的，ES版本主要降低了硬件功耗，减少了性能开销。实际上 GLSL 并不支持GLSL ES的所有特性

LSL ES是强类型语言，"强类型语言"指的是编程语言中对变量和表达式的类型进行严格检查的语言，相对于js弱类型语言，这就得在声明变量的时候指出其数据类型了，且该类型不能被隐式转换为其他类型。

可以安装`glsl-canvas`插件，该扩展通过提供`Show glslCanvas`命令()在VSCode中打开GLSL着色器的实时WebGL预览。
> 使用快捷键 `ctrl + shift + P` ，打开命令行窗囗后输入 `Show glslcanvas`预览。
```GLSL ES
#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    st.x *= u_resolution.x/u_resolution.y;

    vec3 color = vec3(0.);
    color = vec3(st.x,st.y,abs(sin(u_time)));

    gl_FragColor = vec4(color,1.0);
}
```



## 变量的基本规范
1. 大小写敏感。
2. 变量只能包括`a-z`、`A-Z`、`0-9`、`_`。
3. 变量名的首字符不能是数字。
4. 变量不能是关键字，保留字。
5. 语句末尾必须要有分号。
6. 注释语法和javascript一样 `单行: //`、`多行: /**/`。
7. GLSL ES是强类型语言，声明变量时必须指定类型，允许先声明后赋值。

:::details **关键字**
| attribute | bool      | break     | bvec2  | bvec3 | bvec4     |
| --------- | --------- | --------- | ------ | ----- | --------- |
| const     | continue  | discard   | do     | else  | false     |
| float     | for       | hightp    | if     | in    | inout     |
| int       | invariant | ivec2     | ivec3  | ivec4 | lowp      |
| mat2      | mat3      | mat4      | medium | out   | precision |
| return    | sampler2D | sampler3D | struct | true  | uniform   |
| varying   | vec2      | vec3      | vec4   | void  | while     |
:::

:::details **保留字**
| asm           | cast                | class           | default         |
| ------------- | ------------------- | --------------- | --------------- |
| double        | dvec2               | dvec3           | devc4           |
| enum          | extern              | external        | fixed           |
| flat          | fvec2               | fvec3           | fvec4           |
| goto          | half                | hvec2           | hvec3           |
| hvec4         | inline              | input           | interface       |
| long          | namespace           | noinline        | output          |
| packed        | public              | sampler1D       | sampler1DShadow |
| sampler2DRect | sampler2DRectShadow | sampler2DShadow | sampler3D       |
| sampler3DRect | short               | sizeof          | static          |
| superp        | switch              | template        | this            |
| typedef       | union               | unsigned        | using           |
| volatile      |                     |                 |                 |
:::

## 基本数据类型
- 浮点型： float，如1.0
- 整型： int，如1
- 布尔型： bool，如true / false

## 变量声明
GLSL ES是强类型语言，在声明变量的时候应该指明变量类型。
```GLSL ES
float f = 1.0;
int i = 1;
bool b = true;
```

## 变量的赋值
使用等号`=`赋值，=两侧的`数据类型需要一致`。
```GLSL ES
int i = 8.0; // ✖
int i = 8; // ✔
float f = 8; // ✖
float f = 8.0; // ✔
```

## 变量的类型转换

- 浮点转整数：int(float)
- 布尔转整数：int(bool)
- 整数转浮点：float(int)
- 布尔转浮点：float(bool)
- 整数转布尔：bool(int)
- 浮点转布尔：bool(float)
```GLSL ES
float f =float(8)
```

## 向量

| 类型      | 含义                            |
| --------- | ------------------------------- |
| `vec(n)`  | 包含`n`个float分量的默认向量    |
| `bvec(n)` | 包含`n`个bool分量的向量         |
| `ivec(n)` | 包含`n`个int分量的向量          |
| `uvec(n)` | 包含`n`个unsigned int分量的向量 |
| `dvec(n)` | 包含`n`个double分量的向量       |

**向量声明**
```GLSL ES
vec3 v3 = (1.0, 0.0, 0.5);  // (1.0, 0.0, 0.5)
vec2 v2 = (v3);             // (1.0, 0.0)
vec4 v4 = (1.0)             // (1.0, 1.0, 1.0, 1.0)
```

**将多个向量合并**
```GlSL ES
vec4 v4b=vec4(v2,v4);       // (1.0, 0.0, 1.0, 1.0)
```

> 注：= 两侧的数据类型必须一致
```GlSL ES
vec4 v4 = vec2(1.0);        // 错的    
```

## 矩阵
GLSL ES 支持2、3、4维矩阵：mat2、mat3、mat4。<lines text="矩阵中的元素都是浮点型"/>。

- 向矩阵传入值为`浮点数`时顺序必须是`列主序`（真实矩阵的转置格式）
```GLSL ES
mat4 m4 = mat4(
  1.0, 2.0, 3.0, 4.0,
  5.0, 6.0, 7.0, 8.0,
  9.0, 10.0, 11.0, 12.0,
  13.0, 14.0, 15.0, 16.0
);
/*
  1.0, 2.0, 3.0, 4.0,
  5.0, 6.0, 7.0, 8.0,
  9.0, 10.0, 11.0, 12.0,
  13.0, 14.0, 15.0, 16.0
*/
```
上面`4 x 4`矩阵对应的其实是这样的`列主序`：
$$
  \begin{pmatrix}
  1.0 & 5.0 & 9.0 & 13.0 \\
  2.0 & 6.0 & 10.0 & 14.0 \\
  3.0 & 7.0 & 11.0 & 15.0 \\
  4.0 & 8.0 & 12.0 & 16.0 \\
  \end{pmatrix}
$$


- 向矩阵传入值为`向量`
```GLSL ES
vec4 v4_1 = vec4(1.0, 2.0, 3.0, 4.0);
vec4 v4_2 = vec4(5.0, 6.0, 7.0, 8.0);
vec4 v4_3 = vec4(9.0, 10.0, 11.0, 12.0);
vec4 v4_4 = vec4(13.0, 14.0, 15.0, 16.0)
mat4 m4 = mat4(v4_1, v4_2, v4_3, v4_4);
/*
  1.0, 2.0, 3.0, 4.0,
  5.0, 6.0, 7.0, 8.0,
  9.0, 10.0, 11.0, 12.0,
  13.0, 14.0, 15.0, 16.0
*/
```

- 向矩阵传入值为`向量`和`浮点数`
```GLSL ES
vec4 v4_1 = vec4(1.0, 2.0, 3.0, 4.0);
vec4 v4_2 = vec4(5.0, 6.0, 7.0, 8.0);
mat4 m=mat4(
  v4_1,
  v4_2,
  9.0, 10.0, 11.0, 12.0,
  13.0, 14.0, 15.0, 16.0
);
/*
  1.0, 2.0, 3.0, 4.0,
  5.0, 6.0, 7.0, 8.0,
  9.0, 10.0, 11.0, 12.0,
  13.0, 14.0, 15.0, 16.0
*/
```

- `单个浮点数`（单位矩阵）
```GLSL ES
mat4 m4 = mat4(1.0);
/*
  1.0, 0.0, 0.0, 0.0,
  0.0, 1.0, 0.0, 0.0,
  0.0, 0.0, 1.0, 0.0,
  0.0, 0.0, 0.0, 1.0,
*/
```

## 访问元素
访问矢量或矩阵中的元素，可以使用 `·` 或者 `[]` 运算符。

**向量分量的访问**
- 通过分量属性访问：
```GlSL ES
v4.x, v4.y, v4.z, v4.w  // 齐次坐标
v4.r, v4.g, v4.b, v4.a  // 色值
v4.s, v4.t, v4.p, v4.q  // 纹理坐标 
```
- 将分量的多个属性连在一起，可以获取多个向量
```GlSL ES
vec4 v4 = vec4(1.0, 2.0, 3.0, 4.0); 
v4.xy //(1.0, 2.0)
v4.yx //(2.0, 1.0)
v4.xw //(1.0, 4.0)
```

- 通过分量索引访问
```GLSL ES
v4[0], v4[1], v4[2], v4[3]
```

- 访问到向量后，也可以用`=`号为向量的分量赋值。
```GLSL ES
v4.x = 1.0
v4[0] = 1.0
v4.xy = vec2(1.0, 2.0)
```

**矩阵的访问**
- 矩阵中的元素仍然是按照`列主序`读取。
```GLSL ES
mat4 m4 = mat4(
  1.0, 2.0, 3.0, 4.0,
  5.0, 6.0, 7.0, 8.0,
  9.0, 10.0, 11.0, 12.0,
  13.0, 14.0, 15.0, 16.0
);
mat4[0]; // 1.0, 2.0, 3.0, 4.0,
```
-`4m[x][y] ` x行 y列

```GLSL ES
mat4 m4 = mat4(
  1.0, 2.0, 3.0, 4.0,
  5.0, 6.0, 7.0, 8.0,
  9.0, 10.0, 11.0, 12.0,
  13.0, 14.0, 15.0, 16.0
);
mat4[0][0]; // 1.0
```
- ` [] ` 中的索引值`接受只读索引`。
```GLSL ES
const int y = 0; // ✔
int y = 0;       // ✖
4m[y]; 
```
- ` [] ` 中的索引值`可以是表达式`。
```GLSL ES
const int y = 0;
4m[y+1];
```

## 结构体
GLSL ES 支持用于自定义的类型，也就是结构体。**使用关键字 `struct`**，将已存在的类型聚合在一起，就可以定义为结构体：
```GLSL ES
// 定义了结构体类型 light
struct light {
  vec4 color;     // 颜色
  vec3 position;  // 位置
}
light l1, l2;     // 声明了 light 类型的变量 l1 和 l2

// 也可以是下面这种写法
struct light {
  vec4 color;     // 光的颜色
  vec3 position;  // 光源位置
} l1;          // 声明了 light 类型的变量 l1
```
使用**赋值和构造**创建：
```GLSL ES
l1 = light(vec4(0.0, 1.0, 0.0, 1.0), vec3(8.0, 3.0, 0.0))
```
**结构体访问**
> 跟 JavaScript 对象访问属性是一样的。如下：
```GLSL ES
vec4 position = l1.color;
vec3 position = l1.position;
```

## 存储限定符
- 存储限定字（Storage Qualifier）是用于指定变量存储方式的关键字。存储限定字可以用于在内存中指定变量的存储位置、生命周期和可访问性等信息。

**const**：表示该变量的值不能被改变。
```GLSL ES
const float pi = 3.14159;
```
**attribute**：attribute 变量<lines text="只能定义在顶点着色器中"/>，它的作用是接收 JS 程序传递过来的与顶点有关的数据，比如：顶点坐标、顶点颜色、法线等都可以通过 attribute 变量传递过来。
**const**：表示该变量的值不能被改变。
```GLSL ES
attribute vec4 position;
```
**uniform**：变量可以用在顶点着色器和片元着色器中，并且必须是全局变量。uniform变量是只读的，如果顶点着色器和片元着色器中声明了同名的uniform变量，那么它就会被两种着色器共享。

**varying**：变量必须是全局变量，它的作用是从顶点着色器向片元着色器中传输数据。

## 精度限定符

| 精度限定字 | 描述   | Float          | int            |
| ---------- | ------ | -------------- | -------------- |
| highp      | 高精度 | (-2^62, 2^62 ) | (-2^16, 2^16 ) |
| mediump    | 中精度 | (-2^14, 2^14 ) | (-2^10, 2^10 ) |
| lowp       | 低精度 | (-2, 2)        | (-2^8, 2^8 )   |

## 参数限定符
**in**：默认使用的缺省限定符，指明参数传递的是值，并且函数不会修改传入的值，用于值传递。

**inout**：指明参数传入的是引用，如果在函数中对参数的值进行了修改，当函数结束后参数的值也会修改，用于引用传递。

**out**：参数的值不会传入函数，但是在函数内部修改其值，函数结束后其值会被修改。


## 数组
GLSL ES 支持数组类型：
- 并且只支持一维数组。
- 没有与 JavaScript 一样有数组的一些操作方法（如pus、pop）。
- 数组的长度必须是大于 0 的整型常量表达式。
- 数组元素可以通过索引值来访问，索引值是从 0 开始的。只有整型常量表达式和 uniform 变量，可以被用作数组的索引值。
- 数组不能在声明时被一次性地初始化，而必须显示地对每个元素进行初始化。

```GLSL ES
// int size = 4 错误，如果第一行为 const int size = 4，则不会报错
const int size = 4;
vec4 vec4Array[size];
vec4Array[0] = vec4(4.0, 3.0, 6.0, 1.0)
vec4Array[1] = vec4(4.0, 3.0, 6.0, 1.0)

// 数组只支持 [] 运算，但数组的元素可以参与其自身类型支持的任意运算：
float f = floatArray[1] * 3.14; // 将 floatArry 的第 2 个元素乘以 3.14
```

## 取样器（纹理）
GLSL ES 支持一种内置的类型：取样器，我们必须通过该类型变量访问纹理，取样器变量只能是 uniform 变量，或者需要访问纹理的函数。有两种基本的取样器类型：
- `sampler2D`
- `samplerCube`

texture2D():
```GLSL ES
uniform sampler2D u_Sampler_1;
uniform samplerCube u_Sampler_2;

// vec4 texture2D(sampler2D sampler,vec2 coord);
// vec4 textureCube(samplerCube sampler,vec3 coord);
```
唯一能赋值给取样器变量的就是纹理单元编号，而且必须使用 WebGL 方法 gl.uniformli() 来进行赋值。
> 使用 gl.uniformli(u_Sample, 0) 将纹理单元编号 0 传给着色器。
>
> 除了 =、== 和 !=，取样器变量不可以作为操作数参与运算。

取样器类型变量受到着色器支持的纹理单元的最大数量限制:
| 着色器     | 表示最大数量的内置常量                          | 最小数量 |
| ---------- | ----------------------------------------------- | -------- |
| 顶点着色去 | const mediump int gl_MaxVertexTextureImageUnits | 0        |
| 片元着色器 | const mediump int gl_MaxTextureImageUnits       | 8        |

## 程序流程控制

**IF条件判断**

GLSL 中支持像 C 中的 if 写法一样，可以使用 `if`、`else if` 和 `else` 进行判断。
```GLSL ES
float dist = distance(gl_PointCoord,vec2(0.5,0.5));

if(dist >= 0.5){
    gl_FragColor= vec4(1.0, 0.0, 0.0, 1.0);
} else {
    discard; // 取消片元的绘制
}
```
:::tip **注意**
如果 if 语句太多会降低设色器执行速度。
:::

**For 循环**

For 循环中的变量只能有一个，并且只能是 int 或 float 类型；另外，在循环体中也可以使用 break 或 continue 语句。

```GLSL ES
for (int i = 0; i < 3; i++) {
  sum += i
}
```
需要注意的是，循环变量，也就是上面的 i 只能在舒适化表达式中定义，也就是 for 的第一个参数。for 语句有下面一些限制：
- 只允许有一个循环变量，循环变量只能是 int 或 float 类型。
- 循环表达式必须是以下的形式：`i++`, `i--`, `i+=` 常量表达式或 `i-=`常量表达式。
- 条件表达式必须是循环变量与整型变量的比较。
- 在循环体内，循环变量 i 不可被赋值。

## continue、break 和 discard 语句

- `continue` 终止包含该语句的最内层循环和执行循环表达式（递增 / 递减循环变量），然后执行下一次循环。
- `break` 终止包含该语句的最内存循环，并不再继续执行循环。
- `discard` 他只能在片元着色器中使用，表示放弃当前片元直接处理下一个片元


## 函数

- 如果函数没有返回值，函数不需要有 return 语句，并且返回类型必须是 void。
- 可以将自己定义的结构体类型指定为返回类型，但是结构体的成员中不能有数组。
- 如果函数定义在其调用之后，需要先声明函数的规范。
- 不能递归调用函数。

**参数限定词**：
在 GLSL ES 中，可以为函数参数指定限定词，以控制参数的行为。可以将函数参数定义为：
> (1) 传递给函数的。
> 
> (2) 将要在函数中被赋值的。
> 
> (3) 既是传递给函数的，也是将要在函数中被赋值的。

- `in` 参数深拷贝，可读写，不影响原始数据，默认限定词
- `out` 参数浅拷贝，可读写，影响原始数据。
- `const in` 常量限定词，只读。
- `inout` 功能类似于 out，用得不多，知道即可。

**自定义函数**
```GLSL ES
vec4 getPosition(){ 
    vec4 v4 = vec4(0.0, 0.0, 0.0, 1.0);
    return v4;
}

void doubleSize(inout float size){
    size = size * 2.0;
}

void main() {
    float psize = 10.0;
    doubleSize(psize);
    gl_Position = getPosition();
    gl_PointSize = psize;
}
```

**函数规范声明**
```GLSL ES
float luma(vec4) // 规范声明 
attribute vec4 a_Color;
void main() {
  float brightness = luma(a_Color) // 在定义之前就被调用了
}

float luma(vec4 color) {
  float r = color.r;
  float g = color.g;
  float b = color.b;
  return 0.2126 * r + 0.7126 * g + 0.0722 * b;
}
```

