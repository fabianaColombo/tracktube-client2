const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case "exploreFavorites/favoriteChecked": {
      const favoritesWithData = action.payload;
      return favoritesWithData;
    }

    default: {
      return state;
    }
  }
};
