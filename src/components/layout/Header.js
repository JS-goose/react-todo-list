import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1 style={titleStyle}>React Todo List</h1>
      <Link to="/" style={linkStyle}>Home</Link>|<Link to="/about" style={linkStyle}>About</Link>
    </header>
  );
}

const titleStyle = {
  textAlign: "center",
  padding: "5px 0",
  borderBottom: "1px solid gray",
  borderTopLeftRadius: "5px",
  borderTopRightRadius: "5px",
  color: "#0180ff",
  backgroundColor: "#333",
};

const linkStyle = {
  padding: '5px',
  fontWeight: '700',
}

export default Header;
