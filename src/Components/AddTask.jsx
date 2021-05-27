import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import "../index.scss"
import { Add_Task } from './Data/Actions/Actions';

const AddTask = () => {
    const dispatch = useDispatch();
    const inputRef = useRef("");
    const submit = (e) => {
        e.preventDefault();
        dispatch(Add_Task(inputRef.current.value));
        inputRef.current.value = "";
    }

    return (
        <div className="card add">
            <form onSubmit={submit}>
                <input placeholder="Enter new Task" type="text" ref={inputRef}/>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default AddTask;