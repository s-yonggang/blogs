<template>
  <div>
    <color class="color" :key="index" v-for="(color, index) in colors" :color="color" />
  </div>
</template>

<script setup>
const { color } = defineProps(["colors"]);
</script>

<style scoped>
.color {
  margin: 0 2px;
}
</style>
