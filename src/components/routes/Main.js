import React from 'react'
import MainLayout from 'layouts/MainLayout'
import { graphql } from 'graphql'
import { MACHINES } from 'graphql/queries'
import { useQuery } from '@apollo/react-hooks'

const Main = () => {
  const { data } = useQuery(MACHINES)
  console.log({
    data
  })

  return <MainLayout>Main</MainLayout>
}

export default Main

