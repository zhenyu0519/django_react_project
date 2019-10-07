// This is a root reducer
import { combineReducers } from "redux";
import leads from "./leads";
import errors from "./error";
import messages from "./messages"

export default combineReducers({
  leadReducer: leads,
  errorReducer: errors,
  messageReducer: messages,
});
