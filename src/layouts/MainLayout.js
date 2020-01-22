import React from 'react'
import { grey } from '@material-ui/core/colors'
import { any } from 'prop-types'
import styled from 'styled-components'
import Header from 'components/Header'
import { Container } from 'components/UI'

const MainLayoutWrapper = styled.div`
  min-width: 300px;
`

const ContentWrapper = styled.div`
  background: ${grey[200]};
  min-height: calc(100vh - 65px);
`

const MainLayout = ({ children }) => (
  <MainLayoutWrapper>
    <Header />
    <ContentWrapper>
      <Container>{children}</Container>
    </ContentWrapper>
  </MainLayoutWrapper>
)

MainLayout.propTypes = {
  children: any
}

export default MainLayout
