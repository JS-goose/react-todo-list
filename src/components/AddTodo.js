import React, { Component } from 'react'

export class AddTodo extends Component {
  render() {
    return (
      <form>
        <input type="text" name="title" placeholder="Add todo item..."/>
        <input type="submit" value="Submit" className="addBtn"/>
      </form>
    )
  }
}

export default AddTodo
