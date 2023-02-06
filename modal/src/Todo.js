import React from 'react';
import './Todo.css';
const Todo=({todo})=>{
     return (
        <>
        <td>{todo.name}</td>
        <td>{todo.description}</td>
        <td>
            <button className='delete-btn'>Delete</button>
            <button className='edit-btn'>Edit</button>
        </td>
        </>
     )
}

export default Todo