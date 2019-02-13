import React, { Component } from "react";
import Todos from "./components/Todos";
import "./App.css";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Buy Wand",
        complete: false,
      },
      {
        id: 2,
        title: "Buy Broom",
        complete: false,
      },
      {
        id: 3,
        title: "Defeat Voldemort",
        complete: false,
      },
    ],
  };

  // Toggle todo item as complete/incomplete
  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (id === todo.id) {
          todo.complete = !todo.complete;
        }
        return todo;
      }),
    });
  };

  render() {
    return (
      <div className="App" style={todoStyle}>
        <h1 style={titleStyle}>React Todo List</h1>
        <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} />
      </div>
    );
  }
}

const todoStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '560px',
  margin: 'auto',
  marginTop: '100px',
  height: '600px',
  borderRadius: '10px',
  boxShadow: '1px 1px 3px gray'
}

const titleStyle = {
  textAlign: 'center',
  padding: '5px 0',
  borderBottom: '1px solid gray',
  color: '#0180ff',
}
export default App;
