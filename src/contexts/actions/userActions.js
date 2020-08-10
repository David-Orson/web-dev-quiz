import { SET_USER } from "../types";

import axios from "axios";

export const loginUser = async (dispatch, email, password) => {
  const res = await axios.post(
    "https://europe-west1-code-quizzer.cloudfunctions.net/api/login",
    {
      email: email,
      password: password,
    }
  );
  setAuthorizationHeader(res.data.token);

  dispatch(getUserData(dispatch));
};

export const getUserData = async (dispatch) => {
  const userDetails = await axios.get(
    "https://europe-west1-code-quizzer.cloudfunctions.net/api/user"
  );

  dispatch({
    type: SET_USER,
    payload: userDetails.data,
  });
};

const setAuthorizationHeader = (token) => {
  const FBIdToken = `Bearer ${token}`;
  localStorage.setItem("FBIdToken", FBIdToken);
  axios.defaults.headers.common["Authorization"] = FBIdToken;
};
