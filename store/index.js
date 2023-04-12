import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cartReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const config = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  cartReducer,
});

const reducer = persistReducer(config, reducers);
export default configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
