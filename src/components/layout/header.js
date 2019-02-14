import React from "react";

function Header() {
  return (
    <header>
      <h1 style = {titleStyle}>React Todo List</h1>
    </header>
  );
}

const titleStyle = {
  textAlign: "center",
  padding: "5px 0",
  borderBottom: "1px solid gray",
  borderTopLeftRadius: '5px',
  borderTopRightRadius: '5px',
  color: "#0180ff",
  backgroundColor: '#333',
};

export default Header;
