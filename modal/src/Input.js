import React from 'react';

const Input=({inputForm,label,value,handleAddTodo})=>{
     return (
        <label>
           <span className="label">{label}</span>
       <input name={inputForm.name} value={value} placeholder={inputForm.placeholder} type={inputForm.type} onChange={(event)=>handleAddTodo(event)}/>
       </label>
     )
}

export default Input