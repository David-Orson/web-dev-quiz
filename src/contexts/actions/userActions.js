import axios from "axios";
import { navigate } from "@reach/router";

import { SET_USER, PASSED_TEST } from "../types";

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
  navigate(`/`);
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
  navigate(`/`);
};

export const userPassedTest = async (dispatch) => {
  axios.post("https://europe-west1-code-quizzer.cloudfunctions.net/api/passed");
  dispatch({
    type: PASSED_TEST,
  });
};
