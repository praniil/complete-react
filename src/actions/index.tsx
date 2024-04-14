export const addTodo = ( text: string ) : any => {
    console.log("in add todo", text)
    return{
        type: "ADD_TASK",
        payload: text
    }
}