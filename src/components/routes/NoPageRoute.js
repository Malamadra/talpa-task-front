import React from 'react'
import { grey, red } from '@material-ui/core/colors'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${grey[100]};
  min-width: 300px;
`

const Text = styled.div`
  color: ${red[300]};
  font-weight: 600;
  font-size: 22px;
  margin-bottom: 15px;
`

const NoPageRoute = () => (
  <Wrapper>
    <div>
      <Text>Page doesn't exist (</Text>
      <div>
        <Link to="/">
          <Button variant="contained" color="primary">
            Go to main page
          </Button>
        </Link>
      </div>
    </div>
  </Wrapper>
)

export default NoPageRoute
