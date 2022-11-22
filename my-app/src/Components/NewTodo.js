import React, { useState } from "react";
import style from './newtodo.module.css';

const NewTodo = (props) => {
    const [todo, setTodo] = useState({title: '', des: ''});
    const { title, des } = todo;

    const handleChange = (event) => {
        setTodo((oldTodo) => {
            return{...oldTodo, [event.target.name]: event.target.value}
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onAddTodo(todo);
        setTodo({title: '', des: ''});
    }

    return (
        <div className={style.form}>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title : </label>
                    <input type="text" value={title} onChange={handleChange} name="title" id="title" required />
                </div>
                <div>
                    <label htmlFor="des">Description : </label>
                    <textarea type="text" value={des} onChange={handleChange} name="des" id="des" cols="30" rows="5" required />
                </div>
                <div className={style.btn}>
                    <button type="submit">Add Todo</button>
                </div>
            </form>
        </div>
    )
}

export default NewTodo;