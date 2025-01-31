<template>
  <div class="glsl-wrapper" ref="canvasWrapperRef">
    <canvas id="canvas" ref="canvasRef"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import GlslCanvas from 'GlslCanvas';
import glslCode from '../GLSL/index';
const { ratioHeight, cases } = defineProps(["ratioHeight", "cases",]);
const canvasRef = ref(null);
const canvasWrapperRef = ref(null);

function initCanvas() {
  const c = canvasRef.value;
  const width = canvasWrapperRef.value.offsetWidth;
  const height = canvasWrapperRef.value.offsetHeight;
  c.width = width;
  c.height = width > height ? width / ratioHeight : width;
  const glslSandbox = new GlslCanvas(c);
  glslSandbox.load(glslCode[cases]);
}

onMounted(() => {
  initCanvas();
})

</script>

<style scoped>
.glsl-wrapper {
  margin: 24px auto;
  overflow: hidden;
}
</style>