import { combineReducers } from "redux";
import cakeReducer from "./cakes/CakeReducer";
import iceCreamReducer from "./Icecream/IcecreamReducer";
import userReducer from "./user/UserReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: iceCreamReducer,
  user: userReducer,
});
export default rootReducer;

//Here , I am combining the reducers as create store is taking only one parameters  and then exporting it to use in store component.
