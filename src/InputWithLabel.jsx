import React, { useEffect, useRef } from "react";
import styles from './TodoListItem.module.css';

function InputWithLabel({ id, value, onChange, children }) {
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div className="flex gap-2 items-center ">
            <label htmlFor={id}>{children}:</label>
            <input
                type="text"
                id={id}
                value={value}
                onChange={onChange}
                ref={inputRef}
                className={`${styles.input}`}
            />
        </div>
    )
};

export default InputWithLabel;