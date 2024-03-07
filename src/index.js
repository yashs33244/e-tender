import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import NotFound1 from './views/not-found'
import Home from './views/home'
// import HomeHeader from './components/homeHeader'
import Login from './views/login'
import Register from './views/register'


const App = () => {
  return (
    <Router>
      
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route component={NotFound1} exact path="/not-found" />
        <Route component={Home} exact path="/" />
        <Route component={NotFound1} path="**" />
        
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
