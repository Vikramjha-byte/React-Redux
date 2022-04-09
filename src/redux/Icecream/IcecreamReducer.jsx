import { BUY_ICECREAM } from "./IcecreamType";

const initialState = {
    numOfIcecream: 20,
};

const iceCreamReducer = (state = initialState, action) => {
    if (state.numOfIcecream > 0) {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIcecream: state.numOfIcecream - 1,
      };
    default:
      return state;
  }
}else{
    console.log("Icecream not available");
    return {
        ...state,
      numOfIcecream: (state.numOfIcecream = 0),
      
    };
}
};

export default iceCreamReducer;
