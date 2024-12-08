import React from 'react';

const TodoListItem = ({ todo, onRemoveTodo }) => {
    if (!todo || !todo.title || !todo.due) {
        return null;
    }
    
    return (
        <li className='flex justify-between items-center p-2 border-b border-gray-200'>
        <a href={todo.url}>{todo.title}</a>
        <span>{todo.due}</span>
        <button
            type="button"
            className='bg-red-500 text-white p-1 rounded-md hover:bg-red-700'
            onClick={() => onRemoveTodo(todo.id)}
        >
            Remove
        </button>
    </li>
    )
};

export default TodoListItem;
