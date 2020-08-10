import { LOGIN } from "../types";

import axios from "axios";

export const loginUser = async (dispatch, email, password) => {
  const user = await axios.get(
    "https://europe-west1-code-quizzer.cloudfunctions.net/api/login"
  );

  dispatch(getUserData());
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
