import { h } from 'vue'
import { mount } from '@vue/test-utils'
import { NRadio, NRadioGroup } from '../index'

describe('n-radio', () => {
  it('should work with import on demand', () => {
    mount(NRadio)
  })

  it('should work with `checked` prop', async () => {
    const wrapper = mount(NRadio, { props: { checked: false } })
    expect(wrapper.find('.n-radio').classes()).not.toContain('n-radio--checked')
    await wrapper.setProps({ checked: true })
    expect(wrapper.find('.n-radio').classes()).toContain('n-radio--checked')
  })

  it('should work with `defaultChecked` prop', async () => {
    let wrapper = mount(NRadio, { props: { defaultChecked: true } })
    expect(wrapper.find('.n-radio').classes()).toContain('n-radio--checked')

    wrapper = mount(NRadio, { props: { defaultChecked: false } })
    expect(wrapper.find('.n-radio').classes()).not.toContain('n-radio--checked')
  })

  it('should work with `disabled` prop', async () => {
    const wrapper = mount(NRadio, { props: { disabled: false } })
    expect(wrapper.find('.n-radio').classes()).not.toContain(
      'n-radio--disabled'
    )
    await wrapper.setProps({ disabled: true })
    expect(wrapper.find('.n-radio').classes()).toContain('n-radio--disabled')
  })

  it('should work with `name` prop', async () => {
    const wrapper = mount(NRadio, { props: { name: 'randomName111' } })

    const radio = wrapper.find('input[type=radio]')

    expect(radio.attributes('name')).toEqual('randomName111')

    await wrapper.setProps({ name: 'randomName222' })

    expect(radio.attributes('name')).toEqual('randomName222')
  })

  it('should work with `size` prop', async () => {
    ;(['small', 'medium', 'large'] as const).forEach((size) => {
      const wrapper = mount(NRadio, { props: { size: size } })
      expect(wrapper.find('.n-radio').attributes('style')).toMatchSnapshot()
    })
  })
})

describe('n-radio-group', () => {
  it('should work with import on demand', () => {
    mount(NRadioGroup, {
      slots: {
        default: () => [
          h(NRadio, null, { default: () => 'test-item1' }),
          h(NRadio, null, { default: () => 'test-item2' })
        ]
      }
    })
  })

  it('should work with `disabled` prop', async () => {
    const wrapper = mount(NRadioGroup, {
      slots: {
        default: () => [
          h(NRadio, null, { default: () => 'test-item1' }),
          h(NRadio, null, { default: () => 'test-item2' })
        ]
      }
    })
    expect(wrapper.find('.n-radio--disabled').exists()).not.toBe(true)

    await wrapper.setProps({ disabled: true })
    expect(wrapper.findAll('.n-radio')[0].classes()).toContain(
      'n-radio--disabled'
    )
    expect(wrapper.findAll('.n-radio')[1].classes()).toContain(
      'n-radio--disabled'
    )
  })

  it('should work with `name` prop', async () => {
    const wrapper = mount(NRadioGroup, {
      props: {
        name: 'randomName111'
      },
      slots: {
        default: () => [
          h(NRadio, null, { default: () => 'test-item1' }),
          h(NRadio, null, { default: () => 'test-item2' })
        ]
      }
    })

    const radio1 = wrapper.findAll('input[type=radio]')[0]
    const radio2 = wrapper.findAll('input[type=radio]')[1]

    expect(radio1.attributes('name')).toEqual('randomName111')
    expect(radio2.attributes('name')).toEqual('randomName111')

    await wrapper.setProps({ name: 'randomName222' })

    expect(radio1.attributes('name')).toEqual('randomName222')
    expect(radio2.attributes('name')).toEqual('randomName222')
  })

  it('should work with `size` prop', async () => {
    ;(['small', 'medium', 'large'] as const).forEach((size) => {
      const wrapper = mount(NRadioGroup, {
        props: {
          size: size
        },
        slots: {
          default: () => [
            h(NRadio, null, { default: () => 'test-item1' }),
            h(NRadio, null, { default: () => 'test-item2' })
          ]
        }
      })
      expect(
        wrapper.find('.n-radio-group').attributes('style')
      ).toMatchSnapshot()
    })
  })

  it('should work with `value` prop', async () => {
    const wrapper = mount(NRadioGroup, {
      props: {
        value: 'test1'
      },
      slots: {
        default: () => [
          h(NRadio, { value: 'test1' }, { default: () => 'test-item1' }),
          h(NRadio, { value: 'test2' }, { default: () => 'test-item2' })
        ]
      }
    })
    expect(wrapper.findAll('.n-radio')[0].classes()).toContain(
      'n-radio--checked'
    )
    expect(wrapper.findAll('.n-radio')[1].classes()).not.toContain(
      'n-radio--checked'
    )

    await wrapper.setProps({ value: 'test2' })
    expect(wrapper.findAll('.n-radio')[1].classes()).toContain(
      'n-radio--checked'
    )
    expect(wrapper.findAll('.n-radio')[0].classes()).not.toContain(
      'n-radio--checked'
    )
  })
})
