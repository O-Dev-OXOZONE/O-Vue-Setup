<template>
  <form @submit.prevent="submit">
    <AppTextInput
      v-model:value="login"
      label="Login"
    />
    <AppTextInput
      v-model:value="password"
      label="Password"
      is-password
    />
    <button type="submit">Ok</button>
  </form>
</template>
<script setup lang="ts">
import AppTextInput from '@/components/AppTextInput.vue'
import { computed, ref } from 'vue'

const login = ref('')
const password = ref('')

const calc = computed<boolean>(() => {
  return !!login.value && !!password.value
})

const submit = () => {
  console.log('submit', calc.value)
}
</script>
