import React from 'react'
import { shallow } from 'enzyme'
import SensorPointsTable, {
  SORT_DIRECTIONS
} from 'components/SingleMachine/SensorPointsTable'
import { getTime } from 'date-fns'
import faker from 'faker'

const checkIsCorrectOrder = (dates, sortDirection) =>
  dates.every((currentItem, i, arr) => {
    const nextItem = arr[i + 1]

    if (nextItem) {
      return sortDirection === SORT_DIRECTIONS.DESC
        ? currentItem > nextItem
        : currentItem < nextItem
    }

    return true
  })

const getDateValues = cellNodes =>
  Array.from(cellNodes).map(({ props }) => getTime(new Date(props.children)))

const fakePoints = Array(10)
  .fill(null)
  .map(() => ({
    id: faker.random.uuid(),
    timestamp: getTime(faker.date.past()),
    value: faker.random.number()
  }))

describe('<TestComponent />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<SensorPointsTable sensorPoints={fakePoints} />)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('Is points order correct', () => {
    it('In desc mode', () => {
      wrapper
        .find('#date-sort-label')
        .props()
        .onClick()

      const cellNodes = wrapper.find('[data-cell="timestamp"]')
      const dateValues = getDateValues(cellNodes)

      expect(checkIsCorrectOrder(dateValues, SORT_DIRECTIONS.DESC)).toEqual(
        true
      )
    })

    it('In asc mode', () => {
      for (let i = 0; i < 2; i++) {
        wrapper
          .find('#date-sort-label')
          .props()
          .onClick()
      }

      const cellNodes = wrapper.find('[data-cell="timestamp"]')
      const dateValues = getDateValues(cellNodes)

      expect(checkIsCorrectOrder(dateValues, SORT_DIRECTIONS.ASC)).toEqual(true)
    })
  })
})
