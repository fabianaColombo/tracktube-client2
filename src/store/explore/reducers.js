const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case "explore/exploreFetched": {
      const data = action.payload;
      console.log("this is the payload of explore", data);
      return data;
    }
    default: {
      return state;
    }
  }
};
