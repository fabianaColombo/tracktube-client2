import { apiUrl } from "../../config/constants";
import Axios from "axios";
import { selectToken } from "../user/selectors";

export const favoriteStatsFectched = (favorites) => ({
  type: "favorites/favoriteStats",
  payload: favorites,
});

export const fetchFavoriteStats = () => {
  return async (dispatch, getState) => {
    const token = selectToken(getState());
    //console.log("user token", token);
    //console.log("this is youtube id", id);
    try {
      const response = await Axios.get(`${apiUrl}/favoriteChannels`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(
        "response from save favorite",
        response.data.favoriteChannelsFromAPI
      );
      dispatch(favoriteStatsFectched(response.data.favoriteChannelsFromAPI));
    } catch (error) {
      console.log(error.message);
    }
  };
};
