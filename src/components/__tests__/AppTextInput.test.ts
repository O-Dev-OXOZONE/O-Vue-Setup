import { mount } from '@vue/test-utils'

import AppTextInput from '../AppTextInput.vue'

describe('AppTextInput', () => {
  const wrapper = mount(AppTextInput, {
    props: {
      label: 'Test Label',
      value: '',
      isPassword: false,
    },
  })
  it('show label', () => {
    expect(wrapper.text()).toContain('Test Label')
  })
  it('value emitted', () => {
    wrapper.find('input').setValue('new text')
    expect(wrapper.emitted('update:value')).toEqual([['new text']])
  })
})
