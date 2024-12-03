import lists from './Data.jsx';

const TodoList = () => {
    return (
      <ul className='flex flex-col gap-2 text-lg'>
        {
          lists.map(function(item) {
            return (
              <li key={item.id} className="hover:shadow-xl shadow-gray-400 p-2">
                <span>{item.id + 1}. </span>
                <a href={item.url} alt={item.title} className="font-bold">{item.title}</a>
                <span> -- due {item.due}</span>
              </li>
            )
          })
        }
      </ul>
    )
  }

  export default TodoList; 
