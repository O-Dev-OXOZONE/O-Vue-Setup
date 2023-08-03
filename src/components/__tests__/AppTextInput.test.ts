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
  test('show label', () => {
    expect(wrapper.text()).toContain('Test Label')
  })
  test('value emitted', () => {
    wrapper.find('input').setValue('new text')
    expect(wrapper.emitted('update:value')).toStrictEqual([['new text']])
  })
})
