import React,{useState} from 'react'
import {
    Form,
    Input,
    InputGroup,
    Button,
} from "reactstrap"
import {v4} from "uuid"

const TodoForm = ({addTodos}) => {
    const [todoString,setTodoString]=useState("");

    const handleSubmit= e =>{
        e.preventDefault()
        if(todoString===""){
            return alert("Please Enter Some Value");
        }
        const todo={
            todoString, //old method is title:todoString 
            id:v4()
        };
        //this is method n we can pass as props
        addTodos(todo);
        setTodoString("");
    };
return (
    <Form onSubmit={handleSubmit}>
            <InputGroup>
            <Input
            type='text'
            name='todo'
            id='todo'
            placeholder='Enter todo task'
            value={todoString}
            onChange={e=>setTodoString(e.target.value)}
            />

            <Button           
            color='primary'
            >Add Todos</Button>
            </InputGroup>
    </Form>
)
}

export default TodoForm