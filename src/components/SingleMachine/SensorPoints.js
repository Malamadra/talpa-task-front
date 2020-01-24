import React, { useCallback } from 'react'
import styled from 'styled-components'
import R from 'ramda'
import { string } from 'prop-types'
import { useQuery } from '@apollo/react-hooks'
import { SENSOR_DATA } from 'graphql/queries'
import { SpinnerWrapper } from 'components/common/Spinner'
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

  const sensorPoints = R.pathOr([], ['sensorData'], data)

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
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Number</TableCell>
              <TableCell align="right">Value</TableCell>
              <TableCell align="right">Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!error &&
              !!sensorPoints.length &&
              sensorPoints.map(({ id, value, timestamp }, index) => (
                <TableRow key={id}>
                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell align="right">{value}</TableCell>
                  <TableCell align="right">{format(timestamp, 'PP')}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Paper>
    </Wrapper>
  )
}

SensorPoints.propTypes = {
  sensorId: string.isRequired
}

export default SensorPoints
