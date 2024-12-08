import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
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
    setTodoList([...todoList, { id: uuidv4(), title: newTodo.title, url: newTodo.url, due: newTodo.due }]);
  }

  const removeTodo = (id) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id)
    setTodoList([updatedTodoList]);
  }

  return (
    //didn't replace <div> with <> fragment syntax because I used tailwindCSS to add style
    <div className="w-full flex flex-col justify-center items-center p-10 gap-4">
      <h2 className='text-2xl font-serif font-bold'>Todo List</h2>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
    </div>
  )
}

export default App
