import React from 'react'
import { get } from 'lodash'
import { Grid } from '@material-ui/core'
import { useQuery } from '@apollo/react-hooks'
import MainLayout from 'layouts/MainLayout'
import { MACHINES } from 'graphql/queries'
import Error from 'components/common/Error'
import Spinner from 'components/common/Spinner'
import MachineCard from 'components/MachineCard'
import { ContentWrapper } from 'components/UI'

const MainRoute = () => {
  const { data, loading, error } = useQuery(MACHINES, {
    fetchPolicy: 'network-only'
  })

  const machines = get(data, 'machines') || []

  return (
    <MainLayout>
      <Spinner isLoading={loading} delay={1000}>
        <ContentWrapper>
          {!!error && <Error text={error.message} />}
          {!!machines.length && (
            <Grid container spacing={4}>
              {machines.map(item => (
                <Grid key={item.id} item lg={4} md={4} sm={6} xs={12}>
                  <MachineCard item={item} />
                </Grid>
              ))}
            </Grid>
          )}
        </ContentWrapper>
      </Spinner>
    </MainLayout>
  )
}

export default MainRoute
