import dataReducer from "./Reducer/todoSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistDataConfig = {
  key: "todo",
  storage,
};
const persistedDataReducer = persistReducer(persistDataConfig, dataReducer);

const Store = configureStore({
  reducer: combineReducers({
    todo: persistedDataReducer,
  }),
});
export default Store;
export const persistor = persistStore(Store);
