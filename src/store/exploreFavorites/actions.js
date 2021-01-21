import { apiUrl } from "../../config/constants";
import Axios from "axios";
import { selectToken } from "../user/selectors";

export const favoriteChecked = (ids) => ({
  type: "exploreFavorites/favoriteChecked",
  payload: ids,
});

export const favoriteCheck = () => {
  return async (dispatch, getState) => {
    const token = selectToken(getState());
    try {
      const response = await Axios.get(`${apiUrl}/favoriteCheckAndUpdate`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      //console.log("response from action check favorites", response);
      dispatch(favoriteChecked(response.data.favoriteWithSubscriber));
    } catch (error) {
      console.log(error.message);
    }
  };
};
