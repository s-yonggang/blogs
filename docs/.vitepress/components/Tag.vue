<template>
  <span class="tag-wrap">
    <span class="tag" :style="{ backgroundColor: bgColor[type] }">{{ types[type] }}</span>
  </span>
</template>

<script setup>
const { type } = defineProps(["type"]);

const types = {
  es6: "es6+",
  new: "新增",
  discard: "废弃",
  danger: "不推荐",
  super:"推荐"
};
const bgColor = {
  es6: "#bd34fe",
  new: "#30a46c",
  discard: "#f44",
  danger: "#f44",
  super:"#00c063"
};
</script>

<style scoped>
.tag-wrap {
  position: relative;
}
.tag {
  position: absolute;
  top: -10px;
  left: -2px;
  padding: 2px 4px;
  font-size: 12px;
  white-space: nowrap;
  line-height: 1;
  color: #fff;
  border-radius: 2px;
}
</style>
