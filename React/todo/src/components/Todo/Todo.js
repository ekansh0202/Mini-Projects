import './Todo.css';

const Todo = ({ item, todos, setTodos, setNewTodo, setIsEdit }) => {

    const onHandleEdit = () => {
        //On edit click update the current todo
        setIsEdit(true);
        const currentTodo = todos.find((todo) => todo.id === item.id);

        //Set the todo in the parent to this todo
        setNewTodo(currentTodo);
    }

    const onHandleDelete = () => {
        //Remove this todo
        const currentTodo = todos.find((todo) => todo.id === item.id);
        const updatedTodos = todos.filter((todo) => todo.id !== currentTodo.id);
        setTodos(updatedTodos);
    }
        
    return(
        <div className="todo">
            <div className="todo-value">
            <label>{item.text}</label>
            </div>
            <div className="buttons">
                <button className="edit" onClick={onHandleEdit}>Edit</button>
                <button className="delete" onClick={onHandleDelete}>Delete</button>
            </div>
        </div>
    )
}

export default Todo;