<template>
  <div
    :data-clipboard-text="color"
    class="color"
    @click="onClick"
    :style="`background-color:${color}`"
  />
</template>

<script setup>
import Clipboard from "clipboard";
const { color } = defineProps(["color"]);

function onClick() {
  let clipboard = new Clipboard(".color");
  clipboard.on("success", () => {
    alert(`颜色代码已复制：${color}`);
    clipboard.destroy();
  });
}
</script>

<style scoped>
.color {
  border: 1px dashed #a0d911;
  display: inline-block;
  width: 20px;
  height: 20px;
  margin: 4px;
  cursor: pointer;
}
</style>
