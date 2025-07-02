import { combineReducers } from "redux";
import { createReducer } from "./createReducer";
import { getReducer } from "./getReducer";
import { updateReducer } from "./updateReducer";
import { deleteReducer } from "./deleteReducer";


export const RootReducer = combineReducers({
    create: createReducer,
    get: getReducer,
    update: updateReducer,
    delete: deleteReducer
})