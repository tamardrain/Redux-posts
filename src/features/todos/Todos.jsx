import React from 'react'
import Todo from "./Todo";
import { useSelector } from 'react-redux';
import AddTodoForm from './AddTodoForm';
const Todos = () => {

    const todos=useSelector(state=> state.todos.todos);
  return (
    <div>
        <h1>:המשימות שלך להיום הן📜</h1>
        {todos.map(t=><Todo userId={t.userId} id={t.id} title={t.title} completed={t.completed} />)}
       
        <AddTodoForm />
    </div>
  )
}

export default Todos