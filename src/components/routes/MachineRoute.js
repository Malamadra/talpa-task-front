import React from 'react'
import { get } from 'lodash'
import styled from 'styled-components'
import { object } from 'prop-types'
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
  const id = get(match, 'params.id')
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

MachineRoute.propTypes = {
  match: object.isRequired
}

export default MachineRoute
