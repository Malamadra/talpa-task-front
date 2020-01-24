import React, { useState, useCallback } from 'react'
import { object } from 'prop-types'
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse
} from '@material-ui/core'
import { Inbox, ExpandLess, ExpandMore } from '@material-ui/icons'
import SensorPoints from './SensorPoints'

const SensorListItem = ({ item }) => {
  const [isOpen, setOpen] = useState(false)
  const toggleOpen = useCallback(() => setOpen(!isOpen), [isOpen])

  return (
    <>
      <ListItem button onClick={toggleOpen}>
        <ListItemIcon>
          <Inbox />
        </ListItemIcon>
        <ListItemText primary={item.name} />
        {isOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <SensorPoints sensorId={item.id} />
      </Collapse>
    </>
  )
}

SensorListItem.propTypes = {
  item: object.isRequired
}

export default SensorListItem
