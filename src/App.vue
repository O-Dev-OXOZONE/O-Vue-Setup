<!-- eslint-disable vue-scoped-css/enforce-style-type -->
<template>
  <div class="app flex flex-col">
    <AppHeader />
    <main class="flex-1 py-5 container mx-auto px-5 md:px-0">
      <!-- eslint-disable-next-line vue/no-undef-components -->
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

import AppFooter from './components/AppFooter.vue'
import AppHeader from './components/AppHeader.vue'

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
<!-- eslint-disable-next-line vue-scoped-css/enforce-style-type -->
<style lang="scss">
@tailwind base;
@tailwind components;
@tailwind utilities;

.app {
  height: 100vh;
  height: var(--app-height);
}

body {
  background-color: #f5f5ef;
}
</style>
