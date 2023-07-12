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
      @input="updateValue"
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

const emit = defineEmits<{
  (event: 'update:value', value: string): void
}>()

const updateValue = (v: Event) => {
  emit('update:value', (v.target as HTMLInputElement).value)
}
</script>
<style lang="scss"></style>
