import React, { Component } from 'react';
import Pagehome from './page/Pagehome'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Pagehome />
        <header>
          <h1>
            Edit <code>开启项目</code> and save to reload. Learn React
          </h1>
        </header>
      </div>
    );
  }
}

export default App;
