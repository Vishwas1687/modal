import './App.css';
import {useState,useEffect} from 'react';
import TodoList from './TodoList.js';
import {nanoid} from 'nanoid';
import Input from './Input.js';
import Modal from './Modal.js';
import {FaTimes} from 'react-icons/fa';

// const LOCAL_STORAGE_KEY='todo.data';
function App() {
  const [todos,setTodos]=useState([{
    id:nanoid(),
    name:'sleep',
    description:'sleep after 9pm'
  },
{
  id:nanoid(),
  name:'work',
  description:'lunch at 12pm'
}])
   
  const [addFormTodo,setAddFormTodo]=useState({
    name:'',
    description:''
  })

  const inputs=[
    {name:"name",
    required:"required",
    type:"text",
     placeholder:"Todo Name"
    },
    {
      name:"description",
    required:"required",
    type:"text",
     placeholder:"Todo Description"
    }
  ]
  // useEffect(()=>{
  //   const data=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  //    if(data) setTodos(data)
  // },[])
   
  // useEffect(()=>{
  //   localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(todos))
  // },[todos])

   const [editTodo,setEditTodo]=useState(false)
    const [formData,setFormData]=useState({
        id:'',
        name:'',
        description:''
    })

   const [editId,setEditId]=useState(null)



  const handleAddTodo=(event)=>{
    event.preventDefault()
      const fieldname=event.target.getAttribute("name");
      const fieldvalue=event.target.value;
      const newTodo={...addFormTodo}
      newTodo[fieldname]=fieldvalue
      setAddFormTodo(newTodo)
  }

  const handleFormSubmit=(event)=>{
    event.preventDefault()
    const newTodo={
      id:nanoid(),
      name:addFormTodo.name,
      description:addFormTodo.description
    }
    const newTodos=[...todos,newTodo]
    setTodos(newTodos)
  }

  const deleteTodos=(id)=>{
    const newTodos=todos.filter((todo)=>todo.id!==id)
    setTodos(newTodos)
  }
  



      const handleEdit=(id)=>{
         setEditTodo(true)
         setEditId(id)
         setFormData({...formData,[formData.id]:id})
    }

    const handleEditTodo=(event)=>{
          event.preventDefault()
          const fieldname=event.target.name
          const fieldvalue=event.target.value
          const changedTodo={...formData}
          changedTodo[fieldname]=fieldvalue
          setFormData(changedTodo)
    }
     
    const handleModalSubmit=(event)=>{
         event.preventDefault()
         const index=todos.findIndex((todoIndex)=>todoIndex.id===editId)
         const newTodos=[...todos]
         newTodos[index]=formData
         setTodos(newTodos)
         setEditTodo(false)
         setEditId(null)
    }
    
    const handleModalClose=()=>{
          setEditTodo(false)
          setEditId(null)
    }



  return (
     <div className="app-container">
        <table>
          <thead>
            <tr>
              <th>Todo name</th>
              <th>Todo description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <TodoList handleEdit={handleEdit} todos={todos}  deleteTodos={deleteTodos}/>
          </tbody>
        </table>
        <form onSubmit={(event)=>handleFormSubmit(event)}>
        {
          inputs.map((inputForm,index)=>{
             return <Input key={index} label={inputForm.name} inputForm={inputForm} handleAddTodo={handleAddTodo}/>
          })
        }
        <button className='submit-btn' type="submit">Add</button>
        </form>

         {editTodo && <Modal handleModalClose={handleModalClose}>
            <form onSubmit={(event)=>handleModalSubmit(event)}>
            {inputs.map((input,index)=>{
                return <Input key={index} inputForm={input} label={input.name} handleAddTodo={handleEditTodo}/>
            })}
            <button className="modal-btn" type="submit">Update</button>
            </form>
            </Modal>}

     </div>
  );
}

export default App;
