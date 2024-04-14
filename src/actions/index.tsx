export const addTodo = ( text: string ) => {
    return{
        type: "ADD_TASK",
        payload: {
            text : text
        }
    }
}