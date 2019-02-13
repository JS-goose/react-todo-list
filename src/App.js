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

  makeComplete = (id) => {
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
      <div className="App">
        <h1>React Todo List</h1>
        <Todos todos={this.state.todos} makeComplete={this.makeComplete} />
      </div>
    );
  }
}

export default App;
