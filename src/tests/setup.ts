import { config } from '@vue/test-utils'
import { vi } from 'vitest'
import { createI18n } from 'vue-i18n'

import { en } from '../assets/translations/en'
import { ru } from '../assets/translations/ru'

// english is used a a default language for testing
const localCreateI18n = () =>
  createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'en',
    messages: {
      en,
      ru,
    },
  })

const i18n = localCreateI18n()

config.global.plugins = [i18n]

vi.stubEnv(
  'VITE_ANCR_URL',
  'https://rpc.ankr.com/multichain/dmsajk438fndak4832fsa',
)
vi.stubEnv('VITE_BACKEND_URL', 'https://dev.sipmle.cc/api/v1/')
