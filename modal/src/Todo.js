import React,{useState} from 'react';
import Input from './Input.js';
import Modal from './Modal.js';

import './Todo.css';
const Todo=({todo,deleteTodos,handleEdit})=>{

     return (
        <>
        <td>{todo.name}</td>
        <td>{todo.description}</td>
        <td>
            <button className='delete-btn' onClick={()=>deleteTodos(todo.id)}>Delete</button>
            <button className='edit-btn' onClick={()=>handleEdit(todo.id,todo)}>Edit</button>
        </td>
        </>
     )
}

export default Todo