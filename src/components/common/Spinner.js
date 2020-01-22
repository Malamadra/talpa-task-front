import React from 'react'
import { bool, any, number } from 'prop-types'
import styled from 'styled-components'
import CircularProgress from '@material-ui/core/CircularProgress'

const LoaderWrapper = styled.div`
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Spinner = ({ isLoading, children, size }) =>
  isLoading ? (
    <LoaderWrapper>
      <CircularProgress size={size} />
    </LoaderWrapper>
  ) : (
    children
  )

Spinner.propTypes = {
  isLoading: bool.isRequired,
  children: any.isRequired,
  size:number
}

Spinner.defaultProps = {
  size: 70
}

export default Spinner
