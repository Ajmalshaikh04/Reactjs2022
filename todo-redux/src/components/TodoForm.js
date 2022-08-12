import React, { useState } from 'react'
import {
    Container,
    FormGroup,
    Input,
    Button,
    Form,
    InputGroup
} from "reactstrap"

import { v4 } from "uuid"

//redux
import { connect } from "react-redux"
import { addTodo } from "../actions/todoaction"


const TodoForm = ({ aadTodo }) => {

    const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        if (title === "") {
            return alert("Plese Add todo task")
        }

        const todo = {
            title,
            id: v4()
        }

        addTodo(todo);

        setTitle("");
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <InputGroup>
                    <Input
                        type='text'
                        name="todo"
                        id="todo"
                        placeholder='Your Next Todo task'
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <Button color='primary'
                        onClick={handleSubmit}
                    >Add Todo</Button>
                </InputGroup>
            </FormGroup>
        </Form>
    )
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    addTodo: todo => {
        dispatch(addTodo(todo))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);