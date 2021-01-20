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

export const favoriteChecked = (ids) => ({
  type: "explore/favoriteChecked",
  payload: ids,
});

export const fetchExplore = (id1, id2, id3) => {
  return async (dispatch, getState) => {
    if (!id1 || !id2 || !id3) {
      return dispatch(
        setMessage("danger", true, "You must provide 3 YouTube ids")
      );
    }

    try {
      const response = await Axios.get(
        `${apiUrl}/explore/${id1}/${id2}/${id3}`
      );
      console.log("response from actions explore", response.data);
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
    console.log("user token", token);
    console.log("this is youtube id", id);
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
      console.log("response from save favorite", response.data.data);
      dispatch(favoriteCreated(response.data.data));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const favoriteCheck = () => {
  return async (dispatch, getState) => {
    const token = selectToken(getState());
    try {
      const response = await Axios.get(`${apiUrl}/favoriteCheckAndUpdate`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("response from action check favorites", response);
      dispatch(favoriteChecked(response.data.favoriteWithSubscriber));
    } catch (error) {
      console.log(error.message);
    }
  };
};
