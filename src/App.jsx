import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

// week 8 
function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async() => {
    try {
      const response = await fetch(`https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`
        }
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      } 
      const toDosFromAPI = await response.json();
      const toDos = toDosFromAPI.records.map((todo) => {
        const newTodo = {
          id: todo.id,
          title: todo.fields.title
        }
        return newTodo
      });
      setTodoList(toDos);
    } catch (error) {
      console.log(error.message);
    }
  }

  const postTodo = async (todo) => {
    try {
      const airtableData = {
        fields: {
          title: todo,
        },
      };
      const response = await fetch(`https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
        },
        body: JSON.stringify(airtableData),
      });
      if (!response.ok) {
        throw new Error(`Error has ocurred: ${response.status}`);
      }
      const dataResponse = await response.json();
      return dataResponse;
    } catch (error) {
      console.log(error.message);
      return null;
    }
  };

  useEffect(() => {
    fetchData().finally(() => {
      setIsLoading(false);
    });
  }, [])

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

 const addTodo = async (newTodo) => {
  const response = await postTodo(newTodo.title);
  if (response) {
    const createdTodo = {
      id: response.id,
      title: response.fields.title,
    };
    setTodoList([...todoList, createdTodo]);
  }
 };

  const removeTodo = (id) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id)
    setTodoList([updatedTodoList]);
  }

  return (
    <div className="w-full flex flex-col justify-center items-center p-10 gap-4">
      <h2 className='text-2xl font-serif font-bold'>Todo List</h2>
      {
        isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <AddTodoForm onAddTodo={addTodo} />
            <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
          </>
        )
      }
    </div>
  )
}

export default App;
