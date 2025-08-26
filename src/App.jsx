
import './App.css';
import Todos from './features/todos/Todos';
import Login from './features/users/Login';
import {  useSelector } from 'react-redux';
function App() {

 const currentUser = useSelector(state => state.users.currentUser);

  //על מנת שנוכל לראות תצוגה בדפדפן
//  יש להביא כאן את הקומפוננטה בצורה של תגית עם שם הקומפוננטה
  return (
    <div className="App">
      {
        !currentUser?<Login /> :  <Todos />
      }
   
    </div>
  );
}

export default App;
