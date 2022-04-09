//Importing logger as middleware after installing it using (npm install redux-logger) command
import logger from "redux-logger";

import { applyMiddleware } from "redux";

import { composeWithDevTools } from 'redux-devtools-extension';
//Store Creation

import { createStore } from "redux";

import thunk from "redux-thunk";

// import cakeReducer from "./cakes/CakeReducer";
import rootReducer from "./RootReducer";

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger,thunk))); //Here i am passing the root reducer which we have created in RootReducer component and combined cakeReducer with iceCreamReducer

export default store;
