<template>
  <div class="text-input">
    <label for="login">{{ label }}</label>
    <input
      id="login"
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
<style lang="scss">
div.text-input {
  label {
    display: block;
  }
}
</style>
