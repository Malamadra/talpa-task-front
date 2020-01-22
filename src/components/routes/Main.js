import React from 'react'
import MainLayout from 'layouts/MainLayout'
import Spinner from 'components/common/Spinner'
import { MACHINES } from 'graphql/queries'
import { useQuery } from '@apollo/react-hooks'

const Main = () => {
  const { data, loading } = useQuery(MACHINES)

  return (
    <MainLayout>
      <Spinner isLoading={loading}>
        <div>Main</div>
      </Spinner>
    </MainLayout>
  )
}

export default Main
