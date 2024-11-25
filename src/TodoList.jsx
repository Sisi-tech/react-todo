const TodoList = ({ todoList }) => {
  return (
    <ul className="flex flex-col gap-2 text-lg">
      {todoList.length > 0 ? (
        todoList.map((item, index) => (
          <li key={item.id || index} className="hover:shadow-xl shadow-gray-400 p-2">
            <span>{index + 1}.</span>
            <a href={item.url} alt={item.title} className="font-bold">
              {item.title}
            </a>
            <span> -- due {item.due}</span>
          </li>
        ))
      ) : (
        <li className="text-gray-500">No Todo added yet!</li>
      )}
    </ul>
  );
};

export default TodoList;

