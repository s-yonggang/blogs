<template>
  <div class="banner-wrapper">
    <div class="banner-content">
      <h1>{{ title }}</h1>
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script setup>
const { title, message } = defineProps(["title", "message"]);
</script>

<style scoped>
.banner-wrapper {
  width: 100%;
  height: 20vh;
  background-color: var(--vp-code-tab-bg);
}
.banner-content {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 24px;
  max-width: 1152px;
  height: 100%;
}
.banner-content h1 {
  font-size: 32px;
  line-height: 1.4;
  color: var(--vp-home-hero-name-background);
  text-align: center;
}

@media (min-width: 180px) {
  .banner-content h1 {
    font-size: 22px;
    
  }
}

@media (min-width: 480px) {
  .banner-content h1 {
    font-size: 24px;
    
  }
}

@media (min-width: 640px) {
  .banner-content h1 {
    font-size: 32px;
    
  }
}

@media (min-width: 960px) {
  .banner-content h1 {
    font-size: 38px;
    
  }
}


/* @media (min-width: 640px) {
  .card-list {
    padding: 0 48px;
  }
}

@media (min-width: 960px) {
  .card-list {
    padding: 0 64px;
  }
} */
</style>
