<template>
  <div class="canvas-wrapper" ref="canvasWrapperRef">
    <div class="transmission" @click="onTransmission">传送</div>
    <canvas id="canvas" ref="canvasRef"></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import glslCanvas from 'glslCanvas';
import { glslCode1, glslCode2, glslCode3 } from '../GLSL/index';

// const { code } = defineProps(["code"]);
let initCode:boolean = sessionStorage.getItem("initCode") || 1;
sessionStorage.setItem("initCode", initCode)

let myShader = null;
const canvasRef = ref<any>(null);
const canvasWrapperRef = ref<any>(null);

onMounted(() => {
  function initCanvas() {
    const c = canvasRef.value;
    const width = canvasWrapperRef.value.offsetWidth;
    const height = canvasWrapperRef.value.offsetHeight;
    c.width = width;
    c.height = width > height ? width / 2.4 : width;
    myShader = null;
    myShader = new glslCanvas(canvasRef.value);
    myShader.load(glslCode2);
  }

  if (initCode==1) {
    initCanvas()
  }

  if (initCode==2) {
    canvasWrapperRef.value.style.opacity = 0;
    canvasWrapperRef.value.style.zIndex = -99;
  }

  window.addEventListener("resize", () => {
    myShader.destroy();
    initCanvas();
  })
})

function onTransmission() {
  initCode = 2;
  sessionStorage.setItem("initCode", initCode)
  myShader.destroy();
  canvasWrapperRef.value.style.opacity = 0;
  canvasWrapperRef.value.style.zIndex = -99;
}

// const { color } = defineProps(["colors"]);
</script>

<style scoped>
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