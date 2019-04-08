import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import './App.css';
import Home from './Home'
import History from './History';


class App extends Component {
    render() {
        return (
          <BrowserRouter>
          <div>
            <NavLink exact to="/" activeClassName="change"> Accueil </NavLink>
            <NavLink exact to="/notre-histoire" activeClassName="change"> Histoire </NavLink>

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/notre-histoire" component={History} />
            </Switch>
          </div>
        </BrowserRouter>
        );
    }
}

export default App;