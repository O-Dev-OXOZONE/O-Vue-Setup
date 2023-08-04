<template>
  <form @submit.prevent="submit">
    <AppTextInput
      v-model:value="login"
      :label="$t('common.login')"
    />
    <AppTextInput
      v-model:value="password"
      :label="$t('common.password')"
      is-password
    />
    <button type="submit">{{ $t('common.ok') }}</button>
    <div v-if="value">
      {{ value }}
    </div>
  </form>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'

import AppTextInput from '@/components/AppTextInput.vue'

const login = ref('')
const password = ref('')
const value = ref('')

const calc = computed<string>(() => {
  if (login.value) return `${!!login.value && !!password.value}`
  return `82167${password.value}`
})

const submit = () => {
  const arr = ['a', 'b', 'c'].map(_v => `${_v}g`)[0]
  value.value = calc.value ? calc.value : arr
}
</script>
