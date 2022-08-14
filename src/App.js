import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import { Todos } from "./Components/Todos";
import AddTodo  from "./Components/AddTodo";

function App() {

  const onDelete = (todo) => {
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
  }

  const addTodo = (title, desc) =>{
    let sno;
    if(todos.length===0){
      sno=0;
    }
    else{
      sno = todos[todos.length-1].sno +1
    }

    const newTodo = {
      sno: sno,
      title:title,
      desc:desc,
    }
    setTodos([...todos, newTodo])
  }

  const [todos, setTodos] = useState([]);

  return (
    <>
      <Header title="Todo App" searchBar={false} />
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete} />
    </>
  );
}

export default App;
