import { combineReducers } from "redux";
import { operationsReducer } from "./toDoApp/reducer/Operation";

export let rootReducer = combineReducers({
    operationsReducer
});