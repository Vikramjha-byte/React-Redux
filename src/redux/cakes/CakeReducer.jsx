//Creating reducer function

import { BUY_CAKE } from "./CakesType";

const initialState = {
  numOfCakes: 10,
};

const cakeReducer = (state = initialState, action) => {
  if (state.numOfCakes > 0) {
    switch (action.type) {
      case BUY_CAKE:
        if (state.numOfCakes - action.payload > 0) {
          return {
            ...state,
            numOfCakes: state.numOfCakes - action.payload, //Adding payload here
          };
        } else {
          console.log("Sufficient Cakes not available");
          return {
            ...state,
            numOfCakes: state.numOfCakes,
          };
        }

      default:
        return state;
    }
  } else {
    console.log("Cakes not available");
    return {
      ...state,
      numOfCakes: (state.numOfCakes = 0),
    };
  }
};
export default cakeReducer;
