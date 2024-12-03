import React from 'react';
import { useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {
  const [newTodo, setNewTodo] = useState("");

  return (
    <div className="w-full flex flex-col justify-center items-center p-10 gap-4">
      <h2 className='text-2xl font-serif font-bold'>Todo List</h2>
      <AddTodoForm onAddTodo={setNewTodo}/>
      <p>{newTodo}</p>
      <TodoList />
    </div>
  )
};

export default App
