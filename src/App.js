import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './Timer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1 id="title"> What's Time is it ? </h1>
          <Timer/>
        </header>
        
      </div>
    );
  }
}

export default App;
