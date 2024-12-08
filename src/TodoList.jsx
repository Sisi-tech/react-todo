import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({ todoList, onRemoveTodo }) => {
  if (todoList.length === 0) {
    return <p>No items in the todo list.</p>;
  }
  return (
    <ul className="flex flex-col gap-2 text-lg">
      {todoList.map((todo, index) => (
        <TodoListItem 
          key={todo.id || index} 
          todo={todo} 
          onRemoveTodo={onRemoveTodo} 
        />
      ))}
    </ul>
  );
};

export default TodoList;

