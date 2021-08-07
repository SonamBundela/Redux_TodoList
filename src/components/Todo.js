import React from 'react';



const Todo = ({ onClick, completed, text }) => (
  <li>

    <span style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}>
      <input type="checkbox"
        onClick={onClick}
      />{text}
    </span>

  </li>
);

export default Todo;

