import React, { useCallback } from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'
import { get } from 'lodash'
import { SENSOR_DATA } from 'graphql/queries'
import { useQuery } from '@apollo/react-hooks'
import { format, sub, getTime } from 'date-fns'
import {
  Table,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Grid,
  TextField
} from '@material-ui/core'
import { KeyboardDatePicker } from '@material-ui/pickers'
import Error from 'components/common/Error'
import { SpinnerWrapper } from 'components/common/Spinner'
import SensorPointsTable from './SensorPointsTable'

const TextFieldCustom = styled(({ ...props }) => (
  <TextField {...props} disabled />
))``

const Wrapper = styled.div`
  margin-bottom: 20px;
  ${SpinnerWrapper} {
    min-height: 200px;
  }
`

const DatePicker = styled(KeyboardDatePicker)`
  width: 100%;
`

const PickersWrapper = styled.div`
  margin-bottom: 15px;
`

const initialStartDate = getTime(
  sub(Date.now(), {
    years: 2
  })
)
const initialEndDate = Date.now()

const SensorPoints = ({ sensorId }) => {
  const { data, error, variables, refetch } = useQuery(SENSOR_DATA, {
    variables: {
      sensorId,
      from: initialStartDate,
      to: initialEndDate
    }
  })

  const handleRefetch = useCallback(
    prop => async date => {
      try {
        await refetch({
          sensorId,
          [prop]: getTime(date)
        })
      } catch (error) {
        console.error(error)
      }
    },
    []
  )

  const sensorPoints = get(data, 'sensorData') || []

  return (
    <Wrapper>
      <PickersWrapper>
        <Grid container spacing={6}>
          <Grid item xs={6}>
            <DatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-start"
              label="Date from"
              value={variables.from}
              onChange={handleRefetch('from')}
              KeyboardButtonProps={{
                'aria-label': 'change date'
              }}
              TextFieldComponent={TextFieldCustom}
            />
          </Grid>
          <Grid item xs={6}>
            <DatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-end"
              label="Date to"
              value={variables.to}
              onChange={handleRefetch('to')}
              KeyboardButtonProps={{
                'aria-label': 'change date'
              }}
              TextFieldComponent={TextFieldCustom}
            />
          </Grid>
        </Grid>
      </PickersWrapper>
      <Paper>
        {error ? <Error /> : <SensorPointsTable sensorPoints={sensorPoints} />}
      </Paper>
    </Wrapper>
  )
}

SensorPoints.propTypes = {
  sensorId: string.isRequired
}

export default SensorPoints
