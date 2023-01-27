import React, { useState } from 'react';

const ToDo = (props) => {
    const {todoList, setTodoList} = props
    
    const [task, setTask] = useState({
        text:'',
        isComplete: false
    })

    const onChangeHandler = (e) => {
        setTask(prevState => ({...prevState, [e.target.name]: e.target.value}))
    }

    const onSubmitTask = (e) => {
        e.preventDefault()
        if (task.text.length === 0) {
            return;
        } else {
            let id = crypto.randomUUID()
            let newTask = {...task, id:id}
            setTodoList([...todoList, newTask])
            setTask({
                text:'',
                isComplete: false
            })
        }
    }

    return (
        <div>
            <form onSubmit={ onSubmitTask } className='w-50 mt-3 mx-auto'>
                <label className='form-label'>Add to your To-do list: </label>
                <input className='form-control' name='text' onChange={onChangeHandler} value={task.text} type="text" />
                <button className='btn btn-primary mt-3'>Add</button>
            </form>
        </div>
    );
};

export default ToDo;
