import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo ,removeTodo,removeAll,editTodo} from './reduxconfig/reducer/todoSlice'

function App() {
  const dispatch = useDispatch()
  const inputRef = useRef(null);
  const addtodo = (event)=>{
     event.preventDefault();
     dispatch(addTodo(inputRef.current.value))
     inputRef.current.value = ''
  }
  const todos = useSelector(state => state.todos);
  function editItem(newTitle,id){
    const editvalue = prompt('Enter Edit value', newTitle.title);
    if(editvalue !== null){
      dispatch(editTodo({
        id : id,
        newTitle : editvalue
      }))
    }
  }
  return(
    <div className='App'>
      <h1>Todo App</h1>
      <button onClick={()=>dispatch(removeAll())}>Remove All</button>
      <form onSubmit={addtodo}>
      <input placeholder='Add Todo' type="text" name="" id="" ref={inputRef} />
      <button type='submit'>Add Todo</button>
      </form>
      {
        todos.map((items,i)=>{
          return <li key={i}>{items.title} <button onClick={()=>dispatch(removeTodo(i))}>remove</button> <button onClick={()=>editItem(items, items.id)}>Edit Item</button></li>
        })
      }
    </div>
  );
}

export default App;
