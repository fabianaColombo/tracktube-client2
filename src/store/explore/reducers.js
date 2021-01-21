const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case "explore/exploreFetched": {
      const data = action.payload;
      //console.log("this is the payload of explore", data);
      return data;
    }
    case "explore/saveFavorite": {
      const newFavorite = action.payload;
      //console.log("this is new favorite", newFavorite);
      return newFavorite;
    }

    default: {
      return state;
    }
  }
};
