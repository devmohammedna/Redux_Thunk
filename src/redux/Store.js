import {applyMiddleware, combineReducers, createStore} from "redux";

import {itemReducer, listReducer} from "./list/Reducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
    list:listReducer,
    item:itemReducer
})


export const store=createStore(
    reducers,
    applyMiddleware(thunk))

    export const dispatch=store.dispatch