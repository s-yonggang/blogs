<template>
  <div class="canvas-wrapper" ref="canvasWrapperRef">
    <div class="transmission" @click="onTransmission">传送</div>
    <canvas id="canvas" ref="canvasRef"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
// import glslCanvas from 'glslCanvas';
import { glslCode1, glslCode2, glslCode3 } from '../GLSL/index';

let sandbox = null;
const canvasRef = ref(null);
const canvasWrapperRef = ref(null);

function onTransmission() {
  sandbox.destroy();
  canvasWrapperRef.value.style.opacity = 0;
  canvasWrapperRef.value.style.zIndex = -99;
}

onMounted(() => {

  function createScript() {
    if (window.document) {
      const oScript = window.document.createElement('script');
      oScript.type = 'text/javascript';
      oScript.src = './local-cdn/glslCanvas@0.2.5.min.js';
      document.body.appendChild(oScript);
      oScript.addEventListener('load', initCanvas);
    }
  }
  createScript();

  function initCanvas() {
    const c = canvasRef.value;
    const width = canvasWrapperRef.value.offsetWidth;
    const height = canvasWrapperRef.value.offsetHeight;
    c.width = width;
    c.height = width > height ? width / 2.4 : width;
    sandbox = new GlslCanvas(c);
    sandbox.load(glslCode2);
  }

  window.addEventListener("resize", () => {
    sandbox.destroy();
    initCanvas();
  })

})
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