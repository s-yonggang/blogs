<template>
  <div class="canvas-wrapper" ref="canvasWrapperRef">
    <canvas id="canvas" ref="canvasRef" ></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import glslCanvas from 'glslCanvas';
import { glslCode1,glslCode2,glslCode3 } from '../GLSL/index';

const { code } = defineProps(["code"]);

let myShader = null;
const canvasRef = ref<any>(null);
const canvasWrapperRef = ref<any>(null);

onMounted(() => {
  function initCanvas() {
    const c = canvasRef.value;
    c.width = canvasWrapperRef.value.offsetWidth;
    c.height = c.width / 4.0;
    myShader = null;
    myShader = new glslCanvas(canvasRef.value);
    myShader.load(glslCode2);
  }
  initCanvas();
  window.addEventListener("resize", () => {
    myShader.destroy();
    initCanvas();
  })
})





// const { color } = defineProps(["colors"]);
</script>

<style scoped>
.canvas-wrapper {
  margin: 0 auto;
  /* max-width: 100%; */
  /* max-width: 1152px; */
  /* background-color: var(--vp-c-bg); */
  background-color: black;
}
</style>