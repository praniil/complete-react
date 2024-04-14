import taskReducer from "./Reducer/taskReducer";
import { configureStore } from "@reduxjs/toolkit";

const Store = configureStore({
    reducer: {
        tasks: taskReducer
    }
})

export default Store