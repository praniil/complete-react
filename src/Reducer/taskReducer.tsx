import { Action } from "redux"

interface initState{
    tasks : string[]
}
interface addTodo {
    type: 'ADD_TASK', 
    payload: string
}

const initialState : initState = {
    tasks: []
}

const taskReducer = (state = initialState, action : addTodo) => {
    console.log(state)
    console.log(action.type)
    switch(action.type) {
        case 'ADD_TASK':
            return{
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        default:
            return state
    }   
}

export default taskReducer