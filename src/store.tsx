import RootReducer from "./Reducer";
import taskReducer from "./Reducer/taskReducer";
import { configureStore } from "@reduxjs/toolkit";

const Store = configureStore({
    reducer: RootReducer
})

export type RootState = ReturnType<typeof RootReducer>;
export default Store