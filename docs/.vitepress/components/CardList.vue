<template>
  <div class="card-list">
    <h2 style="text-align: center;">{{ data[0].title }}</h2>
    <div class="container">
      <div class="item-wrap">
        <template v-for="item in data" :key="item.title">
          <div class="item" @click="onClick(item)" v-if="item.img">
            <img :src="item.img" alt="">
            <!-- <div class="item-title">{{ item.title }}</div> -->
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data } = defineProps(["data"]);
function onClick(item) {
  console.log(item.link)
  window.open(item.link)
}
</script>

<style scoped>
.card-list {
  padding: 0 24px;
  width: 100%;
  margin-top: 48px;
}

.card-list h2 {
  font-size: 24px;
  margin-bottom: 24px;
}

.card-list .container {
  margin: 0 auto;
  max-width: 1152px;
  /* overflow: hidden; */
}

.item-wrap {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  justify-content: center;
}

.card-list .container .item {
  position: relative;
  text-align: center;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
}

.card-list .container .item:hover .item-title {
  opacity: 0.5;
}

.card-list .container .item img {
  width: 100%;
  border-radius: 4px;
  border: 1px solid var(--vp-c-white);
  cursor: pointer;
  opacity: 0.8;
}

.card-list .container .item-title {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, -50%);
  background-color: var(--vp-c-bg);
  opacity: 0;
  cursor: pointer;
  transition: opacity 0.3s;
  font-size: 0.5em;
}

@media (min-width: 180px) {
  .item-wrap {
    grid-template-columns: repeat(1, 1fr);
    gap: 24px;
  }
}

@media (min-width: 480px) {
  .item-wrap {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
}

@media (min-width: 640px) {
  .item-wrap {
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
}

@media (min-width: 960px) {
  .item-wrap {
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
  }
}


@media (min-width: 640px) {
  .card-list {
    padding: 0 48px;
  }
}

@media (min-width: 960px) {
  .card-list {
    padding: 0 64px;
  }
}
</style>