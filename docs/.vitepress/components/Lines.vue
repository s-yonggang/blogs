<template>
  <span :class="type||'lines'">{{ text }}</span>
</template>

<script setup>
const { text, type} = defineProps(["text","type"]);
</script>
<style scoped>
.lines {
  padding: 2px 0;
  text-decoration: #f44 underline 2px;
}

.wave {
  /* padding: 2px 0; */
  /* border-bottom: 2px solid green; */
  text-decoration: green wavy underline;
  text-decoration-skip-ink: auto;
}

.point {
  text-emphasis-position: under;
  text-emphasis-style: filled double-circle;
  text-emphasis-color: rgb(255, 115, 0);
}
</style>
