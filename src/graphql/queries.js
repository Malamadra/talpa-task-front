import gql from 'graphql-tag'

export const MACHINES = gql`
  query machines {
    machines {
      id
      name
      lastKnownPosition {
        latitude
        longitude
      }
    }
  }
`

export const MACHINE = gql`
  query machine($id: ID!) {
    machine(id: $id) {
      id
      name
      sensors {
        id
        name
      }
    }
  }
`

export const SENSOR_DATA = gql`
  query sensorData($sensorId: ID!, $from: Float, $to: Float) {
    sensorData(sensorId: $sensorId, from: $from, to: $to) {
      id
      timestamp
      value
    }
  }
`
