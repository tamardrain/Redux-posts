import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos:[
     {
    userId:1,    
    id: 1,
    title: 'Finish React homework',
    completed: false,
  },
  {
    userId:5,
    id: 2,
    title: 'Install Redux in new project',
    completed: true,
  },
  ],
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    todosfeched:(state,action)=>{
        state.todos=action.payload;
    },
    addTodo:(state,action)=>{
        state.todos.push(action.payload);

    },
    deleteTodo:(state,action)=>{
        state.todos.filter(t=>t.id!=action.payload);
    },
    updateTodo:(state,action)=>{
        const newTodo=action.payload;
        const existingTodo=state.todos.find(t=>t.id==newTodo.id);
        existingTodo.title=newTodo.title
        existingTodo.completed=newTodo.completed
    }
    
    
  },
})

// Action creators are generated for each case reducer function
export const { todosfeched, addTodo, deleteTodo, updateTodo } = todosSlice.actions

export default todosSlice.reducer