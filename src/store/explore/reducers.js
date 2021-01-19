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
    case "explore/favoriteChecked": {
      const favoritesWithData = action.payload;
      console.log("this is favorite with data", favoritesWithData);
      return favoritesWithData;
    }

    default: {
      return state;
    }
  }
};
