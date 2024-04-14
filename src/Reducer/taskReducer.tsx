interface initState{
    tasks : string[]
}

const initialState : initState = {
    tasks: ['hello']
}

const taskReducer = (state = initialState, action : any) => {
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