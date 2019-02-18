import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Todos from "./components/Todos";
import "./App.css";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import uuid from "uuid";

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: "Buy Wand",
        complete: false,
      },
      {
        id: uuid.v4(),
        title: "Buy Broom",
        complete: false,
      },
      {
        id: uuid.v4(),
        title: "Go to potions class",
        complete: false,
      },
      {
        id: uuid.v4(),
        title: "Learn dark arts defense",
        complete: false,
      },
      {
        id: uuid.v4(),
        title: "Meet Hagrid for lunch",
        complete: false,
      },
      {
        id: uuid.v4(),
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
    const newItem = {
      id: uuid.v4(),
      title,
      complete: false,
    };
    // copy's existing todos and then adds the new one to state
    this.setState({ todos: [...this.state.todos, newItem] });
  };

  render() {
    return (
      <Router>
        <div className="App" style={todoStyle}>
          <div className="container">
            <Header />
            <AddTodo addTodo={this.addTodo} />
            <Todos
              todos={this.state.todos}
              toggleComplete={this.toggleComplete}
              delItem={this.delItem}
            />
          </div>
        </div>
      </Router>
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
