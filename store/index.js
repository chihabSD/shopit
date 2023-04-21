import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cart from "./reducers/cartSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import dialog from "./reducers/DialogSlice";
import expandSidebar from "./reducers/ExpandSlice";
const config = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  cart,
  dialog, expandSidebar
});

const reducer = persistReducer(config, reducers);
export default configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
