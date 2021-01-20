import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import explore from "./explore/reducers";
import favoriteStats from "./favoriteStats/reducers";

export default combineReducers({
  appState,
  user,
  explore,
  favoriteStats,
});
