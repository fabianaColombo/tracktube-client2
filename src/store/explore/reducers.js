const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case "explore/exploreFetched": {
      const data = action.payload;
      return data;
    }
    case "explore/saveFavorite": {
      const newFavorite = action.payload;
      return newFavorite;
    }

    default: {
      return state;
    }
  }
};
