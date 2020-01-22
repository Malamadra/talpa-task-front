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
