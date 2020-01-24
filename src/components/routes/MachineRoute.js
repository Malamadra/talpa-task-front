import React from 'react'
import R from 'ramda'
import MainLayout from 'layouts/MainLayout'
import { ContentWrapper } from 'components/UI'
import { useQuery } from '@apollo/react-hooks'
import { MACHINE } from 'graphql/queries'
import Spinner from 'components/common/Spinner'
import SingleMachine from 'components/SingleMachine'

const MachineRoute = ({ match }) => {
  const id = R.path(['params', 'id'], match)
  const { data, loading, error } = useQuery(MACHINE, {
    fetchPolicy: 'network-only',
    variables: { id }
  })

  return (
    <MainLayout>
      <ContentWrapper>
        <Spinner isLoading={loading} delay={500}>
          <SingleMachine data={data} error={error} />
        </Spinner>
      </ContentWrapper>
    </MainLayout>
  )
}

export default MachineRoute
