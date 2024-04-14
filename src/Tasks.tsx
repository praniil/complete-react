import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Store from './store'
import RootReducer from './Reducer'
import { addTodo } from './actions'
import { useRef } from 'react'

const Tasks = () => {
    const dispatch = useDispatch()
    const inputRef = useRef<HTMLInputElement>(null);
  
    function addNewTask() {
      if(inputRef.current){
        const task = inputRef.current.value.trim();
        if(task !== "") {
          dispatch(addTodo(task))
          inputRef.current.value = "";
        }
      }
    }
    return (
      <div className="task-component">
        <div className="add-task">
          <input
            type="text"
            placeholder="Add task here..."
            ref={inputRef}
            className="taskInput"
          />
          <button onClick={addNewTask}>Add task</button>
        </div>
      </div>
    );
}

export default Tasks