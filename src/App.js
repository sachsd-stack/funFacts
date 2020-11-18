import React, { Component } from 'react'
import { Route, BrowserRouter, Switch } from "react-router-dom"
import Navbar from './components/Navbar'
import FunFactOne from './components/FunFactOne'
import FunFactTwo from './components/FunFactTwo'
import FunFactThree from './components/FunFactThree'
import CardDisplay from './components/CardDisplay'
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
              <Route path='/FunFactOne' component={FunFactOne}/>
              <Route path='/FunFactTwo' component={FunFactTwo}/>
              <Route path='/FunFactThree' component={FunFactThree}/>
          </Switch>
          <CardDisplay/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
