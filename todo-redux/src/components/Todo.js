import React from 'react'
import { ListGroup, ListGroupItem } from "reactstrap"
import { FaCheckDouble } from "react-icons/fa"

import { connect } from "react-redux"
import { removeTodo } from "../actions/todoaction"


const Todo = ({ todos, markComplete }) => {
    return (
        <ListGroup>
            {todos.map((t) => (
                <ListGroupItem key={t.id}>
                    {t.title}
                    <span
                        onClick={() => markComplete(t.id)}
                        className='ms-end'>
                        <FaCheckDouble />
                    </span>
                </ListGroupItem>
            ))}
        </ListGroup>
    )
}

const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = dispatch => ({
    markComplete: id => {
        dispatch(removeTodo(id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Todo)