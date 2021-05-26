import './index.css'
import React, { Component } from 'react';
import {
  Switch,
  Route,
  Redirect,
  Link
} from 'react-router-dom';

export class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to='/page1'>Pagina 1</Link>
          <Link to='/page2'>Pagina 2</Link>
        </nav>

        <Switch>
          <Route exact path="/" render={() => (
          <Redirect to="/page1"/>
          )}/>
          <Route exact path='/page1' component={Page1}></Route>
          <Route exact path='/page2' component={Page2}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </div>
    )
  }
}

// No tienes que hacer nada por debajo de esta linea
//==================================================


export const Page1 = (props) => {
  return (
    <h1>Pagina 1</h1>
  )
}

export const Page2 = (props) => {
  return (
    <h1>Pagina 2</h1>
  )
}

export const NotFound = (props) => {
  return (
    <h1>Pagina no encontrada</h1>
  )
}
