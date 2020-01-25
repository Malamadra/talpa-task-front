import React from 'react'
import { get } from 'lodash'
import { object } from 'prop-types'
import { red } from '@material-ui/core/colors'
import { List } from '@material-ui/core'
import styled from 'styled-components'
import Error from 'components/common/Error'
import SensorListItem from './SensorListItem'

const Title = styled.div`
  text-align: center;
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 24px;
  ${({ color }) => color && `color: ${color}`};
`

const SingleMachine = ({ data, error }) => {
  if (error) {
    return <Error text={error.message} />
  }

  const machine = get(data, 'machine')

  if (!machine) {
    return <Title color={red[300]}>There is no machine with such an id</Title>
  }

  const machineName = get(data, 'machine.name')
  const sensorDataPoints = get(data, 'machine.sensors')

  return (
    <div>
      {!!machineName && <Title>Sensors of {machineName}:</Title>}
      {!!sensorDataPoints.length && (
        <List component="nav">
          {sensorDataPoints.map(item => (
            <SensorListItem key={item.id} item={item} />
          ))}
        </List>
      )}
    </div>
  )
}

SingleMachine.propTypes = {
  data: object,
  error: object
}

export default SingleMachine
