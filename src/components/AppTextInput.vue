<template>
  <div class="px-2">
    <label
      for="login"
      class="mb-2 block"
    >
      {{ label }}
    </label>
    <input
      id="login"
      class="outline-yellow-500 border-yellow-300 border-1 border rounded px-2"
      type="text"
      :value="value"
      :password="isPassword"
      @input="updateValue"
    />
  </div>
</template>
<script setup lang="ts">
defineProps<{
  label: string
  value: string
  isPassword?: boolean
}>()

interface Emits {
  (_event: 'update:value', _value: string): void
}

const emit = defineEmits<Emits>()

const updateValue = (value: Event) => {
  emit('update:value', (value.target as HTMLInputElement).value)
}
</script>
