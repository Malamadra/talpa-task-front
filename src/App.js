import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import MainRoute from 'components/routes/MainRoute'
import MachineRoute from 'components/routes/MachineRoute'
import NoPageRoute from 'components/routes/NoPageRoute'

const customHistory = createBrowserHistory()

const App = () => (
  <Router history={customHistory}>
    <Switch>
      <Route path="/" exact component={MainRoute} />
      <Route path="/machine/:id" exact component={MachineRoute} />
      <Route component={NoPageRoute} />
    </Switch>
  </Router>
)

export default App
