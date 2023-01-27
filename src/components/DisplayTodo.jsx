import React from 'react';

const DisplayTodo = (props) => {
    const {todoList, setTodoList} = props

    const changeCheck = (task) => {
        task.isComplete = !task.isComplete
        setTodoList([...todoList])
    }

    const deleteHandler = (id) => {
        console.log(id)
        let updatedList = todoList.filter((task) => task.id !== id)
        console.log(updatedList)
        setTodoList(updatedList)
    }

    return (
        <div>
            <h3 className='mt-3 w-25 mx-auto'>My To-Do List: </h3>
            <ul>
                {
                    todoList.map((task) => (
                        <li>
                            <input type="checkbox" onChange={e => changeCheck(task)}/>
                            <span className={(task.isComplete)? "complete": null}>{task.text}</span>
                            <button onClick={() => deleteHandler(task.id)}>Delete Task</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default DisplayTodo;
