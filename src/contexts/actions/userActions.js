import { SET_USER } from "../types";

import axios from "axios";

const setAuthorizationHeader = (token) => {
  const FBIdToken = `Bearer ${token}`;
  localStorage.setItem("FBIdToken", FBIdToken);
  axios.defaults.headers.common["Authorization"] = FBIdToken;
};

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

export const signupUser = async (
  dispatch,
  handle,
  email,
  password,
  confirmPassword
) => {
  const res = await axios.post(
    "https://europe-west1-code-quizzer.cloudfunctions.net/api/signup",
    {
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      handle: handle,
    }
  );
  setAuthorizationHeader(res.data.token);

  dispatch(getUserData(dispatch));
};

export const userPassedTest = async () => {
  axios.post("https://europe-west1-code-quizzer.cloudfunctions.net/api/passed");
};
