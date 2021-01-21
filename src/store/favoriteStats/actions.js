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
    try {
      const response = await Axios.get(`${apiUrl}/favoriteChannels`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(favoriteStatsFectched(response.data.favoriteChannelsFromAPI));
    } catch (error) {
      console.log(error.message);
    }
  };
};
