import React from 'react'
import R from 'ramda'
import { Grid } from '@material-ui/core'
import { useQuery } from '@apollo/react-hooks'
import styled from 'styled-components'
import MainLayout from 'layouts/MainLayout'
import { MACHINES } from 'graphql/queries'
import Error from 'components/common/Error'
import Spinner from 'components/common/Spinner'
import MachineCard from 'components/MachineCard'

const Content = styled.div`
  padding: 40px 0;
`

const Main = () => {
  const { data, loading, error } = useQuery(MACHINES, { fetchPolicy: 'network-only' })
  const machines = R.pathOr([], ['machines'], data)

  return (
    <MainLayout>
      <Spinner isLoading={loading} delay={1000}>
        <Content>
          {!!error && <Error text={error.message}/>}
          {!!machines.length && (
            <Grid container spacing={4}>
              {machines.map(item => (
                <Grid key={item.id} item lg={4} md={4} sm={6} xs={12}>
                  <MachineCard item={item} />
                </Grid>
              ))}
            </Grid>
          )}
        </Content>
      </Spinner>
    </MainLayout>
  )
}

export default Main
