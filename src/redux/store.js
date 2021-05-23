import { configureStore } from "@reduxjs/toolkit";
import MainReducer from "./mainReducer";

export default configureStore({
  reducer: MainReducer,
});
