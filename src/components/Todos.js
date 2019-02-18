import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends Component {

  render() {
    return this.props.todos.map((todo) => (
      <TodoItem todo={todo} key={todo.id} toggleComplete = {this.props.toggleComplete} delItem = {this.props.delItem}/>
    ));
  }
}

//PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  delItem: PropTypes.func.isRequired,
};

export default Todos;
