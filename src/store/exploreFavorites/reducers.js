const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case "exploreFavorites/favoriteChecked": {
      const favoritesWithData = action.payload;
      //console.log("this is favorite with data", favoritesWithData);
      return favoritesWithData;
    }

    default: {
      return state;
    }
  }
};
