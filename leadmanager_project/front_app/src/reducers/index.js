// This is a root reducer
import { combineReducers } from "redux";
import leads from "./leads";

export default combineReducers({
  leadReducer: leads
});
