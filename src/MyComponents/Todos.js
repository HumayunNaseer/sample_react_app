import React from "react";
import { TodoItem } from "./Todoitem";

export const Todos = (props) => {
  //  console.log("*****" , props)
  //  const todo1 = props.todos.map(todo => <TodoItem todo={todo} ></TodoItem> );
  return (
    <div className="container">
      <h3 className="my-3"> Todos List</h3>

      {props.todos.length === 0
        ? "No todos to display"
        : props.todos.map((todo) => {
            return (
              <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
            );
          })}
    </div>
  );
};
