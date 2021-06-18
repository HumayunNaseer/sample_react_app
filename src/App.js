import logo from "./logo.svg";
import "./App.css";
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Footer}  from "./MyComponents/Footer";
import { TodoItem } from "./MyComponents/Todoitem";

function App() {
  return (
    <div>
      <Header/>
      <Todos/>
      <TodoItem/>
      <Footer/>
    </div>
  );
}

export default App;
