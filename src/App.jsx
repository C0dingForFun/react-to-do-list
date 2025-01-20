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
  <h1 className="header my-5">To-Do List</h1>
    <div>
    <form onSubmit={handleSubmit} className="new-item-form my-2"> 
      <div className="form row">
          <label htmlFor="item text-center"><h2>New Item</h2></label>
          <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item" className = "my-2" placeholder="~ Do the dishes"/>
          <button className="addBtn btn-success">Add Item</button>
      </div>
    </form>
    </div>
    <div className="my-2">
      <h1 className="header my-5">To-Dos</h1>
      <ul className="list my-5">
        {/* this is where we will map over the todos array and display each item; and anything inside braces will run as javascript code*/}
        {todos.length === 0 && "No To-Dos Yet"}
        {todos.map(todo =>{
          return (
            <li key={todo.id} className="my-5">
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

