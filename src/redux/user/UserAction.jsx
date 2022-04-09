import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "./UserActionType";

import axios from "axios";
export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

//action creator ===> thunks brings ability to return function except action, it can perform sideeffect
export const fetchUser = () => {
    return async function (dispatch) {
      dispatch(fetchUsersRequest());
     await axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          const users = res.data
          dispatch(fetchUsersSuccess(users));
        })
        .catch((error) => {
          dispatch(fetchUsersFailure(error.message));
        });
    };
  };
