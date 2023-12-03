import {applyMiddleware, createStore} from "redux";
import weatherReducer from "./reducer";
import thunk from "redux-thunk";
import {logger} from "redux-logger"

export const store = createStore(
    weatherReducer, applyMiddleware(thunk, logger));