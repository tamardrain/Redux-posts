import { createSlice, current } from '@reduxjs/toolkit'


//פה נשמרים הנתונים של המידע שהאפליקציה תצטרך
const initialState = {
  users:[
    {id:1,name:"aviezer",username:"ad",email:"ad@g.com"},
    {id:2,name:"tamar",username:"td",email:"td@g.com"}, 
  ],
  currentUser:null,
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    
    userLoggedIn: (state, action) => {
      state.currentUser= action.payload;
    },
    userRegisterd:(state,action)=>{
        state.users.push(action.payload);

    },
    userLoggedOut:(state,action)=>{
        state.currentUser=null;

    }
  },
})

// Action creators are generated for each case reducer function
export const {  userLoggedIn, userRegisterd, userLoggedOut } = usersSlice.actions

export default usersSlice.reducer