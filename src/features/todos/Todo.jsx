import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteTodo } from './todosSlice';


const Todo = ({userId,id,title,completed}) => {

const dispatch=useDispatch();
const onDeleteClicked=()=>{

dispatch(deleteTodo(id));

}
  return (
    <div>
        <h2>משימה {id}📝</h2>
        <p>userId:{userId}</p>
        <p>id:{id}</p>
        <p>title:{title}</p>
        <p>completed:{completed}</p>
        <button onClick={()=>{onDeleteClicked()}}>Delete</button>

    </div>
  )
}

export default Todo