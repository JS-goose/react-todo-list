import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      backgroundColor: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px solid black",
      color: this.props.todo.complete ? "red" : "black",
      textDecoration: this.props.todo.complete ? "line-through" : "none",
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.toggleComplete.bind(this, id)} /> {title}
          <button onClick={this.props.delItem.bind(this, id)} style={delBtn}>
          <i className="fas fa-trash-alt"></i>
          </button>
        </p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

const delBtn = {
  backgroundColor: "white",
  color: "red",
  fontWeight: 900,
  padding: "7px 10px",
  border: "none",
  borderRadius: "50%",
  float: "right",
  boxShadow: "1px 1px 3px gray",
  marginTop: "-3px",
  cursor: "pointer",
};

export default TodoItem;
