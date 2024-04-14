import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Store from './store'
import RootReducer from './Reducer'
import taskReducer from './Reducer/taskReducer'
import { addTodo } from './actions'
import { useRef } from 'react'
import { RootState } from './store'

const Tasks = () => {
  const dispatch = useDispatch()
  const tasks = useSelector((state: RootState) => state.tasks)
  const inputRef = useRef<HTMLInputElement>(null);

  function addNewTask() {
    if (inputRef.current !== null) {
      const tasks = inputRef.current.value
      dispatch(addTodo(tasks))
      console.log(tasks)
      inputRef.current.value = ""
    }
    else{
      return
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
      <div>
        {tasks.tasks.map((task) => (
          <li>
            {task}
          </li>
        ))}
      </div>
    </div>
  );
}

export default Tasks