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
  color: "#0180ff",
};

export default Header;
