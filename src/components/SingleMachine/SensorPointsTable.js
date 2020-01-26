import React, { useState, useCallback } from 'react'
import { array } from 'prop-types'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel
} from '@material-ui/core'
import { format } from 'date-fns'

export const SORT_DIRECTIONS = {
  ASC: 'asc',
  DESC: 'desc'
}

const sortSensorPoints = (array, sortDirection) => {
  if (sortDirection) {
    return array.sort((a, b) =>
      sortDirection === SORT_DIRECTIONS.ASC
        ? a.timestamp - b.timestamp
        : b.timestamp - a.timestamp
    )
  }

  return array
}

const SensorPointsTable = ({ sensorPoints }) => {
  const [sortDirection, setSortDirection] = useState(null)

  const toggleSortDirection = useCallback(() => {
    const newDirection =
      !sortDirection || sortDirection === SORT_DIRECTIONS.ASC
        ? SORT_DIRECTIONS.DESC
        : SORT_DIRECTIONS.ASC

    setSortDirection(newDirection)
  }, [sortDirection])

  const sensorPointsToShow = sortSensorPoints(sensorPoints, sortDirection)

  return (
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Number</TableCell>
          <TableCell align="right">Value</TableCell>
          <TableCell align="right">
            <TableSortLabel
              active
              direction={sortDirection || SORT_DIRECTIONS.ASC}
              onClick={toggleSortDirection}
              id="date-sort-label"
            >
              Date
            </TableSortLabel>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {!!sensorPointsToShow.length &&
          sensorPointsToShow.map(({ id, value, timestamp }, index) => (
            <TableRow key={id}>
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell align="right">{value}</TableCell>
              <TableCell align="right" data-cell="timestamp">
                {format(timestamp, 'PP')}
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  )
}

SensorPointsTable.propTypes = {
  sensorPoints: array.isRequired
}

export default SensorPointsTable
