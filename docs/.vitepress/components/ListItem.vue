<template>
  <div class="list-item-wrapper">
    <div class="item-left" @click="onClick">
      <icon-font iconName="icon-bukejian" class="close-yey"></icon-font>
      <icon-font iconName="icon-yanjing" class="open-yey"></icon-font>
    </div>
    <div class="item-right">
      <div @click="onClick">{{ text }}</div>
    </div>
  </div>
</template>

<script setup>
const { url, text } = defineProps(["url", "text"]);
function onClick() {
  if (typeof window !== 'undefined') {
    window.open(url)
  }
}
</script>

<style scoped>
.list-item-wrapper {
  margin: 20px auto;
  max-width: 1152px;
  display: grid;
  grid-template-columns: 3rem auto;
  grid-template-rows: 3rem;
  /* border: 1px dashed var(--vp-c-gray-1); */
  background-color: var(--vp-c-bg-soft);
}

.open-yey {
  display: none;
}

.list-item-wrapper:hover .close-yey {
  display: none;
}

.list-item-wrapper:hover .open-yey {
  display: block;
  margin-left: -10px;
}

.list-item-wrapper:hover .item-right>div {
  text-decoration: underline;
}

.item-left {
  display: flex;
  justify-content: center;
  align-items: center;
  /* color: var(--vp-c-text-1); */
  cursor: pointer;

}

.item-right {
  display: flex;
  padding-left: 10px;
  align-items: center;
  /* text-decoration: underline; */
  /* background-color: antiquewhite; */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.item-right>div {
  width: 100%;
  cursor: pointer;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}


@media (max-width: 1152px) {
  .list-item-wrapper {
    margin: 20px;
  }
}
</style>