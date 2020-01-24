import React, { useCallback } from 'react'
import styled from 'styled-components'
import { string } from 'prop-types'
import { red } from '@material-ui/core/colors'
import { Button } from '@material-ui/core'

const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ErrorMessage = styled.div`
  font-size: 24px;
  color: ${red[400]};
  margin-bottom: 10px;
`

const Error = ({ text }) => {
  const handleReload = useCallback(() => document.location.reload())

  return (
    <ErrorWrapper>
      <ErrorMessage>Ooops, error has happened {text}</ErrorMessage>
      <Button variant="contained" onClick={handleReload}>
        Reload the page
      </Button>
    </ErrorWrapper>
  )
}

Error.propTypes = {
  text: string
}

Error.defaultProps = {
  text: ''
}

export default Error
