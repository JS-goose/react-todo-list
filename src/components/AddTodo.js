import React, { Component } from "react";

export class AddTodo extends Component {
  state = {
    title: "",
  };

  onChange = (event) => {
    this.setState({
        [event.target.name] : event.target.value
    })
  }

  onSubmit = (event) => {
      event.preventDefault();
  }

  render() {
    return (
      <form onSubmit = {this.onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          name="title"
          placeholder="Add todo item..."
          value={this.state.title}
          style={{ flex: "10", padding: "10px" }}
          onChange={this.onChange}
        />
        <input type="submit" value="Submit" className="addBtn" style={{ flex: "1" }} />
      </form>
    );
  }
}

export default AddTodo;
