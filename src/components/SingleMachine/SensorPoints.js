import React from 'react'
import styled from 'styled-components'
import R from 'ramda'
import { useQuery } from '@apollo/react-hooks'
import { SENSOR_DATA } from 'graphql/queries'
import Spinner, { SpinnerWrapper } from 'components/common/Spinner'
import {
  Table,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from '@material-ui/core'

const Wrapper = styled.div`
  margin-bottom: 20px;
  ${SpinnerWrapper} {
    min-height: 200px;
  }
`

const SensorPoints = ({ sensorId }) => {
  const { data, loading, error } = useQuery(SENSOR_DATA, {
    fetchPolicy: 'network-only',
    variables: {
      sensorId
    }
  })

  const sensorPoints = R.pathOr([], ['sensorData'], data)

  return (
    <Wrapper>
      <Spinner isLoading={loading} delay={500}>
        {!error && !!sensorPoints.length && (
          <Paper>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Number</TableCell>
                  <TableCell align='right'>Value</TableCell>
                  <TableCell align='right'>Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {sensorPoints.map(({ id, value, timestamp }, index) => (
                  <TableRow key={id}>
                    <TableCell component="th" scope="row">
                      {index + 1}
                    </TableCell>
                    <TableCell align='right'>{value}</TableCell>
                    <TableCell align='right'>{timestamp}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        )}
      </Spinner>
    </Wrapper>
  )
}

export default SensorPoints
