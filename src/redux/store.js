import { configureStore } from '@reduxjs/toolkit'
import { FLUSH , PAUSE , PERSIST , persistStore , PURGE , REGISTER , REHYDRATE , } from "redux-persist";
import { persistedReducer } from "./index";


const store = configureStore({
    reducer: persistedReducer ,
    middleware: ( getDefaultMiddleware ) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH , REHYDRATE , PAUSE , PERSIST , PURGE , REGISTER] ,
            } ,
        }) ,
})

let persistor = persistStore(store);

export { store , persistor };


