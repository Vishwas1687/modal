import React from 'react';
import Todo from './Todo.js';
const TodoList=({todos,handleEdit,deleteTodos})=>{
    return (
        <>
        {todos.map((todo,index)=>{
            return(
                <tr>
                   <Todo key={index} todo={todo} handleEdit={handleEdit} deleteTodos={deleteTodos}/>
                </tr>
            )
        })}
        </>
    )
}
export default TodoList