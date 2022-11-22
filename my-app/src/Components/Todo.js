import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import style from './todo.module.css';

const Todo = (props) => {
    const { title, des } = props.todo;
    const { id } = props;

    const handleClick = (id) => {
        props.onRemoveTodo(id)
    }

    return (
        <article className={style.todo}>
            <div>
                <h3>{title}</h3>
                <p>{des}</p>
            </div>
            <div>
                <button onClick={() => handleClick(id)}>
                    <FaTrashAlt />
                </button>
            </div>
        </article>
    )
}

export default Todo;