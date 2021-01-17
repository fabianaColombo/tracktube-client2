import { apiUrl } from "../../config/constants";
import Axios from "axios";

export const exploreFetched = (channels) => ({
  type: "explore/exploreFetched",
  payload: channels,
});

export const fetchExplore = (id1, id2, id3) => {
  return async (dispatch, getState) => {
    try {
      //console.log("ids in action", { id1, id2, id3 });
      const response = await Axios.get(
        `${apiUrl}/explore/${id1}/${id2}/${id3}`
      );
      console.log("response from actions explore", response.data);
      dispatch(exploreFetched(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};
