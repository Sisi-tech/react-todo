import { useState } from 'react';

const AddTodoForm = ({ onAddTodo }) => {
    const [todoTitle, setTodoTitle] = useState("");
    const [url, setUrl] = useState("");
    const [dueDate, setDueDate] = useState("");
    const handleTitleChange = (e) => {
        const newTodoTitle = e.target.value 
        setTodoTitle(newTodoTitle)
    }
    const handleUrlChange = (e) => {
        setUrl(e.target.value)
    }
    const handleDueDate = (e) => {
        setDueDate(e.target.value);
    }

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
            <div className="flex gap-2 items-center">
                <label htmlFor="todoTitle">Title:</label>
                <input type="text" id="todoTitle" value={todoTitle} onChange={handleTitleChange} className="w-[400px] p-1 rounded-sm bg-gray-100 border border-gray-300" />
            </div>
            <div className="flex gap-2 items-center">
                <label htmlFor="url">URL:</label>
                <input type="text" id="url" value={url} onChange={handleUrlChange} className="w-[400px] p-1 rounded-sm bg-gray-100 border border-gray-300" />
            </div>
            <div className="flex gap-2 items-center">
                <label htmlFor="due">Due:</label>
                <input type="text" id="due" value={dueDate} onChange={handleDueDate} className="w-[400px] p-1 rounded-sm bg-gray-100 border border-gray-300" />
            </div>
            <button type="submit" className="bg-gray-100 p-1 pl-4 pr-4 rounded-full hover:bg-gray-300">
                Add
            </button>
        </form>
    )
}

export default AddTodoForm; 