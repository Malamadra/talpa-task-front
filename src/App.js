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
        path="/machine/:id"
        exact
        component={() => <div>Machine</div>}
      />
      <Route component={() => <div>No route</div>} />
    </Switch>
  </Router>
)

export default App
