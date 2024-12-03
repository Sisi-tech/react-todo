import lists from './Data.jsx';
import TodoListItem from './TodoListItem.jsx';

const TodoList = () => {
    return (
      <ul className='flex flex-col gap-2 text-lg'>
        {
          lists.map((todo) => (
            <TodoListItem key={todo.id} todo={todo} />
          ))
        }
      </ul>
    );
  }

  export default TodoList; 
