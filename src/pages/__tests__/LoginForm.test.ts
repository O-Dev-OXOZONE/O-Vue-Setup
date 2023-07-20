import { mount } from '@vue/test-utils'
import { h } from 'vue'

import LoginForm from '../LoginForm.vue'

describe('LoginForm', () => {
  const wrapper = mount(LoginForm, {
    global: {
      stubs: {
        AppTextInput: h('div', { class: 'my-stub' }, 'I\'m input'),
      },
    },
  })

  it('input count', () => {
    expect(wrapper.findAll('.my-stub')).toHaveLength(2)
  })
})
