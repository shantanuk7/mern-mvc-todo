import React, { useState, useEffect } from 'react';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const API_URL = 'http://localhost:3000/api/todos';

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setTodos(data);
      } catch (err) {
        console.error("Error fetching todo list items:", err);
      }
    };
    fetchTodos();
  }, []);

  const handleAddTodo = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ task: input })
      });
      
      const newTodo = await response.json();
      setTodos([newTodo, ...todos]);
      setInput('');
    } catch (err) {
      console.error("Error adding todo item:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
      });

      if (!response.ok) throw new Error('Failed to delete');
      
      setTodos(todos.filter(todo => todo._id !== id));
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  return (
    <div>
      <header>
        <h2>MVC DEMO - Todo List App</h2>
      </header>

      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            <span>{todo.task}</span>
            <button 
              onClick={() => handleDelete(todo._id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;