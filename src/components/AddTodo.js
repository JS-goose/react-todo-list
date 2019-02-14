import React, { Component } from "react";

export class AddTodo extends Component {
  render() {
    return (
      <form style={{ display: 'flex' }}>
        <input type="text" name="title" placeholder="Add todo item..." style={{flex: '10', padding: '10px'}}/>
        <input type="submit" value="Submit" className="addBtn" style={{flex: '1'}}/>
      </form>
    );
  }
}

export default AddTodo;
