import React from 'react'
import styled from 'styled-components'
import { green, blue } from '@material-ui/core/colors'
import { Card as CardSrc, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

const Card = styled(CardSrc)`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Header = styled.div`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 10px;
`

const Text = styled.div`
  ${({ color }) => color && `color: ${color}`}; 
  ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom}`};
`

const MachineCard = ({ item }) => {
  const { name, lastKnownPosition, id } = item

  return (
    <Card>
      <Header>{name}</Header>
        <Text marginBottom='10px'>
          Last known position:
        </Text>
        <Text color={green[500]}>
          Latitude: {lastKnownPosition.latitude}
        </Text>
        <Text color={blue[500]} marginBottom='20px'>
          Longitude: {lastKnownPosition.longitude}
        </Text>
      <Link to={`/machine/${id}`}>
        <Button color='primary' variant='contained'>
          Sensors Information
        </Button>
      </Link>
    </Card>
  )
}

export default MachineCard
