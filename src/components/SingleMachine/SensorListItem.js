import React from 'react'
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { Inbox } from '@material-ui/icons'

const SensorListItem = () => {
  return (
    <ListItem button>
      <ListItemIcon>
        <Inbox />
      </ListItemIcon>
      <ListItemText primary="Inbox" />
    </ListItem>
  )
}

export default SensorListItem
