
import './App.css';
import PostsList from './features/PostsList.jsx';



function App() {

 

  //על מנת שנוכל לראות תצוגה בדפדפן
//  יש להביא כאן את הקומפוננטה בצורה של תגית עם שם הקומפוננטה
  return (
    <div className="App">
      {
       <PostsList />
      }
   
    </div>
  );
}

export default App;
