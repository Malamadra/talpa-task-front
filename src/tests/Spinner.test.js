import React from 'react'
import { shallow } from 'enzyme'
import Spinner from 'components/common/Spinner'

describe('<TestComponent />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <Spinner isLoading={true}>
        <div id="child" />
      </Spinner>
    )
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('Spinner works properly', () => {
    it(`Doesn't show children while loading`, () => {
      expect(wrapper.exists('#child')).toEqual(false)
    })

    it('Shows children when loading is finished', () => {
      wrapper.setProps({ isLoading: false })

      expect(wrapper.exists('#child')).toEqual(true)
    })
  })
})

describe('<TestComponent />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <Spinner isLoading={true} delay={300}>
        <div id="child" />
      </Spinner>
    )
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('Spinner with delay works properly', () => {
    it(`Doesn't show children immediately after loading finished`, () => {
      wrapper.setProps({ isLoading: false })

      expect(wrapper.exists('#child')).toEqual(false)
    })
  })
})
