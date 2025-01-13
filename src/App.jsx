import { useState } from "react";
import "./styles.css";

export default function App(){
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([]);

  function handleSubmit(e){
    e.preventDefault() //this prevents the page from refreshing.

    setTodos((currentTodos)=>{
      return[
        ...currentTodos,
        {id: crypto.randomUUID(), title: newItem, completed:false}
      ]
    })

    setNewItem("");
  }

 function toggleTodo(id, completed){
   setTodos((currentTodos)=>{
     return currentTodos.map((todo)=>{
       if(todo.id === id){
         return {...todo, completed}
       }

       return todo
      })
    })
 }

 function deleteTodo(id){
  setTodos(currentTodos =>{
    return currentTodos.filter((todo) => todo.id !== id)
    })
  }
  
  return (
  <>
  <div className="container">
    <div>
    <form onSubmit={handleSubmit} className="new-item-form"> 
      <div className="form row">
          <label htmlFor="item text-center"><h2>New Item</h2></label>
          <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item" className = "my-2" />
          <button className="addBtn btn-success">Add Item</button>
        
      </div>
    </form>
    </div>
    <div>
      <h1 className="header">To-Do List</h1>
      <ul className="list">
        {/* this is where we will map over the todos array and display each item; and anything inside braces will run as javascript code*/}
        {todos.length === 0 && "No Todos"}
        {todos.map(todo =>{
          return (
            <li key={todo.id} className="my-2">
              <label>
                <input type="checkbox" checked={todo.completed} onChange={e => toggleTodo(todo.id, e.target.checked)} className="mx-1 mt-1"/>
                {todo.title}
              </label>
              <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger mx-1">Delete</button>
            </li>
          )
        })}  
        
        </ul>
    </div>
  </div>
  </>
  )
};

