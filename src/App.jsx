import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {

  return (
    <div className="w-full flex flex-col justify-center items-center p-10 gap-4">
      <h2 className='text-2xl font-serif font-bold'>Todo List</h2>
      <AddTodoForm />
      <TodoList />
    </div>
  )
}

export default App
