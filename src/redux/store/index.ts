import reducers from "../reducer/index.js";
import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import dataSaga from "../saga/index.js";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import {  actionType } from "../../types/index.js";


const appReducer = combineReducers(reducers);

const rootReducer = (state:any, action:any) => {
  return appReducer(state, action);
};

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware({
  onError: (error: any) => {
    console.log("saga error : ", error);
  },
});
const enhancers = applyMiddleware(sagaMiddleware);

const store = createStore(persistedReducer, enhancers);
const persistor = persistStore(store);

sagaMiddleware.run(dataSaga);

export { store, persistor };