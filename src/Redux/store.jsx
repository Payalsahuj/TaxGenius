import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as loginreducer } from "./logindata/reducer";
const jointer=combineReducers({
    loginreducer
})

export const store=legacy_createStore(jointer,applyMiddleware(thunk)) 