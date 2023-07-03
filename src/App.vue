<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

// set valid height in IOS
const appHeight = () => {
  const doc = document.documentElement
  doc.style.setProperty('--app-height', `${window.innerHeight}px`)
}

onMounted(() => {
  window.addEventListener('resize', appHeight)
  appHeight()
})

onUnmounted(() => {
  window.removeEventListener('resize', appHeight)
})
</script>
<style scoped>
.app {
  height: 100vh;
  height: var(--app-height);
}
</style>
