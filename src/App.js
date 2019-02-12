import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Buy Wand',
        complete: false
      },
      {
        id: 2,
        title: 'Buy Broom',
        complete: false
      },
      {
        id: 3,
        title: 'Defeat Voldemort',
        complete: false
      },
    ]
  }
  render() {
    return (
      <div className="App">
      <h1>Here's the title</h1>
      <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;