import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Here's the title</h1>
      <Todos />
      </div>
    );
  }
}

export default App;