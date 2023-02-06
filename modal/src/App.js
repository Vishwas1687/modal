import './App.css';
import {useState,useEffect} from 'react';
import TodoList from './TodoList.js';
import {nanoid} from 'nanoid';
import {FaTimes} from 'react-icons/fa';

const LOCAL_STORAGE_KEY='todo.data';
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

  const inputs=
  useEffect(()=>{
    const data=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
     if(data)
     setTodos(data)
  },[])
   
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(todos))
  },[todos])


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
            <TodoList todos={todos}/>
          </tbody>
        </table>
     </div>
  );
}

export default App;
