# 材质

## ShaderMaterial
- 使用自定义shader渲染的材质。 shader是一个用GLSL编写的小程序 ，在GPU上运行。

:::tip 注意事项
1. ShaderMaterial 只有使用 WebGLRenderer 才可以绘制正常， 因为 vertexShader 和 fragmentShader 属性中GLSL代码必须使用WebGL来编译并运行在GPU中。
2. 从 THREE r72开始，不再支持在ShaderMaterial中直接分配属性。 必须使用 BufferGeometry实例，使用BufferAttribute实例来定义自定义属性。
3. 从 THREE r77开始，WebGLRenderTarget 或 WebGLCubeRenderTarget 实例不再被用作uniforms。 必须使用它们的texture 属性。
4. 内置`attributes`和`uniforms`与代码一起传递到shaders。 如果您不希望WebGLProgram向shader代码添加任何内容，则可以使用`RawShaderMaterial`而不是此类。
5. 您可以使用指令`#pragma unroll_loop_start`，`#pragma unroll_loop_end` 以便通过shader预处理器在GLSL中展开for循环。 该指令必须放在循环的正上方。循环格式必须与定义的标准相对应。
   - 循环必须标准化normalized。

   - 循环变量必须是i。
  ```
  #pragma unroll_loop_start
  for ( int i = 0; i < 10; i ++ ) {
    // do ...
  }
  #pragma unroll_loop_end
  ```
:::

## RawShaderMaterial
- 原始着色器材质。
- 此类的工作方式与`ShaderMaterial`类似，不同之处在于内置的`uniforms`和`attributes`的定义不会自动添加到GLSL shader代码中。