import { useState } from 'react';
import InputWithLabel from './InputWithLabel';

const AddTodoForm = ({ onAddTodo }) => {
    const [todoTitle, setTodoTitle] = useState("");
    const [url, setUrl] = useState("");
    const [dueDate, setDueDate] = useState("");
    const handleTitleChange = (e) => setTodoTitle(e.target.value);
    const handleUrlChange = (e) => setUrl(e.target.value);
    const handleDueDate = (e) => setDueDate(e.target.value);

    const handleAddTodo = (e) => {
        e.preventDefault();
        if (todoTitle.trim() === "") return;
        onAddTodo({ title: todoTitle, url: url, due: dueDate})
        setTodoTitle("");
        setUrl("");
        setDueDate("");
    }
    return (
        <form onSubmit={handleAddTodo} className="flex flex-col gap-4 bg-cyan-50 w-[70%] p-10 justify-center items-center shadow-md rounded-md">
            <InputWithLabel 
                id="todoTitle"
                value={todoTitle}
                onChange={handleTitleChange}
            >
                Title
            </InputWithLabel>
            <InputWithLabel 
                id="url"
                value={url}
                onChange={handleUrlChange}
            >
                URL
            </InputWithLabel>
            <InputWithLabel 
                id="due"
                value={dueDate}
                onChange={handleDueDate}
            >
                Due
            </InputWithLabel>
            <button type="submit" className="bg-gray-100 p-1 pl-4 pr-4 rounded-full hover:bg-gray-300">
                Add
            </button>
        </form>
    )
}

export default AddTodoForm; 