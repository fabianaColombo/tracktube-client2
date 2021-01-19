import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import explore from "./explore/reducers";

export default combineReducers({
  appState,
  user,
  explore,
});
