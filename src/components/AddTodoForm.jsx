import { useState } from 'react';
import InputWithLabel from './InputWithLabel';
import styles from './TodoListItem.module.css';
import PropTypes from 'prop-types';

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
        <form onSubmit={handleAddTodo} className="flex flex-col gap-4 bg-cyan-50 w-100%] p-10 justify-center items-center shadow-md rounded-md">
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
            <button type="submit" className={`${styles.button}`}>
                Add
            </button>
        </form>
    )
}

AddTodoForm.propTypes = {
    onAddTodo: PropTypes.func.isRequired,
};

export default AddTodoForm; 