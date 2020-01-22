import React from 'react'
import { blue } from '@material-ui/core/colors'
import styled from 'styled-components'
import { Container } from 'components/UI'
import LogoImage from 'static/logo.png'

const HeaderWrapper = styled.div`
  background: ${blue[300]};
`

const HeaderContent = styled.div`
  min-height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Logo = styled.img`
  width: 120px;
  height: 50px;
`

const Header = () => (
  <HeaderWrapper>
    <Container>
      <HeaderContent>
        <Logo src={LogoImage} alt="" />
      </HeaderContent>
    </Container>
  </HeaderWrapper>
)

export default Header
