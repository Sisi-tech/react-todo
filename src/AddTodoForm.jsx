import { useState } from 'react';

const AddTodoForm = (props) => {
    const [todoTitle, setTodoTitle] = useState("");
    const [url, setUrl] = useState("");
    const [due, setDue] = useState("");

    const handleAddTodo = (e) => {
        e.preventDefault();

        const titleValue = e.target.elements.title.value;
        console.log("Todo Title:", titleValue);

        props.onAddTodo(titleValue);

        setTodoTitle("");
        setUrl("");
        setDue("");
    };
    return (
        <form onSubmit={handleAddTodo} className="flex flex-col gap-4 bg-cyan-50 w-[70%] p-10 justify-center items-center shadow-md rounded-md">
            <div className="flex gap-2 items-center">
                <label htmlFor="todoTitle">Title:</label>
                <input 
                    type="text" 
                    id="todoTitle"
                    name="title"
                    value={todoTitle}
                    onChange={(e) => setTodoTitle(e.target.value)}
                    className="w-[400px] p-1 rounded-sm bg-gray-100 border border-gray-300" 
                />
            </div>
            <div className="flex gap-2 items-center">
                <label htmlFor="url">URL:</label>
                <input 
                    type="text" 
                    id="url" 
                    name="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="w-[400px] p-1 rounded-sm bg-gray-100 border border-gray-300" 
                />
            </div>
            <div className="flex gap-2 items-center">
                <label htmlFor="due">Due:</label>
                <input 
                    type="text" 
                    id="due" 
                    name="due"
                    value={due}
                    onChange={(e) => setDue(e.target.value)}
                    className="w-[400px] p-1 rounded-sm bg-gray-100 border border-gray-300" 
                />
            </div>
            <button type="submit" className="bg-gray-100 p-1 pl-4 pr-4 rounded-full hover:bg-gray-300">
                Add
            </button>
        </form>
    )
}

export default AddTodoForm; 