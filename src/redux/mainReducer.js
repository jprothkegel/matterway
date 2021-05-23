import { combineReducers } from "redux";
import bookReducer from "./slices/bookSlice";
import amazonReducer from "./slices/amazonSlice";

const MainReducer = combineReducers({
  bookReducer,
  amazonReducer,
});

export default MainReducer;
