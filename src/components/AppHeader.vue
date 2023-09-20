<template>
  <header class="flex justify-between items-center container mx-auto">
    <router-link
      to="/"
      aria-label="main page"
    >
      <Logo
        width="20px"
        height="20px"
      />
    </router-link>
    <nav>
      <ul class="flex gap-2">
        <li
          v-for="link in navigationLinks"
          :key="link.name"
        >
          <router-link :to="link.link">{{ link.name }}</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script setup lang="ts">
import Logo from '@/assets/icons/logo.svg'

const navigationLinks = [{ name: 'Main page', link: '/' }]
</script>
