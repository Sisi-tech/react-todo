import React from 'react';
import TodoListItem from './TodoListItem';
import PropTypes from 'prop-types';

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

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      title: PropTypes.string.isRequired,
      url: PropTypes.string,
      due: PropTypes.string,
    })
  ).isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
};

export default TodoList;

