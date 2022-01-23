import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ExampleComponent } from './components/ExampleComponent'
import HomePage from './components/HomePage.js/HomePage'
import { ExampleContainer } from './containers/ExampleContainer'
import { WithErrors } from './hocs/WithErrors'


export const App = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/exampleComponent" component={ExampleComponent} />
  </Switch>
)

export default WithErrors(App)

