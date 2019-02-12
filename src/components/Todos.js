import React, { Component } from 'react';

class Todos extends Component {
  render() {
    return this.props.todos.map((todo) => (
         <div>Name: {todo.title}</div>
    ))
  }
}

export default Todos;