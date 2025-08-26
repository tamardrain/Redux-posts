import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {userLoggedIn} from "./usersSlice";

const Login = () => {
    const dispatch=useDispatch();
//ניגשתי לסטור ומשם הועברתי לסלייס ולקחתי משם את רשימת המשתמשים
const users= useSelector(state =>state.users.users)

// יש להפריד בין הפונקרציות שנכתבות בסלייס ומגיעות מהרידקס לבין הפונקציות שקשורות לתצוגה
const logginClick =()=>{
const user=users.find(u =>u.username==username && u.email==userEmail);
if(user){
alert("wellcom "+user.name)
dispatch(userLoggedIn(user));
setUsername("");
setUserEmail("");
}
else{
    alert("error by details")
    return;
}
   


}
const [username,setUsername]=useState("");
const [userEmail,setUserEmail]=useState("");

    return (
    <div>
        <h1>טופס התחברות</h1>
        <hr/>
        <form>
            <input type='text'placeholder='הכנס שם משתמש' value={username} onChange={(n)=>{setUsername(n.target.value)}}/>
            <input type='text' placeholder='הכנס מייל' value={userEmail} onChange={(e)=>{setUserEmail(e.target.value)}}/>
            <button type='button' onClick={()=>{logginClick()}}>התחבר</button>
        </form>
    </div>
  )
}

export default Login