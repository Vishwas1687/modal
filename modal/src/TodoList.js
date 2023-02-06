import React from 'react';
import Todo from './Todo.js';
const TodoList=({todos})=>{
    return (
        <>
        {todos.map((todo)=>{
            return(
                <tr>
                   <Todo key={todo.id} todo={todo}/>
                </tr>
            )
        })}
        </>
    )
}
export default TodoList