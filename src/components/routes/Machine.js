import React from 'react'
import R from 'ramda'
import styled from 'styled-components'
import MainLayout from 'layouts/MainLayout'
import { ContentWrapper } from 'components/UI'
import { useQuery } from '@apollo/react-hooks'
import { MACHINE } from 'graphql/queries'
import Spinner from 'components/common/Spinner'
import Error from 'components/common/Error'
import SensorListItem from 'components/SensorListItem'
import { List, ListItem , ListItemIcon , ListItemText , Collapse } from '@material-ui/core'

import {
  StarBorder } from '@material-ui/icons'

const Title = styled.div`
  text-align: center;
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 24px;
`

const Machine = ({ match }) => {
  const id = R.path(['params', 'id'], match)
  const { data, loading, error } = useQuery(MACHINE, { fetchPolicy: 'network-only', variables: { id } })
  const machineName = R.path(['machine', 'name'], data)
  const sensorDataPoints = R.pathOr([], ['machine', 'sensors'], data)

  return (
    <MainLayout>
      <ContentWrapper>
        <Spinner isLoading={loading} delay={500}>
          {!!error && <Error text={error.message}/>}
          {!!machineName && <Title>Sensors of {machineName}:</Title>}
          {!!sensorDataPoints.length &&
          <List component="nav">
            {sensorDataPoints.map(item => (
              <SensorListItem key={item.id} item={item}/>
            ))}
          </List>}
        </Spinner>
      </ContentWrapper>
    </MainLayout>
  )
}

export default Machine
