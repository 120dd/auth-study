import { combineReducers } from "redux";
import { authSlice } from "./authReducer/authSlice";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root' ,
    version: 1 ,
    storage ,
    whitelist: ['authReducer']
}

const rootReducer = combineReducers({
    authReducer: authSlice.reducer ,
})

export const persistedReducer = persistReducer(persistConfig , rootReducer);
