import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

import { en } from '@/assets/translations/en'
import { ru } from '@/assets/translations/ru'
import { router } from '@/router/index'

import App from './App.vue'

const i18n = createI18n({
  // something vue-i18n options here ...
  locale: 'en',
  messages: {
    en,
    ru,
  },
})

const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')
