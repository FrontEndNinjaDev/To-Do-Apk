import { useState } from 'react';


const TodoPro = () => {
    const [todos,setTodos] = useState([]);
    const [newTodo,setNewTodo] = useState({
        title : '',
        description : '',
        status : 'pending',
    });

    const handleChange = (e) =>{
        setNewTodo({...newTodo , [e.target.name] : e.target.value});
    }

    const addTodo = () =>{
        setTodos(prev => [...prev, {...newTodo, id : Date.now()}])
        setNewTodo({title : '',description:'',status:'pending'})
    }

    const deleteTodo = (id) => 
        setTodos(todos.filter(todo => todo.id !== id))


  return (
    <div className="App">
      <h1 style={{fontWeight:'bolder'}}>To-Do App</h1>

     
      <div className="todo-form">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newTodo.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newTodo.description}
          onChange={handleChange}
        />
        <select
          name="status"
          value={newTodo.status}
          onChange={handleChange}
        >
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
        <button onClick={addTodo}>Add To-Do</button>
      </div>

      {/* Display To-Dos */}
      <div className="todo-list">
        {todos.map((todo) => (
          <div key={todo.id} className="todo-item">
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <p>Status: {todo.status}</p>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TodoPro