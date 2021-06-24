import React from "react";

export const TodoItem = ({todo, onDelete }) => {
  //   const {title, desc} = todo
  return (
    <div>
      <h5>{todo.title}</h5>
      <p>{todo.sno}</p>

      <p>{todo.desc}</p>

      <button className="btn- btn-sm btn-danger" onClick = {() => {onDelete(todo)}}>Delete</button>
      <hr></hr>
    </div>
  );
};
