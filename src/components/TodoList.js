import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo,  deleteTodo, clearTodos } from '../features/todoSlice';

const TodoList = () => {
  const [input, setInput] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  
  const handleClearTodos = () => {
    dispatch(clearTodos());
  };

  return (
    <div >
      <h1>To-Do List</h1>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task"
        style={{width: '500px', height: '30px', borderRadius: '15px', marginBottom: '10px'}}
      />
      <button 
        onClick={handleAddTodo}
        style={{width: '100px', height: '30px', }}
        >Add</button>
      </div>
      <div style={{ color: 'gray', fontSize: '15px'}}>
        <p >Type your task and click on Add to add to tasks</p>
        <p style={{margin: '0',padding: '0'}}>Click on the task to mark it as completed</p>
        <p style={{margin: '0',padding: '0'}}>Click on Delete to remove the task</p>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', width:'600px'}}>
            <span onClick={() => dispatch(toggleTodo(todo.id))}>{todo.text}</span>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
      <button  onClick={handleClearTodos}>
        Clear All Tasks
      </button>
    </div>
  );
};

export default TodoList;
