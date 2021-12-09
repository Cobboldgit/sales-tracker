const initialState = {
  customers: [],
};

const customersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CUSTOMER":
      return { ...state, customers: [...state.customers, action.payload] };

    default:
      return state;
  }
};

export default customersReducer;
