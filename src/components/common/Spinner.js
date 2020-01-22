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

class Spinner extends React.Component {
  static propTypes = {
    isLoading: bool.isRequired,
    children: any.isRequired,
    size: number,
    delay: number
  }

  static defaultProps = {
    size: 70,
    delay: 0
  }

  constructor(props) {
    super(props)

    this.state = {
      canShow: !props.delay
    }
  }

  render() {
    const { canShow } = this.state
    const { isLoading, children, size } = this.props

    return canShow && !isLoading ? (
      children
    ) : (
      <LoaderWrapper>
        <CircularProgress size={size} />
      </LoaderWrapper>
    )
  }

  componentDidUpdate(prevProps) {
    const { isLoading, delay } = this.props
    const { canShow } = this.state

    if (prevProps.isLoading && !isLoading && !!delay && !canShow) {
      setTimeout(() => {
        this.setState({
          canShow: true
        })
      }, delay)
    }
  }
}

export default Spinner
