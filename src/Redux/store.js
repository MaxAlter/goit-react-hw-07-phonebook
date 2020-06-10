import { combineReducers } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import contactsReducer from "./reducers/contactReducer/contactsReducer";
import filterReducer from "./reducers/filterReducer/filterReducer";

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware()],
});

export default store;
