import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [newItem, setNewItem]  = useState("");
  const [todos, setTodos] = useState([]);

  // function handleSubmit(e)
  // {
  //   e.preventDefault();
  //   setTodos(currentTodos=>{return[...todos, {id:crypto.randomUUID(), title:newItem, completed:false}]})
  // }

    function handleSubmit(e)
    {
      e.preventDefault();
      setTodos((currentTodos)=>{
        return[...todos, {id:crypto.randomUUID(), title:newItem, completed:false}]
      })
      setNewItem("");
    }

    function toggleTodo(id, completed)
    {
        setTodos((currentTodos)=>{
          return(
            currentTodos.map((todo)=>{
              if(todo.id === id)
              {
                return{...todo, completed}
              }

              return todo;
            })
          )
        })
    }

    function deleteTodo(id)
    {
      setTodos((currentTodos)=>{
        return currentTodos.filter((todo)=>{todo.id!==id})
      })
    }


  console.log(todos);

  return (
    <>
      <form onSubmit={handleSubmit} className='new-item-form'>
        <div className='form-row'>
          <label htmlFor="item">New Item</label>
          <input value={newItem} type="text" id='item' onChange={e=>setNewItem(e.target.value)}/>
        </div>
        <button className='btn'>Add</button>
      </form>

      <form action="" className="new-item-form">
        <h1 className='header'>ToDoList</h1>
        <ul className='list'>
          
          {todos.map((todo)=>{
              return(
                <li key={todo.id}>
                  <label>
                    <input type="checkbox" checked={todo.completed} onChange={e=>{toggleTodo(todo.id, e.target.checked)}}/>
                    {todo.title}
                  </label>
                  <button className='btn btn-danger' onClick={()=>{deleteTodo(todo.id)}}>Delete</button>
                </li>
              )
              
          })}

        </ul>

      </form>
    </>
  )
}

export default App
