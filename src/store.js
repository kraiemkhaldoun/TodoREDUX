import { createStore, combineReducers } from "redux";
import InputReducer from "./Reducers/InputReducer";
import TodoListReducer from "./Reducers/Todolist";


const Store = createStore(combineReducers({
input : InputReducer , 
 tab : TodoListReducer
}))



export default Store