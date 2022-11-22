import React, { useState } from "react";
import style from './home.module.css';
import NewTodo from "./NewTodo";
import Todos from "./Todos";
import { v4 as uuidv4 } from 'uuid';

const Home = () => {
    const [todos, setTodos] = useState([]);

    // Add new todo
    const handleAddTodo = (todo) => {
        setTodos((prevTodos) => {
            return [...prevTodos,{id: uuidv4(), todo}]
        })
    }

    // Delete a todo
    const handleRemoveTodo = (id) => {
        setTodos((prevTodos) => {
            const filterTodos = prevTodos.filter((todo) => todo.id !== id);
            return filterTodos;
        })
    }

    return (
        <div className={style.container}>
            <h1 className={style.heading}>Todo App</h1>
            <NewTodo onAddTodo={handleAddTodo} />
            {todos && <Todos todos={todos} onRemoveTodo={handleRemoveTodo} />}
        </div>
    )
}

export default Home;