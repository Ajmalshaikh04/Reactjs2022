import React,{useState,useEffect} from 'react'
import {Container} from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

import Todos from './Components/Todos'
import TodoForm from './Components/TodoForm'

const App = () => {

  const [savedTodos,setSavedTodos]=useState(localStorage.getItem("todos"));

  const [todos, setTodos] = useState(savedTodos?JSON.parse(savedTodos):[]);
  // const [todos,setTodos]=useState([])

  useEffect(()=>{
    const localTodos= localStorage.getItem("todos");
    if(localTodos){
      setTodos(JSON.parse(localTodos));
    }
  },[]);

  const addTodos = async todo => {
    setTodos([...todos,todo])
  }

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos]);

const markComplete= id => {
  setTodos(todos.filter(t => t.id!==id));
}

  return (
    <Container fluid>
      <h1>Todos With LocalStorage</h1>
      <Todos todos={todos} markComplete={markComplete} />
      <TodoForm addTodos={addTodos}/>
    </Container>
  )
}

export default App