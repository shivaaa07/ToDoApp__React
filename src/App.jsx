import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import Form from './components/Form';
import To__Do from './components/To__Do';
import { deleteAll } from './redux/toDoApp/action/Action';

function App() {
  // const [count, setCount] = useState(0);
  let todos = useSelector((state) => state.operationsReducer);
  const dispatch = useDispatch();
  let [editFormVisibility, setEditFormVisibility] = useState(false);
  let [editToDo, setEditToDo] = useState('');
  

  let handleEditClick = (todo) => {
    setEditFormVisibility(true);
    setEditToDo(todo);
    console.log('Handle Edit fun:', todo);
  }

  let cancelUpdate = () => {
    setEditFormVisibility(false);
  }

  return (
    <>
      <div className='container'>
        <h1 className='text-uppercase'>To-Do App Using React and Redux</h1>
        <Form editFormVisibility={editFormVisibility} editToDo={editToDo} cancelUpdate={cancelUpdate}/>
        <To__Do handleEditClick={handleEditClick} editFormVisibility={editFormVisibility}/>
          {
            todos.length > 1 && (
              <button className='btn btn-danger btn-lg' onClick={()=>dispatch(deleteAll())}>Delete All</button>

            )
          }
        
      </div>
    </>
  )
}

export default App
