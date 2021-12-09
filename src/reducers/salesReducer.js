const initialState = {
  salesMade: [],
};

const salesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_SALES":
      return { ...state, salesMade: [...state.salesMade, action.payload] };

    default:
      return state;
  }
};

export default salesReducer;
