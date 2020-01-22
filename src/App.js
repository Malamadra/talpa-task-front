import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Main from 'components/routes/Main'

const customHistory = createBrowserHistory()

const App = () => (
  <Router history={customHistory}>
    <Switch>
      <Route path="/" exact component={Main} />
      <Route
        path="/sensor/:id"
        exact
        component={() => <div>Sensor data</div>}
      />
      <Route component={() => <div>No route</div>} />
    </Switch>
  </Router>
)

export default App
