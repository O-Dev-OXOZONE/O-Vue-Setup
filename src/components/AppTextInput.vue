<template>
  <div class="px-2">
    <label
      for="login"
      class="mb-2 block"
      >{{ label }}</label
    >
    <input
      id="login"
      class="outline-yellow-500 border-yellow-300 border-1 border rounded px-2"
      type="text"
      :value="value"
      @update:value="(v: string) => $emit('update:value', v)"
      :password="isPassword"
    />
  </div>
</template>
<script setup lang="ts">
defineProps<{
  label: string
  value: string
  isPassword?: boolean
}>()

defineEmits<{
  (event: 'update:value', value: string): void
}>()
</script>
<style lang="scss"></style>
