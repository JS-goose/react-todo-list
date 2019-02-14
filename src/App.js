import React, { Component } from "react";
import Todos from "./components/Todos";
import "./App.css";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";

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
        title: "Go to potions class",
        complete: false,
      },
      {
        id: 4,
        title: "Learn dark arts defense",
        complete: false,
      },
      {
        id: 5,
        title: "Meet Hagrid for lunch",
        complete: false,
      },
      {
        id: 6,
        title: "Go to Quidditch practice",
        complete: false,
      },
      {
        id: 7,
        title: "Find Hedwig",
        complete: false,
      },
      {
        id: 8,
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

  // Delets a specific todo item
  delItem = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  // Adds a todo item
  addTodo = (title) => {
    console.log(title);
  }

  render() {
    return (
      <div className="App" style={todoStyle}>
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo}/>
          <Todos
            todos={this.state.todos}
            toggleComplete={this.toggleComplete}
            delItem={this.delItem}
          />
        </div>
      </div>
    );
  }
}

const todoStyle = {
  display: "flex",
  flexDirection: "column",
  width: "560px",
  margin: "auto",
  marginTop: "100px",
  height: "600px",
  borderRadius: "10px",
  boxShadow: "1px 1px 3px gray",
};

export default App;
