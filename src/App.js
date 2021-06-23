// import logo from "./logo.svg";
import "./App.css";
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import AddTodo from "./MyComponents/AddTodo";
import React, { useState, useEffect } from "react";

function App() {
  let initTodo;

  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
    console.log("******" , initTodo)

  }

  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    console.log("im adding this todo func", title, desc);

    let sno;

    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };

    setTodos([...todos, myTodo]);
    console.log("settodos" ,myTodo);

  };

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    console.log("use effect");
     localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <div>
      <Header title="My-Todos-list" pricing={true} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </div>
  );
}

export default App;
