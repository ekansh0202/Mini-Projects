import { useState } from 'react';
import Todo from './components/Todo/Todo';
import './App.css';

function App() {

  const [newTodo, setNewTodo] = useState({});
  const [todos, setTodos] = useState([]);
  const [isEdit, setIsEdit] = useState(false);

  const onHandleChange = (event) => {
    //Set the text to a todo(create new todo)
    setNewTodo({ ...newTodo, text: event.target.value });
  }

  const onHandleSubmit = () => {
    if(isEdit){
      // In this edit case newTodo will be equal to the todo which is set when we clicked edit button


      // //Logic 1 using findIndex
      // const todosCopy = [ ...todos ];
      // const currentTodoIndex = todosCopy.findIndex((todo) => todo.id === newTodo.id);
      // todosCopy[currentTodoIndex] = newTodo;
      // setTodos(todosCopy);

      //Logic 2 using map
      const updatedTodos = todos.map((todo) => {
        if(todo.id === newTodo.id){
          //This is the todo which needs to be updated
          return { ...todo, text: newTodo.text }
        }
        return todo;
      })

      setTodos(updatedTodos);
      setNewTodo({ id: '', text: ''});
      setIsEdit(false);
    }
    else{
      //In this case newTodo is a new todo

      setTodos([...todos, newTodo]);
      setNewTodo({ id: '', text: ''});
    }
  }

  const onHandleCancel = () => {
    setNewTodo({ id: '', text: ''});
    setIsEdit(false);
  }

  return (
    <div className="App">
      <input type="text" className="input" placeholder="Enter your todo" onChange={(event) => onHandleChange(event)} value={newTodo?.text} />
      <div className="buttons">
        <button className="button submit" onClick={onHandleSubmit}>{isEdit ? 'Update' : 'Submit'}</button>
        <button className="button cancel" onClick={onHandleCancel}>Cancel</button>
      </div>
      <label className="label">Double click on todo to toggle completion status</label>
      {
        todos?.map((item, index) => {
          return(
            <Todo key={index} item={item} todos={todos} setTodos={setTodos} setNewTodo={setNewTodo} setIsEdit={setIsEdit} />
          )
        })
      }
    </div>
  );
}

export default App;
