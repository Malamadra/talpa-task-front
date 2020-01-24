import React from 'react'
import R from 'ramda'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
import { ArrowBack } from '@material-ui/icons'
import { useQuery } from '@apollo/react-hooks'
import { MACHINE } from 'graphql/queries'
import MainLayout from 'layouts/MainLayout'
import { ContentWrapper } from 'components/UI'
import Spinner from 'components/common/Spinner'
import SingleMachine from 'components/SingleMachine'

const ButtonContainer = styled.div`
  margin-bottom: 15px;
`

const MachineRoute = ({ match }) => {
  const id = R.path(['params', 'id'], match)
  const { data, loading, error } = useQuery(MACHINE, {
    fetchPolicy: 'network-only',
    variables: { id }
  })

  return (
    <MainLayout>
      <ContentWrapper>
        <ButtonContainer>
          <Link to="/">
            <Button color="primary">
              <ArrowBack />
              Back to the main page
            </Button>
          </Link>
        </ButtonContainer>
        <Spinner isLoading={loading} delay={500}>
          <SingleMachine data={data} error={error} />
        </Spinner>
      </ContentWrapper>
    </MainLayout>
  )
}

export default MachineRoute
