<template>
  <div class="glsl-wrapper" :class="{'canvas-wrapper': once}" ref="canvasWrapperRef" v-if="initCode==1 || !once">
    <div class="transmission" @click="onEnter" v-if="once">传送</div>
    <canvas id="canvas" ref="canvasRef"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import glslCode from '../GLSL/index';
const { ratioHeight, cases, once } = defineProps(["ratioHeight", "cases", "once"]);
const canvasRef = ref(null);
const canvasWrapperRef = ref(null);
const glslId = "glslScript";

let initCode = ref(null);
let gScript = null;
let glslSandbox = null;
let hasGlsl = null; // 1：无 2：有

if (typeof window !== "undefined") {
  hasGlsl = sessionStorage.getItem('hasGlsl') || 1;
  initCode.value = sessionStorage.getItem('initCode') || 1;

  sessionStorage.setItem('hasGlsl', hasGlsl);
  sessionStorage.setItem('initCode', initCode.value);
}

const onEnter = () => {
  sessionStorage.setItem('initCode', 2)
  initCode.value = sessionStorage.getItem('initCode')
  window.removeEventListener("resize", glslResize);
  glslSandbox?.destroy();
}

function glslResize() {
  if(typeof glslSandbox !== undefined && canvasWrapperRef.value){
    glslSandbox?.destroy();
    initCanvas();
  }
}

function loadGlsl() {
  gScript = window.document.createElement('script');
  gScript.type = 'text/javascript';
  // gScript.src = '/local-cdn/glslCanvas@0.2.5.min.js';
  gScript.src = "https://cdn.jsdelivr.net/npm/glslCanvas@0.2.6/dist/GlslCanvas.min.js"
  gScript.id = glslId;
  document.body.appendChild(gScript);
  gScript.addEventListener('load', () => {
    if (initCode.value == 1 || !once) {
      initCanvas()
    }
  });
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

onMounted(() => {
  const elementGLSL = document.getElementById("glslScript")
  if(elementGLSL){
    elementGLSL.remove();
  }

  if (typeof window !== 'undefined') {
    loadGlsl();
  } 

  if (typeof window !== 'undefined' && (initCode.value == 1 || !once)) {
    window.addEventListener("resize", glslResize)
  }

  const destroyCanvas = () => {
    glslSandbox?.destroy();
  }
})

</script>

<style scoped>
.glsl-wrapper {
  overflow: hidden;
  margin: 24px auto;
}
.canvas-wrapper {
  position: fixed;
  top: 0;
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  /* max-width: 100%; */
  /* max-width: 1152px; */
  /* background-color: var(--vp-c-bg); */
  background-color: white;
  z-index: 99;
  overflow: hidden;
  transition: 0.3s;
}

.canvas-wrapper canvas {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.transmission {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  color: rgb(0, 0, 0);
  cursor: pointer;
  font-size: 2rem;
  font-family: serif;
  z-index: 99;
}
</style>