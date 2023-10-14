import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";


const combinedReducers = combineReducers({
  user: userSlice,
})

const reducer = (state:any, action:any) => {
  return combinedReducers(state, action)
}

const makeStore = ({isServer}:any) => {
  if(isServer) return configureStore({reducer, middleware:[thunk]})
  else {
    const { persistStore, persistReducer, autoRehydrate } = require("redux-persist");
    const storage = require("redux-persist/lib/storage").default; 

    const persistConfig = {
      key: 'seba',
      storage,
    }

    const persistedReducer = persistReducer(persistConfig, reducer);

    const store:any = configureStore({
      reducer: persistedReducer,
      middleware: [thunk]
    })

    store.__persistor = persistStore(store);

    return store;
  }
}

export const wrapper = createWrapper(makeStore);