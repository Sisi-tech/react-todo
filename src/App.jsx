import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function useSemiPersistentState() {
  // Initialize state from localStorage if available
  const [todoList, setTodoList] = useState(() => {
    // retrieve the savedTodoList from localStorage
    const savedTodoList = localStorage.getItem('savedTodoList');
    // if savedTodoList exists, parse it as an array, otherwise default to an empty array
    return savedTodoList ? JSON.parse(savedTodoList) : [];
  });

  // save the todoList to localStorage whenever it changes
  useEffect(() => {
    // convert todoList to a string before saving it to localStorage
    localStorage.setItem('savedTodoList', JSON.stringify(todoList));
  }, [todoList]);

  return [todoList, setTodoList];
}

function App() {

  const [todoList, setTodoList] = useSemiPersistentState();

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  }

  return (
    <div className="w-full flex flex-col justify-center items-center p-10 gap-4">
      <h2 className='text-2xl font-serif font-bold'>Todo List</h2>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} />
    </div>
  )
}

export default App
