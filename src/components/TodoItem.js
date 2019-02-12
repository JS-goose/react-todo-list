import React, { Component } from 'react'

export class TodoItem extends Component {
  render() {
    return (
      <div>
        <div>Name: {this.props.todo.title}</div>
      </div>
    )
  }
}

export default TodoItem
