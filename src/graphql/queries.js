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
