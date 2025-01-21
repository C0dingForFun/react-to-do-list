import { useState } from "react";
import React from "react";
import "./styles.css";
import Modal from "./Modal.jsx"
export default function App(){
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([]);
  const [modal, setModal] = React.useState(false)

  function handleClose(){
    setModal(false);
  }

  function handleOpen(){
    setModal(true)
  }

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
            <div className="row mt-5">
            <div className="col-6">
              <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item" className = "my-2" placeholder="~ Do the dishes"/>
            </div>
            <div className="col-6">
              <select className="mx-2">
                <option>Select Task Priority</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            </div>
          <div>
            <textarea placeholder="Task Description" className=""></textarea>
          </div>
          <button className="addBtn">Add Item</button>
      </div>
    </form>
    </div>
    <div className="my-2">
      <h1 className="header my-5">To-Dos</h1>
      <ul className="list my-4">
        {/* this is where we will map over the todos array and display each item; and anything inside braces will run as javascript code*/}
        {todos.length === 0 && "No To-Dos Yet"}
        {todos.map(todo =>{
          return (
            <li key={todo.id} className="my-5">
              <label>
                <input type="checkbox" checked={todo.completed} onChange={e => toggleTodo(todo.id, e.target.checked)} className="mx-1 mt-1"/>
                {todo.title}
              </label>
              <span>&#10031;</span>
              <button className="btn btn-primary" onClick={handleOpen}>View Description</button>
              <Modal isOpen={modal} onClose={handleClose}>
                <>
                  <h1>testing</h1>
                </>
              </Modal>
              <button className="btn btn-success mx-1">Edit</button>
              <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">Delete</button>
            </li>
          )
        })}  
        </ul>
    </div>
  </div>
  </>
  )
};

