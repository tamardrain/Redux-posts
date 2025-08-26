import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from './todosSlice';

const AddTodoForm = () => {
    //useDispatch-כשאני רוצה לעדכן ולשלוח לסטור משהו אשתמש ב-
    const dispatch=useDispatch();
    //useSelector-כשאני רוצה לייבא מידע מהסטור (בעצם מהסלייסים) נשתמש ב-
    const user=useSelector(state=>state.users.currentUser);
    const [title, setTitle] = useState("");
    //פונקציה שמבצעת דברם טכניים שקשורים לתצוגה- לחיצת כפתור וכו
    const addclicked= ()=>{
        const newTodo={
            //useSelector-שימוש בערך שבא מהסטור עי ה 
            userId: user.id,
            id:0,
            title: title,
            completed: false
        };
        // מחכה לקבל ממני לאיזה פונקציה בסטור אני רוצה לשלוח ובסוגריים מה לשלוח לה מהקומפוננטה
        dispatch(addTodo(newTodo));

    }

    return (
        <form>
            <input type='text' placeholder='title' value={title} onChange={(e) => { setTitle(e.target.value) }} />
            <button type='button' onClick={addclicked()}>הוסף משימה</button>
    </form>
    )
}

export default AddTodoForm