import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel
} from '@material-ui/core'
import { format } from 'date-fns'

const SensorPointsTable = ({ sensorPoints }) => {
  return (
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Number</TableCell>
          <TableCell align="right">Value</TableCell>
          <TableCell align="right">
            <TableSortLabel
              active
              direction='asc'
              onClick={() => {}}
            >
              Date
            </TableSortLabel>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {!!sensorPoints.length &&
          sensorPoints.map(({ id, value, timestamp }, index) => (
            <TableRow key={id}>
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell align="right">{value}</TableCell>
              <TableCell align="right">
                {format(timestamp, 'PP')}
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  )
}

export default SensorPointsTable
