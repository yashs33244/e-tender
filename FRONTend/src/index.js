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
import NewUser from './views/get-started'
import BidTender from './views/start-bidding'
import CreateTender from './views/create-tender'
import CreateTodo from './views/create-tender'

const App = () => {
  return (
    <Router>
      
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/get-started" component={NewUser} />
        <Route path="/start-bidding" component={BidTender} />
        <Route path="/create-tender" component={CreateTender} />
        <Route path="/create-todo" component={CreateTodo} />
        <Route component={NotFound1} exact path="/not-found" />
        <Route component={Home} exact path="/" />
        <Route component={NotFound1} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
