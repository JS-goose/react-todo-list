import React from "react";

export default function About() {
  return (
    <div style={containerStyle}>
      <h1>About</h1>
      <p>
        This project was built with nothing but React, React Router, and Axios. The todos in the
        list are brought in via{" "}
        <a href="https://jsonplaceholder.typicode.com/" target="_blank" rel="noopener noreferrer">
          JSONPlaceholder
        </a>
        .
      </p>
      <hr />
      <p>
        If you wish to use this project yourself you'll need to fork or download the repository.
        Once on your local machine you'll need to run <code>npm install</code> in the project
        directory. If you wish to use this as a production build you'll need to run{" "}
        <code>npm run build</code> in the project directory on your local machine.
      </p>
    </div>
  );
}

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    padding: '10px',
    lineHeight: '1.6',
}