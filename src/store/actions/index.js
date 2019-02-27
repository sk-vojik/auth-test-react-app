import axios from "axios";

export const FETCH_USERS_START = "FETCH_USERS_START"
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS"
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE"

export const getUsers = () => dispatch => {
  dispatch({ type: FETCH_USERS_START });
  axios
    .get("http://localhost:8000/api/users")
    // .then(function (response) {
    //   // handle success
    //   console.log(response);
    // })  
    .then(res => dispatch ({ type: FETCH_USERS_SUCCESS, payload: res.data }))
    .catch(err => dispatch ({ type: FETCH_USERS_SUCCESS}));
};

