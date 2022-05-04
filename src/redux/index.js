import { combineReducers } from "redux";
import {authSlice} from "./authReducer/authSlice";

export const rootReducer = combineReducers({
    authReducer: authSlice.reducer,
})