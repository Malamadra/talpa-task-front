import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'

const customHistory = createBrowserHistory()

const App = () => (
  <Router history={customHistory}>
    <Switch>
      <Route path="/" exact component={() => <div>Main</div>} />
      <Route path="/sensor/:id" exact component={() => <div>Sensor data</div>} />
      <Route component={() => <div>No route</div>} />
    </Switch>
  </Router>
)

export default App
