import React from "react";
import "./TodoInsert.scss"
import { MdAdd } from "react-icons/md";

const TodoInsert = () => {
    return (
        <form className = "TodoInsert">
            <input placeholder = "Input todo things..."></input>
            <button type = "submit">
                <MdAdd />
            </button>
        </form>
    );
}

export default TodoInsert;