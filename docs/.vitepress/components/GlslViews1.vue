<template>
  <div class="glsl-wrapper" ref="canvasWrapperRef">
    <canvas id="canvas" ref="canvasRef"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
// import GlslCanvas from 'GlslCanvas';
import glslCode from '../GLSL/index';
const { ratioHeight, cases } = defineProps(["ratioHeight", "cases",]);
const canvasRef = ref(null);
const canvasWrapperRef = ref(null);
const glslId = "glslScript";

let gScript = null;
let glslSandbox = null;

function loadGlsl() {
  if (typeof window !== 'undefined') {
    gScript = window.document.createElement('script');
    gScript.type = 'text/javascript';
    gScript.src = "https://cdn.jsdelivr.net/npm/glslCanvas@0.2.6/dist/GlslCanvas.min.js"
    gScript.id = glslId;
    document.body.appendChild(gScript);
    gScript.addEventListener('load', () => {
      initCanvas()
    });
  }
}

function initCanvas() {
  const c = canvasRef.value;
  const width = canvasWrapperRef.value.offsetWidth;
  const height = canvasWrapperRef.value.offsetHeight;
  c.width = width;
  c.height = width > height ? width / ratioHeight : width;
  glslSandbox = new GlslCanvas(c);
  glslSandbox.load(glslCode[cases]);
}

function glslResize() {
  if (typeof glslSandbox !== undefined && canvasWrapperRef.value) {
    glslSandbox?.destroy();
    initCanvas();
  }
}

// function initCanvas() {
//   const c = canvasRef.value;
//   const width = canvasWrapperRef.value.offsetWidth;
//   const height = canvasWrapperRef.value.offsetHeight;
//   c.width = width;
//   c.height = width > height ? width / ratioHeight : width;
//   const glslSandbox = new GlslCanvas(c);
//   glslSandbox.load(glslCode[cases]);
// }

onMounted(() => {
  const elementGLSL = document.getElementById("glslScript")
  if (elementGLSL) {
    elementGLSL.remove();
  }

  if (typeof window !== 'undefined') {
    loadGlsl();
  }

  if (typeof window !== 'undefined') {
    window.addEventListener("resize", glslResize)
  }

  const destroyCanvas = () => {
    glslSandbox?.destroy();
  }
})
</script>

<style scoped>
.glsl-wrapper {
  margin: 24px auto;
  overflow: hidden;
}
</style>