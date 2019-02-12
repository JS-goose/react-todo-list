import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    return {
     backgroundColor: '#f4f4f4',
     padding: '10px',
     borderBottom: '1px solid black',
     color: this.props.todo.complete ? 'red' : 'black',
     textDecoration: this.props.todo.complete ? 'line-through' : "none",
    }
  };

  render() {
    return (
      <div>
        <input type="checkbox" onChange = {this.makeComplete)/>
        <p style={this.getStyle()}>Name: {this.props.todo.title}</p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default TodoItem;
