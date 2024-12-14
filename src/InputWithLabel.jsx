import React, { useEffect, useRef } from "react";

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
                className="w-[400px] p-1 rounded-sm bg-gray-100 border border-gray-300"
            />
        </div>
    )
};

export default InputWithLabel;