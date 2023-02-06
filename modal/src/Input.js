import React from 'react';

const Input=({inputForm,label,value,handleAddTodo})=>{
     return (
        <label>
           {label}
       <input name={inputForm.name} placeholder={inputForm.placeholder} type={inputForm.type} value={value} onChange={(event)=>handleAddTodo(event)}/>
       </label>
     )
}

export default Input