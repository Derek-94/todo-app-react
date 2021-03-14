import React, {useState, useCallback} from "react";
import "./TodoInsert.scss"
import { MdAdd } from "react-icons/md";

const TodoInsert = ({onInsert}) => {
    const [value, setValue] = useState("");

    const onChange = useCallback(e => {
        setValue(e.target.value)
    }, [])

    const onSubmit = useCallback(e => {
        onInsert(value);
        setValue("");
        e.preventDefault();
    }, [onInsert, value])

    return (
        <form className = "TodoInsert" onSubmit = {onSubmit}>
            <input 
                placeholder = "Input todo things..."
                value = {value}
                onChange = {onChange}
            ></input>
            <button type = "submit">
                <MdAdd />
            </button>
        </form>
    );
}

export default TodoInsert;