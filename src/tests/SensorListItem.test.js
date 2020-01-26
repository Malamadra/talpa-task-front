import React from 'react'
import { shallow } from 'enzyme'
import SensorListItem from 'components/SingleMachine/SensorListItem'
import SensorPoints from 'components/SingleMachine/SensorPoints'

const fakeItem = {
  id: '1',
  name: 'test-name'
}

describe('<TestComponent />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<SensorListItem item={fakeItem} />)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })
  describe('Sensor points component showing', () => {
    const SensorPointsComponent = <SensorPoints sensorId={fakeItem.id} />

    it('Is not shown without expanding', () => {
      expect(wrapper.contains(SensorPointsComponent)).toEqual(false)
    })

    it('Is shown after expanding', () => {
      wrapper
        .find('#list-button')
        .props()
        .onClick()

      expect(wrapper.contains(SensorPointsComponent)).toEqual(true)
    })
  })
})
