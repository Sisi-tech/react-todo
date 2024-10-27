
const TodoListItem = (props) => {
    const { id, title, url, due } = props.todo;
    return (
        <li className="hover:shadow-xl shadow-gray-400 p-2">
            <span>{id + 1}. </span>
            <a href={url} alt={title} className="font-bold">{title}</a>
            <span> -- due {due}</span>
        </li>
    );
};

export default TodoListItem; 