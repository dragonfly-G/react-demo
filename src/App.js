import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Pagehome from './page/Pagehome'
import Pageone from './page/Pageone'
import Pagetwo from './page/Pagetwo'
import Pagethree from './page/Pagethree'

import './App.css';

class App extends Component {
  render() {
    let LayoutRouter = (
      <Pagehome>
        <Switch>
          <Route exact path='/Pageone' component={Pageone} />
          <Route exact path='/Pagetwo' component={Pagetwo} />
          <Route exact path='/Pagethree' component={Pagethree} />
        </Switch>
      </Pagehome>
    )
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Pagehome} />
          <Route path="/" render={props => LayoutRouter}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
