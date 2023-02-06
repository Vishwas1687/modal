import React from 'react';

const Input=({inputForm,label,handleAddTodo})=>{
     return (
        <label>
           {label}
       <input name={inputForm.name} placeholder={inputForm.placeholder} type={inputForm.type} onChange={(event)=>handleAddTodo(event)}/>
       </label>
     )
}

export default Input