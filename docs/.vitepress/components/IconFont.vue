<template>
  <svg :class="svgClass" aria-hidden="true">
      <use :xlink:href="iconClassName"></use>
  </svg>
</template>

<script setup>
import './iconfont.js'
import { computed, defineProps } from 'vue'

const props = defineProps({
  // 添加自定义类名
  className: {
      type: String,
      default: ''
  },
  // iconfont中的名字
  iconName: {
      type: String,
      required: true
  }
})

const svgClass = computed(() => {
  if (props.className) {
      return `svg-icon ${ props.className }`
  } else {
      return 'svg-icon'
  }
})
const iconClassName = computed(() => `#${ props.iconName }`)
</script>

<style scoped>
.svg-icon {
  width: 2em;
  height: 2em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>