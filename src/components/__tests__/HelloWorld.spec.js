import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import EnergyLevels from '../EnergyLevels.vue'

describe('EnergyLevels', () => {
  it('renders a div', () => {
    const wrapper = mount(EnergyLevels)
    expect(wrapper.html()).toContain('div')
  })
})
