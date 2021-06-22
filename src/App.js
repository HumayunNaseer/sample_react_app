// import logo from "./logo.svg";
import "./App.css";
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Footer}  from "./MyComponents/Footer";
import React, {useState} from "react";

function App() {

  const onDelete = (todo) => {
    console.log({todo});
    
    setTodos(todos.filter((e) => {
      return e!== todo; 
    }))
  }

   const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to office",
      desc: "ye need to go to office to job  done"
    },
    {
      sno: 2,
      title: "Go to market",
      desc: "ye need to go to market to job  done"
    },
    {
      sno: 3,
      title: "Go to home",
      desc: "ye need to go to home to job  done"
    }
  ]);
  return (
    <div>
      <Header title= "My-Todos-list" pricing = {true}/>
      <Todos todos = {todos} onDelete = {onDelete}/>
      <Footer/>
    </div>
  );
}

export default App;
