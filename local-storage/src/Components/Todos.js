import React from 'react'
import {ListGroup, ListGroupItem} from "reactstrap"
import {FaCheckDouble} from "react-icons/fa"

const Todos = ({todos,markComplete}) => {
  return (
    <ListGroup className='mt-5 mb-2 items'>
        {todos.map(t=>(
            <ListGroupItem key={t.id}>
                {t.todoString}
                <span
                className='float-end'
                onClick={()=>markComplete(t.id)}
                ><FaCheckDouble /></span>
            </ListGroupItem>
        ))}
    </ListGroup>
  )
}

export default Todos