import taskReducer from "./taskReducer";
import { combineReducers } from "redux";

//we used the combineReducers function to combine all the individual reducers into a single root reducer.
//combineReducers take all the reducer in an application as an argument


const RootReducer = combineReducers({
    tasks: taskReducer,
});

export default RootReducer