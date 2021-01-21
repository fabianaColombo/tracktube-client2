import { apiUrl } from "../../config/constants";
import Axios from "axios";
import { selectToken } from "../user/selectors";
import { setMessage } from "../appState/actions";

export const exploreFetched = (channels) => ({
  type: "explore/exploreFetched",
  payload: channels,
});

export const favoriteCreated = (newFavorite) => ({
  type: "explore/favoriteCreated",
  payload: newFavorite,
});

export const fetchExplore = (ids) => {
  return async (dispatch, getState) => {
    if (!ids.id1 || !ids.id2 || !ids.id3) {
      return dispatch(
        setMessage("danger", true, "You must provide 3 YouTube ids")
      );
    }

    try {
      const response = await Axios.get(
        `${apiUrl}/explore/${ids.id1}/${ids.id2}/${ids.id3}`
      );
      dispatch(exploreFetched(response.data));
    } catch (error) {
      dispatch(setMessage("danger", true, error.response.data.message));
      console.log(error);
    }
  };
};

export const saveToFavorite = (id) => {
  return async (dispatch, getState) => {
    const token = selectToken(getState());
    try {
      const response = await Axios.post(
        `${apiUrl}/saveChannelToFavorite`,
        { id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response) {
        dispatch(
          setMessage("success", true, "Your favorites were saved successfully")
        );
      }
      dispatch(favoriteCreated(response.data.data));
    } catch (error) {
      console.log(error.message);
    }
  };
};
