const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case "favorites/favoriteStats": {
      const data = action.payload;
      return data;
    }

    default: {
      return state;
    }
  }
};
