import { mount } from '@vue/test-utils'
import Login from '../Login.vue'
import { h } from 'vue'

describe('Login', () => {
  const wrapper = mount(Login, {
    global: {
      stubs: {
        AppTextInput: h('div', { class: 'my-stub' }, "I'm input"),
      },
    },
  })

  it('input count', () => {
    expect(wrapper.findAll('.my-stub')).toHaveLength(2)
  })
})
